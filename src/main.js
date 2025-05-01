import { setupScene } from "./js/setupScene.js";
import { loadScene } from "./js/sceneLoader.js";
import { setupInteraction } from "./js/interactions.js";

let currentSphere = null;
let currentHotspots = [];
let currentSceneId = "entradaescola"; // Cena Inicial

// Apagando a antiga esfera e colocando uma nova no lugar
function setSphere(newSphere) {
  if (currentSphere) {
    scene.remove(currentSphere);
    currentSphere.geometry.dispose();
    currentSphere.material.dispose();
  }
  currentSphere = newSphere;
}

// Apagando os antigos Hotspots e colocando novos no lugar
function setHotspots(newHotspots) {
  currentHotspots.forEach((hot) => {
    scene.remove(hot);
    hot.geometry.dispose();
    hot.material.dispose();
  });
  currentHotspots = newHotspots;
}

// Define o ID da cena atual a ser exibida ou manipulada
function setSceneId(id) {
  currentSceneId = id;
}

// Inicializa a cena 3D retornando os elementos utilizados
const { scene, camera, renderer, controls } = setupScene();

// Função de carregar a cena e colocando a animação de Overlay
loadScene(currentSceneId, scene, setSphere, setHotspots);
setupInteraction(
  camera,
  document.getElementById("transitionOverlay"),
  scene,
  setSphere,
  setHotspots,
  setSceneId
);

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  controls.update();

  currentHotspots.forEach((hotspot) => {
    hotspot.lookAt(camera.position);
  });
}
animate();
