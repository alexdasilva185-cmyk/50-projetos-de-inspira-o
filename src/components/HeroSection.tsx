import React from 'react';
import { ArrowRight } from 'lucide-react';
import { LANDING_CONFIG } from '../config/landingConfig';
import { MidnightTimerData } from '../hooks/useMidnightTimer';

interface HeroSectionProps {
  onOpenCheckout: () => void;
  onOpenSample: () => void;
  timer: MidnightTimerData;
  price?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenCheckout,
  onOpenSample,
  timer,
  price = LANDING_CONFIG.PRODUCT_PRICE,
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-6 sm:pt-12 sm:pb-8 lg:pt-14 lg:pb-8">
      {/* Background architectural geometric subtle accents */}
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-40">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#EDE8DE]/60 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#EDE8DE]/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Centered Social Proof Pill Badge with Project Color Palette */}
        <div className="w-full flex justify-center mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#EDE8DE] text-[#1F382D] border border-[#EDE8DE] text-[10px] sm:text-xs font-bold tracking-wide shadow-xs text-center">
            <span className="text-xs sm:text-sm leading-none text-[#34483C]">★</span>
            <span>MAIS DE 1.450 ESPAÇOS E FAMÍLIAS INSPIRADAS</span>
          </div>
        </div>

        {/* 2. Main Headline (Centralizada) */}
        <div className="text-center max-w-4xl mx-auto mb-4 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-bold text-[#1F382D] leading-[1.2] tracking-tight text-balance">
            {LANDING_CONFIG.HEADLINE}
          </h1>
        </div>

        {/* 3. Product Mockup Centralizado (Entre a Headline e a Subheadline) */}
        <div className="w-full flex justify-center my-4 sm:my-8">
          <div
            onClick={onOpenSample}
            className="relative max-w-[270px] xs:max-w-[320px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[540px] group cursor-pointer transition-transform duration-500 hover:scale-[1.02] active:scale-[0.99]"
            title="Clique para folhear a amostra"
          >
            <img
              src={LANDING_CONFIG.MOCKUP_IMAGE}
              alt="Mockup do Produto 50 Projetos de Áreas Gourmet Pequenas"
              className="w-full h-auto drop-shadow-2xl mx-auto"
              loading="eager"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* 4. Subheadline (Centralizada) */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10 px-1 sm:px-0">
          <p className="text-sm sm:text-base md:text-xl text-[#252525]/85 leading-relaxed font-normal">
            {LANDING_CONFIG.SUBHEADLINE}
          </p>
        </div>

        {/* 5. Primary Action Button & Subtext (Centralizados) */}
        <div className="flex flex-col items-center justify-center gap-3 w-full">
          <a
            href="#demonstracao"
            onClick={(e) => {
              e.preventDefault();
              onOpenCheckout();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-10 py-3.5 sm:py-4 min-h-[48px] text-sm sm:text-base md:text-lg font-bold text-white bg-[#34483C] hover:bg-[#1F382D] active:scale-[0.98] rounded-xl transition-all shadow-md hover:shadow-xl cursor-pointer group text-center"
          >
            <span>{LANDING_CONFIG.HERO_CTA}</span>
            <ArrowRight className="w-5 h-5 text-[#EDE8DE] group-hover:translate-x-1 transition-transform" />
          </a>

          <p className="text-xs sm:text-sm text-[#252525]/75 font-normal text-center">
            {LANDING_CONFIG.HERO_SUBCTA}
          </p>
        </div>

      </div>
    </section>
  );
};
