"use client";

import ContactForm from "@/app/components/ContactForm";
import MotionWrapper from "@/app/components/MotionWrapper";
import { MapPin, Envelope, Phone, Clock } from "@phosphor-icons/react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-lion-dark text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        <MotionWrapper direction="scale" duration={0.8}>
          <h1 className="text-5xl md:text-6xl font-bold text-gradient text-center mb-6">
            Contactez-nous
          </h1>
        </MotionWrapper>
        
        <MotionWrapper direction="up" delay={0.2} distance={20}>
          <p className="text-xl text-lion-muted text-center max-w-3xl mx-auto mb-16">
            Vous avez un projet en tête ? Une question ? Nous sommes là pour vous répondre.
          </p>
        </MotionWrapper>

        {/* Cartes de contact - HAUTEUR FIXE */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <MotionWrapper delay={0.3} direction="zoom-out">
            <div className="bg-lion-surface border border-lion-gold/20 p-6 rounded-xl hover:border-lion-gold/60 hover:shadow-[0_0_25px_rgba(251,191,36,0.15)] transition-all duration-300 group text-center h-[220px] flex flex-col justify-center">
              <div className="w-16 h-16 bg-lion-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <MapPin size={32} weight="duotone" className="text-lion-gold" />
              </div>
              <h3 className="text-lg font-semibold text-lion-gold mb-2">Notre bureau</h3>
              <p className="text-lion-muted text-sm">
                Derrière le CEG Pahou<br />
                Pahou, Bénin
              </p>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.4} direction="zoom-out">
            <div className="bg-lion-surface border border-lion-gold/20 p-6 rounded-xl hover:border-lion-gold/60 hover:shadow-[0_0_25px_rgba(251,191,36,0.15)] transition-all duration-300 group text-center h-[220px] flex flex-col justify-center">
              <div className="w-16 h-16 bg-lion-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Envelope size={32} weight="duotone" className="text-lion-gold" />
              </div>
              <h3 className="text-lg font-semibold text-lion-gold mb-2">Email</h3>
              <p className="text-lion-muted text-sm">
                <a href="mailto:contact@lionforge.com" className="hover:text-lion-gold transition-colors duration-300">
                  contact@lionforge.com
                </a>
              </p>
              <p className="text-lion-muted text-xs mt-2">Réponse sous 24h</p>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.5} direction="zoom-out">
            <div className="bg-lion-surface border border-lion-gold/20 p-6 rounded-xl hover:border-lion-gold/60 hover:shadow-[0_0_25px_rgba(251,191,36,0.15)] transition-all duration-300 group text-center h-[220px] flex flex-col justify-center">
              <div className="w-16 h-16 bg-lion-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Phone size={32} weight="duotone" className="text-lion-gold" />
              </div>
              <h3 className="text-lg font-semibold text-lion-gold mb-2">Téléphone</h3>
              <p className="text-lion-muted text-sm">
                <a href="tel:+2290151229682" className="hover:text-lion-gold transition-colors duration-300">
                  +229 01 51 22 96 82
                </a>
              </p>
              <p className="text-lion-muted text-xs mt-2">Lun-Ven, 8h-18h</p>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.6} direction="zoom-out">
            <div className="bg-lion-surface border border-lion-gold/20 p-6 rounded-xl hover:border-lion-gold/60 hover:shadow-[0_0_25px_rgba(251,191,36,0.15)] transition-all duration-300 group text-center h-[220px] flex flex-col justify-center">
              <div className="w-16 h-16 bg-lion-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Clock size={32} weight="duotone" className="text-lion-gold" />
              </div>
              <h3 className="text-lg font-semibold text-lion-gold mb-2">Horaires</h3>
              <p className="text-lion-muted text-sm">
                Lundi - Vendredi<br />
                8h00 - 18h00
              </p>
            </div>
          </MotionWrapper>
        </div>

        {/* Formulaire - ESPACEMENT UNIFORME AVEC LES CARTES */}
        <MotionWrapper delay={0.7} direction="slide-up">
          <div className="bg-lion-surface border border-lion-gold/20 p-10 rounded-2xl max-w-4xl mx-auto hover:border-lion-gold/60 transition-all duration-300 mb-20">
            <h2 className="text-3xl font-bold text-gradient mb-8 text-center">
              Envoyez-nous un message
            </h2>
            <ContactForm />
          </div>
        </MotionWrapper>

        {/* Carte - MÊME ESPACEMENT QUE LE RESTE */}
        <MotionWrapper delay={0.9} direction="fade">
          <div className="h-[400px] rounded-xl overflow-hidden border border-lion-gold/20 hover:border-lion-gold/60 transition-all duration-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63482.62571275139!2d2.17955845!3d6.37846765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10233b5c2a3b9b9f%3A0x7f3b7e5b5e5b5e5b!2sPahou%2C%20B%C3%A9nin!5e0!3m2!1sfr!2sfr!4v1234567890123!5m2!1sfr!2sfr"
              className="w-full h-full"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </MotionWrapper>
      </div>
    </div>
  );
}