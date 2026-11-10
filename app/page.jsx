"use client";

import { useState } from "react";
import Link from "next/link";
import Hero from "@/app/components/Hero";
import ServiceCard from "@/app/components/ServiceCard";
import ProjectCard from "@/app/components/ProjectCard";
import ContactForm from "@/app/components/ContactForm";
import { projects } from "@/app/data/content";
import {
  Code2,
  Smartphone,
  Cpu,
  Flame,
  Shield,
  Zap,
  ArrowRight,
  Layers,
  Sparkles,
  Terminal,
  Activity,
  Workflow,
  Search,
  PenTool,
  Code,
  TrendingUp,
  CheckCircle2,
  Database,
  Lock,
  ArrowUpRight,
} from "lucide-react";

export default function Home() {
  const [activeProjectFilter, setActiveProjectFilter] = useState("Tous");

  // The 4 Core Services with exact copy from Master Brief
  const coreServices = [
    {
      num: "01",
      title: "Développement Web",
      slug: "web-development",
      description: "Nous concevons des sites web et applications modernes, rapides, accessibles et adaptés aux objectifs de votre activité.",
      features: [
        "Sites vitrines & plateformes e-commerce",
        "Applications SaaS haute performance",
        "Architecture Next.js, React & Node.js",
        "Accessibilité et SEO technique",
      ],
      icon: <Code2 size={26} className="text-[#FFD700]" />,
    },
    {
      num: "02",
      title: "Applications Mobiles",
      slug: "mobile-apps",
      description: "Nous développons des applications mobiles pensées pour offrir des expériences fluides, pratiques et performantes.",
      features: [
        "Développement natif iOS (Swift) & Android (Kotlin)",
        "Applications cross-platform Flutter & React Native",
        "Mode hors-ligne et synchronisation temps réel",
        "Publication certifiée sur les stores",
      ],
      icon: <Smartphone size={26} className="text-[#FFD700]" />,
    },
    {
      num: "03",
      title: "Logiciels & Solutions sur mesure",
      slug: "custom-solutions",
      description: "Nous créons des solutions logicielles adaptées à vos processus pour simplifier la gestion, améliorer la productivité et répondre à vos besoins spécifiques.",
      features: [
        "ERP, CRM & portails d'entreprise sur mesure",
        "Automatisation des flux opérationnels",
        "Conception d'APIs sécurisées et connecteurs",
        "Tableaux de bord d'aide à la décision",
      ],
      icon: <Cpu size={26} className="text-[#FFD700]" />,
    },
    {
      num: "04",
      title: "Innovation & Technologies",
      slug: "maintenance",
      description: "Nous explorons et intégrons les technologies pertinentes pour transformer vos idées en nouvelles opportunités.",
      features: [
        "Expériences WebGL 3D & visualisations immersives",
        "Intégration d'intelligence artificielle & LLM",
        "Audits d'architecture et refactoring technique",
        "Maintenance proactive & monitoring 24/7",
      ],
      icon: <Sparkles size={26} className="text-[#FFD700]" />,
    },
  ];

  // The 4-step approach from Master Brief
  const approachSteps = [
    {
      step: "01",
      name: "Comprendre",
      icon: <Search size={22} className="text-[#FFD700]" />,
      desc: "Immersion dans vos enjeux métier, cartographie de vos flux opérationnels et clarification des exigences stratégiques.",
    },
    {
      step: "02",
      name: "Concevoir",
      icon: <PenTool size={22} className="text-[#FF4500]" />,
      desc: "Architecture logicielle évolutive, parcours utilisateurs intuitifs, design d'interaction soigné et prototypage rigoureux.",
    },
    {
      step: "03",
      name: "Développer",
      icon: <Code size={22} className="text-[#8892B0]" />,
      desc: "Ingénierie de précision, code typé, respect des meilleures pratiques de sécurité, tests automatisés et revues continues.",
    },
    {
      step: "04",
      name: "Faire évoluer",
      icon: <TrendingUp size={22} className="text-[#FFD700]" />,
      desc: "Déploiement continu, monitoring de performance, maintenance proactive et accompagnement stratégique sur le long terme.",
    },
  ];

  // The 5 Practical Solutions categories from Master Brief
  const practicalSolutions = [
    {
      category: "Gestion numérique",
      status: "Capacité Éprouvée",
      title: "Systèmes de Gestion Centralisée",
      desc: "Outils sur mesure pour numériser la documentation, centraliser les dossiers clients et fluidifier la gouvernance interne sans lourdeur.",
      tech: "Bases de données relationnelles • Chiffrement au repos • Rôles granulaires",
      icon: <Database size={22} className="text-[#FFD700]" />,
    },
    {
      category: "Automatisation des processus",
      status: "En Déploiement Actif",
      title: "Moteurs de Flux & Tâches Métier",
      desc: "Élimination des tâches manuelles répétitives : synchronisation comptable automatique, alertes de stocks et facturation récurrente.",
      tech: "Webhooks fiables • Queues distribuées • Intégration bancaire & ERP",
      icon: <Workflow size={22} className="text-[#FF4500]" />,
    },
    {
      category: "Plateformes web",
      status: "Prêt au Déploiement",
      title: "Architectures SaaS Multi-utilisateurs",
      desc: "Plateformes cloud sécurisées conçues pour supporter des pics de trafic intenses avec une latence réseau inférieure à 100ms.",
      tech: "Next.js App Router • Edge Functions • Scalabilité horizontale",
      icon: <Layers size={22} className="text-[#8892B0]" />,
    },
    {
      category: "Applications métier",
      status: "Capacité Éprouvée",
      title: "Outils Mobiles de Terrain & Conduite",
      desc: "Applications dédiées aux équipes mobiles et commerciaux : saisie hors-connexion, géolocalisation d'inventaire et signature électronique.",
      tech: "Offline-first sync • Biométrie • Notifications ciblées",
      icon: <Smartphone size={22} className="text-[#FFD700]" />,
    },
    {
      category: "Solutions digitales personnalisées",
      status: "R&D & Conseil",
      title: "Interfaces 3D & Expériences Immersives",
      desc: "Intégration d'expériences WebGL interactives et visualisations graphiques avancées pour valoriser les produits et rehausser l'image de marque.",
      tech: "Three.js • Shaders GLSL optimisés • Rendu matériel PBR",
      icon: <Sparkles size={22} className="text-[#FF4500]" />,
    },
  ];

  // Filter projects by category
  const filteredProjects = activeProjectFilter === "Tous"
    ? projects
    : projects.filter((p) => p.category === activeProjectFilter);

  return (
    <>
      {/* SECTION 01 — HERO (THE FORGE AWAKENS) */}
      <Hero />

      {/* SECTION 02 — ABOUT (OUR PHILOSOPHY) */}
      <section id="about-section" className="relative py-28 px-6 bg-[#050505] overflow-hidden">
        {/* Subtle Forge Ambient Background */}
        <div className="absolute inset-0 pointer-events-none opacity-10 [background-image:linear-gradient(rgba(255,215,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.1)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[550px] h-[550px] bg-[#FF4500]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Eyebrow */}
          <div className="text-center mb-5">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#FFD700] inline-flex items-center gap-2">
              <Flame size={14} className="text-[#FF4500]" />
              Notre Philosophie
            </span>
          </div>

          {/* Master Brief Mandatory Headline */}
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold text-center tracking-tight text-white uppercase max-w-4xl mx-auto mb-8 leading-[1.1]">
            Nous ne nous contentons pas de créer du digital.
            <span className="block gradient-text mt-2">Nous lui donnons du sens.</span>
          </h2>

          {/* Master Brief Body Copy */}
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <p className="text-base sm:text-lg md:text-xl text-[#F5F3EE]/90 leading-relaxed font-light">
              <strong className="text-white font-medium">LionForge</strong> est une agence numérique et technologique qui accompagne les entreprises, les PME et les entrepreneurs dans la conception et le développement de leurs projets digitaux.
            </p>
            <p className="text-sm sm:text-base text-[#8892B0] leading-relaxed font-light">
              Nous associons créativité, ingénierie et innovation pour transformer les idées en solutions concrètes, utiles et évolutives.
            </p>
          </div>

          {/* 4 Steps Approach: Comprendre, Concevoir, Développer, Faire évoluer */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <span className="text-xs uppercase tracking-[0.25em] font-mono text-[#8892B0]">
                Notre Démarche d'Ingénierie
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {approachSteps.map((step) => (
                <div
                  key={step.step}
                  className="forge-glass-card rounded-2xl p-7 border border-white/10 hover:border-[#FFD700]/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#1A1C23] border border-white/10 flex items-center justify-center">
                        {step.icon}
                      </div>
                      <span className="text-xs font-mono font-bold text-[#FFD700]">
                        {step.step}
                      </span>
                    </div>

                    <h3 className="font-heading text-lg font-bold text-white mb-2">
                      {step.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#8892B0] leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Standards & Commitments */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-2xl bg-[#101114]/60 border border-white/10">
            {[
              { value: "100%", label: "Code Propriétaire & Garanti" },
              { value: "0ms", label: "Dette Technique Tolérée" },
              { value: "PBR", label: "Esthétique Industrielle Noble" },
              { value: "24/7", label: "Fiabilité & Supervision" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-3">
                <div className="font-heading text-2xl sm:text-3xl font-bold text-[#FFD700] mb-1">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-xs uppercase tracking-wider text-[#8892B0]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03 — SERVICES (WHAT WE FORGE) */}
      <section id="services-section" className="relative py-28 px-6 bg-[#08090C] overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#FFD700] inline-flex items-center gap-2 mb-3">
              <Sparkles size={14} className="text-[#FFD700]" />
              Ce Que Nous Forgeons
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight uppercase">
              Des idées ambitieuses.
              <span className="block gradient-text mt-1">Des solutions concrètes.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#8892B0] max-w-2xl mx-auto mt-4 font-light">
              Quatre expertises clés au service de votre croissance et de votre efficience opérationnelle.
            </p>
          </div>

          {/* 4 Main Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreServices.map((service) => (
              <div
                key={service.slug}
                className="forge-glass-card rounded-2xl p-8 border border-white/10 hover:border-[#FFD700]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1A1C23] to-[#0A0B0E] border border-[#FFD700]/30 flex items-center justify-center">
                      {service.icon}
                    </div>
                    <span className="text-sm font-mono font-bold text-[#8892B0]/80">
                      {service.num}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#8892B0] leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-8 pt-4 border-t border-white/5">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#F5F3EE]/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#FFD700] hover:text-[#FFA500] transition-colors group"
                >
                  <span>Détails & Technologies</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04 — SOLUTIONS (TECHNOLOGY WITH PURPOSE) */}
      <section id="solutions" className="relative py-28 px-6 bg-[#050505] overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#FF4500] inline-flex items-center gap-2 mb-3">
              <Terminal size={14} className="text-[#FF4500]" />
              Technology With Purpose
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight uppercase">
              Solutions <span className="gradient-text">Technologiques</span>
            </h2>
            <p className="text-sm sm:text-base text-[#8892B0] max-w-2xl mx-auto mt-4 font-light">
              Des réponses concrètes aux défis de gestion, d'automatisation et de scalabilité des entreprises modernes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practicalSolutions.map((sol, idx) => (
              <div
                key={idx}
                className="forge-glass-card rounded-2xl p-7 border border-white/10 hover:border-[#FFD700]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#1A1C23] border border-[#FFD700]/30 flex items-center justify-center">
                      {sol.icon}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono text-[#FFD700]">
                      {sol.status}
                    </span>
                  </div>

                  <span className="text-[11px] uppercase tracking-wider text-[#8892B0] font-medium block mb-1">
                    {sol.category}
                  </span>

                  <h3 className="font-heading text-lg font-bold text-white mb-2">
                    {sol.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#8892B0] leading-relaxed font-light mb-6">
                    {sol.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 text-[11px] text-[#8892B0]/80 font-mono">
                  {sol.tech}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05 — PROJECTS (SELECTED WORK) */}
      <section id="projects-section" className="relative py-28 px-6 bg-[#08090C] overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#FFD700] inline-flex items-center gap-2 mb-3">
                <Activity size={14} className="text-[#FFD700]" />
                Selected Work & Architecture
              </span>
              <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight uppercase">
                Réalisations & <span className="gradient-text">Architectures</span>
              </h2>
              <p className="text-sm text-[#8892B0] mt-2 font-mono">
                Nos prochaines réalisations prennent forme ici.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {["Tous", "Web", "Mobile", "Sur mesure"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveProjectFilter(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    activeProjectFilter === cat
                      ? "bg-[#FFD700] text-[#050505] shadow-lg shadow-[#FFD700]/20"
                      : "bg-[#101114] border border-white/10 text-[#8892B0] hover:text-white hover:border-white/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#FFD700] hover:text-[#FFA500] transition-colors"
            >
              <span>Accéder à toutes les études de cas</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 06 — CONTACT (LET'S FORGE SOMETHING EXTRAORDINARY) */}
      <section id="contact-section" className="relative py-28 px-6 bg-[#050505] overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 pointer-events-none opacity-10 [background-image:linear-gradient(rgba(255,215,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.1)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FF4500]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#FFD700] inline-flex items-center gap-2 mb-3">
            <Flame size={14} className="text-[#FF4500]" />
            Démarrer la Forge
          </span>

          {/* Master Brief Mandatory Headline */}
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight uppercase mb-4 leading-tight">
            Votre prochain projet
            <span className="block gradient-text mt-1">Commence ici.</span>
          </h2>

          {/* Master Brief Supporting Copy */}
          <p className="text-sm sm:text-base text-[#8892B0] max-w-xl mx-auto mb-12 font-light leading-relaxed">
            Vous avez une idée, un besoin ou un projet à concrétiser ? Parlons-en et imaginons ensemble la solution adaptée à vos ambitions.
          </p>

          {/* High-conversion Form with Validation and API Route */}
          <div className="forge-glass-card rounded-3xl p-6 sm:p-10 border border-[#FFD700]/25 text-left shadow-2xl">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
