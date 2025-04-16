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

// Dados financeiros extraídos
const financialData = [
  { metric: "Receita (R$M)", y2025: "R$ 9 M", y2026: "R$ 30 M", y2027: "R$ 120 M" },
  { metric: "Usuários Ativos", y2025: "15.000", y2026: "50.000", y2027: "200.000" },
  { metric: "Margem Líquida*", y2025: "10%", y2026: "12%", y2027: "15%" }
];

interface MetricRowProps {
  metric: string;
  y2025: string;
  y2026: string;
  y2027: string;
}

// Componente para linha da tabela (Desktop)
const MetricRow = ({ metric, y2025, y2026, y2027 }: MetricRowProps) => (
  <motion.div
    className="grid grid-cols-4 gap-2 md:gap-4 py-2 px-2 md:py-4 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200"
    variants={itemAnimation}
  >
    <div className="text-sm md:text-base lg:text-[16px] font-sofia font-light font-medium text-gray-700">{metric}</div>
    <div className="text-center text-sm md:text-base lg:text-[16px] font-sofia font-light text-primary font-semibold">{y2025}</div>
    <div className="text-center text-sm md:text-base lg:text-[16px] font-sofia font-light text-primary font-semibold">{y2026}</div>
    <div className="text-center text-sm md:text-base lg:text-[16px] font-sofia font-light text-primary font-semibold">{y2027}</div>
  </motion.div>
);

// Novo componente para Card Financeiro Mobile
const MobileFinancialCard = ({ metric, y2025, y2026, y2027 }: MetricRowProps) => (
  <motion.div
    className="bg-white rounded-lg shadow p-4 mb-4 border border-gray-200"
    variants={itemAnimation}
  >
    <h3 className="text-base font-semibold text-gray-800 mb-3">{metric}</h3>
    <div className="space-y-1 text-sm font-sofia font-light">
      <p><span className="font-medium text-gray-600">2025:</span> {y2025}</p>
      <p><span className="font-medium text-gray-600">2026:</span> {y2026}</p>
      <p><span className="font-medium text-gray-600">2027:</span> {y2027}</p>
    </div>
  </motion.div>
);


interface GrowthDriverProps {
  icon: string;
  text: string;
}

const GrowthDriver = ({ icon, text }: GrowthDriverProps) => (
  <motion.div
    className="flex items-center gap-2 md:gap-3 bg-white rounded-lg p-2 md:p-4 shadow-md"
    variants={itemAnimation}
  >
    <span className="text-2xl">{icon}</span>
    <span className="text-sm md:text-base lg:text-[16px] text-[#1A1918] font-sofia font-light">{text}</span>
  </motion.div>
);

export const FinancialsSlide = () => {
  return (
    <Slide className="bg-gray-50">
      {/* Aplicando rolagem responsiva */}
      <motion.div
        className="mx-auto p-4 md:p-8 md:max-w-6xl min-h-screen overflow-y-auto md:overflow-y-hidden"
        variants={containerAnimation}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center mb-12" variants={itemAnimation}>
          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-semibold text-primary mb-4">
            Projeções Financeiras
          </h2>
          <p className="text-lg md:text-xl text-[#8A3A34] mx-auto mb-8 font-sofia font-semibold md:max-w-2xl">
            Rumo à Liderança
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl shadow-lg p-4 md:p-8 mb-8"
          variants={containerAnimation}
        >
          {/* Tabela para Desktop (oculta em mobile) */}
          <div className="hidden md:block overflow-x-auto">
            <div className="min-w-[500px]">
              <div className="grid grid-cols-4 gap-2 md:gap-4 py-2 px-2 md:py-3 border-b-2 border-gray-300 mb-4">
                <div className="text-sm md:text-base lg:text-[16px] font-sofia font-light font-bold text-gray-800">Métrica</div>
                <div className="text-center text-sm md:text-base lg:text-[16px] font-sofia font-light font-bold text-gray-800">2025 (Lanç. Jul)</div>
                <div className="text-center text-sm md:text-base lg:text-[16px] font-sofia font-light font-bold text-gray-800">2026</div>
                <div className="text-center text-sm md:text-base lg:text-[16px] font-sofia font-light font-bold text-gray-800">2027</div>
              </div>
              {financialData.map((item, index) => (
                <MetricRow key={index} {...item} />
              ))}
            </div>
          </div>

          {/* Cards para Mobile (ocultos em desktop) */}
          <div className="block md:hidden space-y-4">
            {financialData.map((item, index) => (
              <MobileFinancialCard key={index} {...item} />
            ))}
          </div>
        </motion.div>

        <motion.div className="mb-8" variants={itemAnimation}>
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-6 text-center">
            Drivers de Crescimento
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
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
          className="text-center text-xs md:text-sm lg:text-[16px] text-[#1A1918] font-sofia font-light italic"
          variants={itemAnimation}
        >
          *Margem líquida projetada considerando custos de aquisição, operacionais e investimentos em plataforma
        </motion.div>
      </motion.div>
    </Slide>
  );
};