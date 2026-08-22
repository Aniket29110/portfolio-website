import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * Fade + slide-up a child on scroll enter.
 */
const FadeIn = ({
  children,
  delay = 0,
  duration = 0.6,
  y = 40,
  x = 0,
  once = true,
  className = "",
  style = {},
  as: Tag = "div",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-5% 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ willChange: "transform, opacity", ...style }}
      initial={{ opacity: 0, y, x }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y, x }}
      transition={{
        duration,
        delay,
        ease: [0.215, 0.61, 0.355, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
