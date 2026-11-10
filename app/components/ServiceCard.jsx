"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({ title, description, slug, icon, features = [] }) {
  return (
    <div className="group forge-glass-card rounded-2xl p-7 flex flex-col justify-between h-full border border-white/10 hover:border-[#FFD700]/40 transition-all duration-400">
      <div>
        {/* Service Icon Badge */}
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1A1C23] to-[#0A0B0E] border border-[#FFD700]/30 flex items-center justify-center text-[#FFD700] mb-6 group-hover:border-[#FFD700] group-hover:shadow-[0_0_20px_rgba(255,215,0,0.25)] transition-all">
          {icon}
        </div>

        {/* Title */}
        <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-[#FFD700] transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#8892B0] leading-relaxed mb-6 font-light">
          {description}
        </p>

        {/* Highlight features if provided */}
        {features && features.length > 0 && (
          <div className="space-y-1.5 mb-6 pt-4 border-t border-white/5">
            {features.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-[#F5F5F5]/70">
                <span className="w-1 h-1 rounded-full bg-[#FFD700]" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Action link */}
      <Link
        href={`/services/${slug}`}
        className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#FFD700] hover:text-[#FFE247] transition-colors pt-2 group/link"
      >
        <span>Explorer la solution</span>
        <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
      </Link>
    </div>
  );
}