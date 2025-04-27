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

  window.addEventListener("click", (event) => {
    // Converte a posição do clique do mouse em coordenadas
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1; // * 2 -1 é para normalizar as coordenadas
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Define a origem e a direção do raycaster baseando no mouse e câmera
    raycaster.setFromCamera(mouse, camera);

    // Aonde tem interseção entre hotspot e raio do raycaster
    const intersects = raycaster.intersectObjects(
      // Filtra os objetos da cena (scene.children) para encontrar aqueles que possuem userData.targetScene
      scene.children.filter((obj) => obj.userData?.targetScene)
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
