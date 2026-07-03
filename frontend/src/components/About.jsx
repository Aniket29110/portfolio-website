import { useEffect, useRef } from "react";
import { aboutContent, personalInfo } from "../data/portfolioData";
import profileImage from "../assets/profile.png";

const useInView = (ref, cb) => {
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) cb(); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
};

const About = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useInView(leftRef, () => {
    leftRef.current?.classList.add("animate-in");
  });
  useInView(rightRef, () => {
    rightRef.current?.classList.add("animate-in", "delay-2");
  });

  return (
    <section id="about" className="section" style={{ background: "#fff" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="section-eyebrow">About Me</span>
          <h2 className="section-title">
            Clients Get Always<br />
            <span>Exceptional Works</span> From Me
          </h2>
          <p className="section-desc" style={{ marginInline: "auto", marginTop: "0.75rem" }}>
            {aboutContent.intro}
          </p>
        </div>

        <div className="about-split">
          {/* Left: text */}
          <div ref={leftRef} style={{ opacity: 0 }}>
            <div style={{ display: "flex", gap: "2rem", marginBottom: "2rem", flexWrap: "wrap" }}>
              {[
                { num: "5+", label: "Projects Completed" },
                { num: "3+", label: "Tech Stacks Mastered" },
                { num: "24h", label: "Active & Available" },
                { num: "100%", label: "Commitment" },
              ].map((s) => (
                <div key={s.label} className="stat-box" style={{ flex: "1 1 120px" }}>
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "1.75rem" }}>
              {aboutContent.paragraphs.map((para) => (
                <p key={para} style={{ fontSize: "0.93rem", lineHeight: 1.75, color: "var(--text-mid)" }}>
                  {para}
                </p>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "2rem" }}>
              {aboutContent.highlights.map((h) => (
                <div
                  key={h}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    fontSize: "0.88rem",
                    color: "var(--text-mid)",
                  }}
                >
                  <span style={{ color: "var(--orange)", fontWeight: 700 }}>✓</span> {h}
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary">
              Let's Talk →
            </a>
          </div>

          {/* Right: photo card */}
          <div ref={rightRef} style={{ opacity: 0 }} className="about-image-wrap">
            <div className="about-card">
              <img src={profileImage} alt={personalInfo.name} />

              <div
                className="about-floating-card"
                style={{ animation: "floatUpDown 3s ease-in-out infinite" }}
              >
                <div className="afc-label">24 Hours Active</div>
                <div className="afc-value">24h</div>
                <div className="afc-sub">Online & ready to help</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
