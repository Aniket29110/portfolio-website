import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import profileImage from "../assets/profile.jpeg";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);

  useEffect(() => {
    const roles = personalInfo.typingRoles;
    const currentRole = roles[activeRoleIndex];
    let characterIndex = 0;

    const typingTimer = window.setInterval(() => {
      characterIndex += 1;
      setTypedText(currentRole.slice(0, characterIndex));
      if (characterIndex === currentRole.length) {
        window.clearInterval(typingTimer);
        window.setTimeout(() => {
          setTypedText("");
          setActiveRoleIndex((index) => (index + 1) % roles.length);
        }, 1400);
      }
    }, 55);

    return () => window.clearInterval(typingTimer);
  }, [activeRoleIndex]);

  return (
    <section id="home" className="relative pt-32 sm:pt-36">
      <div className="content-width grid min-h-screen items-center gap-14 pb-20 pt-10 lg:grid-cols-[1.05fr_0.95fr]">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center rounded-full border border-[var(--border-color)] bg-[var(--bg-elevated)] px-4 py-2 text-sm text-[var(--text-secondary)] shadow-[var(--shadow-soft)]">
            <span className="mr-2 h-2.5 w-2.5 rounded-full bg-emerald-400" />
            {personalInfo.availability}
          </div>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent-strong)]">
            {personalInfo.role}
          </p>

          <h1 className="mt-6 max-w-5xl text-4xl font-semibold leading-[0.98] tracking-[-0.06em] text-[var(--text-primary)] sm:text-5xl md:text-6xl xl:text-[5.4rem]">
            {personalInfo.heroHeadline}
          </h1>

          <div className="mt-6 min-h-8 text-lg font-medium text-[var(--accent-strong)] sm:text-xl">
            {typedText}
            <span className="ml-1 inline-block h-6 w-[2px] translate-y-1 animate-pulse bg-[var(--accent-strong)]" />
          </div>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
            {personalInfo.heroDescription}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {personalInfo.founderPillars.map((pillar) => (
              <span
                key={pillar}
                className="rounded-full border border-[var(--border-color)] bg-[var(--surface-subtle)] px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-secondary)]"
              >
                {pillar}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-[var(--accent-strong)] via-[var(--accent-secondary)] to-[var(--accent-secondary)] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight size={17} />
            </a>
            <a
              href={personalInfo.resume}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--surface-strong)] px-6 py-3.5 text-sm font-semibold text-[var(--text-primary)] shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5"
            >
              <Download size={17} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-[var(--surface-subtle)] px-6 py-3.5 text-sm font-semibold text-[var(--text-primary)] transition hover:-translate-y-0.5 hover:border-[var(--accent-soft)]"
            >
              <Mail size={17} />
              Contact
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--surface-strong)] text-[var(--text-primary)] shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:border-[var(--accent-soft)]"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--surface-strong)] text-[var(--text-primary)] shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:border-[var(--accent-soft)]"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.08 }}
          className="relative"
        >
          <div className="founder-panel relative overflow-hidden p-5 sm:p-6">
            <div className="absolute inset-x-10 top-0 h-32 rounded-full bg-linear-to-r from-[var(--accent-secondary)]/25 via-[var(--accent-strong)]/20 to-white/10 blur-3xl" />
            <div className="absolute right-6 top-6 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/80">
              Founder Mode
            </div>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[var(--surface-subtle)] p-4">
              <div className="rounded-[1.75rem] bg-linear-to-br from-slate-900/40 via-transparent to-white/10 p-3">
                <img
                  src={profileImage}
                  alt={personalInfo.name}
                  className="h-[420px] w-full rounded-[1.5rem] object-cover object-top sm:h-[500px]"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {personalInfo.stats.map((item, index) => (
              <Motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2 + index * 0.1 }}
                className="founder-panel p-5"
              >
                <p className="text-xs uppercase tracking-[0.35em] text-[var(--text-muted)]">{item.label}</p>
                <p className="mt-3 text-sm font-semibold leading-6 text-[var(--text-primary)]">{item.value}</p>
              </Motion.div>
            ))}
          </div>

          <div className="mt-4 founder-panel p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent-strong)]">Positioning</p>
                <p className="mt-3 max-w-md text-sm leading-7 text-[var(--text-secondary)]">
                  I want my portfolio to feel like a young founder's launch page: ambitious, clean, and clear about what I can build.
                </p>
              </div>
              <Sparkles size={18} className="mt-1 text-[var(--accent-strong)]" />
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Hero;
