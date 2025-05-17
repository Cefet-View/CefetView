import { loadScene } from "./sceneLoader.js";

export function teleportTo(
  targetSceneId, // O id da cena que irá "teleportar" a câmera
  overlay, // Elemento da transição overlay
  scene, // A cena
  setSphere, // Função para alterar a textura da esfera
  setHotspots, // Função para atualizar os hotspots da nova cena
  setSceneId // Função para atualizar o ID da cena atual
) {
  // Inicia o efeito de fade-in: deixa o overlay visível
  overlay.style.opacity = 1;

  setTimeout(() => {
    // Carrega os dados da nova cena e atualiza a esfera e os hotspots
    loadScene(targetSceneId, scene, setSphere, setHotspots);
    // Atualiza o ID da cena atual
    setSceneId(targetSceneId);

    // Aguarda antes de iniciar o fade-out (sumir o overlay)
    setTimeout(() => {
      overlay.style.opacity = 0;
    }, 300);
  }, 1000);
}
