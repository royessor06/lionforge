import Hero from "@/app/components/Hero";
import ServiceCard from "@/app/components/ServiceCard";
import ProjectCard from "@/app/components/ProjectCard";
import MotionWrapper from "@/app/components/MotionWrapper";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Développement Web",
    description: "Sites vitrines, plateformes e‑commerce, applications SaaS.",
    slug: "web-development",
    icon: "🌐",
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "Applications Mobiles",
    description: "iOS, Android, cross‑platform (React Native, Flutter).",
    slug: "mobile-apps",
    icon: "📱",
    gradient: "from-green-500/20 to-teal-500/20",
  },
  {
    title: "Solutions Sur Mesure",
    description: "Systèmes métiers, automatisation, intégrations API.",
    slug: "custom-solutions",
    icon: "⚙️",
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Maintenance & Support",
    description: "Optimisation, sécurité, mises à jour continues.",
    slug: "maintenance",
    icon: "🔧",
    gradient: "from-lion-gold/20 to-yellow-500/20",
  },
];

const projects = [
  { title: "E‑commerce Luxe", category: "Web", image: null, slug: "ecommerce-luxe" },
  { title: "App Fitness", category: "Mobile", image: null, slug: "app-fitness" },
  { title: "ERP Industriel", category: "Sur mesure", image: null, slug: "erp-industriel" },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Présentation rapide avec effet de texte animé */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-lion-dark via-lion-dark to-black overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lion-gold/50 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-lion-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-lion-electric/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <MotionWrapper direction="scale" duration={0.8}>
            <h2 className="text-4xl md:text-5xl font-bold text-lion-gold mb-6">
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
          
          {/* Statistiques rapides */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {[
              { value: "50+", label: "Projets livrés", icon: "🚀" },
              { value: "4", label: "Ans d'expertise", icon: "⚡" },
              { value: "100%", label: "Satisfaction", icon: "⭐" },
            ].map((stat, i) => (
              <MotionWrapper 
                key={i} 
                delay={0.3 + i * 0.1}
                direction="zoom-out"
                duration={0.6}
                bounce={true}
              >
                <div className="text-center group cursor-pointer">
                  <div className="text-4xl mb-2 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-lion-gold group-hover:text-lion-electric transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-lion-light text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Services avec cartes animées */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-black to-lion-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <MotionWrapper direction="fade" duration={0.8}>
            <h2 className="text-4xl md:text-5xl font-bold text-lion-gold text-center mb-4">
              Nos services
            </h2>
            <p className="text-lion-light text-center mb-12 max-w-2xl mx-auto">
              Des solutions complètes pour tous vos besoins digitaux
            </p>
          </MotionWrapper>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <MotionWrapper 
                key={service.slug} 
                delay={index * 0.1}
                direction="slide-up-scale"
                distance={60}
                duration={0.5}
                className="h-full"
              >
                <div className={`relative group h-full bg-gradient-to-br ${service.gradient} p-[1px] rounded-2xl hover:shadow-2xl hover:shadow-lion-gold/20 transition-all duration-500`}>
                  <div className="bg-lion-dark rounded-2xl p-6 h-full backdrop-blur-sm group-hover:bg-opacity-50 transition-all duration-500">
                    <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-lion-gold mb-3 group-hover:text-lion-electric transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-lion-light mb-4">{service.description}</p>
                    <Link 
                      href={`/services/${service.slug}`} 
                      className="inline-flex items-center text-lion-electric hover:text-lion-gold transition-colors group/link"
                    >
                      <span>En savoir plus</span>
                      <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    
                    {/* Effet de brillance au survol */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Projets récents avec effet de carte */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-lion-dark to-black overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-lion-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-lion-electric/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <MotionWrapper direction="flip" duration={0.9}>
            <h2 className="text-4xl md:text-5xl font-bold text-lion-gold text-center mb-4">
              Projets récents
            </h2>
            <p className="text-lion-light text-center mb-12 max-w-2xl mx-auto">
              Découvrez quelques-unes de nos réalisations
            </p>
          </MotionWrapper>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <MotionWrapper 
                key={project.slug} 
                delay={i * 0.15}
                direction="rotate"
                distance={20}
                duration={0.7}
                className="group"
              >
                <div className="relative bg-lion-dark/50 border border-lion-gold/20 rounded-2xl overflow-hidden hover:border-lion-gold hover:shadow-2xl hover:shadow-lion-gold/20 transition-all duration-500">
                  <div className="relative h-56 bg-gradient-to-br from-lion-gold/10 to-lion-electric/10 overflow-hidden">
                    {project.image ? (
                      <Image 
                        src={project.image} 
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-6xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                          {project.category === "Web" ? "🌐" : project.category === "Mobile" ? "📱" : "⚙️"}
                        </span>
                      </div>
                    )}
                    
                    {/* Overlay au survol */}
                    <div className="absolute inset-0 bg-gradient-to-t from-lion-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <span className="px-3 py-1 bg-lion-gold/10 text-lion-gold rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                      <span className="text-lion-light/50 text-sm">2025</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-lion-gold transition-colors">
                      {project.title}
                    </h3>
                    <Link 
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center text-lion-electric hover:text-lion-gold transition-colors group/link"
                    >
                      <span>Étude de cas</span>
                      <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>
          
          <MotionWrapper delay={0.4} direction="up" distance={30} bounce={true}>
            <div className="text-center mt-12">
              <Link 
                href="/projects" 
                className="group inline-flex items-center gap-3 text-lion-electric hover:text-lion-gold transition-colors text-lg"
              >
                <span className="relative">
                  Voir tous nos projets
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lion-gold group-hover:w-full transition-all duration-300"></span>
                </span>
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* Pourquoi nous choisir - Version interactive */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-black to-lion-dark overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lion-gold/5 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <MotionWrapper direction="scale" blur={true} duration={0.8}>
            <h2 className="text-4xl md:text-5xl font-bold text-lion-gold text-center mb-4">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-lion-light text-center mb-12">
              Ce qui fait la différence chez LionForge
            </p>
          </MotionWrapper>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🚀",
                title: "Expertise",
                description: "Une équipe de développeurs expérimentés, passionnés par les technologies modernes.",
                gradient: "from-blue-500/20 to-purple-500/20",
                delay: 0.1,
              },
              {
                icon: "⚡",
                title: "Agilité",
                description: "Méthodes itératives pour livrer rapidement et s'adapter à vos besoins.",
                gradient: "from-green-500/20 to-teal-500/20",
                delay: 0.2,
              },
              {
                icon: "🤝",
                title: "Accompagnement",
                description: "Suivi et maintenance après livraison, nous restons à vos côtés.",
                gradient: "from-orange-500/20 to-red-500/20",
                delay: 0.3,
              },
            ].map((item, i) => (
              <MotionWrapper 
                key={i} 
                delay={item.delay}
                direction="zoom-out"
                distance={40}
                duration={0.7}
              >
                <div className="relative group h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
                  <div className="relative bg-lion-dark/50 border border-lion-gold/20 rounded-2xl p-8 backdrop-blur-sm hover:border-lion-gold hover:shadow-2xl hover:shadow-lion-gold/20 transition-all duration-500 h-full">
                    <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-lion-gold mb-3 group-hover:text-lion-electric transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-lion-light">{item.description}</p>
                    
                    {/* Barre de progression au survol */}
                    <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-lion-gold to-lion-electric rounded-b-2xl w-0 group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final avec effet cinématique */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Fond animé */}
        <div className="absolute inset-0 bg-gradient-to-br from-lion-dark via-lion-dark to-lion-electric/20">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
        </div>
        
        {/* Particules animées */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-lion-gold/30 rounded-full animate-float"
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
          <MotionWrapper 
            direction="scale" 
            duration={1} 
            bounce={true}
            blur={true}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-lion-gold mb-6">
              Prêt à démarrer ?
            </h2>
            <p className="text-2xl text-lion-light mb-10 leading-relaxed">
              Discutons de vos idées et construisons ensemble la solution qui répondra à vos enjeux.
            </p>
          </MotionWrapper>
          
          <MotionWrapper delay={0.3} direction="up" distance={40} bounce={true}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="group relative bg-lion-gold text-lion-dark px-10 py-4 rounded-xl font-semibold text-lg 
                         hover:bg-opacity-90 transition-all duration-300 
                         shadow-2xl shadow-lion-gold/30 hover:shadow-lion-gold/50
                         transform hover:-translate-y-1"
              >
                <span className="relative z-10">Contactez‑nous</span>
                <div className="absolute inset-0 bg-white rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Link>
              
              <Link
                href="/services"
                className="group relative border-2 border-lion-gold text-lion-gold px-10 py-4 rounded-xl font-semibold text-lg 
                         hover:bg-lion-gold/10 transition-all duration-300
                         transform hover:-translate-y-1"
              >
                <span className="relative z-10">Découvrir nos services</span>
                <div className="absolute inset-0 bg-lion-gold/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </MotionWrapper>
        </div>
      </section>
    </>
  );
}