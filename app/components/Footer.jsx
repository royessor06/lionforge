"use client";

import Link from "next/link";
import Image from "next/image";
import { LinkedinLogo, TwitterLogo, GithubLogo } from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="bg-lion-dark border-t border-lion-gold border-opacity-20 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo et description */}
          <div className="col-span-1">
            <Image src="/logo.svg" alt="LionForge" width={50} height={50} className="mb-4" />
            <p className="text-lion-light text-opacity-70 text-sm">
              Forgez votre succès numérique avec des solutions technologiques sur mesure.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-lion-gold font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-lion-light text-opacity-70 hover:text-lion-gold transition">À propos</Link></li>
              <li><Link href="/services" className="text-lion-light text-opacity-70 hover:text-lion-gold transition">Services</Link></li>
              <li><Link href="/projects" className="text-lion-light text-opacity-70 hover:text-lion-gold transition">Projets</Link></li>
              <li><Link href="/contact" className="text-lion-light text-opacity-70 hover:text-lion-gold transition">Contact</Link></li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className="text-lion-gold font-semibold mb-4">Légal</h4>
            <ul className="space-y-2">
              <li><Link href="/mentions-legales" className="text-lion-light text-opacity-70 hover:text-lion-gold transition">Mentions légales</Link></li>
              <li><Link href="/politique-confidentialite" className="text-lion-light text-opacity-70 hover:text-lion-gold transition">Politique de confidentialité</Link></li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h4 className="text-lion-gold font-semibold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-lion-light text-opacity-70 hover:text-lion-gold transition">
                <LinkedinLogo size={24} />
              </a>
              <a href="#" className="text-lion-light text-opacity-70 hover:text-lion-gold transition">
                <TwitterLogo size={24} />
              </a>
              <a href="#" className="text-lion-light text-opacity-70 hover:text-lion-gold transition">
                <GithubLogo size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-lion-gold border-opacity-20 pt-8 text-center">
          <p className="text-lion-light text-opacity-50 text-sm">
            © {new Date().getFullYear()} LionForge. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;