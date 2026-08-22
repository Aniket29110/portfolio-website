import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { navigationItems, personalInfo } from "../data/portfolioData";

// Magnetic effect for the CTA button
const MagneticCTA = ({ href, children }) => {
  const ref = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 200, damping: 15 });
  const y = useSpring(rawY, { stiffness: 200, damping: 15 });

  const onMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((e.clientX - rect.left - rect.width / 2) * 0.35);
    rawY.set((e.clientY - rect.top - rect.height / 2) * 0.35);
  };
  const onLeave = () => { rawX.set(0); rawY.set(0); };

  return (
    <motion.a
      ref={ref}
      href={href}
      className="nav-cta"
      style={{ x, y, willChange: "transform" }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.a>
  );
};

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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

  const navLinkVariants = {
    hidden: { opacity: 0, y: -12 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.3 + i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  // Hamburger line variants
  const top = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 6 },
  };
  const mid = {
    closed: { opacity: 1, scaleX: 1 },
    open: { opacity: 0, scaleX: 0 },
  };
  const bot = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -6 },
  };

  return (
    <>
      <header className={`navbar${scrolled ? " scrolled" : ""}`}>
        <motion.a
          href="#home"
          className="nav-logo"
          onClick={() => setOpen(false)}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Mr<span>.</span>Aniket Kumar
        </motion.a>

        <nav>
          <ul className="nav-links">
            {navigationItems.map((item, i) => (
              <motion.li
                key={item.id}
                custom={i}
                variants={navLinkVariants}
                initial="hidden"
                animate={mounted ? "visible" : "hidden"}
              >
                <a
                  href={`#${item.id}`}
                  className={`nav-link-item${active === item.id ? " active" : ""}`}
                >
                  {item.label}
                  <span className="nav-underline" />
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <MagneticCTA href="#contact">Hire Me</MagneticCTA>
        </motion.div>

        {/* Hamburger button */}
        <motion.button
          className="nav-mobile-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="hamburger">
            <motion.span variants={top} animate={open ? "open" : "closed"} transition={{ duration: 0.3 }} />
            <motion.span variants={mid} animate={open ? "open" : "closed"} transition={{ duration: 0.3 }} />
            <motion.span variants={bot} animate={open ? "open" : "closed"} transition={{ duration: 0.3 }} />
          </div>
        </motion.button>
      </header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
            animate={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
            exit={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            {navigationItems.map((item, i) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.07 }}
              >
                <span className="mobile-nav-num">0{i + 1}</span>
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mobile-nav-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Hire Me →
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
