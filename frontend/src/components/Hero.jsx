import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import profileImage from "../assets/profile.png";

// ─── Ticker tape items ───────────────────────────────────────────
const TICKER_ITEMS = [
  "React", "Node.js", "Full-Stack Dev", "Python", "Flask",
  "Tailwind CSS", "MongoDB", "Framer Motion", "TypeScript",
  "UI/UX Design", "REST APIs", "Git", "Supabase", "Vite",
  "Product Thinking", "Open to Internships",
];

const TickerTape = () => {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS]; // double for seamless loop
  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {items.map((item, i) => (
          <span key={i} className="ticker-item">
            {item} <span className="ticker-dot">•</span>
          </span>
        ))}
      </div>
    </div>
  );
};

// ─── Split word reveal ───────────────────────────────────────────
const SplitWord = ({ word, delay }) => (
  <span style={{ display: "inline-block", overflow: "hidden" }}>
    <motion.span
      style={{ display: "inline-block", willChange: "transform" }}
      initial={{ y: "120%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.215, 0.61, 0.355, 1],
      }}
    >
      {word}
    </motion.span>
  </span>
);

// ─── Typewriter ──────────────────────────────────────────────────
const Typewriter = () => {
  const roles = personalInfo.typingRoles;
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const current = roles[roleIndex];
    let charIdx = 0;
    const timer = setInterval(() => {
      charIdx++;
      setTypedText(current.slice(0, charIdx));
      if (charIdx === current.length) {
        clearInterval(timer);
        setTimeout(() => {
          setTypedText("");
          setRoleIndex((i) => (i + 1) % roles.length);
        }, 1800);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [roleIndex]);

  return (
    <p className="hero-typewriter">
      {typedText}
      <span className="typewriter-cursor" />
    </p>
  );
};

// ─── Hero ────────────────────────────────────────────────────────
const Hero = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax: image moves up more slowly than scroll
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  const line1Words = ["Full", "Stack"];
  const line2Words = ["Developer"];

  return (
    <section id="home" ref={sectionRef} className="hero">
      {/* Ambient blobs */}
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <div className="hero-blob hero-blob-3" />

      <div className="container">
        <div className="hero-inner">
          {/* ── Left: text ── */}
          <div className="hero-content">
            {/* Eyebrow */}
            <motion.div
              className="hero-eyebrow"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="eyebrow-dot" />
              B.Tech CS Student &amp; Builder
            </motion.div>

            {/* Big headline — split word reveal */}
            <h1 className="hero-headline">
              <div className="headline-line">
                {line1Words.map((w, i) => (
                  <SplitWord key={w} word={w} delay={0.4 + i * 0.08} />
                ))}
              </div>
              <div className="headline-line headline-accent">
                {line2Words.map((w, i) => (
                  <SplitWord key={w} word={w} delay={0.56 + i * 0.08} />
                ))}
              </div>
            </h1>

            {/* Description */}
            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {personalInfo.heroDescription}
            </motion.p>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
            >
              <Typewriter />
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <motion.a
                href="#contact"
                className="btn-primary"
                whileHover={{ scale: 1.05, boxShadow: "0 8px 32px rgba(255,107,44,0.45)" }}
                whileTap={{ scale: 0.97 }}
              >
                Hire Me →
              </motion.a>
              <motion.a
                href={personalInfo.resume}
                className="btn-secondary"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                ↓ Resume
              </motion.a>
            </motion.div>

            {/* Founder pillar pills */}
            <motion.div
              className="hero-pills"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
            >
              {personalInfo.founderPillars.map((p, i) => (
                <motion.span
                  key={p}
                  className="hero-pill"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + i * 0.1 }}
                >
                  {p}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* ── Right: photo ── */}
          <div className="hero-visual">
            <div className="hero-photo-wrap">
              {/* Decorative ring */}
              <div className="hero-ring" />
              <div className="hero-ring hero-ring-2" />

              {/* Parallax image */}
              <motion.div
                style={{ y: imgY, willChange: "transform" }}
                className="hero-photo-container"
              >
                <motion.img
                  src={profileImage}
                  alt={personalInfo.name}
                  className="hero-photo-img"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                />
              </motion.div>

              {/* Floating badge — Stack */}
              <motion.div
                className="float-badge badge-stack"
                initial={{ opacity: 0, x: 30, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
              >
                <span className="badge-icon">⚡</span>
                <div>
                  <div className="badge-label">Full-Stack</div>
                  <div className="badge-sub">React · Node · AI</div>
                </div>
              </motion.div>

              {/* Floating badge — Award */}
              <motion.div
                className="float-badge badge-award"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                <span className="badge-icon">🏆</span>
                <div>
                  <div className="badge-label">Product Mindset</div>
                  <div className="badge-sub">Design → Ship</div>
                </div>
              </motion.div>

              {/* Floating badge — Open */}
              <motion.div
                className="float-badge badge-open"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.6 }}
              >
                <span className="badge-icon">🚀</span>
                <div>
                  <div className="badge-label">Open to Work</div>
                  <div className="badge-sub">Internships 2025</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Ticker tape at bottom */}
      <div className="hero-ticker">
        <TickerTape />
      </div>
    </section>
  );
};

export default Hero;
