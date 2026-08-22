import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * Magnetic button — moves toward cursor on hover.
 * Wrap any button or link content.
 */
const MagneticButton = ({
  children,
  className = "",
  style = {},
  strength = 0.3,
  onClick,
  href,
  as: Tag = "div",
}) => {
  const ref = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const x = useSpring(rawX, springConfig);
  const y = useSpring(rawY, springConfig);

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;
    rawX.set(deltaX);
    rawY.set(deltaY);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  const props = {
    ref,
    className,
    style: { willChange: "transform", ...style },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onClick,
  };

  if (href) {
    return (
      <motion.a href={href} {...props} style={{ x, y, ...props.style }}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div {...props} style={{ x, y, ...props.style }}>
      {children}
    </motion.div>
  );
};

export default MagneticButton;
