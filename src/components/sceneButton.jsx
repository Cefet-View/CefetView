export default function SceneButton({ label, isSelected, onClick }) {
  return (
    <button
      onClick={onClick} // Função que é chamada quando o botão é clicado para passar o prop onClick
      className={`
        font-extrabold py-3 px-8 rounded-2xl shadow-md
        transition duration-300 ease-in-out transform
        hover:scale-105 active:scale-95 hover:[transform:translateY(-.335rem)] hover:shadow-xl
        ${
          isSelected
            ? "bg-gray-100 text-blue-800 outline-4 outline-gray-100 outline-offset-4"
            : "bg-blue-700 text-white hover:bg-gray-100 hover:text-blue-800"
        }
      `}
    >
      {label}
    </button>
  );
}
