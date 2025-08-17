# Pacific Movement - Estúdio Fotográfico

## 📸 Sobre o Projeto

Site profissional completo para a **Pacific Movement**, um estúdio fotográfico especializado em:
- 👤 **Ensaios Individuais** - Sessões fotográficas personalizadas  
- 🤱 **Ensaios Gestantes** - Momentos especiais da maternidade
- 👔 **Ensaios Corporativos** - Fotografia profissional para executivos
- ❤️ **Retratos de Emoção** - Capturing authentic moments and connections

## 🎨 Design e Identidade Visual

O site foi desenvolvido baseando-se na identidade visual oficial da Pacific Movement vista no catálogo 2025, com:
- **Cores primárias**: Bege (#e8e2d5) e Preto (#000000) - sofisticação e elegância
- **Cores de destaque**: Dourado (#fbbf24) para elementos especiais e CTAs
- **Tipografia**: Geist (fonte principal) - clean, moderna e minimalista
- **Logo**: "pm" em tipografia elegante com seta dourada (↗) representando movimento
- **Estilo**: Minimalista, clean e profissional como grandes estúdios fotográficos

## 🚀 Tecnologias Utilizadas

- **Framework**: Next.js 15.4.6 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS 4.0
- **Componentes**: shadcn/ui + Radix UI
- **Animações**: Framer Motion
- **Ícones**: Lucide React
- **Formulários**: React Hook Form + Zod

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── page.tsx           # Página inicial (Home)
│   ├── social-media/      # Página Social Media
│   ├── shootings/         # Página Shootings
│   ├── eventos/           # Página Eventos
│   ├── planos/           # Página Planos e Preços
│   ├── contato/          # Página Contato
│   ├── layout.tsx        # Layout principal
│   └── globals.css       # Estilos globais
├── components/
│   ├── layout/           # Header e Footer
│   └── ui/              # Componentes shadcn/ui
└── lib/
    └── utils.ts         # Utilitários (cn function)
```

## 🎯 Funcionalidades

### Página Inicial (Home)
- Hero section impactante
- Seção de estatísticas (163 publicações, 3.240 seguidores, etc.)
- Apresentação dos 3 serviços principais
- Depoimentos de clientes
- Call-to-action para conversão

### Social Media (/social-media)
- Planos detalhados (Essencial, Profissional, Premium)
- Processo de trabalho em 5 etapas
- Resultados comprovados (300% aumento engajamento)
- Serviços inclusos em cada plano

### Shootings (/shootings)
- Portfolio por categorias (Produtos, Pessoas, Corporativo, Lifestyle)
- Pacotes de fotografia (Essential, Professional, Premium)
- Processo de trabalho estruturado
- Depoimentos específicos de clientes

### Eventos (/eventos)
- Tipos de eventos (Corporativos, Sociais, Lançamentos, Digitais)
- Cases de sucesso detalhados
- Pacotes por porte do evento (até 50, 200, 500 pessoas)
- Estatísticas de satisfação

### Planos (/planos)
- Seletor interativo de serviços
- Comparação detalhada de planos
- Serviços adicionais (add-ons)
- FAQ sobre contratação
- Garantia de satisfação

### Contato (/contato)
- Formulário completo de solicitação
- Informações de contato (telefone, email, WhatsApp, Instagram)
- FAQ sobre atendimento
- Mapa de localização (placeholder)

## 🎨 Sistema de Cores Personalizado

```css
/* Cores da Pacific Movement */
--pacific-blue: 262 83% 58%;        /* Azul principal */
--pacific-purple: 271 76% 53%;      /* Roxo secundário */
--pacific-gold-start: 45 100% 51%;  /* Dourado início */
--pacific-gold-end: 39 100% 57%;    /* Dourado fim */
--pacific-dark: 240 10% 3.9%;       /* Preto */
--pacific-light: 0 0% 98%;          /* Branco */

/* Classes utilitárias */
.gradient-text         /* Texto com gradiente dourado */
.gradient-bg           /* Background com gradiente azul/roxo */
.gradient-border       /* Borda com gradiente dourado */
```

## 📱 Responsividade

O site é 100% responsivo com breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

Todas as seções se adaptam perfeitamente a diferentes tamanhos de tela.

## ⚡ Performance

- **Build otimizado**: Todas as páginas são geradas estaticamente
- **Imagens otimizadas**: Uso do componente Image do Next.js
- **Code splitting**: Carregamento otimizado por página
- **CSS otimizado**: Tailwind CSS com purge automático

## 🔧 Comandos de Desenvolvimento

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar build em produção
npm run start

# Lint do código
npm run lint
```

## 📋 SEO e Metadata

Cada página possui metadata otimizada incluindo:
- Title e description únicos
- Open Graph tags (Facebook, LinkedIn)
- Twitter Cards
- Keywords relevantes
- Structured data (futuro)

## 🔮 Próximos Passos Sugeridos

### Melhorias Técnicas
1. **Analytics**: Integrar Google Analytics/Google Tag Manager
2. **Forms**: Conectar formulários com backend (Emailjs, Formspree, etc.)
3. **CMS**: Implementar Sanity ou Strapi para conteúdo dinâmico
4. **Blog**: Adicionar seção de blog/cases
5. **PWA**: Transformar em Progressive Web App

### Funcionalidades Extras
1. **Chat online**: Widget de chat ou WhatsApp
2. **Portal do cliente**: Área logada para acompanhar projetos
3. **Calculadora**: Ferramenta para estimar orçamentos
4. **Agenda**: Sistema de agendamento online
5. **Galeria**: Portfolio interativo com filtros

### Integrações
1. **Instagram API**: Exibir posts reais do Instagram
2. **Google Maps**: Mapa interativo real
3. **Calendly**: Agendamento de reuniões
4. **Stripe**: Pagamentos online
5. **CRM**: Integração com ferramentas de gestão

## 🎯 Conversão e Marketing

### Elementos de Conversão Implementados
- **CTAs estratégicos**: Botões de ação em todas as páginas
- **Prova social**: Depoimentos e estatísticas reais
- **Senso de urgência**: Frases como "Não perca tempo"
- **Transparência**: Preços visíveis e sem taxas ocultas
- **Contato fácil**: Múltiplos canais de comunicação

### Métricas Sugeridas
- **Taxa de conversão**: Formulários preenchidos / Visitantes
- **Tempo na página**: Engajamento por seção
- **Origem do tráfego**: Instagram, Google, direto
- **Páginas mais visitadas**: Otimizar conteúdo popular

## 🛡️ Segurança e Manutenção

- **Atualizações**: Manter dependências atualizadas
- **Backup**: Código no Git, deploy com Vercel/Netlify
- **Monitoramento**: Uptime e performance
- **SSL**: Certificado HTTPS obrigatório

## 📞 Suporte e Documentação

Este projeto foi desenvolvido seguindo as melhores práticas de desenvolvimento web moderno. Para dúvidas sobre implementação ou melhorias, consulte:

1. **Documentação Next.js**: [nextjs.org/docs](https://nextjs.org/docs)
2. **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)  
3. **shadcn/ui**: [ui.shadcn.com](https://ui.shadcn.com)
4. **Framer Motion**: [framer.com/motion](https://www.framer.com/motion/)

---

**Desenvolvido com ❤️ para Pacific Movement**  
*Agência de marketing sempre em movimento* 🚀
# Pacific
# Pacific
