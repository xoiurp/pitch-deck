import { motion } from 'framer-motion';
import { Slide } from './Slide';

const containerAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemAnimation = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const ProblemItem = ({ icon, text }: { icon: string; text: string }) => (
  <motion.div
    className="flex items-center gap-4 mb-3"
    variants={itemAnimation}
  >
    <span className="text-2xl text-primary">{icon}</span>
    {/* Padrão SolutionSlide Texto Menor aplicado */}
    <span className="text-[16px] text-[#1A1918] font-sofia font-light">{text}</span>
  </motion.div>
);

export const ProblemSlide = () => {
  return (
    <Slide className="bg-gray-50">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerAnimation}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 // Removida a duplicação
          className="text-[56px] font-semibold text-primary mb-4" // Estilo do título aplicado
          variants={itemAnimation}
        >
            O Problema: Uma Barreira Silenciosa
          </motion.h2>
  
          <motion.div
            className="bg-white rounded-xl shadow-lg p-8 mb-8"
            variants={itemAnimation}
          >
            {/* Estilo de subtítulo aplicado */}
            <p className="text-xl text-[#8A3A34] max-w-2xl mb-8 font-sofia font-bold">
              Homens (20-40 anos) adiam ou evitam cuidados médicos.
            </p>
            {/* Padrão SolutionSlide Texto Principal aplicado */}
            <p className="text-[20px] text-[#1A1918] max-w-2xl mx-auto font-sofia font-light">
              Por quê? Falta de tempo, constrangimento, dificuldade de acesso e desconfiança.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl shadow-lg p-8"
            variants={itemAnimation}
          >
            {/* Padrão SolutionSlide Texto Principal aplicado */}
            <p className="text-[20px] text-[#1A1918] max-w-2xl mx-auto font-sofia font-light mb-6">
              Resultado: Sofrem em silêncio com condições tratáveis que afetam sua confiança e bem-estar:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Chamada ao ProblemItem corrigida */}
              <ProblemItem
                icon="💊"
                text="Disfunção erétil & Ejaculação precoce"
              />
              <ProblemItem
                icon="👨"
                text="Queda de cabelo"
            />
            <ProblemItem
              icon="🧠"
              text="Ansiedade & Depressão"
            />
            <ProblemItem
              icon="⚖️"
              text="Questões de peso"
            />
            <ProblemItem
              icon="🔍"
              text="Acne"
            />
          </div>
        </motion.div>
      </motion.div>
    </Slide>
  );
};