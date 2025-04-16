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
    className="flex flex-col mb-6"
    variants={itemAnimation}
  >
    <div className="flex items-center gap-4 mb-2">
      <div className={`w-16 h-16 ${color} rounded-full flex items-center justify-center text-white font-bold text-xl`}>
        {percentage}%
      </div>
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
    </div>
    <div className={`h-2 ${color} rounded-full mb-3`} style={{ width: `${percentage}%` }} />
    <p className="text-gray-600 text-sm pl-20">{description}</p>
  </motion.div>
);

export const InvestmentSlide = () => {
  return (
    <Slide className="bg-gray-50">
      <motion.div
        className="max-w-5xl mx-auto"
        variants={containerAnimation}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center mb-12" variants={itemAnimation}>
          <h2 className="text-3xl font-bold text-primary mb-4">
            Nossa Captação
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-6">
            Rodada Pre-Seed
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl shadow-lg p-8 mb-12 text-center"
          variants={itemAnimation}
        >
          <h3 className="text-4xl font-bold text-primary mb-2">
            US$ 1 Milhão
          </h3>
          <p className="text-gray-600">
            Investimento buscado para acelerar crescimento e consolidar operação
          </p>
        </motion.div>

        <motion.div className="mb-12" variants={containerAnimation}>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
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
          className="bg-primary bg-opacity-10 rounded-xl p-6 text-center"
          variants={itemAnimation}
        >
          <p className="text-lg text-primary font-semibold">
            Este investimento nos permitirá lançar a plataforma, alcançar os primeiros
            10.000 assinantes e validar nosso modelo operacional e de receita.
          </p>
        </motion.div>
      </motion.div>
    </Slide>
  );
};