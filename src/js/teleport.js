import { loadScene } from "./sceneLoader.js";

export function teleportTo(
  targetSceneId,
  overlay,
  scene,
  setSphere,
  setHotspots,
  setSceneId
) {
  overlay.style.opacity = 1;

  setTimeout(() => {
    loadScene(targetSceneId, scene, setSphere, setHotspots);
    setSceneId(targetSceneId);

    setTimeout(() => {
      overlay.style.opacity = 0;
    }, 300);
  }, 1000);
}
