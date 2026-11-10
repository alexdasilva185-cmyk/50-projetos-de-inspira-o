import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { LANDING_CONFIG } from '../config/landingConfig';

interface WhyChooseSectionProps {
  onOpenCheckout: () => void;
}

export const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section id="por-que-escolher" className="py-16 sm:py-24 bg-[#F8F7F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#34483C]">
            <span>VANTAGENS DO MATERIAL</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F382D] tracking-tight mb-4 text-balance">
            {LANDING_CONFIG.WHY_CHOOSE_TITLE}
          </h2>
          <p className="text-base text-[#252525]/80 font-normal leading-relaxed">
            Economize horas de pesquisas soltas na internet e tenha em mãos um acervo estruturado para tomar decisões seguras sobre seu espaço.
          </p>
        </div>

        {/* 4 Minimalist Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 mb-14">
          {LANDING_CONFIG.WHY_CHOOSE_ITEMS.map((item) => (
            <div
              key={item.editorialNumber}
              className="bg-[#FFFFFF] p-7 rounded-2xl border border-[#EDE8DE] hover:border-[#34483C]/30 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Natural human editorial numbering */}
                <div className="text-2xl font-bold text-[#34483C]/50 mb-4 tracking-tighter">
                  {item.editorialNumber}.
                </div>

                <h3 className="text-lg font-bold text-[#1F382D] mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-[#252525]/80 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#EDE8DE]/60 flex items-center gap-2 text-xs text-[#34483C] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#34483C]" />
                <span>Aplicável a pequenos lotes</span>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary CTA block */}
        <div className="text-center max-w-xl mx-auto flex flex-col items-center">
          <button
            onClick={onOpenCheckout}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-[#34483C] hover:bg-[#1F382D] active:scale-[0.99] rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer group"
          >
            <span>{LANDING_CONFIG.WHY_CHOOSE_CTA}</span>
            <ArrowRight className="w-5 h-5 text-[#EDE8DE] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
