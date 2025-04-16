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

interface StrategyCardProps {
  icon: string;
  title: string;
  description: string;
  category: string;
}

const StrategyCard = ({ icon, title, description, category }: StrategyCardProps) => (
  <motion.div
    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
    variants={itemAnimation}
  >
    <div className="flex flex-col h-full">
      {/* Estilo menor/detalhe aplicado (mantendo cor/peso) */}
      <div className="text-[16px] font-sofia font-light font-medium text-primary mb-2">{category}</div>
      <div className="flex items-start gap-4 mb-4">
        <span className="text-3xl">{icon}</span>
        {/* Estilo de título do card aplicado */}
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      {/* Estilo menor/detalhe aplicado */}
      <p className="text-[16px] text-[#1A1918] font-sofia font-light flex-grow">{description}</p>
    </div>
  </motion.div>
);

export const GoToMarketSlide = () => {
  return (
    <Slide className="bg-gray-50">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerAnimation}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center mb-12" variants={itemAnimation}>
          {/* Estilo do título principal aplicado */}
          <h2 className="text-[64px] font-semibold text-primary mb-4">
            Go-to-Market
          </h2>
          {/* Estilo do subtítulo aplicado */}
          <p className="text-xl text-[#8A3A34] max-w-2xl mx-auto mb-8 font-sofia font-bold">
            Aquisição Eficiente e Construção de Confiança
          </p>
        </motion.div>

        {/* Estilo principal aplicado */}
        <motion.p
          className="text-center text-[20px] text-[#1A1918] max-w-2xl mx-auto font-sofia font-light mb-12"
          variants={itemAnimation}
        >
          Estratégia D2C focada em construir autoridade e relacionamento
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
          variants={containerAnimation}
        >
          <StrategyCard
            category="Aquisição Segmentada"
            icon="🎯"
            title="Microinfluenciadores de Nicho"
            description="Acesso a comunidades engajadas (games, finanças, esportes, etc.) com mensagens autênticas."
          />

          <StrategyCard
            category="Aquisição Segmentada"
            icon="📱"
            title="SEO Médico & Marketing de Conteúdo"
            description="Construir autoridade e confiança respondendo às dúvidas e dores do público-alvo. Educar sobre saúde masculina."
          />

          <StrategyCard
            category="Presença Contínua"
            icon="📈"
            title="Estratégia Always-On"
            description="Manter a marca visível e relevante consistentemente através de mídia paga e orgânica."
          />
        </motion.div>

        <motion.div
          className="bg-white rounded-xl shadow-lg p-8"
          variants={itemAnimation}
        >
          {/* Estilo de título do card aplicado */}
          <h3 className="text-xl font-semibold text-primary mb-6 text-center">
            Retenção e LTV
          </h3>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚡</span>
              {/* Estilo menor/detalhe aplicado */}
              <span className="text-[16px] text-[#1A1918] font-sofia font-light">CRM Inteligente (HubSpot)</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎯</span>
              {/* Estilo menor/detalhe aplicado */}
              <span className="text-[16px] text-[#1A1918] font-sofia font-light">Automações Personalizadas</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">📊</span>
              {/* Estilo menor/detalhe aplicado */}
              <span className="text-[16px] text-[#1A1918] font-sofia font-light">Acompanhamento Proativo</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 text-center bg-primary bg-opacity-10 rounded-xl p-6"
          variants={itemAnimation}
        >
          {/* Estilo principal aplicado ao parágrafo final */}
          <p className="text-[20px] text-[#1A1918] max-w-2xl mx-auto font-sofia font-light">
            Uma estratégia multicanal que combina alcance digital com
            relacionamento humanizado para maximizar aquisição e retenção.
          </p>
        </motion.div>
      </motion.div>
    </Slide>
  );
};