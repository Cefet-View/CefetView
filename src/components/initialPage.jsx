import React from "react";
import { useState } from "react";
import SceneButton from "./sceneButton";
import { loadScene } from "../utils/sceneLoader";

// Componentes

export default function InitialPage() {
  const [botaoSelecionado, setBotaoSelecionado] = useState("Inicial");

  // TODO Fazer o botão de iniciar funcionar, atualmente ele não faz nada
  
  // TODO Fazer com que ao clicar nos botões de cena, a cena seja carregada e a esfera atualizada com a textura correta
  // Atualmente os botões de cena apenas atualizam o estado do botão selecionado, mas não carregam a cena
  // Eu consegui trazer o sceneId para aqui porém o loadScene(sceneId, scene, setSphere, setHotspots) precisa desses outros parâmetros
  // Talvez seja necessário passar a cena, a esfera e os hotspots como props para o componente InitialPage ou usar um contexto global para gerenciar o estado da cena

  const botoes = {
    Inicial: "entradaescola",
    "Bloco A": "entradaquadra",
    "Bloco B": "entradaescola",
    "Bloco C": "entradaescola",
    "Bloco D": "entradaescola",
  };

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
          className="bg-blue-700 hover:bg-gray-100 text-white hover:text-blue-800 font-extrabold text-4xl py-6 px-20 rounded-2xl shadow-md
            transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 delay-100 hover:[transform:translateY(-.335rem)] hover:shadow-xl"
        >
          INICIAR
        </button>

        <div className="flex gap-6">
          {Object.entries(botoes).map(([label, sceneId]) => (
            <SceneButton
              key={label} // É necessário para o React identificar cada botão de forma única se não ele fica reclamando
              label={label} // Texto do botão
              isSelected={botaoSelecionado === label} // Verifica se o botão está selecionado, se sim retorna True com o ===
              onClick={() => {
                setBotaoSelecionado(label); // Atualiza o estado do botão selecionado
                loadScene(sceneId); // Chama a função de carregar a cena com o ID da cena
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
