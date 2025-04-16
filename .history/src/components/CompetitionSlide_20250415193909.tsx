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

interface ComparisonRowProps {
  feature: string;
  eles: string;
  competitors: string;
  himsHers: string;
}

const ComparisonRow = ({ feature, eles, competitors, himsHers }: ComparisonRowProps) => (
  <motion.div
    className="grid grid-cols-4 gap-4 py-3 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200"
    variants={itemAnimation}
  >
    <div className="font-medium text-gray-700">{feature}</div>
    <div className="text-primary font-semibold">{eles}</div>
    <div className="text-gray-600">{competitors}</div>
    <div className="text-gray-600">{himsHers}</div>
  </motion.div>
);

export const CompetitionSlide = () => {
  return (
    <Slide className="bg-gray-50">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerAnimation}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center mb-12" variants={itemAnimation}>
          <h2 className="title text-primary">
            Concorrência e Nosso Diferencial
          </h2>
          <p className="subtitle">
            Além do Nicho
          </p>
        </motion.div>

        <motion.div className="bg-white rounded-xl shadow-lg p-8" variants={containerAnimation}>
          <div className="mb-8">
            <p className="text-lg text-gray-700 mb-4">
              Concorrentes Principais: Omens, Manual (Brasil); Hims & Hers (Benchmark Global/Potencial Entrante)
            </p>
            <p className="text-gray-600">
              O que eles fazem bem: Validaram o modelo D2C para nichos específicos (ex: Manual focado em cabelo).
            </p>
          </div>

          <div className="mb-6">
            <div className="grid grid-cols-4 gap-4 py-3 border-b-2 border-gray-300 bg-gray-100 rounded-t-lg">
              <div className="font-bold text-gray-800">Feature</div>
              <div className="font-bold text-primary">[e] eles</div>
              <div className="font-bold text-gray-800">Manual / Omens</div>
              <div className="font-bold text-gray-800">Hims & Hers (Global)</div>
            </div>

            <ComparisonRow
              feature="Escopo de Saúde"
              eles="Integral (Mental + Metabólica + Sexual + Pele)"
              competitors="Foco em Nichos (Cabelo, Sexual)"
              himsHers="Amplo, segmentado"
            />

            <ComparisonRow
              feature="Personalização"
              eles="IA Adaptativa + Dashboards Clínicos"
              competitors="Limitada/Padronizada"
              himsHers="Forte (MedMatch)"
            />

            <ComparisonRow
              feature="Modelo de Entrega (BR)"
              eles="Parcerias Estratégicas (Farmácias)"
              competitors="Online (Pode enfrentar barreiras)"
              himsHers="Varia (Farmácia própria/Parceria)"
            />

            <ComparisonRow
              feature="Engajamento"
              eles="Humanizado e Recorrente"
              competitors="Transacional"
              himsHers="Funcional"
            />

            <ComparisonRow
              feature="Tecnologia Tópica"
              eles="Potencial para Avançados"
              competitors="Básica (Minoxidil)"
              himsHers="Variada"
            />
          </div>
        </motion.div>

        <motion.div
          className="mt-8 text-center bg-primary bg-opacity-10 rounded-xl p-6"
          variants={itemAnimation}
        >
          <p className="text-lg text-primary font-semibold">
            Nossa Vantagem: Abordagem holística e integrada, tecnologia de personalização
            superior e modelo operacional adaptado à realidade brasileira.
          </p>
        </motion.div>
      </motion.div>
    </Slide>
  );
};