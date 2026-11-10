import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, BookOpen, Check, ArrowRight, Maximize2 } from 'lucide-react';
import { BOOK_SAMPLE_PAGES, LANDING_CONFIG } from '../config/landingConfig';

interface SamplePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCheckout: () => void;
  initialPageIndex?: number;
}

export const SamplePreviewModal: React.FC<SamplePreviewModalProps> = ({
  isOpen,
  onClose,
  onOpenCheckout,
  initialPageIndex = 0,
}) => {
  const [currentPage, setCurrentPage] = useState(initialPageIndex);

  useEffect(() => {
    if (isOpen) {
      setCurrentPage(initialPageIndex);
    }
  }, [isOpen, initialPageIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentPage((prev) => (prev > 0 ? prev - 1 : BOOK_SAMPLE_PAGES.length - 1));
      } else if (e.key === 'ArrowRight') {
        setCurrentPage((prev) => (prev < BOOK_SAMPLE_PAGES.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const current = BOOK_SAMPLE_PAGES[currentPage] || BOOK_SAMPLE_PAGES[0];

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : BOOK_SAMPLE_PAGES.length - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < BOOK_SAMPLE_PAGES.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-[#FFFFFF] w-full max-w-4xl rounded-2xl border border-[#EDE8DE] shadow-2xl overflow-hidden flex flex-col max-h-[95vh] animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="p-3.5 sm:p-4 border-b border-[#EDE8DE] flex items-center justify-between bg-[#F8F7F3]">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#34483C]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#34483C]">
              Amostra Real do E-book • Página {current.pageNumber} de 80
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#252525]/70 hover:text-[#1F382D] hover:bg-[#EDE8DE]/60 rounded-lg transition-colors cursor-pointer"
            aria-label="Fechar amostra"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
          
          {/* Main Visual Display (Book Page) */}
          <div className="relative rounded-xl overflow-hidden bg-neutral-900 border border-[#EDE8DE] flex items-center justify-center min-h-[250px] sm:min-h-[440px] max-h-[50vh] sm:max-h-[58vh]">
            <img
              src={current.image}
              alt={current.title}
              className="max-h-[48vh] sm:max-h-[56vh] w-auto max-w-full object-contain mx-auto shadow-md"
              referrerPolicy="no-referrer"
            />

            {/* Badge overlay on top left */}
            <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-[#1F382D]/90 backdrop-blur-sm text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-md shadow-md">
              {current.badge} • Pág. {current.pageNumber}
            </div>

            {/* Category tag on top right */}
            <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 bg-white/90 backdrop-blur-sm text-[#1F382D] text-[10px] sm:text-xs font-semibold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md shadow-md">
              {current.category}
            </div>

            {/* Prev / Next Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-95"
              aria-label="Página anterior"
              title="Página anterior (Seta esquerda)"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-95"
              aria-label="Próxima página"
              title="Próxima página (Seta direita)"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Page Details Description */}
          <div className="bg-[#F8F7F3] rounded-xl p-4 border border-[#EDE8DE]">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1.5">
              <span className="text-xs font-bold text-[#34483C] uppercase tracking-wider">
                {current.subtitle}
              </span>
              <span className="text-xs text-[#252525]/60 font-medium">
                Página {currentPage + 1} de {BOOK_SAMPLE_PAGES.length} amostras
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-[#1F382D] mb-1">
              {current.title}
            </h3>

            <p className="text-xs sm:text-sm text-[#252525]/85 leading-relaxed font-normal">
              {current.description}
            </p>
          </div>

          {/* 10 Thumbnails Selector Strip */}
          <div>
            <p className="text-[11px] font-bold text-[#34483C] uppercase tracking-wider mb-2">
              Clique em uma miniatura para navegar pelas 10 páginas:
            </p>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
              {BOOK_SAMPLE_PAGES.map((page, idx) => (
                <button
                  key={page.pageNumber}
                  onClick={() => setCurrentPage(idx)}
                  className={`relative shrink-0 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                    currentPage === idx
                      ? 'border-[#34483C] ring-2 ring-[#34483C]/30 scale-105 shadow-md'
                      : 'border-[#EDE8DE] hover:border-[#34483C]/50 opacity-70 hover:opacity-100'
                  }`}
                  style={{ width: '56px', height: '72px' }}
                  title={`${page.title} (Pág. ${page.pageNumber})`}
                >
                  <img
                    src={page.image}
                    alt={page.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute bottom-0 inset-x-0 bg-black/70 text-white text-[9px] font-bold text-center py-0.5">
                    {page.pageNumber}
                  </span>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-3.5 sm:p-4 border-t border-[#EDE8DE] bg-[#F8F7F3] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#252525]/75 text-center sm:text-left">
            Coleção completa com <strong>50 projetos</strong> a partir de <strong className="text-[#1F382D]">R$ 3,90</strong>
          </p>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenCheckout();
              }}
              className="w-full sm:w-auto px-6 py-2.5 bg-[#34483C] hover:bg-[#1F382D] text-white text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <span>GARANTIR MINHA COLEÇÃO</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
