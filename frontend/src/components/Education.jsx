import { education } from "../data/portfolioData";

const Education = () => (
  <section id="education" className="section education">
    <div className="container">
      <div style={{ textAlign: "center", marginBottom: "0.5rem" }}>
        <span className="section-eyebrow">Education</span>
        <h2 className="section-title">
          Academic <span>Background</span>
        </h2>
        <p className="section-desc" style={{ marginInline: "auto", marginTop: "0.75rem" }}>
          The foundation that shaped my technical mindset and drive for continuous improvement.
        </p>
      </div>

      <div className="edu-timeline">
        {education.map((edu) => (
          <div key={edu.title} className="edu-card">
            <div>
              <p className="edu-inst">{edu.institution}</p>
              <h3 className="edu-title">{edu.title}</h3>
              <p className="edu-detail">{edu.details}</p>
            </div>
            <div className="edu-score">
              <div className="score-val">{edu.score}</div>
              <div className="score-lbl">{edu.scoreLabel}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
