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
    {/* Tamanho de fonte responsivo */}
    <span className="text-sm md:text-base lg:text-[16px] text-[#1A1918] font-sofia font-light">{text}</span>
  </motion.div>
);

export const ProblemSlide = () => {
  return (
    <Slide className="bg-gray-50">
      {/* Padding e max-width responsivos */}
      <motion.div
        className="mx-auto p-4 md:p-8 md:max-w-4xl"
        variants={containerAnimation}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 // Removida a duplicação
          // Tamanho de fonte responsivo
          className="text-2xl md:text-xl lg:text-[48px] font-semibold text-primary mb-4 text-center" // Adicionado text-center, ajustado tamanho mobile
          variants={itemAnimation}
        >
            O Problema: Uma Barreira Silenciosa
          </motion.h2>
  
          <motion.div
            className="bg-white rounded-xl shadow-lg p-8 mb-8"
            variants={itemAnimation}
          >
            {/* Tamanho e max-width responsivos */}
            <p className="text-lg md:text-xl text-[#8A3A34] mx-auto mb-8 font-sofia font-semibold md:max-w-1xl"> {/* Usado font-semibold */}
              Homens (20-40 anos) adiam ou evitam cuidados médicos.
            </p>
            {/* Tamanho e max-width responsivos */}
            <p className="text-base md:text-lg lg:text-[20px] text-[#1A1918] mx-auto font-sofia font-light md:max-w-1xl">
              Por quê? Falta de tempo, constrangimento, dificuldade de acesso e desconfiança.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl shadow-lg p-4 md:p-8" // Padding responsivo
            variants={itemAnimation}
          >
            {/* Tamanho e max-width responsivos */}
            <p className="text-base md:text-lg lg:text-[16] text-[#1A1918] mx-auto font-sofia font-light mb-4 md:max-w-1xl">
              Resultado: Sofrem em silêncio com condições tratáveis que afetam sua confiança e bem-estar:
            </p>

            {/* Grid responsivo */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
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