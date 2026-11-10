import React from 'react';
import { LANDING_CONFIG } from '../config/landingConfig';
import { MidnightTimerData } from '../hooks/useMidnightTimer';

interface UrgencyHeaderProps {
  onOpenCheckout?: () => void;
  timer: MidnightTimerData;
  price?: string;
}

export const UrgencyHeader: React.FC<UrgencyHeaderProps> = ({
  timer,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full transition-all shadow-sm">
      {/* Top Urgency Bar utilizing the project's color palette (Verde Profundo #1F382D e Bege Suave #EDE8DE) */}
      <div className="w-full bg-[#1F382D] text-[#EDE8DE] py-2 sm:py-2.5 px-3 sm:px-4 border-b border-[#34483C] text-center">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-1 sm:gap-2 text-[11px] sm:text-xs md:text-sm font-bold tracking-wide uppercase text-center">
          <span className="text-sm sm:text-base leading-none" role="img" aria-label="Fogo">
            🔥
          </span>
          <span className="leading-tight text-[#EDE8DE]">
            DESCONTO ESPECIAL DISPONÍVEL HOJE:
          </span>
          <span className="font-mono text-white tabular-nums tracking-wider underline decoration-[#EDE8DE]/40 leading-tight">
            {timer.formattedDateFullNumeric}
          </span>
        </div>
      </div>
    </header>
  );
};
