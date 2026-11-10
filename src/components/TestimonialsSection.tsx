import React, { useState } from 'react';
import { MessageSquareQuote, ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import { TESTIMONIAL_IMAGES, TestimonialImageItem } from '../config/landingConfig';

export const TestimonialsSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<TestimonialImageItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  // Duplicated for seamless continuous loop
  const duplicatedTestimonials = [...TESTIMONIAL_IMAGES, ...TESTIMONIAL_IMAGES];

  const handleOpenImage = (index: number) => {
    setSelectedIndex(index);
    setSelectedImage(TESTIMONIAL_IMAGES[index]);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const newIdx = selectedIndex > 0 ? selectedIndex - 1 : TESTIMONIAL_IMAGES.length - 1;
    setSelectedIndex(newIdx);
    setSelectedImage(TESTIMONIAL_IMAGES[newIdx]);
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const newIdx = selectedIndex < TESTIMONIAL_IMAGES.length - 1 ? selectedIndex + 1 : 0;
    setSelectedIndex(newIdx);
    setSelectedImage(TESTIMONIAL_IMAGES[newIdx]);
  };

  return (
    <section id="depoimentos" className="py-12 sm:py-20 bg-[#FFFFFF] border-b border-[#EDE8DE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-10 text-center">
        
        {/* Section Header Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EDE8DE] text-[#1F382D] text-xs font-bold tracking-wider uppercase mb-3">
          <MessageSquareQuote className="w-3.5 h-3.5 text-[#34483C]" />
          <span>Feedbacks Reais</span>
        </div>

        {/* Heading & Subheading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F382D] tracking-tight mb-2 sm:mb-3 text-balance">
          O que dizem os leitores que garantiram a coleção
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-[#252525]/80 max-w-2xl mx-auto font-normal">
          Passe o mouse ou toque para pausar o carrossel e clique em qualquer mensagem para ler ampliada.
        </p>
      </div>

      {/* Infinite Horizontal Running Carousel Track */}
      <div className="relative w-full overflow-hidden py-3 touch-pan-y">
        {/* Soft edge gradient fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-20 z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-20 z-10 bg-gradient-to-l from-white to-transparent" />

        <div className="animate-marquee-loop" style={{ animationDuration: '48s' }}>
          {duplicatedTestimonials.map((item, index) => {
            const originalIndex = index % TESTIMONIAL_IMAGES.length;
            return (
              <div
                key={`${item.id}-${index}`}
                onClick={() => handleOpenImage(originalIndex)}
                className="w-[220px] sm:w-[260px] md:w-[290px] mx-2 sm:mx-3 shrink-0 group cursor-pointer"
              >
                {/* Pure Image Card without external text or names */}
                <div className="relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1.5 active:scale-[0.99] border border-[#EDE8DE] bg-[#F8F7F3]">
                  <img
                    src={item.image}
                    alt="Depoimento de leitor"
                    width={290}
                    height={460}
                    decoding="async"
                    className="w-full h-auto object-contain max-h-[390px] sm:max-h-[460px] rounded-2xl transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />

                  {/* Hover Zoom overlay */}
                  <div className="absolute inset-0 bg-[#1F382D]/25 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center p-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 text-[#1F382D] text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Maximize2 className="w-3.5 h-3.5 text-[#34483C]" />
                      <span>Ampliar</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal for Full View */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative bg-neutral-900 rounded-2xl overflow-hidden max-w-sm sm:max-w-md w-full border border-neutral-700 shadow-2xl flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button Floating on top right */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer shadow-lg"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Display */}
            <div className="relative p-2 sm:p-3 overflow-y-auto flex-1 flex items-center justify-center bg-neutral-900">
              <img
                src={selectedImage.image}
                alt="Depoimento de leitor ampliado"
                className="max-h-[78vh] w-auto max-w-full object-contain rounded-xl"
              />

              {/* Prev / Next Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
                aria-label="Próximo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Counter */}
            <div className="py-2.5 px-4 bg-neutral-950 text-white/70 flex items-center justify-between text-xs">
              <span>{selectedIndex + 1} de {TESTIMONIAL_IMAGES.length}</span>
              <button
                onClick={() => setSelectedImage(null)}
                className="text-white hover:underline text-xs font-semibold cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
