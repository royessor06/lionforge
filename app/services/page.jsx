"use client";

import ServiceCard from "@/app/components/ServiceCard";
import MotionWrapper from "@/app/components/MotionWrapper";
import Link from "next/link";
import { 
  Code, 
  DeviceMobile, 
  Gear, 
  Wrench,
  ChatText
} from "@phosphor-icons/react";

const services = [
  {
    title: "Développement Web",
    description: "Sites vitrines, plateformes e‑commerce, applications SaaS.",
    slug: "web-development",
    icon: <Code size={32} weight="duotone" className="text-lion-gold" />,
  },
  {
    title: "Applications Mobiles",
    description: "iOS, Android, cross‑platform (React Native, Flutter).",
    slug: "mobile-apps",
    icon: <DeviceMobile size={32} weight="duotone" className="text-lion-gold" />,
  },
  {
    title: "Solutions Sur Mesure",
    description: "Systèmes métiers, automatisation, intégrations API.",
    slug: "custom-solutions",
    icon: <Gear size={32} weight="duotone" className="text-lion-gold" />,
  },
  {
    title: "Maintenance & Support",
    description: "Optimisation, sécurité, mises à jour continues.",
    slug: "maintenance",
    icon: <Wrench size={32} weight="duotone" className="text-lion-gold" />,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-lion-dark text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        <MotionWrapper direction="scale" duration={0.8}>
          <h1 className="text-5xl md:text-6xl font-bold text-gradient text-center mb-6">
            Nos Services
          </h1>
        </MotionWrapper>
        
        <MotionWrapper direction="up" delay={0.2} distance={20}>
          <p className="text-xl text-lion-muted text-center max-w-3xl mx-auto mb-12">
            Découvrez l'ensemble de nos prestations pour vous accompagner dans vos projets digitaux.
          </p>
        </MotionWrapper>
        
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <MotionWrapper 
              key={service.slug} 
              delay={0.3 + index * 0.1}
              direction="slide-up"
              distance={30}
              duration={0.6}
            >
              <ServiceCard {...service} />
            </MotionWrapper>
          ))}
        </div>
        
        <MotionWrapper delay={0.7} direction="fade">
          <div className="mt-20 text-center p-10 bg-lion-surface border border-lion-gold border-opacity-20 rounded-3xl hover:border-lion-gold hover:border-opacity-60 transition-all duration-300">
            <h2 className="text-3xl font-bold text-gradient mb-4 flex items-center justify-center gap-2">
              <ChatText size={32} weight="duotone" className="text-lion-gold" />
              Besoin d'un service personnalisé ?
            </h2>
            <p className="text-lion-muted mb-6 max-w-2xl mx-auto">
              Chaque projet est unique. Contactez-nous pour discuter de vos besoins spécifiques.
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-lion-gold text-lion-dark px-8 py-3 rounded-xl font-semibold 
                       hover:bg-opacity-90 transition-all duration-300 
                       shadow-lg shadow-lion-gold/20 hover:shadow-xl hover:shadow-lion-gold/30"
            >
              Discutons de votre projet
            </Link>
          </div>
        </MotionWrapper>
      </div>
    </div>
  );
}