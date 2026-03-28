import { useMemo, useState } from "react";
import { motion as Motion } from "framer-motion";
import { ArrowUpRight, Filter, Github, Sparkles } from "lucide-react";
import { projectFilters, projects } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

const PortfolioPreview = ({ project }) => {
  const bars = project.preview.chartBars;

  return (
    <div className="relative mx-auto w-full max-w-[34rem]">
      <div className="rounded-[2rem] border border-white/10 bg-[#0b1020] p-3 shadow-[0_24px_60px_rgba(15,23,42,0.28)]">
        <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,#f9f7f2_0%,#f2ede3_100%)]">
          <div className="flex items-center justify-between border-b border-black/5 px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-linear-to-br from-[var(--accent-secondary)] to-[var(--accent-strong)]" />
              <div>
                <div className="h-2.5 w-28 rounded-full bg-black/80" />
                <div className="mt-2 h-2 w-20 rounded-full bg-black/25" />
              </div>
            </div>
            <div className="rounded-full bg-black/6 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-black/55">
              Live Product
            </div>
          </div>

          <div className="grid gap-6 px-5 py-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="inline-flex rounded-full bg-black/6 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-black/60">
                Founder Portfolio
              </div>
              <div className="mt-4 space-y-3">
                <div className="h-4 w-40 rounded-full bg-black/85" />
                <div className="h-12 w-full rounded-[1rem] bg-black/8" />
                <div className="h-12 w-5/6 rounded-[1rem] bg-black/8" />
                <div className="h-12 w-3/4 rounded-[1rem] bg-black/8" />
              </div>

              <div className="mt-6 flex gap-3">
                <div className="h-10 w-32 rounded-full bg-linear-to-r from-[var(--accent-secondary)] to-[var(--accent-strong)]" />
                <div className="h-10 w-28 rounded-full border border-black/10 bg-white/60" />
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {["Taste", "Story", "Speed"].map((label) => (
                  <div key={label} className="rounded-[1rem] border border-black/8 bg-white/75 p-3">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-black/45">{label}</div>
                    <div className="mt-3 h-2 w-full rounded-full bg-black/8" />
                    <div className="mt-2 h-2 w-3/4 rounded-full bg-black/8" />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-black/8 bg-white/70 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]">
              <div className="rounded-[1.2rem] bg-[linear-gradient(180deg,#111827_0%,#1f2937_100%)] p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
                      Product Pulse
                    </div>
                    <div className="mt-2 text-2xl font-semibold">{project.preview.primaryMetric}</div>
                  </div>
                  <Sparkles size={18} className="text-white/80" />
                </div>
                <div className="mt-5 flex items-end gap-2">
                  {bars.map((bar, index) => (
                    <div
                      key={`${bar}-${index}`}
                      className="w-full rounded-full bg-linear-to-t from-[var(--accent-secondary)] to-[var(--accent-strong)] opacity-90"
                      style={{ height: `${bar}px` }}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-4 rounded-[1.2rem] border border-black/8 bg-white/80 p-4">
                <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-black/45">
                  {project.preview.secondaryMetric}
                </div>
                <div className="mt-2 text-sm font-semibold text-black/80">{project.preview.secondaryValue}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 -right-3 w-[10.5rem] rounded-[1.7rem] border border-white/10 bg-[#0b1020] p-2 shadow-[0_22px_50px_rgba(15,23,42,0.3)] sm:w-[12rem]">
        <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,#f9f7f2_0%,#ede6d7_100%)]">
          <div className="mx-auto mt-2 h-1.5 w-14 rounded-full bg-black/10" />
          <div className="px-3 pb-3 pt-4">
            <div className="rounded-[1rem] bg-white/85 p-3">
              <div className="h-20 rounded-[0.9rem] bg-linear-to-br from-[var(--accent-secondary)]/30 to-[var(--accent-strong)]/40" />
              <div className="mt-3 h-2.5 w-20 rounded-full bg-black/15" />
              <div className="mt-2 h-2.5 w-14 rounded-full bg-black/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AnalyticsPreview = ({ project }) => {
  const bars = project.preview.chartBars;

  return (
    <div className="relative mx-auto w-full max-w-[34rem]">
      <div className="rounded-[2rem] border border-white/10 bg-[#09111c] p-3 shadow-[0_24px_60px_rgba(5,15,28,0.36)]">
        <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,#08131f_0%,#0d1b2d_100%)] text-white">
          <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-emerald-200/60">
                Intervention Dashboard
              </div>
              <div className="mt-2 text-lg font-semibold text-white/95">{project.preview.title}</div>
            </div>
            <div className="rounded-full bg-emerald-400/12 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-emerald-200/80">
              Actionable
            </div>
          </div>

          <div className="grid gap-4 p-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              <div className="rounded-[1.3rem] border border-white/10 bg-white/5 p-4">
                <div className="text-[10px] font-semibold uppercase tracking-[0.26em] text-white/45">Risk Overview</div>
                <div className="mt-3 text-3xl font-semibold text-white">{project.preview.primaryMetric}</div>
                <div className="mt-2 h-2.5 w-full rounded-full bg-white/8">
                  <div className="h-full w-[82%] rounded-full bg-linear-to-r from-emerald-300 to-cyan-300" />
                </div>
              </div>

              <div className="rounded-[1.3rem] border border-white/10 bg-white/5 p-4">
                <div className="text-[10px] font-semibold uppercase tracking-[0.26em] text-white/45">Student Signals</div>
                <div className="mt-4 space-y-3">
                  {["Attendance", "Assessment", "Engagement"].map((item, index) => (
                    <div key={item}>
                      <div className="mb-2 flex items-center justify-between text-xs text-white/65">
                        <span>{item}</span>
                        <span>{[68, 74, 59][index]}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/8">
                        <div
                          className="h-full rounded-full bg-linear-to-r from-cyan-300 to-emerald-300"
                          style={{ width: `${[68, 74, 59][index]}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[1.35rem] border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between">
                <div className="text-[10px] font-semibold uppercase tracking-[0.26em] text-white/45">
                  Risk Trend
                </div>
                <div className="text-xs text-white/55">{project.preview.secondaryValue}</div>
              </div>
              <div className="mt-5 flex h-[11.5rem] items-end gap-3">
                {bars.map((bar, index) => (
                  <div key={`${bar}-${index}`} className="flex w-full flex-col justify-end gap-2">
                    <div
                      className="rounded-t-[1rem] bg-linear-to-t from-cyan-400 to-emerald-300"
                      style={{ height: `${bar + 10}px` }}
                    />
                    <div className="mx-auto h-1.5 w-1.5 rounded-full bg-white/30" />
                  </div>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-[1rem] border border-white/10 bg-black/10 p-3">
                  <div className="text-[10px] uppercase tracking-[0.26em] text-white/40">Follow-up</div>
                  <div className="mt-2 text-sm font-semibold text-white/85">Early outreach trigger</div>
                </div>
                <div className="rounded-[1rem] border border-white/10 bg-black/10 p-3">
                  <div className="text-[10px] uppercase tracking-[0.26em] text-white/40">Use Case</div>
                  <div className="mt-2 text-sm font-semibold text-white/85">Retention workflow</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-5 -right-3 w-[10.5rem] rounded-[1.7rem] border border-white/10 bg-[#09111c] p-2 shadow-[0_22px_50px_rgba(5,15,28,0.3)] sm:w-[12rem]">
        <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,#0f1f2f_0%,#14283d_100%)] p-3 text-white">
          <div className="mx-auto mb-3 h-1.5 w-14 rounded-full bg-white/12" />
          <div className="rounded-[1rem] border border-white/8 bg-white/5 p-3">
            <div className="text-[10px] uppercase tracking-[0.24em] text-white/45">Status</div>
            <div className="mt-2 text-lg font-semibold text-emerald-200">At Risk</div>
            <div className="mt-3 h-2 rounded-full bg-white/8">
              <div className="h-full w-2/3 rounded-full bg-linear-to-r from-emerald-300 to-cyan-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectPreviewFrame = ({ project }) => {
  if (project.preview.theme === "portfolio") {
    return <PortfolioPreview project={project} />;
  }

  return <AnalyticsPreview project={project} />;
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="section-shell">
      <div className="content-width space-y-12">
        <div className="flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between">
          <SectionHeading
            eyebrow="Projects"
            title="Selected builds with startup-style presentation and execution detail."
            description="I want the work to read like product case studies: clear problem framing, fast execution, and enough polish to feel investment-worthy."
          />

          <div className="flex flex-wrap gap-3">
            {projectFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition ${
                  activeFilter === filter
                    ? "bg-linear-to-r from-[var(--accent-strong)] via-[var(--accent-secondary)] to-[var(--accent-secondary)] text-white shadow-lg"
                    : "border border-[var(--border-color)] bg-[var(--surface-strong)] text-[var(--text-secondary)] hover:border-[var(--accent-soft)] hover:text-[var(--text-primary)]"
                }`}
              >
                <Filter size={15} />
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-8">
          {filteredProjects.map((project, index) => (
            <Motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="founder-panel overflow-hidden p-0"
            >
              <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative overflow-hidden border-b border-[var(--border-color)] p-6 lg:border-b-0 lg:border-r lg:p-8">
                  <div className={`absolute inset-0 bg-linear-to-br ${project.preview.accent} opacity-10`} />
                  <div className="relative">
                    <div className="mb-5 flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--accent-strong)]">
                          {project.preview.eyebrow}
                        </p>
                        <h3 className="mt-3 text-2xl font-semibold text-[var(--text-primary)]">
                          {project.preview.title}
                        </h3>
                      </div>
                      <div className="rounded-full border border-white/10 bg-black/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--text-secondary)]">
                        {project.featuredLabel}
                      </div>
                    </div>

                    <ProjectPreviewFrame project={project} />

                    <p className="mt-10 max-w-xl text-sm leading-7 text-[var(--text-secondary)]">
                      {project.preview.caption}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-[var(--border-color)] bg-[var(--surface-subtle)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent-strong)]">
                      {project.category}
                    </span>
                    <span className="text-sm text-[var(--text-muted)]">{project.tagline}</span>
                  </div>

                  <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[var(--text-primary)]">{project.title}</h3>

                  <div className="mt-6 grid gap-4 text-sm leading-7 text-[var(--text-secondary)]">
                    <div>
                      <p className="font-semibold text-[var(--text-primary)]">Problem</p>
                      <p className="mt-1">{project.problem}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--text-primary)]">Solution</p>
                      <p className="mt-1">{project.solution}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--text-primary)]">Why it matters</p>
                      <p className="mt-1">{project.impact}</p>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-3 md:grid-cols-3">
                    {project.impactMetrics.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-[1.4rem] border border-[var(--border-color)] bg-[var(--surface-subtle)] px-4 py-4"
                      >
                        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--text-muted)]">
                          {item.label}
                        </p>
                        <p className="mt-3 text-sm font-semibold leading-6 text-[var(--text-primary)]">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[var(--border-color)] bg-[var(--surface-subtle)] px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <div
                        key={feature}
                        className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-subtle)] px-4 py-4 text-sm leading-6 text-[var(--text-secondary)] transition hover:-translate-y-0.5 hover:border-[var(--accent-soft)]"
                      >
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-[1.75rem] border border-[var(--border-color)] bg-[var(--surface-subtle)] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--accent-strong)]">
                      Real-World Impact
                    </p>
                    <div className="mt-4 grid gap-3">
                      {project.outcomes.map((outcome) => (
                        <div
                          key={outcome}
                          className="flex gap-3 rounded-2xl border border-[var(--border-color)] bg-[var(--surface-strong)] px-4 py-4 text-sm leading-6 text-[var(--text-secondary)]"
                        >
                          <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--accent-strong)]" />
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={project.github || "#"}
                      target={project.github ? "_blank" : undefined}
                      rel={project.github ? "noreferrer" : undefined}
                      aria-disabled={!project.github}
                      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
                        project.github
                          ? "border border-[var(--border-color)] bg-[var(--surface-strong)] text-[var(--text-primary)] hover:-translate-y-0.5 hover:border-[var(--accent-soft)]"
                          : "cursor-not-allowed border border-[var(--border-color)] bg-[var(--surface-subtle)] text-[var(--text-muted)]"
                      }`}
                    >
                      <Github size={17} />
                      {project.github ? "View GitHub" : "GitHub Coming Soon"}
                    </a>
                    <a
                      href={project.live || "#"}
                      target={project.live ? "_blank" : undefined}
                      rel={project.live ? "noreferrer" : undefined}
                      aria-disabled={!project.live}
                      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
                        project.live
                          ? "bg-linear-to-r from-[var(--accent-strong)] via-[var(--accent-secondary)] to-[var(--accent-secondary)] text-white hover:-translate-y-0.5"
                          : "cursor-not-allowed border border-[var(--border-color)] bg-[var(--surface-subtle)] text-[var(--text-muted)]"
                      }`}
                    >
                      <ArrowUpRight size={17} />
                      {project.live ? "Live Demo" : "Demo Unavailable"}
                    </a>
                  </div>
                </div>
              </div>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
