import React from 'react';
import { Eye } from 'lucide-react';
import { LANDING_CONFIG, ProjectCategory } from '../config/landingConfig';

interface WhatYouGetSectionProps {
  onSelectCategory: (category: ProjectCategory) => void;
  onOpenSample?: () => void;
  onOpenCheckout?: () => void;
}

export const WhatYouGetSection: React.FC<WhatYouGetSectionProps> = ({
  onSelectCategory,
}) => {
  return (
    <section id="categorias" className="py-16 sm:py-24 bg-[#FFFFFF] border-y border-[#EDE8DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#34483C]">
            <span>CONTEÚDO DA COLEÇÃO DIGITAL</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F382D] tracking-tight mb-4 text-balance">
            {LANDING_CONFIG.SECTION_CATEGORIES_TITLE}
          </h2>
          <p className="text-base sm:text-lg text-[#252525]/80 font-normal leading-relaxed">
            {LANDING_CONFIG.SECTION_CATEGORIES_SUBTITLE}
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {LANDING_CONFIG.PROJECT_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat)}
              className="group bg-[#F8F7F3] rounded-2xl overflow-hidden border border-[#EDE8DE] hover:border-[#34483C]/40 transition-all duration-300 hover:shadow-lg flex flex-col cursor-pointer"
            >
              {/* Image Container with smooth hover zoom */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-200">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Discrete Category Number */}
                <div className="absolute top-3 left-3 bg-[#1F382D]/85 backdrop-blur-sm text-[#EDE8DE] text-xs font-bold px-2.5 py-1 rounded-md">
                  0{idx + 1}
                </div>

                {/* View hint button on image hover */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="inline-flex items-center gap-1.5 bg-[#FFFFFF] text-[#1F382D] text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Ver detalhes</span>
                  </span>
                </div>
              </div>

              {/* Text content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#1F382D] mb-2 group-hover:text-[#34483C] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-[#252525]/80 leading-relaxed font-normal mb-4">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EDE8DE]/70 flex items-center justify-between text-xs text-[#34483C] font-medium">
                  <span className="truncate">{cat.highlight}</span>
                  <span className="font-bold shrink-0 underline decoration-[#34483C]/30 group-hover:decoration-[#34483C]">
                    Explorar &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
