import BlogCard from "@/app/components/BlogCard";
import MotionWrapper from "@/app/components/MotionWrapper";
import SearchBar from "@/app/components/SearchBar";
import { blogPosts } from "@/app/data/content";

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
