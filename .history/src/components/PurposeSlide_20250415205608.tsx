import { motion } from 'framer-motion';
import { Slide } from './Slide';

const containerAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const iconAnimation = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "backOut"
    }
  }
};

export const PurposeSlide = () => {
  return (
    <Slide> {/* Remover bg-gray-50 daqui */}
      <motion.div
        className="flex flex-col items-center justify-center text-center bg-gray-50 p-8 rounded-lg h-full"
        variants={containerAnimation}
      >
        {/* Ícone abstrato representando cuidado integral */}
        <motion.div
          className="w-24 h-24 mb-8 bg-primary bg-opacity-20 rounded-full flex items-center justify-center"
          variants={iconAnimation}
        >
          <svg
            className="w-12 h-12 text-primary"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </motion.div>

        <motion.h2
          className="text-3xl font-bold text-primary mb-4" // Substituir 'title' por classes Tailwind
          variants={itemAnimation}
        >
          Nosso Propósito
        </motion.h2>

        <motion.p
          className="text-xl text-gray-700 max-w-2xl mb-6" // Substituir 'subtitle' por classes Tailwind
          variants={itemAnimation}
        >
          Simplificar e desmistificar o cuidado com a saúde física e mental masculina.
        </motion.p>

        <motion.p
          className="text-lg text-gray-600 max-w-3xl"
          variants={itemAnimation}
        >
          Oferecemos acesso prático, contínuo e confiável a tratamentos que melhoram
          a qualidade de vida e a autoestima dos homens.
        </motion.p>
      </motion.div>
    </Slide>
  );
};