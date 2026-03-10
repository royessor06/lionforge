"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code, DeviceMobile, Lightning } from "@phosphor-icons/react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fond avec gradient subtil */}
      <div className="absolute inset-0 bg-gradient-to-br from-lion-dark via-lion-dark to-lion-electric bg-opacity-20"></div>
      
      {/* Particules décoratives */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-lion-gold bg-opacity-30 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-4xl text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Forgez votre succès numérique avec{" "}
            <span className="text-gradient">LionForge</span>
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-lion-light mb-10"
        >
          Développement web & mobile, solutions sur mesure et innovation technologique.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="group relative bg-lion-gold text-lion-dark px-8 py-3 rounded-lg font-semibold 
                     hover:bg-opacity-90 transition-all duration-300 
                     shadow-lg shadow-lion-gold shadow-opacity-20 hover:shadow-xl hover:shadow-lion-gold hover:shadow-opacity-30
                     transform hover:-translate-y-1 overflow-hidden"
          >
            <span className="relative z-10">Demander un devis</span>
            <div className="absolute inset-0 bg-white rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </Link>
          
          <Link
            href="/projects"
            className="group relative border-2 border-lion-gold text-lion-gold px-8 py-3 rounded-lg font-semibold 
                     hover:bg-lion-gold hover:bg-opacity-10 transition-all duration-300
                     transform hover:-translate-y-1 overflow-hidden"
          >
            <span className="relative z-10">Voir nos projets</span>
            <div className="absolute inset-0 bg-lion-gold bg-opacity-5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </Link>
        </motion.div>

        {/* Icônes décoratives */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-6 mt-16 text-lion-gold"
        >
          <Code size={32} weight="duotone" className="opacity-50 hover:opacity-100 transition-opacity" />
          <DeviceMobile size={32} weight="duotone" className="opacity-50 hover:opacity-100 transition-opacity" />
          <Lightning size={32} weight="duotone" className="opacity-50 hover:opacity-100 transition-opacity" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;