import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Slide } from './Slide';

// Importar as imagens
import image1 from '../dutasterida-eles.png';
import image2 from '../eles-solucao-topica_MoreDetail-v3_x2_2048x2048 2.png';
import image3 from '../finasterida-topica-em-uso-hz 1.png';
import image4 from '../Frame 36.png';

const images = [image1, image2, image3, image4];

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Muda a imagem a cada 5 segundos

    return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar
  }, []);

  return (
    <Slide className="relative overflow-hidden"> {/* Adiciona relative e overflow-hidden */}
      {/* Container para as imagens de fundo */}
      <AnimatePresence initial={false}>
        <motion.img
          key={currentImageIndex}
          src={images[currentImageIndex]}
          alt={`Background image ${currentImageIndex + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }} // Opacidade desejada
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }} // Transição suave
          className="absolute inset-0 w-full h-full object-cover -z-10" // Posicionamento e z-index
        />
      </AnimatePresence>

      {/* Conteúdo original do slide */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center bg-gray-50 bg-opacity-80 p-8 rounded-lg h-full" // Adiciona relative, z-10 e bg-opacity
        variants={containerAnimation}
        initial="hidden" // Garante que a animação containerAnimation inicie
        animate="visible" // Garante que a animação containerAnimation execute
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