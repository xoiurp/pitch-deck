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
          {/* Estilo do título principal aplicado */}
          <h2 className="text-[64px] font-semibold text-primary mb-4">
            Nossa Visão
          </h2>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl shadow-lg p-12 mb-12"
          variants={itemAnimation}
        >
          {/* Estilo principal aplicado */}
          <p className="text-[20px] text-[#1A1918] font-sofia font-light mb-8 leading-relaxed">
            Construir a marca líder em saúde masculina na América Latina,
            baseada em cuidado integral, tecnologia e confiança.
          </p>
          
          {/* Estilo principal aplicado */}
          <p className="text-[20px] text-[#1A1918] font-sofia font-light">
            E depois, levar o mesmo padrão de excelência para a saúde feminina.
          </p>
        </motion.div>



        <motion.div
          className="space-y-4"
          variants={itemAnimation}
        >
          {/* Estilo proeminente aplicado */}
          <p className="text-2xl font-bold text-primary">
            [e] eles hoje. [e] elas em breve.
          </p>
          
          {/* Estilo principal aplicado */}
          <p className="text-[20px] text-[#1A1918] font-sofia font-light mt-8">
            Obrigado.
          </p>

          {/* Estilo menor/detalhe aplicado */}
          <div className="mt-8 text-[16px] text-[#1A1918] font-sofia font-light">
            <p>Felipe Ribeiro Monteiro de Fernando</p>
            <p className="text-primary">CEO</p> {/* Mantém cor primária para cargo */}
            <p className="mt-2">contato@eles.com.br</p>
          </div>
        </motion.div>
      </motion.div>
    </Slide>
  );
};