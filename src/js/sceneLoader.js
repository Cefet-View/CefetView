import * as THREE from "three";
import { scenesData } from "./scenesData.js";

const textureLoader = new THREE.TextureLoader();

export function loadScene(sceneId, scene, setSphere, setHotspots) {
  const sceneData = scenesData[sceneId];

  // Carrega esfera 360
  textureLoader.load(sceneData.image, (texture) => {
    // Converte o espaço de cor da textura para linear
    texture.colorSpace = THREE.SRGBColorSpace;

    const sphereGeometry = new THREE.SphereGeometry(500, 60, 40);
    sphereGeometry.scale(-1, 1, 1);

    const sphereMaterial = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      opacity: 1,
    });

    const newSphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    setSphere(newSphere);
    scene.add(newSphere);
  });

  // Hotspots
  const hotspots = Array.isArray(sceneData.hotspot)
    ? sceneData.hotspot
    : [sceneData.hotspot];

  const loadedHotspots = [];

  hotspots.forEach((hsData) => {
    textureLoader.load(hsData.image, (hotTexture) => {
      hotTexture.minFilter = THREE.LinearMipMapLinearFilter;
      hotTexture.magFilter = THREE.LinearFilter;

      const planeGeometry = new THREE.PlaneGeometry(20, 20);
      const planeMaterial = new THREE.MeshBasicMaterial({
        map: hotTexture,
        transparent: true,
        alphaTest: 0.7,
        side: THREE.DoubleSide,
        premultipliedAlpha: true,
      });

      const hotspot = new THREE.Mesh(planeGeometry, planeMaterial);
      hotspot.position.copy(hsData.position);
      hotspot.scale.copy(hsData.scale);
      hotspot.userData.targetScene = hsData.targetScene;

      loadedHotspots.push(hotspot);
      scene.add(hotspot);
    });
  });

  setHotspots(loadedHotspots);
}
