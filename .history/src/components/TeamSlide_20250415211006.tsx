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

interface TeamMemberProps {
  name: string;
  role: string;
  photo?: string;
  experience: string[];
}

const TeamMember = ({ name, role, photo, experience }: TeamMemberProps) => (
  <motion.div
    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
    variants={itemAnimation}
  >
    <div className="flex flex-col items-center text-center">
      {photo ? (
        <img
          src={photo}
          alt={name}
          className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-primary"
        />
      ) : (
        <div className="w-32 h-32 rounded-full mb-4 bg-primary bg-opacity-20 flex items-center justify-center">
          <span className="text-4xl text-primary">
            {name.charAt(0)}
          </span>
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
      <p className="text-primary font-medium mb-4">{role}</p>
      <div className="space-y-2">
        {experience.map((exp, index) => (
          <p key={index} className="text-gray-600 text-sm">
            {exp}
          </p>
        ))}
      </div>
    </div>
  </motion.div>
);

export const TeamSlide = () => {
  // Dados temporários da equipe - serão substituídos pelos dados reais
  const teamMembers: TeamMemberProps[] = [
    {
      name: "Felipe Ribeiro Monteiro de Fernando",
      role: "CEO",
      experience: [
        "[Experiência relevante a ser adicionada]",
        "[Experiência relevante a ser adicionada]"
      ]
    },
    {
      name: "[Nome do Sócio 1]",
      role: "CPO (Chief Product Officer)",
      experience: [
        "[Experiência relevante a ser adicionada]",
        "[Experiência relevante a ser adicionada]"
      ]
    },
    {
      name: "[Nome do Sócio 2]",
      role: "COO (Chief Operating Officer)",
      experience: [
        "[Experiência relevante a ser adicionada]",
        "[Experiência relevante a ser adicionada]"
      ]
    }
  ];

  return (
    <Slide className="bg-gray-50">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerAnimation}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center mb-12" variants={itemAnimation}>
          <h2 className="text-3xl font-bold text-primary mb-4">
            Nosso Time
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-6">
            Experiência para Executar a Visão
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerAnimation}
        >
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </motion.div>

        <motion.div
          className="bg-white rounded-xl shadow-lg p-6 text-center"
          variants={itemAnimation}
        >
          <p className="text-gray-700">
            Contamos com o apoio de advisors em área médica específica e regulatório
          </p>
        </motion.div>

        <motion.div
          className="mt-8 text-center bg-primary bg-opacity-10 rounded-xl p-6"
          variants={itemAnimation}
        >
          <p className="text-lg text-primary font-semibold">
            Uma equipe multidisciplinar com experiência em healthtech,
            tecnologia e operações de saúde.
          </p>
        </motion.div>
      </motion.div>
    </Slide>
  );
};