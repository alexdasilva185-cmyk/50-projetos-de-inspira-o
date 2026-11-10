export interface ProjectCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  highlight: string;
  features: string[];
}

export interface BonusItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  highlights: string[];
  pages: number;
  coverImage: string;
}

export interface OfferPlan {
  id: 'basic' | 'vip';
  name: string;
  subtitle: string;
  badge?: string;
  price: string;
  checkoutUrl: string;
  isFeatured: boolean;
  features: string[];
  cta: string;
  subtext: string;
}

export interface WhyChooseItem {
  title: string;
  description: string;
  editorialNumber: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  role: string;
  comment: string;
  rating: number;
  isPlaceholderNotice: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SamplePageItem {
  pageNumber: number;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  badge: string;
  category: string;
}

export const BOOK_SAMPLE_PAGES: SamplePageItem[] = [
  {
    pageNumber: 1,
    title: "Projeto 01 — Compacta e Moderna",
    subtitle: "Solução Linear para Quintais Estreitos",
    image: "/assets/aistudio/Imagem_do_ChatGPT_9_de_nov._de_2026__14_53_28-1_7dcdfb9c.png",
    description: "Layout inteligente com bancada linear, churrasqueira embutida e otimização total de circulação.",
    badge: "PROJETO 01",
    category: "Áreas Compactas"
  },
  {
    pageNumber: 2,
    title: "Projeto 02 — Rústica e Aconchegante",
    subtitle: "Tijolo Aparente & Madeira Maciça",
    image: "/assets/aistudio/Imagem_do_ChatGPT_9_de_nov._de_2026__14_53_29-2_40eb79e0.png",
    description: "Atmosfera de casa de campo no quintal urbano com forno e materiais nobres de demolição.",
    badge: "PROJETO 02",
    category: "Estilo Rústico"
  },
  {
    pageNumber: 3,
    title: "Projeto 03 — Pergolado & Jardim",
    subtitle: "Conforto Térmico & Biofilia Integrada",
    image: "/assets/aistudio/Imagem_do_ChatGPT_9_de_nov._de_2026__14_53_30-3_61c891bb.png",
    description: "Estrutura de sombreamento natural com plantas suspensas, iluminação quente e piso drenante.",
    badge: "PROJETO 03",
    category: "Pergolados"
  },
  {
    pageNumber: 4,
    title: "Projeto 04 — Bancada em L",
    subtitle: "Aproveitamento Máximo dos Cantos",
    image: "/assets/aistudio/Imagem_do_ChatGPT_9_de_nov._de_2026__14_53_31-4_5ddf642c.png",
    description: "Configuração em L que separa área de cocção, pia e bancada de banquetas para receber amigos.",
    badge: "PROJETO 04",
    category: "Bancadas"
  },
  {
    pageNumber: 5,
    title: "Projeto 05 — Ilha Compacta",
    subtitle: "Integração & Praticidade Central",
    image: "/assets/aistudio/Imagem_do_ChatGPT_9_de_nov._de_2026__14_53_31-5_6d0b078e.png",
    description: "Bancada ilha multifuncional com espaço para banquetas e nicho para frigobar ou adega.",
    badge: "PROJETO 05",
    category: "Ilhas Gourmet"
  },
  {
    pageNumber: 6,
    title: "Guia Prático — Planejamento Inteligente",
    subtitle: "Medidas Mínimas & Ergonomia",
    image: "/assets/aistudio/Imagem_do_ChatGPT_9_de_nov._de_2026__14_53_32-6_c05785eb.png",
    description: "Distâncias ideais entre bancada, churrasqueira e mesa para circulação fluida sem aperto.",
    badge: "GUIA PRÁTICO",
    category: "Fundamentos Técnicos"
  },
  {
    pageNumber: 7,
    title: "Guia Prático — Materiais e Acabamentos",
    subtitle: "Resistência ao Tempo, Calor e Chuva",
    image: "/assets/aistudio/Imagem_do_ChatGPT_9_de_nov._de_2026__14_53_33-7_cec8fe4a.png",
    description: "Comparativo prático de pedras (granito vs quartzo), madeiras tratadas e revestimentos de fácil limpeza.",
    badge: "GUIA PRÁTICO",
    category: "Materiais"
  },
  {
    pageNumber: 8,
    title: "Guia Prático — Layouts e Medidas",
    subtitle: "Plantas Esquemáticas Linear, L e Ilha",
    image: "/assets/aistudio/Imagem_do_ChatGPT_9_de_nov._de_2026__14_53_34-8_5df05432.png",
    description: "Cotas detalhadas de 2,40m, 1,80m e 2,10m com zonas de preparo, apoio de bancada e circulação mínima.",
    badge: "GUIA PRÁTICO",
    category: "Plantas & Cotas"
  },
  {
    pageNumber: 9,
    title: "Guia Prático — Decoração e Iluminação",
    subtitle: "Cenografia Noturna & Aconchego",
    image: "/assets/aistudio/Imagem_do_ChatGPT_9_de_nov._de_2026__14_53_34-9_cf8ceb38.png",
    description: "Dicas de fitas LED 2700K embutidas, arandelas indiretas e objetos decorativos acolhedores.",
    badge: "GUIA PRÁTICO",
    category: "Iluminação"
  },
  {
    pageNumber: 10,
    title: "Guia Prático — Erros Comuns e Soluções",
    subtitle: "Evite Gastar Dinheiro à Toa",
    image: "/assets/aistudio/Imagem_do_ChatGPT_9_de_nov._de_2026__14_53_35-10_d1cf7b1e.png",
    description: "Os maiores erros cometidos em obras de áreas gourmet e como resolvê-los antes de colocar o primeiro tijolo.",
    badge: "GUIA PRÁTICO",
    category: "Checklist de Obra"
  }
];

export interface TestimonialImageItem {
  id: string;
  name: string;
  image: string;
}

export const TESTIMONIAL_IMAGES: TestimonialImageItem[] = [
  {
    id: "1",
    name: "Camila Dourado",
    image: "/assets/aistudio/Imagem_do_ChatGPT_9_de_nov._de_2026__15_56_49-1_290dd763.png"
  },
  {
    id: "2",
    name: "Felipe Barros",
    image: "/assets/aistudio/Imagem_do_ChatGPT_9_de_nov._de_2026__15_56_50-2_b9f99ea1.png"
  },
  {
    id: "3",
    name: "Eduardo Siqueira",
    image: "/assets/aistudio/Imagem_do_ChatGPT_9_de_nov._de_2026__15_56_50-3_bd6531b6.png"
  },
  {
    id: "4",
    name: "André Tavares",
    image: "/assets/aistudio/Imagem_do_ChatGPT_9_de_nov._de_2026__15_56_51-4_6764c989.png"
  },
  {
    id: "5",
    name: "Patrícia Freitas",
    image: "/assets/aistudio/Imagem_do_ChatGPT_9_de_nov._de_2026__15_56_51-5_8767bc90.png"
  },
  {
    id: "6",
    name: "Ricardo Nogueira",
    image: "/assets/aistudio/Imagem_do_ChatGPT_9_de_nov._de_2026__15_56_52-6_04d048d0.png"
  },
  {
    id: "7",
    name: "Juliana Batista",
    image: "/assets/aistudio/Imagem_do_ChatGPT_9_de_nov._de_2026__15_56_52-7_81d41eed.png"
  },
  {
    id: "8",
    name: "Fernanda Rocha",
    image: "/assets/aistudio/Imagem_do_ChatGPT_9_de_nov._de_2026__15_56_53-8_8b641eba.png"
  },
  {
    id: "9",
    name: "Mariana Alves",
    image: "/assets/aistudio/Imagem_do_ChatGPT_9_de_nov._de_2026__15_56_54-9_bd848f0d.png"
  },
  {
    id: "10",
    name: "Carlos Mendes",
    image: "/assets/aistudio/Imagem_do_ChatGPT_9_de_nov._de_2026__15_56_54-10_d5e89389.png"
  }
];

export const LANDING_CONFIG = {
  PRODUCT_NAME: "50 Projetos de Áreas Gourmet Pequenas",
  PRODUCT_SUBTITLE: "Coleção Digital de Arquitetura & Decoração",
  PRODUCT_PRICE: "3,90",
  CURRENCY: "R$",
  CHECKOUT_URL: "https://checkout.wcheckout.com.br/v1/xqznx0gk",
  SUPPORT_EMAIL: "suporte@areagourmet50.com.br",
  GUARANTEE_DAYS: 7,

  HERO_IMAGE: "/src/assets/images/hero_area_gourmet_1794242764326.jpg",
  MOCKUP_IMAGE: "/assets/aistudio/Kit_Gourmet__Projetos_Pequenos_1524f2ae.png",

  HEADLINE: "Seu quintal pode se transformar na área gourmet que você sempre imaginou.",
  SUBHEADLINE:
    "Descubra 50 ideias de áreas gourmet para aproveitar melhor espaços pequenos, com inspirações para churrasqueiras, bancadas, jardins e ambientes aconchegantes.",

  HERO_BADGE: "50 projetos para inspirar sua transformação",
  HERO_CTA: "QUERO CONHECER OS 50 PROJETOS",
  HERO_SUBCTA: "Material 100% digital • Pagamento único • 7 dias de garantia",

  SECTION_CATEGORIES_TITLE: "50 ideias para transformar pequenos espaços em grandes momentos.",
  SECTION_CATEGORIES_SUBTITLE:
    "Uma coleção digital de inspirações para ajudar você a visualizar novas possibilidades para sua casa.",

  PROJECT_CATEGORIES: [
    {
      id: "churrasqueira",
      name: "Áreas gourmet com churrasqueira",
      description: "Soluções inteligentes de coifas, grelhas embutidas e dutos planejados para cantos compactos.",
      image: "/src/assets/images/cat_churrasqueira_1794242766448.jpg",
      highlight: "Otimização de fumaça e circulação",
      features: ["Grelhas compactas embutidas", "Móveis resistentes ao calor", "Aproveitamento vertical"]
    },
    {
      id: "moderna",
      name: "Áreas gourmet compactas e modernas",
      description: "Linhas retas, iluminação linear em LED e acabamentos contemporâneos em porcelanato e aço.",
      image: "/src/assets/images/cat_moderna_1794242765497.jpg",
      highlight: "Design limpo e funcional",
      features: ["Painéis ripados modernos", "Fitas LED embutidas", "Visual contemporâneo clean"]
    },
    {
      id: "pergolado",
      name: "Áreas gourmet com pergolados",
      description: "Estruturas de madeira e alumínio que criam sombra agradável e atmosfera acolhedora em dias ensolarados.",
      image: "/src/assets/images/cat_pergolado_1794242765617.jpg",
      highlight: "Conforto térmico e charme",
      features: ["Sombreamento natural", "Fixação de plantas aéreas", "Clima intimista à noite"]
    },
    {
      id: "rustica",
      name: "Áreas gourmet rústicas",
      description: "Tijolinhos aparentes, madeira maciça e fornos a lenha que trazem aconchego de casa de campo para a cidade.",
      image: "/src/assets/images/cat_rustica_1794242766477.jpg",
      highlight: "Calor e memória afetiva",
      features: ["Tijolo de demolição", "Bancadas em madeira rústica", "Cantinhos de forno e pizza"]
    },
    {
      id: "bancada",
      name: "Áreas gourmet com bancadas",
      description: "Ilhas multifuncionais e bancadas de apoio em quartzo que servem tanto para o preparo quanto para receber amigos.",
      image: "/src/assets/images/cat_bancada_1794242766443.jpg",
      highlight: "Integração e praticidade",
      features: ["Bancadas em cascata", "Espaço para banquetas altas", "Adega ou frigobar embutido"]
    },
    {
      id: "jardim",
      name: "Áreas gourmet integradas ao jardim",
      description: "Paredes verdes, floreiras de temperos frescos e decks que unem a culinária à natureza.",
      image: "/src/assets/images/cat_jardim_1794242767123.jpg",
      highlight: "Biofilia e frescor natural",
      features: ["Jardins verticais compactos", "Horta de ervas ao alcance da mão", "Pisos permeáveis e decks"]
    }
  ] as ProjectCategory[],

  WHY_CHOOSE_TITLE: "Seu espaço tem mais possibilidades do que você imagina.",
  WHY_CHOOSE_ITEMS: [
    {
      editorialNumber: "01",
      title: "Inspiração para espaços pequenos",
      description: "Explore alternativas práticas projetadas especificamente para quintais, corredores laterais e ambientes compactos."
    },
    {
      editorialNumber: "02",
      title: "Diferentes estilos",
      description: "Conheça propostas modernas, rústicas, industriais e biofílicas que combinam com o padrão da sua casa."
    },
    {
      editorialNumber: "03",
      title: "Mais clareza para planejar",
      description: "Compare layouts e composições de materiais antes de comprar pisos, revestimentos ou contratar mão de obra."
    },
    {
      editorialNumber: "04",
      title: "Tudo em um único material",
      description: "Consulte referências organizadas por categoria sempre que precisar, direto no celular, tablet ou computador."
    }
  ] as WhyChooseItem[],

  WHY_CHOOSE_CTA: "QUERO TRANSFORMAR MEU ESPAÇO",

  BONUS_SECTION_TITLE: "E tem mais: materiais extras para ajudar no seu planejamento.",
  BONUS_CONTENT: [
    {
      id: "bonus-1",
      number: "01",
      title: "Guia de Planejamento da Área Gourmet",
      subtitle: "BÔNUS 01",
      description: "Um roteiro passo a passo para organizar suas ideias, necessidades prioritárias e etapas antes de iniciar qualquer mudança.",
      badge: "BÔNUS INCLUSO",
      highlights: ["Mapeamento das medidas mínimas", "Relação de pontos de água, gás e luz", "Etapas de execução sem estresse"],
      pages: 24,
      coverImage: "/assets/aistudio/Guia_de_Planejamento_da__rea_Gourmet-1_94602fdf.png"
    },
    {
      id: "bonus-2",
      number: "02",
      title: "Checklist da Área Gourmet Ideal",
      subtitle: "BÔNUS 02",
      description: "Uma lista prática e detalhada de pontos a considerar antes de começar para não esquecer tomadas, escoamento e ventilação.",
      badge: "BÔNUS INCLUSO",
      highlights: ["Itens de infraestrutura e hidráulica", "Ergonomia de bancadas e grelhas", "Segurança térmica e de fumaça"],
      pages: 16,
      coverImage: "/assets/aistudio/Checklist_da__rea_Gourmet_Ideal-2_25c6dfa3.png"
    },
    {
      id: "bonus-3",
      number: "03",
      title: "Guia de Estilos e Combinações",
      subtitle: "BÔNUS 03",
      description: "Referências harmoniosas de materiais, paletas de cores, tipos de pedras, madeiras e acabamentos para diferentes perfis.",
      badge: "BÔNUS INCLUSO",
      highlights: ["Combinações granito vs quartzo", "Madeiras indicadas para área externa", "Paletas de iluminação acolhedora"],
      pages: 32,
      coverImage: "/assets/aistudio/Capa_Guia_de_Estilos_Gourmet-3_7ea0bfcc.png"
    }
  ] as BonusItem[],

  OFFER_TITLE: "Comece a imaginar sua nova área gourmet hoje.",
  OFFER_SUBTITLE: "Escolha o pacote ideal para o tamanho do seu projeto e planejamento:",
  OFFER_PLANS: [
    {
      id: "basic",
      name: "Pacote Essencial",
      subtitle: "Coleção Digital Principal",
      price: "3,90",
      checkoutUrl: "https://checkout.wcheckout.com.br/v1/cjskty6j",
      badge: "Entrada Rápida",
      isFeatured: false,
      features: [
        "E-book completo com 50 projetos de inspiração",
        "Classificação em 6 categorias de ambientes",
        "Fotografias em alta definição dos detalhes",
        "Acesso imediato no formato digital (PDF)",
        "Garantia incondicional de 7 dias"
      ],
      cta: "QUERO O ESSENCIAL (R$ 3,90)",
      subtext: "Pagamento único • Sem mensalidade"
    },
    {
      id: "vip",
      name: "Kit Completo + 3 Bônus",
      subtitle: "A Experiência Definitiva de Reforma",
      price: "17,90",
      checkoutUrl: "https://checkout.wcheckout.com.br/v1/xqznx0gk",
      badge: "MAIS ESCOLHIDO",
      isFeatured: true,
      features: [
        "E-book completo com 50 projetos de inspiração",
        "BÔNUS 01: Guia de Planejamento da Área Gourmet",
        "BÔNUS 02: Checklist Prático da Área Gourmet Ideal",
        "BÔNUS 03: Guia de Estilos e Combinações de Materiais",
        "Plantas esquemáticas e cotas de circulação",
        "Atualizações futuras da coleção inclusas",
        "Suporte prioritário via e-mail",
        "Garantia incondicional de 7 dias"
      ],
      cta: "QUERO O KIT COMPLETO (R$ 17,90)",
      subtext: "Melhor custo-benefício • Acesso vitalício"
    }
  ] as OfferPlan[],

  TESTIMONIALS_TITLE: "Veja a experiência de quem conheceu o material.",
  TESTIMONIALS: [
    {
      id: "test-1",
      name: "Mariana S.",
      location: "Campinas, SP",
      role: "Moradora de sobrado com quintal de 12m²",
      comment: "Eu tinha apenas uma parede livre no fundo do quintal e não sabia como encaixar churrasqueira e bancada. Os projetos me deram uma ideia exata de como posicionar a grelha e a bancada sem fechar a passagem.",
      rating: 5,
      isPlaceholderNotice: true
    },
    {
      id: "test-2",
      name: "Carlos Eduardo F.",
      location: "Belo Horizonte, MG",
      role: "Planejando reforma do quintal",
      comment: "Pelo valor de um cafezinho, o material me economizou dias procurando fotos desconexas na internet. Os bônus com checklist de tomadas e pontos de água valem muito a pena antes de falar com o pedreiro.",
      rating: 5,
      isPlaceholderNotice: true
    },
    {
      id: "test-3",
      name: "Renata & Thiago",
      location: "Curitiba, PR",
      role: "Apartamento térreo com área privativa",
      comment: "A seção de pergolados com jardim vertical foi exatamente o que precisávamos para nosso cantinho. O formato em PDF abre perfeitamente no celular para mostrar na loja de materiais de construção.",
      rating: 5,
      isPlaceholderNotice: true
    }
  ] as TestimonialItem[],

  FAQ_TITLE: "Ficou alguma dúvida?",
  FAQ_ITEMS: [
    {
      question: "1. O que vou receber?",
      answer: "Uma coleção digital completa com 50 projetos e referências visuais de áreas gourmet pequenas, além dos 3 guias bônus anunciados na oferta (Guia de Planejamento, Checklist Prático e Guia de Estilos e Combinações)."
    },
    {
      question: "2. O produto é físico?",
      answer: "Não. É um material 100% digital em formato PDF de altíssima definição, que você pode ler no celular, tablet, computador ou até imprimir se desejar."
    },
    {
      question: "3. Os projetos são para espaços pequenos?",
      answer: "Sim! A coleção foi desenvolvida com foco total em soluções para ambientes compactos: quintais estreitos, corredores, sacadas e fundos de lote a partir de 4m²."
    },
    {
      question: "4. Preciso entender de construção?",
      answer: "Não é necessário ter qualquer experiência prévia para consultar as referências e se inspirar. Para executar obras civis e modificações estruturais, recomendamos sempre consultar profissionais habilitados (arquitetos, engenheiros ou mestres de obras)."
    },
    {
      question: "5. Posso acessar pelo celular?",
      answer: "Sim! O conteúdo digital é formatado para navegação fluida em qualquer smartphone, tablet ou computador, sem necessidade de aplicativos pesados."
    },
    {
      question: "6. O pagamento é mensal?",
      answer: "Não. É uma compra única (a partir de R$ 3,90 no Pacote Essencial ou R$ 17,90 no Kit Completo com os 3 Bônus). Você paga uma única vez e o acesso ao material baixado é seu para sempre, sem mensalidades."
    },
    {
      question: "7. Como vou receber o material?",
      answer: "Após a confirmação do pagamento pela plataforma de vendas, você receberá imediatamente um e-mail com o link de download e instruções de acesso aos arquivos digitais."
    },
    {
      question: "8. Tenho garantia?",
      answer: "Sim! A oferta conta com 7 dias de garantia incondicional, conforme informado no momento da compra. Se por qualquer motivo achar que o material não ajudou, basta solicitar o reembolso na plataforma."
    }
  ] as FaqItem[],

  GUARANTEE_TITLE: "Sua compra com 7 dias de garantia.",
  GUARANTEE_TEXT: "Conheça a coleção com tranquilidade. Você conta com uma garantia de 7 dias, conforme as condições apresentadas no momento da compra.",

  FOOTER_DISCLAIMER: "O material reúne referências e inspirações. Não substitui projetos técnicos, avaliações estruturais ou serviços de profissionais habilitados.",
  COPYRIGHT_TEXT: `© ${new Date().getFullYear()} 50 Projetos de Áreas Gourmet Pequenas. Todos os direitos reservados.`
};
