import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ title, excerpt, date, image, slug }) => {
  return (
    <div className="bg-lion-dark/50 border border-lion-gold/20 rounded-xl overflow-hidden hover:border-lion-gold transition-all duration-300">
      <div className="relative h-48 bg-gray-800">
        {image ? (
          <Image src={image} alt={title} fill className="object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-lion-light">Image</div>
        )}
      </div>
      <div className="p-6">
        <p className="text-lion-gold text-sm mb-2">{date}</p>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-lion-light mb-4">{excerpt}</p>
        <Link href={`/blog/${slug}`} className="text-lion-electric hover:underline inline-flex items-center">
          Lire l'article
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;