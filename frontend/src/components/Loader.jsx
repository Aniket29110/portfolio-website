import { motion as Motion, AnimatePresence } from "framer-motion";

const Loader = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible ? (
        <Motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45 } }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[var(--bg-color)]"
        >
          <div className="flex flex-col items-center gap-5">
            <Motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="h-16 w-16 rounded-full border-4 border-[var(--accent-soft)] border-t-[var(--accent-strong)]"
            />
            <Motion.p
              initial={{ opacity: 0.4 }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY }}
              className="text-sm font-medium uppercase tracking-[0.35em] text-[var(--text-secondary)]"
            >
              Loading Portfolio
            </Motion.p>
          </div>
        </Motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Loader;
