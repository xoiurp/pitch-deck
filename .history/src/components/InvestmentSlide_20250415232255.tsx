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

interface AllocationItemProps {
  percentage: number;
  title: string;
  description: string;
  color: string;
}

const AllocationItem = ({ percentage, title, description, color }: AllocationItemProps) => (
  <motion.div
    // Layout responsivo
    className="flex flex-col mb-6"
    variants={itemAnimation}
  >
    {/* Layout e gap responsivos */}
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
      {/* Tamanho e fonte responsivos */}
      <div className={`w-12 h-12 md:w-16 md:h-16 ${color} rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl flex-shrink-0`}>
        {percentage}%
      </div>
      {/* Tamanho de fonte responsivo */}
      <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-800">{title}</h3>
    </div>
    <div className={`h-2 ${color} rounded-full mb-3`} style={{ width: `${percentage}%` }} />
    {/* Tamanho de fonte e padding responsivos */}
    <p className="text-sm md:text-base lg:text-[16px] text-[#1A1918] font-sofia font-light sm:pl-4">{description}</p> {/* Removido pl-20, adicionado sm:pl-4 */}
  </motion.div>
);

export const InvestmentSlide = () => {
  return (
    <Slide className="bg-gray-50">
      {/* Padding e max-width responsivos */}
      <motion.div
        className="mx-auto p-4 md:p-8 md:max-w-5xl"
        variants={containerAnimation}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center mb-12" variants={itemAnimation}>
          {/* Tamanho de fonte responsivo */}
          <h2 className="text-2xl md:text-2xl lg:text-[64px] font-semibold text-primary mb-4"> {/* Voltando para 64px em lg */}
            Nossa Captação
          </h2>
          {/* Tamanho e max-width responsivos */}
          <p className="text-lg md:text-xl text-[#8A3A34] mx-auto mb-8 font-sofia font-semibold md:max-w-2xl"> {/* Usado font-semibold */}
            Rodada Pre-Seed
          </p>
        </motion.div>

        <motion.div
          // Padding responsivo
          className="bg-white rounded-xl shadow-lg p-4 md:p-8 mb-12 text-center"
          variants={itemAnimation}
        >
          {/* Tamanho de fonte responsivo */}
          <h3 className="text-3xl md:text-4xl font-semibold text-primary mb-2">
            US$ 1 Milhão
          </h3>
          {/* Tamanho de fonte responsivo */}
          <p className="text-sm md:text-base lg:text-[16px] text-[#1A1918] font-sofia font-light">
            Investimento buscado para acelerar crescimento e consolidar operação
          </p>
        </motion.div>

        <motion.div className="mb-12" variants={containerAnimation}>
          {/* Tamanho de fonte responsivo */}
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-8 text-center">
            Alocação Estratégica dos Recursos
          </h3>

          <AllocationItem
            percentage={50}
            title="Growth & Construção de Marca"
            description="Acelerar aquisição de clientes (marketing digital, conteúdo, influenciadores) e consolidar a marca [e] eles."
            color="bg-primary"
          />

          <AllocationItem
            percentage={30}
            title="Equipe Técnica e Clínica"
            description="Expandir time de desenvolvimento (IA, plataforma) e rede de médicos parceiros para garantir qualidade e escala."
            color="bg-primary bg-opacity-80"
          />

          <AllocationItem
            percentage={20}
            title="Infraestrutura Regulatória e Operacional"
            description="Solidificar parcerias com farmácias, garantir conformidade total com ANVISA/CFM/LGPD e otimizar logística."
            color="bg-primary bg-opacity-60"
          />
        </motion.div>

        <motion.div
          // Padding responsivo
          className="bg-primary bg-opacity-10 rounded-xl p-4 md:p-6 text-center"
          variants={itemAnimation}
        >
          {/* Tamanho e max-width responsivos */}
          <p className="text-base md:text-lg lg:text-[20px] text-[#1A1918] mx-auto font-sofia font-light md:max-w-2xl">
            Este investimento nos permitirá lançar a plataforma, alcançar os primeiros
            10.000 assinantes e validar nosso modelo operacional e de receita.
          </p>
        </motion.div>
      </motion.div>
    </Slide>
  );
};