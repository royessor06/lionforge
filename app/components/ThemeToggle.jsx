"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "@phosphor-icons/react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setDarkMode(!darkMode)}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-lion-gold rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
      aria-label="Toggle theme"
    >
      {darkMode ? (
        <Sun size={24} className="text-lion-dark" />
      ) : (
        <Moon size={24} className="text-lion-dark" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;