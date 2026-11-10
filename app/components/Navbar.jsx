"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Flame } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/about", label: "À propos" },
    { href: "/services", label: "Services" },
    { href: "/#solutions", label: "Solutions" },
    { href: "/projects", label: "Projets" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav 
        className={`w-full transition-all duration-500 ${
          scrolled 
            ? "bg-[#050505]/85 backdrop-blur-xl border-b border-[#FFD700]/15 py-3 shadow-2xl" 
            : "bg-transparent py-5"
        }`}
        role="navigation"
        aria-label="Navigation principale"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700] rounded-lg"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#1A1C23] to-[#0A0B0E] border border-[#FFD700]/30 flex items-center justify-center shadow-lg group-hover:border-[#FFD700] transition-colors overflow-hidden">
              <div className="absolute inset-0 bg-[#FFD700]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Image 
                src="/logo1.svg" 
                alt="LionForge" 
                width={28} 
                height={28}
                className="w-7 h-7 object-contain group-hover:scale-105 transition-transform"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg sm:text-xl tracking-tight text-white">
                LION<span className="text-[#FFD700]">FORGE</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#8892B0] -mt-1 hidden sm:block">
                Digital Forge
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-xs lg:text-sm font-medium transition-all duration-200 relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700] ${
                    isActive 
                      ? "text-[#FFD700] bg-white/[0.04]" 
                      : "text-[#8892B0] hover:text-[#F5F3EE] hover:bg-white/[0.02]"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className={`absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-[#FFD700] to-[#FF4500] rounded-full transition-transform duration-300 origin-left ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`} />
                </Link>
              );
            })}
          </div>

          {/* Right Action Button (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="forge-btn-primary px-4 lg:px-5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-1.5 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700]"
            >
              <span>Parlons de votre projet</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 p-2 rounded-lg bg-[#101114] border border-[#FFD700]/25 text-[#FFD700] hover:bg-[#15171C] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700]"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-[#050505]/95 backdrop-blur-2xl z-40 md:hidden flex flex-col justify-between p-8 pt-28"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-heading font-bold text-white hover:text-[#FFD700] transition-colors py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ArrowUpRight size={20} className="text-[#8892B0]" />
              </Link>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full forge-btn-primary py-3.5 rounded-xl text-center text-sm font-semibold uppercase tracking-wider block"
            >
              Parlons de votre projet
            </Link>
            <p className="text-center text-xs text-[#8892B0] mt-4 font-mono">
              LIONFORGE — THE DIGITAL FORGE
            </p>
          </div>
        </div>
      )}
    </header>
  );
}