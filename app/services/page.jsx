"use client";

import Link from "next/link";
import ServiceCard from "@/app/components/ServiceCard";
import { services } from "@/app/data/content";
import { Code2, Smartphone, Cpu, Workflow, Sparkles, ArrowRight } from "lucide-react";

export default function ServicesPage() {
  const serviceIcons = {
    "web-development": <Code2 size={28} className="text-[#FFD700]" />,
    "mobile-apps": <Smartphone size={28} className="text-[#FFD700]" />,
    "custom-solutions": <Cpu size={28} className="text-[#FFD700]" />,
    "maintenance": <Workflow size={28} className="text-[#FFD700]" />,
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F3EE] pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-10 [background-image:linear-gradient(rgba(255,215,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.1)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="absolute top-24 left-1/3 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-[#101114] border border-[#FFD700]/30 text-xs uppercase tracking-[0.25em] font-semibold text-[#FFD700] inline-flex items-center gap-2 mb-4">
            <Sparkles size={14} className="text-[#FFD700]" />
            Ce Que Nous Forgeons
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white uppercase max-w-4xl mx-auto mb-6 leading-tight">
            Des idées ambitieuses.
            <span className="block gradient-text mt-1">Des solutions concrètes.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#8892B0] max-w-2xl mx-auto font-light leading-relaxed">
            Nous transformons vos objectifs opérationnels en logiciels robustes, élégants et évolutifs grâce à une maîtrise complète de la chaîne technique.
          </p>
        </div>

        {/* 4 Pillars of Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.title}
              description={service.description}
              slug={service.slug}
              icon={serviceIcons[service.slug] || <Code2 size={28} className="text-[#FFD700]" />}
              features={service.features}
            />
          ))}
        </div>

        {/* Call to Action Banner */}
        <div className="forge-glass-card rounded-3xl p-10 sm:p-14 border border-[#FFD700]/30 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF4500]/5 rounded-full blur-2xl pointer-events-none" />
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white uppercase mb-4">
            Vous avez un cahier des charges spécifique ?
          </h2>
          <p className="text-sm sm:text-base text-[#8892B0] max-w-xl mx-auto mb-8 font-light">
            Chaque défi est unique. Discutez directement avec un architecte LionForge pour évaluer la faisabilité technique et le budget optimal.
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
