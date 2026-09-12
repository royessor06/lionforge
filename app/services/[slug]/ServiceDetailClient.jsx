"use client";

import MotionWrapper from "@/app/components/MotionWrapper";
import { services } from "@/app/data/content";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

export default function ServiceDetailClient({ slug }) {
  const service = services.find((item) => item.slug === slug);

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
            <span className="text-6xl">{service.visual}</span>
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
