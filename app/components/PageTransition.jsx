"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const [isFirstMount, setIsFirstMount] = useState(true);

  useEffect(() => {
    setIsFirstMount(false);
  }, []);

  // Différentes animations selon la page
  const getAnimation = () => {
    if (pathname === "/") {
      return {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 1.05 },
      };
    } else if (pathname.includes("/projects")) {
      return {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
      };
    } else if (pathname.includes("/blog")) {
      return {
        initial: { opacity: 0, y: 50, rotateX: -10 },
        animate: { opacity: 1, y: 0, rotateX: 0 },
        exit: { opacity: 0, y: -50, rotateX: 10 },
      };
    } else {
      return {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
      };
    }
  };

  const animation = getAnimation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={animation.initial}
        animate={animation.animate}
        exit={animation.exit}
        transition={{
          duration: 0.5,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="w-full"
      >
        {/* Loader de transition */}
        {!isFirstMount && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-lion-gold to-lion-electric z-50 origin-left"
          />
        )}
        {children}
      </motion.div>
    </AnimatePresence>
  );
}