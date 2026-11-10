import React from 'react';
import { Check, ShieldCheck, Download, ArrowRight, Lock, Star } from 'lucide-react';
import { LANDING_CONFIG, OfferPlan } from '../config/landingConfig';
import { MidnightTimerData } from '../hooks/useMidnightTimer';

interface OfferSectionProps {
  onOpenCheckout: (plan?: OfferPlan) => void;
  timer?: MidnightTimerData;
}

export const OfferSection: React.FC<OfferSectionProps> = ({
  onOpenCheckout,
}) => {
  return (
    <section id="oferta" className="py-12 sm:py-24 bg-[#1F382D] text-white relative overflow-hidden scroll-mt-14 content-auto">
      {/* Decorative architectural grid background subtle texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#EDE8DE] block mb-2">
            ESCOLHA O SEU PACOTE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 text-balance">
            {LANDING_CONFIG.OFFER_TITLE}
          </h2>
          <p className="text-sm sm:text-base text-[#EDE8DE]/90 max-w-xl mx-auto font-normal">
            {LANDING_CONFIG.OFFER_SUBTITLE}
          </p>
        </div>

        {/* 2 Offer Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch max-w-5xl mx-auto mb-12">
          {LANDING_CONFIG.OFFER_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-5 sm:p-9 flex flex-col justify-between transition-all duration-300 relative ${
                plan.isFeatured
                  ? 'bg-[#FFFFFF] text-[#252525] border-2 border-[#EDE8DE] shadow-2xl lg:scale-[1.03] z-20'
                  : 'bg-[#F8F7F3] text-[#252525] border border-[#EDE8DE] shadow-lg z-10'
              }`}
            >
              {/* Featured Badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span
                    className={`inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-bold tracking-wider shadow-sm uppercase ${
                      plan.isFeatured
                        ? 'bg-[#1F382D] text-white'
                        : 'bg-[#EDE8DE] text-[#1F382D]'
                    }`}
                  >
                    {plan.isFeatured && <Star className="w-3 h-3 fill-current text-[#EDE8DE]" />}
                    <span>{plan.badge}</span>
                  </span>
                </div>
              )}

              {/* Card Header & Price */}
              <div>
                <div className="text-center pt-2 pb-6 border-b border-[#EDE8DE]">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1F382D] tracking-tight">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-[#252525]/70 mt-1">
                    {plan.subtitle}
                  </p>

                  {/* Price */}
                  <div className="mt-5 flex items-baseline justify-center gap-1.5 text-[#1F382D]">
                    <span className="text-xl sm:text-2xl font-bold">R$</span>
                    <span className="text-5xl sm:text-6xl font-bold tracking-tight font-sans">
                      {plan.price}
                    </span>
                  </div>
                  <span className="text-xs text-[#252525]/60 mt-1 block">
                    Pagamento único • Acesso imediato
                  </span>
                </div>

                {/* Features List */}
                <div className="py-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#252525]">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            plan.isFeatured
                              ? 'bg-[#1F382D] text-white'
                              : 'bg-[#34483C]/15 text-[#34483C]'
                          }`}
                        >
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <span className={plan.isFeatured && idx < 4 ? 'font-medium' : 'font-normal'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#EDE8DE]">
                <a
                  href={plan.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    try {
                      if (typeof window !== 'undefined' && (window as any).fbq) {
                        (window as any).fbq('track', 'InitiateCheckout', {
                          content_name: plan.name,
                          value: Number(plan.price.replace(',', '.')),
                          currency: 'BRL',
                        });
                      }
                    } catch (e) {
                      // ignore tracking failure
                    }
                  }}
                  className={`w-full py-4 px-6 text-sm sm:text-base font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer group active:scale-[0.99] text-center ${
                    plan.isFeatured
                      ? 'bg-[#34483C] hover:bg-[#1F382D] text-white hover:shadow-lg'
                      : 'bg-[#EDE8DE] hover:bg-[#34483C] hover:text-white text-[#1F382D]'
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-[11px] text-[#252525]/60 text-center mt-2.5">
                  {plan.subtext}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="border-t border-[#34483C] pt-8 max-w-2xl mx-auto flex flex-wrap items-center justify-center gap-6 text-xs text-[#EDE8DE]/80">
          <div className="flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-[#EDE8DE]" />
            <span>Ambiente Seguro</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Download className="w-4 h-4 text-[#EDE8DE]" />
            <span>Download Imediato</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#EDE8DE]" />
            <span>Garantia de 7 Dias</span>
          </div>
        </div>

      </div>
    </section>
  );
};
