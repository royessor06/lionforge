import Image from "next/image";
import MotionWrapper from "@/app/components/MotionWrapper";

export default function About() {
  // Données de l'équipe pour plus de clarté
  const team = [
    { name: "Léo Akpovi", role: "Fondateur & CEO", emoji: "🦁" },
    { name: "Marie Adjovi", role: "CTO", emoji: "👩‍💻" },
    { name: "Jean Hounkpatin", role: "Lead Developer", emoji: "👨‍💻" },
  ];

  return (
    <div className="min-h-screen bg-lion-dark text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Titre principal avec animation scale */}
        <MotionWrapper direction="scale" duration={0.8} blur={true}>
          <h1 className="text-5xl md:text-6xl font-bold text-lion-gold mb-8 text-center">
            À propos de <span className="text-white">LionForge</span>
          </h1>
        </MotionWrapper>

        {/* Sous-titre avec animation fade */}
        <MotionWrapper direction="up" delay={0.2} distance={20}>
          <p className="text-xl text-lion-light text-center mb-16 max-w-2xl mx-auto">
            Découvrez l'histoire, la vision et les valeurs qui animent notre agence au quotidien.
          </p>
        </MotionWrapper>

        <div className="space-y-12">
          
          {/* Histoire - avec animation flip */}
          <MotionWrapper direction="flip" duration={0.8} delay={0.1}>
            <section className="bg-gradient-to-br from-black/40 to-lion-dark/60 p-8 rounded-xl border border-lion-gold/10 hover:border-lion-gold/30 transition-all duration-500 group">
              <h2 className="text-3xl font-semibold text-lion-gold mb-4 flex items-center group-hover:translate-x-2 transition-transform duration-300">
                <span className="mr-3 text-4xl group-hover:scale-110 transition-transform">📖</span> Notre histoire
              </h2>
              <p className="text-lg text-lion-light leading-relaxed">
                Fondée en 2020, <span className="text-lion-gold font-semibold">LionForge</span> est née de la passion de deux ingénieurs pour le code et l'innovation.
                Depuis, nous avons accompagné plus de <span className="text-lion-electric font-bold">50 startups et entreprises</span> dans leur transformation numérique,
                en apportant des solutions sur mesure, robustes et élégantes.
              </p>
              
              {/* Timeline visuelle */}
              <div className="mt-6 flex items-center gap-2 text-sm text-lion-light/60">
                <span className="w-2 h-2 bg-lion-gold rounded-full"></span>
                <span>2020 : Création</span>
                <span className="w-2 h-2 bg-lion-gold rounded-full ml-4"></span>
                <span>2023 : 50+ projets</span>
                <span className="w-2 h-2 bg-lion-gold rounded-full ml-4"></span>
                <span>2025 : Expansion</span>
              </div>
            </section>
          </MotionWrapper>

          {/* Vision - avec animation slide-up-scale */}
          <MotionWrapper direction="slide-up-scale" duration={0.7} delay={0.2} distance={30}>
            <section className="bg-gradient-to-br from-black/40 to-lion-dark/60 p-8 rounded-xl border border-lion-gold/10 hover:border-lion-gold/30 transition-all duration-500 group">
              <h2 className="text-3xl font-semibold text-lion-gold mb-4 flex items-center group-hover:translate-x-2 transition-transform duration-300">
                <span className="mr-3 text-4xl group-hover:scale-110 transition-transform">🔭</span> Vision
              </h2>
              <p className="text-lg text-lion-light leading-relaxed">
                Devenir le <span className="text-lion-gold font-semibold">partenaire technologique de référence</span> pour les entreprises qui veulent allier performance
                et design dans leurs outils digitaux, en France et à l'international.
              </p>
              
              {/* Badge objectif */}
              <div className="mt-4 inline-block px-4 py-2 bg-lion-gold/10 rounded-full border border-lion-gold/20">
                <span className="text-lion-gold">🌍 Objectif 2026 : Présence dans 5 pays</span>
              </div>
            </section>
          </MotionWrapper>

          {/* Mission - avec animation rotate */}
          <MotionWrapper direction="rotate" duration={0.7} delay={0.3}>
            <section className="bg-gradient-to-br from-black/40 to-lion-dark/60 p-8 rounded-xl border border-lion-gold/10 hover:border-lion-gold/30 transition-all duration-500 group">
              <h2 className="text-3xl font-semibold text-lion-gold mb-4 flex items-center group-hover:translate-x-2 transition-transform duration-300">
                <span className="mr-3 text-4xl group-hover:scale-110 transition-transform">🎯</span> Mission
              </h2>
              <p className="text-lg text-lion-light leading-relaxed">
                Fournir des solutions logicielles robustes, évolutives et élégantes, en plaçant <span className="text-lion-gold font-semibold">l'humain et la qualité</span>
                au cœur de nos processus. Nous croyons en une technologie au service de la croissance.
              </p>
            </section>
          </MotionWrapper>

          {/* Valeurs - avec animation zoom-out et cascade */}
          <MotionWrapper direction="zoom-out" duration={0.7} delay={0.4}>
            <section className="bg-gradient-to-br from-black/40 to-lion-dark/60 p-8 rounded-xl border border-lion-gold/10 hover:border-lion-gold/30 transition-all duration-500">
              <h2 className="text-3xl font-semibold text-lion-gold mb-6 flex items-center">
                <span className="mr-3 text-4xl">💎</span> Nos valeurs
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { text: "Excellence technique", icon: "⚡", color: "from-blue-500/20 to-purple-500/20" },
                  { text: "Transparence", icon: "🔍", color: "from-green-500/20 to-teal-500/20" },
                  { text: "Innovation continue", icon: "💡", color: "from-orange-500/20 to-red-500/20" },
                  { text: "Respect des délais", icon: "⏱️", color: "from-lion-gold/20 to-yellow-500/20" },
                ].map((value, index) => (
                  <MotionWrapper 
                    key={index} 
                    delay={0.5 + index * 0.1}
                    direction="up"
                    distance={20}
                  >
                    <div className={`bg-gradient-to-br ${value.color} p-[1px] rounded-xl group`}>
                      <div className="bg-lion-dark/80 rounded-xl p-4 flex items-center gap-3 hover:bg-lion-dark/60 transition-all duration-300">
                        <span className="text-2xl group-hover:scale-110 transition-transform">{value.icon}</span>
                        <span className="text-lion-light group-hover:text-lion-gold transition-colors">
                          {value.text}
                        </span>
                      </div>
                    </div>
                  </MotionWrapper>
                ))}
              </div>
            </section>
          </MotionWrapper>

          {/* Équipe - avec animations sophistiquées */}
          <MotionWrapper direction="scale" duration={0.8} delay={0.5}>
            <section className="bg-gradient-to-br from-black/40 to-lion-dark/60 p-8 rounded-xl border border-lion-gold/10 hover:border-lion-gold/30 transition-all duration-500">
              <h2 className="text-3xl font-semibold text-lion-gold mb-8 flex items-center">
                <span className="mr-3 text-4xl">👥</span> L'équipe
              </h2>
              
              <div className="flex flex-wrap gap-8 justify-center">
                {team.map((member, i) => (
                  <MotionWrapper 
                    key={i} 
                    delay={0.6 + i * 0.15}
                    direction="flip"
                    duration={0.8}
                    className="group"
                  >
                    <div className="text-center relative">
                      {/* Cercle de glow */}
                      <div className="absolute inset-0 bg-lion-gold/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                      
                      {/* Avatar */}
                      <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-lion-gold/30 to-lion-electric/30 mx-auto mb-4 flex items-center justify-center text-5xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-2 border-transparent group-hover:border-lion-gold/50">
                        <span className="transform group-hover:scale-110 transition-transform">
                          {member.emoji}
                        </span>
                      </div>
                      
                      {/* Nom et rôle */}
                      <h3 className="text-xl font-bold text-white group-hover:text-lion-gold transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-lion-gold/80 text-sm uppercase tracking-wider">
                        {member.role}
                      </p>
                      
                      {/* Réseaux sociaux (placeholders) */}
                      <div className="flex justify-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="w-6 h-6 bg-lion-gold/10 rounded-full flex items-center justify-center text-xs hover:bg-lion-gold/30 transition">in</span>
                        <span className="w-6 h-6 bg-lion-gold/10 rounded-full flex items-center justify-center text-xs hover:bg-lion-gold/30 transition">𝕏</span>
                      </div>
                    </div>
                  </MotionWrapper>
                ))}
              </div>
              
              {/* Message de recrutement */}
              <MotionWrapper delay={0.9} direction="up" distance={20}>
                <div className="mt-10 text-center p-6 bg-lion-gold/5 rounded-xl border border-lion-gold/10">
                  <p className="text-lion-light">
                    <span className="text-lion-gold font-bold">Vous aussi, rejoignez l'aventure !</span>
                    <br />
                    Nous recrutons des talents passionnés.
                  </p>
                  <button className="mt-3 px-6 py-2 bg-lion-gold/10 text-lion-gold rounded-full hover:bg-lion-gold/20 transition-all duration-300 border border-lion-gold/30">
                    Voir les offres
                  </button>
                </div>
              </MotionWrapper>
            </section>
          </MotionWrapper>
        </div>
      </div>
    </div>
  );
}