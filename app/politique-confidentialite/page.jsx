"use client";

import Link from "next/link";
import MotionWrapper from "@/app/components/MotionWrapper";
import { ArrowLeft } from "@phosphor-icons/react";

export default function PolitiqueConfidentialite() {
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
              Politique de Confidentialité
            </h1>
          </MotionWrapper>

          <MotionWrapper direction="up" delay={0.2} duration={0.8} className="space-y-8">
            {/* Introduction */}
            <section className="bg-lion-surface rounded-xl p-8 border border-lion-gold border-opacity-20">
              <h2 className="text-2xl font-bold text-lion-gold mb-4">1. Introduction</h2>
              <p className="text-lion-light">
                LionForge prend la protection de vos données personnelles très au sérieux. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données personnelles.
              </p>
            </section>

            {/* Données collectées */}
            <section className="bg-lion-surface rounded-xl p-8 border border-lion-gold border-opacity-20">
              <h2 className="text-2xl font-bold text-lion-gold mb-4">2. Données Collectées</h2>
              <p className="text-lion-light mb-4">
                Nous collectons les données personnelles suivantes:
              </p>
              <ul className="text-lion-light space-y-2 ml-4">
                <li><strong>•</strong> Votre nom et prénom</li>
                <li><strong>•</strong> Votre adresse e-mail</li>
                <li><strong>•</strong> Votre numéro de téléphone</li>
                <li><strong>•</strong> Votre message de contact</li>
                <li><strong>•</strong> Données de navigation (cookies, adresse IP)</li>
              </ul>
            </section>

            {/* Utilisation des données */}
            <section className="bg-lion-surface rounded-xl p-8 border border-lion-gold border-opacity-20">
              <h2 className="text-2xl font-bold text-lion-gold mb-4">3. Utilisation de vos Données</h2>
              <p className="text-lion-light mb-4">
                Vos données sont utilisées pour:
              </p>
              <ul className="text-lion-light space-y-2 ml-4">
                <li><strong>•</strong> Répondre à vos messages de contact</li>
                <li><strong>•</strong> Améliorer nos services et le site web</li>
                <li><strong>•</strong> Vous envoyer des informations pertinentes</li>
                <li><strong>•</strong> Respecter nos obligations légales</li>
              </ul>
            </section>

            {/* Protection des données */}
            <section className="bg-lion-surface rounded-xl p-8 border border-lion-gold border-opacity-20">
              <h2 className="text-2xl font-bold text-lion-gold mb-4">4. Protection de vos Données</h2>
              <p className="text-lion-light mb-4">
                Nous mettons en place des mesures de sécurité pour protéger vos données personnelles contre l'accès non autorisé et les abus. Ces mesures incluent:
              </p>
              <ul className="text-lion-light space-y-2 ml-4">
                <li><strong>•</strong> Chiffrement SSL/TLS pour les connexions</li>
                <li><strong>•</strong> Authentification sécurisée</li>
                <li><strong>•</strong> Accès limité aux données personnelles</li>
                <li><strong>•</strong> Sauvegardes régulières</li>
              </ul>
            </section>

            {/* Partage des données */}
            <section className="bg-lion-surface rounded-xl p-8 border border-lion-gold border-opacity-20">
              <h2 className="text-2xl font-bold text-lion-gold mb-4">5. Partage de vos Données</h2>
              <p className="text-lion-light">
                Nous ne partageons vos données personnelles que lorsque c'est nécessaire:
              </p>
              <ul className="text-lion-light space-y-2 ml-4 mt-4">
                <li><strong>•</strong> Avec nos partenaires de service qui nous aident à opérer le site</li>
                <li><strong>•</strong> Lorsque la loi l'exige</li>
                <li><strong>•</strong> En cas de fusion ou acquisition</li>
              </ul>
            </section>

            {/* Cookies */}
            <section className="bg-lion-surface rounded-xl p-8 border border-lion-gold border-opacity-20">
              <h2 className="text-2xl font-bold text-lion-gold mb-4">6. Utilisation des Cookies</h2>
              <p className="text-lion-light mb-4">
                Nous utilisons des cookies pour améliorer votre expérience sur le site. Vous pouvez désactiver les cookies dans les paramètres de votre navigateur.
              </p>
              <p className="text-lion-light">
                Les cookies utilisés incluent:
              </p>
              <ul className="text-lion-light space-y-2 ml-4 mt-4">
                <li><strong>•</strong> Cookies de session pour votre navigation</li>
                <li><strong>•</strong> Cookies analytiques pour comprendre comment vous utilisez le site</li>
                <li><strong>•</strong> Cookies de préférence pour mémoriser vos choix</li>
              </ul>
            </section>

            {/* Vos droits */}
            <section className="bg-lion-surface rounded-xl p-8 border border-lion-gold border-opacity-20">
              <h2 className="text-2xl font-bold text-lion-gold mb-4">7. Vos Droits</h2>
              <p className="text-lion-light mb-4">
                Vous disposez des droits suivants concernant vos données personnelles:
              </p>
              <ul className="text-lion-light space-y-2 ml-4">
                <li><strong>•</strong> Droit d'accès à vos données</li>
                <li><strong>•</strong> Droit de rectification de vos données</li>
                <li><strong>•</strong> Droit à l'oubli (suppression)</li>
                <li><strong>•</strong> Droit à la portabilité des données</li>
                <li><strong>•</strong> Droit d'opposition au traitement</li>
              </ul>
              <p className="text-lion-light mt-4">
                Pour exercer ces droits, contactez-nous à: <Link href="mailto:contact@lionforge.vercel.app" className="text-lion-electric hover:text-lion-gold">contact@lionforge.vercel.app</Link>
              </p>
            </section>

            {/* Retention des données */}
            <section className="bg-lion-surface rounded-xl p-8 border border-lion-gold border-opacity-20">
              <h2 className="text-2xl font-bold text-lion-gold mb-4">8. Rétention des Données</h2>
              <p className="text-lion-light">
                Nous conservons vos données personnelles uniquement le temps nécessaire pour les finalités pour lesquelles elles ont été collectées, sauf si une durée de rétention plus longue est requise par la loi.
              </p>
            </section>

            {/* Contact */}
            <section className="bg-lion-surface rounded-xl p-8 border border-lion-gold border-opacity-20">
              <h2 className="text-2xl font-bold text-lion-gold mb-4">9. Contact</h2>
              <p className="text-lion-light mb-2">
                Pour toute question concernant cette politique de confidentialité, veuillez nous contacter:
              </p>
              <p className="text-lion-light">
                Email: <Link href="mailto:contact@lionforge.vercel.app" className="text-lion-electric hover:text-lion-gold">contact@lionforge.vercel.app</Link>
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
