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
    description: "Plateforme e-commerce haut de gamme.",
  },
  {
    title: "App Fitness",
    category: "Mobile",
    image: null,
    slug: "app-fitness",
    stack: "React Native",
    description: "Application de suivi fitness.",
  },
  {
    title: "ERP Industriel",
    category: "Sur mesure",
    image: null,
    slug: "erp-industriel",
    stack: "Django, PostgreSQL",
    description: "Système de gestion d'entreprise.",
  },
];

export default function ProjectCarousel() {
  return (
    <div className="relative py-12 px-4">
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards, Autoplay, Pagination, Navigation]}
        className="w-full max-w-md mx-auto h-[450px]"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.slug}>
            <div className="bg-lion-surface border border-lion-gold border-opacity-30 rounded-3xl overflow-hidden h-full">
              <div className="relative h-48 bg-lion-dark">
                {project.image ? (
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-6xl text-lion-gold text-opacity-50">
                      {project.category === "Web" ? "🌐" : "📱"}
                    </span>
                  </div>
                )}
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-lion-gold text-lion-dark rounded-full text-sm font-bold">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-lion-light text-opacity-70 text-sm mb-4">{project.description}</p>
                <span className="text-xs text-lion-gold">{project.stack}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}