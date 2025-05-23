export default function SceneButton({ label }) {
  return (
    <button
      className="bg-blue-700 hover:bg-blue-800 text-white font-extrabold py-3 px-8 rounded-2xl shadow-md
        transition duration-300 ease-in-out transform hover:scale-105 active:scale-95"
    >
      {label}
    </button>
  );
}
