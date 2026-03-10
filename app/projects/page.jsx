"use client";

import { useState } from "react";
import ProjectCard from "@/app/components/ProjectCard";
import MotionWrapper from "@/app/components/MotionWrapper";
import ProjectCarousel from "@/app/components/ProjectCarousel";
import { Funnel, GridFour, SquaresFour } from "@phosphor-icons/react";

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
        
        <MotionWrapper direction="scale" duration={0.8}>
          <h1 className="text-5xl md:text-6xl font-bold text-gradient text-center mb-6">
            Nos Projets
          </h1>
        </MotionWrapper>
        
        <MotionWrapper direction="up" delay={0.2} distance={20}>
          <p className="text-xl text-lion-muted text-center max-w-3xl mx-auto mb-12">
            Découvrez quelques réalisations qui illustrent notre savoir-faire.
          </p>
        </MotionWrapper>

        {/* Carousel */}
        {/* <MotionWrapper delay={0.3}>
          <ProjectCarousel />
        </MotionWrapper> */}

        {/* Filtres avec icône */}
        <MotionWrapper delay={0.4} direction="fade">
          <div className="flex flex-col items-center gap-4 my-12">
            <div className="flex items-center gap-2 text-lion-muted mb-2">
              <Funnel size={20} weight="duotone" className="text-lion-gold" />
              <span className="text-sm">Filtrer par catégorie</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((cat, index) => (
                <MotionWrapper 
                  key={cat} 
                  delay={0.5 + index * 0.1}
                  direction="zoom-out"
                  duration={0.4}
                >
                  <button
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-6 py-2 rounded-full border transition-all duration-300 flex items-center gap-2 ${
                      selectedCategory === cat
                        ? "bg-lion-gold text-lion-dark border-lion-gold"
                        : "border-lion-gold border-opacity-30 text-lion-light hover:border-lion-gold hover:bg-lion-gold hover:bg-opacity-10"
                    }`}
                  >
                    {cat === "Tous" && <GridFour size={16} weight={selectedCategory === cat ? "fill" : "duotone"} />}
                    {cat === "Web" && <span>🌐</span>}
                    {cat === "Mobile" && <span>📱</span>}
                    {cat === "Sur mesure" && <SquaresFour size={16} weight={selectedCategory === cat ? "fill" : "duotone"} />}
                    {cat}
                  </button>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </MotionWrapper>

        {/* Grille des projets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <MotionWrapper 
              key={project.slug} 
              delay={0.6 + index * 0.1}
              direction="slide-up"
              distance={30}
              duration={0.6}
            >
              <ProjectCard {...project} />
            </MotionWrapper>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <MotionWrapper delay={0.8}>
            <div className="text-center py-12">
              <p className="text-lion-muted text-xl">Aucun projet dans cette catégorie pour le moment.</p>
            </div>
          </MotionWrapper>
        )}
      </div>
    </div>
  );
}