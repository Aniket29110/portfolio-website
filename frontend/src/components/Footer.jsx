import { personalInfo, navigationItems } from "../data/portfolioData";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div
        className="footer-inner"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div className="footer-logo">
          Mr<span>.</span>studio
        </div>

        <nav className="footer-links">
          {navigationItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>

        <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.35)" }}>
          © {new Date().getFullYear()} {personalInfo.name}. Built with ❤️
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
