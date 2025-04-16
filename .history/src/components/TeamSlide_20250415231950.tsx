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
    // Padding responsivo
    className="bg-white rounded-xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-all duration-300"
    variants={itemAnimation}
  >
    <div className="flex flex-col items-center text-center">
      {photo ? (
        <img
          src={photo}
          alt={name}
          // Tamanho responsivo
          className="w-24 h-24 md:w-32 md:h-32 rounded-full mb-4 object-cover border-4 border-primary"
        />
      ) : (
        // Tamanho responsivo
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full mb-4 bg-primary bg-opacity-20 flex items-center justify-center">
          <span className="text-3xl md:text-4xl text-primary"> {/* Tamanho fonte ícone responsivo */}
            {name.charAt(0)}
          </span>
        </div>
      )}
      {/* Tamanho de fonte responsivo */}
      <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">{name}</h3>
      {/* Tamanho de fonte responsivo */}
      <p className="text-sm md:text-base lg:text-[16px] font-sofia font-light font-medium text-primary mb-4">{role}</p>
      <div className="space-y-2">
        {experience.map((exp, index) => (
          // Tamanho de fonte responsivo
          <p key={index} className="text-sm md:text-base lg:text-[16px] text-[#1A1918] font-sofia font-light">
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
      {/* Padding e max-width responsivos */}
      <motion.div
        className="mx-auto p-4 md:p-8 md:max-w-6xl"
        variants={containerAnimation}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center mb-12" variants={itemAnimation}>
          {/* Tamanho de fonte responsivo */}
          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-semibold text-primary mb-4">
            Nosso Time
          </h2>
          {/* Tamanho e max-width responsivos */}
          <p className="text-lg md:text-xl text-[#8A3A34] mx-auto mb-8 font-sofia font-semibold md:max-w-2xl"> {/* Usado font-semibold */}
            Experiência para Executar a Visão
          </p>
        </motion.div>

        {/* Grid e gap responsivos */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-12"
          variants={containerAnimation}
        >
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </motion.div>

        <motion.div
          // Padding responsivo
          className="bg-white rounded-xl shadow-lg p-4 md:p-6 text-center"
          variants={itemAnimation}
        >
          {/* Tamanho de fonte responsivo */}
          <p className="text-sm md:text-base lg:text-[16px] text-[#1A1918] font-sofia font-light">
            Contamos com o apoio de advisors em área médica específica e regulatório
          </p>
        </motion.div>

        <motion.div
          // Padding responsivo
          className="mt-8 text-center bg-primary bg-opacity-10 rounded-xl p-4 md:p-6"
          variants={itemAnimation}
        >
          {/* Tamanho e max-width responsivos */}
          <p className="text-base md:text-lg lg:text-[20px] text-[#1A1918] mx-auto font-sofia font-light md:max-w-2xl">
            Uma equipe multidisciplinar com experiência em healthtech,
            tecnologia e operações de saúde.
          </p>
        </motion.div>
      </motion.div>
    </Slide>
  );
};