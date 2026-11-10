import React from 'react';
import { X, Check, ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import { ProjectCategory, LANDING_CONFIG } from '../config/landingConfig';

interface CategoryDetailModalProps {
  category: ProjectCategory | null;
  onClose: () => void;
  onOpenCheckout: () => void;
}

export const CategoryDetailModal: React.FC<CategoryDetailModalProps> = ({
  category,
  onClose,
  onOpenCheckout,
}) => {
  if (!category) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-[#FFFFFF] w-full max-w-2xl rounded-2xl border border-[#EDE8DE] shadow-2xl overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-[#EDE8DE] flex items-center justify-between bg-[#F8F7F3]">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#34483C]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#34483C]">
              Categoria Arquitetônica
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#252525]/70 hover:text-[#1F382D] hover:bg-[#EDE8DE]/50 rounded-lg transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
          {/* Main Category Photo */}
          <div className="rounded-xl overflow-hidden aspect-[16/10] bg-neutral-100 border border-[#EDE8DE]">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1F382D] mb-2">
              {category.name}
            </h3>
            <p className="text-sm text-[#252525]/85 leading-relaxed font-normal">
              {category.description}
            </p>
          </div>

          {/* Key Architectural Solutions in this Category */}
          <div className="bg-[#F8F7F3] rounded-xl p-4 border border-[#EDE8DE]">
            <h4 className="text-xs font-bold text-[#34483C] uppercase tracking-wider mb-3">
              Soluções e detalhes contemplados nesta categoria:
            </h4>
            <ul className="space-y-2">
              {category.features.map((feat, i) => (
                <li key={i} className="text-xs sm:text-sm text-[#252525] flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#34483C] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Guidance */}
          <div className="text-xs text-[#252525]/75 border-l-2 border-[#34483C] pl-3 py-1 italic">
            Esta é uma das 6 categorias presentes na coleção digital de 50 projetos. Todas acompanham fichas de ideias com plantas esquemáticas e sugestões de medidas.
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-[#EDE8DE] bg-[#F8F7F3] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#252525]/75 text-center sm:text-left">
            <span>Coleção completa: </span>
            <strong className="text-[#1F382D] font-bold">a partir de R$ {LANDING_CONFIG.PRODUCT_PRICE}</strong>
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenCheckout();
            }}
            className="w-full sm:w-auto px-6 py-2.5 bg-[#34483C] hover:bg-[#1F382D] text-white text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            <span>QUERO OS 50 PROJETOS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
