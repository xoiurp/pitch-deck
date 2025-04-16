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

interface FunnelStepProps {
  number: string;
  description: string;
  color: string;
  width: string;
}

const FunnelStep = ({ number, description, color, width }: FunnelStepProps) => (
  <motion.div
    className={`${width} mx-auto mb-4`}
    variants={itemAnimation}
  >
    <div className={`${color} rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300`}>
      <div className="flex flex-col items-center text-center">
        <span className="text-2xl font-bold text-white mb-2">{number}</span>
        {/* Estilo menor/detalhe aplicado (mantendo cor) */}
        <p className="text-[16px] text-white font-sofia font-light">{description}</p>
      </div>
    </div>
  </motion.div>
);

export const MarketSlide = () => {
  return (
    <Slide className="bg-gray-50">
      <motion.div
        className="max-w-5xl mx-auto"
        variants={containerAnimation}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center mb-12" variants={itemAnimation}>
          {/* Estilo do título principal aplicado */}
          <h2 className="text-[48px] font-semibold text-primary mb-4">
            O Mercado
          </h2>
          {/* Estilo do subtítulo aplicado */}
          <p className="text-xl text-[#8A3A34] max-w-2xl mx-auto mb-8 font-sofia font-semi-bold">
            Uma Oportunidade Bilionária no Brasil
          </p>
        </motion.div>

        <motion.div className="mb-8 text-center" variants={itemAnimation}>
          {/* Estilo menor/detalhe aplicado */}
          <p className="text-[16px] text-[#1A1918] font-sofia font-light italic">
            (Abordagem Top-Down)
          </p>
        </motion.div>

        <div className="space-y-6">
          <FunnelStep
            number="45 Milhões"
            description="Homens entre 20-40 anos no Brasil (Fonte: IBGE Projeção 2025)"
            color="bg-primary"
            width="w-full"
          />

          <FunnelStep
            number="13.5 Milhões"
            description="30% lidam com ao menos uma das condições que tratamos"
            color="bg-primary bg-opacity-90"
            width="w-5/6"
          />

          <FunnelStep
            number="675 Mil"
            description="5% com perfil digital e disposição a pagar por uma solução D2C"
            color="bg-primary bg-opacity-80"
            width="w-3/4"
          />

          <motion.div
            className="bg-green-600 rounded-xl p-8 text-center mt-12 transform hover:scale-105 transition-transform duration-300"
            variants={itemAnimation}
          >
            {/* Estilo de título intermediário aplicado */}
            <h3 className="text-2xl font-semibold text-white mb-4">
              TAM Estimado: R$ 10 Bilhões / Ano
            </h3>
            {/* Estilo principal aplicado (mantendo cor) */}
            <p className="text-[20px] text-white font-sofia font-light">
              Mercado de telemedicina em forte expansão
              <br />
              (Projeção R$ 16 Bi até 2025)
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 text-center bg-primary bg-opacity-10 rounded-xl p-6"
          variants={itemAnimation}
        >
          {/* Estilo principal aplicado ao parágrafo final */}
          <p className="text-[16px] text-[#1A1918] max-w-2xl mx-auto font-sofia font-light">
            Uma oportunidade única para capturar um mercado em crescimento exponencial,
            com demanda validada e barreiras regulatórias superadas.
          </p>
        </motion.div>
      </motion.div>
    </Slide>
  );
};