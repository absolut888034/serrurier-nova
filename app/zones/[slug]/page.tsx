import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import { StatusBar } from "@/components/layout/StatusBar"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Breadcrumb } from "@/components/ui/Breadcrumb"
import { LiveDot } from "@/components/ui/LiveDot"
import { CTABanner } from "@/components/sections/CTABanner"
import { ContactForm } from "@/components/sections/ContactForm"
import { FinalCTA } from "@/components/sections/FinalCTA"

import { ZONES } from "@/content/zones"
import { SERVICES } from "@/content/services"
import { ZONE_DETAILS } from "@/content/zones-detail"
import { breadcrumbSchema, faqSchema, CONTACT } from "@/lib/schema"

interface PageParams {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return ZONES.map((z) => ({ slug: z.slug }))
}

/** Slugify quartier name → URL-safe id for anchor links (#plainpalais, #eaux-vives...). */
function quartierSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

/** Per-zone SEO overrides: title suffix + extra keywords for high-search quartiers / differentiation. */
const ZONE_SEO_OVERRIDES: Record<string, { titleSuffix?: string; descriptionLead?: string; extraKeywords?: string[] }> = {
  geneve: {
    titleSuffix: "Plainpalais, Eaux-Vives, Pâquis, Champel",
    descriptionLead:
      "Serrurier à Genève centre 24h/24 — Plainpalais, Eaux-Vives, Pâquis, Champel, Cité, Servette, Acacias, Jonction.",
    extraKeywords: [
      "serrurier plainpalais",
      "serrurier eaux-vives",
      "serrurier paquis",
      "serrurier pâquis",
      "serrurier champel",
      "serrurier servette",
      "serrurier acacias",
      "serrurier vieille-ville geneve",
      "serrurier jonction",
      "serrurier geneve centre",
    ],
  },
  "chene-bougeries": {
    titleSuffix: "Conches, Pré-l'Évêque, Grange-Canal",
    extraKeywords: [
      "serrurier conches",
      "ouverture porte chêne-bougeries",
      "cylindre haute sécurité chêne-bougeries",
    ],
  },
  "chene-bourg": {
    titleSuffix: "Gare CEVA, Place Favre, Grange-Falquet",
    extraKeywords: [
      "serrurier gare ceva",
      "serrurier place favre",
      "changement serrure chêne-bourg",
    ],
  },
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params
  const zone = ZONES.find((z) => z.slug === slug)
  const detail = ZONE_DETAILS[slug]
  if (!zone || !detail) return {}

  const override = ZONE_SEO_OVERRIDES[slug]
  const title = override?.titleSuffix
    ? `Serrurier ${zone.name} — ${override.titleSuffix} · 24h/24`
    : `Serrurier à ${zone.name} · 24h/24 · 7j/7`
  const description =
    override?.descriptionLead ??
    `Serrurier d'urgence à ${zone.name} (Genève), joignable directement 24h/24 et 7j/7 dans toute la commune. Devis annoncé avant déplacement. ★ 5,0 sur Google. ☎ 022 557 65 59.`

  return {
    title,
    description,
    alternates: { canonical: `/zones/${zone.slug}` },
    openGraph: {
      title: override?.titleSuffix
        ? `Serrurier ${zone.name} — ${override.titleSuffix}`
        : `Serrurier à ${zone.name} · 24h/24`,
      description: override?.descriptionLead ?? detail.lead,
      type: "website",
      locale: "fr_CH",
    },
    keywords: [
      `serrurier ${zone.name}`,
      `serrurier ${zone.name.toLowerCase()}`,
      `serrurier urgence ${zone.name}`,
      `ouverture porte ${zone.name}`,
      `changement serrure ${zone.name}`,
      ...(override?.extraKeywords ?? []),
    ],
  }
}

export default async function ZoneDetailPage({ params }: PageParams) {
  const { slug } = await params
  const zone = ZONES.find((z) => z.slug === slug)
  const detail = ZONE_DETAILS[slug]

  if (!zone || !detail) notFound()

  const proximityAccent =
    zone.proximity === "immediate"
      ? "var(--color-green)"
      : zone.proximity === "near"
        ? "var(--color-brass-deep)"
        : "var(--color-steel)"

  const proximityHeadline =
    zone.proximity === "immediate"
      ? "Voisinage immédiat"
      : zone.proximity === "near"
        ? "Proche de Vernier"
        : "Canton de Genève"

  return (
    <>
      <StatusBar />
      <Header />

      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              breadcrumbSchema([
                { name: "Accueil", url: "/" },
                { name: "Zones", url: "/zones" },
                { name: zone.name, url: `/zones/${zone.slug}` },
              ]),
            ),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema(detail.faqs)),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: `Serrurier à ${zone.name}`,
              description: detail.lead,
              areaServed: {
                "@type": "City",
                name: zone.name,
                containedInPlace: { "@type": "AdministrativeArea", name: "Canton de Genève" },
              },
              provider: { "@id": "https://www.serruriernova.ch/#business" },
              url: `https://www.serruriernova.ch/zones/${zone.slug}`,
            }),
          }}
        />

        {/* HERO */}
        <section
          style={{
            background: "var(--color-navy-3)",
            color: "var(--color-silver)",
            position: "relative",
            overflow: "hidden",
            paddingTop: "clamp(2.5rem, 4.5vw, 4rem)",
            paddingBottom: "clamp(3.5rem, 6vw, 5rem)",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 55% 60% at 85% 15%, rgba(201, 162, 74, 0.12), transparent 65%)",
              pointerEvents: "none",
            }}
          />

          <div className="container" style={{ position: "relative" }}>
            <Breadcrumb
              tone="dark"
              items={[
                { name: "Accueil", href: "/" },
                { name: "Zones", href: "/zones" },
                { name: zone.name },
              ]}
            />

            <div
              className="zd-hero-grid"
              style={{
                marginTop: "clamp(1.8rem, 3vw, 2.6rem)",
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "2rem",
                alignItems: "stretch",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "1.3rem" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignSelf: "flex-start",
                    alignItems: "center",
                    gap: "0.6rem",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.66rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--color-brass)",
                    background: "rgba(201, 162, 74, 0.16)",
                    border: "1px solid rgba(201, 162, 74, 0.4)",
                    padding: "0.45rem 0.85rem",
                    borderRadius: 999,
                    fontWeight: 700,
                  }}
                >
                  <LiveDot variant="red" size={7} />
                  Zone · {zone.name} · 24h/24
                </span>

                <h1
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    fontSize: "clamp(2.1rem, 5vw, 3.6rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.025em",
                    color: "var(--color-paper)",
                    margin: 0,
                    maxWidth: "20ch",
                  }}
                >
                  Serrurier à{" "}
                  <em
                    style={{
                      fontStyle: "italic",
                      fontVariationSettings: '"SOFT" 70',
                      fontWeight: 400,
                      color: "var(--color-brass)",
                    }}
                  >
                    {zone.name}.
                  </em>
                </h1>

                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(1rem, 1.4vw, 1.1rem)",
                    color: "var(--color-silver)",
                    lineHeight: 1.6,
                    maxWidth: "58ch",
                    margin: 0,
                  }}
                >
                  {detail.lead}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.8rem",
                    marginTop: "0.4rem",
                  }}
                >
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="zd-cta-primary"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.7rem",
                      padding: "1rem 1.5rem",
                      background: "var(--color-vermillion)",
                      color: "var(--color-paper)",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      borderRadius: 6,
                      transition: "background 0.2s ease, transform 0.2s ease",
                      boxShadow: "0 12px 28px -14px rgba(210, 58, 28, 0.55)",
                    }}
                  >
                    <LiveDot variant="paper" size={8} />
                    <span>
                      Appeler ·{" "}
                      <span style={{ fontFamily: "var(--font-mono)", fontVariantNumeric: "tabular-nums" }}>
                        022 557 65 59
                      </span>
                    </span>
                  </a>

                  <Link
                    href="/#contact"
                    className="zd-cta-secondary"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "1rem 1.4rem",
                      background: "transparent",
                      color: "var(--color-silver)",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.95rem",
                      fontWeight: 500,
                      border: "1px solid rgba(212, 216, 226, 0.28)",
                      borderRadius: 6,
                      transition: "border-color 0.2s ease, color 0.2s ease",
                    }}
                  >
                    <span>Devis pour {zone.name}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    marginTop: "1rem",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.76rem",
                    color: "var(--color-silver-2)",
                  }}
                >
                  <span style={{ textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 500 }}>
                    Ligne directe · WhatsApp
                  </span>
                  <span aria-hidden="true" style={{ opacity: 0.4 }}>—</span>
                  <a
                    href={`tel:${CONTACT.mobile}`}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontVariantNumeric: "tabular-nums",
                      color: "var(--color-silver)",
                      fontWeight: 500,
                    }}
                  >
                    076 475 08 81
                  </a>
                </div>
              </div>

              {/* Visual column: photo + delay card stacked */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {/* Photo */}
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "16 / 10",
                    overflow: "hidden",
                    borderRadius: 14,
                    border: "1px solid rgba(212, 216, 226, 0.18)",
                    background: "var(--color-navy-deep)",
                    boxShadow: "0 30px 60px -22px rgba(0,0,0,0.55)",
                  }}
                >
                  <Image
                    src="/images/gallery-07-van-geneve.png"
                    alt={`Intervention de nuit du serrurier Nova à ${zone.name}, canton de Genève`}
                    fill
                    priority
                    sizes="(min-width: 980px) 45vw, 100vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(6,9,20,0) 50%, rgba(6,9,20,0.65) 100%)",
                    }}
                  />
                  {/* Brass corners */}
                  <span aria-hidden="true" style={{ position: "absolute", top: 10, left: 10, width: 22, height: 22, borderTop: "1.5px solid var(--color-brass)", borderLeft: "1.5px solid var(--color-brass)" }} />
                  <span aria-hidden="true" style={{ position: "absolute", bottom: 10, right: 10, width: 22, height: 22, borderBottom: "1.5px solid var(--color-brass)", borderRight: "1.5px solid var(--color-brass)" }} />
                  {/* Live tag */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 12,
                      left: 12,
                      background: "rgba(6, 9, 20, 0.78)",
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                      color: "var(--color-paper)",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.62rem",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      fontWeight: 500,
                      padding: "0.45rem 0.75rem",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.55rem",
                      border: "1px solid rgba(212, 216, 226, 0.15)",
                      borderRadius: 4,
                    }}
                  >
                    <LiveDot variant="red" size={6} />
                    <span>En intervention · {zone.name}</span>
                  </div>
                </div>

                {/* Coverage card */}
                <div
                  style={{
                    background: "rgba(28, 37, 72, 0.55)",
                    border: "1px solid rgba(212, 216, 226, 0.16)",
                    borderRadius: 14,
                    padding: "1.4rem 1.8rem",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.7rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.66rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--color-silver-2)",
                      fontWeight: 600,
                    }}
                  >
                    — Couverture depuis Châtelaine
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.8rem, 3.6vw, 2.6rem)",
                      fontWeight: 500,
                      letterSpacing: "-0.025em",
                      color: proximityAccent,
                      lineHeight: 1.05,
                    }}
                  >
                    {proximityHeadline}
                  </span>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.88rem",
                      color: "var(--color-silver)",
                      lineHeight: 1.55,
                      maxWidth: "40ch",
                      margin: 0,
                    }}
                  >
                    {detail.pitch}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.78rem",
                      color: "var(--color-silver-2)",
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    Délai exact confirmé au téléphone, avant tout déplacement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section
          style={{
            background: "var(--color-paper)",
            paddingTop: "clamp(3rem, 5vw, 4rem)",
            paddingBottom: "clamp(3rem, 5vw, 4rem)",
            borderTop: "1px solid var(--color-hairline-dark)",
          }}
        >
          <div className="container" style={{ maxWidth: 920, marginInline: "auto" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(1.55rem, 3vw, 2.2rem)",
                letterSpacing: "-0.022em",
                lineHeight: 1.1,
                color: "var(--color-ink)",
                margin: "0 0 1.6rem",
                maxWidth: "24ch",
              }}
            >
              Notre travail à{" "}
              <em
                style={{
                  fontStyle: "italic",
                  fontVariationSettings: '"SOFT" 70',
                  fontWeight: 400,
                  color: "var(--color-brass-deep)",
                }}
              >
                {zone.name}.
              </em>
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
              {detail.intro.map((p, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1.02rem",
                    color: "var(--color-ink-2)",
                    lineHeight: 1.68,
                    margin: 0,
                    maxWidth: "66ch",
                  }}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* QUARTIERS */}
        <section
          style={{
            background: "var(--color-paper-2)",
            paddingTop: "clamp(3rem, 5vw, 4rem)",
            paddingBottom: "clamp(3rem, 5vw, 4rem)",
            borderTop: "1px solid var(--color-hairline-dark)",
          }}
        >
          <div className="container">
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1rem",
                marginBottom: "1.8rem",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: "clamp(1.5rem, 2.8vw, 2rem)",
                  letterSpacing: "-0.022em",
                  lineHeight: 1.1,
                  color: "var(--color-ink)",
                  margin: 0,
                }}
              >
                Quartiers{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    fontVariationSettings: '"SOFT" 70',
                    fontWeight: 400,
                    color: "var(--color-brass-deep)",
                  }}
                >
                  desservis.
                </em>
              </h2>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--color-steel)",
                }}
              >
                — {String(detail.quartiers.length).padStart(2, "0")} secteurs
              </span>
            </div>

            <ul
              className="zd-quartiers"
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "0.7rem",
              }}
            >
              {detail.quartiers.map((q) => (
                <li
                  key={q.name}
                  id={quartierSlug(q.name)}
                  style={{
                    padding: "0.95rem 1.2rem",
                    background: "var(--color-paper)",
                    border: "1px solid var(--color-hairline-dark)",
                    borderLeft: "3px solid var(--color-brass)",
                    borderRadius: 10,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.25rem",
                    scrollMarginTop: "100px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      letterSpacing: "-0.012em",
                      color: "var(--color-ink)",
                    }}
                  >
                    {q.name}
                  </span>
                  {q.note && (
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.86rem",
                        color: "var(--color-ink-2)",
                        lineHeight: 1.5,
                      }}
                    >
                      {q.note}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SPECIFICS */}
        <section
          style={{
            background: "var(--color-paper)",
            paddingTop: "clamp(3rem, 5vw, 4rem)",
            paddingBottom: "clamp(3rem, 5vw, 4rem)",
            borderTop: "1px solid var(--color-hairline-dark)",
          }}
        >
          <div className="container" style={{ maxWidth: 1000, marginInline: "auto" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(1.5rem, 2.8vw, 2rem)",
                letterSpacing: "-0.022em",
                lineHeight: 1.1,
                color: "var(--color-ink)",
                margin: "0 0 1.6rem",
              }}
            >
              Spécificités{" "}
              <em
                style={{
                  fontStyle: "italic",
                  fontVariationSettings: '"SOFT" 70',
                  fontWeight: 400,
                  color: "var(--color-brass-deep)",
                }}
              >
                locales.
              </em>
            </h2>

            <ul
              className="zd-specifics"
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "1rem",
              }}
            >
              {detail.specifics.map((s) => (
                <li
                  key={s.k}
                  style={{
                    background: "var(--color-paper-2)",
                    border: "1px solid var(--color-hairline-dark)",
                    borderRadius: 10,
                    padding: "1.2rem 1.4rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.35rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.66rem",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "var(--color-brass-deep)",
                      fontWeight: 600,
                    }}
                  >
                    — {s.k}
                  </span>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.94rem",
                      color: "var(--color-ink-2)",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {s.v}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SERVICE × ZONE CROSSLINKS */}
        <section
          style={{
            background: "var(--color-paper-2)",
            paddingTop: "clamp(3rem, 5vw, 4rem)",
            paddingBottom: "clamp(3rem, 5vw, 4rem)",
            borderTop: "1px solid var(--color-hairline-dark)",
          }}
        >
          <div className="container">
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(1.5rem, 2.8vw, 2rem)",
                letterSpacing: "-0.022em",
                lineHeight: 1.1,
                color: "var(--color-ink)",
                margin: "0 0 1.6rem",
                maxWidth: "30ch",
              }}
            >
              Nos prestations à{" "}
              <em
                style={{
                  fontStyle: "italic",
                  fontVariationSettings: '"SOFT" 70',
                  fontWeight: 400,
                  color: "var(--color-brass-deep)",
                }}
              >
                {zone.name}.
              </em>
            </h2>

            <ul
              className="zd-services"
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "0.7rem",
              }}
            >
              {SERVICES.map((s) => {
                // Matrix combo URL if it's one of the top 3 services
                const matrixSlugs = ["ouverture-de-porte", "changement-de-serrure", "depannage-apres-effraction"]
                const href = matrixSlugs.includes(s.slug)
                  ? `/services/${s.slug}-a-${zone.slug}`
                  : `/services/${s.slug}`
                const isMatrix = matrixSlugs.includes(s.slug)
                return (
                  <li key={s.slug}>
                    <Link
                      href={href}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "0.8rem",
                        padding: "0.95rem 1.2rem",
                        background: "var(--color-paper)",
                        border: "1px solid var(--color-hairline-dark)",
                        borderRadius: 10,
                        transition: "border-color 0.2s ease, transform 0.2s ease",
                      }}
                      className="zd-service-link"
                    >
                      <span style={{ display: "flex", flexDirection: "column", gap: "0.15rem" }}>
                        <span
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "1rem",
                            fontWeight: 600,
                            color: "var(--color-ink)",
                          }}
                        >
                          {isMatrix ? `${s.title} à ${zone.name}` : s.title}
                        </span>
                        {isMatrix && (
                          <span
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.66rem",
                              letterSpacing: "0.14em",
                              textTransform: "uppercase",
                              color: "var(--color-brass-deep)",
                              fontWeight: 600,
                            }}
                          >
                            Page dédiée
                          </span>
                        )}
                      </span>
                      <span aria-hidden="true" className="zd-arrow" style={{ color: "var(--color-brass-deep)", transition: "transform 0.2s ease" }}>
                        →
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section
          style={{
            background: "var(--color-paper)",
            paddingTop: "clamp(3rem, 5vw, 4rem)",
            paddingBottom: "clamp(3rem, 5vw, 4rem)",
            borderTop: "1px solid var(--color-hairline-dark)",
          }}
        >
          <div className="container" style={{ maxWidth: 900, marginInline: "auto" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(1.55rem, 3vw, 2.1rem)",
                letterSpacing: "-0.022em",
                lineHeight: 1.1,
                color: "var(--color-ink)",
                margin: "0 0 1.6rem",
                textAlign: "center",
              }}
            >
              Questions spécifiques à{" "}
              <em
                style={{
                  fontStyle: "italic",
                  fontVariationSettings: '"SOFT" 70',
                  fontWeight: 400,
                  color: "var(--color-brass-deep)",
                }}
              >
                {zone.name}.
              </em>
            </h2>

            <div style={{ borderTop: "2px solid var(--color-navy)" }}>
              {detail.faqs.map((item, i) => (
                <details
                  key={item.q}
                  className="faq-item"
                  style={{ borderBottom: "1px solid var(--color-hairline-dark)" }}
                >
                  <summary
                    style={{
                      display: "grid",
                      gridTemplateColumns: "auto 1fr auto",
                      gap: "1.2rem",
                      alignItems: "center",
                      padding: "1.3rem 0",
                      cursor: "pointer",
                      listStyle: "none",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        color: "var(--color-brass-deep)",
                        letterSpacing: "0.06em",
                        fontWeight: 600,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.08rem",
                        fontWeight: 600,
                        letterSpacing: "-0.01em",
                        color: "var(--color-ink)",
                      }}
                    >
                      {item.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className="faq-plus"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "1.3rem",
                        color: "var(--color-navy)",
                        fontWeight: 500,
                        transition: "transform 0.3s ease, color 0.2s ease",
                        lineHeight: 1,
                      }}
                    >
                      +
                    </span>
                  </summary>
                  <div
                    className="faq-answer"
                    style={{
                      paddingBottom: "1.4rem",
                      paddingLeft: "calc(1.2rem + 1.5rem)",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.96rem",
                      lineHeight: 1.65,
                      color: "var(--color-ink-2)",
                      maxWidth: "64ch",
                    }}
                  >
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* OTHER ZONES */}
        <section
          style={{
            background: "var(--color-paper-2)",
            paddingTop: "clamp(2.5rem, 4vw, 3.5rem)",
            paddingBottom: "clamp(2.5rem, 4vw, 3.5rem)",
            borderTop: "1px solid var(--color-hairline-dark)",
          }}
        >
          <div className="container">
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                gap: "1.5rem",
                flexWrap: "wrap",
                marginBottom: "1.5rem",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: "clamp(1.3rem, 2.3vw, 1.65rem)",
                  letterSpacing: "-0.02em",
                  color: "var(--color-ink)",
                  margin: 0,
                }}
              >
                Les autres communes
              </h2>
              <Link
                href="/zones"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--color-navy)",
                  fontWeight: 600,
                  borderBottom: "1.5px solid var(--color-brass)",
                  paddingBottom: 3,
                }}
              >
                Voir toutes les zones →
              </Link>
            </div>

            <ul
              className="zd-other"
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "0.55rem",
              }}
            >
              {ZONES.filter((z) => z.slug !== zone.slug).slice(0, 8).map((z) => (
                <li key={z.slug}>
                  <Link
                    href={`/zones/${z.slug}`}
                    className="zd-other-link"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0.8rem 1rem",
                      background: "var(--color-paper)",
                      border: "1px solid var(--color-hairline-dark)",
                      borderRadius: 8,
                      transition: "border-color 0.2s ease",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.92rem",
                        color: "var(--color-ink)",
                        fontWeight: 500,
                      }}
                    >
                      {z.name}
                    </span>
                    <span
                      aria-hidden="true"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.95rem",
                        color: "var(--color-brass-deep)",
                        fontWeight: 600,
                      }}
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ContactForm />
        <FinalCTA />
      </main>

      <Footer />

      <style>{`
        @media (min-width: 880px) {
          .zd-hero-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
            gap: 2.5rem !important;
          }
        }
        @media (min-width: 720px) {
          .zd-quartiers { grid-template-columns: repeat(2, 1fr) !important; gap: 0.85rem !important; }
          .zd-specifics { grid-template-columns: repeat(3, 1fr) !important; }
          .zd-services { grid-template-columns: repeat(2, 1fr) !important; }
          .zd-other { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 1080px) {
          .zd-quartiers { grid-template-columns: repeat(3, 1fr) !important; }
          .zd-services { grid-template-columns: repeat(3, 1fr) !important; }
          .zd-other { grid-template-columns: repeat(4, 1fr) !important; }
        }
        .zd-cta-primary:hover {
          background: var(--color-vermillion-2) !important;
          transform: translateY(-1px);
        }
        .zd-cta-secondary:hover {
          border-color: var(--color-brass) !important;
          color: var(--color-brass) !important;
        }
        .zd-service-link:hover {
          border-color: var(--color-brass) !important;
          transform: translateY(-1px);
        }
        .zd-service-link:hover .zd-arrow { transform: translateX(4px); }
        .zd-other-link:hover {
          border-color: var(--color-brass) !important;
        }
        .faq-item summary::-webkit-details-marker { display: none; }
        .faq-item[open] .faq-plus { transform: rotate(45deg); color: var(--color-vermillion) !important; }
        @media (max-width: 640px) {
          .faq-item .faq-answer { padding-left: 0 !important; }
        }
      `}</style>
    </>
  )
}
