"use client";

import Link from "next/link";
import { 
  Sparkles, 
  Flame, 
  Search, 
  PenTool, 
  Code, 
  TrendingUp, 
  ShieldCheck, 
  Layers, 
  ArrowRight,
  Target,
  Compass
} from "lucide-react";

export default function About() {
  const approachSteps = [
    {
      num: "01",
      title: "Comprendre",
      icon: <Search size={24} className="text-[#FFD700]" />,
      desc: "Immersion dans vos processus métier. Nous décortiquons vos enjeux, identifions les frictions et cadrons les spécifications techniques clés.",
    },
    {
      num: "02",
      title: "Concevoir",
      icon: <PenTool size={24} className="text-[#FF4500]" />,
      desc: "Architecture logicielle pérenne et design d'interaction soigné. Chaque écran et chaque flux de données sont pensés pour la clarté et la conversion.",
    },
    {
      num: "03",
      title: "Développer",
      icon: <Code size={24} className="text-[#8892B0]" />,
      desc: "Ingénierie de précision. Code moderne, typé, modulaire et hautement performant, conçu selon les standards de l'artisanat numérique.",
    },
    {
      num: "04",
      title: "Faire évoluer",
      icon: <TrendingUp size={24} className="text-[#FFD700]" />,
      desc: "Déploiement supervisé, observabilité en temps réel et accompagnement proactif pour maintenir vos solutions toujours en avance.",
    },
  ];

  const commitments = [
    {
      title: "Rigueur d'Ingénierie",
      desc: "Zéro approximation. Des fondations logicielles solides qui absorbent la croissance sans accumulation de dette technique.",
      icon: <ShieldCheck size={28} className="text-[#FFD700]" />,
    },
    {
      title: "Design Fonctionnel & Éditorial",
      desc: "Une esthétique industrielle premium où chaque élément visuel est au service de la fonction et de la marque.",
      icon: <Compass size={28} className="text-[#FF4500]" />,
    },
    {
      title: "Accompagnement Stratégique",
      desc: "Nous sommes vos partenaires technologiques dévoués, de la première esquisse jusqu'aux déploiements à grande échelle.",
      icon: <Layers size={28} className="text-[#8892B0]" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F3EE] pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-10 [background-image:linear-gradient(rgba(255,215,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.1)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#FF4500]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Eyebrow */}
        <div className="text-center mb-6">
          <span className="px-3.5 py-1.5 rounded-full bg-[#101114] border border-[#FFD700]/30 text-xs uppercase tracking-[0.25em] font-semibold text-[#FFD700] inline-flex items-center gap-2">
            <Flame size={14} className="text-[#FF4500]" />
            Notre Philosophie & ADN
          </span>
        </div>

        {/* Master Brief Mandatory Headline */}
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold text-center tracking-tight text-white uppercase max-w-5xl mx-auto mb-8 leading-[1.08]">
          Nous ne nous contentons pas de créer du digital.
          <span className="block gradient-text mt-2">Nous lui donnons du sens.</span>
        </h1>

        {/* Master Brief French Body Copy */}
        <div className="max-w-3xl mx-auto text-center mb-24 space-y-4">
          <p className="text-lg sm:text-xl text-[#F5F3EE]/90 leading-relaxed font-light">
            <strong className="text-white font-medium">LionForge</strong> est une agence numérique et technologique qui accompagne les entreprises, les PME et les entrepreneurs dans la conception et le développement de leurs projets digitaux.
          </p>
          <p className="text-base text-[#8892B0] leading-relaxed font-light">
            Nous associons créativité, ingénierie et innovation pour transformer les idées en solutions concrètes, utiles et évolutives.
          </p>
        </div>

        {/* The 4-step Approach Grid */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
              Notre Démarche en 4 Temps
            </h2>
            <p className="text-xs sm:text-sm text-[#8892B0] mt-2 font-mono">
              Comprendre • Concevoir • Développer • Faire évoluer
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachSteps.map((step) => (
              <div
                key={step.num}
                className="forge-glass-card rounded-2xl p-7 border border-white/10 hover:border-[#FFD700]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#1A1C23] border border-white/10 flex items-center justify-center">
                      {step.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-[#FFD700]">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#8892B0] leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Commitments & Standards */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
              Nos Engagements d'Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {commitments.map((c, i) => (
              <div
                key={i}
                className="forge-glass-card rounded-2xl p-8 border border-white/10 hover:border-[#FFD700]/30 transition-all"
              >
                <div className="mb-5">{c.icon}</div>
                <h3 className="font-heading text-lg font-bold text-white mb-2">{c.title}</h3>
                <p className="text-xs sm:text-sm text-[#8892B0] leading-relaxed font-light">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Call to Action */}
        <div className="forge-glass-card rounded-3xl p-10 sm:p-14 border border-[#FFD700]/30 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD700]/5 rounded-full blur-2xl pointer-events-none" />
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white uppercase mb-4">
            Donnons vie à votre vision technologique
          </h2>
          <p className="text-sm sm:text-base text-[#8892B0] max-w-xl mx-auto mb-8 font-light">
            Échangez directement avec nos ingénieurs et architectes pour cadrer votre prochain produit digital.
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
