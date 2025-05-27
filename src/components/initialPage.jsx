import React from "react";
import SceneButton from "./sceneButton";

// Componentes

export default function InitialPage() {
  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-[80vw] h-[80vh]
        bg-white/20 backdrop-blur-md rounded-3xl p-8 shadow-2xl
        flex flex-col justify-center items-center gap-10"
    >
      <h1
        className="text-8xl font-extrabold 
        bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-blue-900"
      >
        CEFET-VIEW
      </h1>
      <div className="flex flex-col items-center gap-8 mb-8">
        <button
          className="bg-blue-700  hover:bg-gray-100 text-white hover:text-blue-800 font-extrabold text-4xl py-6 px-20 rounded-2xl shadow-md
            transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 delay-100"
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
