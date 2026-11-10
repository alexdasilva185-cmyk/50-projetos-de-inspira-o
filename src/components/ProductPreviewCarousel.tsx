import React from 'react';
import { Maximize2, BookOpen } from 'lucide-react';
import { BOOK_SAMPLE_PAGES } from '../config/landingConfig';

interface ProductPreviewCarouselProps {
  onSelectPage: (index: number) => void;
  onOpenCheckout?: () => void;
}

export const ProductPreviewCarousel: React.FC<ProductPreviewCarouselProps> = ({
  onSelectPage,
}) => {
  // Multiplied items for seamless infinite horizontal loop
  const duplicatedPages = [...BOOK_SAMPLE_PAGES, ...BOOK_SAMPLE_PAGES];

  return (
    <section id="demonstracao" className="pt-2 sm:pt-4 pb-12 sm:pb-16 bg-[#F8F7F3] border-b border-[#EDE8DE] overflow-hidden scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 text-center">
        
        {/* Section Pill Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[#EDE8DE] text-[#1F382D] text-[10px] sm:text-xs font-bold tracking-wider uppercase mb-2.5 sm:mb-3">
          <BookOpen className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#34483C]" />
          <span>Amostra Real do E-book em Carrossel Contínuo</span>
        </div>

        {/* Heading & Subheading */}
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#1F382D] tracking-tight mb-2 sm:mb-3 text-balance">
          Veja por dentro: 10 páginas reais da coleção
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-[#252525]/80 max-w-2xl mx-auto font-normal px-2 sm:px-0">
          As páginas rodam sozinhas na tela sem você precisar puxar. Passe o mouse ou toque para pausar e clique para folhear em tamanho real.
        </p>
      </div>

      {/* Infinite Horizontal Running Track */}
      <div className="relative w-full overflow-hidden py-2 touch-pan-y">
        {/* Left & Right gradient fades for editorial polish */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-20 z-10 bg-gradient-to-r from-[#F8F7F3] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-20 z-10 bg-gradient-to-l from-[#F8F7F3] to-transparent" />

        <div className="animate-marquee-loop" style={{ animationDuration: '48s' }}>
          {duplicatedPages.map((page, index) => {
            const originalIndex = index % BOOK_SAMPLE_PAGES.length;
            return (
              <div
                key={`${page.pageNumber}-${index}`}
                onClick={() => onSelectPage(originalIndex)}
                className="w-[215px] sm:w-[260px] md:w-[310px] mx-2 sm:mx-3 shrink-0 group cursor-pointer"
              >
                <div className="bg-[#FFFFFF] rounded-2xl overflow-hidden border border-[#EDE8DE] hover:border-[#34483C] shadow-sm hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1.5 active:scale-[0.99] flex flex-col">
                  
                  {/* Top Bar inside card */}
                  <div className="px-3.5 py-2.5 bg-[#F8F7F3] border-b border-[#EDE8DE] flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#1F382D] uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#34483C]" />
                      {page.badge}
                    </span>
                    <span className="text-[11px] font-semibold text-[#252525]/60">
                      Pág. {String(page.pageNumber).padStart(2, '0')}/80
                    </span>
                  </div>

                  {/* Real Book Page Image */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100">
                    <img
                      src={page.image}
                      alt={page.title}
                      width={310}
                      height={413}
                      decoding="async"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />

                    {/* Hover Zoom Overlay */}
                    <div className="absolute inset-0 bg-[#1F382D]/40 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white text-[#1F382D] text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Maximize2 className="w-3.5 h-3.5 text-[#34483C]" />
                        <span>Clique para Ampliar</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Description Footer */}
                  <div className="p-3.5 bg-white">
                    <h3 className="text-xs sm:text-sm font-bold text-[#1F382D] truncate group-hover:text-[#34483C] transition-colors">
                      {page.title}
                    </h3>
                    <p className="text-[11px] text-[#252525]/75 truncate mt-0.5">
                      {page.subtitle}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
