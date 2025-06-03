import React from "react";
import { useState } from "react";
import SceneButton from "./sceneButton";
import { loadScene } from "../utils/sceneLoader";

// Componentes

export default function InitialPage({ scene, setSphere, setHotspots, setSceneId, overlay }) {
  // TODO Fazer com que ao clicar nos botões de cena, a cena seja carregada e a esfera atualizada com a textura correta
  // Atualmente os botões de cena apenas atualizam o estado do botão selecionado, mas não carregam a cena
  // Eu consegui trazer o sceneId para aqui porém o loadScene(sceneId, scene, setSphere, setHotspots) precisa desses outros parâmetros
  // Talvez seja necessário passar a cena, a esfera e os hotspots como props para o componente InitialPage ou usar um contexto global para gerenciar o estado da cena

  const [botaoSelecionado, setBotaoSelecionado] = useState("Inicial");

  const [show, setShow] = useState(true);

  const botoes = {
    Inicial: "entradaescola",
    "Bloco A": "entradaquadra",
    "Bloco B": "entradaescola",
    "Bloco C": "entradaescola",
    "Bloco D": "entradaescola",
  };

  return (
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
        transition-all duration-1000 ease-in-out`}
    >
      <h1
        className="text-8xl font-extrabold
        bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-blue-900"
      >
        CEFET-VIEW
      </h1>

      <div className="flex flex-col items-center gap-8 mb-8">
        <button
          onClick={() => {
            setShow(!show);
          }}
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
              onClick={ () => 
                {
                setBotaoSelecionado(label); // muda visual
                setSceneId(sceneId); // atualiza o id da cena, se necessário
                loadScene(sceneId, scene, setSphere, setHotspots, overlay); // carrega a nova cena
                } }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
