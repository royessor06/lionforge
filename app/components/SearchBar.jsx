"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Fuse from "fuse.js";
import Link from "next/link";

const SearchBar = ({ posts }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // Configuration de Fuse.js pour la recherche floue
  const fuse = new Fuse(posts, {
    keys: ['title', 'excerpt', 'category'],
    threshold: 0.3,
    includeScore: true,
  });

  useEffect(() => {
    if (query.length > 2) {
      const searchResults = fuse.search(query);
      setResults(searchResults.map(r => r.item));
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  return (
    <div className="relative max-w-2xl mx-auto mb-12">
      {/* Barre de recherche */}
      <div className="relative group">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher un article, une catégorie..."
          className="w-full px-6 py-4 bg-lion-dark/50 border border-lion-gold/20 rounded-2xl 
                     focus:border-lion-gold focus:outline-none transition-all duration-300
                     text-white placeholder-lion-light/50
                     group-hover:border-lion-gold/50"
        />
        
        {/* Icône de recherche */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <svg className="w-6 h-6 text-lion-gold/50 group-hover:text-lion-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Effet de glow */}
        <div className="absolute inset-0 bg-lion-gold/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
      </div>

      {/* Résultats de recherche */}
      <AnimatePresence>
        {isOpen && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-lion-dark border border-lion-gold/20 rounded-2xl overflow-hidden z-50 shadow-2xl"
          >
            {results.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="p-4 hover:bg-lion-gold/5 transition-colors cursor-pointer border-b border-lion-gold/10 last:border-b-0 group">
                    <div className="flex items-start gap-4">
                      {/* Icône */}
                      <div className="w-10 h-10 bg-lion-gold/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-xl">📄</span>
                      </div>
                      
                      {/* Contenu */}
                      <div className="flex-1">
                        <h4 className="font-semibold text-lion-gold group-hover:text-lion-electric transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-sm text-lion-light/70 line-clamp-1">
                          {post.excerpt}
                        </p>
                        <div className="flex gap-2 mt-2">
                          <span className="text-xs px-2 py-1 bg-lion-gold/10 rounded-full text-lion-gold">
                            {post.category}
                          </span>
                          <span className="text-xs text-lion-light/50">
                            {post.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Message "Aucun résultat" */}
        {isOpen && query.length > 2 && results.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-lion-dark border border-lion-gold/20 rounded-2xl p-8 text-center"
          >
            <span className="text-5xl mb-4 block">🔍</span>
            <p className="text-lion-light">Aucun article trouvé pour "<span className="text-lion-gold">{query}</span>"</p>
            <p className="text-sm text-lion-light/50 mt-2">Essayez avec d'autres mots-clés</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;