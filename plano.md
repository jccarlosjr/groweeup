# Planejamento – Website Institucional Groweeup

## 1. Visão Geral

**Empresa:** Groweeup
**Segmento:** Agência de growth / marketing digital (Consultoria em Marketing e Branding, CRM para API de WhatsApp, Tráfego Pago, Gerenciamento de Redes Sociais, Configuração do Meta Business)
**Objetivo do site:** Apresentar a empresa e seus produtos/serviços, gerar credibilidade e captar leads (contato/orçamento), com uma experiência moderna, fluida e tecnológica.
**Tom de marca:** Cresimento, dado, performance, tecnologia, agilidade — "growth" no nome já entrega a proposta.

Sem logo/assets ainda → vamos construir a identidade visual só com paleta, tipografia, formas e motion. O "logo" provisório será um lockup tipográfico (wordmark) bem desenhado, fácil de trocar depois por um SVG real.

---

## 2. Design Tokens

### 2.1 Paleta de cores (dark azulado)

| Token | Hex | Uso |
|---|---|---|
| `--bg-base` | `#070B14` | Fundo principal (quase preto azulado) |
| `--bg-surface` | `#0D1524` | Cards, seções alternadas |
| `--bg-elevated` | `#141F35` | Cards elevados, modais, header com blur |
| `--border-subtle` | `#22314F` | Bordas, divisores |
| `--accent-primary` | `#3B82F6` | Azul principal (CTAs, links, destaques) |
| `--accent-glow` | `#5EEAD4` | Ciano/teal — accent secundário para gradientes e "sinal de crescimento" |
| `--text-primary` | `#EAF1FB` | Texto principal |
| `--text-secondary` | `#93A3BF` | Texto secundário, legendas |
| `--gradient-signature` | `linear-gradient(135deg, #3B82F6 0%, #5EEAD4 100%)` | Elemento assinatura (ver 2.4) |

Racional: dark azulado profundo (não preto puro) remete a "dashboard/dados/tecnologia"; o par azul→ciano simula uma "curva ascendente" (growth), reforçando o nome da empresa sem precisar de logo.

### 2.2 Tipografia

- **Display (títulos):** `Space Grotesk` (Google Fonts) — geométrica, moderna, com personalidade tech, boa para números/métricas.
- **Body (texto corrido):** `Inter` — alta legibilidade, neutra, ótima em telas escuras.
- **Mono (dados/labels/tags):** `JetBrains Mono` — usada em pequenos rótulos tipo "métricas", badges de produto, código de indicação de seção. Reforça leitura de "dado/performance".

Escala tipográfica (base 16px):
- H1: 3.5rem / 4.5rem (mobile/desktop), peso 600
- H2: 2.25rem / 3rem, peso 600
- H3: 1.5rem, peso 500
- Body: 1rem–1.125rem, peso 400
- Caption/mono: 0.8125rem, uppercase, letter-spacing 0.05em

### 2.3 Layout

- Grid de 12 colunas, container max-width 1280px, padding lateral fluido (`clamp`).
- Cards com `border-radius: 16px`, borda 1px sutil (`--border-subtle`) e leve glow no hover.
- Fundo com "grid" técnico sutil (linhas finas quase invisíveis) + gradiente radial azul no topo do hero, remetendo a dashboard.

### 2.4 Elemento assinatura

**"Growth Line"** — uma linha/curva SVG ascendente e animada (tipo linha de gráfico de crescimento) que atravessa o hero e reaparece de forma mais sutil como divisor entre seções. Ela é desenhada com `stroke-dashoffset` animado no load (efeito de "traçado sendo desenhado") e reage sutilmente ao scroll. É o único elemento grande de "ousadia" visual — todo o resto do layout permanece disciplinado e limpo.

---

## 3. Stack Técnica

| Camada | Escolha | Motivo |
|---|---|---|
| Framework | **React + Vite** | Rápido, componentizável, ideal para landing institucional |
| Estilização | **Tailwind CSS** | Produtividade + fácil aplicar design tokens via `tailwind.config` |
| Animações | **Framer Motion** | Animações de entrada, transições de rota, micro-interações |
| Scroll animations | **GSAP + ScrollTrigger** | Efeitos de scroll mais refinados (parallax, reveal, growth line) |
| Roteamento | **React Router DOM** | 4 páginas (Index, Termos, Privacidade, Sobre) |
| Ícones | **Lucide React** | Set consistente, leve, combina com estética tech |
| Fontes | **Google Fonts** (Space Grotesk, Inter, JetBrains Mono) | Via `next/font` ou `<link>` |
| Formulário de contato | Componente próprio (mock/local state inicialmente) | Sem backend definido ainda |

---

## 4. Estrutura de Páginas

### 4.1 Index (Home)

1. **Header fixo** — wordmark "Groweeup", navegação (Produtos, Sobre, Contato), CTA "Fale com a gente". Header com blur/transparência que ganha fundo sólido no scroll.
2. **Hero** — Headline forte sobre crescimento previsível/mensurável + subheadline. Growth Line animada ao fundo. CTA primário (Fale com a gente) e secundário (Ver produtos).
3. **Prova/Indicadores** — faixa com 3–4 métricas de destaque (ex.: campanhas geridas, leads gerados, etc. — copy genérica até termos dados reais).
4. **Produtos (5 cards)**:
   - Consultoria em Marketing e Branding
   - CRM para API de WhatsApp
   - Tráfego Pago
   - Gerenciamento de Redes Sociais
   - Configuração do Meta Business
   Cada card com ícone (Lucide), título, descrição curta, e reveal on-scroll com stagger.
5. **Como trabalhamos** — processo em etapas (aqui numeração faz sentido, pois é um processo real: Diagnóstico → Estratégia → Execução → Otimização).
6. **CTA final** — bloco de conversão com gradiente assinatura.
7. **Footer** — wordmark, links institucionais (Sobre, Termos, Privacidade), contato/redes sociais.

### 4.2 Sobre

- Hero curto (missão/proposta de valor da Groweeup).
- Seção "O que fazemos" (resumo dos 5 produtos, com link para a home/âncoras).
- Seção de valores/diferenciais (cards simples).
- CTA de contato.

### 4.3 Termos de Serviço

- Layout de texto institucional, tipografia otimizada para leitura (largura de linha controlada, ~680px).
- Sumário/índice lateral (sticky) com âncoras para as seções, já que é conteúdo jurídico longo.
- Estrutura sugerida: Objeto, Cadastro e Uso, Planos e Pagamento, Responsabilidades, Propriedade Intelectual, Cancelamento, Disposições Gerais.
- Placeholder de texto jurídico (a ser revisado por time jurídico) já formatado.

### 4.4 Política de Privacidade

- Mesmo padrão visual da página de Termos (sumário sticky + tipografia de leitura).
- Estrutura sugerida: Dados coletados, Finalidade do tratamento, Compartilhamento de dados, Direitos do titular (LGPD), Cookies, Segurança, Contato do DPO.
- Placeholder de texto (a ser validado juridicamente, considerando LGPD).

---

## 5. Estratégia de Animação

- **Page load:** wordmark + growth line se desenham (stroke animation), seguido de fade/slide da headline (Framer Motion `staggerChildren`).
- **Scroll reveals:** cards de produtos entram com fade+translateY e leve stagger (GSAP ScrollTrigger ou `whileInView` do Framer Motion).
- **Hover micro-interações:** cards com leve elevação (`translateY(-4px)`) + glow de borda no accent; botões com transição de gradiente.
- **Transição entre páginas:** fade/slide sutil via Framer Motion `AnimatePresence` no React Router.
- **Acessibilidade:** respeitar `prefers-reduced-motion` — desativar/reduzir animações de scroll e transições quando o usuário tiver essa preferência ativada no SO.

---

## 6. Responsividade

- Mobile-first, breakpoints Tailwind padrão (`sm`, `md`, `lg`, `xl`).
- Header vira menu hambúrguer com painel fullscreen animado (Framer Motion) abaixo de `md`.
- Grid de produtos: 1 coluna (mobile) → 2 colunas (tablet) → 3 colunas (desktop, com 5 itens em layout assimétrico ou último card "CTA/fale conosco").
- Growth Line simplificada em mobile (menos pontos de controle, sem parallax pesado).

---

## 7. Estrutura de Pastas (sugestão)

```
src/
  assets/            # placeholders até termos logo/assets reais
  components/
    layout/           Header, Footer, PageTransition
    sections/         Hero, Metrics, Products, Process, CTA
    ui/               Button, Card, Badge, SectionHeading
  pages/
    Index.tsx
    Sobre.tsx
    Termos.tsx
    Privacidade.tsx
  styles/
    tokens.css        # variáveis de cor/tipografia
  App.tsx
  main.tsx
tailwind.config.ts
```

---

## 8. Próximos Passos

1. Validar/ajustar paleta e tom de voz com o time da Groweeup.
2. Redigir copy definitiva (headlines, descrições de produto, textos institucionais).
3. Revisão jurídica de Termos de Serviço e Política de Privacidade (LGPD).
4. Implementar Index primeiro (maior superfície de design), depois replicar tokens nas demais páginas.
5. Substituir wordmark provisório por logo real assim que disponível.