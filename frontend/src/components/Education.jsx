import { motion as Motion } from "framer-motion";
import { education } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

const Education = () => {
  return (
    <section id="education" className="section-shell">
      <div className="content-width space-y-12">
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation shaped by consistent growth."
          description="My education journey reflects progress, resilience, and a growing focus on software development as a long-term career."
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 top-2 hidden h-[calc(100%-2rem)] w-px bg-[var(--border-color)] sm:block" />

          <div className="space-y-6">
            {education.map((item, index) => (
              <Motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative sm:pl-14"
              >
                <div className="absolute left-[0.2rem] top-8 hidden h-4 w-4 rounded-full border-4 border-[var(--bg-color)] bg-[var(--accent-strong)] sm:block" />
                <div className="surface-card p-7 sm:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--accent-strong)]">
                        {item.timeline}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold text-[var(--text-primary)]">{item.title}</h3>
                      <p className="mt-2 text-sm font-medium text-[var(--text-secondary)]">{item.subtitle}</p>
                    </div>
                    <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-subtle)] px-4 py-3 text-left sm:min-w-40">
                      <p className="text-xs uppercase tracking-[0.25em] text-[var(--text-muted)]">{item.scoreLabel}</p>
                      <p className="mt-2 text-lg font-semibold text-[var(--text-primary)]">{item.score}</p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 text-sm text-[var(--text-secondary)] sm:grid-cols-[1fr_1.2fr]">
                    <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-subtle)] px-4 py-4">
                      <p className="text-xs uppercase tracking-[0.25em] text-[var(--text-muted)]">Institution</p>
                      <p className="mt-2 font-medium text-[var(--text-primary)]">{item.institution}</p>
                    </div>
                    <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-subtle)] px-4 py-4">
                      <p className="text-xs uppercase tracking-[0.25em] text-[var(--text-muted)]">Focus</p>
                      <p className="mt-2 leading-7">{item.details}</p>
                    </div>
                  </div>
                </div>
              </Motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
