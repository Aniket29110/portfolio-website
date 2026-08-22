import { motion } from "framer-motion";

// ─── All skills for marquee ───────────────────────────────────────
const ROW1 = [
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "JavaScript", icon: "🟡" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Tailwind CSS", icon: "🌊" },
  { name: "HTML / CSS", icon: "🎨" },
  { name: "Vite", icon: "⚡" },
  { name: "Framer Motion", icon: "🎭" },
];

const ROW2 = [
  { name: "Python", icon: "🐍" },
  { name: "Flask", icon: "🔥" },
  { name: "MongoDB", icon: "🍃" },
  { name: "SQL", icon: "🗄️" },
  { name: "MySQL", icon: "🐬" },
  { name: "Git & GitHub", icon: "🐙" },
  { name: "Supabase", icon: "⚡" },
  { name: "REST APIs", icon: "🔗" },
];

const MarqueeRow = ({ items, direction = "left", speed = 35 }) => {
  // Double items for seamless loop
  const doubled = [...items, ...items];
  const animProps =
    direction === "left"
      ? { x: ["0%", "-50%"] }
      : { x: ["-50%", "0%"] };

  return (
    <div className="marquee-row" style={{ overflow: "hidden" }}>
      <motion.div
        className="marquee-track"
        animate={animProps}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
        whileHover={{ animationPlayState: "paused" }}
        style={{ display: "flex", width: "max-content" }}
      >
        {doubled.map((skill, i) => (
          <motion.div
            key={i}
            className="marquee-item"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span className="marquee-icon">{skill.icon}</span>
            <span className="marquee-name">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const Skills = () => (
  <section id="skills" className="section skills-section">
    <div className="container">
      <div className="section-header">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          04 / Skills
        </motion.div>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{ color: "#fff" }}
        >
          My <span>Tech</span> Toolkit
        </motion.h2>
        <motion.p
          className="section-desc"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{ color: "rgba(255,255,255,0.5)", marginInline: "auto" }}
        >
          A carefully crafted toolkit shaped through hands-on projects, real products, and constant iteration.
        </motion.p>
      </div>
    </div>

    {/* Full-width marquees */}
    <div className="skills-marquee-container">
      <MarqueeRow items={ROW1} direction="left" speed={30} />
      <MarqueeRow items={ROW2} direction="right" speed={25} />
    </div>
  </section>
);

export default Skills;
