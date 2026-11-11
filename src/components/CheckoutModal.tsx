import React, { useState, useEffect } from 'react';
import { X, ExternalLink, ShieldCheck, Check, Sparkles, CreditCard, QrCode, Mail, Settings, Clock, Star } from 'lucide-react';
import { LANDING_CONFIG, OfferPlan } from '../config/landingConfig';
import { MidnightTimerData } from '../hooks/useMidnightTimer';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  timer: MidnightTimerData;
  initialPlanId?: 'basic' | 'vip';
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  timer,
  initialPlanId = 'vip',
}) => {
  const [activeTab, setActiveTab] = useState<'checkout' | 'settings'>('checkout');
  const [selectedPlanId, setSelectedPlanId] = useState<'basic' | 'vip'>(initialPlanId);
  const [basicUrl, setBasicUrl] = useState(LANDING_CONFIG.OFFER_PLANS[0].checkoutUrl);
  const [vipUrl, setVipUrl] = useState(LANDING_CONFIG.OFFER_PLANS[1].checkoutUrl);
  const [savedMessage, setSavedMessage] = useState(false);
  const [simulatedPaymentStep, setSimulatedPaymentStep] = useState<'details' | 'success'>('details');

  useEffect(() => {
    if (initialPlanId) {
      setSelectedPlanId(initialPlanId);
    }
  }, [initialPlanId]);

  if (!isOpen) return null;

  const currentPlan =
    LANDING_CONFIG.OFFER_PLANS.find((p) => p.id === selectedPlanId) ||
    LANDING_CONFIG.OFFER_PLANS[1];

  const currentCheckoutUrl = selectedPlanId === 'basic' ? basicUrl : vipUrl;
  const isDemoUrl = currentCheckoutUrl.includes('demo') || currentCheckoutUrl.includes('example');

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-[#FFFFFF] w-full max-w-xl rounded-2xl border border-[#EDE8DE] shadow-2xl overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-[#EDE8DE] flex items-center justify-between bg-[#F8F7F3]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#34483C]" />
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#34483C] block leading-none">
                Ambiente de Pedido Seguro
              </span>
              <span className="text-sm font-bold text-[#1F382D]">
                50 Projetos de Áreas Gourmet
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setActiveTab(activeTab === 'checkout' ? 'settings' : 'checkout')}
              className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer ${
                activeTab === 'settings'
                  ? 'bg-[#34483C] text-white'
                  : 'text-[#34483C] hover:bg-[#EDE8DE]/60'
              }`}
              title="Configurações das URLs de Checkout"
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Configurar</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#252525]/70 hover:text-[#1F382D] hover:bg-[#EDE8DE]/50 rounded-lg transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab 1: Checkout Content */}
        {activeTab === 'checkout' && (
          <div className="p-5 sm:p-7 overflow-y-auto space-y-5">
            
            {/* Plan Selector Buttons */}
            <div>
              <label className="text-xs font-bold text-[#34483C] uppercase tracking-wider block mb-2">
                Selecione sua opção:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedPlanId('basic')}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedPlanId === 'basic'
                      ? 'border-[#34483C] bg-[#EDE8DE]/40 shadow-xs'
                      : 'border-[#EDE8DE] bg-[#FFFFFF] hover:bg-[#F8F7F3]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-[#1F382D]">Plano Básico</span>
                    <span className="text-xs font-bold text-[#34483C]">R$ 3,90</span>
                  </div>
                  <span className="text-[11px] text-[#252525]/70 block leading-tight">
                    50 Projetos em PDF
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedPlanId('vip')}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer relative ${
                    selectedPlanId === 'vip'
                      ? 'border-[#1F382D] bg-[#EDE8DE]/60 shadow-xs ring-1 ring-[#1F382D]'
                      : 'border-[#EDE8DE] bg-[#FFFFFF] hover:bg-[#F8F7F3]'
                  }`}
                >
                  <span className="absolute -top-2 right-2 bg-[#1F382D] text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">
                    Mais Vendido
                  </span>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-[#1F382D]">Plano Completo</span>
                    <span className="text-xs font-bold text-[#1F382D]">R$ 19,90</span>
                  </div>
                  <span className="text-[11px] text-[#252525]/70 block leading-tight">
                    Projetos + 3 Bônus
                  </span>
                </button>
              </div>
            </div>

            {simulatedPaymentStep === 'details' ? (
              <>
                {/* Product Summary Box */}
                <div className="rounded-xl border border-[#EDE8DE] p-4 bg-[#F8F7F3] shadow-xs">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h4 className="text-base font-bold text-[#1F382D]">
                        {currentPlan.name}
                      </h4>
                      <p className="text-xs text-[#252525]/70">
                        {currentPlan.subtitle}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xs text-[#252525]/60 block">Valor único</span>
                      <span className="text-2xl font-bold text-[#1F382D]">
                        R$ {currentPlan.price}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-1.5 pt-3 border-t border-[#EDE8DE] text-xs text-[#252525]/85">
                    {currentPlan.features.slice(0, 4).map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#34483C]" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Payment Methods preview */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#34483C] uppercase tracking-wider block">
                    Formas aceitas no checkout seguro:
                  </span>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-lg border border-[#EDE8DE] bg-[#FFFFFF] flex items-center gap-2">
                      <QrCode className="w-4 h-4 text-[#34483C]" />
                      <span>PIX (Acesso Imediato)</span>
                    </div>
                    <div className="p-3 rounded-lg border border-[#EDE8DE] bg-[#FFFFFF] flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-[#34483C]" />
                      <span>Cartão de Crédito</span>
                    </div>
                  </div>
                </div>

                {/* Primary Action: Go to real checkout */}
                <div className="pt-2 flex flex-col gap-2.5">
                  <a
                    href={currentCheckoutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-5 bg-[#34483C] hover:bg-[#1F382D] text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg text-center"
                  >
                    <span>Prosseguir para o Checkout Seguro (R$ {currentPlan.price})</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  {isDemoUrl && (
                    <button
                      onClick={() => setSimulatedPaymentStep('success')}
                      className="w-full py-2 px-3 bg-[#EDE8DE]/70 hover:bg-[#EDE8DE] text-[#1F382D] text-xs font-semibold rounded-lg transition-colors text-center cursor-pointer"
                    >
                      Simular confirmação de pedido no app
                    </button>
                  )}
                </div>
              </>
            ) : (
              /* Simulated Success State */
              <div className="py-6 text-center space-y-4">
                <div className="w-14 h-14 bg-[#34483C]/10 text-[#34483C] rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 stroke-[2.5]" />
                </div>
                <h4 className="text-xl font-bold text-[#1F382D]">
                  Simulação de Compra Confirmada!
                </h4>
                <p className="text-sm text-[#252525]/80 max-w-sm mx-auto font-normal">
                  Na compra real, o comprador recebe instantaneamente no e-mail cadastrado o link direto para download do {currentPlan.name}.
                </p>
                <div className="bg-[#F8F7F3] p-4 rounded-xl border border-[#EDE8DE] text-xs text-left max-w-sm mx-auto space-y-1 text-[#252525]/80">
                  <div className="flex justify-between">
                    <span>Item:</span>
                    <strong className="text-[#1F382D]">{currentPlan.name}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Valor:</span>
                    <strong className="text-[#1F382D]">R$ {currentPlan.price}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Garantia:</span>
                    <strong className="text-[#1F382D]">7 Dias</strong>
                  </div>
                </div>
                <button
                  onClick={() => setSimulatedPaymentStep('details')}
                  className="px-5 py-2.5 bg-[#34483C] text-white text-xs font-bold rounded-lg hover:bg-[#1F382D] transition-colors cursor-pointer"
                >
                  Voltar ao início do checkout
                </button>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Settings Form */}
        {activeTab === 'settings' && (
          <form onSubmit={handleSaveSettings} className="p-5 sm:p-7 overflow-y-auto space-y-4">
            <div className="border-b border-[#EDE8DE] pb-3 mb-2">
              <h4 className="text-base font-bold text-[#1F382D]">
                Configuração das URLs dos 2 Checkouts
              </h4>
              <p className="text-xs text-[#252525]/75">
                Defina os links diretos das suas plataformas de vendas para cada oferta.
              </p>
            </div>

            <div>
              <label className="text-xs font-bold text-[#1F382D] block mb-1">
                URL do Plano Básico (R$ 3,90)
              </label>
              <input
                type="url"
                value={basicUrl}
                onChange={(e) => setBasicUrl(e.target.value)}
                className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-[#EDE8DE] bg-[#F8F7F3] focus:outline-none focus:border-[#34483C]"
                placeholder="https://checkout.wcheckout.com.br/..."
                required
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#1F382D] block mb-1">
                URL do Plano Completo + 3 Bônus (R$ 19,90)
              </label>
              <input
                type="url"
                value={vipUrl}
                onChange={(e) => setVipUrl(e.target.value)}
                className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-[#EDE8DE] bg-[#F8F7F3] focus:outline-none focus:border-[#34483C]"
                placeholder="https://checkout.wcheckout.com.br/..."
                required
              />
            </div>

            {/* Teste da virada de meia-noite */}
            <div className="bg-[#EDE8DE]/50 border border-[#EDE8DE] rounded-xl p-3.5 space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#34483C]" />
                <span className="text-xs font-bold text-[#1F382D]">
                  Teste da Virada de Meia-Noite
                </span>
              </div>
              <p className="text-[11px] text-[#252525]/80 leading-relaxed">
                Data ativa no topo e nas ofertas: <strong>{timer.formattedWeekdayDate}</strong>.
                Contagem regressiva até 23:59: <strong>{timer.hours}h {timer.minutes}m {timer.seconds}s</strong>.
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={timer.advanceDayForDemo}
                  className="px-3 py-1.5 bg-[#34483C] hover:bg-[#1F382D] text-white rounded-lg text-xs font-semibold cursor-pointer transition-colors"
                >
                  Simular virada de meia-noite (+1 dia)
                </button>
                {timer.isSimulatedDay && (
                  <button
                    type="button"
                    onClick={timer.resetToRealDate}
                    className="px-3 py-1.5 bg-white border border-[#EDE8DE] text-[#252525] rounded-lg text-xs font-semibold hover:bg-[#EDE8DE] cursor-pointer transition-colors"
                  >
                    Voltar à data real de hoje
                  </button>
                )}
              </div>
            </div>

            {savedMessage && (
              <div className="p-2.5 bg-emerald-50 text-emerald-800 text-xs font-medium rounded-lg border border-emerald-200 flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Configurações atualizadas com sucesso!</span>
              </div>
            )}

            <div className="pt-3 flex justify-end">
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#34483C] hover:bg-[#1F382D] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
              >
                Salvar Alterações
              </button>
            </div>
          </form>
        )}

        {/* Footer */}
        <div className="p-4 border-t border-[#EDE8DE] bg-[#F8F7F3] flex items-center justify-between text-xs text-[#252525]/75">
          <div className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-[#34483C]" />
            <span>Suporte: {LANDING_CONFIG.SUPPORT_EMAIL}</span>
          </div>
          <span>Garantia de 7 dias</span>
        </div>
      </div>
    </div>
  );
};
