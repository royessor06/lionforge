// app/components/ThemeToggle.jsx
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={() => setDarkMode(!darkMode)}
      className="fixed bottom-6 right-6 z-50 p-3 bg-lion-gold rounded-full shadow-2xl"
    >
      {darkMode ? '☀️' : '🌙'}
    </motion.button>
  );
}