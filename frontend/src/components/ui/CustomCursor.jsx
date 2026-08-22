import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const pos = useRef({ x: -200, y: -200 });
  const current = useRef({ x: -200, y: -200 });
  const [label, setLabel] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const rafRef = useRef(null);

  useEffect(() => {
    // Check if touch device
    if (window.matchMedia("(hover: none)").matches) return;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const onEnterInteractive = (e) => {
      const el = e.target.closest("a, button, [data-cursor]");
      if (!el) return;
      const cursorLabel = el.getAttribute("data-cursor");
      setLabel(cursorLabel || "");
      setIsExpanded(true);
    };

    const onLeaveInteractive = () => {
      setLabel("");
      setIsExpanded(false);
    };

    const onEnterCard = (e) => {
      if (e.target.closest(".project-card, .project-row-card")) {
        setLabel("View");
        setIsExpanded(true);
      }
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onEnterInteractive);
    document.addEventListener("mouseout", onLeaveInteractive);
    document.addEventListener("mouseover", onEnterCard);

    // Lerp animation loop
    const lerp = (a, b, n) => a + (b - a) * n;

    const animate = () => {
      current.current.x = lerp(current.current.x, pos.current.x, 0.1);
      current.current.y = lerp(current.current.y, pos.current.y, 0.1);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${current.current.x}px, ${current.current.y}px)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnterInteractive);
      document.removeEventListener("mouseout", onLeaveInteractive);
      document.removeEventListener("mouseover", onEnterCard);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Outer ring — lerp lag */}
      <div
        ref={cursorRef}
        className={`custom-cursor-ring${isExpanded ? " expanded" : ""}${label ? " has-label" : ""}`}
        style={{ willChange: "transform" }}
      >
        {label && <span className="cursor-label">{label}</span>}
      </div>
      {/* Inner dot — instant */}
      <div
        ref={dotRef}
        className="custom-cursor-dot"
        style={{ willChange: "transform" }}
      />
    </>
  );
};

export default CustomCursor;
