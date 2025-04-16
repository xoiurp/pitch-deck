import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SlideProps {
  children: ReactNode;
  className?: string;
}

const slideVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4
    }
  }
};

export const Slide = ({ children, className = '' }: SlideProps) => {
  return (
    <motion.div
      className={`slide h-full font-sofia ${className}`}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={slideVariants}
    >
      <div className="slide-content h-full"> {/* Adicionado h-full aqui também */}
        {children}
      </div>
    </motion.div>
  );
};