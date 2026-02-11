import { motion } from "framer-motion";

import { skills } from "../data/portfolioData";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="py-32 px-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16"
      >
        Skills
      </motion.h2>

      {/* Skills Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <motion.div
            key={skill}
            variants={itemVariants}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="
              bg-slate-900/60
              backdrop-blur
              border border-white/10
              rounded-xl
              py-4
              text-center
              text-violet-300
              font-medium
              cursor-default
              hover:scale-110
              hover:bg-violet-500/10
              hover:shadow-[0_0_25px_rgba(139,92,246,0.4)]
              transition
            "
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
