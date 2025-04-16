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

// Remover a declaração não utilizada de logoAnimation
// const logoAnimation = {
//   hidden: { scale: 0.8, opacity: 0 },
//   visible: {
//     scale: 1,
//     opacity: 1,
//     transition: {
//       duration: 0.8,
//       ease: "easeOut"
//     }
//   }
// };

export const VisionSlide = () => {
  return (
    <Slide className="bg-gradient-to-b from-[#F1DFCD] via-[#ffff] to-white">
      {/* Padding e max-width responsivos */}
      <motion.div
        className="mx-auto text-center p-4 md:p-8 md:max-w-4xl"
        variants={containerAnimation}
        initial="hidden"
        animate="visible"
      >
        {/* Margem inferior responsiva */}
        <motion.div className="mb-8 md:mb-16" variants={itemAnimation}>
          {/* Tamanho de fonte responsivo */}
          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-semibold text-primary mb-4"> {/* Cor ajustada */}
            Nossa Visão
          </h2>
        </motion.div>

        <motion.div
          // Padding responsivo
          className="bg-white rounded-xl shadow-lg p-6 md:p-12 mb-12"
          variants={itemAnimation}
        >
          {/* Tamanho de fonte responsivo */}
          <p className="text-base md:text-lg lg:text-[20px] text-[#1A1918] font-sofia font-light mb-8 leading-relaxed">
            Construir a marca líder em saúde masculina na América Latina,
            baseada em cuidado integral, tecnologia e confiança.
          </p>
          
          {/* Tamanho de fonte responsivo */}
          <p className="text-base md:text-lg lg:text-[20px] text-[#1A1918] font-sofia font-light">
            E depois, levar o mesmo padrão de excelência para a saúde feminina.
          </p>
        </motion.div>

        <motion.div
          className="space-y-4"
          variants={itemAnimation}
        >
          {/* Tamanho de fonte responsivo */}
          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">
            [e] eles hoje. [a] elas em breve.
          </p>
          
          {/* Tamanho de fonte e margem responsivos */}
          <p className="text-base md:text-lg lg:text-[20px] text-[#1A1918] font-sofia font-light mt-4 md:mt-8">
            Obrigado.
          </p>

          {/* Tamanho de fonte e margem responsivos */}
          <div className="mt-4 md:mt-8 text-sm md:text-base lg:text-[16px] text-[#1A1918] font-sofia font-light">
            <p>Felipe Ribeiro Monteiro de Fernando</p>
            <p className="text-primary">CEO</p> {/* Mantém cor primária para cargo */}
            <p className="mt-2">contato@eles.com.br</p>
          </div>
        </motion.div>
      </motion.div>
    </Slide>
  );
};