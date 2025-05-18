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
  //muito importante tira isso nao dog
  let previousHoveredHotspot = null;
  window.addEventListener("mousemove", (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(
      scene.children.filter((obj) => obj.userData?.targetScene)
    );

    // Resetar todos os hotspots para escala original (0.1, 0.1, 1)
    scene.children.forEach((obj) => {
      if (obj.userData?.targetScene) {
        obj.scale.lerp(new THREE.Vector3(0.1, 0.1, 1), 0.1); // animação suave
      }
    });

    if (intersects.length > 0) 
      {
      document.body.style.cursor = "pointer";
      const hotspot = intersects[0].object;

      if (!hotspot.userData.hoverMaterial) 
        {
        const texturaHover = new THREE.TextureLoader().load("/images/Utilitários/hotspot_branco.png");
        hotspot.userData.hoverMaterial = new THREE.MeshBasicMaterial({
          map: texturaHover,
          transparent: true,
          alphaTest: 0.7, // Remove o fundo preto tirando os pixeis com baixa opacidade
          side: THREE.DoubleSide, // Visível dos dois lados
          premultipliedAlpha: true,
        });
      }
      if (!hotspot.userData.originalMaterial) 
        {
        hotspot.userData.originalMaterial = hotspot.material.clone();
      }
      // Troca para o material de hover
      hotspot.material = hotspot.userData.hoverMaterial;
  
      // Guarda qual foi o último hotspot com hover
      if (previousHoveredHotspot && previousHoveredHotspot !== hotspot) 
        {
        // Restaura o anterior
        previousHoveredHotspot.material = previousHoveredHotspot.userData.originalMaterial;
      }
  
      previousHoveredHotspot = hotspot;
      // Animação de destaque: aumentar levemente o hotspot apontado
      const targetScale = new THREE.Vector3(0.15, 0.15, 1);
      hotspot.scale.lerp(targetScale, 0.1); // Animação suave com lerp
    } 
    else 
    {
      document.body.style.cursor = "default";
      if (previousHoveredHotspot) 
        {
         // Restaura o material original salvo anteriormente
        previousHoveredHotspot.material = previousHoveredHotspot.userData.originalMaterial;
        previousHoveredHotspot = null;
      }
  }});

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