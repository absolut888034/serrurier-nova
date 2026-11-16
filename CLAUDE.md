# Serrurier Nova Genève

Web SEO multi-página + programmatic SEO para una cerrajería 24/7 en Vernier (cantón de Ginebra, Suiza). **En producción en https://www.serruriernova.ch** (Vercel). Sustituye el antiguo sitio single-page serruriernovageneve.ch (Netlify, pendiente de redirigir con 301).

## Cómo se trabaja con este repo (léelo primero)

- **El dueño del negocio gestiona el sitio él mismo con Claude Code.** No es desarrollador: explica en lenguaje sencillo, sin jerga, **en el idioma en que te escriba (francés o alemán)**. Frases que usará: «annule le dernier changement» / «letzte Änderung rückgängig» = `git revert` + push de tu rama (se publica solo).
- **El dueño trabaja desde claude.ai/code (sesiones en la nube), no en local, y no toca GitHub.** Flujo: haces el cambio → `npm run build` debe pasar → commit y push de tu rama. **Publicación automática**: el workflow `.github/workflows/auto-publish.yml` compila cada rama empujada y, si compila, la fusiona en `main` (Vercel publica en www.serruriernova.ch). Dile en una frase, en su idioma, que el cambio estará en línea en unos 3 minutos. **No** le pidas que pulse Create PR ni que vaya a GitHub.
- Como todo lo que empujas se publica, confirma con él antes de cambios grandes (explica el plan primero) y nunca empujes trabajo a medias.
- Vercel (plan Hobby) despliega commits de colaboradores solo porque el repo es **público**. No lo hagas privado. Nunca subas claves ni datos privados al repo: los secretos van en las variables de entorno de Vercel.
- **Publicar = merge/push a `main`.** No uses `npx vercel --prod`.
- Antes de dar el cambio por terminado: `npm run build` debe pasar sin errores.
- Haz commits pequeños con mensajes claros. Si trabajas en local, `git pull` al empezar.
- Para deshacer: `git revert` del commit en tu rama y push (se publica solo). En urgencia, Mate puede usar Instant Rollback en Vercel.
- El formulario de contacto envía con Resend si existe `RESEND_API_KEY` en Vercel (cuenta Resend creada con serruriernova@gmail.com, sin dominio verificado → solo puede enviar a esa dirección).
- **URL base canónica: `https://www.serruriernova.ch`** en metadata, sitemap, robots, JSON-LD y OG. Nunca reintroducir `serruriernovageneve.ch` en el código (en 2026 eso desindexó el sitio en Google).

## El negocio

| Campo | Valor |
|---|---|
| Nombre comercial | Serrurier Nova Genève |
| Fundación | 2014 |
| Base | Chem. De-Maisonneuve 12D, 1219 Châtelaine (Vernier) |
| Teléfono principal | +41 22 557 65 59 |
| WhatsApp / móvil | +41 76 475 08 81 |
| Email | serruriernova@gmail.com |
| Disponibilidad | 24h/24 — 7j/7 |
| Google Business | 5,0 ★ · 8 avis · « Ouvert 24h/24 » |
| Idioma web | **Solo francés (Suisse romande)** — no español, no inglés |

## Stack técnico

- **Framework**: Next.js 15 (App Router, RSC por defecto)
- **Lenguaje**: TypeScript estricto
- **Styling**: Tailwind CSS v4 (CSS-first con `@theme`)
- **UI**: shadcn/ui solo cuando aporte; preferir componentes propios para SEO/perf
- **Content**: datos en `content/*.json`, validados con Zod en `content/schema.ts` (ver «Contenido y portal NexaLab»)
- **Imágenes**: `next/image` con assets locales en `public/images/`
- **Fuentes**: `next/font` con Fraunces (Google) + Switzer (Fontshare) + Geist Mono (Google)
- **Hosting**: Vercel (cuenta de Mate, el desarrollador original), conectado al repo GitHub `absolut888034/serrurier-nova` (el dueño es colaborador). Cada push a `main` despliega. Dominio en Hostinger (cuenta del dueño), DNS apuntando a Vercel
- **Schema**: JSON-LD `LocalBusiness`, `Service`, `FAQPage`, `BreadcrumbList`, `Review`

## Paleta (derivada del logo navy del cliente)

```css
--navy:       #1c2548;  /* primary del logo */
--navy-2:     #2a3563;
--navy-3:     #0e1428;  /* hero background */
--navy-deep:  #060914;  /* footer / deepest */
--silver:     #d4d8e2;  /* text on navy */
--silver-2:   #98a0b3;
--steel:      #5e6680;
--paper:      #f4f1ea;  /* light section bg */
--paper-2:    #ebe6d8;
--ink:        #0d1226;  /* text on light */
--ink-2:      #3a3f55;
--brass:      #c9a24a;  /* accent (logo brass) */
--brass-deep: #9b7a2e;
--vermillion: #d23a1c;  /* SOLO para CTA urgencia */
--green:      #5f8a3d;  /* operational live indicator */
```

## Tipografía

| Rol | Familia | Uso |
|---|---|---|
| Display | Fraunces (var, axes opsz + SOFT) | H1–H3, números editoriales. Italic con SOFT 70 solo para emphasis |
| Body | Switzer | UI, párrafos, navegación |
| Mono | Geist Mono | Teléfonos, precios, tiempos, ticker — todos con `font-variant-numeric: tabular-nums` |

## Estructura de la web

```
/                                    Home
/services/                           Hub de servicios
/services/[slug]                     Página de servicio (10)
/zones/                              Hub de zonas
/zones/[slug]                        Página de comuna (12 → 45)
/services/[slug]-a-[zone]            Matriz servicio × zona (top combos)
/blog/                               Hub blog
/blog/[slug]                         Artículo blog (10 inicial)
/tarifs                              Tabla de precios (diferenciador)
/a-propos                            About + certificaciones
/contact                             Contacto + formulario + mapa
/mentions-legales                    Legal
/politique-de-confidentialite        Privacidad
```

## Servicios (SOLO 3)

El cerrajero ofrece únicamente estos tres servicios:

1. ouverture-de-porte
2. changement-de-serrure
3. depannage-apres-effraction

❌ No crear páginas, combinaciones ni keywords para servicios que no ofrece (coffre-fort, porte blindée, blindage, barres de sécurité, serrure connectée, double de clés, alarme, caméras…), aunque aparezcan en Google Search Console. Esos clientes no se pueden atender. El crecimiento SEO viene de **zonas (comunas) y blog**, no de nuevos servicios.

## Comunas

La lista real está en `content/zones.ts` (+ textos en `content/zones-detail.json`, con el slug en `id`). Para añadir una comuna: entrada en ambos archivos con `proximity` correcta. Objetivo a largo plazo: las 45 comunas del cantón.

## Blog inicial (10 artículos prioritarios)

1. **Prix d'un serrurier à Genève en 2026** — alto CTR, transparencia
2. Porte claquée à Genève : que faire et combien ça coûte ?
3. Comment choisir une porte blindée (A2P, EI30)
4. Cylindre européen, Kaba, Fichet : lequel choisir ?
5. Cambriolage : les 5 points faibles d'une porte d'entrée
6. Serrure connectée : avantages, risques, modèles fiables
7. **Comment reconnaître un faux serrurier** — anti-arnaque, alto valor
8. Que faire après une effraction (démarches assurance)
9. Coffre-fort à domicile : guide complet
10. Meilleures serrures haute sécurité en 2026

## Tarifs de referencia (mercado Ginebra 2026)

| Prestación | Tarif |
|---|---|
| Ouverture de porte claquée | 229 CHF tout compris |
| Ouverture de porte fermée à clé | 269 CHF tout compris |
| Changement de cylindre | dès 180 CHF |
| Pose de serrure haute sécurité | dès 350 CHF |
| Blindage de porte | dès 1 500 CHF |
| Porte blindée A2P (Fichet, Picard) | dès 2 800 CHF |

**Diferenciador clave**: la competencia opaca cobra hasta 1 200 CHF por una apertura simple. Nova anuncia el precio antes de moverse.

## Contenido y portal NexaLab

- Los textos, avis, FAQ, método, servicios, páginas de servicio y de comuna, y artículos del blog están en `content/<colección>.json`. Los esquemas Zod de `content/schema.ts` los validan: si un JSON no cumple, el build falla. Los `content/*.ts` leen el JSON y exponen lo mismo de siempre a las páginas (en el JSON, el slug se llama `id`).
- Para cambiar contenido, edita el JSON. Para cambiar la forma del contenido (un campo nuevo), edita `content/schema.ts` y el `.ts` correspondiente, y ejecuta `npm run build` en local: regenera `content/schema.generated.json`, que hay que commitear (en CI y en Vercel el build falla si no está al día).
- NexaLab tiene en el portal del cliente un asistente que solo cambia esos JSON y las fotos de `public/images/`. Trabaja en ramas `ia/<id>` con su PR: el cliente ve el preview de Vercel y lo publica desde el portal. **Las ramas `ia/**` no se publican solas** (están excluidas en `auto-publish.yml`): no las fusiones a mano ni las borres.

## Workflow de construcción

### Estado: la home y las páginas principales ya están construidas y en producción

Lo que sigue es el orden histórico de construcción, como referencia. Los cambios nuevos se hacen igual: mostrar al dueño en local antes de publicar.

**Orden propuesto:**

1. Setup base (tokens, layout, fuentes) — ✅ ya en este commit
2. Header + status bar
3. Hero
4. Ticker
5. Tarifs (transparencia)
6. Services (card grid)
7. Photo break
8. Zones desservies
9. Avis (Google reviews)
10. Méthode (4 pasos)
11. À propos
12. FAQ
13. Final CTA
14. Footer

**Después de la home:**

- Página de un servicio (template) → replicar para los 10 servicios
- Página de una zona (template) → replicar para las 12 comunas
- Matriz servicio × zona (combinaciones top)
- Blog (template + 10 artículos)

## Decisiones de diseño cerradas

- ❌ **NO** editorial-Swiss abstracto (Fraunces italic dominante, numeración 01/02 protagónica). Rechazado dos veces por el usuario.
- ✅ Aesthetic: oficio premium suizo, base navy del logo + plata + brass
- ✅ Imágenes: documental realista con **`nano_banana_2`** (Higgsfield). NUNCA `soul_location` (calidad inferior, manos deformadas).
- ✅ Service cards: imagen 4:3 con título mayúsculas + línea brass + tag píldora + descripción (estilo de la referencia que el usuario compartió)
- ✅ Hero: split texto + foto documental del cerrajero
- ✅ Transparencia de precios visible temprano (mata al competidor opaco)
- ✅ Ticker animado de últimas intervenciones (al usuario le gusta)
- ✅ Logo del cliente en header + footer (escudo navy 60px alto)
- ✅ Status bar superior con hora live Ginebra + estado operacional

## Reglas de contenido fuertes (no romper)

### Tiempo de intervención: NUNCA prometer minutos concretos

- ❌ **NO** anunciar "intervención en 15-30 min", "sous 30 minutes", "en X minutes" en copy público, metadata, JSON-LD, hero, status bar, FAQ, blog, mapa, tooltips ni reviews. Razón: prometer un chiffre que no se cumple destruye la confianza (cliente espera 30 min, llega 60 min → 1★ Google). La competencia no lo hace.
- ❌ **NO** mostrar `delay: X` por comuna en UI.
- ✅ Lenguaje correcto: "joignable directement 24h/24 et 7j/7", "délai annoncé au téléphone avant tout déplacement", "devis et délai confirmés à l'appel".
- ✅ Geografía sí, tiempo no: usar `proximity: "immediate" | "near" | "canton"` (`content/zones.ts`) para colorear el mapa y ordenar las comunas. Es factual (Vernier está más cerca que Versoix), no es promesa.
- ✅ Tiempo de operación en sitio (ej: "ouverture en quelques minutes") sí está permitido — describe la duración del acto técnico, no el tiempo de llegada.
- ✅ Spec de seguridad de productos (A2P "tient 5 min", "10 min", "15 min") permitidos — factual sobre la cerradura, no sobre nosotros.

### Estatuto legal: entreprise individuelle, sin sociedad registrada

- El artesano opera como **independiente** (raison individuelle / entreprise individuelle). No hay SARL, SA ni sociedad registrada.
- ❌ NO escribir "SARL", "SA", "société", "raison sociale" con número, "siège social", "registre du commerce", IDE/CHE-XXX, número TVA.
- ✅ Mentions-légales dice "Entreprise individuelle" — correcto y suficiente para un independiente suizo.
- ✅ "Entreprise indépendante", "artisan indépendant" — OK.
- ✅ "Depuis 2014" / "dix ans de métier" — describe experiencia personal del artesano, no fecha de fundación de empresa. Mantener.
- La dirección Chem. De-Maisonneuve 12D es su dirección de trabajo, no un "siège social" registrado. Evitar framing de "siège".

## Agent skills

### Issue tracker

Issues vivent comme fichiers markdown dans `.scratch/<feature>/`. Voir `docs/agents/issue-tracker.md`.

### Triage labels

Labels canoniques (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`) appliqués comme ligne `Status:` dans le fichier. Voir `docs/agents/triage-labels.md`.

### Domain docs

Single-context. Contexte de projet dans `CLAUDE.md` + `docs/*.md` (pas de `CONTEXT.md` séparé, pas d'ADRs encore). Voir `docs/agents/domain.md`.

## Skills disponibles relevantes

| Skill | Cuándo usar |
|---|---|
| `seo-audit` | Auditar SEO del sitio actual o del nuevo |
| `seo-geo` | Local SEO + GEO (ChatGPT/Perplexity ranking) |
| `next-best-practices` | Convenciones Next.js |
| `nextjs-app-router-patterns` | App Router avanzado, parallel routes |
| `shadcn` | Cuando se necesite un componente UI complejo |
| `ckm-design` | Logo, banners, social, design system |
| `nano-banana-pro-openrouter` | Optimizar prompts de imagen |
| `frontend-design` | UI styling (usar con moderación, dirección abstracta rechazada) |
| `web-design-guidelines` | Review UI/a11y antes de cerrar sección |
| `deploy-to-vercel` | Deploy final |

## Higgsfield (generación de imágenes)

- Opcional: solo si el dueño tiene cuenta propia de Higgsfield. Si no, pedirle fotos reales (mejor aún para la confianza) y optimizarlas antes de añadirlas a `public/images/`.
- Modelo: **`nano_banana_2`** (Google Gemini 3 Pro Image)
- Resolución por defecto: **2k**
- Costo: ~0.15 créditos por imagen
- Balance al inicio del proyecto: 79.79 créditos
- Para imágenes futuras: usar prompts del estilo "Professional documentary photograph, [scene], dark navy uniform, brushed metal hardware, dramatic side-light, sharp focus, 35-50mm lens, no text, no logos"

## Assets actuales (`public/images/`)

| Archivo | Uso |
|---|---|
| `logo.png` | Logo del cliente (navy shield, 1:1) |
| `hero-locksmith.png` | Hero principal (16:9, cerrajero en hallway nocturno) |
| `svc-ouverture.png` | Servicio: manos picking cerradura (4:3) |
| `svc-changement.png` | Servicio: macro cilindro + destornillador (4:3) |
| `svc-securisation.png` | Servicio: instalando placa de seguridad (4:3) |
| `nano-test-1.png` | Alt hero (3:2, cerrajero en piso suizo) |

Imágenes antiguas en `design/images/` (set `soul_location`) están deprecadas — calidad inferior, no usar.

## Reglas operativas

- **Idioma**: todo el contenido público en francés. Comentarios de código en inglés.
- **Mobile-first**: una cerrajería se llama desde el móvil → fluid layouts → tap targets ≥ 44 px → CTA telefónico siempre visible
- **Performance**: `next/image`, font preload, RSC por defecto, no JS innecesario, lighthouse ≥ 95
- **SEO**: meta tags + OG + Twitter cards + canonical URLs + sitemap.xml + robots.txt + structured data desde el día 1
- **Accessibility**: WCAG AA, focus visible, semantic HTML, alt text descriptivo en francés
- **Validación**: cada sección se muestra al usuario antes de avanzar a la siguiente

## Comandos útiles (cuando el proyecto esté instalado)

```bash
npm install           # instalar dependencias
npm run dev           # servidor de desarrollo (localhost:3000)
npm run build         # build producción
npm run start         # arrancar build producción
npm run lint          # linting
```

## Estructura de carpetas

```
/
├── CLAUDE.md                  ← este archivo (fuente de verdad)
├── README.md
├── package.json
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── .gitignore
├── app/
│   ├── layout.tsx             ← root layout (fuentes, metadata)
│   ├── globals.css            ← Tailwind v4 + tokens del logo
│   ├── page.tsx               ← home (se construye sección a sección)
│   ├── services/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── zones/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   └── ... (otras rutas)
├── components/
│   ├── sections/              ← cada sección de la home (header, hero, ticker...)
│   ├── ui/                    ← primitivos compartidos
│   └── layout/                ← header, footer
├── content/
│   ├── services.ts            ← data de los 10 servicios
│   ├── zones.ts               ← data de las 45 comunas
│   ├── tarifs.ts              ← tabla de precios
│   ├── faq.ts                 ← preguntas frecuentes
│   ├── avis.ts                ← reseñas Google
│   └── blog/                  ← MDX
├── lib/
│   ├── schema.ts              ← generadores JSON-LD
│   └── seo.ts                 ← helpers metadata
├── public/
│   └── images/                ← assets visuales
├── design/                    ← mockups HTML iniciales + imágenes raw (referencia)
└── docs/
    ├── ARCHITECTURE.md
    ├── DESIGN-SYSTEM.md
    └── CONTENT.md
```
