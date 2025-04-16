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
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

interface MetricRowProps {
  metric: string;
  y2025: string;
  y2026: string;
  y2027: string;
}

const MetricRow = ({ metric, y2025, y2026, y2027 }: MetricRowProps) => (
  <motion.div
    className="grid grid-cols-4 gap-4 py-4 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200"
    variants={itemAnimation}
  >
    <div className="font-medium text-gray-700">{metric}</div>
    <div className="text-center text-primary font-semibold">{y2025}</div>
    <div className="text-center text-primary font-semibold">{y2026}</div>
    <div className="text-center text-primary font-semibold">{y2027}</div>
  </motion.div>
);

interface GrowthDriverProps {
  icon: string;
  text: string;
}

const GrowthDriver = ({ icon, text }: GrowthDriverProps) => (
  <motion.div
    className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-md"
    variants={itemAnimation}
  >
    <span className="text-2xl">{icon}</span>
    <span className="text-gray-700 text-sm">{text}</span>
  </motion.div>
);

export const FinancialsSlide = () => {
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
            Projeções Financeiras
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-6">
            Rumo à Liderança
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
          variants={containerAnimation}
        >
          <div className="grid grid-cols-4 gap-4 py-3 border-b-2 border-gray-300 mb-4">
            <div className="font-bold text-gray-800">Métrica</div>
            <div className="text-center font-bold text-gray-800">2025 (Lanç. Jul)</div>
            <div className="text-center font-bold text-gray-800">2026</div>
            <div className="text-center font-bold text-gray-800">2027</div>
          </div>

          <MetricRow
            metric="Receita (R$M)"
            y2025="R$ 4 M"
            y2026="R$ 20 M"
            y2027="R$ 80 M"
          />

          <MetricRow
            metric="Usuários Ativos"
            y2025="15.000"
            y2026="50.000"
            y2027="200.000"
          />

          <MetricRow
            metric="Margem Líquida*"
            y2025="10%"
            y2026="12%"
            y2027="15%"
          />
        </motion.div>

        <motion.div className="mb-8" variants={itemAnimation}>
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
            Drivers de Crescimento
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <GrowthDriver
              icon="🎯"
              text="Aquisição eficiente via GTM focado"
            />
            <GrowthDriver
              icon="🔄"
              text="Alto LTV impulsionado por modelo de assinatura e retenção"
            />
            <GrowthDriver
              icon="📈"
              text="Expansão do ARPU com cross-sell e novos tratamentos"
            />
            <GrowthDriver
              icon="⚡"
              text="Ganho de escala e otimização operacional"
            />
          </div>
        </motion.div>

        <motion.div
          className="text-center text-sm text-gray-600 italic"
          variants={itemAnimation}
        >
          *Margem líquida projetada considerando custos de aquisição, operacionais e investimentos em plataforma
        </motion.div>
      </motion.div>
    </Slide>
  );
};