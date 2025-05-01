import * as THREE from "three";

// TODO adicionar novos cenários e arrumar os hotspots

// Definição dos cenários
export const scenesData = {
  entradaescola: {
    image: "/images/Exterior/Entrada_Escola.jpg",
    hotspot: [
      {
        image: "/images/Utilitários/hotspot.png",
        position: new THREE.Vector3(-5, -5, -10),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "entradameioescola",
      },
    ],
  },
  entradameioescola: {
    image: "/images/Exterior/Entrada_Meio_Escola.jpg",
    hotspot: [
      {
        image: "/images/Utilitários/hotspot.png",
        position: new THREE.Vector3(-5, -5, -10),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "ladoquadra",
      },
    ],
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
  d308: {
    image: "/images/Bloco_D/Andar_3/D_308.jpg",
    hotspot: {
      image: "/images/Utilitários/hotspot.png",
      position: new THREE.Vector3(-30, -2, 6.5),
      scale: new THREE.Vector3(0.12, 0.12, 1),
      targetScene: "d208",
    },
  },
  d310: {
    image: "/images/Bloco_D/Andar_3/D_310.jpg",
    hotspot: {
      image: "/images/Utilitários/hotspot.png",
      position: new THREE.Vector3(-30, -2, 6.5),
      scale: new THREE.Vector3(0.12, 0.12, 1),
      targetScene: "d208",
    },
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
