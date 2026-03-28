import { motion as Motion } from "framer-motion";
import { aboutContent, personalInfo } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

const About = () => {
  return (
    <section id="about" className="section-shell">
      <div className="content-width space-y-12">
        <SectionHeading
          eyebrow="About"
          title="I approach software like a builder, not just a student."
          description={aboutContent.intro}
        />

        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.95fr]">
          <Motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="founder-panel p-8 sm:p-10"
          >
            <div className="mb-7 inline-flex items-center rounded-full border border-[var(--border-color)] bg-[var(--surface-subtle)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent-strong)]">
              Product taste + execution
            </div>
            <div className="space-y-5 text-[15px] leading-8 text-[var(--text-secondary)] sm:text-base">
              {aboutContent.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Motion.div>

          <div className="grid gap-6">
            <Motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="founder-panel p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--accent-strong)]">
                Snapshot
              </p>
              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-sm text-[var(--text-muted)]">Role</p>
                  <p className="mt-1 text-lg font-semibold text-[var(--text-primary)]">
                    {personalInfo.role}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[var(--text-muted)]">Location</p>
                  <p className="mt-1 text-lg font-semibold text-[var(--text-primary)]">
                    {personalInfo.location}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[var(--text-muted)]">Availability</p>
                  <p className="mt-1 text-lg font-semibold text-[var(--text-primary)]">
                    {personalInfo.availability}
                  </p>
                </div>
              </div>
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="founder-panel p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--accent-strong)]">
                What I Bring
              </p>
              <div className="mt-6 space-y-3">
                {aboutContent.highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-subtle)] px-4 py-3 text-sm text-[var(--text-secondary)] transition hover:-translate-y-0.5 hover:border-[var(--accent-soft)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
