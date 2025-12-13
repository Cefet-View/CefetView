import {
  FaGithub,
  FaUsers,
  FaMapMarkedAlt,
  FaLaptopCode,
  FaUniversity,
  FaIndustry,
  FaBalanceScale,
  FaCity,
  FaEnvelope,
} from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import Footer from "../components/home/footer.jsx";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* Header */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex items-center justify-between h-24 px-8 sm:px-16 w-full fixed top-0 left-0 rounded-b-3xl bg-white shadow-lg z-50"
      >
        <ScrollLink
          to="hero"
          smooth={true}
          duration={500}
          className="ml-2 sm:ml-8 text-4xl sm:text-6xl cursor-pointer font-extrabold tracking-tight drop-shadow text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-blue-900"
        >
          CEFET VIEW
        </ScrollLink>

        <motion.nav
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden sm:flex gap-6 sm:gap-10 text-lg sm:text-xl font-bold items-center m-2 sm:m-6 text-blue-800"
        >
          <ScrollLink
            to="sobre"
            smooth={true}
            duration={500}
            className="hover:text-blue-600 transition cursor-pointer"
          >
            Sobre
          </ScrollLink>
          <ScrollLink
            to="inspiracoes"
            smooth={true}
            duration={500}
            className="hover:text-blue-600 transition cursor-pointer"
          >
            Inspirações
          </ScrollLink>
          <ScrollLink
            to="recursos"
            smooth={true}
            duration={500}
            className="hover:text-blue-600 transition cursor-pointer"
          >
            Recursos
          </ScrollLink>
          <ScrollLink
            to="quem-somos"
            smooth={true}
            duration={500}
            className="hover:text-blue-600 transition cursor-pointer"
          >
            Quem Somos
          </ScrollLink>
          <ScrollLink
            to="contatos"
            smooth={true}
            duration={500}
            className="hover:text-blue-600 transition cursor-pointer"
          >
            Contatos
          </ScrollLink>
          <a
            href="https://github.com/Cefet-View/CefetView"
            target="_blank"
            className="hover:scale-110 transition"
          >
            <FaGithub size={32} />
          </a>
        </motion.nav>
      </motion.header>

      <main>
        {/* Hero */}
        <motion.section
          id="hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="h-screen flex flex-row justify-center items-center gap-16 bg-gradient-to-br from-blue-900 to-blue-400 relative pt-24 px-6"
        >
          {/* SVG original */}
          <motion.svg
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            width="544"
            height="617"
            viewBox="0 0 544 617"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-8 hidden sm:block"
          >
            <path
              d="M138.473 153.268H0L192.873 0L138.473 153.268Z"
              fill="white"
            />
            <path
              d="M490.366 0H222.197L74.7042 475.522L168.563 617L316.509 145.408H544L490.366 0Z"
              fill="white"
            />
            <path
              d="M276.945 385.134L331.345 227.936H514.327L469.818 385.134H276.945Z"
              fill="white"
            />
            <path
              d="M197.818 617L242.327 475.522H440.145L197.818 617Z"
              fill="white"
            />
          </motion.svg>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <h1 className="text-6xl sm:text-7xl font-extrabold text-white mt-8 drop-shadow-lg">
              Uma nova forma de <br /> conhecer o campus
            </h1>
            <h3 className="text-xl text-white/80 mt-2 drop-shadow-lg">
              Tour virtual em 360° do <b>CEFET/RJ - Nova Iguaçu</b>, acessível e
              imersivo
            </h3>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15 }}
              onClick={() => navigate("/tour/entradaescola")}
              className="mt-6 group relative bg-white text-blue-600 font-extrabold cursor-pointer text-2xl sm:text-3xl py-4 px-12 rounded-2xl shadow-lg transition duration-300 ease-in-out transform hover:shadow-2xl overflow-hidden"
            >
              Iniciar Tour
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-blue-700/20 to-transparent skew-x-12"></div>
            </motion.button>
          </motion.div>
        </motion.section>

        {/* Sobre o Projeto */}
        <motion.section
          id="sobre"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-24 px-8 sm:px-24 bg-white text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-6">
            Sobre o Projeto
          </h2>
          <div className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed space-y-6">
            <p>
              O <b>CEFET VIEW</b> é um tour virtual em 360° que nasceu da
              necessidade de aproximar alunos, familiares e a comunidade do{" "}
              <b>CEFET/RJ - Campus Nova Iguaçu</b>.
            </p>
            <p>
              A iniciativa busca superar barreiras logísticas e geográficas,
              oferecendo uma <b>exploração imersiva</b> por meio de imagens
              panorâmicas e informações sobre salas de aula, laboratórios e
              setores administrativos.
            </p>
            <p>
              Inspirado em experiências internacionais, como o Louvre (França,
              2025), e nacionais, como o CEFET-MG (2025), o projeto reforça o
              compromisso institucional com
              <b> inovação, acessibilidade e transparência</b>.
            </p>
          </div>

          {/* Inspirações */}
          <motion.section
            id="inspiracoes"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="py-24 px-8 sm:px-24 bg-gray-50 text-center"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-12">
              Inspirações do Projeto
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {[
                {
                  title: "CEFET-MG Leopoldina",
                  desc: "Tour virtual do CEFET-MG, uma referência nacional em experiências digitais educacionais.",
                  link: "https://tour.linceonline.com.br",
                  img: "/CefetView/images/home/cefetmg.png",
                },
                {
                  title: "Museu do Louvre",
                  desc: "Tour virtual internacional do Louvre, inspirando exploração imersiva e acessível.",
                  link: "https://www.louvre.fr/visites-en-ligne/petitegalerie/saison6/",
                  img: "/CefetView/images/home/louvre.png",
                },
                {
                  title: "Museu de História Natural",
                  desc: "Tour Virtual do Museu da Histório Natural.",
                  link: "https://naturalhistory2.si.edu/vt3/NMNH/?startscene=21&startactions=lookat(-62.93,-20.5,120,0,0);",
                  img: "/CefetView/images/home/museuhistorianatural.png",
                },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col items-center"
                >
                  <div className="w-full h-48 sm:h-64 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-t-2xl transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-blue-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{item.desc}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.section>

          <h3 className="text-2xl sm:text-3xl font-bold text-blue-800 mt-12">
            Alinhado aos Objetivos da ONU (ODS)
          </h3>

          <p className="text-xl text-black/50 mb-8 drop-shadow-lg">
            O projeto contribui diretamente para os seguintes Objetivos de
            Desenvolvimento Sustentável (ODS) da ONU:
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {[
              { src: "/CefetView/images/Utilitários/ods4.svg", alt: "ODS 4" },
              { src: "/CefetView/images/Utilitários/ods9.svg", alt: "ODS 9" },
              { src: "/CefetView/images/Utilitários/ods10.svg", alt: "ODS 10" },
              { src: "/CefetView/images/Utilitários/ods11.svg", alt: "ODS 11" },
            ].map((ods, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl shadow-lg overflow-hidden"
              >
                <img
                  src={ods.src}
                  alt={ods.alt}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Recursos */}
        <motion.section
          id="recursos"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-24 px-8 sm:px-24 bg-gradient-to-br from-blue-50 to-blue-100 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-12">
            Recursos do CEFET VIEW
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {[
              {
                icon: <FaMapMarkedAlt size={50} />,
                title: "Tour 360°",
                desc: "Navegação intuitiva por pontos estratégicos do campus.",
              },
              {
                icon: <FaLaptopCode size={50} />,
                title: "Acessível",
                desc: "Funciona em navegadores modernos sem equipamentos extras.",
              },
              {
                icon: <FaUsers size={50} />,
                title: "Inclusivo",
                desc: "Atende alunos, familiares e comunidade de forma ampla.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center text-blue-900"
              >
                {item.icon}
                <h3 className="mt-4 text-2xl font-bold">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Quem Somos */}
        <motion.section
          id="quem-somos"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-24 px-8 sm:px-24 bg-white text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-12">
            Quem Somos
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-12">
            Conheça a equipe por trás do <b>CEFET VIEW</b>, um projeto
            desenvolvido com dedicação e paixão por estudantes e orientador do
            CEFET/RJ - Campus Nova Iguaçu.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {[
              {
                name: "Ulisses Roque Tomaz",
                role: "Orientador",
                github: "https://github.com/UlissesRTomaz",
              },
              {
                name: "Juan Canle Marinho",
                role: "Desenvolvedor",
                github: "https://github.com/JuanCanle",
              },
              {
                name: "Matheus Santos Fonseca",
                role: "Desenvolvedor",
                github: "https://github.com/Matheus-Santos-Fonseca",
              },
              {
                name: "Davi Nogueira Souto",
                role: "Desenvolvedor",
                github: "https://github.com/DaviNogueira12",
              },
            ].map((member, i) => (
              <motion.a
                key={i}
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mb-4 shadow-md">
                  <FaGithub size={48} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 font-semibold mb-4">
                  {member.role}
                </p>
                <div className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition">
                  <FaGithub size={20} />
                  <span className="text-sm font-medium">Ver perfil</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Contatos */}
        <motion.section
          id="contatos"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-24 px-8 sm:px-24 bg-gradient-to-br from-blue-50 to-blue-100 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-12">
            Entre em Contato
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-blue-50 p-8 rounded-2xl shadow-md flex flex-col items-center"
            >
              <FaEnvelope size={48} className="text-blue-600 mb-4" />
              <p className="text-lg font-semibold text-blue-800 mb-4">
                Tem alguma sugestão?
              </p>
              <a
                href="mailto:cefetview@gmail.com"
                className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Enviar Email
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 p-8 rounded-2xl shadow-md flex flex-col items-center"
            >
              <FaGithub size={48} className="text-white mb-4" />
              <p className="text-lg font-semibold text-white mb-4">
                Venha conhecer melhor nosso projeto
              </p>
              <a
                href="https://github.com/Cefet-View/CefetView"
                target="_blank"
                className="bg-white text-gray-900 font-bold py-3 px-8 rounded-lg shadow hover:bg-gray-200 transition"
              >
                Acessar GitHub
              </a>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </>
  );
}
