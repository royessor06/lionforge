"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code, Sparkles, Layers } from "lucide-react";

export default function ProjectCard({ title, category, image, slug, stack = [], description }) {
  const stackList = Array.isArray(stack) ? stack : [stack];

  return (
    <div className="group forge-glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-[#FFD700]/40 transition-all duration-400 flex flex-col h-full">
      {/* Visual Header / Banner */}
      <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-[#0A0B0E]">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center relative p-6">
            {/* Forge Blueprint Graphic */}
            <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(255,215,0,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.2)_1px,transparent_1px)] [background-size:24px_24px]" />
            <div className="w-14 h-14 rounded-2xl bg-[#1A1C23] border border-[#FFD700]/30 flex items-center justify-center text-[#FFD700] mb-2 shadow-lg group-hover:scale-110 transition-transform">
              {category === "Web" ? (
                <Code size={26} />
              ) : category === "Mobile" ? (
                <Sparkles size={26} />
              ) : (
                <Layers size={26} />
              )}
            </div>
            <span className="text-xs uppercase tracking-widest text-[#8892B0]/80 font-medium">
              Architecture Forgée
            </span>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-3.5 left-3.5 z-10">
          <span className="px-3 py-1 rounded-full bg-[#050505]/85 border border-[#FFD700]/30 text-[#FFD700] text-xs font-semibold tracking-wide uppercase backdrop-blur-md">
            {category}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {stackList.slice(0, 3).map((item, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/5 text-[11px] font-mono text-[#8892B0]"
              >
                {item}
              </span>
            ))}
          </div>

          <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-[#FFD700] transition-colors">
            {title}
          </h3>

          <p className="text-xs sm:text-sm text-[#8892B0] line-clamp-2 leading-relaxed font-light mb-4">
            {description || `Solution de ${category} développée avec ${stackList.join(", ")}`}
          </p>
        </div>

        <Link
          href={`/projects/${slug}`}
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#8892B0] group-hover:text-[#FFD700] transition-colors pt-3 border-t border-white/5"
        >
          <span>Consulter l'architecture</span>
          <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
