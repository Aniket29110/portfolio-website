import { useEffect, useState } from "react";
import { ArrowRight, Download, Award, Layers } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import profileImage from "../assets/profile.png";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const roles = personalInfo.typingRoles;
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
        }, 1600);
      }
    }, 52);

    return () => clearInterval(timer);
  }, [roleIndex]);

  return (
    <section id="home" className="hero">
      {/* Decorative dots */}
      <div
        className="deco-dot"
        style={{ top: "15%", left: "3%", width: 12, height: 12, background: "#ff6b2c" }}
      />
      <div
        className="deco-dot"
        style={{ top: "40%", left: "45%", width: 8, height: 8, background: "#7c4dff", opacity: 0.5 }}
      />
      <div
        className="deco-dot"
        style={{ bottom: "20%", right: "4%", width: 14, height: 14, background: "#ffd15c" }}
      />

      <div className="container">
        <div className="hero-inner">
          {/* ── Left: text content ── */}
          <div className="hero-content animate-in">

            <h1 className="hero-greeting">
              Hy! I Am<br />
              <span>{personalInfo.firstName}</span> Dev
            </h1>

            <p className="hero-description">
              {personalInfo.heroDescription}
            </p>

            {/* Typing line */}
            <p
              style={{
                fontWeight: 600,
                color: "var(--orange)",
                marginBottom: "1.5rem",
                minHeight: "1.5rem",
                fontSize: "0.95rem",
              }}
            >
              {typedText}
              <span
                style={{
                  display: "inline-block",
                  width: 2,
                  height: "1em",
                  background: "var(--orange)",
                  marginLeft: 2,
                  verticalAlign: "middle",
                  animation: "pulse 1s infinite",
                }}
              />
            </p>

            <div className="hero-actions animate-in delay-2">
              <a href="#contact" className="btn-primary">
                Hire Me <ArrowRight size={16} />
              </a>
              <a href={personalInfo.resume} className="btn-secondary" download>
                <Download size={16} /> Resume
              </a>
            </div>

            {/* Pillars */}
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "1.75rem" }}>
              {personalInfo.founderPillars.map((p) => (
                <span
                  key={p}
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    padding: "0.3rem 0.85rem",
                    background: "rgba(255,107,44,0.08)",
                    color: "var(--orange)",
                    borderRadius: "999px",
                    border: "1px solid rgba(255,107,44,0.18)",
                  }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right: photo + floating badges ── */}
          <div className="hero-visual animate-in delay-3">
            <div className="hero-photo-wrap">
              <div className="hero-photo-bg" />
              <img
                src={profileImage}
                alt={personalInfo.name}
                className="hero-photo-img"
              />

              {/* Floating badge — Award */}
              <div className="float-badge badge-award">
                <span className="badge-icon">🏆</span>
                <div>
                  <div className="badge-label">Best Design</div>
                  <div className="badge-sub">Awards</div>
                </div>
              </div>

              {/* Floating badge — UI/UX */}
              <div className="float-badge badge-uiux">
                <span className="badge-icon">🎨</span>
                <div>
                  <div className="badge-label">UI / UX</div>
                  <div className="badge-sub">Lorem ipsum dummy</div>
                </div>
              </div>

              {/* Floating badge — Stack */}
              <div className="float-badge badge-shopify">
                <span className="badge-icon">⚡</span>
                <div>
                  <div className="badge-label">Full-Stack</div>
                  <div className="badge-sub">React · Node · AI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;
