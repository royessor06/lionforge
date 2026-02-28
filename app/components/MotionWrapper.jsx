"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MotionWrapper = ({ 
  children, 
  delay = 0, 
  direction = "up", 
  duration = 0.6,
  distance = 50,
  className = "",
  once = true,
  threshold = 0.1,
  blur = false,
  bounce = false,
  ...props 
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const getInitialPosition = () => {
    const basePosition = {};
    
    switch(direction) {
      case "up": basePosition.y = distance; break;
      case "down": basePosition.y = -distance; break;
      case "left": basePosition.x = distance; break;
      case "right": basePosition.x = -distance; break;
      case "fade": break;
      case "scale": basePosition.scale = 0.8; break;
      case "rotate": basePosition.rotate = -10; break;
      case "flip": basePosition.rotateY = 90; break;
      case "zoom-out": basePosition.scale = 1.2; break;
      case "slide-up-scale": basePosition.y = distance; basePosition.scale = 0.9; break;
      default: basePosition.y = distance;
    }

    if (blur) {
      basePosition.filter = "blur(10px)";
    }

    return basePosition;
  };

  const getTransitionEasing = () => {
    if (bounce) {
      return [0.68, -0.55, 0.265, 1.55]; // Effet rebond
    }
    return [0.25, 0.1, 0.25, 1]; // Easing standard
  };

  const variants = {
    hidden: {
      opacity: 0,
      ...getInitialPosition(),
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      rotate: 0,
      rotateY: 0,
      filter: "blur(0px)",
      transition: {
        duration: duration,
        delay: delay,
        ease: getTransitionEasing(),
        staggerChildren: 0.1,
        delayChildren: delay,
      },
    },
  };

  if (!isMounted) {
    return (
      <div className={className} style={{ opacity: 1, transform: "none", filter: "none" }}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, threshold, margin: "-20px" }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;