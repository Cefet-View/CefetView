import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";

export default function TutorialModal({ isOpen, onClose }) {
  const [index, setIndex] = useState(0);

  const gifs = React.useMemo(
    () => [
      { title: "Movimentação no Tour", src: "gifs/Hotspot.webm" },
      { title: "Movimentação entre os blocos", src: "gifs/Blocos.webm" },
      { title: "Movimentação por Rota", src: "gifs/Pesquisa_boa.webm" },
    ],
    []
  );

  useEffect(() => {
    gifs.forEach((gif) => {
      const img = new Image();
      img.src = gif.src;
    });
  }, [gifs]);

  const next = () => setIndex((i) => (i + 1) % gifs.length);
  const prev = () => setIndex((i) => (i - 1 + gifs.length) % gifs.length);

  const variants = {
    enter: { opacity: 0, scale: 0.98 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.98 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 sm:p-6 md:p-8"
        >
          <motion.div
            key="modal"
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 40 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-sm sm:max-w-md md:max-w-3xl lg:max-w-4xl xl:max-w-5xl h-[90vh] sm:h-[85vh] md:h-[80vh] bg-gradient-to-br from-blue-600/90 via-blue-800/90 to-blue-950/90 rounded-3xl shadow-2xl text-white flex flex-col items-center p-6 md:p-10 overflow-hidden"
          >
            {/* Botão de fechar */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 md:top-6 md:right-6 text-white/90 hover:text-white transition-colors cursor-pointer z-10"
              aria-label="Fechar tutorial"
            >
              <IoClose size={34} />
            </button>

            {/* Título */}
            <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold mb-6 text-center tracking-tight drop-shadow">
              Tutorial Interativo
            </h2>

            {/* Conteúdo principal */}
            {gifs.length > 0 ? (
              <div className="relative w-full flex flex-col items-center flex-1 justify-between">
                {/* Área de vídeo */}
                <div className="relative w-full max-w-full lg:max-w-4xl flex items-center justify-center overflow-hidden rounded-2xl bg-white/10 border border-white/10 shadow-lg aspect-video mb-4 md:mb-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={gifs[index].src}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.25 }}
                      className="absolute inset-0 flex flex-col items-center justify-center p-2"
                    >
                      <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 md:mb-4 drop-shadow-lg text-center px-2">
                        {gifs[index].title}
                      </p>
                      <video
                        src={gifs[index].src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto max-h-[40vh] sm:max-h-[45vh] md:max-h-[55vh] rounded-xl shadow-2xl object-contain"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Botões flutuantes de navegação */}
                  <button
                    onClick={prev}
                    className="absolute left-2 sm:left-3 md:left-6 top-1/2 -translate-y-1/2 cursor-pointer bg-blue-800/40 hover:bg-white/25 hover:text-blue-800 p-2 sm:p-3 rounded-full transition z-10"
                    aria-label="Tutorial anterior"
                  >
                    <IoChevronBack size={28} sm:size={32} />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-2 sm:right-3 md:right-6 top-1/2 -translate-y-1/2 cursor-pointer bg-blue-800/40 hover:bg-white/25 hover:text-blue-800 p-2 sm:p-3 rounded-full transition z-10"
                    aria-label="Próximo tutorial"
                  >
                    <IoChevronForward size={28} sm:size={32} />
                  </button>
                </div>

                {/* Indicadores */}
                <div className="flex gap-2 sm:gap-3 mb-4 md:mt-6">
                  {gifs.map((_, i) => (
                    <div
                      key={i}
                      onClick={() => setIndex(i)}
                      className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full cursor-pointer transition-all ${
                        i === index
                          ? "bg-white scale-125"
                          : "bg-white/40 hover:bg-white/60"
                      }`}
                      aria-label={`Ir para o tutorial ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-center text-lg opacity-70">
                Nenhum tutorial disponível.
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
