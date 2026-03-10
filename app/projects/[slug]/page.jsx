"use client";

import Image from "next/image";
import Link from "next/link";
import MotionWrapper from "@/app/components/MotionWrapper";
import { ArrowLeft } from "@phosphor-icons/react";

// Simuler une base de données de projets
const projectsData = {
  "ecommerce-luxe": {
    title: "E‑commerce Luxe",
    category: "Web",
    description: "Plateforme e-commerce haut de gamme avec une expérience utilisateur premium et des performances optimisées.",
    longDescription: "Développement d'une plateforme e-commerce complète pour une marque de luxe. Interface élégante, paiement sécurisé, gestion de stock en temps réel, et dashboard administrateur personnalisé.",
    image: null,
    stack: ["Next.js", "Shopify", "TailwindCSS", "Stripe"],
    features: [
      "Catalogue produits dynamique",
      "Panier d'achat en temps réel",
      "Paiement sécurisé",
      "Dashboard admin",
      "SEO optimisé",
      "Responsive design"
    ],
    year: "2025",
    client: "Luxe Brand",
  },
  "app-fitness": {
    title: "App Fitness",
    category: "Mobile",
    description: "Application de suivi fitness avec coaching personnalisé et programmes d'entraînement adaptatifs.",
    longDescription: "Application mobile cross-platform pour le suivi fitness. Intégration avec Apple Health/Google Fit, programmes personnalisés, suivi des performances, et communauté sociale.",
    image: null,
    stack: ["React Native", "Node.js", "MongoDB", "Firebase"],
    features: [
      "Suivi des activités",
      "Programmes personnalisés",
      "Intégration santé",
      "Réseau social",
      "Notifications push",
      "Mode hors-ligne"
    ],
    year: "2025",
    client: "FitTech Startup",
  },
  "erp-industriel": {
    title: "ERP Industriel",
    category: "Sur mesure",
    description: "Système de gestion d'entreprise complet pour l'industrie manufacturière.",
    longDescription: "Solution ERP sur mesure pour une entreprise industrielle. Gestion des stocks, production, RH, comptabilité, et reporting avancé.",
    image: null,
    stack: ["Django", "PostgreSQL", "React", "Docker"],
    features: [
      "Gestion de production",
      "Suivi des stocks",
      "Module RH",
      "Comptabilité intégrée",
      "Reporting avancé",
      "Multi-sites"
    ],
    year: "2024",
    client: "Industrie Métallurgique",
  },
};

export default function ProjectDetail({ params }) {
  const project = projectsData[params.slug];

  if (!project) {
    return (
      <div className="min-h-screen bg-lion-dark text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-lion-gold mb-4">Projet non trouvé</h1>
          <Link href="/projects" className="text-lion-electric hover:text-lion-gold transition">
            Retour aux projets
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-lion-dark text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Bouton retour */}
        <MotionWrapper direction="left" distance={20} duration={0.5}>
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-lion-muted hover:text-lion-gold transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span>Retour aux projets</span>
          </Link>
        </MotionWrapper>

        {/* En-tête */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <MotionWrapper direction="scale" duration={0.8}>
            <div className="aspect-video bg-lion-surface rounded-2xl border border-lion-gold border-opacity-20 flex items-center justify-center">
              {project.image ? (
                <Image src={project.image} alt={project.title} fill className="object-cover rounded-2xl" />
              ) : (
                <span className="text-8xl text-lion-gold text-opacity-50">
                  {project.category === "Web" ? "🌐" : project.category === "Mobile" ? "📱" : "⚙️"}
                </span>
              )}
            </div>
          </MotionWrapper>

          <MotionWrapper direction="right" distance={30} delay={0.2}>
            <div className="space-y-6">
              <div>
                <span className="inline-block px-4 py-2 bg-lion-gold text-lion-dark rounded-full text-sm font-bold mb-4">
                  {project.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
                  {project.title}
                </h1>
              </div>
              
              <p className="text-xl text-lion-light leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex gap-6 pt-4">
                <div>
                  <p className="text-lion-muted text-sm">Client</p>
                  <p className="text-lion-gold font-semibold">{project.client}</p>
                </div>
                <div>
                  <p className="text-lion-muted text-sm">Année</p>
                  <p className="text-lion-gold font-semibold">{project.year}</p>
                </div>
              </div>
            </div>
          </MotionWrapper>
        </div>

        {/* Description longue */}
        <MotionWrapper delay={0.3} direction="slide-up">
          <div className="bg-lion-surface border border-lion-gold border-opacity-20 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-lion-gold mb-4">À propos du projet</h2>
            <p className="text-lion-light leading-relaxed">
              {project.longDescription}
            </p>
          </div>
        </MotionWrapper>

        {/* Stack et features */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <MotionWrapper delay={0.4} direction="slide-up">
            <div className="bg-lion-surface border border-lion-gold border-opacity-20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-lion-gold mb-4">Technologies</h2>
              <div className="flex flex-wrap gap-3">
                {project.stack.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 bg-lion-gold bg-opacity-10 text-lion-gold rounded-full text-sm border border-lion-gold border-opacity-30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.5} direction="slide-up">
            <div className="bg-lion-surface border border-lion-gold border-opacity-20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-lion-gold mb-4">Fonctionnalités</h2>
              <ul className="space-y-2">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-lion-light">
                    <span className="text-lion-gold">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </MotionWrapper>
        </div>

        {/* CTA */}
        <MotionWrapper delay={0.6} direction="fade">
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-block bg-lion-gold text-lion-dark px-8 py-4 rounded-xl font-semibold 
                       hover:bg-opacity-90 transition-all duration-300 
                       shadow-lg shadow-lion-gold shadow-opacity-20"
            >
              Discuter d'un projet similaire
            </Link>
          </div>
        </MotionWrapper>
      </div>
    </div>
  );
}