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
      <div className="text-sm font-medium text-primary mb-2">{category}</div>
      <div className="flex items-start gap-4 mb-4">
        <span className="text-3xl">{icon}</span>
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm flex-grow">{description}</p>
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
          <h2 className="title text-primary">
            Go-to-Market
          </h2>
          <p className="subtitle">
            Aquisição Eficiente e Construção de Confiança
          </p>
        </motion.div>

        <motion.p
          className="text-center text-lg text-gray-700 mb-12"
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
          <h3 className="text-xl font-bold text-primary mb-6 text-center">
            Retenção e LTV
          </h3>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚡</span>
              <span className="text-gray-700">CRM Inteligente (HubSpot)</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎯</span>
              <span className="text-gray-700">Automações Personalizadas</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">📊</span>
              <span className="text-gray-700">Acompanhamento Proativo</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 text-center bg-primary bg-opacity-10 rounded-xl p-6"
          variants={itemAnimation}
        >
          <p className="text-lg text-primary font-semibold">
            Uma estratégia multicanal que combina alcance digital com
            relacionamento humanizado para maximizar aquisição e retenção.
          </p>
        </motion.div>
      </motion.div>
    </Slide>
  );
};