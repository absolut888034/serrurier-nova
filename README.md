# Serrurier Nova Genève

Web SEO multi-página para una cerrajería 24/7 en Vernier (cantón de Ginebra). Construida con Next.js 15 + Tailwind v4.

Toda la documentación del proyecto está en [`CLAUDE.md`](./CLAUDE.md), [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md), [`docs/DESIGN-SYSTEM.md`](./docs/DESIGN-SYSTEM.md) y [`docs/CONTENT.md`](./docs/CONTENT.md).

## Quickstart

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Estructura

- `app/` — App Router (RSC por defecto)
- `components/sections/` — secciones de la home
- `components/ui/` — primitivos compartidos
- `content/` — data en TypeScript (servicios, comunas, FAQ, avis)
- `public/images/` — assets
- `design/` — mockups HTML iniciales (referencia, no se construye encima)

## Workflow

La home se construye **sección por sección**, validada con el usuario antes de pasar a la siguiente. Ver orden en `docs/ARCHITECTURE.md`.

