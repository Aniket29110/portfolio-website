import { motion as Motion } from "framer-motion";

const SectionHeading = ({ eyebrow, title, description, align = "left" }) => {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <Motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`max-w-3xl ${alignment}`}
    >
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[var(--accent-strong)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-4 text-3xl font-extrabold text-[var(--text-primary)] sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </Motion.div>
  );
};

export default SectionHeading;
