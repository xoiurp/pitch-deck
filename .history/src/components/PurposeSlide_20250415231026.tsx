import { motion } from 'framer-motion';
import { Slide } from './Slide';

// Importar as imagens
import image1 from '../dutasterida-eles.png';
import image2 from '../eles-solucao-topica_MoreDetail-v3_x2_2048x2048 2.png';
import image3 from '../finasterida-topica-em-uso-hz 1.png';
import image4 from '../Frame 36.png';

const images = [image1, image2, image3, image4]; // Manter array de imagens

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

// Nova variante para a animação das imagens inferiores
const imagesContainerAnimation = {
  hidden: { opacity: 0, x: "100%" }, // Começa fora da tela à direita
  visible: {
    opacity: 1,
    x: 0, // Entra deslizando para a esquerda
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2 // Anima as imagens em sequência
    }
  },
  exit: {
    opacity: 0,
    x: "100%", // Sai deslizando para a direita
    transition: {
      duration: 0.5,
      ease: "easeIn"
    }
  }
};

// Variante para cada imagem individual (opcional, pode ser só stagger)
const imageItemAnimation = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};


export const PurposeSlide = () => {
  return (
    <Slide className="bg-gradient-to-b from-[#FFFFF] via-[#F1DFCD]  to-white">
      {/* Container principal do conteúdo - ajustado para ocupar espaço superior */}
      <motion.div
        // Padding responsivo
        className="flex flex-col items-center text-center p-4 md:p-8 flex-grow"
        variants={containerAnimation}
        initial="hidden"
        animate="visible"
        exit="hidden" // Adicionado exit para animação de saída do texto
      >
        {/* Ícone abstrato representando cuidado integral */}
        <motion.div
          // Tamanho do ícone responsivo
          className="w-16 h-16 md:w-24 md:h-24 mb-8 bg-primary bg-opacity-20 rounded-full flex items-center justify-center"
          variants={iconAnimation}
        >
          <svg
            // Tamanho do svg interno responsivo (opcional, mas bom)
            className="w-8 h-8 md:w-12 md:h-12 text-primary"
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
          // Tamanho de fonte responsivo
          className="text-4xl md:text-5xl lg:text-[64px] font-semibold text-primary mb-4"
          variants={itemAnimation}
        >
          Nosso Propósito
        </motion.h2>

        {/* Padrão SolutionSlide Subtítulo aplicado */}
        <motion.p
          // Tamanho de fonte responsivo
          className="text-lg md:text-xl text-[#8A3A34] max-w-2xl mx-auto mb-8 font-sofia font-bold"
          variants={itemAnimation}
        >
          Simplificar e desmistificar o cuidado com a saúde física e mental masculina.
        </motion.p>

        {/* Padrão SolutionSlide Texto Principal aplicado */}
        <motion.p
          // Tamanho de fonte responsivo
          className="text-base md:text-lg lg:text-[20px] text-[#1A1918] max-w-2xl mx-auto font-sofia font-light"
          variants={itemAnimation}
        >
          Oferecemos acesso prático, contínuo e confiável a tratamentos que melhoram
          a qualidade de vida e a autoestima dos homens.
        </motion.p>

      </motion.div> {/* Fim do container do conteúdo principal */}

      {/* Novo container para as imagens inferiores */}
      <motion.div
        // Layout responsivo (grid no mobile, flex no desktop), gap e padding responsivos
        className="grid grid-cols-2 md:flex justify-center items-center gap-2 md:gap-4 p-2 pb-4 md:p-4 md:pb-8 w-full"
        variants={imagesContainerAnimation}
        initial="hidden"
        animate="visible"
        exit="exit" // Usar a variante 'exit' definida
      >
        {images.map((imgSrc, index) => (
          <motion.img
            key={index}
            src={imgSrc}
            alt={`Imagem produto ${index + 1}`}
            // Tamanho da imagem responsivo
            className="w-32 h-32 md:w-48 md:h-48 lg:w-80 lg:h-80 object-cover rounded-lg shadow-md"
            variants={imageItemAnimation} // Animação individual (opcional)
          />
        ))}
      </motion.div>
    </Slide>
  );
};