import { FaGithub, FaEnvelope } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

export default function Footer() {
  return (
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
              <ScrollLink
                to="sobre"
                smooth={true}
                duration={500}
                className="hover:text-blue-300 cursor-pointer transition"
              >
                Sobre
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="inspiracoes"
                smooth={true}
                duration={500}
                className="hover:text-blue-300 cursor-pointer transition"
              >
                Inspirações
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="recursos"
                smooth={true}
                duration={500}
                className="hover:text-blue-300 cursor-pointer transition"
              >
                Recursos
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contatos"
                smooth={true}
                duration={500}
                className="hover:text-blue-300 cursor-pointer transition"
              >
                Contatos
              </ScrollLink>
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
  );
}
