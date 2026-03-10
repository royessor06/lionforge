"use client";

import MotionWrapper from "@/app/components/MotionWrapper";
import Image from "next/image";
import Link from "next/link";
import { 
  Rocket, 
  Lightning, 
  Star, 
  Users, 
  BookOpen, 
  Target, 
  Diamond,
  Crown,
  Code,
  Cpu
} from "@phosphor-icons/react";

const team = [
  { 
    name: "Roy Savy", 
    role: "Fondateur & CEO", 
    icon: <Crown size={48} weight="duotone" className="text-lion-gold" />,
    bio: "------"
  },
  { 
    name: "Roy Savy", 
    role: "CTO", 
    icon: <Cpu size={48} weight="duotone" className="text-lion-gold" />,
    bio: "------"
  },
  { 
    name: "Roy Savy", 
    role: "Lead Developer", 
    icon: <Code size={48} weight="duotone" className="text-lion-gold" />,
    bio: "------" 
  },
];

const stats = [
  { value: "50+", label: "Projets livrés", icon: <Rocket size={36} weight="duotone" className="text-lion-gold" /> },
  { value: "4", label: "Années d'expertise", icon: <Lightning size={36} weight="duotone" className="text-lion-gold" /> },
  { value: "100%", label: "Satisfaction client", icon: <Star size={36} weight="duotone" className="text-lion-gold" /> },
  { value: "10+", label: "Experts", icon: <Users size={36} weight="duotone" className="text-lion-gold" /> },
];

export default function About() {
  return (
    <div className="min-h-screen bg-lion-dark text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        <MotionWrapper direction="scale" duration={0.8}>
          <h1 className="text-5xl md:text-6xl font-bold text-gradient text-center mb-6">
            À propos de LionForge
          </h1>
        </MotionWrapper>

        <MotionWrapper direction="up" delay={0.2} distance={20}>
          <p className="text-xl text-lion-muted text-center max-w-3xl mx-auto mb-16">
            Découvrez l'histoire, la vision et les valeurs qui animent notre agence au quotidien.
          </p>
        </MotionWrapper>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <MotionWrapper key={i} delay={0.3 + i * 0.1} direction="zoom-out">
              <div className="text-center">
                <div className="mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-lion-gold">{stat.value}</div>
                <div className="text-lion-muted text-sm">{stat.label}</div>
              </div>
            </MotionWrapper>
          ))}
        </div>

        {/* Histoire */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <MotionWrapper direction="scale">
            <div className="bg-lion-surface border border-lion-gold border-opacity-20 rounded-2xl p-8 h-full">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen size={28} weight="duotone" className="text-lion-gold" />
                <h2 className="text-2xl font-bold text-lion-gold">Notre histoire</h2>
              </div>
              <p className="text-lion-light leading-relaxed">
                Fondée en 2020, <span className="text-lion-gold">LionForge</span> est née de la passion de deux ingénieurs pour le code et l'innovation.
                Depuis, nous avons accompagné plus de 50 startups et entreprises dans leur transformation numérique,
                en apportant des solutions sur mesure, robustes et élégantes.
              </p>
            </div>
          </MotionWrapper>

          <MotionWrapper direction="scale" delay={0.2}>
            <div className="bg-lion-surface border border-lion-gold border-opacity-20 rounded-2xl p-8 h-full">
              <div className="flex items-center gap-2 mb-4">
                <Target size={28} weight="duotone" className="text-lion-gold" />
                <h2 className="text-2xl font-bold text-lion-gold">Notre vision</h2>
              </div>
              <p className="text-lion-light leading-relaxed">
                Devenir le partenaire technologique de référence pour les entreprises qui veulent allier performance
                et design dans leurs outils digitaux, en France et à l'international.
              </p>
            </div>
          </MotionWrapper>
        </div>

        {/* Mission et valeurs */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <MotionWrapper direction="slide-up">
            <div className="bg-lion-surface border border-lion-gold border-opacity-20 rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-4">
                <Rocket size={28} weight="duotone" className="text-lion-gold" />
                <h2 className="text-2xl font-bold text-lion-gold">Notre mission</h2>
              </div>
              <p className="text-lion-light leading-relaxed">
                Fournir des solutions logicielles robustes, évolutives et élégantes, en plaçant l'humain et la qualité
                au cœur de nos processus. Nous croyons en une technologie au service de la croissance.
              </p>
            </div>
          </MotionWrapper>

          <MotionWrapper direction="slide-up" delay={0.2}>
            <div className="bg-lion-surface border border-lion-gold border-opacity-20 rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-4">
                <Diamond size={28} weight="duotone" className="text-lion-gold" />
                <h2 className="text-2xl font-bold text-lion-gold">Nos valeurs</h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-lion-light">
                  <span className="w-2 h-2 bg-lion-gold rounded-full"></span>
                  Excellence technique
                </li>
                <li className="flex items-center gap-2 text-lion-light">
                  <span className="w-2 h-2 bg-lion-gold rounded-full"></span>
                  Transparence
                </li>
                <li className="flex items-center gap-2 text-lion-light">
                  <span className="w-2 h-2 bg-lion-gold rounded-full"></span>
                  Innovation continue
                </li>
                <li className="flex items-center gap-2 text-lion-light">
                  <span className="w-2 h-2 bg-lion-gold rounded-full"></span>
                  Respect des délais
                </li>
              </ul>
            </div>
          </MotionWrapper>
        </div>

        {/* Équipe */}
        <MotionWrapper direction="fade">
          <h2 className="text-3xl font-bold text-gradient text-center mb-12 flex items-center justify-center gap-2">
            <Users size={32} weight="duotone" className="text-lion-gold" />
            Notre équipe
          </h2>
        </MotionWrapper>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {team.map((member, i) => (
            <MotionWrapper key={i} delay={0.5 + i * 0.1} direction="slide-up">
              <div className="bg-lion-surface border border-lion-gold border-opacity-20 rounded-2xl p-6 text-center group hover:border-lion-gold hover:border-opacity-60 transition-all duration-300">
                <div className="w-32 h-32 mx-auto mb-4 bg-lion-gold bg-opacity-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  {member.icon}
                </div>
                <h3 className="text-xl font-bold text-lion-gold mb-1">{member.name}</h3>
                <p className="text-lion-electric text-sm mb-3">{member.role}</p>
                <p className="text-lion-light text-sm opacity-80">{member.bio}</p>
              </div>
            </MotionWrapper>
          ))}
        </div>

        {/* CTA */}
        <MotionWrapper direction="scale">
          <div className="text-center p-12 bg-lion-surface border border-lion-gold border-opacity-20 rounded-3xl">
            <h2 className="text-3xl font-bold text-gradient mb-4">Rejoignez l'aventure</h2>
            <p className="text-lion-muted mb-6 max-w-2xl mx-auto">
              Vous aussi, faites partie de notre histoire. Nous recrutons des talents passionnés.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-lion-gold text-lion-dark px-8 py-3 rounded-xl font-semibold 
                       hover:bg-opacity-90 transition-all duration-300 
                       shadow-lg shadow-lion-gold/20"
            >
              Nous contacter
            </Link>
          </div>
        </MotionWrapper>
      </div>
    </div>
  );
}