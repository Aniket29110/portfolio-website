import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";

const Hero = () => {
  return (
     <section id="home" className="relative min-h-screen flex items-center overflow-hidden">



      {/* Background glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-violet-600/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-50 -right-50 w-96 h-96 bg-fuchsia-600/30 rounded-full blur-3xl"></div>

      <motion.div
       initial={{ opacity: 0, y: 40 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.8, ease: "easeOut" }}
       className="relative z-10 max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT TEXT */}
        <div>
          <p className="text-violet-400 mb-4 text-lg">
            Hello! I'm {personalInfo.name}
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            A Developer who <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-fuchsia-400">
              builds beautiful web
            </span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-xl">
            {personalInfo.description}
          </p>

          <div className="mt-10 flex gap-6">
            <a
              href="#projects"
              className="px-8 py-3 rounded-xl bg-linear-to-r from-violet-500 to-fuchsia-500 text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              View Work
            </a>

            <a
              href="Aniket Kumar.pdf"
              className="px-8 py-3 rounded-xl border border-gray-600 text-gray-300 hover:border-violet-400 hover:text-violet-400 transition"
            >
              Resume
            </a>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="flex justify-center">
          <div className="w-80 h-80 rounded-3xl bg-linear-to-br from-violet-500/30 to-fuchsia-500/30 backdrop-blur-xl border border-white/10 flex items-center justify-center text-7xl shadow-2xl">
            👨‍💻
          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default Hero;
