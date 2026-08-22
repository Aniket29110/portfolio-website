import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ isVisible, onComplete }) => {
  const [count, setCount] = useState(0);
  const [hiding, setHiding] = useState(false);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1800; // 1.8s to count from 0 to 100
    startRef.current = performance.now();

    const animate = (now) => {
      const elapsed = now - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = Math.floor(eased * 100);
      setCount(val);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setCount(100);
        setTimeout(() => {
          setHiding(true);
          setTimeout(() => {
            onComplete?.();
          }, 700);
        }, 200);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="loader-overlay"
          initial={{ clipPath: "inset(0 0 0% 0)" }}
          animate={hiding ? { clipPath: "inset(0 0 100% 0)" } : { clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Center name */}
          <div className="loader-center">
            <motion.div
              className="loader-name"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
              Aniket<span>.</span>
            </motion.div>
            <motion.div
              className="loader-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              Portfolio &amp; Full-Stack Developer
            </motion.div>
          </div>

          {/* Bottom bar */}
          <div className="loader-bottom">
            {/* Progress bar */}
            <div className="loader-bar-track">
              <motion.div
                className="loader-bar-fill-cinematic"
                style={{ width: `${count}%` }}
              />
            </div>

            {/* Counter */}
            <div className="loader-counter">
              {String(count).padStart(2, "0")}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
