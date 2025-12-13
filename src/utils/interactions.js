import * as THREE from "three";

// Exporta a função para configurar a interação com os hotspots
export function setupInteraction(
  camera, // Câmera usada na cena
  overlay, // Elemento da transição overlay
  scene, // A cena
  setSphere, // Função para alterar a textura da esfera
  setHotspots, // Função para atualizar os hotspots da nova cena
  setSceneId // Função para atualizar o ID da cena atual
) {
  // Cria um raycaster para detectar interações com os hotspots
  const raycaster = new THREE.Raycaster();
  // Vetor que armazena a posição do mouse
  const mouse = new THREE.Vector2();
  // Variável para armazenar o último hotspot que estava com hover
  let previousHoveredHotspot = null;

  // Armazena a escala original de cada hotspot quando encontrado pela primeira vez
  scene.children.forEach((obj) => {
    if (obj.userData?.targetScene && !obj.userData.originalScale) {
      obj.userData.originalScale = obj.scale.clone();
    }
  });

  window.addEventListener("mousemove", (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(
      scene.children.filter(
        (obj) => obj.userData?.targetScene && obj.userData.enabled
      )
    );

    // Resetar todos os hotspots para escala original (usando a escala original armazenada)
    scene.children.forEach((obj) => {
      if (obj.userData?.targetScene) {
        if (!obj.userData.originalScale) {
          obj.userData.originalScale = obj.scale.clone();
        }
        obj.scale.lerp(obj.userData.originalScale, 0.1);
      }
    });

    if (intersects.length > 0) {
      const hotspot = intersects[0].object;

      if (!hotspot.userData.originalScale) {
        hotspot.userData.originalScale = hotspot.scale.clone();
      }

      const targetScale = new THREE.Vector3(
        hotspot.userData.originalScale.x * 1.5,
        hotspot.userData.originalScale.y * 1.5,
        hotspot.userData.originalScale.z
      );
      hotspot.scale.lerp(targetScale, 0.1);

      document.body.style.cursor = "pointer";

      if (!hotspot.userData.hoverMaterial) {
        const textureHover = new THREE.TextureLoader().load(
          "/CefetView/images/Utilitários/hotspot_azul.svg",
          (t) => {
            t.colorSpace = THREE.SRGBColorSpace;
          }
        );

        hotspot.userData.hoverMaterial = new THREE.MeshBasicMaterial({
          map: textureHover,
          transparent: true,
          alphaTest: 0.7,
          side: THREE.DoubleSide,
          premultipliedAlpha: false,
        });
      }

      // Armazena o material original antes de sobrescrever
      if (!hotspot.userData.originalMaterial) {
        hotspot.userData.originalMaterial = hotspot.material.clone();
      }

      // Aplica hover
      hotspot.material = hotspot.userData.hoverMaterial;

      // Restaura o anterior corretamente
      if (previousHoveredHotspot && previousHoveredHotspot !== hotspot) {
        if (previousHoveredHotspot.userData.isRouteHotspot) {
          previousHoveredHotspot.material =
            previousHoveredHotspot.userData.routeMaterial;
        } else {
          previousHoveredHotspot.material =
            previousHoveredHotspot.userData.originalMaterial;
        }
      }

      previousHoveredHotspot = hotspot;
    } else {
      document.body.style.cursor = "default";

      if (previousHoveredHotspot) {
        if (previousHoveredHotspot.userData.isRouteHotspot) {
          previousHoveredHotspot.material =
            previousHoveredHotspot.userData.routeMaterial;
        } else {
          previousHoveredHotspot.material =
            previousHoveredHotspot.userData.originalMaterial;
        }
        previousHoveredHotspot = null;
      }
    }
  });

  window.addEventListener("click", (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(
      scene.children.filter(
        (obj) => obj.userData?.targetScene && obj.userData.enabled
      )
    );

    if (intersects.length > 0) {
      const targetScene = intersects[0].object.userData.targetScene;

      // **NOVA LÓGICA**: apenas navega (setSceneId)
      setSceneId(targetScene);

      // NÃO disparamos userNavigated aqui
    }
  });
}
