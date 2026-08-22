import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * Reveals text word-by-word or character-by-character with a clip-path mask.
 * @param {string} text - Text to reveal
 * @param {string} as - HTML tag ('h1', 'h2', 'p', 'span')
 * @param {'words'|'chars'} split - Split by words or chars
 * @param {number} delay - Initial delay in seconds
 * @param {number} stagger - Stagger between each item in seconds
 * @param {string} className - CSS class
 */
const TextReveal = ({
  text,
  as: Tag = "p",
  split = "words",
  delay = 0,
  stagger = 0.08,
  className = "",
  style = {},
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const items = split === "chars"
    ? text.split("")
    : text.split(" ").filter(Boolean);

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const item = {
    hidden: {
      y: "110%",
      opacity: 0,
    },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <Tag className={className} style={{ overflow: "hidden", ...style }}>
      <motion.span
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={{
          display: "inline-flex",
          flexWrap: "wrap",
          gap: split === "words" ? "0.25em" : "0",
        }}
        aria-label={text}
      >
        {items.map((chunk, i) => (
          <span key={i} style={{ overflow: "hidden", display: "inline-block" }}>
            <motion.span
              variants={item}
              style={{ display: "inline-block", willChange: "transform" }}
            >
              {chunk}
              {split === "words" ? "" : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
};

export default TextReveal;
