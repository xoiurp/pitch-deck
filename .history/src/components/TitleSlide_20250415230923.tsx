import { motion } from 'framer-motion';
import { Slide } from './Slide';

const textAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

export const TitleSlide = () => {
  return (
    <Slide className="bg-gradient-to-b from-[#F0DCC9] via-[#F1DFCD] to-white">
      {/* Adicionado padding p-4 */}
      <div className="flex flex-col items-center justify-center h-full text-center p-4">
        <motion.h1
          // Tamanho de fonte responsivo
          className="text-6xl md:text-8xl lg:text-[120px] font-bold text-primary mb-6 font-sofia"
          variants={textAnimation}
          custom={0}
        >
          [e] eles
        </motion.h1>
        
        <motion.p
          // Tamanho e max-width responsivos, estilo de subtítulo padrão aplicado
          className="text-lg md:text-xl text-[#8A3A34] mx-auto mb-8 font-sofia font-bold md:max-w-2xl"
          variants={textAnimation}
          custom={1}
        >
          Saúde masculina descomplicada,
          <br />recorrente e acessível.
        </motion.p>
        
        <motion.div
          // Estilo menor/detalhe aplicado, cores conflitantes removidas
          className="text-[16px] text-[#1A1918] font-sofia font-light"
          variants={textAnimation}
          custom={2}
        >
          <p>Pitch Deck | Abril 2025</p>
          <p className="mt-2">Apresentado por: Felipe Ribeiro Monteiro de Fernando – CEO</p>
        </motion.div>
      </div>
    </Slide>
  );
};