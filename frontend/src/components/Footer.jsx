import { motion } from "framer-motion";
import { personalInfo, navigationItems } from "../data/portfolioData";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      {/* Watermark */}
      <div className="footer-watermark" aria-hidden="true">AKS</div>

      <div className="container">
        <div className="footer-content">
          {/* Logo & tagline */}
          <div className="footer-brand">
            <div className="footer-logo">
              Mr<span>.</span>Aniket Kumar
            </div>
            <p className="footer-tagline">
              Building ambitious products with startup speed and engineering discipline.
            </p>
          </div>

          {/* Nav links */}
          <nav className="footer-nav">
            {navigationItems.map((item, i) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                className="footer-link"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ color: "var(--orange)", x: 3 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} {personalInfo.name}. Crafted with ❤️ &amp; lots of coffee.
          </p>

          {/* Back to top */}
          <motion.button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.span
              className="btt-arrow"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            >
              ↑
            </motion.span>
            Top
          </motion.button>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
