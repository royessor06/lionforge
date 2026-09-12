import Link from "next/link";
import MotionWrapper from "@/app/components/MotionWrapper";
import { blogPosts } from "@/app/data/content";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-lion-dark text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-lion-gold mb-4">Article non trouvé</h1>
          <Link href="/blog" className="text-lion-electric hover:text-lion-gold transition">
            Retour au blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-lion-dark text-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <MotionWrapper direction="left" distance={20} duration={0.5}>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-lion-muted hover:text-lion-gold transition-colors mb-8"
          >
            <span aria-hidden="true">←</span>
            <span>Retour au blog</span>
          </Link>
        </MotionWrapper>

        <MotionWrapper direction="scale" duration={0.8}>
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-lion-gold text-lion-dark rounded-full text-sm font-bold mb-5">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-5">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-lion-muted text-sm">
              <span>{post.date}</span>
              <span className="inline-flex items-center gap-2">
                <span aria-hidden="true">•</span>
                {post.readTime}
              </span>
            </div>
          </div>
        </MotionWrapper>

        <MotionWrapper delay={0.2} direction="up">
          <div className="bg-lion-surface border border-lion-gold/20 rounded-2xl p-8 md:p-10">
            <p className="text-xl text-lion-light leading-relaxed mb-8">
              {post.excerpt}
            </p>
            <div className="space-y-5 text-lion-muted leading-relaxed">
              <p>
                Cet article sert de base éditoriale pour présenter l'expertise LionForge.
                Il peut ensuite être enrichi avec des exemples, captures, métriques et retours d'expérience réels.
              </p>
              <p>
                Pour un site d'agence plus crédible, chaque publication devrait répondre à une question concrète d'un client potentiel :
                choix technique, coût, délais, sécurité, maintenance ou impact business.
              </p>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </article>
  );
}
