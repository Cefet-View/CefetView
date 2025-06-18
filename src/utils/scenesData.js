import * as THREE from "three";

// TODO adicionar novos cenários e arrumar os hotspots

// Definição dos cenários
export const scenesData = {
  entradaescola: {
    image: "images/Exterior/Entrada_Escola.jpg",
    hotspot: [
      {
        image: "/images/Utilitários/hotspot.png",
        position: new THREE.Vector3(-40, -2, 2),
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
        position: new THREE.Vector3(-10, -2, -25),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "entradaquadra",
      },
      {
        image: "/images/Utilitários/hotspot.png",
        position: new THREE.Vector3(-37, -2, 1.2),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "entradafimescola",
      },
    ],
  },
  entradafimescola: {
    image: "/images/Exterior/Entrada_Fim_Escola.jpg",
    hotspot: [
      {
        image: "/images/Utilitários/hotspot.png",
        position: new THREE.Vector3(-10, -2, -25),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_escada_andar2",
      },
    ],
  },
  entradaquadra: {
    image: "/images/Exterior/Entrada_Quadra.jpg",
    hotspot: [
      {
        image: "/images/Utilitários/hotspot.png",
        position: new THREE.Vector3(-70, -5, 3),
        scale: new THREE.Vector3(0.2, 0.2, 1),
        targetScene: "ladoquadra",
      },
      {
        image: "/images/Utilitários/hotspot.png",
        position: new THREE.Vector3(40, -5, 3),
        scale: new THREE.Vector3(0.2, 0.2, 1),
        targetScene: "entradameioescola",
      },
    ],
  },
  ladoquadra: {
    image: "/images/Exterior/Lado_quadra.jpg",
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
  d_escada_andar2: {
    image: "/images/Bloco_D/Andar_2/D_Escada.jpg",
    hotspot: [
      {
        image: "/images/Utilitários/hotspot.png",
        position: new THREE.Vector3(-1, -3, -25),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_corredor_esquerda_cmc",
      },
    ],
  },
  d_corredor_esquerda_cmc: {
    image: "/images/Bloco_D/Andar_2/D_Corredor_Esquerda_cmc.jpg",
    hotspot: [
      {
        image: "/images/Utilitários/hotspot.png",
        position: new THREE.Vector3(0, -2, 15),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_escada_andar2",
      },
      {
        image: "/images/Utilitários/hotspot.png",
        position: new THREE.Vector3(30, -2, 0),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_corredor_esquerda_meio",
      },
    ],
  },
  d_corredor_esquerda_meio: {
    image: "/images/Bloco_D/Andar_2/D_Corredor_Esquerda_Meio.jpg",
    hotspot: [
      {
        image: "/images/Utilitários/hotspot.png",
        position: new THREE.Vector3(-27.5, -2, -2.5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_corredor_esquerda_cmc",
      },
      {
        image: "/images/Utilitários/hotspot.png",
        position: new THREE.Vector3(27, -4, -4),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d207",
      },
    ],
  },
  d207: {
    image: "/images/Bloco_D/Andar_2/D_207.jpg",
    hotspot: [
      {
        image: "/images/Utilitários/hotspot.png",
        position: new THREE.Vector3(-20, -2, -7.25),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_corredor_esquerda_meio",
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
};
