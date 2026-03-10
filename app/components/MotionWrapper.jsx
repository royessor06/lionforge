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
  ...props 
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const getInitialPosition = () => {
    switch(direction) {
      case "up": return { y: distance };
      case "down": return { y: -distance };
      case "left": return { x: distance };
      case "right": return { x: -distance };
      default: return { y: distance };
    }
  };

  const variants = {
    hidden: { opacity: 0, ...getInitialPosition() },
    visible: { opacity: 1, y: 0, x: 0, transition: { duration, delay } },
  };

  if (!isMounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, threshold }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;