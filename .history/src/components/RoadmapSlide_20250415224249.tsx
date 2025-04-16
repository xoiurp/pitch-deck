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

interface MilestoneProps {
  date: string;
  title: string;
  isCompleted?: boolean;
}

const Milestone = ({ date, title, isCompleted = false }: MilestoneProps) => (
  <motion.div
    className="flex items-start gap-4"
    variants={itemAnimation}
  >
    <div className="flex flex-col items-center">
      <div className={`w-4 h-4 rounded-full ${isCompleted ? 'bg-green-500' : 'bg-primary'}`} />
      <div className="w-0.5 h-full bg-gray-200" />
    </div>
    <div className="pb-8">
      <span className="text-sm font-medium text-gray-500">{date}</span>
      {/* Estilo principal aplicado ao título do milestone, mantendo cor condicional */}
      <h3 className={`text-[20px] font-sofia font-light ${isCompleted ? 'text-green-500' : 'text-primary'}`}>
        {title}
      </h3>
    </div>
  </motion.div>
);

export const RoadmapSlide = () => {
  return (
    <Slide className="bg-gray-50">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerAnimation}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center mb-12" variants={itemAnimation}>
          {/* Estilo do título principal aplicado */}
          <h2 className="text-[64px] font-semibold text-primary mb-4">
            Roadmap
          </h2>
          {/* Estilo do subtítulo aplicado */}
          <p className="text-xl text-[#8A3A34] max-w-2xl mx-auto mb-8 font-sofia font-bold">
            Nossos Próximos Passos
          </p>
        </motion.div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <motion.div
            className="relative"
            variants={containerAnimation}
          >
            <Milestone
              date="Abril 2025"
              title="Análise de Viabilidade e Modelo Concluídos"
              isCompleted={true}
            />
            
            <Milestone
              date="Maio 2025"
              title="Finalização do Branding e Identidade Visual"
            />
            
            <Milestone
              date="Julho 2025"
              title="Lançamento da Plataforma [e] eles (MVP focado nos core treatments)"
            />
            
            <Milestone
              date="Dezembro 2025"
              title="Meta: 10.000 assinantes ativos (Validando tração inicial)"
            />
            
            <Milestone
              date="2026"
              title="Lançamento da [e] elas (Expansão para saúde feminina)"
            />
            
            <Milestone
              date="2027"
              title="Expansão LATAM e novos protocolos clínicos baseados em dados"
            />
          </motion.div>
        </div>

        <motion.div
          className="mt-8 text-center bg-primary bg-opacity-10 rounded-xl p-6"
          variants={itemAnimation}
        >
          {/* Estilo principal aplicado ao parágrafo final */}
          <p className="text-[20px] text-[#1A1918] max-w-2xl mx-auto font-sofia font-light">
            Uma jornada clara e estruturada para construir a principal plataforma
            de saúde digital da América Latina.
          </p>
        </motion.div>
      </motion.div>
    </Slide>
  );
};