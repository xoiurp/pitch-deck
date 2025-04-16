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
    // Padding e fonte responsivos, min-width para evitar quebra
    className="grid grid-cols-4 gap-2 md:gap-4 py-2 px-2 md:py-3 md:px-4 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200"
    variants={itemAnimation}
  >
    {/* Tamanho de fonte responsivo, min-width */}
    <div className="text-sm md:text-base lg:text-[16px] font-sofia font-light font-medium text-gray-700 min-w-[100px]">{feature}</div>
    <div className="text-sm md:text-base lg:text-[16px] font-sofia font-light text-primary font-semibold min-w-[120px]">{eles}</div>
    <div className="text-sm md:text-base lg:text-[16px] font-sofia font-light text-gray-600 min-w-[120px]">{competitors}</div>
    <div className="text-sm md:text-base lg:text-[16px] font-sofia font-light text-gray-600 min-w-[120px]">{himsHers}</div>
  </motion.div>
);

export const CompetitionSlide = () => {
  return (
    <Slide className="bg-gray-50">
      {/* Padding e max-width responsivos */}
      <motion.div
        className="mx-auto p-4 md:p-8 md:max-w-6xl min-h-screen overflow-y-auto md:overflow-y-hidden"
        variants={containerAnimation}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center mb-12" variants={itemAnimation}>
          {/* Tamanho de fonte responsivo */}
          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-semibold text-primary mb-4"> {/* Voltando para 64px em lg */}
            Concorrência e Nosso Diferencial
          </h2>
          {/* Tamanho e max-width responsivos */}
          <p className="text-lg md:text-xl text-[#8A3A34] mx-auto mb-8 font-sofia font-semibold md:max-w-2xl"> {/* Usado font-semibold */}
            Além do Nicho
          </p>
        </motion.div>

        {/* Padding responsivo */}
        <motion.div className="bg-white rounded-xl shadow-lg p-4 md:p-8" variants={containerAnimation}>
          <div className="mb-8">
            {/* Tamanho de fonte responsivo */}
            <p className="text-base md:text-lg lg:text-[20px] text-[#1A1918] font-sofia font-light mb-4">
              Concorrentes Principais: Omens, Manual (Brasil); Hims & Hers (Benchmark Global/Potencial Entrante)
            </p>
            {/* Tamanho de fonte responsivo */}
            <p className="text-sm md:text-base lg:text-[16px] text-[#1A1918] font-sofia font-light">
              O que eles fazem bem: Validaram o modelo D2C para nichos específicos (ex: Manual focado em cabelo).
            </p>
          </div>

          {/* Adicionado overflow para rolagem horizontal em telas pequenas */}
          <div className="mb-6 overflow-x-auto">
            {/* Padding, fonte e min-width responsivos */}
            <div className="grid grid-cols-4 gap-2 md:gap-4 py-2 px-2 md:py-3 md:px-4 border-b-2 border-gray-300 bg-gray-100 rounded-t-lg min-w-[600px]">
              <div className="text-sm md:text-base lg:text-[16px] font-sofia font-bold text-gray-800 min-w-[100px]">Feature</div>
              <div className="text-sm md:text-base lg:text-[16px] font-sofia font-bold text-primary min-w-[120px]">[e] eles</div>
              <div className="text-sm md:text-base lg:text-[16px] font-sofia font-bold text-gray-800 min-w-[120px]">Manual / Omens</div>
              <div className="text-sm md:text-base lg:text-[16px] font-sofia font-bold text-gray-800 min-w-[120px]">Hims & Hers (Global)</div>
            </div>

            {/* Container para as linhas com min-width */}
            <div className="min-w-[600px]">
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
            </div> {/* Fim do container min-width */}
          </div>
        </motion.div>

        <motion.div
          // Padding responsivo
          className="mt-8 text-center bg-primary bg-opacity-10 rounded-xl p-4 md:p-6"
          variants={itemAnimation}
        >
          {/* Tamanho e max-width responsivos */}
          <p className="text-base md:text-lg lg:text-[20px] text-[#1A1918] mx-auto font-sofia font-light md:max-w-2xl">
            Nossa Vantagem: Abordagem holística e integrada, tecnologia de personalização
            superior e modelo operacional adaptado à realidade brasileira.
          </p>
        </motion.div>
      </motion.div>
    </Slide>
  );
};