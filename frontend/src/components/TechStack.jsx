const TechStack = () => {
  const tech = ["⚛️", "🟢", "🐍", "💾", "🌐", "🧠"];

  return (
    <section className="py-32 text-center">
      <h2 className="text-4xl font-bold mb-16">Tech Stack</h2>

      <div className="flex justify-center gap-10 text-5xl">
        {tech.map((icon) => (
          <div
            key={icon}
            className="bg-violet-500/20 w-20 h-20 flex items-center justify-center rounded-full shadow-lg"
          >
            {icon}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
