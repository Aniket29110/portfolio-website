import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { Github, Link2 } from "lucide-react";
import { projectFilters, projects } from "../data/portfolioData";

// ─── Theme colors ────────────────────────────────────────────────
const THEME_COLORS = {
  analytics: { primary: "#10b981", bg: "#f2fcf7", tagBg: "#e6f9f0", hover: "#059669" },
  portfolio: { primary: "#7c4dff", bg: "#faf7ff", tagBg: "#f3efff", hover: "#673ab7" },
  commerce: { primary: "#ff6b2c", bg: "#fffaf6", tagBg: "#fff1e6", hover: "#e55b1e" },
  operations: { primary: "#3b82f6", bg: "#f5faff", tagBg: "#eef6ff", hover: "#2563eb" },
};
const getTC = (theme, type) => THEME_COLORS[theme]?.[type] || THEME_COLORS.analytics[type];

// ─── Browser frame ───────────────────────────────────────────────
const BrowserFrame = ({ children, url }) => (
  <div className="browser-mockup-frame">
    <div className="browser-header">
      <div className="browser-dots">
        <span className="dot dot-red" />
        <span className="dot dot-yellow" />
        <span className="dot dot-green" />
      </div>
      <div className="browser-address-bar">{url}</div>
    </div>
    <div className="browser-viewport">{children}</div>
  </div>
);

// ─── Mock UIs (kept from original) ───────────────────────────────
const DropoutPredictionMock = () => (
  <div className="mock-dashboard">
    <div className="mock-dash-top">
      <div className="mock-dash-logo">
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#10b981", display: "inline-block" }} />
        Dropout Predictor
      </div>
      <div className="mock-dash-avatar" />
    </div>
    <div className="mock-dash-grid">
      <div className="mock-dash-card"><span className="mock-dash-label">Overall Risk Rate</span><span className="mock-dash-val" style={{ color: "#ef4444" }}>12.4%</span></div>
      <div className="mock-dash-card"><span className="mock-dash-label">Alert Count</span><span className="mock-dash-val" style={{ color: "#f59e0b" }}>8 Students</span></div>
      <div className="mock-dash-card"><span className="mock-dash-label">Model Accuracy</span><span className="mock-dash-val" style={{ color: "#10b981" }}>94.2%</span></div>
    </div>
    <div className="mock-dash-chart-container">
      <span className="mock-dash-label">Weekly Risk Inflow</span>
      <div className="mock-dash-chart">
        {[40, 65, 35, 85, 55, 70].map((h, i) => (
          <div key={i} className="mock-dash-bar" style={{ height: `${h}%`, width: "12%", "--theme-primary": "#10b981", "--theme-hover": "#059669" }} />
        ))}
      </div>
    </div>
  </div>
);

const PortfolioMock = () => (
  <div className="mock-portfolio">
    <div className="mock-port-nav"><span>Aniket Kumar</span><span style={{ display: "flex", gap: "0.5rem" }}><span>Home</span><span>Projects</span><span>Contact</span></span></div>
    <div className="mock-port-hero">
      <span style={{ fontSize: "0.55rem", fontWeight: 700, textTransform: "uppercase", color: "#c8b6ff", letterSpacing: "0.1em" }}>Full-Stack & Product</span>
      <h4 className="mock-port-title">I build <span>ambitious</span> digital products</h4>
      <p className="mock-port-subtitle">B.Tech CS student thinking like a builder and prototyping fast.</p>
      <div className="mock-port-btns">
        <div className="mock-port-btn" style={{ "--theme-primary": "#7c4dff" }}>Hire Me</div>
        <div className="mock-port-btn outline">Resume</div>
      </div>
    </div>
    <div className="mock-port-footer">© 2026 Aniket Kumar Singh</div>
  </div>
);

const ClothCoutureMock = () => (
  <div className="mock-shop">
    <div className="mock-shop-header"><span className="mock-shop-logo">COUTURE.</span><div className="mock-shop-nav"><span>Men</span><span>Women</span><span>Drops</span></div></div>
    <div className="mock-shop-hero"><h4>Summer Drop 2026</h4><p>Curated lookbooks & editorial products.</p></div>
    <div className="mock-shop-grid">
      {[
        { bg: "linear-gradient(135deg, #fbcfe8, #fda4af)", name: "Linen Shirt", price: "$89.00" },
        { bg: "linear-gradient(135deg, #fed7aa, #ff8c5a)", name: "Cargo Pants", price: "$110.00" },
        { bg: "linear-gradient(135deg, #ddd6fe, #c4b5fd)", name: "Silk Blouse", price: "$130.00" },
      ].map((item) => (
        <div key={item.name} className="mock-shop-item">
          <div className="mock-shop-img" style={{ background: item.bg }} />
          <span className="mock-shop-name">{item.name}</span>
          <span className="mock-shop-price" style={{ "--theme-primary": "#ff6b2c" }}>{item.price}</span>
        </div>
      ))}
    </div>
  </div>
);

const FixifyMock = () => (
  <div className="mock-kanban">
    <div className="mock-kb-header">
      <div className="mock-kb-title"><span style={{ width: 10, height: 10, background: "#3b82f6", borderRadius: "50%", display: "inline-block" }} /> Fixify Kanban Board</div>
      <span style={{ opacity: 0.6 }}>Active Board</span>
    </div>
    <div className="mock-kb-columns">
      {[
        { title: "Triage", cards: [{ text: "Database Lag", badge: "Critical", cls: "red" }] },
        { title: "Active", cards: [{ text: "Setup Clerk Auth", badge: "Medium", cls: "orange" }] },
        { title: "Done", cards: [{ text: "Theme Toggle", badge: "Low", cls: "green" }] },
      ].map((col) => (
        <div key={col.title} className="mock-kb-col">
          <span className="mock-kb-col-title">{col.title}</span>
          {col.cards.map((c) => (
            <div key={c.text} className="mock-kb-card">
              <span className="mock-kb-card-text">{c.text}</span>
              <span className={`mock-kb-badge ${c.cls}`}>{c.badge}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

const DisasterPredictionMock = () => (
  <div className="mock-map">
    <div className="mock-map-canvas">
      <div className="mock-map-grid" />
      <div className="mock-map-radar" />
      <div className="mock-map-threat" />
      <div style={{ position: "absolute", bottom: 8, left: 8, fontSize: "0.5rem", background: "rgba(0,0,0,0.7)", padding: "0.2rem 0.4rem", borderRadius: 4 }}>Live Geospatial Grid</div>
    </div>
    <div className="mock-map-sidebar">
      <span className="mock-map-title">Risk Watch</span>
      <div className="mock-map-alert">
        <span className="mock-map-alert-title">Region Zone 3B</span>
        <span className="mock-map-alert-desc">Flood threat elevated to 87%.</span>
      </div>
      <div style={{ display: "flex", gap: "0.2rem", alignItems: "center", marginTop: "auto" }}>
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#ef4444" }} />
        <span style={{ fontSize: "0.45rem", color: "#94a3b8" }}>Monitoring...</span>
      </div>
    </div>
  </div>
);

const MOCKS = {
  "dropout-prediction": <DropoutPredictionMock />,
  "portfolio-website": <PortfolioMock />,
  "cloth-couture": <ClothCoutureMock />,
  "fixify": <FixifyMock />,
  "ai-disaster-prediction": <DisasterPredictionMock />,
};
const MOCK_URLS = {
  "dropout-prediction": "dropout-prediction.edu",
  "portfolio-website": "aniketdev.com",
  "cloth-couture": "clothcouture.shop",
  "fixify": "fixify.workspace",
  "ai-disaster-prediction": "threat-predict.ai",
};

// ─── Magnetic project card ────────────────────────────────────────
const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 150, damping: 20 });
  const y = useSpring(rawY, { stiffness: 150, damping: 20 });
  const [hovered, setHovered] = useState(false);
  const isReversed = index % 2 !== 0;

  const primaryColor = getTC(project.preview.theme, "primary");
  const bgColor = getTC(project.preview.theme, "bg");
  const tagBgColor = getTC(project.preview.theme, "tagBg");

  const onMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((e.clientX - rect.left - rect.width / 2) * 0.06);
    rawY.set((e.clientY - rect.top - rect.height / 2) * 0.06);
  };
  const onMouseLeave = () => { rawX.set(0); rawY.set(0); setHovered(false); };

  return (
    <motion.div
      ref={cardRef}
      className={`project-row-card project-card${isReversed ? " row-reversed" : ""}`}
      style={{
        x, y,
        willChange: "transform",
        "--theme-primary": primaryColor,
        "--theme-bg": bgColor,
        "--theme-tag-bg": tagBgColor,
      }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5% 0px" }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onMouseEnter={() => setHovered(true)}
    >
      {/* Visual Preview */}
      <div className="project-row-visual" style={{ overflow: "hidden", position: "relative" }}>
        <motion.div
          style={{ scale: hovered ? 1.04 : 1 }}
          transition={{ duration: 0.4 }}
        >
          <BrowserFrame url={MOCK_URLS[project.id] || "localhost:3000"}>
            {MOCKS[project.id] || <DropoutPredictionMock />}
          </BrowserFrame>
        </motion.div>

        {/* Hover overlay showing tech stack */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              className="project-hover-overlay"
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.35, ease: [0.215, 0.61, 0.355, 1] }}
            >
              <p className="overlay-label">Tech Stack</p>
              <div className="overlay-tags">
                {project.stack.map((t) => (
                  <span key={t} className="overlay-tag">{t}</span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="project-row-content">
        <span className="project-row-category">{project.preview.eyebrow}</span>
        <h3 className="project-row-title">{project.title}</h3>
        <p className="project-row-desc">{project.tagline}</p>

        {/* Tags — slide from left */}
        <div className="project-row-tags">
          {project.stack.map((t, i) => (
            <motion.span
              key={t}
              className="project-row-tag"
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.06 }}
            >
              {t}
            </motion.span>
          ))}
        </div>

        {/* Links */}
        <div className="project-row-links">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn-row-primary"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <Github size={14} /> GitHub →
            </motion.a>
          )}
          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="btn-row-secondary"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link2 size={13} /> Live Preview
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// ─── Projects section ─────────────────────────────────────────────
const Projects = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <motion.div
            className="section-label"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            03 / Projects
          </motion.div>

          <div className="projects-title-wrap">
            {["Featured", "Projects"].map((word, i) => (
              <span key={word} style={{ overflow: "hidden", display: "inline-block", marginRight: "0.35em" }}>
                <motion.span
                  style={{ display: "inline-block" }}
                  className={`section-title${i === 1 ? " text-accent" : ""}`}
                  initial={{ y: "110%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.215, 0.61, 0.355, 1] }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </div>

          <motion.p
            className="section-desc"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            A selection of real products, tools, and experiments — each framed around the problem it solves.
          </motion.p>
        </div>

        {/* Filter buttons */}
        <div className="projects-filters">
          {projectFilters.map((f, i) => (
            <motion.button
              key={f}
              className={`filter-btn${active === f ? " active" : ""}`}
              onClick={() => setActive(f)}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {f}
            </motion.button>
          ))}
        </div>

        {/* Cards */}
        <div className="projects-list">
          <AnimatePresence mode="wait">
            {filtered.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
