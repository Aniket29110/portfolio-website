import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * Wraps children and staggers their entrance animation on scroll.
 */
const StaggerChildren = ({
  children,
  stagger = 0.1,
  delay = 0,
  y = 50,
  once = true,
  className = "",
  style = {},
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-5% 0px" });

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {Array.isArray(children)
        ? children.map((child_el, i) => (
            <motion.div key={i} variants={child} style={{ willChange: "transform, opacity" }}>
              {child_el}
            </motion.div>
          ))
        : <motion.div variants={child} style={{ willChange: "transform, opacity" }}>{children}</motion.div>}
    </motion.div>
  );
};

export default StaggerChildren;
