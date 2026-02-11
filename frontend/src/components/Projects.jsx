import { motion } from "framer-motion";
import { projects } from "../data/portfolioData";

// ...existing code...
const Projects = () => {
  return (
    <section id="projects" className="py-32 px-10">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16"
      >
        Projects
      </motion.h2>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: projects.indexOf(project) * 0.1,
            }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="
              bg-slate-900/60
              backdrop-blur
              border border-white/10
              rounded-2xl
              p-8
              hover:border-violet-500/40
              hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]
              transition
            "
          >
            <h3 className="text-2xl font-semibold text-violet-400">
              {project.title}
            </h3>

            <p className="mt-4 text-gray-400">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs rounded-full bg-violet-500/10 text-violet-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
