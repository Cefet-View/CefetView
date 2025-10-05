import { useState } from "react";
import { scenesData } from "../../utils/scenesData.js";
import { IoSearch } from "react-icons/io5";

export default function SearchButton({ onSearch }) {
  const [pesquisa, setPesquisa] = useState("");

  const procurarCena = () => {
    // Procurar por chave do dicionario ou imagem que combine com o texto escrito
    const chaveEncontrada = Object.keys(scenesData).find((chave) => {
      return (
        chave.toLowerCase().includes(pesquisa.trim().toLowerCase()) ||
        scenesData[chave].image
          .toLowerCase()
          .includes(pesquisa.trim().toLowerCase())
      );
    });

    if (chaveEncontrada) {
      onSearch(chaveEncontrada); // Troca a imagem
      alert("imagem achada, repito imagem achada");
    } else {
      alert("Cena não encontrada.");
    }
  };

  return (
    <div
      className="bg-white/30 backdrop-blur-sm flex items-center px-4 py-2 rounded-full 
      border border-white/30 max-w-md w-full shadow-xl/40 space-x-3 transition"
    >
      <IoSearch size={24} className="text-gray-600" />
      <input
        type="text"
        placeholder="Digite o local desejado..."
        value={pesquisa}
        onChange={(x) => setPesquisa(x.target.value)}
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
          before:absolute before:inset-0  overflow-hidden
          before:bg-gradient-to-r before:from-white/20 before:to-white/10
          before:translate-x-[-100%] before:transition-transform before:duration-500
          hover:before:translate-x-[100%] before:skew-x-12"
      >
        IR
      </button>
    </div>
  );
}
