import { FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-12 px-8 sm:px-24">
        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-3 text-center sm:text-left">
          <div>
            <h3 className="text-xl font-bold mb-4">CefetView</h3>
            <p className="text-white/80">
              Tour virtual em 360° que moderniza a apresentação institucional do
              CEFET/RJ - Campus Nova Iguaçu.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#sobre" className="hover:text-blue-300 transition">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#recursos" className="hover:text-blue-300 transition">
                  Recursos
                </a>
              </li>
              <li>
                <a href="#contatos" className="hover:text-blue-300 transition">
                  Contatos
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Conecte-se</h3>
            <div className="flex justify-center sm:justify-start gap-6">
              <a
                href="https://github.com/Cefet-View/CefetView"
                target="_blank"
                className="hover:text-blue-300 transition cursor-pointer"
              >
                <FaGithub size={28} />
              </a>
              <a
                href="mailto:cefetview@gmail.com"
                target="_blank"
                className="hover:text-blue-300 transition cursor-pointer"
              >
                <FaEnvelope size={28} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-white/70 text-sm">
          &copy; {new Date().getFullYear()} CefetView - Todos os direitos
          reservados
        </div>
      </footer>
    </>
  );
}
