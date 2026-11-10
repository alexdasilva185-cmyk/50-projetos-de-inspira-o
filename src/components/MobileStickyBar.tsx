import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { LANDING_CONFIG } from '../config/landingConfig';
import { MidnightTimerData } from '../hooks/useMidnightTimer';

interface MobileStickyBarProps {
  onOpenCheckout: () => void;
  timer: MidnightTimerData;
  price?: string;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  onOpenCheckout,
  timer,
  price = LANDING_CONFIG.PRODUCT_PRICE,
}) => {
  return (
    <aside
      aria-label="Barra de compra rápida"
      className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#FFFFFF]/98 backdrop-blur-md border-t border-[#EDE8DE] px-3.5 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-4px_16px_rgba(0,0,0,0.06)]"
    >
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        {/* Left: Product & Price & Dynamic Urgency */}
        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-1 text-[10px] text-[#34483C] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34483C] animate-pulse" />
            <span className="truncate">Oferta até 23:59 ({timer.formattedShortDate})</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-[10px] text-[#252525]/70">a partir de</span>
            <span className="text-xs text-[#1F382D] font-bold">R$</span>
            <span className="text-lg font-bold text-[#1F382D] leading-none">
              3,90
            </span>
          </div>
        </div>

        {/* Right: CTA Button */}
        <button
          onClick={onOpenCheckout}
          className="flex-1 max-w-[200px] h-11 bg-[#34483C] hover:bg-[#1F382D] active:scale-[0.98] text-white text-xs font-bold rounded-lg px-3 py-2 flex items-center justify-center gap-1.5 transition-all shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
        >
          <span>QUERO OS PROJETOS</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
