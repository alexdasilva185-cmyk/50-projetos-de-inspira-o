import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { LANDING_CONFIG } from '../config/landingConfig';
import { MidnightTimerData } from '../hooks/useMidnightTimer';

interface NavbarProps {
  onOpenCheckout: () => void;
  timer?: MidnightTimerData;
  price?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCheckout }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F8F7F3]/95 backdrop-blur-md border-b border-[#EDE8DE] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark (single element, Poppins bold) */}
        <a
          href="#"
          className="text-lg sm:text-xl font-bold tracking-tight text-[#1F382D] whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
        >
          50 Áreas Gourmet
        </a>

        {/* Zone 2: 4-5 concise single-line nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#252525]/80">
          <button
            onClick={() => scrollToSection('categorias')}
            className="hover:text-[#1F382D] transition-colors whitespace-nowrap shrink-0 hover:underline decoration-[#34483C]/40 underline-offset-8 cursor-pointer"
          >
            O Que Você Recebe
          </button>
          <button
            onClick={() => scrollToSection('por-que-escolher')}
            className="hover:text-[#1F382D] transition-colors whitespace-nowrap shrink-0 hover:underline decoration-[#34483C]/40 underline-offset-8 cursor-pointer"
          >
            Por Que Escolher
          </button>
          <button
            onClick={() => scrollToSection('bonus')}
            className="hover:text-[#1F382D] transition-colors whitespace-nowrap shrink-0 hover:underline decoration-[#34483C]/40 underline-offset-8 cursor-pointer"
          >
            Bônus Exclusivos
          </button>
          <button
            onClick={() => scrollToSection('garantia')}
            className="hover:text-[#1F382D] transition-colors whitespace-nowrap shrink-0 hover:underline decoration-[#34483C]/40 underline-offset-8 cursor-pointer"
          >
            Garantia
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="hover:text-[#1F382D] transition-colors whitespace-nowrap shrink-0 hover:underline decoration-[#34483C]/40 underline-offset-8 cursor-pointer"
          >
            Dúvidas Frequentes
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenCheckout}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#34483C] hover:bg-[#1F382D] active:scale-[0.99] rounded-lg transition-all shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>QUERO OS 50 PROJETOS</span>
            <ArrowUpRight className="w-4 h-4 text-[#EDE8DE]" />
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#34483C] hover:text-[#1F382D] hover:bg-[#EDE8DE]/40 rounded-lg transition-colors cursor-pointer"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFFFF] border-b border-[#EDE8DE] px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col space-y-2 text-sm font-medium text-[#252525]">
            <button
              onClick={() => scrollToSection('categorias')}
              className="text-left py-2.5 px-3 rounded-md hover:bg-[#F8F7F3] hover:text-[#1F382D] transition-colors"
            >
              O Que Você Recebe
            </button>
            <button
              onClick={() => scrollToSection('por-que-escolher')}
              className="text-left py-2.5 px-3 rounded-md hover:bg-[#F8F7F3] hover:text-[#1F382D] transition-colors"
            >
              Por Que Escolher
            </button>
            <button
              onClick={() => scrollToSection('bonus')}
              className="text-left py-2.5 px-3 rounded-md hover:bg-[#F8F7F3] hover:text-[#1F382D] transition-colors"
            >
              Bônus Exclusivos
            </button>
            <button
              onClick={() => scrollToSection('garantia')}
              className="text-left py-2.5 px-3 rounded-md hover:bg-[#F8F7F3] hover:text-[#1F382D] transition-colors"
            >
              Garantia 7 Dias
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-left py-2.5 px-3 rounded-md hover:bg-[#F8F7F3] hover:text-[#1F382D] transition-colors"
            >
              Dúvidas Frequentes
            </button>
          </div>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCheckout();
              }}
              className="w-full py-3 text-center text-sm font-bold text-white bg-[#34483C] hover:bg-[#1F382D] rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <span>GARANTIR POR R$ {LANDING_CONFIG.PRODUCT_PRICE}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
