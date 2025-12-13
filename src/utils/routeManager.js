import { buildGraph, findShortestPath } from "./graph";
/**
 * routeManager
 * - inicializar com scene (three.js Scene) para acessar hotspots (objetos com userData.targetScene)
 * - startRoute(destination) => calcula rota (BFS) da cena atual para destino e destaca hotspot da próxima cena
 * - onUserNavigated(newSceneId) => recalcula rota a partir da nova cena (se necessário)
 *
 * Comunicação via eventos:
 * - window.dispatchEvent(new CustomEvent('startRoute', { detail: { target: 'quadra' }}))
 * - window.dispatchEvent(new CustomEvent('userNavigated', { detail: { targetScene: 'biblioteca' }}))
 *
 * Observações: quando realçar um hotspot, trocamos seu material por um material criado com a textura
 * '/CefetView/images/Utilitários/hotspot_branco.svg' (conforme solicitado). O material original é salvo
 * em hotspot.userData._originalMaterial para posterior restauração.
 */

const routeManager = (function () {
  let scene = null;
  let setHotspots = null;
  let setSphere = null;
  let setSceneId = null;

  let graph = null;
  let activeRoute = null; // array de sceneIds: ['entradaescola', 'entradameio', 'quadra']
  let finalDestination = null;
  let lastHighlighted = null; // objeto hotspot atualmente destacado (mesh)
  let routeMaterial = null;

  // ===== NOVO: CONTROLE DE ANIMAÇÃO DE "PULO" =====
  let bouncingHotspots = [];
  let bounceAnimationId = null;
  let bounceStartTime = 0;

  function init(opts = {}) {
    scene = opts.scene || null;
    setHotspots = opts.setHotspots || null;
    setSphere = opts.setSphere || null;
    setSceneId = opts.setSceneId || null;

    graph = buildGraph();

    const loader = new THREE.TextureLoader();
    const tex = loader.load(
      "/CefetView/images/Utilitários/hotspot_azul.svg",
      (t) => {
        t.colorSpace = THREE.SRGBColorSpace;
      }
    );

    routeMaterial = new THREE.MeshBasicMaterial({
      map: tex,
      transparent: true,
      alphaTest: 0.5,
      side: THREE.DoubleSide,
      premultipliedAlpha: false,
    });

    // Eventos globais para startRoute e userNavigated
    window.addEventListener("startRoute", (e) => {
      const target = e?.detail?.target;
      if (target) startRoute(target);
    });

    window.addEventListener("userNavigated", (e) => {
      const target = e?.detail?.targetScene;
      if (target) onUserNavigated(target);
    });
  }

  function getCurrentSceneId() {
    // tenta extrair do pathname: /tour/<sceneId>
    try {
      const hash = window.location.hash; // ex.: "#/tour/entradameioescola"
      const parts = hash.split("/"); // ["#", "tour", "entradameioescola"]

      return parts[parts.length - 1];
    } catch {
      return "entradaescola";
    }
  }

  function startRoute(destination) {
    finalDestination = destination;
    const start = getCurrentSceneId();
    if (!graph) graph = buildGraph();
    const path = findShortestPath(graph, start, destination);

    activeRoute = path;
    console.log("routeManager startRoute:", { start, destination, path });

    // Atualiza destaque no cenário atual
    highlightNextFrom(start);
  }

  function onUserNavigated(newSceneId) {
    // Atualiza rota recalculando a partir da nova cena
    if (!finalDestination) return;
    if (!graph) graph = buildGraph();
    const path = findShortestPath(graph, newSceneId, finalDestination);
    activeRoute = path;
    console.log("routeManager onUserNavigated:", {
      newSceneId,
      finalDestination,
      path,
    });

    // Tenta destacar (com atraso curto para garantir que hotspots tenham sido adicionados ao scene)
    setTimeout(() => {
      highlightNextFrom(newSceneId);
    }, 150);
  }

  function highlightNextFrom(sceneId) {
    // Remove destaque anterior
    restoreLastHighlighted();

    if (!activeRoute || activeRoute.length === 0) return;

    // Se não houver destino alcançável
    const idx = activeRoute.indexOf(sceneId);
    if (idx === -1 || idx === activeRoute.length - 1) {
      // current scene is not on route or is final destination
      return;
    }

    const nextScene = activeRoute[idx + 1];
    // Procura entre children da scene por objeto cujo userData.targetScene === nextScene
    if (!scene) {
      // tenta obter do global (caso infra não tenha passado)
      // (não faz nada se não conseguir)
      return;
    }

    // ===== BUSCA RECURSIVA (corrige groups) =====
    let hotspot = null;
    scene.traverse((obj) => {
      if (!hotspot && obj.userData && obj.userData.targetScene === nextScene) {
        hotspot = obj;
      }
    });

    if (hotspot) {
      // salva material original, se não salvo
      if (!hotspot.userData.originalMaterial) {
        hotspot.userData.originalMaterial = hotspot.material.clone();
      }

      // aplica material de rota
      hotspot.material = routeMaterial;

      // Marca como hotspot de rota
      hotspot.userData.isRouteHotspot = true;
      hotspot.userData.routeMaterial = routeMaterial;

      lastHighlighted = hotspot;

      // Inicia animação de pulo
      startBounce([hotspot]);
    }
  }

  function restoreLastHighlighted() {
    stopBounce();

    if (lastHighlighted) {
      try {
        if (
          lastHighlighted.userData &&
          lastHighlighted.userData.originalMaterial
        ) {
          lastHighlighted.material = lastHighlighted.userData.originalMaterial;
        }
      } catch (e) {
        // ignore
      }
      lastHighlighted = null;
    }
  }

  // ===== ANIMAÇÃO DE PULO =====
  function startBounce(hotspots) {
    stopBounce();

    bouncingHotspots = hotspots;
    bounceStartTime = performance.now();

    bouncingHotspots.forEach((hs) => {
      if (!hs.userData.originalPosition) {
        hs.userData.originalPosition = hs.position.clone();
      }
    });

    function animate(time) {
      const elapsed = (time - bounceStartTime) / 1000;

      bouncingHotspots.forEach((hs) => {
        if (!hs.userData.originalPosition) return;

        hs.position.y =
          hs.userData.originalPosition.y + Math.sin(elapsed * 4) * 0.5; // altura e velocidade do pulo
      });

      bounceAnimationId = requestAnimationFrame(animate);
    }

    bounceAnimationId = requestAnimationFrame(animate);
  }

  function stopBounce() {
    if (bounceAnimationId) {
      cancelAnimationFrame(bounceAnimationId);
      bounceAnimationId = null;
    }

    bouncingHotspots.forEach((hs) => {
      if (hs.userData.originalPosition) {
        hs.position.copy(hs.userData.originalPosition);
      }
    });

    bouncingHotspots = [];
  }

  // Expõe funções úteis para debug/se uso direto
  return {
    init,
    startRoute,
    onUserNavigated,
    _getActiveRoute: () => activeRoute,
    _getFinalDestination: () => finalDestination,
    _restore: restoreLastHighlighted,
    _setSceneRef: (s) => (scene = s),
  };
})();

// precisamos de THREE em módulo — carregar globalmente ou importar.
import * as THREE from "three";

export default routeManager;
