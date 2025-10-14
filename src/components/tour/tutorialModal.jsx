import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";

export default function TutorialModal({ isOpen, onClose }) {
  const [index, setIndex] = useState(0);
  const gifs = [
    {
      title: "Movimentação no Tour",
      src: "gifs/Hotspot.webm",
    },
    {
      title: "Pesquisa de Lugares",
      src: "gifs/Pesquisa.webm",
    },
    {
      title: "Movimentação entre os blocos",
      src: "gifs/Blocos.webm",
    },
  ];

  
  useEffect(() => {
    gifs.forEach((gif) => {
      const img = new Image();
      img.src = gif.src;
    });
  }, []);

  // Funções de navegação
  const next = () => setIndex((i) => (i + 1) % gifs.length);
  const prev = () => setIndex((i) => (i - 1 + gifs.length) % gifs.length);

  // Animação mais leve
  const variants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 30 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-[90vw] max-w-3xl bg-gradient-to-br from-blue-700/90 to-blue-900/90 p-8 rounded-3xl shadow-2xl border border-white/20 text-white flex flex-col items-center"
          >
            {/* Botão de fechar */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-blue-300 transition-colors"
            >
              <IoClose size={32} />
            </button>

            <h2 className="text-4xl font-bold mb-6 text-center">Tutorial</h2>

            {/* Área dos GIFs */}
            {gifs.length > 0 ? (
              <div className="relative w-full flex flex-col items-center">
                <div className="relative w-[80%] h-[350px] flex items-center justify-center overflow-hidden bg-white/10 rounded-2xl shadow-lg">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={gifs[index].src}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="absolute w-full flex flex-col items-center"
                    >
                      <p className="text-2xl font-semibold mb-3">{gifs[index].title}</p>
                    <video
                      src={gifs[index].src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="max-h-[250px] rounded-xl border border-white/20 shadow-lg"
                    />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Controles */}
                <div className="flex items-center justify-between w-[70%] mt-6">
                  <button
                    onClick={prev}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
                  >
                    <IoChevronBack size={32} />
                  </button>

                  {/* Indicadores */}
                  <div className="flex gap-3">
                    {gifs.map((_, i) => (
                      <div
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-4 h-4 rounded-full cursor-pointer transition-all ${
                          i === index
                            ? "bg-white scale-110"
                            : "bg-white/40 hover:bg-white/60"
                        }`}
                      ></div>
                    ))}
                  </div>

                  <button
                    onClick={next}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
                  >
                    <IoChevronForward size={32} />
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-center text-lg opacity-70">Nenhum tutorial disponível</p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
