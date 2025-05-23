import { useEffect, useRef } from "react";
import { setupScene } from "../utils/setupScene";
import { loadScene } from "../utils/sceneLoader";
import { setupInteraction } from "../utils/interactions";

// Componentes
import InitialPage from "./initialPage";

export default function ThreeScene() {
  const mountRef = useRef(null); // Div onde a cena 3D será montada
  const overlayRef = useRef(null); // Transição de tela (overlay) para efeito de fade-in/fade-out

  // Hook para executar o código quando o componente é montado
  useEffect(() => {
    // Verifica se as referências DOM estão definidas
    if (!mountRef.current || !overlayRef.current) return;

    let currentSphere = null; // Esfera atual da cena
    let currentHotspots = []; // Hotspots atuais da cena
    let currentSceneId = "entradaescola"; // ID da cena atual

    const { scene, camera, renderer, controls } = setupScene(mountRef.current); // Chama setupScene, passando o div DOM (mountRef.current), e recebe os objetos da cena

    // Remove a esfera antiga da cena e libera para a nova esfera
    function setSphere(newSphere) {
      if (currentSphere) {
        scene.remove(currentSphere);
        currentSphere.geometry.dispose();
        currentSphere.material.dispose();
      }
      currentSphere = newSphere;
    }

    // Remove os hotspots antigos da cena e libera para os novos hotspots
    function setHotspots(newHotspots) {
      currentHotspots.forEach((hot) => {
        scene.remove(hot);
        hot.geometry.dispose();
        hot.material.dispose();
      });
      currentHotspots = newHotspots;
    }

    // Atualiza a variável com o ID da nova cena
    function setSceneId(id) {
      currentSceneId = id;
    }

    // Carrega a cena inicial atualizando a esfera e os hotspots
    loadScene(currentSceneId, scene, setSphere, setHotspots);

    // Configura a interação com os hotspots
    setupInteraction(
      camera,
      overlayRef.current,
      scene,
      setSphere,
      setHotspots,
      setSceneId
    );

    function animate() {
      // Função de animação contínua da cena
      requestAnimationFrame(animate);

      // Renderiza a cena e atualiza os controles da câmera
      renderer.render(scene, camera);
      controls.update();

      // Todos os hotspots olham para a câmera
      currentHotspots.forEach((hotspot) => {
        hotspot.lookAt(camera.position);
      });
    }
    animate();
  }, []); // [] significa que o useEffect só roda uma vez, quando o componente é montado

  return (
    <>
      <div
        id="transitionOverlay"
        ref={overlayRef}
        className="fixed top-0 left-0 w-screen h-screen opacity-0 pointer-events-none z-10 transition-opacity duration-[1000ms] ease-[ease]"
        style={{ backdropFilter: "blur(40px)" }}
      />
      <div className="relative w-screen h-screen">
        <div ref={mountRef} className="w-full h-full" />
        <InitialPage />
      </div>
    </>
  );
}
