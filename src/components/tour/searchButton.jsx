import { useState } from "react";
import { scenesData } from "../../utils/scenesData.js";
import { IoSearch } from "react-icons/io5";
import toast from "react-hot-toast";

export default function SearchButton({ onSearch }) {
  const [pesquisa, setPesquisa] = useState("");
  const [resultados, setResultados] = useState([]);

  const procurarCena = () => {
    const termo = pesquisa
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    const chaveEncontrada = Object.keys(scenesData).find((chave) => {
      const cena = scenesData[chave];

      // Ignora cenas que não são pesquisáveis
      if (cena.pesquisavel === 0) return false;
      if (chave === termo) return chave.toLowerCase();
      return;
    });

    if (chaveEncontrada) {
      // Em vez de navegar/teleportar imediatamente, disparamos um evento global para iniciar o roteamento.
      // O routeManager escuta esse evento e calcula a rota (BFS) e destaca o hotspot correto.
      window.dispatchEvent(
        new CustomEvent("startRoute", { detail: { target: chaveEncontrada } })
      );
      toast.success("Roteamento iniciado para " + chaveEncontrada + "!");
      // NOTA: não chamamos onSearch(chaveEncontrada) aqui para evitar uma navegação imediata.
    } else {
      toast.error("Local não encontrado ou não pesquisável.");
    }
  };
  // AUTOCOMPLETE — gera sugestões enquanto digita
  const atualizarResultados = (valor) => {
    const termo = valor
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    if (termo === "") {
      setResultados([]);
      return;
    }

    const filtrados = Object.keys(scenesData).filter((chave) => {
      const cena = scenesData[chave];
      if (cena.pesquisavel === 0) return false;
      return chave.toLowerCase().includes(termo);
    });

    setResultados(filtrados.slice(0, 5)); // mostra só 5 sugestões
  };

  return (
    <div className="relative max-w-md w-full">
      <div
        className="bg-white/30 backdrop-blur-sm flex items-center px-4 py-2 rounded-full
      border border-white/30 max-w-md w-full shadow-xl/40 space-x-3 transition"
      >
        <IoSearch size={24} className="text-gray-600" />
        <input
          type="text"
          placeholder="Digite o local desejado"
          value={pesquisa}
          onChange={(x) => {
            setPesquisa(x.target.value);
            atualizarResultados(x.target.value);
          }}
          onKeyDown={(e) => e.key === "Enter" && procurarCena()}
          className="flex-grow outline-none font-medium"
        />
        <button
          type="button"
          onClick={procurarCena}
          className="group/btn relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800
          hover:from-blue-500 hover:via-blue-600 hover:to-blue-700
          text-white text-sm font-black rounded-full px-6 py-3
          transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
          transform active:scale-95 hover:shadow-[0_12px_25px_-4px_rgba(59,130,246,0.5)]
          shadow-[0_8px_20px_-4px_rgba(59,130,246,0.4)]
          before:absolute before:inset-0  overflow-hidden cursor-pointer
          before:bg-gradient-to-r before:from-white/20 before:to-white/10
          before:translate-x-[-100%] before:transition-transform before:duration-500
          hover:before:translate-x-[100%] before:skew-x-12"
        >
          IR
        </button>
      </div>

      {/* Lista de sugestões */}
      {resultados.length > 0 && (
        <ul
          className="absolute left-0 right-0 mt-2 bg-white/90 backdrop-blur-md
          border border-white/30 rounded-xl shadow-lg z-50"
        >
          {resultados.map((item) => (
            <li
              key={item}
              onClick={() => {
                setPesquisa(item);
                setResultados([]);
              }}
              className="px-4 py-2 cursor-pointer hover:bg-blue-200/40 transition font-medium"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
