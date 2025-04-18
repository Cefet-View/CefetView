import * as THREE from "three";
import { teleportTo } from "./teleport.js";

export function setupInteraction(
  camera,
  currentHotspots,
  overlay,
  scene,
  setSphere,
  setHotspots,
  setSceneId
) {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  window.addEventListener("click", (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(currentHotspots);

    if (intersects.length > 0) {
      const targetScene = intersects[0].object.userData.targetScene;
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
