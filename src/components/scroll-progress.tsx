"use client";

import { useScroll, useSpring, motion } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{
        scaleX,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        originX: 0,
        zIndex: 9999,
        background:
          "linear-gradient(90deg, #22d3ee 0%, hsl(188 95% 53%) 50%, #38bdf8 100%)",
        boxShadow:
          "0 0 12px hsl(188 95% 53% / 0.8), 0 0 4px hsl(188 95% 53% / 0.6)",
      }}
    />
  );
}
