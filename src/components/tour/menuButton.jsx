import { TiHome } from "react-icons/ti";

export default function MenuButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="group fixed top-8 right-8 z-50
        bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900
        hover:from-blue-600 hover:via-blue-700 hover:to-blue-800
        text-white p-5 rounded-full cursor-pointer
        shadow-[0_15px_35px_-5px_rgba(59,130,246,0.4)]
        hover:shadow-[0_20px_40px_-5px_rgba(59,130,246,0.6)]
        transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
        transform hover:scale-110 active:scale-95 
        hover:-translate-y-2 active:translate-y-0
        backdrop-blur-sm overflow-hidden
        before:absolute before:inset-0 before:rounded-2xl
        before:bg-gradient-to-br before:from-white/10 before:to-transparent
        before:opacity-0 before:transition-opacity before:duration-500
        hover:before:opacity-100"
    >
      {/* Ícone com animação */}
      <TiHome
        size={32}
        className="relative z-10 drop-shadow-lg transition-transform duration-300 
          group-hover:rotate-12 group-active:rotate-0"
      />

      {/* Efeito shimmer */}
      <div
        className="absolute inset-0 -translate-x-full group-hover:translate-x-full 
        transition-transform duration-1000 ease-out
        bg-gradient-to-r from-transparent via-white/20 to-transparent 
        skew-x-12 rounded-2xl"
      ></div>

      {/* Brilho interno */}
      <div
        className="absolute inset-2 rounded-xl bg-gradient-to-br 
        from-white/5 to-transparent opacity-0 group-hover:opacity-100
        transition-opacity duration-500"
      ></div>
    </button>
  );
}
