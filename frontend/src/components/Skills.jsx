import { skillCategories } from "../data/portfolioData";
import { useEffect, useRef, useState } from "react";

const Skills = () => {
  const ref = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="section skills">
      <div className="container" ref={ref}>
        <div style={{ textAlign: "center", marginBottom: "0.5rem" }}>
          <span className="section-eyebrow">Technical Skills</span>
          <h2 className="section-title" style={{ color: "#fff" }}>
            My <span>Awesome</span> Skills
          </h2>
          <p className="section-desc" style={{ color: "rgba(255,255,255,0.55)", marginInline: "auto", marginTop: "0.75rem" }}>
            A carefully crafted toolkit shaped through hands-on projects, real products, and constant iteration.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="skill-category">
              <div className="skill-cat-title">{cat.title}</div>
              <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", marginBottom: "1.25rem" }}>
                {cat.description}
              </p>
              {cat.skills.map((skill) => (
                <div key={skill.name} className="skill-bar-item">
                  <div className="skill-bar-top">
                    <span className="skill-bar-name">{skill.name}</span>
                    <span className="skill-bar-pct">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <div
                      className="skill-bar-fill"
                      style={{ width: animated ? `${skill.level}%` : "0%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
