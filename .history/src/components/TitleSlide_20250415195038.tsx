import { motion } from 'framer-motion';
import { Slide } from './Slide';

const logoAnimation = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

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
    <Slide className="bg-white">
      <div className="flex flex-col items-center justify-center text-center">
        <motion.img
          src="/logo_bege.png"
          alt="[e] eles Logo"
          className="w-48 h-48 mb-8"
          variants={logoAnimation}
        />
        
        <motion.h1
          className="title text-primary"
          variants={textAnimation}
          custom={0}
        >
          [e] eles
        </motion.h1>
        
        <motion.p
          className="subtitle"
          variants={textAnimation}
          custom={1}
        >
          Saúde masculina descomplicada, recorrente e acessível.
        </motion.p>
        
        <motion.div
          className="mt-4 text-gray-600"
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