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

export const VisionSlide = () => {
  return (
    <Slide className="bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerAnimation}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="mb-16" variants={itemAnimation}>
          <h2 className="title text-primary">
            Nossa Visão
          </h2>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl shadow-lg p-12 mb-12"
          variants={itemAnimation}
        >
          <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 leading-relaxed">
            Construir a marca líder em saúde masculina na América Latina,
            baseada em cuidado integral, tecnologia e confiança.
          </p>
          
          <p className="text-xl text-gray-600">
            E depois, levar o mesmo padrão de excelência para a saúde feminina.
          </p>
        </motion.div>

        <motion.div variants={logoAnimation}>
          <img
            src="/logo_bege.png"
            alt="[e] eles Logo"
            className="w-32 h-32 mx-auto mb-8"
          />
        </motion.div>

        <motion.div
          className="space-y-4"
          variants={itemAnimation}
        >
          <p className="text-2xl font-bold text-primary">
            [e] eles hoje. [e] elas em breve.
          </p>
          
          <p className="text-xl font-bold text-gray-800 mt-8">
            Obrigado.
          </p>

          <div className="mt-8 text-gray-600">
            <p>Felipe Ribeiro Monteiro de Fernando</p>
            <p className="text-primary">CEO</p>
            <p className="mt-2">[e-mail removido]</p>
          </div>
        </motion.div>
      </motion.div>
    </Slide>
  );
};