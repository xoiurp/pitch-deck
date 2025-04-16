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

interface TrendCardProps {
  icon: string;
  title: string;
  description: string;
}

const TrendCard = ({ icon, title, description }: TrendCardProps) => (
  <motion.div
    // Padding responsivo
    className="bg-white rounded-xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-all duration-300"
    variants={itemAnimation}
  >
    <div className="flex items-start gap-4">
      <span className="text-3xl">{icon}</span>
      <div>
        {/* Tamanho de fonte responsivo */}
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-primary mb-2">{title}</h3>
        {/* Tamanho de fonte responsivo */}
        <p className="text-sm md:text-base lg:text-[16px] text-[#1A1918] font-sofia font-light">{description}</p>
      </div>
    </div>
  </motion.div>
);

export const WhyNowSlide = () => {
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
            Por Que Agora?
          </h2>
          {/* Tamanho e max-width responsivos */}
          <p className="text-lg md:text-xl text-[#8A3A34] mx-auto mb-8 font-sofia font-semibold md:max-w-2xl"> {/* Usado font-semibold */}
            O Momento é Este.
          </p>
        </motion.div>

        {/* Grid e gap responsivos */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          variants={containerAnimation}
        >
          <TrendCard
            icon="📈"
            title="Demanda Explosiva"
            description="Busca crescente por soluções eficazes para bem-estar, peso (ex: GLP-1), queda capilar (finasterida) e saúde mental (ansiolíticos)."
          />

          <TrendCard
            icon="🧘‍♂️"
            title="Mudança Cultural"
            description="Homens mais conscientes e abertos a investir em autocuidado e tratamentos preventivos."
          />

          <TrendCard
            icon="⚕️"
            title="Telemedicina Regulamentada"
            description="Ambiente favorável no Brasil (Lei 14.510/2022) impulsiona a adoção de consultas online (Mercado projetado em R$ 16 Bi até 2025)."
          />

          <TrendCard
            icon="🛒"
            title="E-commerce de Saúde Maduro"
            description="Modelo D2C (Direto ao Consumidor) validado e crescente no Brasil, facilitando a logística e o acesso."
          />
        </motion.div>

        <motion.div
          // Padding responsivo
          className="mt-12 text-center bg-primary bg-opacity-10 rounded-xl p-4 md:p-6"
          variants={itemAnimation}
        >
          {/* Tamanho e max-width responsivos */}
          <p className="text-base md:text-lg lg:text-[20px] text-[#1A1918] mx-auto font-sofia font-light md:max-w-2xl">
            Uma convergência única de fatores que cria a oportunidade perfeita para revolucionar
            o acesso à saúde masculina no Brasil.
          </p>
        </motion.div>
      </motion.div>
    </Slide>
  );
};