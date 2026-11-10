"use client";

import { useState } from "react";
import ProjectCard from "@/app/components/ProjectCard";
import { projects } from "@/app/data/content";
import { Activity, Layers, ArrowRight } from "lucide-react";
import Link from "next/link";

const categories = ["Tous", "Web", "Mobile", "Sur mesure"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredProjects = selectedCategory === "Tous"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F3EE] pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-10 [background-image:linear-gradient(rgba(255,215,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.1)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="absolute top-20 right-1/3 w-96 h-96 bg-[#FF4500]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="px-3.5 py-1.5 rounded-full bg-[#101114] border border-[#FFD700]/30 text-xs uppercase tracking-[0.25em] font-semibold text-[#FFD700] inline-flex items-center gap-2 mb-4">
            <Activity size={14} className="text-[#FFD700]" />
            Selected Work & Architectures
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white uppercase max-w-4xl mx-auto mb-6 leading-tight">
            Réalisations & <span className="gradient-text">Architectures</span>
          </h1>
          <p className="text-base sm:text-lg text-[#8892B0] max-w-2xl mx-auto font-mono">
            Nos prochaines réalisations prennent forme ici.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#FFD700] text-[#050505] shadow-lg shadow-[#FFD700]/20"
                  : "bg-[#101114] border border-white/10 text-[#8892B0] hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              category={project.category}
              image={project.image}
              slug={project.slug}
              stack={project.stack}
              description={project.description}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="forge-glass-card rounded-3xl p-10 sm:p-14 border border-[#FFD700]/30 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD700]/5 rounded-full blur-2xl pointer-events-none" />
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white uppercase mb-4">
            Forgez votre propre projet avec nous
          </h2>
          <p className="text-sm sm:text-base text-[#8892B0] max-w-xl mx-auto mb-8 font-light">
            De la définition d'architecture au déploiement en production, nos ingénieurs concrétisent vos ambitions.
          </p>
          <Link
            href="/contact"
            className="forge-btn-primary px-8 py-4 rounded-xl text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2"
          >
            <span>Parlons de votre projet</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
