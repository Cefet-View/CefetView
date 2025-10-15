import * as THREE from "three";

// TODO adicionar novos cenários e arrumar os hotspots
// pesquisavel: 1 = sim, 0 = não
// se quiser pode mudar, caso ache que uma imagem deve ser pesquisavel.
// Definição dos cenários
export const scenesData = {
  entradaescola: {
    image: "images/Exterior/Entrada_Escola.jpg",
    pesquisavel: 0,
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
    pesquisavel: 0,
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-5, -1.5, -25),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "caminho_quadra",
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
  caminho_quadra: {
    image: "/CefetView/images/Exterior/caminho_quadra.jpg",
    pesquisavel: 0,
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-60, -3, 5),
        scale: new THREE.Vector3(0.2, 0.2, 1),
        targetScene: "ladoquadra",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(45, -2, 3),
        scale: new THREE.Vector3(0.2, 0.2, 1),
        targetScene: "entradameioescola",
      },
    ],
  },
  ladoquadra: {
    image: "/CefetView/images/Exterior/Lado_quadra.jpg",
    pesquisavel: 0,
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(0, 0, 50),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "caminho_quadra",
      },
    ],
  },
  entradafimescola: {
    image: "/CefetView/images/Exterior/Entrada_Fim_Escola.jpg",
    pesquisavel: 0,
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
    pesquisavel: 0,
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
    pesquisavel: 0,
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
    pesquisavel: 0,
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
    pesquisavel: 0,
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
    pesquisavel: 0,
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
    pesquisavel: 0,
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
    pesquisavel: 0,
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
    pesquisavel: 0,
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
    pesquisavel: 0,
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
    pesquisavel: 0,
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
    pesquisavel: 0,
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
    pesquisavel: 1,
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
    pesquisavel: 1,
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
    pesquisavel: 1,
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
    pesquisavel: 1,
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
    pesquisavel: 1,
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
    pesquisavel: 1,
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
    pesquisavel: 1,
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
    pesquisavel: 0,
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
    pesquisavel: 0,
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
    pesquisavel: 1,
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
    pesquisavel: 1,
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
    pesquisavel: 0,
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
    pesquisavel: 1,
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
    pesquisavel: 1,
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
    pesquisavel: 0,
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
    pesquisavel: 0,
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
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-12, 2.9, 0),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B2_corredor_leste_1",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-12, 2.9, -5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B2_corredor_oeste_2",
      }
    ],
  },
  torre2_andar3: {
    image: "/CefetView/images/Bloco_C/Andar_3/Torre2_andar3.jpg",
    pesquisavel: 0,
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(6, -4, 4),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "torre2_andar2",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(10, -2, 0),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "C3_corredor_oeste_5",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-8, -2, -1),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B3_corredor_leste_1",
      }
    ],
  },
  torre1_andar1: {
    image: "/CefetView/images/Exterior/Torre1_andar1.jpg",
    pesquisavel: 0,
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
    pesquisavel: 0,
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
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-10, -4, 1.75),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "A2_corredor_leste_1",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(18, -4, 1.5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "A2_corredor_oeste_1",
      }
    ],
  },
  torre1_andar3: {
    image: "/CefetView/images/Bloco_A/Andar_3/Torre1_andar3.jpg",
    pesquisavel: 0,
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(0.5, -7, -10),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "torre1_andar2",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-7, -2, 1.75),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B3_corredor_leste_8",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(11, -2, 0.5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "passarela",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(11, -2, 3),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B3_corredor_oeste_6",
      }
    ],
  },
  // Bloco A Andar 2
  A2_corredor_leste_1: {
    image: "/CefetView/images/Bloco_A/Andar_2/A2_corredor_leste_1.jpg",
    pesquisavel: 0,
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(0, -2, 10),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "torre1_andar2",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(18, -2, -5.5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "A2_corredor_leste_2",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-16, -2, -4),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B2_corredor_leste_5",
      }
      
    ],
  },
  A2_corredor_leste_2: {
    image: "/CefetView/images/Bloco_A/Andar_2/A2_corredor_leste_2.jpg",
    pesquisavel: 0,
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(30, -1.5, 1.25),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "A2_corredor_leste_1",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-19, -1.5, -0),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "A2_corredor_leste_3",
      }
    ],
  },
  A2_corredor_leste_3: {
    image: "/CefetView/images/Bloco_A/Andar_2/A2_corredor_leste_3.jpg",
    pesquisavel: 0,
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(18, -1.5, 1.5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "A2_corredor_leste_2",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-2, -1.5, 5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "A2_corredor_leste_lab",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-19, -1.5, -0),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "A2_corredor_leste_4",
      }
    ],
  },
  A2_corredor_leste_4: {
    image: "/CefetView/images/Bloco_A/Andar_2/A2_corredor_leste_4.jpg",
    pesquisavel: 0,
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(20, -1.5, -0.15),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "A2_corredor_leste_3",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-24, -1.5, 0),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "A2_corredor_leste_5",
      }
    ],
  },
  A2_corredor_leste_5: {
    image: "/CefetView/images/Bloco_A/Andar_2/A2_corredor_leste_5.jpg",
    pesquisavel: 0,
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-13.5, -1.5, 15 ),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "A2_corredor_leste_4",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(17, 8, 10),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "",
      }
    ],
  },
  A2_corredor_leste_lab: {
    image: "/CefetView/images/Bloco_A/Andar_2/A2_corredor_leste_lab.jpg",
    pesquisavel: 0,
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(4, -1.5, 0),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "A2_corredor_leste_3",
      }
    ],
  },
  A2_corredor_oeste_1: {
    image: "/CefetView/images/Bloco_A/Andar_2/A2_corredor_oeste_1.jpg",
    pesquisavel: 0,
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-1, -1.5, -11),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "torre1_andar2",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-15, -1.5, 0),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B2_corredor_oeste_5",
      }
    ],
  },
  // Bloco B Andar 2
  B2_corredor_leste_1: {
    image: "/CefetView/images/Bloco_B/Andar_2/B2_corredor_leste_1.jpg",
    pesquisavel: 0,
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-1, -1.5, 10),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "torre2_andar2",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(17, -1.5, 5.5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B2_corredor_leste_2",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-17, -0.75, 3.15),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "C2_corredor_leste_1",
      }
    ],
  },
  B2_corredor_leste_2: {
    image: "/CefetView/images/Bloco_B/Andar_2/B2_corredor_leste_2.jpg",
    pesquisavel: 0,
    //a foto originalmente se chamava B212, agora esta como B2_corredor_leste_2
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-15, -1.5, 2),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B2_corredor_leste_1",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(13, -1.5, 0),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B2_corredor_leste_3",
      }
    ],
  },
  B2_corredor_leste_3: {
    image: "/CefetView/images/Bloco_B/Andar_2/B2_corredor_leste_3.jpg",
    pesquisavel: 0,
    //em frente ao gabinete da direção
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-1, -1.5, 15),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B2_corredor_leste_2",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(6, 0, -15),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B2_meio",
      }
    ],
  },
  /*
  Na porta à direita do gabinete da direção temos a gerência acadêmica (essas duas portas podem ser vistas claramente da cena B2_corredor_leste_3), porém, entre a cena B2_meio e a cena B2_corredor_leste_3 ainda há duas salas que não podem ser vistas nitidamente e que vale destacar, são elas: gerência administrativa e divisão de almoxarifado e patrimômio - DIVAP (de acordo com a planta)
  */
  B2_meio: {
    image: "/CefetView/images/Bloco_B/Andar_2/B2_meio.jpg",
    pesquisavel: 0,
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-10, -2, -9.75),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B2_corredor_leste_3",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(7, -2, -11),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B2_corredor_leste_4",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-9.5, -2, 14),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B2_corredor_oeste_4",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(10.5, -2, 10.5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B2_corredor_oeste_5",
      }
    ],
  },
  B2_corredor_leste_4: {
    image: "/CefetView/images/Bloco_B/Andar_2/B2_corredor_leste_4.jpg",
    pesquisavel: 0,
    //a foto originalmente se chamava Frente B214, agora está como B2_corredor_leste_4
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-15, -1.15, 5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B2_meio",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(13, -1.5, 0),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B2_corredor_leste_5",
      }
    ],
  },
  B2_corredor_leste_5: {
    image: "/CefetView/images/Bloco_B/Andar_2/B2_corredor_leste_5.jpg",
    pesquisavel: 0,
    //a foto originalmente se chamava sala dos professores, agora está como B2_corredor_leste_5
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-15, -1.5, -0.25),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B2_corredor_leste_4",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(13, -1.5, 0),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "A2_corredor_leste_1",
      }
    ],
  },
  B2_corredor_oeste_1: {
    image: "/CefetView/images/Bloco_B/Andar_2/B2_corredor_oeste_1.jpg",
    pesquisavel: 0,
    //a foto originalmente se chamava Lab redes, agora está como B2_corredor_oeste_1
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(14, -2, 2),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B2_corredor_oeste_2",
      }
    ],
  },
  B2_corredor_oeste_2: {
    image: "/CefetView/images/Bloco_B/Andar_2/B2_corredor_oeste_2.jpg",
    pesquisavel: 0,
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-13, -1.5, 4.25),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B2_corredor_oeste_1",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(13, -1.5, 2.5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B2_corredor_oeste_3",
      }
    ],
  },
  B2_corredor_oeste_3: {
    image: "/CefetView/images/Bloco_B/Andar_2/B2_corredor_oeste_3.jpg",
    pesquisavel: 0,
    /*a foto originalmente se chamava B211, agora está como B2_corredor_oeste_3.
    a B211 é a sala de subprefeitura / infraestrutura
    */
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-13, -1.5, 1),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B2_corredor_oeste_2",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(13, -1.5, 0),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B2_corredor_oeste_4",
      }
    ],
  },  
  B2_corredor_oeste_4: {
    image: "/CefetView/images/Bloco_B/Andar_2/B2_corredor_oeste_4.jpg",
    pesquisavel: 0,
    /*a foto originalmente se chamava "frente b207 e b209", agora está como B2_corredor_oeste_4.
    a B209 é a sala dos professores de enfermagem
    a B207 é o setor de administração e compras - SEACO
    */
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-13, -1.5, 0.25),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B2_corredor_oeste_3",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(13, -0.75, -6),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B2_meio",
      }
    ],
  },
  B2_corredor_oeste_5: {
    image: "/CefetView/images/Bloco_B/Andar_2/B2_corredor_oeste_5.jpg",
    pesquisavel: 0,
    /*a foto originalmente se chamava Saped, agora está como B2_corredor_oeste_5.
    é em frente a sala B201, que é a coordenação do ensino médio, técnico e graduação
    */
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-20, -0.5, -4),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B2_meio",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(13, -0.75, -1),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "A2_corredor_oeste_1",
      }
    ],
  },
  C2_corredor_leste_1: {
    image: "/CefetView/images/Bloco_C/Andar_2/C2_corredor_leste_1.jpg",
    pesquisavel: 0,
    //porta de cima do auditório
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(20, -1.5, 0.15),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B2_corredor_leste_1",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-13, 1, 0.5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "biblioteca",
      }
    ],
  },
  biblioteca: {
    image: "/CefetView/images/Bloco_C/Andar_3/biblioteca.jpg",
    pesquisavel: 0,
    //em frente à biblioteca (porta de vidro)
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(0, -4, -12.5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "C2_corredor_leste_1",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(12, -1, 0.75),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "C3_corredor_oeste_2",
      }
    ],
  },
  C3_corredor_oeste_2: {
    image: "/CefetView/images/Bloco_C/Andar_3/C3_corredor_oeste_2.jpg",
    //imagem antes nomeada como Frente_Laboratorio_Computacao
    pesquisavel: 0,
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(13.5, -2, -13.5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "biblioteca",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-10.5, -2, 9),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "mezanino",
      }
    ],
  },
  mezanino: {
    image: "/CefetView/images/Bloco_C/Andar_3/mezanino.jpg",
    pesquisavel: 0,
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(12, -2, -0.85),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "C3_corredor_oeste_2",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-20, -1, 0.75),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "C3_corredor_oeste_4",
      }
    ],
  },
  C3_corredor_oeste_4: {
    image: "/CefetView/images/Bloco_C/Andar_3/C3_corredor_oeste_4.jpg",
    //em frente aos laboratórios de informática C301 e C303
    pesquisavel: 0,
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-17.5, -1.5, 0.85),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "mezanino",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(18, -1.5, 1.25),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "C3_corredor_oeste_5",
      }
    ],
  },
  C3_corredor_oeste_5: {
    image: "/CefetView/images/Bloco_C/Andar_3/C3_corredor_oeste_5.jpg",
    //antes nomeada como corredor torre 3 c (é o corredor oeste ao lado da torre 2 no terceiro andar)
    pesquisavel: 0,
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(6, -2, -15),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "C3_corredor_oeste_4",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(8, -2, 5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "torre2_andar3",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-13, -1.5, 12.5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B3_corredor_oeste_1",
      }
    ],
  },
  B3_corredor_oeste_1: {
    image: "/CefetView/images/Bloco_B/Andar_3/B3_corredor_oeste_1.jpg",
    //de frente para o laboratório de matemática (lab B313)
    pesquisavel: 0,
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-25, -2, 2.85),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "C3_corredor_oeste_5",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(15, -2, 0),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B3_corredor_oeste_2",
      }
    ],
  },
  B3_corredor_oeste_2: {
    image: "/CefetView/images/Bloco_B/Andar_3/B3_corredor_oeste_2.jpg",
    //de frente para a sala B311
    pesquisavel: 0,
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-14, -2, 0.5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B3_corredor_oeste_1",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(13, -2, -0.25),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B3_meio",
      }
    ],
  },
  B3_meio: {
    image: "/CefetView/images/Bloco_B/Andar_3/B3_meio.jpg",
    //de frente para a sala B311
    pesquisavel: 0,
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-5, -2, 8.25),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B3_corredor_oeste_2",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(6.5, -2, 8.25),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B3_corredor_oeste_3",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(2.5, -2, -12),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B3_corredor_leste_3",
      }
    ],
  },
  B3_corredor_oeste_3: {
    image: "/CefetView/images/Bloco_B/Andar_3/B3_corredor_oeste_3.jpg",
    //de frente para a sala B307
    pesquisavel: 0,
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-12, -2, -1.5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B3_meio",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(13.5, -2, -0.25),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B3_corredor_oeste_4",
      }
    ],
  },
  B3_corredor_oeste_4: {
    image: "/CefetView/images/Bloco_B/Andar_3/B3_corredor_oeste_4.jpg",
    //de frente para a sala B305
    pesquisavel: 0,
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-12, -2, 0.5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B3_corredor_oeste_3",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(14, -2, 0.5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B3_corredor_oeste_5",
      }
    ],
  },
  B3_corredor_oeste_5: {
    image: "/CefetView/images/Bloco_B/Andar_3/B3_corredor_oeste_5.jpg",
    //de frente para a sala B303
    pesquisavel: 0,
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-14, -2, 1),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B3_corredor_oeste_4",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(14, -2, -0.5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B3_corredor_oeste_6",
      }
    ],
  },
  B3_corredor_oeste_6: {
    image: "/CefetView/images/Bloco_B/Andar_3/B3_corredor_oeste_6.jpg",
    //de frente para a sala B301
    pesquisavel: 0,
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-13, -2, 0.5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B3_corredor_oeste_5",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(20, -2, -2.25),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "torre1_andar3",
      },
      
    ],
  },
  B3_corredor_leste_1: {
    image: "/CefetView/images/Bloco_B/Andar_3/B3_corredor_leste_1.jpg",
    pesquisavel: 0,
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(1.25, -2, -13),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "torre2_andar3",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-25, -1.5, -6.5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B3_corredor_leste_3",
      }
    ],
  },
  B3_corredor_leste_2: {
    image: "/CefetView/images/Bloco_B/Andar_3/B3_corredor_leste_2.jpg",
    
    pesquisavel: 0,
    hotspot: [
      
      
    ],
  },
  B3_corredor_leste_3: {
    image: "/CefetView/images/Bloco_B/Andar_3/B3_corredor_leste_3.jpg",
    //Em frente ao laboratório de química (lab B310)
    pesquisavel: 0,
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-25, -2, 0),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B3_corredor_leste_1",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-8, -2, 4),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B3_meio",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(15.75, -2, -1.25),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B3_corredor_leste_4",
      }
    ],
  },
  B3_corredor_leste_4: {
    image: "/CefetView/images/Bloco_B/Andar_3/B3_corredor_leste_4.jpg",
    //Em frente à sala B308
    pesquisavel: 0,
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(17, -2, 1),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B3_corredor_leste_3",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-13, -2, -0.35),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B3_corredor_leste_5",
      }
    ],
  },
  B3_corredor_leste_5: {
    image: "/CefetView/images/Bloco_B/Andar_3/B3_corredor_leste_5.jpg",
    //Em frente à sala B306
    pesquisavel: 0,
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(18, -2, 0.75),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B3_corredor_leste_4",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-15, -2, -0.5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B3_corredor_leste_6",
      }
    ],
  },
  B3_corredor_leste_6: {
    image: "/CefetView/images/Bloco_B/Andar_3/B3_corredor_leste_6.jpg",
    //Em frente à sala B304
    pesquisavel: 0,
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(18, -2, 0),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B3_corredor_leste_5",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-15, -2, 0),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B3_corredor_leste_7",
      }
    ],
  },
  B3_corredor_leste_7: {
    image: "/CefetView/images/Bloco_B/Andar_3/B3_corredor_leste_7.jpg",
    //Em frente à sala B302
    pesquisavel: 0,
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(16, -2, 2.5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B3_corredor_leste_6",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-20, -2, 2.5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B3_corredor_leste_8",
      }
    ],
  },
  B3_corredor_leste_8: {
    image: "/CefetView/images/Bloco_B/Andar_3/B3_corredor_leste_8.jpg",
    pesquisavel: 0,
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(0.65, -2, 8  ),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "torre1_andar3",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-20, -2, -5),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "B3_corredor_leste_7",
      }
    ],
  },
  passarela: {
    image: "/CefetView/images/Bloco_A/Andar_3/passarela.jpg",
    pesquisavel: 0,
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(20, -2, 0),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "torre1_andar3",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(8, -2, 1.75),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-25, -2, -1.25),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "A3_corredor_oeste_3",
      }
    ],
  },
  A3_corredor_oeste_3: {
    image: "/CefetView/images/Bloco_A/Andar_3/A3_corredor_oeste_3.jpg",
    pesquisavel: 0,
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(25, -2, -9),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "passarela",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-27, -2, 10.25),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "A3_corredor_oeste_4",
      }
    ],
  },
  A3_corredor_oeste_4: {
    image: "/CefetView/images/Bloco_A/Andar_3/A3_corredor_oeste_4.jpg",
    // em frente ao laboratório de telecomunicações (A311) e o laboratório de transmissão de dados (A309)
    pesquisavel: 0,
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(15, -2, -21),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "A3_corredor_oeste_3",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-15, -2, 20),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "A3_corredor_oeste_5",
      }
    ],
  },
  A3_corredor_oeste_5: {
    image: "/CefetView/images/Bloco_A/Andar_3/A3_corredor_oeste_5.jpg",
    //A307
    pesquisavel: 0,
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(18, -2, 0),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "A3_corredor_oeste_4",
      },
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(-24, -2, -0.25),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "A3_corredor_oeste_6",
      }
    ],
  },
  A3_corredor_oeste_6: {
    image: "/CefetView/images/Bloco_A/Andar_3/A3_corredor_oeste_6.jpg",
    //em frente ao laboratório de metalografia (A303) e A305
    pesquisavel: 0,
    hotspot: [
      {
        image: "/CefetView/images/Utilitários/hotspot.svg",
        position: new THREE.Vector3(25, -2, -1),
        scale: new THREE.Vector3(0.1, 0.1, 1),
        targetScene: "A3_corredor_oeste_5",
      }
    ],
  },

  
  // TODO tem que melhorar esse nome
};
