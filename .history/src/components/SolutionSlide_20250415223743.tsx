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
    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
    variants={itemAnimation}
  >
    <div className="flex flex-col items-center text-center">
      <span className="text-2xl mb-4">{icon}</span>
      {/* Estilo de título do card aplicado */}
      <h3 className="text-2xl font-semibold text-primary mb-3">{title}</h3>
      {/* Estilo principal adaptado para descrição do card */}
      <p className="text-[24px] text-[#1A1918] font-sofia font-light">{description}</p>
    </div>
  </motion.div>
);

export const SolutionSlide = () => {
  return (
    <Slide className="bg-gray-50">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerAnimation}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center mb-12" variants={itemAnimation}>
          {/* Estilo do título principal aplicado */}
          <h2 className="text-[64px] font-semibold text-primary mb-4">
            A Solução: [e] eles
          </h2>
          {/* Estilo do subtítulo aplicado */}
          <p className="text-xl text-[#8A3A34] max-w-2xl mx-auto mb-8 font-sofia font-bold">
            Cuidado Integral na Palma da Mão
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
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
          {/* Estilo principal aplicado ao parágrafo final */}
          <p className="text-[24px] text-[#1A1918] max-w-2xl mx-auto font-sofia font-light">
            Uma solução completa que simplifica o acesso à saúde masculina,
            combinando tecnologia, expertise médica e conveniência.
          </p>
        </motion.div>
      </motion.div>
    </Slide>
  );
};