"use client";

import ContactForm from "@/app/components/ContactForm";
import { MapPin, Mail, Phone, Clock, Flame } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F3EE] pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-10 [background-image:linear-gradient(rgba(255,215,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.1)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="absolute top-24 left-1/4 w-[500px] h-[500px] bg-[#FF4500]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-[#101114] border border-[#FFD700]/30 text-xs uppercase tracking-[0.25em] font-semibold text-[#FFD700] inline-flex items-center gap-2 mb-4">
            <Flame size={14} className="text-[#FF4500]" />
            Démarrer la Forge
          </span>

          {/* Master Brief Headline */}
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white uppercase max-w-4xl mx-auto mb-6 leading-tight">
            Votre prochain projet
            <span className="block gradient-text mt-1">Commence ici.</span>
          </h1>

          {/* Master Brief Supporting Copy */}
          <p className="text-base sm:text-lg text-[#8892B0] max-w-2xl mx-auto font-light leading-relaxed">
            Vous avez une idée, un besoin ou un projet à concrétiser ? Parlons-en et imaginons ensemble la solution adaptée à vos ambitions.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="forge-glass-card p-6 rounded-2xl border border-white/10 text-center">
            <div className="w-12 h-12 rounded-xl bg-[#1A1C23] border border-[#FFD700]/30 flex items-center justify-center mx-auto mb-4 text-[#FFD700]">
              <MapPin size={22} />
            </div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-1">Bureau</h3>
            <p className="text-xs text-[#8892B0] leading-relaxed">
              Cotonou & Pahou<br />
              Bénin & International
            </p>
          </div>

          <div className="forge-glass-card p-6 rounded-2xl border border-white/10 text-center">
            <div className="w-12 h-12 rounded-xl bg-[#1A1C23] border border-[#FFD700]/30 flex items-center justify-center mx-auto mb-4 text-[#FFD700]">
              <Mail size={22} />
            </div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-1">Email</h3>
            <a href="mailto:contact@lionforge.com" className="text-xs text-[#8892B0] hover:text-[#FFD700] transition-colors block">
              contact@lionforge.com
            </a>
            <span className="text-[10px] text-[#8892B0]/60 mt-1 block">Réponse sous 24h</span>
          </div>

          <div className="forge-glass-card p-6 rounded-2xl border border-white/10 text-center">
            <div className="w-12 h-12 rounded-xl bg-[#1A1C23] border border-[#FFD700]/30 flex items-center justify-center mx-auto mb-4 text-[#FFD700]">
              <Phone size={22} />
            </div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-1">Téléphone</h3>
            <a href="tel:+2290151229682" className="text-xs text-[#8892B0] hover:text-[#FFD700] transition-colors block">
              +229 01 51 22 96 82
            </a>
            <span className="text-[10px] text-[#8892B0]/60 mt-1 block">Lun - Ven, 8h - 18h</span>
          </div>

          <div className="forge-glass-card p-6 rounded-2xl border border-white/10 text-center">
            <div className="w-12 h-12 rounded-xl bg-[#1A1C23] border border-[#FFD700]/30 flex items-center justify-center mx-auto mb-4 text-[#FFD700]">
              <Clock size={22} />
            </div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-1">Disponibilité</h3>
            <p className="text-xs text-[#8892B0] leading-relaxed">
              Support continu 24/7<br />
              pour nos clients sous contrat
            </p>
          </div>
        </div>

        {/* High-conversion Form */}
        <div className="forge-glass-card rounded-3xl p-8 sm:p-12 border border-[#FFD700]/25 max-w-4xl mx-auto shadow-2xl">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}