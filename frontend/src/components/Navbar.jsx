import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigationItems, personalInfo } from "../data/portfolioData";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      let current = "home";
      navigationItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (!section) return;
        if (window.scrollY >= section.offsetTop - 200) current = item.id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`navbar${scrolled ? " scrolled" : ""}`}>
        <a href="#home" className="nav-logo" onClick={() => setOpen(false)}>
          Mr<span>.</span>Aniket Kumar
        </a>

        <nav>
          <ul className="nav-links">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={active === item.id ? "active" : ""}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="nav-cta">
          Contact Us
        </a>

        <button
          className="nav-mobile-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </header>

      <div className={`nav-mobile-menu${open ? " open" : ""}`}>
        {navigationItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a
          href={personalInfo.resume}
          onClick={() => setOpen(false)}
          style={{
            marginTop: "0.5rem",
            background: "var(--orange)",
            color: "#fff",
            padding: "0.75rem 1rem",
            borderRadius: "var(--radius-md)",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          Download Resume
        </a>
      </div>
    </>
  );
};

export default Navbar;
