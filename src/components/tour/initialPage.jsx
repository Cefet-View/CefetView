import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import SceneButton from "./sceneButton.jsx";
import { loadScene } from "../../utils/sceneLoader.js";
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
    "Bloco A": "entrada_blocos_abc",
    "Bloco B": "entrada_blocos_abc",
    "Bloco C": "entradaescola",
    "Bloco D": "entrada_bloco_d",
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
    scene.children.forEach((obj) => {
      if (obj.userData?.targetScene) {
        obj.userData.enabled = !desabilitado;
      }
    });
  }

  const containerVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: (i = 1) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <>
      {/* Painel principal */}
      <motion.div
        animate={{
          translateY: show ? "-50%" : "-170%",
          opacity: show ? 1 : 0.5,
          scale: show ? 1 : 0.8,
        }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[80vw] h-[80vh] bg-white/20 backdrop-blur-md rounded-3xl p-8 shadow-2xl flex flex-col justify-center items-center gap-10"
      >
        <motion.div
          custom={0}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <SearchButton
            onSearch={(sceneIdBuscado) => {
              setSceneId(sceneIdBuscado);
              loadScene(sceneIdBuscado, scene, setSphere, setHotspots, overlay);
            }}
          />
        </motion.div>

        <motion.div
          custom={1}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-6xl sm:text-8xl font-extrabold tracking-tight drop-shadow text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-blue-900">
            CEFET-VIEW
          </h1>
        </motion.div>

        <motion.div
          custom={2}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-8 mb-8"
        >
          <motion.button
            onClick={alternarMenu}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-gradient-to-r from-blue-600 to-blue-800 text-white font-extrabold text-4xl py-6 px-20 rounded-2xl shadow-lg
            transition duration-300 ease-in-out transform hover:shadow-blue-500/40 hover:shadow-2xl overflow-hidden"
          >
            <span className="relative z-10">INICIAR</span>
            <div
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full 
              transition-transform duration-1000 ease-out
              bg-gradient-to-r from-transparent via-white/20 to-transparent 
              skew-x-12"
            ></div>
          </motion.button>

          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(botoes).map(([label, sceneId], index) => (
              <motion.div
                key={label}
                custom={index + 3}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
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
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Botão de Menu */}
      <MenuButton onClick={alternarMenu} />
    </>
  );
}
