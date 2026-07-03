const SERVICES = [
  {
    icon: "💻",
    bg: "rgba(255,107,44,0.1)",
    title: "Full-Stack Development",
    desc: "Building end-to-end web apps with React, Node.js, and modern databases — from auth to deployment.",
  },
  {
    icon: "🎨",
    bg: "rgba(124,77,255,0.1)",
    title: "UI / UX Design",
    desc: "Crafting polished, user-first interfaces grounded in design systems, visual hierarchy, and real usability.",
  },
  {
    icon: "🤖",
    bg: "rgba(34,197,94,0.1)",
    title: "AI / ML Integration",
    desc: "Adding intelligent features — prediction models, NLP, or AI APIs — to products that need smarter behavior.",
  },
  {
    icon: "📱",
    bg: "rgba(59,130,246,0.1)",
    title: "Responsive Interfaces",
    desc: "Pixel-perfect, device-agnostic layouts that work beautifully from mobile to widescreen.",
  },
  {
    icon: "🚀",
    bg: "rgba(255,209,92,0.15)",
    title: "Product Prototyping",
    desc: "From idea to working prototype fast — validating assumptions before committing to the full build.",
  },
  {
    icon: "🔧",
    bg: "rgba(239,68,68,0.08)",
    title: "Debug & Optimize",
    desc: "Performance audits, code reviews, and fixes that bring sluggish or broken products back to life.",
  },
];

const Statement = () => (
  <section id="services" className="section services">
    <div className="container">
      <div style={{ textAlign: "center" }}>
        <span className="section-eyebrow">What I Do</span>
        <h2 className="section-title">
          My <span>Awesome</span> Services
        </h2>
        <p className="section-desc" style={{ marginInline: "auto", marginTop: "0.75rem" }}>
          End-to-end product capability across interface design, full-stack engineering, and AI integration.
        </p>
      </div>

      <div className="services-grid">
        {SERVICES.map((s) => (
          <div key={s.title} className="service-card">
            <div className="service-icon" style={{ background: s.bg }}>
              {s.icon}
            </div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Statement;
