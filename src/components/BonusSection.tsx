import React from 'react';
import { FileText, Check, Gift, ArrowRight } from 'lucide-react';
import { LANDING_CONFIG, BonusItem } from '../config/landingConfig';

interface BonusSectionProps {
  onOpenCheckout: () => void;
  onPreviewBonus: (bonus: BonusItem) => void;
}

export const BonusSection: React.FC<BonusSectionProps> = ({ onOpenCheckout, onPreviewBonus }) => {
  return (
    <section id="bonus" className="py-12 sm:py-24 bg-[#FFFFFF] border-t border-[#EDE8DE] scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-2.5 sm:mb-3 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#34483C]">
            <Gift className="w-4 h-4 text-[#34483C]" />
            <span>MATERIAIS COMPLEMENTARES INCLUSOS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F382D] tracking-tight mb-3 sm:mb-4 text-balance">
            {LANDING_CONFIG.BONUS_SECTION_TITLE}
          </h2>
          <p className="text-sm sm:text-base text-[#252525]/80 font-normal leading-relaxed">
            Além dos 50 projetos principais, você recebe 3 materiais digitais práticos desenvolvidos para apoiar cada etapa do seu planejamento.
          </p>
        </div>

        {/* 3 Bonus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-14">
          {LANDING_CONFIG.BONUS_CONTENT.map((bonus) => (
            <div
              key={bonus.id}
              className="bg-[#F8F7F3] rounded-2xl border border-[#EDE8DE] hover:border-[#34483C]/40 p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-md group"
            >
              <div>
                {/* Real 3D Book Cover Image */}
                <div
                  onClick={() => onPreviewBonus(bonus)}
                  className="relative w-full rounded-xl p-3 sm:p-4 mb-5 sm:mb-6 flex items-center justify-center bg-gradient-to-b from-[#EDE8DE]/40 to-[#EDE8DE]/20 border border-[#EDE8DE] overflow-hidden cursor-pointer group-hover:border-[#34483C]/40 transition-all duration-300"
                >
                  <img
                    src={bonus.coverImage}
                    alt={bonus.title}
                    className="max-h-[220px] sm:max-h-[280px] w-auto object-contain drop-shadow-xl transform group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-2.5 right-2.5 bg-[#1F382D]/90 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 shadow-md">
                    <span>Espiar bônus</span>
                    <span>&rarr;</span>
                  </div>
                </div>

                {/* Identification Tag */}
                <div className="mb-3">
                  <span className="inline-block text-[11px] font-bold tracking-wider text-[#34483C] bg-[#EDE8DE] px-2.5 py-1 rounded-md">
                    {bonus.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-[#1F382D] mb-2 leading-snug">
                  {bonus.title}
                </h3>
                <p className="text-sm text-[#252525]/80 leading-relaxed font-normal mb-5">
                  {bonus.description}
                </p>

                {/* Key Checklist/Items inside */}
                <ul className="space-y-2 mb-6">
                  {bonus.highlights.map((h, i) => (
                    <li key={i} className="text-xs text-[#252525]/85 flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#34483C] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer action */}
              <div className="pt-4 border-t border-[#EDE8DE] flex items-center justify-between text-xs text-[#34483C]">
                <span className="font-medium">Formato Digital (PDF)</span>
                <button
                  onClick={() => onPreviewBonus(bonus)}
                  className="font-bold hover:underline cursor-pointer"
                >
                  Espiar conteúdo
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance banner */}
        <div className="bg-[#EDE8DE]/60 border border-[#EDE8DE] rounded-2xl p-6 text-center max-w-2xl mx-auto shadow-xs">
          <p className="text-xs sm:text-sm text-[#252525]/85 font-normal">
            <strong className="text-[#1F382D] font-bold">Exclusivo do Plano Completo:</strong> Os 3 guias bônus são disponibilizados exclusivamente na compra do <strong className="text-[#1F382D] font-bold">Plano Completo (R$ 17,90)</strong>, liberados no mesmo download com acesso imediato e vitalício.
          </p>
        </div>

      </div>
    </section>
  );
};
