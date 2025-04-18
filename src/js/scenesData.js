import * as THREE from "three";

// Definição dos cenários
export const scenesData = {
  d308: {
    image: "/images/D_308.jpg",
    hotspot: {
      image: "/images/hotspot.png",
      position: new THREE.Vector3(-30, -2, 6.5),
      scale: new THREE.Vector3(0.12, 0.12, 1),
      targetScene: "d208",
    },
  },
  d208: {
    image: "/images/D_208.jpg",
    hotspot: [
      {
        image: "/images/hotspot.png",
        position: new THREE.Vector3(-5, -5, -10),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "ladoquadra",
      },
    ],
  },
  ladoquadra: {
    image: "/images/lado_quadra.jpg",
    hotspot: [
      {
        image: "/images/hotspot.png",
        position: new THREE.Vector3(0, -5, -10),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d208",
      },
      {
        image: "/images/hotspot.png",
        position: new THREE.Vector3(5, -5, -10),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d308",
      },
    ],
  },
};
