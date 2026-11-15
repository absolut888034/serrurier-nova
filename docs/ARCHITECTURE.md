# Arquitectura — Serrurier Nova

## Mapa del sitio

### Páginas estáticas (alta prioridad)

| Ruta | Propósito | Schema |
|---|---|---|
| `/` | Home | LocalBusiness + FAQPage + BreadcrumbList |
| `/tarifs` | Tabla de precios — diferenciador anti-centrale-opaque | PriceSpecification + BreadcrumbList |
| `/a-propos` | Trust signals: 10 ans, certifications, valeurs | AboutPage + Person + BreadcrumbList |
| `/contact` | Tel + mail + WhatsApp + map + form | ContactPage + LocalBusiness |
| `/zones` | Hub de las 45 comunas | CollectionPage |
| `/services` | Hub de los 10 servicios | CollectionPage |
| `/blog` | Hub blog | CollectionPage |

### Páginas programáticas (volumen SEO)

| Ruta | Generación | Schema |
|---|---|---|
| `/services/[slug]` | 10 páginas, una por servicio | Service + FAQPage + BreadcrumbList |
| `/zones/[slug]` | 12 → 45 páginas, una por comuna | LocalBusiness (areaServed override) + BreadcrumbList |
| `/services/[svc]-a-[zone]` | Top combinaciones servicio × comuna | Service + BreadcrumbList |
| `/blog/[slug]` | 10 → N artículos en MDX | Article + BreadcrumbList |

### Páginas legales

| Ruta | Schema |
|---|---|
| `/mentions-legales` | WebPage |
| `/politique-de-confidentialite` | WebPage |

## Componentes de la home (orden de construcción)

```
┌─────────────────────────────────────────┐
│ 01  StatusBar                           │  navy-3 · live time + ops status
├─────────────────────────────────────────┤
│ 02  Header                              │  sticky · logo + nav + tel CTA
├─────────────────────────────────────────┤
│ 03  Hero                                │  split · text + photo + stats + CTA
├─────────────────────────────────────────┤
│ 04  Ticker                              │  scroll · últimas intervenciones
├─────────────────────────────────────────┤
│ 05  Tarifs                              │  paper-2 · tabla precios transparente
├─────────────────────────────────────────┤
│ 06  PhotoBreak                          │  full-bleed · quote + atmosfera
├─────────────────────────────────────────┤
│ 07  Services                            │  paper · 6-10 cards estilo referencia
├─────────────────────────────────────────┤
│ 08  Zones                               │  paper-2 · grid 12 comunas + tiempos
├─────────────────────────────────────────┤
│ 09  Avis                                │  paper · 3 reseñas Google + link 8 avis
├─────────────────────────────────────────┤
│ 10  Méthode                             │  paper-2 · 4 pasos numerados
├─────────────────────────────────────────┤
│ 11  Apropos                             │  navy-3 · trust + badges certifications
├─────────────────────────────────────────┤
│ 12  FAQ                                 │  paper · acordeón 6 preguntas
├─────────────────────────────────────────┤
│ 13  FinalCTA                            │  navy-3 · tel grande + vermillion
├─────────────────────────────────────────┤
│ 14  Footer                              │  navy-deep · 4 columnas
└─────────────────────────────────────────┘
```

## Estructura de componentes

```
components/
├── layout/
│   ├── Header.tsx           ← sticky header + nav
│   ├── Footer.tsx
│   └── StatusBar.tsx        ← top live status
│
├── sections/
│   ├── Hero.tsx
│   ├── Ticker.tsx
│   ├── Tarifs.tsx
│   ├── PhotoBreak.tsx
│   ├── Services.tsx
│   ├── Zones.tsx
│   ├── Avis.tsx
│   ├── Methode.tsx
│   ├── Apropos.tsx
│   ├── FAQ.tsx
│   └── FinalCTA.tsx
│
├── service/
│   ├── ServiceHero.tsx      ← reutilizable en /services/[slug]
│   ├── ServiceProcess.tsx
│   └── RelatedServices.tsx
│
├── zone/
│   ├── ZoneHero.tsx         ← reutilizable en /zones/[slug]
│   ├── ZoneCoverage.tsx     ← mapa o lista barrios
│   └── ZoneTestimonials.tsx
│
└── ui/
    ├── Button.tsx            ← btn-primary / btn-secondary
    ├── PhoneCTA.tsx          ← tel:+41... con tracking
    ├── ServiceCard.tsx       ← card reutilizable
    ├── ZoneCard.tsx
    ├── ReviewCard.tsx
    ├── AccordionItem.tsx
    ├── Eyebrow.tsx           ← numeración 01 / etc
    ├── Stat.tsx
    └── LiveDot.tsx
```

## Plantilla de página de servicio

```
/services/[slug]
├── ServiceHero          (h1 + meta + CTA tel)
├── ServicePricing       (precio destacado + lo que incluye)
├── ServiceProcess       (4 pasos adaptados al servicio)
├── ServiceFAQ           (3-5 preguntas específicas)
├── ServiceZones         (recordatorio: 45 comunas)
├── RelatedServices      (3 cards de otros servicios)
└── FinalCTA
```

## Plantilla de página de zona

```
/zones/[slug]
├── ZoneHero             (h1 "Serrurier à [Comuna]" + délai + tel)
├── ZoneCoverage         (barrios/quartiers cubiertos)
├── ServicesInZone       (los 10 servicios reutilizando data)
├── ZoneTestimonials     (filtrado por zona si hay)
├── ZoneFAQ              (preguntas comunes + específica)
└── FinalCTA
```

## SEO técnico

### Meta tags por tipo de página

```ts
// Home
title:       "Serrurier Genève 24h/24 — Nova Serrurerie · 5,0 ★"
description: "Serrurier de confiance à Genève. Intervention 24h/24 dans tout le canton. Tarifs annoncés à l'avance dès 229 CHF. Cinq étoiles sur Google."

// Service
title:       "[Service] à Genève — Nova Serrurerie · Dès [prix]"
description: "[Service] dans tout le canton de Genève par un serrurier diplômé. Intervention sous 30 min. Tarif annoncé : dès [prix] CHF."

// Zone
title:       "Serrurier à [Comuna] · 24h/24 — Nova Serrurerie"
description: "Serrurier à [Comuna] disponible 24h/24. Délai moyen [tiempo] min depuis Vernier. Tarifs transparents. 5,0 ★ sur Google."

// Service × Zone
title:       "[Service] à [Comuna] — Nova Serrurerie · Dès [prix] CHF"
description: "[Service] à [Comuna] par un serrurier diplômé. Intervention 24h/24, délai moyen [tiempo] min. Tarif annoncé : dès [prix] CHF."
```

### URLs canónicas y hreflang

- Solo francés inicialmente, sin hreflang
- Si se añade EN/DE, usar `/en/`, `/de/` con hreflang adecuados

### Sitemap.xml prioridades

```
/                              priority 1.0
/services, /zones              priority 0.9
/services/[slug]               priority 0.8
/zones/[slug]                  priority 0.7
/services/[svc]-a-[zone]       priority 0.6
/blog                          priority 0.7
/blog/[slug]                   priority 0.5
/tarifs                        priority 0.8
/a-propos, /contact            priority 0.5
/mentions-legales              priority 0.2
```

## Performance objetivo

- LCP < 1.8s
- INP < 200ms
- CLS < 0.05
- Lighthouse: Perf ≥ 95, Accessibility ≥ 95, SEO 100
