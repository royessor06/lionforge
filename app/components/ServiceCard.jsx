import Link from "next/link";

const ServiceCard = ({ title, description, slug, icon }) => {
  return (
    <div className="group bg-lion-surface border border-lion-gold border-opacity-20 rounded-xl p-6 hover:border-lion-gold hover:border-opacity-60 hover:shadow-lg hover:shadow-lion-gold hover:shadow-opacity-10 transition-all duration-300">
      <div className="text-4xl mb-4 text-lion-gold group-hover:text-lion-electric transition-colors">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-lion-gold transition-colors">
        {title}
      </h3>
      <p className="text-lion-light text-opacity-70 mb-4">
        {description}
      </p>
      <Link 
        href={`/services/${slug}`} 
        className="inline-flex items-center text-lion-electric hover:text-lion-gold transition-colors group/link"
      >
        <span>En savoir plus</span>
        <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
};

export default ServiceCard;