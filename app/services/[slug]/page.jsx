"use client";

import MotionWrapper from "@/app/components/MotionWrapper";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

export async function generateStaticParams() {
  const services = [
    { slug: "web-development" },
    { slug: "mobile-apps" },
    { slug: "custom-solutions" },
    { slug: "maintenance" },
  ];
  return services.map((service) => ({ slug: service.slug }));
}

const serviceData = {
  "web-development": {
    title: "Développement Web",
    description: "Nous créons des sites web et applications web sur mesure, performants et sécurisés.",
    longDescription: "De la simple vitrine à la plateforme SaaS complexe, nous développons des solutions web robustes et évolutives qui répondent parfaitement à vos besoins métier.",
    features: [
      "Sites vitrines responsive",
      "Plateformes e‑commerce",
      "Applications SaaS",
      "Progressive Web Apps (PWA)",
      "APIs RESTful",
      "CMS sur mesure"
    ],
    technologies: ["React", "Next.js", "Node.js", "Laravel", "Symfony", "TailwindCSS"],
    icon: "🌐",
  },
  "mobile-apps": {
    title: "Applications Mobiles",
    description: "Développement d'applications mobiles natives et cross‑platform pour iOS et Android.",
    longDescription: "Nous concevons des applications mobiles intuitives et performantes, que ce soit en natif pour une expérience optimale ou en cross-platform pour maximiser votre reach.",
    features: [
      "Applications iOS (Swift)",
      "Applications Android (Kotlin)",
      "Cross‑platform (React Native, Flutter)",
      "Intégration API",
      "Notifications push",
      "Mode hors-ligne"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    icon: "📱",
  },
  "custom-solutions": {
    title: "Solutions Sur Mesure",
    description: "Des logiciels adaptés à vos processus métier pour gagner en efficacité.",
    longDescription: "Nous développons des solutions logicielles entièrement personnalisées qui s'adaptent parfaitement à vos processus d'entreprise et vous permettent de gagner en productivité.",
    features: [
      "Systèmes de gestion (ERP, CRM)",
      "Automatisation de tâches",
      "Intégrations API",
      "Portails métier",
      "Tableaux de bord",
      "Reporting avancé"
    ],
    technologies: ["Node.js", "Python", "Django", "PostgreSQL", "MongoDB", "Docker"],
    icon: "⚙️",
  },
  "maintenance": {
    title: "Maintenance & Support",
    description: "Assurez la pérennité de vos applications avec nos contrats de maintenance.",
    longDescription: "Nous vous accompagnons dans la durée avec des contrats de maintenance sur mesure pour garantir la sécurité, les performances et l'évolution de vos applications.",
    features: [
      "Optimisation des performances",
      "Audit de sécurité",
      "Mises à jour régulières",
      "Support technique",
      "Sauvegarde des données",
      "Veille technologique"
    ],
    technologies: ["Monitoring", "Sécurité", "Refactoring", "CI/CD", "Cloud"],
    icon: "🔧",
  },
};

export default function ServiceDetail({ params }) {
  const service = serviceData[params.slug];
  
  if (!service) {
    return (
      <div className="min-h-screen bg-lion-dark text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-lion-gold mb-4">Service non trouvé</h1>
          <Link href="/services" className="text-lion-electric hover:text-lion-gold transition">
            Retour aux services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-lion-dark text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Bouton retour */}
        <MotionWrapper direction="left" distance={20} duration={0.5}>
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-lion-muted hover:text-lion-gold transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span>Retour aux services</span>
          </Link>
        </MotionWrapper>

        {/* En-tête */}
        <MotionWrapper direction="scale" duration={0.8}>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl">{service.icon}</span>
            <h1 className="text-5xl font-bold text-gradient">{service.title}</h1>
          </div>
        </MotionWrapper>
        
        <MotionWrapper delay={0.2} direction="up">
          <p className="text-xl text-lion-light mb-6">{service.description}</p>
          <p className="text-lion-muted mb-10">{service.longDescription}</p>
        </MotionWrapper>

        {/* Features */}
        <MotionWrapper delay={0.3} direction="slide-up">
          <div className="bg-lion-surface border border-lion-gold border-opacity-20 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-lion-gold mb-6">Caractéristiques</h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {service.features.map((feat, i) => (
                <MotionWrapper key={i} delay={0.4 + i * 0.05} direction="fade">
                  <li className="flex items-center gap-3 text-lion-light">
                    <span className="w-2 h-2 bg-lion-gold rounded-full"></span>
                    {feat}
                  </li>
                </MotionWrapper>
              ))}
            </ul>
          </div>
        </MotionWrapper>

        {/* Technologies */}
        <MotionWrapper delay={0.5} direction="slide-up">
          <div className="bg-lion-surface border border-lion-gold border-opacity-20 rounded-2xl p-8 mb-10">
            <h2 className="text-2xl font-bold text-lion-gold mb-6">Technologies utilisées</h2>
            <div className="flex flex-wrap gap-3">
              {service.technologies.map((tech, i) => (
                <MotionWrapper key={i} delay={0.6 + i * 0.05} direction="zoom-out">
                  <span className="px-4 py-2 bg-lion-gold bg-opacity-10 text-lion-gold rounded-full text-sm border border-lion-gold border-opacity-30">
                    {tech}
                  </span>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </MotionWrapper>

        {/* CTA */}
        <MotionWrapper delay={0.7} direction="fade">
          <div className="text-center">
            <Link 
              href="/contact"
              className="inline-block bg-lion-gold text-lion-dark px-8 py-4 rounded-xl font-semibold 
                       hover:bg-opacity-90 transition-all duration-300 
                       shadow-lg shadow-lion-gold shadow-opacity-20"
            >
              Discuter de ce service
            </Link>
          </div>
        </MotionWrapper>
      </div>
    </div>
  );
}