import React from 'react';
import { ShieldCheck, CheckCircle } from 'lucide-react';
import { LANDING_CONFIG } from '../config/landingConfig';

export const GuaranteeSection: React.FC = () => {
  return (
    <section id="garantia" className="py-16 sm:py-20 bg-[#F8F7F3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFFFF] border border-[#EDE8DE] rounded-3xl p-8 sm:p-12 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10">
          
          {/* Shield Icon Minimalist Badge */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#EDE8DE] flex items-center justify-center text-[#1F382D] shrink-0 border border-[#EDE8DE]">
            <ShieldCheck className="w-12 h-12 stroke-[1.5]" />
          </div>

          {/* Copy and reassurance */}
          <div className="text-center sm:text-left flex-1">
            <span className="text-xs font-bold uppercase tracking-widest text-[#34483C] block mb-1">
              COMPROMISSO E CONFIANÇA
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1F382D] mb-3 tracking-tight">
              {LANDING_CONFIG.GUARANTEE_TITLE}
            </h2>
            <p className="text-base text-[#252525]/85 font-normal leading-relaxed mb-6">
              {LANDING_CONFIG.GUARANTEE_TEXT}
            </p>

            <div className="inline-flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-4 border-t border-[#EDE8DE] text-xs text-[#252525]/75">
              <span className="flex items-center gap-1.5 font-medium text-[#1F382D]">
                <CheckCircle className="w-4 h-4 text-[#34483C]" />
                Reembolso sem complicação
              </span>
              <span className="flex items-center gap-1.5 font-medium text-[#1F382D]">
                <CheckCircle className="w-4 h-4 text-[#34483C]" />
                Código de Defesa do Consumidor
              </span>
              <span className="flex items-center gap-1.5 font-medium text-[#1F382D]">
                <CheckCircle className="w-4 h-4 text-[#34483C]" />
                Risco zero para conhecer
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
