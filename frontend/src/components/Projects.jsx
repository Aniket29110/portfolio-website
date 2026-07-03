import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { projectFilters, projects } from "../data/portfolioData";

const PREVIEW_GRADIENTS = {
  analytics: ["#ecfdf5", "#d1fae5", "#6ee7b7"],
  portfolio: ["#faf5ff", "#ede9fe", "#c4b5fd"],
  commerce: ["#fff7ed", "#fed7aa", "#fb923c"],
  operations: ["#eff6ff", "#dbeafe", "#93c5fd"],
};

const ProjectPreview = ({ project }) => {
  const colors = PREVIEW_GRADIENTS[project.preview.theme] || PREVIEW_GRADIENTS.analytics;
  const bars = project.preview.chartBars;

  return (
    <div
      className="project-preview"
      style={{ background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})` }}
    >
      {/* Mini mock UI */}
      <div
        style={{
          width: "85%",
          background: "#fff",
          borderRadius: "1rem",
          padding: "0.85rem",
          boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.65rem" }}>
          <div style={{ width: 20, height: 20, borderRadius: "50%", background: `linear-gradient(135deg, ${colors[1]}, ${colors[2]})` }} />
          <div>
            <div style={{ height: 6, width: 70, borderRadius: 999, background: "#0b1020", marginBottom: 3 }} />
            <div style={{ height: 4, width: 50, borderRadius: 999, background: "rgba(0,0,0,0.15)" }} />
          </div>
        </div>
        <div style={{ display: "flex", gap: "0.3rem", alignItems: "flex-end", height: 52 }}>
          {bars.map((h, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: `${(h / 100) * 48}px`,
                background: `linear-gradient(180deg, ${colors[2]}, ${colors[1]})`,
                borderRadius: "4px 4px 0 0",
                opacity: 0.7 + (i % 2) * 0.3,
              }}
            />
          ))}
        </div>
        <div style={{ marginTop: "0.5rem", display: "flex", justifyContent: "space-between" }}>
          <div style={{ height: 5, width: "45%", borderRadius: 999, background: "rgba(0,0,0,0.08)" }} />
          <div style={{ height: 5, width: "30%", borderRadius: 999, background: "rgba(0,0,0,0.05)" }} />
        </div>
      </div>

      {/* Metric badge */}
      <div
        style={{
          position: "absolute",
          top: 10,
          right: 12,
          background: "#fff",
          borderRadius: 10,
          padding: "0.3rem 0.6rem",
          fontSize: "0.7rem",
          fontWeight: 700,
          color: "#1a1a2e",
          boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
        }}
      >
        {project.preview.primaryMetric}
      </div>
    </div>
  );
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
            Recent <span>Project</span>
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

        <div className="projects-grid">
          {filtered.map((project) => (
            <div key={project.id} className="project-card">
              <ProjectPreview project={project} />

              <div className="project-body">
                <div className="project-cat">{project.preview.eyebrow}</div>
                <h3>{project.title}</h3>
                <p>{project.tagline}</p>

                <div className="project-tags">
                  {project.stack.slice(0, 4).map((t) => (
                    <span key={t} className="project-tag">{t}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link primary"
                    >
                      Live <ArrowUpRight size={13} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      <Github size={13} /> Code
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
