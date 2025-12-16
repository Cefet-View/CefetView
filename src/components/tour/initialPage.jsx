import React, { useState,useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import SceneButton from "./sceneButton.jsx";
import { loadScene } from "../../utils/sceneLoader.js";
import SearchButton from "./searchButton.jsx";
import MenuButton from "./menuButton.jsx";
import TutorialButton from "./tutorialButton.jsx";
import TutorialModal from "./tutorialModal.jsx";
import InfoModal from "./infoModal.jsx";

export default function InitialPage({
  scene,
  setSphere,
  setHotspots,
  setSceneId,
  overlay,
  controls,
}) {
  const [botaoSelecionado, setBotaoSelecionado] = useState("Inicial");
  const [moviment, setMoviment] = useState(false);
  const [show, setShow] = useState(true);
  const [tutorialAberto, setTutorialAberto] = useState(false);
  const [modalAberto, setModalAberto] = useState(false);
  const [modalId, setModalId] = useState(null);

useEffect(() => {
  function handleOpenModal(e) {
    setModalId(e.detail.modalId);
    setModalAberto(true);
  }

  window.addEventListener("openModal", handleOpenModal);

  return () => {
    window.removeEventListener("openModal", handleOpenModal);
  };
}, []);

function closeModal() {
  setModalAberto(false);
  setModalId(null);
}

  const botoes = {
    Inicial: "entradaescola",
    "Bloco A": "torre1_andar1",
    "Bloco B": "entrada_blocos_abc",
    "Bloco C": "torre2_andar1",
    "Bloco D": "entrada_bloco_d",
  };

  function trocarControle(bool) {
    controls.enableRotate = bool;
    controls.enableZoom = bool;
    controls.enablePan = bool;
  }

  function alternarMenu() {
    const novoShow = !show; // estado que a tela vai ficar
    setMoviment(!moviment);
    setShow(novoShow);
    trocarControle(!moviment);
    lockarHotspots(novoShow);
  }

  function lockarHotspots(desabilitado) {
    scene.children.forEach((obj) => {
      if (obj.userData?.type === "modal" || obj.userData?.targetScene) {
      obj.userData.enabled = !desabilitado;
}
    });
  }

  const containerVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: (i = 1) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <>
      {/* Painel principal */}
      <motion.div
        animate={{
          translateY: show ? "-50%" : "-170%",
          opacity: show ? 1 : 0.5,
          scale: show ? 1 : 0.8,
        }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[80vw] h-[80vh] bg-white/20 backdrop-blur-md rounded-3xl p-8 shadow-2xl flex flex-col justify-center items-center gap-10"
      >
        <motion.div
          custom={0}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <SearchButton
            onSearch={(sceneIdBuscado) => {
              setSceneId(sceneIdBuscado);
              loadScene(sceneIdBuscado, scene, setSphere, setHotspots, overlay);
            }}
          />
        </motion.div>

        <motion.div
          custom={1}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-6xl sm:text-8xl font-extrabold tracking-tight drop-shadow text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-blue-900">
            CEFET-VIEW
          </h1>
        </motion.div>

        <motion.div
          custom={2}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-8 mb-8"
        >
          <motion.button
            onClick={alternarMenu}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-gradient-to-r from-blue-600 to-blue-800 text-white font-extrabold text-4xl py-6 px-20 rounded-2xl shadow-lg
            transition duration-300 ease-in-out transform hover:shadow-blue-500/40 hover:shadow-2xl overflow-hidden cursor-pointer"
          >
            <span className="relative z-10">INICIAR</span>
            <div
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full 
              transition-transform duration-1000 ease-out
              bg-gradient-to-r from-transparent via-white/20 to-transparent 
              skew-x-12"
            ></div>
          </motion.button>

          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(botoes).map(([label, sceneId], index) => (
              <motion.div
                key={label}
                custom={index + 3}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <SceneButton
                  label={label}
                  isSelected={botaoSelecionado === label}
                  onClick={() => {
                    setBotaoSelecionado(label);
                    setSceneId(sceneId);
                    loadScene(sceneId, scene, setSphere, setHotspots, overlay);
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Botão de Menu */}
      <MenuButton onClick={alternarMenu} />

      {/* Botão de Tutorial */}
      <TutorialButton onClick={() => setTutorialAberto(true)} />

      <TutorialModal
        isOpen={tutorialAberto}
        onClose={() => setTutorialAberto(false)}
        gifs={[
          { title: "Movimentar câmera", src: "/gifs/movimento.gif" },
          { title: "Trocar de cena", src: "/gifs/troca.gif" },
        ]}
      />

      <InfoModal isOpen={modalAberto} onClose={closeModal}>
     {modalId === "modal-secretaria" && (
    <> 
      
      <h1 className="text-6xl font-extrabold text-blue-900">
        Secretaria
      </h1>
      
      <p className="text-xl text-justify max-w-3xl">
       A Secretaria Acadêmica do Cefet-RJ Campus Nova Iguaçu é o setor responsável por gerir e registrar toda a vida acadêmica dos estudantes da instituição. Seu propósito é assegurar a organização administrativa dos cursos, garantindo que processos como matrícula, emissão de documentos e registros escolares ocorram de forma correta, oficial e conforme as normas institucionais, servindo de elo entre os alunos, a coordenação dos cursos e a administração do campus.
      </p>
      <h2 className="text-4xl font-extrabold text-blue-900 mb-4 max-w-3xl mx-auto text-left">
      Horário de funcionamento
      </h2>
      <ul className="text-xl max-w-3xl mx-auto list-disc pl-6">
        <li>Atendimento presencial de segunda a sexta-feira</li>
        <li>9:00 às 12:00</li>
        <li>13:00 às 18:00</li>
      </ul>
      <h2 className="text-4xl font-extrabold text-blue-900 mb-4 max-w-3xl mx-auto text-left">
      Principais serviços prestados
      </h2>
      <ul className="text-xl max-w-3xl mx-auto list-disc pl-6">
        <li>Matrícula e rematrícula de alunos</li>
        <li>Emissão de documentos acadêmicos (declarações, históricos escolares, comprovantes de vínculo ou conclusão)</li>
        <li>Cancelamento de matrícula, mediante requerimento</li>
        <li>Solicitação de colação de grau</li>
        <li>Atendimento e orientação sobre registros acadêmicos (notas, frequência, situação do aluno)</li>
        <li>Apoio administrativo a alunos do ensino médio, técnico, graduação e pós-graduação</li>
        <li>Recebimento e encaminhamento de requerimentos acadêmicos diversos</li>
      </ul>
    </>
  )}

  {modalId === "modal-quadra" && (
    <> 
      
      <h1 className="text-6xl font-extrabold text-blue-900">
        Quadra
      </h1>
      
      <p className="text-xl text-justify max-w-3xl">
       A quadra poliesportiva do Cefet-RJ Campus Nova Iguaçu é um espaço destinado à prática de atividades físicas, esportivas e pedagógicas, servindo principalmente aos alunos da instituição. Seu propósito é apoiar o desenvolvimento físico, social e coletivo dos estudantes, sendo utilizada prioritariamente durante as aulas de Educação Física, sob orientação dos professores responsáveis, além de poder sediar atividades esportivas, projetos de extensão e eventos internos previamente autorizados pela administração do campus.
      </p>
      <h2 className="text-4xl font-extrabold text-blue-900 mb-4 max-w-3xl mx-auto text-center">
      Sobre o uso da quadra fora do horário de aula
      </h2>
      <p className="text-xl text-justify max-w-3xl">
       Caso alunos ou grupos desejem utilizar a quadra fora do horário regular das aulas, é indispensável solicitar autorização prévia junto à subprefeitura do campus, setor responsável pela administração e controle dos espaços físicos. A retirada da chave da quadra também deve ser feita exclusivamente na subprefeitura, conforme orientação recebida no momento da autorização. Não é permitido acessar a quadra por vias alternativas, como transpor grades ou cercas, nem utilizá-la sem autorização formal. O descumprimento dessas normas configura uso irregular do espaço institucional e poderá resultar em advertência, registro de ocorrência administrativa ou outras medidas disciplinares cabíveis, conforme as normas internas do Cefet-RJ.
      </p>
      
    </>
  )}


  {/* Exemplo de Modal */}
  {/* 
  {modalId === "modal-biblioteca" && (
    <>
      <h1 className="text-6xl font-extrabold text-blue-900">
        Biblioteca
      </h1>
      <p className="text-xl text-center max-w-3xl">
        Ambiente de estudo e pesquisa com acervo físico e digital.
      </p>
    </>
  )}
  */}
</InfoModal>
    </>
  );
}
