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
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

interface SolutionCardProps {
  icon: string;
  title: string;
  description: string;
}

const SolutionCard = ({ icon, title, description }: SolutionCardProps) => (
  <motion.div
    // Padding responsivo
    className="bg-white rounded-xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-shadow"
    variants={itemAnimation}
  >
    <div className="flex flex-col items-center text-center">
      <span className="text-2xl mb-4">{icon}</span>
      {/* Tamanho de fonte responsivo */}
      <h3 className="text-lg md:text-xl font-semibold text-primary mb-3">{title}</h3>
      {/* Tamanho de fonte responsivo */}
      <p className="text-sm md:text-base lg:text-[16px] text-[#1A1918] font-sofia font-light">{description}</p>
    </div>
  </motion.div>
);

export const SolutionSlide = () => {
  return (
    <Slide className="bg-gray-50">
      {/* Padding e max-width responsivos */}
      <motion.div
        className="mx-auto p-4 md:p-8 md:max-w-6xl"
        variants={containerAnimation}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center mb-12" variants={itemAnimation}>
          {/* Tamanho de fonte responsivo */}
          <h2 className="text-2xl md:text-5xl lg:text-[64px] font-semibold text-primary mb-4">
            A Solução: [e] eles
          </h2>
          {/* Tamanho e max-width responsivos */}
          <p className="text-lg md:text-xl text-[#8A3A34] mx-auto mb-8 font-sofia font-semibold md:max-w-2xl"> {/* Usado font-semibold */}
            Cuidado Integral na Palma da Mão
          </p>
        </motion.div>

        {/* Grid e gap responsivos */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8"
          variants={containerAnimation}
        >
          <SolutionCard
            icon="🤖"
            title="Plataforma Digital Inteligente"
            description="Jornada simples e discreta com protocolos clínicos validados por especialistas e otimizados por IA para direcionamento eficaz."
          />

          <SolutionCard
            icon="👨‍⚕️"
            title="Acompanhamento Médico Contínuo"
            description="Consultas online (telemedicina) e acompanhamento proativo por médicos qualificados via plataforma e WhatsApp."
          />

          <SolutionCard
            icon="📦"
            title="Tratamento Entregue em Casa"
            description="Medicamentos (manipulados ou industrializados) entregues de forma discreta e recorrente, através de parcerias estratégicas com farmácias qualificadas."
          />

          <SolutionCard
            icon="💬"
            title="Comunicação e Suporte"
            description="Engajamento claro, humanizado e automatizado (WhatsApp, e-mail) para garantir adesão e suporte contínuo."
          />
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          variants={itemAnimation}
        >
          {/* Tamanho e max-width responsivos */}
          <p className="text-base md:text-lg lg:text-[20px] text-[#1A1918] mx-auto font-sofia font-light md:max-w-2xl">
            Uma solução completa que simplifica o acesso à saúde masculina,
            combinando tecnologia, expertise médica e conveniência.
          </p>
        </motion.div>
      </motion.div>
    </Slide>
  );
};