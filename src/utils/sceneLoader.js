import * as THREE from "three";
import { scenesData } from "./scenesData.js";

// Cria um carregador de texturas
const textureLoader = new THREE.TextureLoader();

// Carrega os dados de uma cena e renderiza a esfera com textura e os hotspots
export function loadScene(sceneId, scene, setSphere, setHotspots) {
  const sceneData = scenesData[sceneId];

  // Carrega a textura da cena
  textureLoader.load(sceneData.image, (texture) => {
    // Define o espaço de cor correto para corrigir erro branquiamento
    texture.colorSpace = THREE.SRGBColorSpace;

    // Cria esfera e inverte para poder ser vista de dentro
    const sphereGeometry = new THREE.SphereGeometry(500, 60, 40);
    sphereGeometry.scale(-1, 1, 1);

    // Cria o material da esfera
    const sphereMaterial = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      opacity: 1,
    });

    // Cria a malha da esfera
    const newSphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    // Atualiza a esfera
    setSphere(newSphere);
    // Adiciona a esfera na cena
    scene.add(newSphere);
  });

  // Confirmando que o hotspost são um array
  const hotspots = Array.isArray(sceneData.hotspot)
    ? sceneData.hotspot
    : [sceneData.hotspot];

  // Array que armazena os hotspots carregados
  const loadedHotspots = [];

  hotspots.forEach((hsData) => {
    textureLoader.load(hsData.image, (hotTexture) => {
      // Filtros para melhorar a qualidade do png do hotspot
      hotTexture.minFilter = THREE.LinearMipMapLinearFilter;
      hotTexture.magFilter = THREE.LinearFilter;

      // Cria uma geometria plana para o hotspot
      const planeGeometry = new THREE.PlaneGeometry(20, 20);
      const planeMaterial = new THREE.MeshBasicMaterial({
        map: hotTexture,
        transparent: true,
        alphaTest: 0.7, // Remove o fundo preto tirando os pixeis com baixa opacidade
        side: THREE.DoubleSide, // Visível dos dois lados
        premultipliedAlpha: true, // Melhor tratamento da transparência
      });

      // Cria a malha do hotspot
      const hotspot = new THREE.Mesh(planeGeometry, planeMaterial);

      // Define como o hotspot vai ser baseado nos dados armazenados nele
      hotspot.position.copy(hsData.position);
      hotspot.scale.copy(hsData.scale);

      // Armazena o ID da cena de destino no objeto
      hotspot.userData.targetScene = hsData.targetScene;

      // Adiciona o hotspot a lista e a cena
      loadedHotspots.push(hotspot);
      scene.add(hotspot);
    });
  });

  // Atualiza os hotspots
  setHotspots(loadedHotspots);
}
