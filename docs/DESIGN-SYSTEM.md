# Design System — Serrurier Nova

## Filosofía visual

Oficio premium suizo. Confianza + disponibilidad inmediata + profesionalidad. Base visual: el logo navy del cliente + plata + brass.

**NO** editorial-Swiss abstracto (rechazado por el usuario). **SÍ** documentary realista con códigos visibles del oficio (manos, herramientas, cerraduras).

## Tokens

### Color

```css
@theme {
  /* Navy (logo del cliente) */
  --color-navy:        #1c2548;
  --color-navy-2:      #2a3563;
  --color-navy-3:      #0e1428;
  --color-navy-deep:   #060914;

  /* Grises fríos */
  --color-silver:      #d4d8e2;
  --color-silver-2:    #98a0b3;
  --color-steel:       #5e6680;

  /* Crema cálido para secciones claras */
  --color-paper:       #f4f1ea;
  --color-paper-2:     #ebe6d8;

  /* Tipografía oscura sobre paper */
  --color-ink:         #0d1226;
  --color-ink-2:       #3a3f55;

  /* Acentos */
  --color-brass:       #c9a24a;
  --color-brass-deep:  #9b7a2e;
  --color-vermillion:  #d23a1c;   /* SOLO urgencia / CTA */
  --color-vermillion-2:#b53117;
  --color-green:       #5f8a3d;    /* live status */

  /* Líneas */
  --color-hairline:        rgba(255, 255, 255, 0.10);
  --color-hairline-dark:   rgba(13, 18, 38, 0.12);
  --color-hairline-strong: rgba(13, 18, 38, 0.22);
}
```

### Uso del color

| Caso | Color |
|---|---|
| Texto principal sobre paper | `--ink` |
| Texto secundario sobre paper | `--ink-2` |
| Texto sobre navy | `--silver` |
| Texto sutil sobre navy | `--silver-2` |
| Acento de detalle (línea, eyebrow num) | `--brass` |
| CTA primario urgencia (llamar) | `--vermillion` background + `--paper` text |
| CTA secundario | borde `--hairline-strong` + texto `--ink` |
| Live indicator | `--green` dot |
| Hairlines y separadores | `--hairline-dark` |

## Tipografía

### Fuentes

```ts
import { Fraunces, Geist_Mono } from "next/font/google"

export const display = Fraunces({
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  variable: "--font-display",
  display: "swap"
})

export const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
})

// Switzer desde Fontshare via <link> en layout
```

### Escala tipográfica

```css
--text-eyebrow:    0.72rem;  /* mono uppercase */
--text-xs:         0.78rem;
--text-sm:         0.9rem;
--text-base:       1rem;
--text-md:         1.08rem;
--text-lg:         1.18rem;   /* h3 cards, FAQ q */
--text-xl:         1.45rem;   /* service name */
--text-2xl:        1.7rem;
--text-h2:         clamp(2rem, 4vw, 3.2rem);
--text-h1:         clamp(2.2rem, 5vw, 4.2rem);
```

### Cuándo usar cada familia

- **Display (Fraunces)**: H1, H2, H3 de hero/cards. Italic con SOFT 70 reservado para palabras clave de emphasis ("de confiance", "annoncés", "vraiment").
- **Body (Switzer)**: párrafos, navegación, botones, labels.
- **Mono (Geist Mono)**: teléfonos, precios, tiempos, ticker, eyebrow numbers, status bar. Siempre con `font-variant-numeric: tabular-nums`.

## Spacing

```css
--gutter: clamp(1.25rem, 3vw, 2.5rem);  /* container padding */
--section-y: clamp(4.5rem, 8vw, 7rem);  /* section padding-y */
--max: 1320px;
```

## Componentes clave

### Button (`Button.tsx`)

Variantes:
- `primary` — `bg-vermillion text-paper`, urgencia (CTA llamar)
- `secondary` — `border-hairline-strong text-ink`, no urgencia
- `ghost` — solo texto sobre navy con borde plata translúcido

Tamaños: `md` (default `padding: 1rem 1.5rem`) y `lg` (final CTA, `padding: 1.3rem 2.5rem`).

### PhoneCTA (`PhoneCTA.tsx`)

Botón especializado para llamar:
```tsx
<a href="tel:+41225576559" className="...">
  <LiveDot />
  <span>Appeler · <span className="mono">022 557 65 59</span></span>
</a>
```

### ServiceCard (`ServiceCard.tsx`)

Estructura validada con el usuario:
```
┌──────────────────────────┐
│                          │
│      [imagen 4:3]        │
│                          │
│  TITRE EN CAPS           │  ← Fraunces 600 sobre imagen
│  ──── (brass line)       │
└──────────────────────────┘
  [TAG píldora brass]
  Titre h3                   ← Fraunces 600
  Descripción breve          ← Switzer 0.94rem
  En savoir plus →           ← Mono 0.78rem
```

### Eyebrow

```tsx
<span className="eyebrow">
  <span className="num">01</span> / Tarifs
</span>
```
- Familia: mono
- `0.72rem`, `letter-spacing: 0.16em`, `text-transform: uppercase`
- `num` en `--brass`, resto en `--steel`

### LiveDot

Punto pulsante. Variantes: `--green` (operacional), `--vermillion` (urgencia), `--paper` (sobre CTA vermillion).

```css
@keyframes pulse {
  0%   { box-shadow: 0 0 0 0 currentColor; }
  70%  { box-shadow: 0 0 0 8px transparent; }
  100% { box-shadow: 0 0 0 0 transparent; }
}
```

## Patrones de layout

### Block-head (cabecera de sección)

```
┌────────────────────────────────────────────┐
│ EYEBROW 01           Heading h2 con em     │
│                      Dek párrafo descrip.  │
└────────────────────────────────────────────┘
```
Grid 0.35fr 1fr en desktop, 1fr en móvil. Alineado a `end`.

### Hero split

Texto a la izquierda (col 1) + imagen documental a la derecha (col 2). Stats strip en 4 columnas debajo del texto.

### Section rhythm

Alternancia paper → paper-2 → paper → navy-3 → paper para variedad visual sin estridencia.

## Motion

- **Pulse** en live dots (2.4s ease-out infinite)
- **Reveal** on scroll (IntersectionObserver, fade-up 14px, 800ms)
- **Stagger** de 100ms entre hijos en hero
- **Hover** en cards: `translateY(-3px)` + box-shadow + `scale(1.04)` en imagen interior
- **Ticker** scroll horizontal infinite (55s loop seamless)
- **FAQ** acordeón max-height transition (350ms)

**No** parallax, **no** scroll hijacking, **no** animaciones de entrada agresivas.

## Imágenes

### Convenciones

- Aspect ratios: hero 16:9, services 4:3, photo break full-bleed 21:9 efectivo
- Formato: PNG generado por Higgsfield → convertir a WebP via `next/image` automático
- Tamaños responsive vía `next/image sizes`
- Lazy loading por defecto; `priority` solo en hero
- Alt text descriptivo en francés siempre

### Prompts de imagen (referencia para nano_banana_2)

Estructura base de prompt:
```
Professional documentary photograph for a Swiss locksmith website.
[ESCENA específica: extreme close-up of/hands installing/...]
[SUJETO: gloved hands / weathered hands / dark navy work uniform]
[ELEMENTO: brushed brass cylinder / multi-point security plate / lock picks]
[CONTEXTO: dark wooden door / Geneva apartment hallway / workshop]
[LUZ: dramatic side-lighting from the right / warm tungsten + cool ambient]
[CÁMARA: 50mm macro / 35mm lens, sharp focus on hands]
[COLOR: cool color grading, navy and silver with brass highlights]
Hyperrealistic, sharp focus, no text, no logos.
Premium Swiss locksmith brand photography.
```

## Accessibility

- Contrast ratio mínimo 4.5:1 para texto
- `--silver` sobre `--navy-3` = OK (10:1+)
- `--ink-2` sobre `--paper` = OK
- `--steel` sobre `--paper` = ratio justo, usar solo para meta info pequeña
- Focus visible: `outline: 2px solid var(--brass); outline-offset: 3px;`
- Tap targets ≥ 44 × 44 px
- Reducir motion si `prefers-reduced-motion`

## Responsive breakpoints

```
sm:  540px
md:  720px
lg:  880px
xl:  1080px
2xl: 1320px (max container)
```

Mobile-first siempre. Una cerrajería se llama desde el móvil — el botón Appeler está siempre visible.
