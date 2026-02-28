import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-lion-dark/95 backdrop-blur-sm border-b border-lion-gold/20 py-4 px-6 md:px-12 fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.svg" alt="LionForge" width={40} height={40} className="w-10 h-10" />
          <span className="text-2xl font-bold text-lion-gold">LIONFORGE</span>
        </Link>
        <div className="space-x-8 hidden md:flex">
          <NavLink href="/about">À propos</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/projects">Projets</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>
        <button className="md:hidden text-white">☰</button>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }) => (
  <Link href={href} className="text-white hover:text-lion-gold transition-colors duration-300">
    {children}
  </Link>
);

export default Navbar;