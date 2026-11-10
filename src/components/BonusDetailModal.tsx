import React from 'react';
import { X, Check, Gift, ArrowRight, BookOpen } from 'lucide-react';
import { BonusItem, LANDING_CONFIG } from '../config/landingConfig';

interface BonusDetailModalProps {
  bonus: BonusItem | null;
  onClose: () => void;
  onOpenCheckout: () => void;
}

const BONUS_SUMMARIES: Record<string, string[]> = {
  "bonus-1": [
    "Capítulo 1: Como calcular as dimensões mínimas sem comprometer a circulação",
    "Capítulo 2: Mapeamento de pontos hidráulicos, esgoto e gás encanado",
    "Capítulo 3: Iluminação quente e circuitos elétricos para áreas semi-abertas",
    "Capítulo 4: Ordem correta de contratação: alvenaria, marmoraria e marcenaria",
    "Capítulo 5: Como evitar retrabalho em impermeabilização de calhas e pisos"
  ],
  "bonus-2": [
    "Item 01 a 08: Infraestrutura básica e tomadas 20A para grelhas elétricas",
    "Item 09 a 16: Ponto de exaustão e altura padrão de dutos de fumaça",
    "Item 17 a 25: Escolha do piso antiderrapante com baixo coeficiente de absorção",
    "Item 26 a 32: Espaço ergonômico de 90cm de altura para bancada de corte",
    "Item 33 a 40: Armários inferiores protegidos contra umidade externa"
  ],
  "bonus-3": [
    "Módulo 1: Granito São Gabriel vs Quartzo Branco vs Porcelanato esculpido",
    "Módulo 2: Madeiras de alta densidade (Cumaru, Ipê e Pinus tratado)",
    "Módulo 3: Revestimentos de parede: Tijolinho rústico, cobogós e subway tiles",
    "Módulo 4: Paletas de cores neutras e naturais para ampliar visualmente",
    "Módulo 5: Metais e cubas: inox fosco, preto fosco e cobre escovado"
  ]
};

export const BonusDetailModal: React.FC<BonusDetailModalProps> = ({
  bonus,
  onClose,
  onOpenCheckout,
}) => {
  if (!bonus) return null;

  const summary = BONUS_SUMMARIES[bonus.id] || [
    "Roteiro passo a passo com orientações práticas",
    "Exemplos de plantas e medidas recomendadas",
    "Dicas de materiais duráveis para áreas externas"
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-[#FFFFFF] w-full max-w-xl rounded-2xl border border-[#EDE8DE] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#EDE8DE] flex items-center justify-between bg-[#F8F7F3]">
          <div className="flex items-center gap-2">
            <Gift className="w-4 h-4 text-[#34483C]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#34483C]">
              Detalhes do {bonus.subtitle}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#252525]/70 hover:text-[#1F382D] hover:bg-[#EDE8DE]/50 rounded-lg transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="shrink-0 w-32 sm:w-36 rounded-xl bg-gradient-to-b from-[#EDE8DE]/50 to-[#EDE8DE]/20 p-2.5 border border-[#EDE8DE] flex items-center justify-center shadow-sm">
              <img
                src={bonus.coverImage}
                alt={bonus.title}
                className="w-auto max-h-[170px] object-contain drop-shadow-md"
              />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <div className="inline-block bg-[#EDE8DE] text-[#34483C] text-xs font-bold px-2.5 py-1 rounded-md mb-2">
                {bonus.badge} • Exclusivo do Plano Completo (R$ 17,90)
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1F382D] mb-2">
                {bonus.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#252525]/85 leading-relaxed font-normal">
                {bonus.description}
              </p>
            </div>
          </div>

          {/* Sumário do Guia */}
          <div className="bg-[#F8F7F3] rounded-xl p-4 sm:p-5 border border-[#EDE8DE]">
            <h4 className="text-xs font-bold text-[#34483C] uppercase tracking-wider mb-3">
              Sumário de Tópicos ({bonus.pages} páginas):
            </h4>
            <ul className="space-y-2.5">
              {summary.map((item, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-[#252525] flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#34483C] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-xs text-[#252525]/70">
            Formato: <strong>Arquivo digital em PDF</strong> liberado para download junto com a coleção principal.
          </p>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-[#EDE8DE] bg-[#F8F7F3] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#252525]/75 text-center sm:text-left">
            <span>Incluso no </span>
            <strong className="text-[#1F382D] font-bold">Plano Completo por apenas R$ 17,90</strong>
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenCheckout();
            }}
            className="w-full sm:w-auto px-6 py-2.5 bg-[#34483C] hover:bg-[#1F382D] text-white text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            <span>QUERO O PLANO COMPLETO (R$ 17,90)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
