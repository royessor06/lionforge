"use client";

import { useState } from "react";
import ProjectCard from "@/app/components/ProjectCard";
import MotionWrapper from "@/app/components/MotionWrapper";
import ProjectCarousel from "@/app/components/ProjectCarousel"; // 👈 Import ajouté

const projects = [
  { 
    title: "E‑commerce Luxe", 
    category: "Web", 
    image: null, 
    slug: "ecommerce-luxe", 
    stack: "Next.js, Shopify" 
  },
  { 
    title: "App Fitness", 
    category: "Mobile", 
    image: null, 
    slug: "app-fitness", 
    stack: "React Native" 
  },
  { 
    title: "ERP Industriel", 
    category: "Sur mesure", 
    image: null, 
    slug: "erp-industriel", 
    stack: "Django, PostgreSQL" 
  },
  { 
    title: "Site Vitrine Design", 
    category: "Web", 
    image: null, 
    slug: "site-vitrine-design", 
    stack: "Vue.js" 
  },
  { 
    title: "Application de Livraison", 
    category: "Mobile", 
    image: null, 
    slug: "app-livraison", 
    stack: "Flutter" 
  },
  { 
    title: "CRM Sur Mesure", 
    category: "Sur mesure", 
    image: null, 
    slug: "crm-sur-mesure", 
    stack: "Laravel" 
  },
];

const categories = ["Tous", "Web", "Mobile", "Sur mesure"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredProjects = selectedCategory === "Tous"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-lion-dark text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête avec animation */}
        <MotionWrapper direction="flip" duration={0.9}>
          <h1 className="text-5xl md:text-6xl font-bold text-lion-gold text-center mb-6">
            Nos Projets
          </h1>
        </MotionWrapper>
        
        <MotionWrapper direction="up" delay={0.2} distance={20}>
          <p className="text-xl text-lion-light text-center max-w-3xl mx-auto mb-12">
            Découvrez quelques réalisations qui illustrent notre savoir-faire.
          </p>
        </MotionWrapper>

        {/* Carousel - NOUVEAU ! */}
        <MotionWrapper delay={0.3}>
          <ProjectCarousel />
        </MotionWrapper>

        {/* Filtres avec animations */}
        <MotionWrapper delay={0.4} direction="fade">
          <div className="flex flex-wrap justify-center gap-4 my-12">
            {categories.map((cat, index) => (
              <MotionWrapper 
                key={cat} 
                delay={0.5 + index * 0.1}
                direction="zoom-out"
                duration={0.4}
              >
                <button
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2 rounded-full border transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === cat
                      ? "bg-lion-gold text-lion-dark border-lion-gold shadow-lg shadow-lion-gold/30"
                      : "border-lion-gold/30 text-lion-light hover:border-lion-gold hover:bg-lion-gold/5"
                  }`}
                >
                  {cat}
                </button>
              </MotionWrapper>
            ))}
          </div>
        </MotionWrapper>

        {/* Grille des projets avec animations en cascade */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <MotionWrapper 
              key={project.slug} 
              delay={0.6 + index * 0.1}
              direction="rotate"
              distance={15}
              duration={0.7}
            >
              <ProjectCard {...project} />
            </MotionWrapper>
          ))}
        </div>

        {/* Message si aucun projet */}
        {filteredProjects.length === 0 && (
          <MotionWrapper delay={0.9}>
            <div className="text-center py-12">
              <p className="text-lion-light text-xl">Aucun projet dans cette catégorie pour le moment.</p>
            </div>
          </MotionWrapper>
        )}
      </div>
    </div>
  );
}