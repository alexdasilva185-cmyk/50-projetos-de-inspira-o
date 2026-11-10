import React from 'react';
import { LANDING_CONFIG } from '../config/landingConfig';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1F382D] text-[#EDE8DE] py-14 sm:py-16 pb-28 md:pb-16 border-t border-[#34483C]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        
        {/* Brand / Product Title */}
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#EDE8DE] mb-3">
          {LANDING_CONFIG.PRODUCT_NAME}
        </h3>

        {/* Short Descriptive Mission Sentence */}
        <p className="text-xs sm:text-sm text-[#EDE8DE]/75 font-normal leading-relaxed max-w-xl mx-auto mb-8 sm:mb-9 text-balance">
          Ajudando a transformar quintais e espaços pequenos em áreas gourmet acolhedoras com projetos inteligentes e funcionais.
        </p>

        {/* Central Nav / Legal Links */}
        <nav
          aria-label="Links do rodapé"
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold uppercase tracking-widest text-[#EDE8DE]/80 mb-8 sm:mb-9"
        >
          <button
            type="button"
            onClick={onOpenPrivacy}
            className="hover:text-white transition-colors cursor-pointer py-1"
          >
            PRIVACIDADE
          </button>
          
          <button
            type="button"
            onClick={onOpenTerms}
            className="hover:text-white transition-colors cursor-pointer py-1"
          >
            TERMOS
          </button>

          <a
            href={`mailto:${LANDING_CONFIG.SUPPORT_EMAIL}`}
            className="hover:text-white transition-colors cursor-pointer py-1"
          >
            SUPORTE
          </a>
        </nav>

        {/* Copyright Line */}
        <div className="text-[11px] sm:text-xs text-[#EDE8DE]/60 font-normal">
          <span>&copy; {currentYear} &ndash; Todos os direitos reservados.</span>
        </div>

      </div>
    </footer>
  );
};
