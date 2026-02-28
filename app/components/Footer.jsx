import Link from "next/link";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-lion-dark border-t border-lion-gold/20 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lion-gold font-bold text-lg mb-4">LionForge</h3>
          <p className="text-lion-light text-sm">
            Forgez votre succès numérique avec des solutions technologiques sur mesure.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Liens rapides</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="text-lion-light hover:text-lion-gold">À propos</Link></li>
            <li><Link href="/services" className="text-lion-light hover:text-lion-gold">Services</Link></li>
            <li><Link href="/projects" className="text-lion-light hover:text-lion-gold">Projets</Link></li>
            <li><Link href="/contact" className="text-lion-light hover:text-lion-gold">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Légal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/mentions-legales" className="text-lion-light hover:text-lion-gold">Mentions légales</Link></li>
            <li><Link href="/politique-confidentialite" className="text-lion-light hover:text-lion-gold">Politique de confidentialité</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Suivez-nous</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-lion-light hover:text-lion-gold text-xl"><FaLinkedin /></a>
            <a href="#" className="text-lion-light hover:text-lion-gold text-xl"><FaTwitter /></a>
            <a href="#" className="text-lion-light hover:text-lion-gold text-xl"><FaGithub /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-lion-gold/10 mt-8 pt-8 text-center text-lion-light text-sm">
        © {new Date().getFullYear()} LionForge. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;