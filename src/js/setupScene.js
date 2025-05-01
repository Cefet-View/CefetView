import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export function setupScene() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75, // Fov de 75°
    window.innerWidth / window.innerHeight, // Proporção baseado no tamanho da tela
    1,
    1100 // Plano de visão entre 1 e 1100 unidades
  );

  camera.position.set(0, 0, 0.1);
  // Cria o renderizador WebGL com antialias (suavização de serrilhado)
  const renderer = new THREE.WebGLRenderer({ antialias: true });

  // Define o tamanho do renderizador para ocupar a tela
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Adiciona o canvas do renderizador ao body do HTML
  document.body.appendChild(renderer.domElement);

  // Cria os controles de Orbita
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableZoom = false;
  controls.rotateSpeed = -0.3; // Negativo para inverter a direção de rotação
  controls.enableDamping = true; // Movimento suave
  controls.dampingFactor = 0.05;

  controls.enableKeys = true;
  controls.listenToKeyEvents(window);
  controls.keys = {
    LEFT: "ArrowLeft",
    UP: "ArrowUp",
    RIGHT: "ArrowRight",
    BOTTOM: "ArrowDown",
  };

  // Retorna os elementos configurados
  return { scene, camera, renderer, controls };
}
