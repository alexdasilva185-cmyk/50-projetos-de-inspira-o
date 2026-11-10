import React, { useState } from 'react';
import { UrgencyHeader } from './components/UrgencyHeader';
import { HeroSection } from './components/HeroSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { BonusSection } from './components/BonusSection';
import { OfferSection } from './components/OfferSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { SamplePreviewModal } from './components/SamplePreviewModal';
import { ProductPreviewCarousel } from './components/ProductPreviewCarousel';
import { BonusDetailModal } from './components/BonusDetailModal';
import { CheckoutModal } from './components/CheckoutModal';
import { LegalModal } from './components/LegalModals';
import { LANDING_CONFIG, BonusItem, OfferPlan } from './config/landingConfig';
import { useMidnightTimer } from './hooks/useMidnightTimer';

export default function App() {
  // Dynamic midnight timer & date hook (auto-rolls over at 00:00)
  const timer = useMidnightTimer();

  // Modal states
  const [selectedBonus, setSelectedBonus] = useState<BonusItem | null>(null);
  const [sampleModalOpen, setSampleModalOpen] = useState(false);
  const [selectedSampleIndex, setSelectedSampleIndex] = useState(0);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<'basic' | 'vip'>('vip');
  const [legalModalType, setLegalModalType] = useState<'terms' | 'privacy' | null>(null);

  const handleOpenCheckout = (plan?: OfferPlan) => {
    if (plan) {
      setSelectedPlanId(plan.id);
    }
    setCheckoutModalOpen(true);
  };

  const handleScrollToDemonstration = () => {
    const el = document.getElementById('demonstracao');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollToOffer = () => {
    const el = document.getElementById('oferta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      setCheckoutModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F7F3] text-[#252525] font-sans selection:bg-[#34483C] selection:text-white">
      {/* 1. Barra / Sessão de Urgência Dinâmica com data automática */}
      <UrgencyHeader
        onOpenCheckout={handleScrollToOffer}
        timer={timer}
      />

      <main className="flex-1">
        {/* 2. Hero Section — 1ª Dobra com Mockup Centralizado direcionando para a demonstração */}
        <HeroSection
          onOpenCheckout={handleScrollToDemonstration}
          onOpenSample={() => {
            setSelectedSampleIndex(0);
            setSampleModalOpen(true);
          }}
          timer={timer}
        />

        {/* 3. Amostra Real do E-book em Carrossel Contínuo (rodando automaticamente sem puxar) */}
        <ProductPreviewCarousel
          onSelectPage={(pageIdx) => {
            setSelectedSampleIndex(pageIdx);
            setSampleModalOpen(true);
          }}
          onOpenCheckout={handleScrollToOffer}
        />

        {/* 4. Por Que Escolher Este Produto (4 cards + CTA secundário) */}
        <WhyChooseSection onOpenCheckout={handleScrollToOffer} />

        {/* 6. Bônus Exclusivos (3 guias práticos) */}
        <BonusSection
          onOpenCheckout={handleScrollToOffer}
          onPreviewBonus={(bonus) => setSelectedBonus(bonus)}
        />

        {/* 7. As Duas Ofertas: R$ 3,90 (Essencial) e R$ 17,90 (Completo) */}
        <OfferSection
          onOpenCheckout={handleOpenCheckout}
          timer={timer}
        />

        {/* 8. Depoimentos (3 cards com transparência) */}
        <TestimonialsSection />

        {/* 9. Garantia de 7 Dias */}
        <GuaranteeSection />

        {/* 10. FAQ — Perguntas Frequentes (Accordion funcional) */}
        <FaqSection />
      </main>

      {/* Rodapé Minimalista */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      {/* Modals & Drawers */}

      <SamplePreviewModal
        isOpen={sampleModalOpen}
        onClose={() => setSampleModalOpen(false)}
        onOpenCheckout={handleScrollToOffer}
        initialPageIndex={selectedSampleIndex}
      />

      <BonusDetailModal
        bonus={selectedBonus}
        onClose={() => setSelectedBonus(null)}
        onOpenCheckout={handleScrollToOffer}
      />

      <CheckoutModal
        isOpen={checkoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
        timer={timer}
        initialPlanId={selectedPlanId}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
