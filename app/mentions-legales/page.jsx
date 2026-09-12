"use client";

import Link from "next/link";
import MotionWrapper from "@/app/components/MotionWrapper";
import { ArrowLeft } from "@phosphor-icons/react";

export default function MentionsLegales() {
  return (
    <>
      <div className="relative min-h-screen bg-linear-to-b from-lion-dark to-black pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <MotionWrapper direction="fade" duration={0.8}>
            <Link href="/" className="inline-flex items-center gap-2 text-lion-gold hover:text-lion-electric transition mb-8">
              <ArrowLeft size={20} />
              <span>Retour à l'accueil</span>
            </Link>
          </MotionWrapper>

          <MotionWrapper direction="up" delay={0.1} duration={0.8}>
            <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-12">
              Mentions Légales
            </h1>
          </MotionWrapper>

          <MotionWrapper direction="up" delay={0.2} duration={0.8} className="space-y-8">
            {/* Informations de l'entreprise */}
            <section className="bg-lion-surface rounded-xl p-8 border border-lion-gold border-opacity-20">
              <h2 className="text-2xl font-bold text-lion-gold mb-4">Informations de l'entreprise</h2>
              <p className="text-lion-light mb-4">
                <strong>Dénomination:</strong> LionForge SARL
              </p>
              <p className="text-lion-light mb-4">
                <strong>Adresse:</strong> Cotonou, Bénin
              </p>
              <p className="text-lion-light mb-4">
                <strong>Représentant:</strong> Voir profil de contact
              </p>
              <p className="text-lion-light">
                <strong>Contact:</strong> contact@lionforge.vercel.app
              </p>
            </section>

            {/* Directeur de la publication */}
            <section className="bg-lion-surface rounded-xl p-8 border border-lion-gold border-opacity-20">
              <h2 className="text-2xl font-bold text-lion-gold mb-4">Directeur de la publication</h2>
              <p className="text-lion-light">
                Le directeur de la publication est LionForge et son équipe de développement.
              </p>
            </section>

            {/* Hébergement */}
            <section className="bg-lion-surface rounded-xl p-8 border border-lion-gold border-opacity-20">
              <h2 className="text-2xl font-bold text-lion-gold mb-4">Hébergement</h2>
              <p className="text-lion-light mb-2">
                <strong>Fournisseur d'hébergement:</strong> Vercel
              </p>
              <p className="text-lion-light">
                Le site est hébergé sur les serveurs de Vercel, dans les conditions acceptées par le client.
              </p>
            </section>

            {/* Propriété intellectuelle */}
            <section className="bg-lion-surface rounded-xl p-8 border border-lion-gold border-opacity-20">
              <h2 className="text-2xl font-bold text-lion-gold mb-4">Propriété Intellectuelle</h2>
              <p className="text-lion-light mb-4">
                Tous les contenus présents sur ce site (textes, images, logos, marques) sont la propriété exclusive de LionForge ou de ses partenaires.
              </p>
              <p className="text-lion-light">
                Toute reproduction, représentation, modification, adaptation ou exploitation sans autorisation préalable est interdite.
              </p>
            </section>

            {/* Responsabilité */}
            <section className="bg-lion-surface rounded-xl p-8 border border-lion-gold border-opacity-20">
              <h2 className="text-2xl font-bold text-lion-gold mb-4">Limitation de responsabilité</h2>
              <p className="text-lion-light">
                LionForge n'est responsable ni de l'indisponibilité du site, ni des services accessibles via le site, ni de tout dommage qui pourrait y être lié.
              </p>
            </section>

            {/* Données personnelles */}
            <section className="bg-lion-surface rounded-xl p-8 border border-lion-gold border-opacity-20">
              <h2 className="text-2xl font-bold text-lion-gold mb-4">Données Personnelles</h2>
              <p className="text-lion-light mb-4">
                Les données personnelles collectées sont traitées conformément à la <Link href="/politique-confidentialite" className="text-lion-electric hover:text-lion-gold transition">politique de confidentialité</Link> de ce site.
              </p>
              <p className="text-lion-light">
                Vous disposez d'un droit d'accès, de modification, et de suppression de vos données personnelles.
              </p>
            </section>

            {/* Modifications */}
            <section className="bg-lion-surface rounded-xl p-8 border border-lion-gold border-opacity-20">
              <h2 className="text-2xl font-bold text-lion-gold mb-4">Modifications</h2>
              <p className="text-lion-light">
                LionForge se réserve le droit de modifier ces mentions légales à tout moment sans préavis.
              </p>
            </section>

            {/* Date de mise à jour */}
            <p className="text-lion-muted text-sm">
              Dernière mise à jour: Avril 2026
            </p>
          </MotionWrapper>
        </div>
      </div>
    </>
  );
}
