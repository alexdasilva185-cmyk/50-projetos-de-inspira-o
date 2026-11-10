import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { LANDING_CONFIG } from '../config/landingConfig';

export const FaqSection: React.FC = () => {
  // First item open by default for immediate preview
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FFFFFF] border-t border-[#EDE8DE]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-3 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#34483C]">
            <HelpCircle className="w-4 h-4 text-[#34483C]" />
            <span>PERGUNTAS FREQUENTES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F382D] tracking-tight mb-4 text-balance">
            {LANDING_CONFIG.FAQ_TITLE}
          </h2>
          <p className="text-base text-[#252525]/80 font-normal leading-relaxed">
            Respostas diretas e transparentes sobre o formato, conteúdo e entrega do material.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {LANDING_CONFIG.FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#F8F7F3] border border-[#EDE8DE] rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#EDE8DE]/30 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#1F382D]">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#EDE8DE] flex items-center justify-center shrink-0 text-[#1F382D] transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#34483C] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-[#252525]/85 leading-relaxed font-normal border-t border-[#EDE8DE]/70 pt-4 animate-in fade-in duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional support note */}
        <div className="mt-10 text-center text-xs text-[#252525]/70">
          Ainda tem alguma pergunta? Fale diretamente com nossa equipe em{' '}
          <a
            href={`mailto:${LANDING_CONFIG.SUPPORT_EMAIL}`}
            className="text-[#1F382D] font-bold underline hover:text-[#34483C]"
          >
            {LANDING_CONFIG.SUPPORT_EMAIL}
          </a>
        </div>

      </div>
    </section>
  );
};
