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

// Dados da tabela extraídos para um array
const comparisonData = [
  {
    feature: "Escopo de Saúde",
    eles: "Integral (Mental + Metabólica + Sexual + Pele)",
    competitors: "Foco em Nichos (Cabelo, Sexual)",
    himsHers: "Amplo, segmentado"
  },
  {
    feature: "Personalização",
    eles: "IA Adaptativa + Dashboards Clínicos",
    competitors: "Limitada/Padronizada",
    himsHers: "Forte (MedMatch)"
  },
  {
    feature: "Modelo de Entrega (BR)",
    eles: "Parcerias Estratégicas (Farmácias)",
    competitors: "Online (Pode enfrentar barreiras)",
    himsHers: "Varia (Farmácia própria/Parceria)"
  },
  {
    feature: "Engajamento",
    eles: "Humanizado e Recorrente",
    competitors: "Transacional",
    himsHers: "Funcional"
  },
  {
    feature: "Tecnologia Tópica",
    eles: "Potencial para Avançados",
    competitors: "Básica (Minoxidil)",
    himsHers: "Variada"
  }
];

interface ComparisonRowProps {
  feature: string;
  eles: string;
  competitors: string;
  himsHers: string;
}

// Componente para a linha da tabela (Desktop)
const ComparisonRow = ({ feature, eles, competitors, himsHers }: ComparisonRowProps) => (
  <motion.div
    className="grid grid-cols-4 gap-2 md:gap-4 py-2 px-2 md:py-3 md:px-4 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200"
    variants={itemAnimation}
  >
    <div className="text-sm md:text-base lg:text-[16px] font-sofia font-light font-medium text-gray-700 min-w-[100px]">{feature}</div>
    <div className="text-sm md:text-base lg:text-[16px] font-sofia font-light text-primary font-semibold min-w-[120px]">{eles}</div>
    <div className="text-sm md:text-base lg:text-[16px] font-sofia font-light text-gray-600 min-w-[120px]">{competitors}</div>
    <div className="text-sm md:text-base lg:text-[16px] font-sofia font-light text-gray-600 min-w-[120px]">{himsHers}</div>
  </motion.div>
);

// Novo componente para o Card Mobile
const MobileComparisonCard = ({ feature, eles, competitors, himsHers }: ComparisonRowProps) => (
  <motion.div
    className="bg-white rounded-lg shadow p-4 mb-4 border border-gray-200"
    variants={itemAnimation}
  >
    <h3 className="text-base font-semibold text-gray-800 mb-3">{feature}</h3>
    <div className="space-y-2 text-sm font-sofia font-light">
      <p><span className="font-medium text-primary">[e] eles:</span> {eles}</p>
      <p><span className="font-medium text-gray-700">Manual/Omens:</span> {competitors}</p>
      <p><span className="font-medium text-gray-700">Hims & Hers:</span> {himsHers}</p>
    </div>
  </motion.div>
);


export const CompetitionSlide = () => {
  return (
    <Slide className="bg-gray-50">
      <motion.div
        // Aplicando rolagem responsiva
        className="mx-auto p-4 md:p-8 md:max-w-6xl min-h-screen overflow-y-auto md:overflow-y-hidden"
        variants={containerAnimation}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center mb-12" variants={itemAnimation}>
          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-semibold text-primary mb-4">
            Concorrência e Nosso Diferencial
          </h2>
          <p className="text-lg md:text-xl text-[#8A3A34] mx-auto mb-8 font-sofia font-semibold md:max-w-2xl">
            Além do Nicho
          </p>
        </motion.div>

        <motion.div className="bg-white rounded-xl shadow-lg p-4 md:p-8" variants={containerAnimation}>
          <div className="mb-8">
            <p className="text-base md:text-lg lg:text-[20px] text-[#1A1918] font-sofia font-light mb-4">
              Concorrentes Principais: Omens, Manual (Brasil); Hims & Hers (Benchmark Global/Potencial Entrante)
            </p>
            <p className="text-sm md:text-base lg:text-[16px] text-[#1A1918] font-sofia font-light">
              O que eles fazem bem: Validaram o modelo D2C para nichos específicos (ex: Manual focado em cabelo).
            </p>
          </div>

          {/* Tabela para Desktop (oculta em mobile) */}
          <div className="mb-6 hidden md:block overflow-x-auto">
            <div className="grid grid-cols-4 gap-2 md:gap-4 py-2 px-2 md:py-3 md:px-4 border-b-2 border-gray-300 bg-gray-100 rounded-t-lg min-w-[600px]">
              <div className="text-sm md:text-base lg:text-[16px] font-sofia font-bold text-gray-800 min-w-[100px]">Feature</div>
              <div className="text-sm md:text-base lg:text-[16px] font-sofia font-bold text-primary min-w-[120px]">[e] eles</div>
              <div className="text-sm md:text-base lg:text-[16px] font-sofia font-bold text-gray-800 min-w-[120px]">Manual / Omens</div>
              <div className="text-sm md:text-base lg:text-[16px] font-sofia font-bold text-gray-800 min-w-[120px]">Hims & Hers (Global)</div>
            </div>
            <div className="min-w-[600px]">
              {comparisonData.map((item, index) => (
                <ComparisonRow key={index} {...item} />
              ))}
            </div>
          </div>

          {/* Cards para Mobile (ocultos em desktop) */}
          <div className="block md:hidden space-y-4">
            {comparisonData.map((item, index) => (
              <MobileComparisonCard key={index} {...item} />
            ))}
          </div>

        </motion.div>

        <motion.div
          className="mt-8 text-center bg-primary bg-opacity-10 rounded-xl p-4 md:p-6"
          variants={itemAnimation}
        >
          <p className="text-base md:text-lg lg:text-[20px] text-[#1A1918] mx-auto font-sofia font-light md:max-w-2xl">
            Nossa Vantagem: Abordagem holística e integrada, tecnologia de personalização
            superior e modelo operacional adaptado à realidade brasileira.
          </p>
        </motion.div>
      </motion.div>
    </Slide>
  );
};