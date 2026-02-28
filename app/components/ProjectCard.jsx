import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ title, category, image, slug }) => {
  return (
    <div className="bg-lion-dark/50 border border-lion-gold/20 rounded-xl overflow-hidden hover:border-lion-gold hover:shadow-xl hover:shadow-lion-gold/10 transition-all duration-300 group">
      {/* Conteneur avec ratio fixe 16/9 */}
      <div className="relative w-full aspect-video bg-gray-800 overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-110 transition duration-700"
            priority={false}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-lion-dark to-lion-electric/20">
            <span className="text-lion-gold text-4xl">🖼️</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <span className="text-lion-gold text-sm font-medium px-3 py-1 bg-lion-gold/10 rounded-full">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-lion-gold transition">
          {title}
        </h3>
        <Link 
          href={`/projects/${slug}`} 
          className="text-lion-electric hover:text-lion-gold transition inline-flex items-center"
        >
          Voir l'étude de cas
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;