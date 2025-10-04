import * as THREE from "three";
import { teleportTo } from "./teleport.js";

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
scene.children.filter((obj) => obj.userData?.targetScene && obj.userData.enabled)
    );

    // Resetar todos os hotspots para escala original (usando a escala original armazenada)
    scene.children.forEach((obj) => {
      if (obj.userData?.targetScene) {
        // Verifica se a escala original foi armazenada
        if (!obj.userData.originalScale) {
          obj.userData.originalScale = obj.scale.clone();
        }
        // Usa a escala original para retornar ao tamanho normal
        obj.scale.lerp(obj.userData.originalScale, 0.1); // animação suave
      }
    });

    if (intersects.length > 0) {
      const hotspot = intersects[0].object;

      // Verifica se a escala original foi armazenada
      if (!hotspot.userData.originalScale) {
        hotspot.userData.originalScale = hotspot.scale.clone();
      }

      // Animação de destaque: aumentar o hotspot baseado na sua escala original
      const targetScale = new THREE.Vector3(
        hotspot.userData.originalScale.x * 1.5,
        hotspot.userData.originalScale.y * 1.5,
        hotspot.userData.originalScale.z
      );
      hotspot.scale.lerp(targetScale, 0.1); // Animação suave com lerp

      // Trocar o cursor para pointer
      document.body.style.cursor = "pointer";

      if (!hotspot.userData.hoverMaterial) {
        const textureHover = new THREE.TextureLoader().load(
          "/images/Utilitários/hotspot_branco.svg"
        );
        hotspot.userData.hoverMaterial = new THREE.MeshBasicMaterial({
          map: textureHover,
          transparent: true,
          alphaTest: 0.7, // Remove o fundo preto tirando os pixeis com baixa opacidade
          side: THREE.DoubleSide, // Visível dos dois lados
          premultipliedAlpha: true,
        });
      }

      // Armazena o material original antes de sobrescrever
      if (!hotspot.userData.originalMaterial) {
        hotspot.userData.originalMaterial = hotspot.material.clone();
      }

      // Troca para o material hotspot branco
      hotspot.material = hotspot.userData.hoverMaterial;

      // Guarda qual foi o último hotspot com hover
      if (previousHoveredHotspot && previousHoveredHotspot !== hotspot) {
        // Restaura o anterior
        previousHoveredHotspot.material =
          previousHoveredHotspot.userData.originalMaterial;
      }

      previousHoveredHotspot = hotspot;
    } else {
      document.body.style.cursor = "default";

      if (previousHoveredHotspot) {
        // Restaura o material original salvo anteriormente
        previousHoveredHotspot.material =
          previousHoveredHotspot.userData.originalMaterial;
        previousHoveredHotspot = null;
      }
    }
  });

  window.addEventListener("click", (event) => {
    // Converte a posição do clique do mouse em coordenadas
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1; // * 2 -1 é para normalizar as coordenadas
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Define a origem e a direção do raycaster baseando no mouse e câmera
    raycaster.setFromCamera(mouse, camera);

    // Aonde tem interseção entre hotspot e raio do raycaster
    const intersects = raycaster.intersectObjects(
      // Filtra os objetos da cena (scene.children) para encontrar aqueles que possuem userData.targetScene
      scene.children.filter((obj) => obj.userData?.targetScene && obj.userData.enabled)
    );
    if (intersects.length > 0) {
      // Obtém o ID da cena de destino armazenado no userData do objeto
      const targetScene = intersects[0].object.userData.targetScene;
      // Realiza o "teleporte" de cena com a função
      teleportTo(
        targetScene,
        overlay,
        scene,
        setSphere,
        setHotspots,
        setSceneId
      );
    }
  });
}
