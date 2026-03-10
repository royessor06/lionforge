import BlogCard from "@/app/components/BlogCard";
import MotionWrapper from "@/app/components/MotionWrapper";
import SearchBar from "@/app/components/SearchBar";

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
    excerpt: "Les mesures essentielles à mettre en place pour protéger vos données.",
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
        
        <MotionWrapper direction="scale" duration={0.8}>
          <h1 className="text-5xl md:text-6xl font-bold text-gradient text-center mb-6">
            Blog
          </h1>
        </MotionWrapper>
        
        <MotionWrapper direction="up" delay={0.2} distance={20}>
          <p className="text-xl text-lion-muted text-center max-w-3xl mx-auto mb-12">
            Actualités, conseils et réflexions sur le développement et la technologie.
          </p>
        </MotionWrapper>

        <MotionWrapper delay={0.3}>
          <SearchBar posts={blogPosts} />
        </MotionWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <MotionWrapper 
              key={post.slug} 
              delay={0.4 + index * 0.1}
              direction="slide-up"
              distance={30}
              duration={0.6}
            >
              <BlogCard {...post} />
            </MotionWrapper>
          ))}
        </div>

        <MotionWrapper delay={0.9} direction="fade">
          <div className="flex justify-center gap-2 mt-12">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`w-10 h-10 rounded-lg border transition-all duration-300 ${
                  page === 1
                    ? "bg-lion-gold text-lion-dark border-lion-gold"
                    : "border-lion-gold border-opacity-30 text-lion-light hover:border-lion-gold hover:bg-lion-gold hover:bg-opacity-10"
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