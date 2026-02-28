import BlogCard from "@/app/components/BlogCard";
import MotionWrapper from "@/app/components/MotionWrapper";
import SearchBar from "@/app/components/SearchBar"; // 👈 IMPORT MANQUANT !

const blogPosts = [
  {
    title: "Les tendances du développement web en 2025",
    excerpt: "Découvrez les frameworks, outils et pratiques qui façonneront le web cette année.",
    date: "12 mars 2025",
    image: null,
    slug: "tendances-dev-web-2025",
    category: "Développement",
    readTime: "5 min",
  },
  {
    title: "Comment choisir entre natif et cross-platform ?",
    excerpt: "Un guide pour vous aider à décider quelle approche adopter pour votre application mobile.",
    date: "5 février 2025",
    image: null,
    slug: "natif-vs-cross-platform",
    category: "Mobile",
    readTime: "7 min",
  },
  {
    title: "L'IA au service de l'expérience utilisateur",
    excerpt: "Comment intégrer l'intelligence artificielle pour améliorer l'UX de vos applications.",
    date: "20 janvier 2025",
    image: null,
    slug: "ia-ux",
    category: "IA",
    readTime: "6 min",
  },
  {
    title: "Sécuriser votre application web : bonnes pratiques",
    excerpt: "Les mesures essentielles à mettre en place pour protéger vos données et vos utilisateurs.",
    date: "8 décembre 2024",
    image: null,
    slug: "securite-app-web",
    category: "Sécurité",
    readTime: "8 min",
  },
  {
    title: "Next.js 15 : Les nouveautés à connaître",
    excerpt: "Découvrez les dernières fonctionnalités du framework React préféré des développeurs.",
    date: "15 novembre 2024",
    image: null,
    slug: "nextjs-15-nouveautes",
    category: "Développement",
    readTime: "4 min",
  },
  {
    title: "Optimisation des performances web",
    excerpt: "Techniques et outils pour rendre vos sites plus rapides et améliorer le SEO.",
    date: "22 octobre 2024",
    image: null,
    slug: "optimisation-performances-web",
    category: "Performance",
    readTime: "6 min",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-lion-dark text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête avec animation */}
        <MotionWrapper direction="scale" duration={0.8} blur={true}>
          <h1 className="text-5xl md:text-6xl font-bold text-lion-gold text-center mb-6">
            Blog
          </h1>
        </MotionWrapper>
        
        <MotionWrapper direction="up" delay={0.2} distance={20}>
          <p className="text-xl text-lion-light text-center max-w-3xl mx-auto mb-12">
            Actualités, conseils et réflexions sur le développement et la technologie.
          </p>
        </MotionWrapper>

        {/* Barre de recherche */}
        <MotionWrapper delay={0.3}>
          <SearchBar posts={blogPosts} />
        </MotionWrapper>

        {/* Grille des articles avec animations en cascade */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <MotionWrapper 
              key={post.slug} 
              delay={0.4 + index * 0.1}
              direction="slide-up-scale"
              distance={40}
              duration={0.6}
            >
              <div className="group bg-lion-dark/50 border border-lion-gold/20 rounded-2xl overflow-hidden hover:border-lion-gold hover:shadow-2xl hover:shadow-lion-gold/20 transition-all duration-500 h-full">
                <div className="relative h-48 bg-gradient-to-br from-lion-gold/10 to-lion-electric/10 overflow-hidden">
                  {post.image ? (
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-6xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        📰
                      </span>
                    </div>
                  )}
                  
                  {/* Badge catégorie */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-lion-gold/20 backdrop-blur-sm text-lion-gold rounded-full text-xs font-medium border border-lion-gold/30">
                    {post.category}
                  </div>
                  
                  {/* Temps de lecture */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm text-lion-light rounded-full text-xs">
                    {post.readTime}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="text-lion-gold text-sm mb-2">{post.date}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-lion-gold transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-lion-light mb-4 line-clamp-3">{post.excerpt}</p>
                  <a 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-lion-electric hover:text-lion-gold transition-colors group/link"
                  >
                    <span>Lire l'article</span>
                    <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>

        {/* Pagination */}
        <MotionWrapper delay={0.9} direction="up" distance={30}>
          <div className="flex justify-center gap-2 mt-12">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`w-10 h-10 rounded-lg border transition-all duration-300 ${
                  page === 1
                    ? "bg-lion-gold text-lion-dark border-lion-gold"
                    : "border-lion-gold/30 text-lion-light hover:border-lion-gold hover:bg-lion-gold/5"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </MotionWrapper>
      </div>
    </div>
  );
}