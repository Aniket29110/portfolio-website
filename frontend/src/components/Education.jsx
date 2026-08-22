import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { education } from "../data/portfolioData";

// ─── SVG Timeline Line that draws on scroll ──────────────────────
const TimelineLine = ({ totalItems }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  return (
    <div ref={ref} className="timeline-line-container">
      <svg className="timeline-svg" viewBox={`0 0 2 ${totalItems * 200}`} preserveAspectRatio="none">
        <motion.line
          x1="1" y1="0" x2="1" y2={totalItems * 200}
          stroke="var(--orange)"
          strokeWidth="2"
          strokeLinecap="round"
          style={{
            pathLength: scrollYProgress,
            willChange: "path-length",
          }}
        />
      </svg>
    </div>
  );
};

// ─── Single timeline entry ────────────────────────────────────────
const TimelineEntry = ({ edu, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`timeline-entry${isLeft ? " entry-left" : " entry-right"}`}
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
    >
      {/* Dot */}
      <motion.div
        className="timeline-dot"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
      />

      {/* Content card */}
      <motion.div
        className="timeline-card"
        whileHover={{ y: -4, boxShadow: "0 16px 48px rgba(255,107,44,0.12)" }}
        transition={{ duration: 0.2 }}
        style={{
          borderLeft: isInView ? `3px solid var(--orange)` : "3px solid transparent",
        }}
      >
        {/* Glow highlight on inview */}
        <motion.div
          className="timeline-glow"
          animate={isInView ? { opacity: [0, 0.6, 0] } : {}}
          transition={{ duration: 1.2, delay: 0.3 }}
        />

        <div className="timeline-card-header">
          <div>
            <p className="timeline-inst">{edu.institution}</p>
            <h3 className="timeline-title">{edu.title}</h3>
          </div>
          <motion.div
            className="timeline-score"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            <div className="score-val">{edu.score}</div>
            <div className="score-lbl">{edu.scoreLabel}</div>
          </motion.div>
        </div>

        <p className="timeline-detail">{edu.details}</p>

        <div className="timeline-badge">
          <span className={`timeline-status ${edu.subtitle === "Currently pursuing" ? "active" : "done"}`}>
            {edu.subtitle}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ─── Education section ────────────────────────────────────────────
const Education = () => (
  <section id="education" className="section education-section">
    <div className="container">
      <div className="section-header">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          05 / Education
        </motion.div>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Academic <span>Background</span>
        </motion.h2>
        <motion.p
          className="section-desc"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{ marginInline: "auto" }}
        >
          The foundation that shaped my technical mindset and drive for continuous improvement.
        </motion.p>
      </div>

      <div className="timeline-container">
        <TimelineLine totalItems={education.length} />
        <div className="timeline-entries">
          {education.map((edu, i) => (
            <TimelineEntry key={edu.title} edu={edu} index={i} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Education;
