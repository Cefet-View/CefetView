import { motion, AnimatePresence } from "framer-motion";

export default function InfoModal({ isOpen, onClose, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* MODAL */}
          <motion.div
            initial={{
              translateY: "-170%",
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              translateY: "-50%",
              opacity: 1,
              scale: 1,
            }}
            exit={{
              translateY: "-170%",
              opacity: 0,
              scale: 0.8,
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 
              w-[80vw] h-[80vh] z-50
              bg-white
              rounded-3xl p-10 shadow-2xl
              flex flex-col justify-center items-center"
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}