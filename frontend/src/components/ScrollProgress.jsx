import { motion as Motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    mass: 0.25,
  });

  return (
    <Motion.div
      style={{ scaleX, transformOrigin: "0%" }}
      className="fixed left-0 top-0 z-[70] h-1 w-full bg-linear-to-r from-cyan-400 via-violet-500 to-fuchsia-500"
    />
  );
};

export default ScrollProgress;
