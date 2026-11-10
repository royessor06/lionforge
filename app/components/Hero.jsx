"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import gsap from "gsap";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";

// Browser-only WebGL canvas to avoid SSR errors
const LionScene = dynamic(() => import("./3d/LionScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center bg-[#050505]">
      <div className="text-center">
        <div className="w-12 h-12 mx-auto mb-3 border-2 border-[#FFD700] border-t-transparent rounded-full animate-spin" />
        <span className="text-xs uppercase tracking-widest text-[#8892B0]">Initialisation de la Forge 3D...</span>
      </div>
    </div>
  ),
});

export default function Hero() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headlineRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(eyebrowRef.current, {
        y: 25,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
      })
      .from(headlineRef.current, {
        y: 35,
        opacity: 0,
        duration: 1.0,
      }, "-=0.5")
      .from(descRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
      }, "-=0.6")
      .from(ctaRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
      }, "-=0.6")
      .from(scrollIndicatorRef.current, {
        opacity: 0,
        duration: 1.0,
      }, "-=0.4");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleScrollToNext = () => {
    const nextSection = document.getElementById("about-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* 3D Realtime WebGL Canvas */}
      <LionScene />

      {/* Atmospheric Vignette & Contrast Shading to ensure text readability */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(5,5,5,0.25)_0%,rgba(5,5,5,0.85)_80%,rgba(5,5,5,0.98)_100%)] z-10" />

      {/* Ambient Forge Spark Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20 [background-image:linear-gradient(rgba(255,215,0,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.06)_1px,transparent_1px)] [background-size:64px_64px] z-10" />

      {/* Hero Typography & Content Overlay */}
      <div 
        ref={contentRef}
        className="relative z-20 max-w-5xl mx-auto px-6 text-center pt-24 pb-28 pointer-events-none"
      >
        {/* Eyebrow */}
        <div ref={eyebrowRef} className="inline-flex items-center gap-2 mb-6 pointer-events-auto">
          <div className="px-3.5 py-1.5 rounded-full bg-[#101114]/85 border border-[#FFD700]/30 shadow-lg backdrop-blur-md">
            <span className="flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#FFD700] uppercase">
              <Sparkles size={12} className="text-[#FF4500]" />
              Agence Numérique & Technologique
            </span>
          </div>
        </div>

        {/* Main Headline & Brand Emphasis */}
        <h1 
          ref={headlineRef} 
          className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 uppercase leading-[1.05]"
        >
          Forgez votre
          <span className="block gradient-text mt-1">Succès Numérique.</span>
          <span className="block text-2xl sm:text-3xl md:text-4xl text-[#8892B0] font-normal tracking-[0.2em] mt-3">
            LION<span className="text-[#FFD700] font-bold">FORGE</span>.
          </span>
        </h1>

        {/* Description */}
        <p 
          ref={descRef} 
          className="text-base sm:text-lg md:text-xl text-[#F5F5F5]/85 max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
        >
          Nous concevons des expériences digitales, développons des solutions technologiques sur mesure et accompagnons les entreprises dans leur transformation numérique.
        </p>

        {/* Action CTAs */}
        <div 
          ref={ctaRef} 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto forge-btn-primary px-8 py-4 rounded-xl text-sm font-semibold tracking-wider uppercase inline-flex items-center justify-center gap-2 shadow-xl"
          >
            <span>Demander un devis</span>
            <ArrowRight size={16} />
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto forge-btn-secondary px-8 py-4 rounded-xl text-sm font-semibold tracking-wider uppercase inline-flex items-center justify-center gap-2"
          >
            <span>Découvrir nos expertises</span>
          </Link>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div 
        ref={scrollIndicatorRef}
        className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 z-20 pointer-events-auto text-center"
      >
        <button
          onClick={handleScrollToNext}
          className="flex flex-col items-center gap-1.5 text-xs tracking-[0.2em] uppercase text-[#8892B0] hover:text-[#FFD700] transition-colors group cursor-pointer"
          aria-label="Défiler vers la suite"
        >
          <span className="opacity-70 group-hover:opacity-100 transition-opacity">Explorer la Forge</span>
          <div className="w-5 h-8 rounded-full border border-[#FFD700]/30 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-[#FFD700] rounded-full animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
}
