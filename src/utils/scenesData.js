import * as THREE from "three";

// TODO adicionar novos cenários e arrumar os hotspots

// Definição dos cenários
export const scenesData = {
  entradaescola: {
    image: "images/Exterior/Entrada_Escola.jpg",
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-40, -2, 2),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "entradameioescola",
      },
    ],
  },
  entradameioescola: {
    image: "/CefetView/images/Exterior/Entrada_Meio_Escola.jpg",
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-5, -1.5, -25),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "entradaquadra",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-37, -2, 1.2),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "entradafimescola",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(40, 0, -1),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "entradaescola",
      }
    ],
  },
  entradaquadra: {
    image: "/CefetView/images/Exterior/Entrada_Quadra.jpg",
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-100, -3, 2),
        scale: new THREE.Vector3(0.2, 0.2, 1),
        targetScene: "ladoquadra",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(40, -5, 3),
        scale: new THREE.Vector3(0.2, 0.2, 1),
        targetScene: "entradameioescola",
      },
    ],
  },
  ladoquadra: {
    image: "/CefetView/images/Exterior/Lado_quadra.jpg",
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(0, 0, 50),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "entradaquadra",
      },
    ],
  },
  entradafimescola: {
    image: "/CefetView/images/Exterior/Entrada_Fim_Escola.jpg",
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-35, -2, -10),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "entrada_blocos",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(30, -2, -1.15),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "entradameioescola",
      },
    ],
  },
  entrada_blocos: {
    image: "/CefetView/images/Exterior/Entrada_Blocos.jpg",
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(30, -1, 6),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "entrada_bloco_d",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(8, -1.5, 40),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "entradafimescola",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-25, -2, 1.5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "entrada_blocos_abc",
      }
    ],
  },
  entrada_bloco_d: {
    image: "/CefetView/images/Bloco_D/Andar_1/Entrada.jpg",
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-6, -2, 0.25),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_escada_andar2",
      },
       {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(25, -2, -2),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "entrada_blocos",
      }
    ],
  },
  d_escada_andar2: {
    image: "/CefetView/images/Bloco_D/Andar_2/D_Escada.jpg",
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(0, -3, -25),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_corredor_esquerda_cmc",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(2, -5, 22.5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_corredor_direita_cmc",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(15, -8, 2.5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "entrada_bloco_d",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(16, 2.6, -4),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_escada_andar3",
      }
    ],
  },
  d_corredor_esquerda_cmc: {
    image: "/CefetView/images/Bloco_D/Andar_2/D_Corredor_Esquerda_cmc.jpg",
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(25, -1.5, -0.75),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_corredor_esquerda_meio",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(0.5, -3, 20),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_escada_andar2",
      }
    ],
  },
  d_corredor_esquerda_meio: {
    image: "/CefetView/images/Bloco_D/Andar_2/D_Corredor_Esquerda_Meio.jpg",
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(1, -4.5, 5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d204",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(1.25, -4, -5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d205",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(27, -6, 7),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_multimidia",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(27, -6, -4),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d207",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-27.5, -2, -2.5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_corredor_esquerda_cmc",
      }
    ],
  },
  d_corredor_direita_cmc: {
    image: "/CefetView/images/Bloco_D/Andar_2/D_Corredor_Direita_cmc.jpg",
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-10.5, -3, -15),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_escada_andar2",
      },

    ],
  },
  d_escada_andar3: {
    image: "/CefetView/images/Bloco_D/Andar_3/D_Escada.jpg",
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-10, -5.5, -0.5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_escada_andar2",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-1, -3, -14),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_corredor_direita_cmc3",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-1.5, -3, 18),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_corredor_esquerda_cmc3",
      }
    ],
  },
  d_corredor_direita_cmc3: {
    image: "/CefetView/images/Bloco_D/Andar_3/D_Corredor_Direita_cmc.jpg",
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(1.5, -3, -20),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_escada_andar3",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(30, -3, 0.25),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_corredor_direita_meio3",
      }
    ],
  },
  d_corredor_direita_meio3: {
    image: "/CefetView/images/Bloco_D/Andar_3/D_Corredor_Direita_meio.jpg",
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(30, -3, 1.25),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_corredor_direita_cmc3",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(30, -3, 1.25),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d310",
      }
    ],
  },
  d_corredor_esquerda_cmc3: {
    image: "/CefetView/images/Bloco_D/Andar_3/D_Corredor_Esquerda_cmc.jpg",
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(1.5, -3, 19),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_escada_andar3",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(30, -3, -1),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_corredor_esquerda_meio3",
      }
    ],
  },
  d_corredor_esquerda_meio3: {
    image: "/CefetView/images/Bloco_D/Andar_3/D_Corredor_Esquerda_meio.jpg",
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(30, -3, 1.25),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_corredor_esquerda_cmc3",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(18, -4, -2.75),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d308",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-1.5, -4.25, -5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d310",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(0, -4.25, 0),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d312",
      },
      
    ],
  },  
  d204: {
    image: "",
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-20, -2, -7.25),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_corredor_esquerda_meio",
      },
    ],
  },
  d205: {
    image: "/CefetView/images/Bloco_D/Andar_2/D_205.jpg",
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
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
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-20, -2, -7.25),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_corredor_esquerda_meio",
      },
    ],
  },
  d207: {
    image: "/CefetView/images/Bloco_D/Andar_2/D_207.jpg",
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-20, -4, -7.25),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "d_corredor_esquerda_meio",
      },
    ],
  },
  d208: {
    image: "/CefetView/images/Bloco_D/Andar_2/D_208.jpg",
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-5, -5, -10),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "ladoquadra",
      },
    ],
  },
  d308: {
    image: "/CefetView/images/Bloco_D/Andar_3/D_308.jpg",
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-30, -5.75, 6.5),
        scale: new THREE.Vector3(0.12, 0.12, 1),
        targetScene: "d_corredor_esquerda_meio3",
      },
    ]  
  },
  d310: {
    image: "/CefetView/images/Bloco_D/Andar_3/D_310.jpg",
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-30, -7, 11.25),
        scale: new THREE.Vector3(0.12, 0.12, 1),
        targetScene: "d_corredor_esquerda_meio3",
      },
    ]  
  },

  /*corredor_direita_cmc: {
    image: "/CefetView/images/Bloco_D/Andar_2/D_Corredor_Direita_cmc.jpg",
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-30, -2, 6.5),
        scale: new THREE.Vector3(0.12, 0.12, 1),
        targetScene: "d208",
      },
    ]  
  },*/
  // ACHO Q ESSA CENA JA EXISTE, N SEI

  entrada_blocos_abc: {
    image: "/CefetView/images/Exterior/Cantina.jpg",
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(30, -2, 0),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "entrada_blocos",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(0, -2, -30),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "patio",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-8, -2, 18),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "secretaria",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(10, -2, 18),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "frente_b112",
      }
    ],
  },
  patio: {
    image: "/CefetView/images/Exterior/patio.jpg",
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-11, -2, -12),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "refeitorio",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-25, -2, 12),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "labs_idiomas",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(10, -2, -1),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "entrada_blocos_abc",
      }
    ],
  },
  refeitorio: {
    image: "/CefetView/images/Exterior/Refeitorio.jpg",
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(10, -2, -12),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "patio",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(0, -2, 25),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "torre2_andar1",
      }
    ],
  },
  labs_idiomas: {
    image: "/CefetView/images/Exterior/labs_idiomas.jpg",
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(17, -2, 17),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "patio",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(1.5, -2, -10),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "torre2_andar1",
      }
    ],
  },
  frente_b112: {
    image: "/CefetView/images/Exterior/Porta_b112.jpg",
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-25 , -2, 1.5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "entrada_blocos_abc",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(20, -2, -6),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "torre1_andar1",
      }
    ],
  },
  secretaria: {
    image: "/CefetView/images/Exterior/Secretaria.jpg",
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(20 , -2, 5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "entrada_blocos_abc",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-22, -2, -1),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "gremio",
      }
    ],
  },
  gremio: {
    image: "/CefetView/images/Exterior/Gremio.jpg",
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-20, -2, -1),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "secretaria",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(25, -2, -1),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "torre1_andar1",
      }
    ],
  },
  torre2_andar1: {
    image: "/CefetView/images/Exterior/Torre2_andar1.jpg",
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(13, -2, -2),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "labs_idiomas",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-7, -2, -5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "refeitorio",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(2, 3, 12),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "torre2_andar2",
      }
    ],
  },
  torre2_andar2: {
    image: "/CefetView/images/Bloco_C/Andar_2/Torre2_andar2.jpg",
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-10, -5.5, 3),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "torre2_andar1",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-12, 2.9, -2.5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "torre2_andar3",
      }
    ],
  },
  torre2_andar3: {
    image: "/CefetView/images/Bloco_C/Andar_3/Torre2_andar3.jpg",
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(6, -4, 4),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "torre2_andar2",
      },
    ],
  },
  torre1_andar1: {
    image: "/CefetView/images/Exterior/Torre1_andar1.jpg",
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-10, -3, -4),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "gremio",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(12, -2, -2.5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "frente_b112",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(1, 3.75, 15),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "torre1_andar2",
      }
    ],
  },
  torre1_andar2: {
    image: "/CefetView/images/Bloco_A/Andar_2/Torre1_andar2.jpg",
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(3, -8, -13),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "torre1_andar1",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(10, -4, -2.5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "torre1_andar3",
      }
    ],
  },
  torre1_andar3: {
    image: "/CefetView/images/Bloco_A/Andar_3/Torre1_andar3.jpg",
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(0.5, -7, -10),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "torre1_andar2",
      }
    ],
  },
  
  // TODO tem que melhorar esse nome
};
