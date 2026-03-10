"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Fuse from "fuse.js";
import Link from "next/link";
import { MagnifyingGlass } from "@phosphor-icons/react";

const SearchBar = ({ posts }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const fuse = new Fuse(posts, {
    keys: ['title', 'excerpt', 'category'],
    threshold: 0.3,
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
      <div className="relative group">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher un article..."
          className="w-full px-6 py-4 bg-lion-surface border border-lion-gold border-opacity-30 rounded-2xl 
                     focus:border-lion-gold focus:outline-none transition-all duration-300
                     text-white placeholder-lion-light placeholder-opacity-50
                     group-hover:border-opacity-60"
        />
        
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <MagnifyingGlass size={24} className="text-lion-gold text-opacity-50 group-hover:text-opacity-100 transition-colors" />
        </div>
      </div>

      <AnimatePresence>
        {isOpen && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-lion-surface border border-lion-gold border-opacity-30 rounded-2xl overflow-hidden z-50 shadow-2xl"
          >
            {results.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="p-4 hover:bg-lion-gold hover:bg-opacity-10 transition-colors cursor-pointer border-b border-lion-gold border-opacity-20 last:border-b-0">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <h4 className="font-semibold text-lion-gold mb-1">
                          {post.title}
                        </h4>
                        <p className="text-sm text-lion-light text-opacity-70 line-clamp-1">
                          {post.excerpt}
                        </p>
                        <div className="flex gap-2 mt-2">
                          <span className="text-xs px-2 py-1 bg-lion-gold bg-opacity-20 rounded-full text-lion-gold">
                            {post.category}
                          </span>
                          <span className="text-xs text-lion-light text-opacity-50">
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
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;