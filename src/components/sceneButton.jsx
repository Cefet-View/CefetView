export default function SceneButton({ label, isSelected, onClick }) {
  return (
    <button
      onClick={onClick} // Função que é chamada quando o botão é clicado para passar o prop onClick
      className={`
        group relative font-extrabold py-3 px-8 rounded-2xl shadow-md
        transition duration-300 ease-in-out transform
        hover:scale-105 active:scale-95 hover:[transform:translateY(-.335rem)] hover:shadow-xl
        ${
          isSelected
            ? "bg-gray-100 text-blue-800 outline-4 outline-gray-100 outline-offset-4"
            : "bg-blue-700 text-white"
        }
        overflow-hidden
      `}
    >
      <span className="relative z-10">{label}</span>

      <div
        className="absolute inset-0 -translate-x-full group-hover:translate-x-full 
        transition-transform duration-1000 ease-out
        bg-gradient-to-r from-transparent via-white/20 to-transparent 
        skew-x-12"
      ></div>
    </button>
  );
}
