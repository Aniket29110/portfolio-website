import { useState } from "react";
import { ArrowRight, Github, Link2 } from "lucide-react";
import { projectFilters, projects } from "../data/portfolioData";

const THEME_COLORS = {
  analytics: {
    primary: "#10b981",       // green
    bg: "#f2fcf7",
    tagBg: "#e6f9f0",
    hover: "#059669",
  },
  portfolio: {
    primary: "#7c4dff",       // purple
    bg: "#faf7ff",
    tagBg: "#f3efff",
    hover: "#673ab7",
  },
  commerce: {
    primary: "#ff6b2c",       // orange
    bg: "#fffaf6",
    tagBg: "#fff1e6",
    hover: "#e55b1e",
  },
  operations: {
    primary: "#3b82f6",       // blue
    bg: "#f5faff",
    tagBg: "#eef6ff",
    hover: "#2563eb",
  },
};

const getThemeColor = (theme, type) => {
  return THEME_COLORS[theme]?.[type] || THEME_COLORS.analytics[type];
};

const BrowserFrame = ({ children, url }) => {
  return (
    <div className="browser-mockup-frame">
      <div className="browser-header">
        <div className="browser-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <div className="browser-address-bar">{url}</div>
      </div>
      <div className="browser-viewport">
        {children}
      </div>
    </div>
  );
};

const DropoutPredictionMock = () => {
  return (
    <div className="mock-dashboard">
      <div className="mock-dash-top">
        <div className="mock-dash-logo">
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#10b981", display: "inline-block" }} />
          Dropout Predictor
        </div>
        <div className="mock-dash-avatar" />
      </div>
      <div className="mock-dash-grid">
        <div className="mock-dash-card">
          <span className="mock-dash-label">Overall Risk Rate</span>
          <span className="mock-dash-val" style={{ color: "#ef4444" }}>12.4%</span>
        </div>
        <div className="mock-dash-card">
          <span className="mock-dash-label">Alert Count</span>
          <span className="mock-dash-val" style={{ color: "#f59e0b" }}>8 Students</span>
        </div>
        <div className="mock-dash-card">
          <span className="mock-dash-label">Model Accuracy</span>
          <span className="mock-dash-val" style={{ color: "#10b981" }}>94.2%</span>
        </div>
      </div>
      <div className="mock-dash-chart-container">
        <span className="mock-dash-label">Weekly Risk Inflow</span>
        <div className="mock-dash-chart">
          <div className="mock-dash-bar" style={{ height: "40%", width: "12%", "--theme-primary": "#10b981", "--theme-hover": "#059669" }} />
          <div className="mock-dash-bar" style={{ height: "65%", width: "12%", "--theme-primary": "#10b981", "--theme-hover": "#059669" }} />
          <div className="mock-dash-bar" style={{ height: "35%", width: "12%", "--theme-primary": "#10b981", "--theme-hover": "#059669" }} />
          <div className="mock-dash-bar" style={{ height: "85%", width: "12%", "--theme-primary": "#10b981", "--theme-hover": "#059669" }} />
          <div className="mock-dash-bar" style={{ height: "55%", width: "12%", "--theme-primary": "#10b981", "--theme-hover": "#059669" }} />
          <div className="mock-dash-bar" style={{ height: "70%", width: "12%", "--theme-primary": "#10b981", "--theme-hover": "#059669" }} />
        </div>
      </div>
    </div>
  );
};

const PortfolioMock = () => {
  return (
    <div className="mock-portfolio">
      <div className="mock-port-nav">
        <span>Aniket Kumar</span>
        <span style={{ display: "flex", gap: "0.5rem" }}>
          <span>Home</span>
          <span>Projects</span>
          <span>Contact</span>
        </span>
      </div>
      <div className="mock-port-hero">
        <span style={{ fontSize: "0.55rem", fontWeight: 700, textTransform: "uppercase", color: "#c8b6ff", letterSpacing: "0.1em" }}>
          Full-Stack & Product
        </span>
        <h4 className="mock-port-title">
          I build <span>ambitious</span> digital products
        </h4>
        <p className="mock-port-subtitle">
          B.Tech Computer Science student thinking like a builder and prototyping fast.
        </p>
        <div className="mock-port-btns">
          <div className="mock-port-btn" style={{ "--theme-primary": "#7c4dff" }}>Hire Me</div>
          <div className="mock-port-btn outline">Resume</div>
        </div>
      </div>
      <div className="mock-port-footer">
        © 2026 Aniket Kumar Singh
      </div>
    </div>
  );
};

const ClothCoutureMock = () => {
  return (
    <div className="mock-shop">
      <div className="mock-shop-header">
        <span className="mock-shop-logo">COUTURE.</span>
        <div className="mock-shop-nav">
          <span>Men</span>
          <span>Women</span>
          <span>Drops</span>
        </div>
      </div>
      <div className="mock-shop-hero">
        <h4>Summer Drop 2026</h4>
        <p>Curated lookbooks & editorial products.</p>
      </div>
      <div className="mock-shop-grid">
        <div className="mock-shop-item">
          <div className="mock-shop-img" style={{ background: "linear-gradient(135deg, #fbcfe8, #fda4af)" }} />
          <span className="mock-shop-name">Linen Shirt</span>
          <span className="mock-shop-price" style={{ "--theme-primary": "#ff6b2c" }}>$89.00</span>
        </div>
        <div className="mock-shop-item">
          <div className="mock-shop-img" style={{ background: "linear-gradient(135deg, #fed7aa, #ff8c5a)" }} />
          <span className="mock-shop-name">Cargo Pants</span>
          <span className="mock-shop-price" style={{ "--theme-primary": "#ff6b2c" }}>$110.00</span>
        </div>
        <div className="mock-shop-item">
          <div className="mock-shop-img" style={{ background: "linear-gradient(135deg, #ddd6fe, #c4b5fd)" }} />
          <span className="mock-shop-name">Silk Blouse</span>
          <span className="mock-shop-price" style={{ "--theme-primary": "#ff6b2c" }}>$130.00</span>
        </div>
      </div>
    </div>
  );
};

const FixifyMock = () => {
  return (
    <div className="mock-kanban">
      <div className="mock-kb-header">
        <div className="mock-kb-title">
          <span style={{ width: 10, height: 10, background: "#3b82f6", borderRadius: "50%", display: "inline-block" }} />
          Fixify Kanban Board
        </div>
        <span style={{ opacity: 0.6 }}>Active Board</span>
      </div>
      <div className="mock-kb-columns">
        <div className="mock-kb-col">
          <span className="mock-kb-col-title">Triage</span>
          <div className="mock-kb-card">
            <span className="mock-kb-card-text">Database Lag</span>
            <span className="mock-kb-badge red">Critical</span>
          </div>
        </div>
        <div className="mock-kb-col">
          <span className="mock-kb-col-title">Active</span>
          <div className="mock-kb-card">
            <span className="mock-kb-card-text">Setup Clerk Auth</span>
            <span className="mock-kb-badge orange">Medium</span>
          </div>
        </div>
        <div className="mock-kb-col">
          <span className="mock-kb-col-title">Done</span>
          <div className="mock-kb-card">
            <span className="mock-kb-card-text">Theme Toggle</span>
            <span className="mock-kb-badge green">Low</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const DisasterPredictionMock = () => {
  return (
    <div className="mock-map">
      <div className="mock-map-canvas">
        <div className="mock-map-grid" />
        <div className="mock-map-radar" />
        <div className="mock-map-threat" />
        <div style={{ position: "absolute", bottom: 8, left: 8, fontSize: "0.5rem", background: "rgba(0,0,0,0.7)", padding: "0.2rem 0.4rem", borderRadius: 4 }}>
          Live Geospatial Grid
        </div>
      </div>
      <div className="mock-map-sidebar">
        <span className="mock-map-title">Risk Watch</span>
        <div className="mock-map-alert">
          <span className="mock-map-alert-title">Region Zone 3B</span>
          <span className="mock-map-alert-desc">Flood threat is elevated to 87%.</span>
        </div>
        <div style={{ display: "flex", gap: "0.2rem", alignItems: "center", marginTop: "auto" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#ef4444" }} />
          <span style={{ fontSize: "0.45rem", color: "#94a3b8" }}>Monitoring...</span>
        </div>
      </div>
    </div>
  );
};

const renderMockup = (projectId) => {
  switch (projectId) {
    case "dropout-prediction":
      return <DropoutPredictionMock />;
    case "portfolio-website":
      return <PortfolioMock />;
    case "cloth-couture":
      return <ClothCoutureMock />;
    case "fixify":
      return <FixifyMock />;
    case "ai-disaster-prediction":
      return <DisasterPredictionMock />;
    default:
      return <DropoutPredictionMock />;
  }
};

const getMockUrl = (projectId) => {
  switch (projectId) {
    case "dropout-prediction":
      return "dropout-prediction.edu";
    case "portfolio-website":
      return "aniketdev.com";
    case "cloth-couture":
      return "clothcouture.shop";
    case "fixify":
      return "fixify.workspace";
    case "ai-disaster-prediction":
      return "threat-predict.ai";
    default:
      return "localhost:3000";
  }
};

const Projects = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <span className="section-eyebrow">Portfolio</span>
          <h2 className="section-title">
            Featured <span>Projects</span>
          </h2>
          <p className="section-desc" style={{ marginInline: "auto", marginTop: "0.75rem" }}>
            A selection of real products, tools, and experiments — each framed around the problem it solves.
          </p>
        </div>

        <div className="projects-filters">
          {projectFilters.map((f) => (
            <button
              key={f}
              className={`filter-btn${active === f ? " active" : ""}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects-list">
          {filtered.map((project, index) => {
            const isReversed = index % 2 !== 0;
            const primaryColor = getThemeColor(project.preview.theme, "primary");
            const bgColor = getThemeColor(project.preview.theme, "bg");
            const tagBgColor = getThemeColor(project.preview.theme, "tagBg");
            const hoverColor = getThemeColor(project.preview.theme, "hover");

            return (
              <div
                key={project.id}
                className={`project-row-card${isReversed ? " row-reversed" : ""}`}
                style={{
                  "--theme-primary": primaryColor,
                  "--theme-bg": bgColor,
                  "--theme-tag-bg": tagBgColor,
                  "--theme-hover": hoverColor,
                }}
              >
                {/* Visual Preview */}
                <div className="project-row-visual">
                  <BrowserFrame url={getMockUrl(project.id)}>
                    {renderMockup(project.id)}
                  </BrowserFrame>
                </div>

                {/* Content Details */}
                <div className="project-row-content">
                  <span className="project-row-category">{project.preview.eyebrow}</span>
                  <h3 className="project-row-title">{project.title}</h3>
                  <p className="project-row-desc">{project.tagline}</p>

                  <div className="project-row-tags">
                    {project.stack.map((t) => (
                      <span key={t} className="project-row-tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="project-row-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-row-primary"
                      >
                        GitHub →
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-row-secondary"
                      >
                        <Link2 size={13} /> Live Preview
                      </a>
                    )}
                    {!project.live && !project.github && (
                      <span
                        style={{
                          fontSize: "0.78rem",
                          color: "var(--text-soft)",
                          fontStyle: "italic",
                        }}
                      >
                        Private / In Progress
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
