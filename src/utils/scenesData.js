import * as THREE from "three";

// TODO adicionar novos cenários e arrumar os hotspots

// Definição dos cenários
export const scenesData = {
  entradaescola: {
    image: "images/Exterior/Entrada_Escola.jpg",
    hotspot: [
      {
        image: "/images/Utilitários/hotspot.svg",
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
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-5, -1.5, -25),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "entradaquadra",
      },
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-37, -2, 1.2),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "entradafimescola",
      },
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(40, 0, -1),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "entradaescola",
      }
    ],
  },
  entradaquadra: {
    image: "/images/Exterior/Entrada_Quadra.jpg",
    hotspot: [
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-100, -3, 2),
        scale: new THREE.Vector3(0.2, 0.2, 1),
        targetScene: "ladoquadra",
      },
      {
        image: "/images/Utilitários/hotspot.svg",
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
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(0, 0, 50),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "entradaquadra",
      },
    ],
  },
  entradafimescola: {
    image: "/images/Exterior/Entrada_Fim_Escola.jpg",
    hotspot: [
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-35, -2, -10),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "entrada_blocos",
      },
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(30, -2, -1.15),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "entradameioescola",
      },
    ],
  },
  entrada_blocos: {
    image: "/images/Exterior/Entrada_Blocos.jpg",
    hotspot: [
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(30, -1, 6),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "entrada_bloco_d",
      },
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(8, -1.5, 40),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "entradafimescola",
      },
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-25, -2, 1.5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "entrada_blocos_abc",
      }
    ],
  },
  entrada_bloco_d: {
    image: "/images/Bloco_D/Andar_1/Entrada.jpg",
    hotspot: [
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-6, -2, 0.25),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_escada_andar2",
      },
       {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(25, -2, -2),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "entrada_blocos",
      }
    ],
  },
  d_escada_andar2: {
    image: "/images/Bloco_D/Andar_2/D_Escada.jpg",
    hotspot: [
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(0, -3, -25),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_corredor_esquerda_cmc",
      },
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(2, -5, 22.5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_corredor_direita_cmc",
      },
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(15, -8, 2.5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "entrada_bloco_d",
      },
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(16, 2.6, -4),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_escada_andar3",
      }
    ],
  },
  d_corredor_esquerda_cmc: {
    image: "/images/Bloco_D/Andar_2/D_Corredor_Esquerda_cmc.jpg",
    hotspot: [
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(25, -1.5, -0.75),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_corredor_esquerda_meio",
      },
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(0.5, -3, 20),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_escada_andar2",
      }
    ],
  },
  d_corredor_esquerda_meio: {
    image: "/images/Bloco_D/Andar_2/D_Corredor_Esquerda_Meio.jpg",
    hotspot: [
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(1, -4.5, 5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d204",
      },
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(1.25, -4, -5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d205",
      },
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(27, -6, 7),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_multimidia",
      },
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(27, -6, -4),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d207",
      },
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-27.5, -2, -2.5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_corredor_esquerda_cmc",
      }
    ],
  },
  d_corredor_direita_cmc: {
    image: "/images/Bloco_D/Andar_2/D_Corredor_Direita_cmc.jpg",
    hotspot: [
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-10.5, -3, -15),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_escada_andar2",
      },

    ],
  },
  d_escada_andar3: {
    image: "/images/Bloco_D/Andar_3/D_Escada.jpg",
    hotspot: [
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-10, -5.5, -0.5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_escada_andar2",
      },
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-1, -3, -14),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_corredor_direita_cmc3",
      },
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-1.5, -3, 18),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_corredor_esquerda_cmc3",
      }
    ],
  },
  d_corredor_direita_cmc3: {
    image: "/images/Bloco_D/Andar_3/D_Corredor_Direita_cmc.jpg",
    hotspot: [
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(1.5, -3, -20),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_escada_andar3",
      },
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(30, -3, 0.25),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_corredor_direita_meio3",
      }
    ],
  },
  d_corredor_direita_meio3: {
    image: "/images/Bloco_D/Andar_3/D_Corredor_Direita.jpg",
    hotspot: [
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(30, -3, -0.5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_corredor_direita_cmc3",
      }
    ],
  },
  d_corredor_esquerda_cmc3: {
    image: "/images/Bloco_D/Andar_3/D_Corredor_Esquerda_cmc.jpg",
    hotspot: [
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(1.5, -3, 19),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_escada_andar3",
      },
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(30, -3, -1),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_corredor_esquerda_meio3",
      }
    ],
  },
  d_corredor_esquerda_meio3: {
    image: "/images/Bloco_D/Andar_3/D_Corredor_Esquerda.jpg",
    hotspot: [
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(30, -3, 1.25),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_corredor_esquerda_cmc3",
      },
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(18, -4, -2.75),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d308",
      },
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-1.5, -4.25, -5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d310",
      },
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(0, -4.25, 0),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d312",
      },
      
    ],
  },  
  d204: {
    image: "/images/Bloco_D/Andar_2/D_207.jpg",
    hotspot: [
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-20, -2, -7.25),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_corredor_esquerda_meio",
      },
    ],
  },
  d205: {
    image: "/images/Bloco_D/Andar_2/D_205.jpg",
    hotspot: [
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-20, -3, -6),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_corredor_esquerda_meio",
      },
    ],
  },
  d_multimidia: {
    image: "",
    hotspot: [
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-20, -2, -7.25),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_corredor_esquerda_meio",
      },
    ],
  },
  d207: {
    image: "/images/Bloco_D/Andar_2/D_207.jpg",
    hotspot: [
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-20, -4, -7.25),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_corredor_esquerda_meio",
      },
    ],
  },
  d208: {
    image: "/images/Bloco_D/Andar_2/D_208.jpg",
    hotspot: [
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-5, -5, -10),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "ladoquadra",
      },
    ],
  },
  d308: {
    image: "/images/Bloco_D/Andar_3/D_308.jpg",
    hotspot: [
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-30, -5.75, 6.5),
        scale: new THREE.Vector3(0.12, 0.12, 1),
        targetScene: "d_corredor_esquerda_meio3",
      },
    ]  
  },
  d310: {
    image: "/images/Bloco_D/Andar_3/D_310.jpg",
    hotspot: [
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-30, -7, 11.25),
        scale: new THREE.Vector3(0.12, 0.12, 1),
        targetScene: "d_corredor_esquerda_meio3",
      },
    ]  
  },

  /*corredor_direita_cmc: {
    image: "/images/Bloco_D/Andar_2/D_Corredor_Direita_cmc.jpg",
    hotspot: [
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-30, -2, 6.5),
        scale: new THREE.Vector3(0.12, 0.12, 1),
        targetScene: "d208",
      },
    ]  
  },*/
  // ACHO Q ESSA CENA JA EXISTE, N SEI

  entrada_blocos_abc: {
    image: "/images/Exterior/Cantina.jpg",
    hotspot: [
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(30, -2, 0),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "entrada_blocos",
      },
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(0, -2, 0),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "torre_esquerda",
      },
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(15, -2, 0),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "torre_direita",
      }
    ],
  },
  torre_esquerda: {
    image: "/images/Exterior/Cantina.jpg",
    hotspot: [
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(30, -2, 0),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "entrada_blocos",
      },
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(0, -2, 0),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "torre_esquerda",
      },
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(15, -2, 0),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "torre_direita",
      }
    ],
  },
  torre_direita: {
    image: "/images/Exterior/Cantina.jpg",
    hotspot: [
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(30, -2, 0),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "entrada_blocos",
      },
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(0, -2, 0),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "torre_esquerda",
      },
      {
        image: "/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(15, -2, 0),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "torre_direita",
      }
    ],
  },

  // TODO tem que melhorar esse nome
};
