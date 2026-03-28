import { useEffect, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { navigationItems, personalInfo } from "../data/portfolioData";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ theme, onToggleTheme }) => {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      let current = "home";
      navigationItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (!section) return;
        const top = section.offsetTop - 180;
        if (window.scrollY >= top) current = item.id;
      });
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Motion.header
      initial={{ y: -36, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-[60] px-4 pt-4"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[var(--border-color)] bg-[var(--bg-elevated)] px-4 py-3 shadow-[var(--shadow-soft)] backdrop-blur-xl sm:px-6">
        <a href="#home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br from-[var(--accent-strong)] via-[var(--accent-secondary)] to-white text-sm font-bold text-slate-950 shadow-lg">
            AK
          </div>
          <div>
            <p className="text-sm font-semibold text-[var(--text-primary)]">{personalInfo.name}</p>
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--text-muted)]">Builder Portfolio</p>
          </div>
        </a>

        <div className="hidden items-center gap-2 lg:flex">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`rounded-full px-4 py-2 text-sm transition ${
                active === item.id
                  ? "bg-[var(--surface-subtle)] text-[var(--text-primary)]"
                  : "text-[var(--text-secondary)] hover:bg-[var(--surface-subtle)] hover:text-[var(--text-primary)]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a
            href={personalInfo.resume}
            className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[var(--accent-strong)] via-[var(--accent-secondary)] to-[var(--accent-secondary)] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
          >
            <Download size={16} />
            Resume
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--surface-strong)] text-[var(--text-primary)]"
            onClick={() => setOpen((current) => !current)}
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <Motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-3 max-w-7xl rounded-3xl border border-[var(--border-color)] bg-[var(--bg-elevated)] p-4 shadow-[var(--shadow-soft)] backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm transition ${
                    active === item.id
                      ? "bg-[var(--surface-subtle)] text-[var(--text-primary)]"
                      : "text-[var(--text-secondary)] hover:bg-[var(--surface-subtle)]"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={personalInfo.resume}
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-[var(--accent-strong)] via-[var(--accent-secondary)] to-[var(--accent-secondary)] px-5 py-3 text-sm font-semibold text-white"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </Motion.div>
        ) : null}
      </AnimatePresence>
    </Motion.header>
  );
};

export default Navbar;
