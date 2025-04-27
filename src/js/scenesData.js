import * as THREE from "three";

// Definição dos cenários
export const scenesData = {
  d308: {
    image: "/images/Bloco_D/Andar_3/D_308.jpg",
    hotspot: {
      image: "/images/Utilitários/hotspot.png",
      position: new THREE.Vector3(-30, -2, 6.5),
      scale: new THREE.Vector3(0.12, 0.12, 1),
      targetScene: "d208",
    },
  },
  d208: {
    image: "/images/Bloco_D/Andar_2/D_208.jpg",
    hotspot: [
      {
        image: "/images/Utilitários/hotspot.png",
        position: new THREE.Vector3(-5, -5, -10),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "ladoquadra",
      },
    ],
  },
  // TODO tem que melhorar esse nome lado quadra é fodakkkk
  ladoquadra: {
    image: "/images/Exterior/lado_quadra.jpg",
    hotspot: [
      {
        image: "/images/Utilitários/hotspot.png",
        position: new THREE.Vector3(0, -5, -10),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d208",
      },
      {
        image: "/images/Utilitários/hotspot.png",
        position: new THREE.Vector3(5, -5, -10),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d308",
      },
    ],
  },
};
