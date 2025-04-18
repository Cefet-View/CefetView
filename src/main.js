import { setupScene } from "./js/setupScene.js";
import { loadScene } from "./js/sceneLoader.js";
import { setupInteraction } from "./js/interactions.js";

let currentSphere = null;
let currentHotspots = [];
let currentSceneId = "d308";

function setSphere(newSphere) {
  if (currentSphere) {
    scene.remove(currentSphere);
    currentSphere.geometry.dispose();
    currentSphere.material.dispose();
  }
  currentSphere = newSphere;
}

function setHotspots(newHotspots) {
  currentHotspots.forEach((hot) => {
    scene.remove(hot);
    hot.geometry.dispose();
    hot.material.dispose();
  });
  currentHotspots = newHotspots;
}

function setSceneId(id) {
  currentSceneId = id;
}

const { scene, camera, renderer, controls } = setupScene();

loadScene(currentSceneId, scene, setSphere, setHotspots);
setupInteraction(
  camera,
  currentHotspots,
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
