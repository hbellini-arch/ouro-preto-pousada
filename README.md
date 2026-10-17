# 🏛️ Gazeta Ouro-Preto — Pousada & Hospedaria Imperial (Bonito - MS)

Website institucional e folhetim histórico da **Pousada Ouro Preto**, localizada em Bonito/MS, concebido com arquitetura colonial barroca inspirada em Vila Rica (1824) e adaptado aos padrões modernos de responsividade.

---

## 🎨 Funcionalidades & Destaques

- **Layout Oitocentista Responsivo:** Tipografia clássica (*Playfair Display* e *Literata*), cores canônicas (*bordeaux*, *imperial-gold*, *colonial-blue*) e estética de periódico imperial.
- **Efeito Sépia Histórico (Hover / Tap):** As gravuras oitocentistas iniciam com filtro sépia envelhecido e revelam cores vivas ao passar o cursor ou tocar na tela.
- **Acomodações Detalhadas:**
  - *Suíte Luxo Duplo*
  - *Suíte Triplo & Quádruplo*
  - *Suíte Master Dom Pedro I* (com sala de estar independente e espelho barroco)
- **Telégrafo de Reservas:** Formulário integrado para despacho imediato com o motor oficial Omnibees.
- **Maravilhas de Bonito:** Seção de expedições e flutuação com cardumes de piraputangas no Rio Sucuri / Bodoquena.
- **Fototeca / Álbum da Pousada:** 4 grandes painéis fotográficos (Coreto Oitocentista, Alamedas Floridas, Pátio Colonial e Piscina com hidromassagem).
- **Correio Elegante:** Avaliações comprovadas do Google (4,9/5), Booking (9,5) e Tripadvisor.

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18 ou superior)

### Instalação & Execução
```bash
# Clone o repositório
git clone <URL_DO_SEU_REPOSITORIO>

# Acesse o diretório
cd ouro-preto-pousada

# Instale as dependências
npm install

# Compile o projeto
npm run build

# Inicie o servidor local
npm run dev
```

Abra seu navegador em [http://localhost:5174](http://localhost:5174).

---

## 📁 Estrutura de Arquivos

```
ouro-preto-pousada/
├── dist/                # Arquivos compilados (bundle.js e style.css)
├── public/              # Assets estáticos e imagens
│   └── images/
│       └── rio_sucuri_bonito.jpg
├── src/
│   ├── components/      # Componentes modulares React
│   │   ├── About.jsx
│   │   ├── CallToAction.jsx
│   │   ├── Experiences.jsx
│   │   ├── Footer.jsx
│   │   ├── Gallery.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Masthead.jsx
│   │   ├── Ornament.jsx
│   │   ├── Rooms.jsx
│   │   └── Testimonials.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html           # Ponto de entrada HTML com fontes e Tailwind
├── build.js             # Script de compilação esbuild-wasm + Tailwind
├── server.js            # Servidor HTTP local com hot-reloading
└── package.json
```
