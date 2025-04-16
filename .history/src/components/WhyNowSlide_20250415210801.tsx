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
    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
    variants={itemAnimation}
  >
    <div className="flex items-start gap-4">
      <span className="text-3xl">{icon}</span>
      <div>
        <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </motion.div>
);

export const WhyNowSlide = () => {
  return (
    <Slide className="bg-gray-50">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerAnimation}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center mb-12" variants={itemAnimation}>
          <h2 className="text-3xl font-bold text-primary mb-4">
            Por Que Agora?
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-6">
            O Momento é Este.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
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
          className="mt-12 text-center bg-primary bg-opacity-10 rounded-xl p-6"
          variants={itemAnimation}
        >
          <p className="text-lg text-primary font-semibold">
            Uma convergência única de fatores que cria a oportunidade perfeita para revolucionar
            o acesso à saúde masculina no Brasil.
          </p>
        </motion.div>
      </motion.div>
    </Slide>
  );
};