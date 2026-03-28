import { motion as Motion } from "framer-motion";
import { Database, Figma, Globe, Server, Wrench } from "lucide-react";
import { skillCategories } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

const iconMap = {
  Frontend: Globe,
  Backend: Server,
  Database: Database,
  Tools: Wrench,
  Design: Figma,
};

const Skills = () => {
  return (
    <section id="skills" className="section-shell">
      <div className="content-width space-y-12">
        <SectionHeading
          eyebrow="Skills"
          title="A practical skill set shaped by projects and curiosity."
          description="I focus on tools that help me design responsive interfaces, build functional applications, and keep improving as a developer."
        />

        <div className="grid gap-6 xl:grid-cols-2">
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.title] || Wrench;

            return (
              <Motion.article
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="surface-card p-7 sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-400/20 via-violet-500/20 to-fuchsia-500/20 text-[var(--accent-strong)]">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-[var(--text-primary)]">{category.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">{category.description}</p>
                  </div>
                </div>

                <div className="mt-8 space-y-5">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="font-medium text-[var(--text-primary)]">{skill.name}</span>
                        <span className="text-[var(--text-muted)]">{skill.level}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-[var(--surface-subtle)]">
                        <Motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="h-full rounded-full bg-linear-to-r from-cyan-400 via-violet-500 to-fuchsia-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
