// app/components/ScrollAnimation.jsx
"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollAnimation() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  
  return (
    <motion.div style={{ scale }}>
      {/* Contenu avec parallaxe */}
    </motion.div>
  );
}