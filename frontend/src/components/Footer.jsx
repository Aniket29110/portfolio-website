import { Github, HeartHandshake, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const Footer = () => {
  return (
    <footer className="border-t border-[var(--border-color)] px-4 py-10">
      <div className="content-width flex flex-col gap-6 rounded-[2rem] border border-[var(--border-color)] bg-[var(--surface-strong)] px-6 py-6 shadow-[var(--shadow-soft)] sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-semibold text-[var(--text-primary)]">{personalInfo.name}</p>
          <p className="mt-2 max-w-xl text-sm leading-7 text-[var(--text-secondary)]">
            Built to communicate clarity, craft, and readiness for professional software engineering opportunities.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:items-end">
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--surface-subtle)] text-[var(--text-primary)] transition hover:-translate-y-0.5"
              aria-label="GitHub"
            >
              <Github size={17} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--surface-subtle)] text-[var(--text-primary)] transition hover:-translate-y-0.5"
              aria-label="LinkedIn"
            >
              <Linkedin size={17} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--surface-subtle)] text-[var(--text-primary)] transition hover:-translate-y-0.5"
              aria-label="Email"
            >
              <Mail size={17} />
            </a>
          </div>

          <p className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <HeartHandshake size={16} />
            {new Date().getFullYear()} {personalInfo.firstName}. Thanks for visiting.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
