# 🚀 BitWise Agency - Landing Page

Uma landing page moderna e responsiva desenvolvida para a BitWise Agency, especializada em soluções tecnológicas inteligentes.

## ✨ Características

- **Design Moderno**: Interface elegante com animações suaves
- **Totalmente Responsivo**: Funciona perfeitamente em todos os dispositivos
- **Performance Otimizada**: Carregamento rápido e experiência fluida
- **SEO Friendly**: Otimizado para motores de busca
- **Integração WhatsApp**: Botão flutuante para contato direto
- **PWA Ready**: Suporte a Progressive Web App

## 🛠️ Tecnologias Utilizadas

- **Next.js 14.1** - Framework React com App Router
- **TypeScript 5.3** - Tipagem estática
- **Tailwind CSS 3.4** - Framework CSS utilitário
- **Radix UI** - Componentes acessíveis
- **Lucide React** - Ícones modernos
- **Next Themes** - Suporte a temas

## 📦 Instalação

1. Clone o repositório:
\`\`\`bash
git clone [url-do-repositorio]
cd bitwise-landing
\`\`\`

2. Instale as dependências:
\`\`\`bash
npm install
# ou
yarn install
# ou
pnpm install
\`\`\`

3. Execute o servidor de desenvolvimento:
\`\`\`bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
\`\`\`

4. Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 🏗️ Scripts Disponíveis

- \`npm run dev\` - Inicia o servidor de desenvolvimento
- \`npm run build\` - Cria a build de produção
- \`npm run start\` - Inicia o servidor de produção
- \`npm run lint\` - Executa o linter
- \`npm run type-check\` - Verifica os tipos TypeScript

## 📁 Estrutura do Projeto

\`\`\`
├── app/
│   ├── globals.css          # Estilos globais
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página inicial
├── components/
│   ├── ui/                  # Componentes base
│   ├── header.tsx           # Cabeçalho
│   ├── hero.tsx             # Seção hero
│   ├── services.tsx         # Serviços
│   ├── portfolio.tsx        # Portfólio
│   ├── partners.tsx         # Parceiros
│   ├── about.tsx            # Sobre nós
│   ├── features.tsx         # Recursos
│   ├── testimonials.tsx     # Depoimentos
│   ├── contact.tsx          # Contato
│   ├── footer.tsx           # Rodapé
│   ├── whatsapp-button.tsx  # Botão WhatsApp
│   └── floating-particles.tsx # Partículas animadas
├── hooks/                   # Hooks customizados
├── lib/                     # Utilitários
├── public/                  # Arquivos estáticos
└── types/                   # Definições de tipos
\`\`\`

## 🎨 Personalização

### Cores
Edite \`tailwind.config.ts\` para alterar as cores:
- **Primary**: Azul (#0ea5e9)
- **Secondary**: Dourado (#eab308)

### WhatsApp
Configure o número no arquivo \`components/whatsapp-button.tsx\`:
\`\`\`typescript
const phoneNumber = "5511999999999" // Seu número
\`\`\`

### Conteúdo
- **Portfólio**: Edite \`components/portfolio.tsx\`
- **Depoimentos**: Edite \`components/testimonials.tsx\`
- **Serviços**: Edite \`components/services.tsx\`

## 📱 Funcionalidades

- ✅ Navegação suave entre seções
- ✅ Formulário de contato funcional
- ✅ Botão WhatsApp flutuante
- ✅ Animações on-scroll
- ✅ Carrossel de depoimentos
- ✅ Galeria de portfólio
- ✅ Design responsivo
- ✅ PWA Support
- ✅ SEO Otimizado

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático

### Outros Provedores
1. Execute \`npm run build\`
2. Faça upload da pasta \`.next\` e arquivos estáticos
3. Configure o servidor para servir arquivos estáticos

## 📄 Licença

MIT License - Veja o arquivo LICENSE para detalhes.

## 👨‍💻 Desenvolvido por

**BitWise Agency** - Transformando dados em soluções inteligentes.

---

Para dúvidas ou suporte, entre em contato através do WhatsApp ou email.
\`\`\`
