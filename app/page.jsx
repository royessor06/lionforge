"use client";

import Hero from "@/app/components/Hero";
import ServiceCard from "@/app/components/ServiceCard";
import ProjectCard from "@/app/components/ProjectCard";
import MotionWrapper from "@/app/components/MotionWrapper";
import { 
  Rocket, 
  Lightning, 
  Handshake,
  Code,
  DeviceMobile,
  Gear,
  Wrench,
  Star,
  Target,
  ArrowRight
} from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";

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

const projects = [
  { title: "E‑commerce Luxe", category: "Web", image: null, slug: "ecommerce-luxe", stack: "Next.js, Shopify" },
  { title: "App Fitness", category: "Mobile", image: null, slug: "app-fitness", stack: "React Native" },
  { title: "ERP Industriel", category: "Sur mesure", image: null, slug: "erp-industriel", stack: "Django, PostgreSQL" },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Présentation rapide */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-lion-dark via-lion-dark to-black overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lion-gold to-transparent opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-lion-gold opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-lion-electric opacity-5 rounded-full blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <MotionWrapper direction="scale" duration={0.8}>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Qui sommes‑nous ?
            </h2>
          </MotionWrapper>
          
          <MotionWrapper direction="up" delay={0.2} distance={30} duration={0.7}>
            <p className="text-xl md:text-2xl text-lion-light leading-relaxed">
              <span className="text-lion-gold font-semibold">LionForge</span> est une agence de développement technologique basée au Bénin.
              Nous accompagnons les entreprises dans leur transformation digitale
              avec des solutions robustes, évolutives et élégantes.
            </p>
          </MotionWrapper>
          
          {/* Statistiques - AVEC ICÔNES PHOSPHOR */}
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 mt-12">
            {[
              { 
                value: "50+", 
                label: "Projets livrés", 
                icon: <Lightning size={36} weight="duotone" className="text-lion-gold group-hover:text-lion-electric transition-colors" />
              },
              { 
                value: "4", 
                label: "Ans d'expertise", 
                icon: <Star size={36} weight="duotone" className="text-lion-gold group-hover:text-lion-electric transition-colors" />
              },
              { 
                value: "100%", 
                label: "Satisfaction", 
                icon: <Target size={36} weight="duotone" className="text-lion-gold group-hover:text-lion-electric transition-colors" />
              },
            ].map((stat, i) => (
              <MotionWrapper 
                key={i} 
                delay={0.3 + i * 0.1}
                direction="zoom-out"
                duration={0.6}
              >
                <div className="text-center group">
                  <div className="mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-lion-gold group-hover:text-lion-electric transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-lion-muted text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-black to-lion-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <MotionWrapper direction="fade" duration={0.8}>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient text-center mb-4">
              Nos services
            </h2>
            <p className="text-lion-muted text-center mb-12 max-w-2xl mx-auto">
              Des solutions complètes pour tous vos besoins digitaux
            </p>
          </MotionWrapper>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <MotionWrapper 
                key={service.slug} 
                delay={index * 0.1}
                direction="slide-up"
                distance={30}
                duration={0.5}
                className="h-full"
              >
                <ServiceCard {...service} />
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Projets récents */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-lion-dark to-black overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-lion-gold opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-lion-electric opacity-5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <MotionWrapper direction="fade" duration={0.9}>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient text-center mb-4">
              Projets récents
            </h2>
            <p className="text-lion-muted text-center mb-12 max-w-2xl mx-auto">
              Découvrez quelques-unes de nos réalisations
            </p>
          </MotionWrapper>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <MotionWrapper 
                key={project.slug} 
                delay={i * 0.15}
                direction="slide-up"
                distance={30}
                duration={0.6}
              >
                <ProjectCard {...project} />
              </MotionWrapper>
            ))}
          </div>
          
          <MotionWrapper delay={0.4} direction="fade">
            <div className="text-center mt-12">
              <Link 
                href="/projects" 
                className="group inline-flex items-center gap-2 text-lion-electric hover:text-lion-gold transition-colors text-lg"
              >
                <span>Voir tous nos projets</span>
                <ArrowRight 
                  size={20} 
                  className="group-hover:translate-x-2 transition-transform" 
                  weight="bold"
                />
              </Link>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-black to-lion-dark overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lion-gold opacity-5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <MotionWrapper direction="scale" duration={0.8}>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient text-center mb-4">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-lion-muted text-center mb-12">
              Ce qui fait la différence chez LionForge
            </p>
          </MotionWrapper>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Rocket size={40} weight="duotone" className="text-lion-gold" />,
                title: "Expertise",
                description: "Une équipe de développeurs expérimentés, passionnés par les technologies modernes.",
                delay: 0.1,
              },
              {
                icon: <Lightning size={40} weight="duotone" className="text-lion-gold" />,
                title: "Agilité",
                description: "Méthodes itératives pour livrer rapidement et s'adapter à vos besoins.",
                delay: 0.2,
              },
              {
                icon: <Handshake size={40} weight="duotone" className="text-lion-gold" />,
                title: "Accompagnement",
                description: "Suivi et maintenance après livraison, nous restons à vos côtés.",
                delay: 0.3,
              },
            ].map((item, i) => (
              <MotionWrapper 
                key={i} 
                delay={item.delay}
                direction="slide-up"
                distance={20}
                duration={0.6}
              >
                <div className="bg-lion-surface border border-lion-gold border-opacity-20 rounded-xl p-6 hover:border-lion-gold hover:border-opacity-60 hover:shadow-lg hover:shadow-lion-gold/20 transition-all duration-300 h-full">
                  <div className="mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-lion-gold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-lion-light opacity-70">
                    {item.description}
                  </p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-lion-dark via-lion-dark to-lion-electric opacity-20"></div>
        
        {/* Particules */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-lion-gold opacity-30 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <MotionWrapper direction="scale" duration={0.8}>
            <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Prêt à démarrer ?
            </h2>
            <p className="text-xl text-lion-light mb-10 leading-relaxed">
              Discutons de vos idées et construisons ensemble la solution qui répondra à vos enjeux.
            </p>
          </MotionWrapper>
          
          <MotionWrapper delay={0.2} direction="fade">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-lion-gold text-lion-dark px-8 py-3 rounded-lg font-semibold 
                         hover:bg-opacity-90 transition-all duration-300 
                         shadow-lg shadow-lion-gold/20"
              >
                Contactez‑nous
              </Link>
              
              <Link
                href="/services"
                className="border border-lion-gold text-lion-gold px-8 py-3 rounded-lg font-semibold 
                         hover:bg-lion-gold hover:bg-opacity-10 transition-all duration-300"
              >
                Découvrir nos services
              </Link>
            </div>
          </MotionWrapper>
        </div>
      </section>
    </>
  );
}