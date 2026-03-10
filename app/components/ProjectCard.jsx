"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectCard = ({ title, category, image, slug, stack }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-lion-surface border border-lion-gold border-opacity-20 rounded-xl overflow-hidden hover:border-lion-gold hover:border-opacity-60 hover:shadow-xl hover:shadow-lion-gold hover:shadow-opacity-10 transition-all duration-300"
    >
      <div className="relative h-56 overflow-hidden bg-lion-dark">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-6xl text-lion-gold text-opacity-50 group-hover:text-opacity-100 transition-all">
              {category === "Web" ? "🌐" : category === "Mobile" ? "📱" : "⚙️"}
            </span>
          </div>
        )}
        
        {/* Badge catégorie */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-lion-gold text-lion-dark rounded-full text-sm font-bold">
            {category}
          </span>
        </div>
        
        {/* Stack */}
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 bg-lion-dark bg-opacity-80 text-lion-light rounded-full text-xs border border-lion-gold border-opacity-30">
            {stack}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-lion-gold transition-colors">
          {title}
        </h3>
        
        <p className="text-lion-light text-opacity-70 mb-4 line-clamp-2">
          Projet de {category} utilisant {stack}
        </p>
        
        <Link 
          href={`/projects/${slug}`}
          className="inline-flex items-center text-lion-electric hover:text-lion-gold transition-colors group/link"
        >
          <span>Voir l'étude de cas</span>
          <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;