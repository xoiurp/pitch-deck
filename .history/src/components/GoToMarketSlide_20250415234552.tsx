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
    // Padding responsivo
    className="bg-white rounded-xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-all duration-300"
    variants={itemAnimation}
  >
    <div className="flex flex-col h-full">
      {/* Tamanho de fonte responsivo */}
      <div className="text-sm md:text-base lg:text-[16px] font-sofia font-light font-medium text-primary mb-2">{category}</div>
      <div className="flex items-start gap-4 mb-4">
        <span className="text-3xl">{icon}</span>
        {/* Tamanho de fonte responsivo */}
        <h3 className="text-lg md:text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      {/* Tamanho de fonte responsivo */}
      <p className="text-sm md:text-base lg:text-[16px] text-[#1A1918] font-sofia font-light flex-grow">{description}</p>
    </div>
  </motion.div>
);

export const GoToMarketSlide = () => {
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
          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-semibold text-primary mb-4">
            Go-to-Market
          </h2>
          {/* Tamanho e max-width responsivos */}
          <p className="text-lg md:text-xl text-[#8A3A34] mx-auto mb-8 font-sofia font-semibold md:max-w-2xl"> {/* Usado font-semibold */}
            Aquisição Eficiente e Construção de Confiança
          </p>
        </motion.div>

        {/* Tamanho e max-width responsivos */}
        <motion.p
          className="text-center text-base md:text-lg lg:text-[20px] text-[#1A1918] mx-auto font-sofia font-light mb-12 md:max-w-2xl"
          variants={itemAnimation}
        >
          Estratégia D2C focada em construir autoridade e relacionamento
        </motion.p>

        {/* Grid e gap responsivos */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8"
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

        {/* Padding responsivo */}
        <motion.div
          className="bg-white rounded-xl shadow-lg p-4 md:p-8"
          variants={itemAnimation}
        >
          {/* Tamanho de fonte responsivo */}
          <h3 className="text-lg md:text-xl font-semibold text-primary mb-6 text-center">
            Retenção e LTV
          </h3>
          {/* Gap responsivo */}
          <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚡</span>
              {/* Tamanho de fonte responsivo */}
              <span className="text-sm md:text-base lg:text-[16px] text-[#1A1918] font-sofia font-light">CRM Inteligente (HubSpot)</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎯</span>
              {/* Tamanho de fonte responsivo */}
              <span className="text-sm md:text-base lg:text-[16px] text-[#1A1918] font-sofia font-light">Automações Personalizadas</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">📊</span>
              {/* Tamanho de fonte responsivo */}
              <span className="text-sm md:text-base lg:text-[16px] text-[#1A1918] font-sofia font-light">Acompanhamento Proativo</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          // Padding responsivo
          className="mt-8 text-center bg-primary bg-opacity-10 rounded-xl p-4 md:p-6"
          variants={itemAnimation}
        >
          {/* Tamanho e max-width responsivos */}
          <p className="text-base md:text-lg lg:text-[20px] text-[#1A1918] mx-auto font-sofia font-light md:max-w-2xl">
            Uma estratégia multicanal que combina alcance digital com
            relacionamento humanizado para maximizar aquisição e retenção.
          </p>
        </motion.div>
      </motion.div>
    </Slide>
  );
};