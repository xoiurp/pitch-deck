import { motion } from 'framer-motion';
import { Slide } from './Slide';

const containerAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
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

interface TreatmentCardProps {
  icon: string;
  title: string;
  description: string;
}

const TreatmentCard = ({ icon, title, description }: TreatmentCardProps) => (
  <motion.div
    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
    variants={itemAnimation}
  >
    <div className="flex items-start gap-4">
      <span className="text-3xl">{icon}</span>
      <div>
        {/* Estilo de título do card aplicado */}
        <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
        {/* Estilo de texto menor/detalhe aplicado */}
        <p className="text-[16px] text-[#1A1918] font-sofia font-light">{description}</p>
      </div>
    </div>
  </motion.div>
);

interface PlatformFeatureProps {
  title: string;
}

const PlatformFeature = ({ title }: PlatformFeatureProps) => (
  <motion.div
    className="bg-primary bg-opacity-10 rounded-lg px-4 py-2"
    variants={itemAnimation}
  >
    {/* Estilo de texto menor/detalhe aplicado */}
    <p className="text-[16px] text-[#1A1918] font-sofia font-light">{title}</p>
  </motion.div>
);

export const ProductSlide = () => {
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
            Nossos Tratamentos
          </h2>
          {/* Estilo do subtítulo aplicado */}
          <p className="text-xl text-[#8A3A34] max-w-2xl mx-auto mb-8 font-sofia font-semi-bold">
            Foco na Saúde Integral Masculina
          </p>
        </motion.div>

        <motion.div className="mb-8" variants={itemAnimation}>
          {/* Estilo principal aplicado */}
          <p className="text-[20px] text-[#1A1918] max-w-2xl mx-auto font-sofia font-light text-center mb-8">
            Oferecemos planos de tratamento por assinatura (trimestral, renovação automática) para:
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={containerAnimation}
        >
          <TreatmentCard
            icon="👨"
            title="Queda Capilar"
            description="Minoxidil, Finasterida - possibilidade de tópicos avançados como diferencial"
          />
          <TreatmentCard
            icon="⚖️"
            title="Controle de Peso"
            description="Incluindo avaliação para análogos de GLP-1, quando aplicável"
          />
          <TreatmentCard
            icon="⏳"
            title="Performance Sexual"
            description="Disfunção erétil, ejaculação precoce"
          />
          <TreatmentCard
            icon="🧠"
            title="Saúde Mental"
            description="Ansiedade, depressão - suporte terapêutico e/ou medicamentoso"
          />
          <TreatmentCard
            icon="💡"
            title="Cuidados com a Pele"
            description="Acne e outras condições"
          />
        </motion.div>

        <motion.div className="bg-white rounded-xl shadow-lg p-8" variants={itemAnimation}>
          {/* Estilo de título do card aplicado */}
          <h3 className="text-xl font-semibold text-primary mb-6 text-center">
            Nossa Plataforma
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <PlatformFeature title="Avaliação médica online segura" />
            <PlatformFeature title="Prescrição digital integrada" />
            <PlatformFeature title="Acompanhamento de progresso" />
            <PlatformFeature title="Conteúdo educativo" />
            <PlatformFeature title="Engajamento personalizado" />
          </div>
        </motion.div>
      </motion.div>
    </Slide>
  );
};