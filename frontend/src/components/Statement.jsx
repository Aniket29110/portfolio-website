import { motion } from "framer-motion";

const SERVICES = [
  {
    icon: "💻",
    color: "rgba(255,107,44,0.12)",
    borderColor: "rgba(255,107,44,0.25)",
    title: "Full-Stack Development",
    desc: "Building end-to-end web apps with React, Node.js, and modern databases — from auth to deployment.",
  },
  {
    icon: "🎨",
    color: "rgba(124,77,255,0.12)",
    borderColor: "rgba(124,77,255,0.25)",
    title: "UI / UX Design",
    desc: "Crafting polished, user-first interfaces grounded in design systems, visual hierarchy, and real usability.",
  },
  {
    icon: "🤖",
    color: "rgba(34,197,94,0.12)",
    borderColor: "rgba(34,197,94,0.25)",
    title: "AI / ML Integration",
    desc: "Adding intelligent features — prediction models, NLP, or AI APIs — to products that need smarter behavior.",
  },
  {
    icon: "📱",
    color: "rgba(59,130,246,0.12)",
    borderColor: "rgba(59,130,246,0.25)",
    title: "Responsive Interfaces",
    desc: "Pixel-perfect, device-agnostic layouts that work beautifully from mobile to widescreen.",
  },
  {
    icon: "🚀",
    color: "rgba(255,209,92,0.12)",
    borderColor: "rgba(255,209,92,0.25)",
    title: "Product Prototyping",
    desc: "From idea to working prototype fast — validating assumptions before committing to the full build.",
  },
  {
    icon: "🔧",
    color: "rgba(239,68,68,0.1)",
    borderColor: "rgba(239,68,68,0.2)",
    title: "Debug & Optimize",
    desc: "Performance audits, code reviews, and fixes that bring sluggish or broken products back to life.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.65,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

const Statement = () => (
  <section id="services" className="section services-section">
    <div className="container">
      {/* Heading */}
      <div className="section-header">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          02 / Services
        </motion.div>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          What I <span>Build</span> & Deliver
        </motion.h2>
        <motion.p
          className="section-desc"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          End-to-end product capability across interface design, full-stack engineering, and AI integration.
        </motion.p>
      </div>

      {/* Cards grid */}
      <div className="services-grid">
        {SERVICES.map((s, i) => (
          <motion.div
            key={s.title}
            className="service-card"
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5% 0px" }}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            style={{
              "--card-bg": s.color,
              "--card-border": s.borderColor,
            }}
          >
            <motion.div
              className="service-icon"
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {s.icon}
            </motion.div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>

            {/* Hover line at bottom */}
            <motion.div
              className="service-card-line"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              style={{ transformOrigin: "left" }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Statement;
