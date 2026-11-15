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
import { ServiceZoneMatrix } from "@/components/page/ServiceZoneMatrix"

import { SERVICES } from "@/content/services"
import { SERVICE_DETAILS } from "@/content/services-detail"
import { ZONES } from "@/content/zones"
import { ZONE_DETAILS } from "@/content/zones-detail"
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
  CONTACT,
} from "@/lib/schema"

interface PageParams {
  params: Promise<{ slug: string }>
}

/** Slugs de services proposés en matrice service × zone (haute valeur SEO). */
const MATRIX_SERVICES = [
  "ouverture-de-porte",
  "changement-de-serrure",
  "depannage-apres-effraction",
] as const

function parseMatrixSlug(slug: string) {
  for (const svc of MATRIX_SERVICES) {
    const prefix = `${svc}-a-`
    if (slug.startsWith(prefix)) {
      const zoneSlug = slug.slice(prefix.length)
      const zone = ZONES.find((z) => z.slug === zoneSlug)
      const service = SERVICES.find((s) => s.slug === svc)
      const serviceDetail = SERVICE_DETAILS[svc]
      const zoneDetail = ZONE_DETAILS[zoneSlug]
      if (zone && service && serviceDetail && zoneDetail) {
        return { service, zone, serviceDetail, zoneDetail }
      }
    }
  }
  return null
}

export function generateStaticParams() {
  const base = SERVICES.map((s) => ({ slug: s.slug }))
  const matrix = MATRIX_SERVICES.flatMap((svc) =>
    ZONES.map((z) => ({ slug: `${svc}-a-${z.slug}` })),
  )
  return [...base, ...matrix]
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params

  const matrix = parseMatrixSlug(slug)
  if (matrix) {
    const { service, zone, serviceDetail } = matrix
    return {
      title: `${service.title} à ${zone.name} · 24h/24 · 7j/7`,
      description: `${serviceDetail.lead} ${zone.name} desservi 24h/24 et 7j/7 — délai et devis annoncés au téléphone avant déplacement. ★ 5,0 sur Google.`,
      alternates: { canonical: `/services/${slug}` },
      openGraph: {
        title: `${service.title} à ${zone.name}`,
        description: serviceDetail.lead,
        type: "website",
        locale: "fr_CH",
        images: [service.image],
      },
      keywords: [
        `${service.shortTitle.toLowerCase()} ${service.shortSub.toLowerCase()} ${zone.name}`,
        `serrurier ${zone.name}`,
        `${service.title.toLowerCase()} ${zone.name}`,
        `serrurier urgence ${zone.name}`,
      ],
    }
  }

  const service = SERVICES.find((s) => s.slug === slug)
  const detail = SERVICE_DETAILS[slug]
  if (!service || !detail) return {}

  return {
    title: `${service.title} à Genève`,
    description: detail.lead,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} à Genève`,
      description: detail.lead,
      type: "website",
      locale: "fr_CH",
      images: [service.image],
    },
  }
}

export default async function ServiceDetailPage({ params }: PageParams) {
  const { slug } = await params

  // Matrix service × zone page detection
  const matrix = parseMatrixSlug(slug)
  if (matrix) {
    return (
      <>
        <StatusBar />
        <Header />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              breadcrumbSchema([
                { name: "Accueil", url: "/" },
                { name: "Services", url: "/services" },
                { name: matrix.service.title, url: `/services/${matrix.service.slug}` },
                { name: matrix.zone.name, url: `/services/${slug}` },
              ]),
            ),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              serviceSchema({
                name: `${matrix.service.title} à ${matrix.zone.name}`,
                slug,
                description: matrix.serviceDetail.lead,
                image: matrix.service.image,
              }),
            ),
          }}
        />
        <ServiceZoneMatrix
          service={matrix.service}
          zone={matrix.zone}
          serviceDetail={matrix.serviceDetail}
          zoneDetail={matrix.zoneDetail}
        />
        <Footer />
      </>
    )
  }

  const service = SERVICES.find((s) => s.slug === slug)
  const detail = SERVICE_DETAILS[slug]

  if (!service || !detail) notFound()

  const isUrgence = service.tag === "Urgence"
  const accent = isUrgence ? "var(--color-vermillion)" : "var(--color-brass)"
  const accentDeep = isUrgence ? "var(--color-vermillion-2)" : "var(--color-brass-deep)"

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
                { name: "Services", url: "/services" },
                { name: service.title, url: `/services/${service.slug}` },
              ]),
            ),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              serviceSchema({
                name: service.title,
                slug: service.slug,
                description: detail.lead,
                image: service.image,
              }),
            ),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema(detail.faqs)),
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
            paddingBottom: "clamp(3rem, 5.5vw, 4.5rem)",
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
                { name: "Services", href: "/services" },
                { name: service.shortTitle + " " + service.shortSub },
              ]}
            />

            <div
              className="svc-hero-grid"
              style={{
                marginTop: "clamp(1.8rem, 3vw, 2.6rem)",
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "2rem",
                alignItems: "stretch",
              }}
            >
              {/* Text */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.3rem" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignSelf: "flex-start",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.62rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: accent,
                    background: isUrgence
                      ? "rgba(210, 58, 28, 0.14)"
                      : "rgba(201, 162, 74, 0.18)",
                    border: `1px solid ${isUrgence
                      ? "rgba(210, 58, 28, 0.4)"
                      : "rgba(201, 162, 74, 0.4)"}`,
                    padding: "0.42rem 0.8rem",
                    borderRadius: 999,
                    fontWeight: 700,
                  }}
                >
                  {service.tag} · {service.shortTitle} {service.shortSub}
                </span>

                <h1
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    fontSize: "clamp(2.05rem, 4.6vw, 3.5rem)",
                    lineHeight: 1.06,
                    letterSpacing: "-0.025em",
                    color: "var(--color-paper)",
                    margin: 0,
                    maxWidth: "20ch",
                  }}
                >
                  {service.title}{" "}
                  <em
                    style={{
                      fontStyle: "italic",
                      fontVariationSettings: '"SOFT" 70',
                      fontWeight: 400,
                      color: accent,
                    }}
                  >
                    à Genève.
                  </em>
                </h1>

                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(1rem, 1.4vw, 1.12rem)",
                    color: "var(--color-silver)",
                    lineHeight: 1.6,
                    maxWidth: "58ch",
                    margin: 0,
                  }}
                >
                  {detail.lead}
                </p>

                {/* Meta strip */}
                <dl
                  className="svc-meta"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "0",
                    margin: "0.4rem 0 0",
                    borderTop: "1px solid rgba(212, 216, 226, 0.18)",
                    borderBottom: "1px solid rgba(212, 216, 226, 0.18)",
                  }}
                >
                  {[
                    { k: "Délai", v: detail.meta.delay },
                    { k: "Garantie", v: detail.meta.guarantee },
                    { k: "Paiement", v: detail.meta.payment },
                  ].map((m, i) => (
                    <div
                      key={m.k}
                      style={{
                        padding: "1rem 0.2rem 1rem 0",
                        borderRight: i < 2 ? "1px solid rgba(212, 216, 226, 0.12)" : "none",
                        paddingLeft: i === 0 ? 0 : "1rem",
                      }}
                    >
                      <dt
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.6rem",
                          letterSpacing: "0.16em",
                          textTransform: "uppercase",
                          color: "var(--color-silver-2)",
                          fontWeight: 600,
                          marginBottom: "0.3rem",
                        }}
                      >
                        {m.k}
                      </dt>
                      <dd
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.9rem",
                          color: "var(--color-paper)",
                          fontWeight: 500,
                          margin: 0,
                          lineHeight: 1.3,
                        }}
                      >
                        {m.v}
                      </dd>
                    </div>
                  ))}
                </dl>

                {/* CTAs */}
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
                    className="svc-hero-cta-primary"
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
                    className="svc-hero-cta-secondary"
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
                    <span>Demander un devis</span>
                    <span aria-hidden="true" className="svc-hero-arrow">→</span>
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

              {/* Image */}
              <div
                style={{
                  position: "relative",
                  borderRadius: 14,
                  overflow: "hidden",
                  background: "var(--color-navy-deep)",
                  border: "1px solid rgba(212, 216, 226, 0.16)",
                  boxShadow: "0 30px 60px -22px rgba(0,0,0,0.5)",
                  aspectRatio: "4 / 3",
                }}
              >
                <Image
                  src={service.image}
                  alt={`${service.title} à Genève par Serrurier Nova — ${service.tag === "Urgence" ? "Intervention 24h/24" : "Service certifié"}`}
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
                      "linear-gradient(180deg, rgba(6,9,20,0) 60%, rgba(6,9,20,0.7) 100%)",
                  }}
                />
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    width: 22,
                    height: 22,
                    borderTop: `1.5px solid ${accent}`,
                    borderLeft: `1.5px solid ${accent}`,
                  }}
                />
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    bottom: 10,
                    right: 10,
                    width: 22,
                    height: 22,
                    borderBottom: `1.5px solid ${accent}`,
                    borderRight: `1.5px solid ${accent}`,
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* INTRO PROSE */}
        <section
          style={{
            background: "var(--color-paper)",
            paddingTop: "clamp(3rem, 5vw, 4rem)",
            paddingBottom: "clamp(2.5rem, 4vw, 3.5rem)",
            borderTop: "1px solid var(--color-hairline-dark)",
          }}
        >
          <div
            className="container"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2rem",
              maxWidth: 1100,
              margin: "0 auto",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(1.55rem, 3vw, 2.2rem)",
                letterSpacing: "-0.022em",
                lineHeight: 1.12,
                color: "var(--color-ink)",
                margin: 0,
                maxWidth: "20ch",
              }}
            >
              <em
                style={{
                  fontStyle: "italic",
                  fontVariationSettings: '"SOFT" 70',
                  fontWeight: 400,
                  color: accentDeep,
                }}
              >
                En détail.
              </em>
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.1rem",
              }}
            >
              {detail.intro.map((p, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1.02rem",
                    color: "var(--color-ink-2)",
                    lineHeight: 1.68,
                    margin: 0,
                    maxWidth: "64ch",
                  }}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>

          <style>{`
            @media (min-width: 880px) {
              .container > h2 + div { grid-column: 2 / -1; }
            }
          `}</style>
        </section>

        {/* SITUATIONS */}
        <section
          style={{
            background: "var(--color-paper-2)",
            paddingTop: "clamp(3.5rem, 6vw, 5rem)",
            paddingBottom: "clamp(3.5rem, 6vw, 5rem)",
            borderTop: "1px solid var(--color-hairline-dark)",
          }}
        >
          <div className="container">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "0.9rem",
                marginBottom: "clamp(2rem, 3.5vw, 2.8rem)",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.9rem",
                  color: "var(--color-steel)",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                <span aria-hidden="true" style={{ width: 28, height: 1, background: accent, opacity: 0.75 }} />
                <span>Cas d'usage · {String(detail.situations.length).padStart(2, "0")} situations</span>
                <span aria-hidden="true" style={{ width: 28, height: 1, background: accent, opacity: 0.75 }} />
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: "clamp(1.7rem, 3.2vw, 2.4rem)",
                  letterSpacing: "-0.022em",
                  lineHeight: 1.1,
                  color: "var(--color-ink)",
                  margin: 0,
                  maxWidth: "24ch",
                }}
              >
                Dans quel cas{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    fontVariationSettings: '"SOFT" 70',
                    fontWeight: 400,
                    color: accentDeep,
                  }}
                >
                  nous appeler.
                </em>
              </h2>
            </div>

            <ul
              className="svc-situations"
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "1rem",
              }}
            >
              {detail.situations.map((s, i) => (
                <li
                  key={s.k}
                  style={{
                    background: "var(--color-paper)",
                    border: "1px solid var(--color-hairline-dark)",
                    borderRadius: 12,
                    padding: "1.3rem 1.5rem 1.4rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.4rem",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      top: 12,
                      right: 14,
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.66rem",
                      letterSpacing: "0.12em",
                      color: accent,
                      fontWeight: 600,
                      opacity: 0.85,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.18rem",
                      fontWeight: 600,
                      letterSpacing: "-0.012em",
                      color: "var(--color-ink)",
                      margin: 0,
                      paddingRight: "2.5rem",
                    }}
                  >
                    {s.k}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.92rem",
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

        {/* WHAT'S INCLUDED */}
        <section
          style={{
            background: "var(--color-paper)",
            paddingTop: "clamp(3.5rem, 6vw, 5rem)",
            paddingBottom: "clamp(3.5rem, 6vw, 5rem)",
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
                gap: "1.5rem",
                marginBottom: "clamp(2rem, 3.5vw, 2.8rem)",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: "clamp(1.7rem, 3.2vw, 2.4rem)",
                  letterSpacing: "-0.022em",
                  lineHeight: 1.1,
                  color: "var(--color-ink)",
                  margin: 0,
                  maxWidth: "24ch",
                }}
              >
                Ce qui est{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    fontVariationSettings: '"SOFT" 70',
                    fontWeight: 400,
                    color: accentDeep,
                  }}
                >
                  inclus.
                </em>
              </h2>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--color-steel)",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                — {String(detail.includes.length).padStart(2, "0")} points
              </span>
            </div>

            <ul
              className="svc-includes"
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "1.2rem 2rem",
                maxWidth: 1100,
              }}
            >
              {detail.includes.map((it) => (
                <li
                  key={it.k}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    gap: "1rem",
                    paddingBottom: "1.1rem",
                    borderBottom: "1px solid var(--color-hairline-dark)",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      background: "rgba(201, 162, 74, 0.14)",
                      border: "1px solid rgba(201, 162, 74, 0.4)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: accentDeep,
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.08rem",
                        fontWeight: 600,
                        letterSpacing: "-0.01em",
                        color: "var(--color-ink)",
                        margin: 0,
                      }}
                    >
                      {it.k}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.92rem",
                        color: "var(--color-ink-2)",
                        lineHeight: 1.55,
                        margin: 0,
                      }}
                    >
                      {it.v}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CTABanner
          variant="navy"
          eyebrow={`${service.shortTitle} ${service.shortSub} · 24h/24`}
          title={detail.ctaTitle}
          titleAccent={detail.ctaAccent}
          subtitle="Vous parlez directement à l'artisan. Devis annoncé avant tout déplacement, dans tout le canton de Genève."
          secondary={{ label: "Formulaire de contact", href: "/#contact" }}
        />

        {/* FAQ */}
        <section
          style={{
            background: "var(--color-paper)",
            paddingTop: "clamp(3.5rem, 6vw, 5rem)",
            paddingBottom: "clamp(3.5rem, 6vw, 5rem)",
            borderTop: "1px solid var(--color-hairline-dark)",
          }}
        >
          <div className="container" style={{ maxWidth: 900, marginInline: "auto" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "0.9rem",
                marginBottom: "clamp(2rem, 3.5vw, 2.5rem)",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.9rem",
                  color: "var(--color-steel)",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                <span aria-hidden="true" style={{ width: 28, height: 1, background: accent, opacity: 0.75 }} />
                <span>FAQ · {String(detail.faqs.length).padStart(2, "0")} questions</span>
                <span aria-hidden="true" style={{ width: 28, height: 1, background: accent, opacity: 0.75 }} />
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: "clamp(1.7rem, 3.2vw, 2.4rem)",
                  letterSpacing: "-0.022em",
                  lineHeight: 1.1,
                  color: "var(--color-ink)",
                  margin: 0,
                  maxWidth: "24ch",
                }}
              >
                Ce qu'on nous demande{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    fontVariationSettings: '"SOFT" 70',
                    fontWeight: 400,
                    color: accentDeep,
                  }}
                >
                  le plus.
                </em>
              </h2>
            </div>

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
                      transition: "padding-left 0.2s ease",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        color: accentDeep,
                        letterSpacing: "0.06em",
                        fontWeight: 600,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.1rem",
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
                    style={{
                      paddingBottom: "1.4rem",
                      paddingLeft: "calc(1.2rem + 1.5rem)",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.96rem",
                      lineHeight: 1.65,
                      color: "var(--color-ink-2)",
                      maxWidth: "64ch",
                    }}
                    className="faq-answer"
                  >
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* OTHER SERVICES */}
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
                gap: "1.5rem",
                flexWrap: "wrap",
                marginBottom: "1.5rem",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: "clamp(1.35rem, 2.4vw, 1.7rem)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  color: "var(--color-ink)",
                  margin: 0,
                }}
              >
                Les autres prestations
              </h2>
              <Link
                href="/services"
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
                Voir toutes les prestations →
              </Link>
            </div>

            <ul
              className="svc-other"
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "0.6rem",
              }}
            >
              {SERVICES.filter((s) => s.slug !== service.slug).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="svc-other-link"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "1rem",
                      padding: "0.95rem 1.1rem",
                      background: "var(--color-paper)",
                      border: "1px solid var(--color-hairline-dark)",
                      borderRadius: 10,
                      transition: "border-color 0.2s ease, transform 0.2s ease",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1rem",
                        fontWeight: 600,
                        letterSpacing: "-0.01em",
                        color: "var(--color-ink)",
                      }}
                    >
                      {s.title}
                    </span>
                    <span
                      aria-hidden="true"
                      className="svc-other-arrow"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.9rem",
                        color: "var(--color-brass-deep)",
                        transition: "transform 0.2s ease",
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
        @media (min-width: 980px) {
          .svc-hero-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
            gap: 3rem !important;
            align-items: stretch !important;
          }
        }
        @media (min-width: 720px) {
          .svc-situations { grid-template-columns: repeat(2, 1fr) !important; gap: 1.1rem !important; }
          .svc-includes { grid-template-columns: repeat(2, 1fr) !important; }
          .svc-other { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 1080px) {
          .svc-situations { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .faq-item .faq-answer { padding-left: 0 !important; }
        }
        @media (max-width: 540px) {
          .svc-meta { grid-template-columns: repeat(2, 1fr) !important; }
          .svc-meta > div:nth-child(3) {
            grid-column: 1 / -1;
            border-right: none !important;
            padding-left: 0 !important;
            border-top: 1px solid rgba(212, 216, 226, 0.12);
          }
        }
        @media (max-width: 380px) {
          .svc-meta { grid-template-columns: 1fr !important; }
          .svc-meta > div {
            border-right: none !important;
            padding-left: 0 !important;
            border-top: 1px solid rgba(212, 216, 226, 0.12);
          }
          .svc-meta > div:first-child { border-top: none; }
        }
        .svc-hero-cta-primary:hover {
          background: var(--color-vermillion-2) !important;
          transform: translateY(-1px);
        }
        .svc-hero-cta-secondary:hover {
          border-color: var(--color-brass) !important;
          color: var(--color-brass) !important;
        }
        .svc-hero-arrow {
          display: inline-block;
          transition: transform 0.2s ease;
        }
        .svc-hero-cta-secondary:hover .svc-hero-arrow { transform: translateX(3px); }
        .svc-other-link:hover {
          border-color: var(--color-brass) !important;
          transform: translateY(-1px);
        }
        .svc-other-link:hover .svc-other-arrow { transform: translateX(4px); }
        .faq-item summary::-webkit-details-marker { display: none; }
        .faq-item summary:hover { padding-left: 0.5rem !important; }
        .faq-item[open] .faq-plus {
          transform: rotate(45deg);
          color: var(--color-vermillion) !important;
        }
      `}</style>
    </>
  )
}
