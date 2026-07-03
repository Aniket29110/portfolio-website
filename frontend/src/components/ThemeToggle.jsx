import { Moon, SunMedium } from "lucide-react";

const ThemeToggle = ({ theme, onToggle }) => {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-orange-100 bg-white text-[#111827] shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:border-[var(--accent-soft)] hover:bg-orange-50"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? <SunMedium size={18} /> : <Moon size={18} />}
    </button>
  );
};

export default ThemeToggle;
