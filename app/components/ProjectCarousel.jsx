"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E‑commerce Luxe",
    category: "Web",
    image: null,
    slug: "ecommerce-luxe",
    stack: "Next.js, Shopify",
    description: "Plateforme e-commerce haut de gamme avec expérience utilisateur premium.",
    color: "from-purple-500/20 to-blue-500/20",
  },
  {
    title: "App Fitness",
    category: "Mobile",
    image: null,
    slug: "app-fitness",
    stack: "React Native",
    description: "Application de suivi fitness avec coaching personnalisé.",
    color: "from-green-500/20 to-teal-500/20",
  },
  {
    title: "ERP Industriel",
    category: "Sur mesure",
    image: null,
    slug: "erp-industriel",
    stack: "Django, PostgreSQL",
    description: "Système de gestion d'entreprise pour l'industrie manufacturière.",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Site Vitrine Design",
    category: "Web",
    image: null,
    slug: "site-vitrine-design",
    stack: "Vue.js",
    description: "Site vitrine interactif pour agence de design.",
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    title: "Application de Livraison",
    category: "Mobile",
    image: null,
    slug: "app-livraison",
    stack: "Flutter",
    description: "Application de livraison de repas avec tracking en temps réel.",
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "CRM Sur Mesure",
    category: "Sur mesure",
    image: null,
    slug: "crm-sur-mesure",
    stack: "Laravel",
    description: "CRM personnalisé pour gestion de relation client.",
    color: "from-indigo-500/20 to-purple-500/20",
  },
];

export default function ProjectCarousel() {
  return (
    <div className="relative py-12 px-4">
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards, Autoplay, Pagination, Navigation]}
        className="w-full max-w-md mx-auto h-[500px]"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        loop={true}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={project.slug}>
            {({ isActive }) => (
              <motion.div
                initial={false}
                animate={{
                  scale: isActive ? 1 : 0.95,
                  rotateY: isActive ? 0 : 5,
                }}
                transition={{ duration: 0.3 }}
                className={`relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br ${project.color} p-[2px]`}
              >
                <div className="absolute inset-0 bg-lion-dark rounded-3xl">
                  {/* Image ou placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-lion-gold/20 to-lion-electric/20 flex items-center justify-center">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <span className="text-7xl transform group-hover:scale-110 transition-transform">
                        {project.category === "Web" ? "🌐" : 
                         project.category === "Mobile" ? "📱" : "⚙️"}
                      </span>
                    )}
                    
                    {/* Overlay avec catégorie */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-lion-gold/20 backdrop-blur-sm text-lion-gold rounded-full text-sm border border-lion-gold/30">
                        {project.category}
                      </span>
                    </div>
                    
                    {/* Stack technologique */}
                    <div className="absolute bottom-4 right-4">
                      <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-lion-light rounded-full text-xs">
                        {project.stack}
                      </span>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-lion-light/80 text-sm mb-4">
                      {project.description}
                    </p>
                    
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center text-lion-electric hover:text-lion-gold transition-colors group"
                    >
                      <span>Voir l'étude de cas</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>

                  {/* Effet de brillance */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </div>
              </motion.div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Légende */}
      <p className="text-center text-lion-light/60 text-sm mt-8">
        👉 Glissez pour voir plus de projets
      </p>
    </div>
  );
}