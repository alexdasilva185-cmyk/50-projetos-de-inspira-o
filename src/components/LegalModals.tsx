import React from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { LANDING_CONFIG } from '../config/landingConfig';

interface LegalModalProps {
  type: 'terms' | 'privacy' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isTerms = type === 'terms';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-[#FFFFFF] w-full max-w-2xl rounded-2xl border border-[#EDE8DE] shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#EDE8DE] flex items-center justify-between bg-[#F8F7F3]">
          <div className="flex items-center gap-2">
            {isTerms ? (
              <FileText className="w-5 h-5 text-[#34483C]" />
            ) : (
              <Shield className="w-5 h-5 text-[#34483C]" />
            )}
            <h3 className="text-base font-bold text-[#1F382D]">
              {isTerms ? 'Termos de Uso' : 'Política de Privacidade'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#252525]/70 hover:text-[#1F382D] hover:bg-[#EDE8DE]/50 rounded-lg transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-[#252525]/85 leading-relaxed">
          {isTerms ? (
            <>
              <h4 className="font-bold text-[#1F382D] text-sm sm:text-base">
                1. Natureza do Produto
              </h4>
              <p>
                O produto intitulado <strong>50 Projetos de Áreas Gourmet Pequenas</strong> é um infoproduto 100% digital disponibilizado no formato PDF. Não há envio de nenhum item físico pelos Correios.
              </p>

              <h4 className="font-bold text-[#1F382D] text-sm sm:text-base">
                2. Finalidade Exclusivamente Inspiracional e Educativa
              </h4>
              <p>
                {LANDING_CONFIG.FOOTER_DISCLAIMER} As ideias, ilustrações, dimensões sugeridas e paletas de materiais servem como fonte de consulta e planejamento inicial. A realização de reformas e alterações estruturais deve sempre ser orientada por profissionais habilitados (engenheiros, arquitetos ou técnicos).
              </p>

              <h4 className="font-bold text-[#1F382D] text-sm sm:text-base">
                3. Direito de Arrependimento e Garantia
              </h4>
              <p>
                Em conformidade com o Código de Defesa do Consumidor brasileiro, o adquirente tem o prazo incondicional de 7 (sete) dias corridos a contar da confirmação do pagamento para solicitar o cancelamento e reembolso integral do valor pago diretamente pela plataforma de pagamentos.
              </p>

              <h4 className="font-bold text-[#1F382D] text-sm sm:text-base">
                4. Direitos Autorais e Uso Pessoal
              </h4>
              <p>
                O material adquirido destina-se ao uso individual e privado do comprador. É terminantemente proibida a reprodução em massa, revenda, distribuição não autorizada, rateio ou upload em plataformas públicas de download.
              </p>
            </>
          ) : (
            <>
              <h4 className="font-bold text-[#1F382D] text-sm sm:text-base">
                1. Coleta de Informações
              </h4>
              <p>
                Respeitamos integralmente a sua privacidade nos termos da LGPD (Lei Geral de Proteção de Dados - Lei nº 13.709/2018). Os dados solicitados no checkout (como nome, e-mail e dados de pagamento) são processados exclusivamente pela plataforma de processamento de pagamentos para identificação do pedido e envio dos arquivos digitais.
              </p>

              <h4 className="font-bold text-[#1F382D] text-sm sm:text-base">
                2. Utilização do E-mail
              </h4>
              <p>
                O endereço de e-mail informado é utilizado prioritariamente para o envio do link de download e instruções de acesso ao material digital e bônus. Não compartilhamos nem comercializamos listas de e-mails com terceiros.
              </p>

              <h4 className="font-bold text-[#1F382D] text-sm sm:text-base">
                3. Segurança da Informação
              </h4>
              <p>
                Todas as transações financeiras ocorrem em ambientes criptografados (SSL/TLS de 256 bits) providos por operadoras de pagamento certificadas (PCI-DSS). Nós não temos acesso nem armazenamos os números completos de seus cartões de crédito.
              </p>

              <h4 className="font-bold text-[#1F382D] text-sm sm:text-base">
                4. Contato do Encarregado de Dados
              </h4>
              <p>
                Para exercer seus direitos de confirmação de dados, retificação ou exclusão de cadastro, basta entrar em contato com o suporte através do e-mail <strong>{LANDING_CONFIG.SUPPORT_EMAIL}</strong>.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#EDE8DE] bg-[#F8F7F3] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#34483C] text-white text-xs font-bold rounded-lg hover:bg-[#1F382D] transition-colors cursor-pointer"
          >
            Entendido e Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
