import React, { useState } from "react";
import SceneButton from "./sceneButton.jsx";
import { loadScene } from "../utils/sceneLoader";
import SearchButton from "./searchButton.jsx";
import MenuButton from "./menuButton.jsx";

export default function InitialPage({
  scene,
  setSphere,
  setHotspots,
  setSceneId,
  overlay,
  controls,
}) {
  const [botaoSelecionado, setBotaoSelecionado] = useState("Inicial");
  const [moviment, setMoviment] = useState(false);
  const [show, setShow] = useState(true);

  const botoes = {
    Inicial: "entradaescola",
    "Bloco A": "entradaquadra",
    "Bloco B": "entradaescola",
    "Bloco C": "entradaescola",
    "Bloco D": "entradaescola",
  };

  function trocarControle(bool) {
    controls.enableRotate = bool;
    controls.enableZoom = bool;
    controls.enablePan = bool;
  }

  function alternarMenu() {
    const novoShow = !show; // estado que a tela vai ficar
    setMoviment(!moviment);
    setShow(novoShow);
    trocarControle(!moviment);
    lockarHotspots(novoShow);
  }

  function lockarHotspots(desabilitado) {
    // Desabilita todos os hotspots
    scene.children.forEach((obj) => {
      if (obj.userData?.targetScene) {
        obj.userData.enabled = !desabilitado; // se desabilitado for true → enabled = false
      }
    });
  }

  return (
    <>
      {/* Painel principal */}
      <div
        className={`
          ${
            show
              ? "-translate-y-1/2 opacity-100 scale-100"
              : "-translate-y-[170%] opacity-50 scale-80"
          }
          absolute top-1/2 left-1/2 -translate-x-1/2 w-[80vw] h-[80vh]
          bg-white/20 backdrop-blur-md rounded-3xl p-8 shadow-2xl
          flex flex-col justify-center items-center gap-10
          transition-all duration-700 ease-in-out
        `}
      >
        <div
          className="animate-[fadeInUp_0.8s_ease-out]"
          style={{ animationDelay: `0s` }}
        >
          <SearchButton
            onSearch={(sceneIdBuscado) => {
              setSceneId(sceneIdBuscado);
              loadScene(sceneIdBuscado, scene, setSphere, setHotspots, overlay);
            }}
          />
        </div>

        <div
          className="animate-[fadeInUp_0.8s_ease-out]"
          style={{ animationDelay: `0.1s` }}
        >
          <h1 className="text-6xl sm:text-8xl font-extrabold tracking-tight drop-shadow text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-blue-900">
            CEFET-VIEW
          </h1>
        </div>

        <div
          className="flex flex-col items-center gap-8 mb-8 animate-[fadeInUp_0.8s_ease-out]"
          style={{ animationDelay: `0.2s` }}
        >
          <button
            onClick={alternarMenu}
            className="group relative bg-gradient-to-r from-blue-600 to-blue-800 text-white font-extrabold text-4xl py-6 px-20 rounded-2xl shadow-lg
            transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 hover:shadow-blue-500/40 hover:shadow-2xl
            overflow-hidden"
          >
            <span className="relative z-10">INICIAR</span>
            {/* Efeito shimmer (onda passando) */}
            <div
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full 
              transition-transform duration-1000 ease-out
              bg-gradient-to-r from-transparent via-white/20 to-transparent 
              skew-x-12"
            ></div>
          </button>

          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(botoes).map(([label, sceneId], index) => (
              <div
                key={label}
                className="animate-[fadeInUp_0.8s_ease-out]"
                style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
              >
                <SceneButton
                  label={label}
                  isSelected={botaoSelecionado === label}
                  onClick={() => {
                    setBotaoSelecionado(label);
                    setSceneId(sceneId);
                    loadScene(sceneId, scene, setSphere, setHotspots, overlay);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Botão de Menu */}
      <MenuButton onClick={alternarMenu} />
    </>
  );
}

