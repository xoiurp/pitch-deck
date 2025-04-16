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
    // Padding responsivo
    className="bg-white rounded-xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-all duration-300"
    variants={itemAnimation}
  >
    <div className="flex items-start gap-4">
      <span className="text-3xl">{icon}</span>
      <div>
        {/* Tamanho de fonte responsivo */}
        <h3 className="text-lg md:text-xl font-semibold text-primary mb-2">{title}</h3>
        {/* Tamanho de fonte responsivo */}
        <p className="text-sm md:text-base lg:text-[16px] text-[#1A1918] font-sofia font-light">{description}</p>
      </div>
    </div>
  </motion.div>
);

interface PlatformFeatureProps {
  title: string;
}

const PlatformFeature = ({ title }: PlatformFeatureProps) => (
  <motion.div
    // Padding responsivo
    className="bg-primary bg-opacity-10 rounded-lg px-3 py-1 md:px-4 md:py-2"
    variants={itemAnimation}
  >
    {/* Tamanho de fonte responsivo */}
    <p className="text-sm md:text-base lg:text-[16px] text-[#1A1918] font-sofia font-light text-center">{title}</p> {/* Adicionado text-center */}
  </motion.div>
);

export const ProductSlide = () => {
  return (
    <Slide className="bg-gray-50">
      {/* Padding e max-width responsivos */}
      <motion.div
        className="mx-auto p-4 md:p-8 md:max-w-6xl h-screen overflow-y-auto"
        variants={containerAnimation}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center mb-12" variants={itemAnimation}>
          {/* Tamanho de fonte responsivo */}
          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-semibold text-primary mb-4">
            Nossos Tratamentos
          </h2>
          {/* Tamanho e max-width responsivos */}
          <p className="text-lg md:text-xl text-[#8A3A34] mx-auto mb-8 font-sofia font-semibold md:max-w-2xl"> {/* Usado font-semibold */}
            Foco na Saúde Integral Masculina
          </p>
        </motion.div>

        <motion.div className="mb-8" variants={itemAnimation}>
          {/* Tamanho e max-width responsivos */}
          <p className="text-base md:text-lg lg:text-[20px] text-[#1A1918] mx-auto font-sofia font-light text-center mb-8 md:max-w-2xl">
            Oferecemos planos de tratamento por assinatura (trimestral, renovação automática) para:
          </p>
        </motion.div>

        {/* Grid e gap responsivos */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12"
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

        {/* Padding responsivo */}
        <motion.div className="bg-white rounded-xl shadow-lg p-4 md:p-8" variants={itemAnimation}>
          {/* Tamanho de fonte responsivo */}
          <h3 className="text-lg md:text-xl font-semibold text-primary mb-6 text-center">
            Nossa Plataforma
          </h3>
          {/* Grid e gap responsivos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4">
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