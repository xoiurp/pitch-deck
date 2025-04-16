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
      <div className="flex flex-col items-center justify-center h-full text-center">
        <motion.h1
          className="text-6xl font-bold text-primary mb-6 font-sofia"
          variants={textAnimation}
          custom={0}
          style={{ fontWeight: 700 }} // Sofia Pro Bold
        >
          [e] eles
        </motion.h1>
        
        <motion.p
          className="text-xl text-primary max-w-2xl mb-8 font-sofia"
          variants={textAnimation}
          custom={1}
          style={{ fontWeight: 300 }} // Sofia Pro Light
        >
          Saúde masculina descomplicada,
          <br />recorrente e acessível.
        </motion.p>
        
        <motion.div
          className="text-primary font-sofia"
          variants={textAnimation}
          custom={2}
          style={{ fontWeight: 300 }} // Sofia Pro Light
        >
          <p>Pitch Deck | Abril 2025</p>
          <p className="mt-2">Apresentado por: Felipe Ribeiro Monteiro de Fernando – CEO</p>
        </motion.div>
      </div>
    </Slide>
  );
};