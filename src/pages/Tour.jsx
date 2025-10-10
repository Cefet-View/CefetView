/**
 * @file Tour.jsx
 * @description Componente principal que renderiza e gerencia a experiência do tour virtual 3D.
 * Ele é responsável por:
 * - Configurar a cena, câmera, renderer e controles do Three.js.
 * - Sincronizar a cena exibida com o ID na URL usando React Router.
 * - Gerenciar o estado do menu inicial/de pausa.
 * - Pausar e retomar a interatividade do tour.
 */

import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { setupScene } from "../utils/setupScene";
import { loadScene } from "../utils/sceneLoader";
import { setupInteraction } from "../utils/interactions";
import { teleportTo } from "../utils/teleport";

// Componentes
import InitialPage from "../components/tour/initialPage";

export default function Tour() {
  const mountRef = useRef(null); // Div onde a cena 3D será montada
  const overlayRef = useRef(null); // Transição de tela (overlay) para efeito de fade-in/fade-out

  const [sceneState, setSceneState] = useState(null);

  const { sceneId } = useParams();
  const navigate = useNavigate();

  // Hook para executar o código quando o componente é montado
  useEffect(() => {
    // Verifica se as referências DOM estão definidas
    if (!mountRef.current || !overlayRef.current) return;

    let currentSphere = null; // Esfera atual da cena
    let currentHotspots = []; // Hotspots atuais da cena

    // Chama setupScene, passando o div DOM (mountRef.current), e recebe os objetos da cena
    const { scene, camera, renderer, controls } = setupScene(mountRef.current);

    // Remove a esfera antiga da cena e libera para a nova esfera
    function setSphere(newSphere) {
      if (currentSphere) {
        scene.remove(currentSphere);
        currentSphere.geometry.dispose();
        currentSphere.material.dispose();
      }
      currentSphere = newSphere;
      // Adiciona a nova esfera à cena
      scene.add(newSphere);
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

    // Atualiza a variável com o ID da nova cena na url
    function setSceneId(id) {
      navigate(`/tour/${id}`, { replace: true });
    }

    // Carrega a cena inicial baseada na URL
    const initialSceneId = sceneId || "entradaescola";

    // Carrega a cena inicial atualizando a esfera e os hotspots
    loadScene(initialSceneId, scene, setSphere, setHotspots);

    // Configura a interação com os hotspots
    setupInteraction(
      camera,
      overlayRef.current,
      scene,
      setSphere,
      setHotspots,
      setSceneId
    );

    // Salva o estado para o InitialPage usar
    setSceneState({
      scene,
      setSphere,
      setHotspots,
      setSceneId,
      overlay: overlayRef.current, // Passa o elemento DOM
      controls,
    });

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      controls.update();
      currentHotspots.forEach((hotspot) => {
        hotspot.lookAt(camera.position);
      });
    }
    animate();

    // Limpeza
    return () => {
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []); // [] significa que o useEffect só roda uma vez, quando o componente é montado

  useEffect(() => {
    // Se o estado da cena ainda não foi criado, não faça nada.
    if (!sceneState) return;

    // Pega as funções do estado já criado
    const { scene, setSphere, setHotspots } = sceneState;
    const newSceneId = sceneId || "entradaescola";

    // Usa a função teleportTo para carregar a nova cena com a transição
    teleportTo(
      newSceneId,
      overlayRef.current,
      scene,
      setSphere,
      setHotspots,
      () => {}
    );
  }, [sceneId, sceneState]);

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
        {sceneState && (
          <InitialPage
            scene={sceneState.scene}
            setSphere={sceneState.setSphere}
            setHotspots={sceneState.setHotspots}
            setSceneId={sceneState.setSceneId}
            overlay={sceneState.overlay}
            controls={sceneState.controls}
          />
        )}
      </div>
    </>
  );
}
