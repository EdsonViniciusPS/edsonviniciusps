## Portfólio — Edson Vinicius (Full-stack Engineer)

Landing-page moderna construída com Next.js 16 (App Router) para destacar o trabalho fullstack de Edson Vinicius. O layout mistura as paletas:

- **Paleta 01**: `#261E3E`, `#809CC1`, `#414A6C`, `#0C0516`
- **Paleta 02**: `#2B3153`, `#86939B`, `#EFEFEF`, `#505870`

### Principais recursos

- **Next.js + TypeScript** no modo App Router com fontes Geist.
- **Tailwind CSS 4** com glassmorphism, gradientes e utilitários personalizados.
- **Framer Motion** para micro-interações (hero, cards e seções).
- **Phosphor Icons** com ícones SSR-friendly para manter o visual premium/contemporâneo.
- Componentização (`Section`) para reaproveitar o padrão de heading + conteúdos.

## Estrutura

- `src/app/page.tsx` — Página principal com hero, stack, projetos, experiência e contato.
- `src/components/section.tsx` — Wrapper animado reutilizável para cada bloco.
- `src/app/globals.css` — Variáveis de cor, planos de fundo e utilitários estéticos.

## Como rodar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) para visualizar. O hot reload está ativado por padrão.

### Scripts adicionais

- `npm run lint` — Executa o ESLint com as regras do Next.js.
- `npm run build` — Build de produção (+ geração de route types).
- `npm run start` — Sobe o servidor após o build.

## Customização

- **Conteúdo**: atualize as coleções em `src/app/page.tsx` (`stackGroups`, `projects`, etc.).
- **Paleta**: ajuste os tokens em `src/app/globals.css` (`--color-*`).
- **Seções extras**: reutilize `<Section />` para manter o padrão visual + animações.

## Deploy

O projeto está pronto para deploy no Vercel (recomendado). Basta importar o repositório, definir as variáveis necessárias (se houver APIs externas) e usar o build padrão `npm run build`.
