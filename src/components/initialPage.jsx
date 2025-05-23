import React from "react";
import SceneButton from "./sceneButton";

// Componentes

export default function InitialPage() {
  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-[90vw] h-[80vh]
        bg-white/30 backdrop-blur-md rounded-3xl p-8 shadow-2xl
        flex flex-col justify-center items-center gap-10"
    >
      <h1
        className="text-8xl font-extrabold 
        bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-blue-800"
      >
        CEFET-VIEW
      </h1>

      {/* Conteúdo centralizado na parte inferior */}
      <div className="flex flex-col items-center gap-8 mb-8">
        {/* Botão Iniciar */}
        <button
          className="bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-4xl py-6 px-20 rounded-2xl shadow-md
            transition duration-300 ease-in-out transform hover:scale-105 active:scale-95"
        >
          INICIAR
        </button>

        <div className="flex gap-6">
          <SceneButton label="Inicial" />
          <SceneButton label="Bloco A" />
          <SceneButton label="Bloco B" />
          <SceneButton label="Bloco C" />
          <SceneButton label="Bloco D" />
        </div>
      </div>
    </div>
  );
}
