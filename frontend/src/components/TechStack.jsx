const TechStack = () => {
  const tech = ["React", "Node", "Python", "SQL", "Web", "AI"];

  return (
    <section className="section-shell">
      <div className="content-width text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[var(--accent-strong)]">
          Stack
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-extrabold text-[#111827] sm:text-5xl">
          Tools I use to build polished products.
        </h2>

        <div className="mt-14 flex flex-wrap justify-center gap-5">
          {tech.map((item) => (
            <div
              key={item}
              className="flex h-24 w-24 items-center justify-center rounded-[2rem] border border-orange-100 bg-white text-sm font-bold text-[#111827] shadow-[var(--shadow-sharp)] transition hover:-translate-y-1 hover:border-orange-200"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
