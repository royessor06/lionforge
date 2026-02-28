import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fond avec gradient subtil */}
      <div className="absolute inset-0 bg-gradient-to-br from-lion-dark via-lion-dark to-lion-electric/20"></div>
      <div className="relative z-10 max-w-4xl text-center px-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Forgez votre succès numérique avec <span className="text-lion-gold">LionForge</span>
        </h1>
        <p className="text-xl text-lion-light mb-10">
          Développement web & mobile, solutions sur mesure et innovation technologique.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-lion-gold text-lion-dark px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition transform hover:scale-105"
          >
            Demander un devis
          </Link>
          <Link
            href="/projects"
            className="border border-lion-gold text-lion-gold px-8 py-3 rounded-lg font-semibold hover:bg-lion-gold/10 transition transform hover:scale-105"
          >
            Voir nos projets
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;