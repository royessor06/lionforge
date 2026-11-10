"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight, Flame } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const servicesList = [
    { label: "Développement Web", href: "/services/web-development" },
    { label: "Applications Mobiles", href: "/services/mobile-apps" },
    { label: "Solutions Sur Mesure", href: "/services/custom-solutions" },
    { label: "Maintenance & Évolution", href: "/services/maintenance" },
  ];

  const quickLinks = [
    { label: "À propos de l'agence", href: "/about" },
    { label: "Portfolio & Réalisations", href: "/projects" },
    { label: "Solutions Technologiques", href: "/#solutions" },
    { label: "Blog & Publications", href: "/blog" },
    { label: "Demander un devis", href: "/contact" },
  ];

  return (
    <footer className="relative bg-[#050505] border-t border-[#FFD700]/15 overflow-hidden">
      {/* Subtle Forge Ambient Background */}
      <div className="absolute inset-0 pointer-events-none opacity-10 [background-image:linear-gradient(rgba(255,215,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.1)_1px,transparent_1px)] [background-size:60px_60px]" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#FF4500]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Column 1 & 2: Brand & Identity */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1A1C23] to-[#0A0B0E] border border-[#FFD700]/40 flex items-center justify-center shadow-lg group-hover:border-[#FFD700] transition-colors">
                <Image
                  src="/logo1.svg"
                  alt="LionForge"
                  width={28}
                  height={28}
                  className="w-7 h-7 object-contain"
                />
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight text-white">
                LION<span className="text-[#FFD700]">FORGE</span>
              </span>
            </Link>

            <p className="text-sm text-[#8892B0] max-w-md leading-relaxed font-light">
              La Forge Numérique d'élite. Nous façonnons les solutions digitales de demain : applications web performantes, plateformes mobiles réactives et systèmes logiciels sur mesure pour entreprises ambitieuses.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101114] border border-[#FFD700]/25 text-xs text-[#FFD700]">
              <span className="w-2 h-2 rounded-full bg-[#FF4500] animate-pulse" />
              <span className="font-medium tracking-wide">WE FORGE THE FUTURE.</span>
            </div>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-heading text-xs uppercase tracking-[0.2em] font-semibold text-[#FFD700] mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {servicesList.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-[#8892B0] hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{service.label}</span>
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#FFD700]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div>
            <h4 className="font-heading text-xs uppercase tracking-[0.2em] font-semibold text-[#FFD700] mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#8892B0] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact Direct */}
          <div>
            <h4 className="font-heading text-xs uppercase tracking-[0.2em] font-semibold text-[#FFD700] mb-5">
              Contact Direct
            </h4>
            <div className="space-y-3.5 text-sm">
              <a
                href="mailto:contact@lionforge.com"
                className="flex items-center gap-2.5 text-[#8892B0] hover:text-[#FFD700] transition-colors"
              >
                <Mail size={16} className="text-[#FFD700] shrink-0" />
                <span>contact@lionforge.com</span>
              </a>

              <a
                href="tel:+2290151229682"
                className="flex items-center gap-2.5 text-[#8892B0] hover:text-[#FFD700] transition-colors"
              >
                <Phone size={16} className="text-[#FFD700] shrink-0" />
                <span>+229 01 51 22 96 82</span>
              </a>

              <div className="flex items-center gap-2.5 text-[#8892B0]">
                <MapPin size={16} className="text-[#FF4500] shrink-0" />
                <span>Cotonou, Bénin & International</span>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Signature from Master Brief */}
        <div className="py-8 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <span className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight">
              LION<span className="text-[#FFD700]">FORGE</span>.
            </span>
            <span className="block text-xs uppercase tracking-[0.3em] text-[#8892B0] mt-1 font-mono">
              WE FORGE THE FUTURE.
            </span>
          </div>

          <p className="text-xs text-[#8892B0]/80 font-light max-w-sm">
            Architecture logicielle, développement web & mobile, et ingénierie de solutions numériques sur mesure.
          </p>
        </div>

        {/* Bottom Bar & Legal Links */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8892B0]">
          <p>
            © {currentYear} LIONFORGE. Tous droits réservés.
          </p>

          <div className="flex items-center space-x-6">
            <Link href="/mentions-legales" className="hover:text-[#FFD700] transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-[#FFD700] transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
