import Link from "next/link";

const ServiceCard = ({ title, description, slug, icon }) => {
  // icon peut être un emoji ou un composant d'icône
  return (
    <div className="bg-lion-dark/50 backdrop-blur-sm border border-lion-gold/20 rounded-xl p-6 hover:border-lion-gold hover:shadow-lg hover:shadow-lion-gold/10 transition-all duration-300 group">
      <div className="text-4xl mb-4">{icon || '🔧'}</div>
      <h3 className="text-2xl font-bold text-lion-gold mb-3">{title}</h3>
      <p className="text-lion-light mb-4">{description}</p>
      <Link href={`/services/${slug}`} className="text-lion-electric hover:underline inline-flex items-center">
        En savoir plus
        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
};

export default ServiceCard;