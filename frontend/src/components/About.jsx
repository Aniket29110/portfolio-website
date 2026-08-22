import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { aboutContent, personalInfo } from "../data/portfolioData";
import profileImage from "../assets/profile.png";

// ─── Count-up number animation ───────────────────────────────────
const CountUp = ({ target, suffix = "", duration = 1.5 }) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const started = useRef(false);

  useEffect(() => {
    if (!isInView || started.current) return;
    started.current = true;
    const startTime = performance.now();
    const isFloat = String(target).includes(".");
    const numericTarget = parseFloat(target);

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * numericTarget;
      setValue(isFloat ? parseFloat(current.toFixed(1)) : Math.floor(current));
      if (progress < 1) requestAnimationFrame(animate);
      else setValue(numericTarget);
    };
    requestAnimationFrame(animate);
  }, [isInView]);

  return (
    <span ref={ref}>
      {value}{suffix}
    </span>
  );
};

// ─── About ───────────────────────────────────────────────────────
const About = () => {
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  const stats = [
    { num: 5, suffix: "+", label: "Projects Shipped" },
    { num: 3, suffix: "+", label: "Tech Stacks" },
    { num: 100, suffix: "%", label: "Commitment" },
    { num: 24, suffix: "h", label: "Active & Available" },
  ];

  const skills = [
    "React", "Node.js", "Python", "Flask",
    "MongoDB", "Tailwind CSS", "Git", "Vite", "Supabase", "REST APIs",
  ];

  const leftRef = useRef(null);
  const leftInView = useInView(leftRef, { once: true, margin: "-10% 0px" });

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
  };
  const paraVariant = {
    hidden: { clipPath: "inset(0 0 100% 0)", opacity: 0 },
    visible: {
      clipPath: "inset(0 0 0% 0)",
      opacity: 1,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
    },
  };
  const pillVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section label */}
        <motion.div
          className="section-label"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          01 / About
        </motion.div>

        <div className="about-split">
          {/* ── Left: text ── */}
          <motion.div
            ref={leftRef}
            variants={container}
            initial="hidden"
            animate={leftInView ? "visible" : "hidden"}
            className="about-text-col"
          >
            <h2 className="about-heading">
              Building with speed,<br />
              <span>precision & product taste.</span>
            </h2>

            {/* Paragraphs with clip-path reveal */}
            <div className="about-paragraphs">
              {aboutContent.paragraphs.map((para, i) => (
                <motion.p key={i} variants={paraVariant} className="about-para">
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Stats row */}
            <div className="stats-row">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="stat-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <div className="stat-number">
                    <CountUp target={s.num} suffix={s.suffix} />
                  </div>
                  <div className="stat-label">{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Skill pills */}
            <motion.div
              className="skill-pills"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.map((skill) => (
                <motion.span key={skill} className="skill-pill" variants={pillVariant}>
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* Highlights */}
            <div className="about-highlights">
              {aboutContent.highlights.map((h, i) => (
                <motion.div
                  key={i}
                  className="highlight-item"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <span className="highlight-check">✓</span>
                  {h}
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              className="btn-primary"
              whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(255,107,44,0.4)" }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              Let's Talk →
            </motion.a>
          </motion.div>

          {/* ── Right: photo ── */}
          <div ref={imgRef} className="about-photo-col">
            <div className="about-card">
              {/* Corner border draws in on scroll */}
              <motion.div
                className="about-corner-border"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
              />

              {/* Parallax image */}
              <motion.div
                style={{ y: imgY, willChange: "transform" }}
                className="about-img-wrap"
              >
                <img src={profileImage} alt={personalInfo.name} className="about-img" />
              </motion.div>

              {/* Floating card */}
              <motion.div
                className="about-floating-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                animate={{ y: [0, -8, 0] }}
              >
                <div className="afc-icon">🚀</div>
                <div>
                  <div className="afc-label">Open to Work</div>
                  <div className="afc-value">Internships 2025</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
