"use client";

import ContactForm from "@/app/components/ContactForm";
import MotionWrapper from "@/app/components/MotionWrapper";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-lion-dark text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête avec animation */}
        <MotionWrapper direction="scale" duration={0.8} blur={true}>
          <h1 className="text-5xl md:text-6xl font-bold text-lion-gold text-center mb-6">
            Contactez-nous
          </h1>
        </MotionWrapper>
        
        <MotionWrapper direction="up" delay={0.2} distance={20}>
          <p className="text-xl text-lion-light text-center max-w-3xl mx-auto mb-12">
            Vous avez un projet en tête ? Une question ? Nous sommes là pour vous répondre.
          </p>
        </MotionWrapper>

        {/* Cartes de contact avec animations en cascade */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Carte 1 : Adresse */}
          <MotionWrapper delay={0.3} direction="zoom-out" duration={0.6}>
            <div className="bg-gradient-to-br from-black/40 to-lion-dark/60 p-6 rounded-xl border border-lion-gold/10 hover:border-lion-gold/30 transition-all duration-500 group text-center h-full">
              <div className="w-16 h-16 bg-lion-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <FaMapMarkerAlt className="text-lion-gold text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-lion-gold transition-colors">Notre bureau</h3>
              <p className="text-lion-light">
                Derrière le CEG Pahou<br />
                Ouidah, Benin
              </p>
            </div>
          </MotionWrapper>

          {/* Carte 2 : Email */}
          <MotionWrapper delay={0.4} direction="zoom-out" duration={0.6}>
            <div className="bg-gradient-to-br from-black/40 to-lion-dark/60 p-6 rounded-xl border border-lion-gold/10 hover:border-lion-gold/30 transition-all duration-500 group text-center h-full">
              <div className="w-16 h-16 bg-lion-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <FaEnvelope className="text-lion-gold text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-lion-gold transition-colors">Email</h3>
              <p className="text-lion-light">
                <a href="mailto:contact@lionforge.com" className="hover:text-lion-gold transition-colors">
                  contact@lionforge.com
                </a>
              </p>
              <p className="text-lion-light text-sm mt-2">Réponse sous 24h</p>
            </div>
          </MotionWrapper>

          {/* Carte 3 : Téléphone */}
          <MotionWrapper delay={0.5} direction="zoom-out" duration={0.6}>
            <div className="bg-gradient-to-br from-black/40 to-lion-dark/60 p-6 rounded-xl border border-lion-gold/10 hover:border-lion-gold/30 transition-all duration-500 group text-center h-full">
              <div className="w-16 h-16 bg-lion-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <FaPhone className="text-lion-gold text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-lion-gold transition-colors">Téléphone</h3>
              <p className="text-lion-light">
                <a href="tel:+2290147033990" className="hover:text-lion-gold transition-colors">
                  +229 01 47 03 39 90
                </a>
              </p>
              <p className="text-lion-light text-sm mt-2">Lun-Ven, 8h-18h</p>
            </div>
          </MotionWrapper>

          {/* Carte 4 : Horaires */}
          <MotionWrapper delay={0.6} direction="zoom-out" duration={0.6}>
            <div className="bg-gradient-to-br from-black/40 to-lion-dark/60 p-6 rounded-xl border border-lion-gold/10 hover:border-lion-gold/30 transition-all duration-500 group text-center h-full">
              <div className="w-16 h-16 bg-lion-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <FaClock className="text-lion-gold text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-lion-gold transition-colors">Horaires</h3>
              <p className="text-lion-light">
                Lundi - Vendredi<br />
                8h00 - 18h00
              </p>
            </div>
          </MotionWrapper>
        </div>

        {/* Formulaire de contact avec animation */}
        <MotionWrapper delay={0.7} direction="slide-up-scale" distance={40} duration={0.7}>
          <div className="bg-gradient-to-br from-black/40 to-lion-dark/60 p-8 rounded-xl border border-lion-gold/10 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-lion-gold mb-6 text-center">
              Envoyez-nous un message
            </h2>
            
            {/* Ligne décorative */}
            <div className="w-24 h-1 bg-lion-gold/30 mx-auto mb-8 rounded-full"></div>
            
            <ContactForm />
          </div>
        </MotionWrapper>

        {/* Carte interactive avec animation */}
        <MotionWrapper delay={0.9} direction="up" distance={30}>
          <div className="mt-12 h-80 bg-gradient-to-br from-lion-gold/5 to-lion-electric/5 rounded-xl border border-lion-gold/20 flex items-center justify-center text-lion-light group hover:border-lion-gold/40 transition-all duration-500">
            <div className="text-center">
              <span className="text-6xl mb-4 block group-hover:scale-110 transition-transform">🗺️</span>
              <p className="text-xl">Carte interactive (à venir)</p>
              <p className="text-sm text-lion-light/60 mt-2">Bientôt, vous pourrez nous localiser en temps réel</p>
            </div>
          </div>
        </MotionWrapper>

        {/* Réseaux sociaux */}
        <MotionWrapper delay={1.0} direction="fade">
          <div className="mt-12 text-center">
            <p className="text-lion-light mb-4">Suivez-nous sur les réseaux</p>
            <div className="flex justify-center gap-4">
              {["LinkedIn", "Twitter", "GitHub", "Instagram"].map((social, index) => (
                <MotionWrapper key={social} delay={1.1 + index * 0.1} direction="zoom-out" duration={0.4}>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-lion-gold/10 rounded-full flex items-center justify-center hover:bg-lion-gold/20 hover:scale-110 transition-all duration-300 border border-lion-gold/20 hover:border-lion-gold/50"
                  >
                    <span className="text-lion-gold text-xl">{social[0]}</span>
                  </a>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </MotionWrapper>
      </div>
    </div>
  );
}