import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ title, excerpt, date, image, slug, category, readTime }) => {
  return (
    <div className="group bg-lion-surface border border-lion-gold border-opacity-20 rounded-xl overflow-hidden hover:border-lion-gold hover:border-opacity-60 hover:shadow-lg hover:shadow-lion-gold hover:shadow-opacity-10 transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        {image ? (
          <Image 
            src={image} 
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-lion-dark flex items-center justify-center">
            <span className="text-5xl text-lion-gold text-opacity-30">📰</span>
          </div>
        )}
        
        {/* Badge catégorie */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-lion-gold text-lion-dark rounded-full text-xs font-bold">
            {category}
          </span>
        </div>
        
        {/* Temps de lecture */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-lion-dark bg-opacity-80 text-lion-light rounded-full text-xs border border-lion-gold border-opacity-30">
            {readTime}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="text-lion-gold text-sm mb-2">{date}</div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-lion-gold transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-lion-light text-opacity-70 mb-4 line-clamp-3">{excerpt}</p>
        <Link 
          href={`/blog/${slug}`}
          className="inline-flex items-center text-lion-electric hover:text-lion-gold transition-colors group/link"
        >
          <span>Lire l'article</span>
          <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;