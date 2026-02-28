import ServiceCard from "@/app/components/ServiceCard";
import MotionWrapper from "@/app/components/MotionWrapper";

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

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-lion-dark text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête avec animation */}
        <MotionWrapper direction="scale" duration={0.8} blur={true}>
          <h1 className="text-5xl md:text-6xl font-bold text-lion-gold text-center mb-6">
            Nos Services
          </h1>
        </MotionWrapper>
        
        <MotionWrapper direction="up" delay={0.2} distance={20}>
          <p className="text-xl text-lion-light text-center max-w-3xl mx-auto mb-12">
            Découvrez l'ensemble de nos prestations pour vous accompagner dans vos projets digitaux.
          </p>
        </MotionWrapper>
        
        {/* Grille des services avec animations en cascade */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <MotionWrapper 
              key={service.slug} 
              delay={0.3 + index * 0.1}
              direction="slide-up-scale"
              distance={40}
              duration={0.6}
            >
              <div className={`relative group bg-gradient-to-br ${service.gradient} p-[1px] rounded-2xl hover:shadow-2xl hover:shadow-lion-gold/20 transition-all duration-500 h-full`}>
                <div className="bg-lion-dark rounded-2xl p-6 h-full backdrop-blur-sm group-hover:bg-opacity-50 transition-all duration-500">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-lion-gold mb-3 group-hover:text-lion-electric transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-lion-light mb-4">{service.description}</p>
                  
                  {/* Lien vers la page détaillée */}
                  <a 
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-lion-electric hover:text-lion-gold transition-colors group/link"
                  >
                    <span>En savoir plus</span>
                    <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
        
        {/* Section supplémentaire : Pourquoi nous choisir ? */}
        <MotionWrapper delay={0.7} direction="up" distance={30}>
          <div className="mt-20 text-center p-10 bg-gradient-to-br from-lion-gold/5 to-lion-electric/5 rounded-3xl border border-lion-gold/10">
            <h2 className="text-3xl font-bold text-lion-gold mb-4">Besoin d'un service personnalisé ?</h2>
            <p className="text-lion-light mb-6 max-w-2xl mx-auto">
              Chaque projet est unique. Contactez-nous pour discuter de vos besoins spécifiques.
            </p>
            <a 
              href="/contact"
              className="inline-block px-8 py-3 bg-lion-gold text-lion-dark rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              Discutons de votre projet
            </a>
          </div>
        </MotionWrapper>
      </div>
    </div>
  );
}