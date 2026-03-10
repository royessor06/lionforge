"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ScrollAnimation = ({ children, type = "fade", className = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);

  const getAnimation = () => {
    switch(type) {
      case "fade": return { opacity };
      case "scale": return { opacity, scale };
      case "slide": return { opacity, y };
      default: return { opacity };
    }
  };

  return (
    <motion.div ref={ref} style={getAnimation()} className={className}>
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;