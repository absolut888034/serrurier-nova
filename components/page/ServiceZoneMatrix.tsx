import Link from "next/link"

import { Breadcrumb } from "@/components/ui/Breadcrumb"
import { LiveDot } from "@/components/ui/LiveDot"
import { CTABanner } from "@/components/sections/CTABanner"
import { ContactForm } from "@/components/sections/ContactForm"
import { FinalCTA } from "@/components/sections/FinalCTA"

import type { Service } from "@/content/services"
import type { Zone } from "@/content/zones"
import type { ServiceDetail } from "@/content/services-detail"
import type { ZoneDetail } from "@/content/zones-detail"
import { ZONES, proximityLabel } from "@/content/zones"
import { CONTACT } from "@/lib/schema"

interface MatrixProps {
  service: Service
  zone: Zone
  serviceDetail: ServiceDetail
  zoneDetail: ZoneDetail
}

export function ServiceZoneMatrix({
  service,
  zone,
  serviceDetail,
  zoneDetail,
}: MatrixProps) {
  const isUrgence = service.tag === "Urgence"
  const accent = isUrgence ? "var(--color-vermillion)" : "var(--color-brass)"
  const accentDeep = isUrgence ? "var(--color-vermillion-2)" : "var(--color-brass-deep)"
  const proximityAccent =
    zone.proximity === "immediate"
      ? "var(--color-green)"
      : zone.proximity === "near"
        ? accentDeep
        : "var(--color-steel)"

  const otherZones = ZONES.filter((z) => z.slug !== zone.slug).slice(0, 6)

  return (
    <main>
      {/* HERO */}
      <section
        style={{
          background: "var(--color-navy-3)",
          color: "var(--color-silver)",
          position: "relative",
          overflow: "hidden",
          paddingTop: "clamp(2.5rem, 4.5vw, 4rem)",
          paddingBottom: "clamp(3rem, 5vw, 4rem)",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: isUrgence
              ? "radial-gradient(ellipse 55% 60% at 85% 15%, rgba(210, 58, 28, 0.14), transparent 65%)"
              : "radial-gradient(ellipse 55% 60% at 85% 15%, rgba(201, 162, 74, 0.12), transparent 65%)",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ position: "relative" }}>
          <Breadcrumb
            tone="dark"
            items={[
              { name: "Accueil", href: "/" },
              { name: "Services", href: "/services" },
              { name: service.title, href: `/services/${service.slug}` },
              { name: zone.name },
            ]}
          />

          <div
            className="mtx-hero-grid"
            style={{
              marginTop: "clamp(1.6rem, 3vw, 2.4rem)",
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
                  fontSize: "0.64rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: accent,
                  background: isUrgence
                    ? "rgba(210, 58, 28, 0.14)"
                    : "rgba(201, 162, 74, 0.16)",
                  border: `1px solid ${isUrgence ? "rgba(210, 58, 28, 0.4)" : "rgba(201, 162, 74, 0.4)"}`,
                  padding: "0.45rem 0.85rem",
                  borderRadius: 999,
                  fontWeight: 700,
                }}
              >
                <LiveDot variant="red" size={7} />
                {service.tag} · {zone.name} · 24h/24 · 7j/7
              </span>

              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: "clamp(2rem, 4.6vw, 3.4rem)",
                  lineHeight: 1.06,
                  letterSpacing: "-0.025em",
                  color: "var(--color-paper)",
                  margin: 0,
                  maxWidth: "22ch",
                }}
              >
                {service.title} à{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    fontVariationSettings: '"SOFT" 70',
                    fontWeight: 400,
                    color: accent,
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
                {serviceDetail.lead} {zone.name} est desservi depuis notre base de Châtelaine —
                jour, nuit, week-ends et jours fériés sans majoration. Le délai exact vous est
                annoncé au téléphone, avant tout déplacement.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", marginTop: "0.4rem" }}>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="mtx-cta-primary"
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
                  className="mtx-cta-secondary"
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
                  fontSize: "0.74rem",
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

            {/* Delay block */}
            <div
              style={{
                background: "rgba(28, 37, 72, 0.55)",
                border: "1px solid rgba(212, 216, 226, 0.16)",
                borderRadius: 14,
                padding: "1.8rem 1.6rem",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.64rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--color-silver-2)",
                  fontWeight: 600,
                }}
              >
                — Couverture · {zone.name}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 500,
                  letterSpacing: "-0.025em",
                  color: proximityAccent,
                  lineHeight: 1.05,
                }}
              >
                {proximityLabel(zone.proximity)}
              </span>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.86rem",
                  color: "var(--color-silver)",
                  lineHeight: 1.55,
                  margin: 0,
                  maxWidth: "30ch",
                }}
              >
                {zoneDetail.pitch}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.76rem",
                  color: "var(--color-silver-2)",
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                Délai exact confirmé au téléphone, avant tout déplacement.
              </p>
              <dl
                style={{
                  margin: 0,
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "0.55rem",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.74rem",
                  borderTop: "1px solid rgba(212, 216, 226, 0.18)",
                  paddingTop: "0.85rem",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <dt style={{ color: "var(--color-silver-2)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    Garantie
                  </dt>
                  <dd style={{ color: "var(--color-paper)", margin: 0 }}>{serviceDetail.meta.guarantee}</dd>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <dt style={{ color: "var(--color-silver-2)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    Paiement
                  </dt>
                  <dd style={{ color: "var(--color-paper)", margin: 0 }}>{serviceDetail.meta.payment}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO + ZONE CONTEXT */}
      <section
        style={{
          background: "var(--color-paper)",
          paddingTop: "clamp(3rem, 5vw, 4rem)",
          paddingBottom: "clamp(3rem, 5vw, 4rem)",
          borderTop: "1px solid var(--color-hairline-dark)",
        }}
      >
        <div
          className="container mtx-intro-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            maxWidth: 1100,
            marginInline: "auto",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(1.5rem, 2.8vw, 2rem)",
                letterSpacing: "-0.022em",
                lineHeight: 1.1,
                color: "var(--color-ink)",
                margin: 0,
                maxWidth: "22ch",
              }}
            >
              Notre {service.shortTitle.toLowerCase()}{" "}
              {service.shortSub.toLowerCase()}{" "}
              <em
                style={{
                  fontStyle: "italic",
                  fontVariationSettings: '"SOFT" 70',
                  fontWeight: 400,
                  color: accentDeep,
                }}
              >
                à {zone.name}.
              </em>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
            {serviceDetail.intro.slice(0, 1).map((p, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  color: "var(--color-ink-2)",
                  lineHeight: 1.68,
                  margin: 0,
                  maxWidth: "64ch",
                }}
              >
                {p}
              </p>
            ))}
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                color: "var(--color-ink-2)",
                lineHeight: 1.68,
                margin: 0,
                maxWidth: "64ch",
              }}
            >
              {zoneDetail.intro[0]}
            </p>
          </div>
        </div>
      </section>

      {/* SITUATIONS — top 4 */}
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
              margin: "0 0 1.8rem",
              maxWidth: "30ch",
            }}
          >
            Les cas pour lesquels{" "}
            <em
              style={{
                fontStyle: "italic",
                fontVariationSettings: '"SOFT" 70',
                fontWeight: 400,
                color: accentDeep,
              }}
            >
              on nous appelle à {zone.name}.
            </em>
          </h2>

          <ul
            className="mtx-situations"
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "1rem",
            }}
          >
            {serviceDetail.situations.slice(0, 4).map((s, i) => (
              <li
                key={s.k}
                style={{
                  background: "var(--color-paper)",
                  border: "1px solid var(--color-hairline-dark)",
                  borderLeft: `3px solid ${accent}`,
                  borderRadius: 10,
                  padding: "1.2rem 1.4rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.64rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: accent,
                    fontWeight: 600,
                  }}
                >
                  — Cas {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    letterSpacing: "-0.012em",
                    color: "var(--color-ink)",
                    margin: 0,
                  }}
                >
                  {s.k}
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
                  {s.v}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABanner
        variant={isUrgence ? "vermillion" : "navy"}
        eyebrow={`${zone.name} · 24h/24 · 7j/7`}
        title={serviceDetail.ctaTitle}
        titleAccent={serviceDetail.ctaAccent}
        subtitle={`Disponible maintenant pour ${zone.name} et tout le canton de Genève. Devis annoncé avant tout déplacement.`}
        secondary={{ label: "Formulaire de contact", href: "/#contact" }}
      />

      {/* SAME SERVICE OTHER ZONES + OTHER SERVICES THIS ZONE */}
      <section
        style={{
          background: "var(--color-paper)",
          paddingTop: "clamp(3rem, 5vw, 4rem)",
          paddingBottom: "clamp(3rem, 5vw, 4rem)",
          borderTop: "1px solid var(--color-hairline-dark)",
        }}
      >
        <div
          className="container mtx-cross"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(1.35rem, 2.4vw, 1.7rem)",
                letterSpacing: "-0.02em",
                color: "var(--color-ink)",
                margin: "0 0 1.2rem",
              }}
            >
              {service.title} dans d'autres communes
            </h2>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {otherZones.map((z) => (
                <li key={z.slug}>
                  <Link
                    href={`/services/${service.slug}-a-${z.slug}`}
                    className="mtx-cross-link"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0.8rem 1rem",
                      background: "var(--color-paper-2)",
                      border: "1px solid var(--color-hairline-dark)",
                      borderRadius: 8,
                      transition: "border-color 0.2s ease",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.92rem",
                        fontWeight: 500,
                        color: "var(--color-ink)",
                      }}
                    >
                      {service.shortTitle} {service.shortSub} à {z.name}
                    </span>
                    <span
                      aria-hidden="true"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.95rem",
                        color: accentDeep,
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

          <div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(1.35rem, 2.4vw, 1.7rem)",
                letterSpacing: "-0.02em",
                color: "var(--color-ink)",
                margin: "0 0 1.2rem",
              }}
            >
              Autres prestations à {zone.name}
            </h2>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li>
                <Link
                  href={`/zones/${zone.slug}`}
                  className="mtx-cross-link"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.8rem 1rem",
                    background: "var(--color-paper-2)",
                    border: "1px solid var(--color-hairline-dark)",
                    borderRadius: 8,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.92rem",
                      fontWeight: 500,
                      color: "var(--color-ink)",
                    }}
                  >
                    Page complète de {zone.name}
                  </span>
                  <span style={{ color: accentDeep, fontFamily: "var(--font-mono)" }}>→</span>
                </Link>
              </li>
              <li>
                <Link
                  href={`/services/${service.slug}`}
                  className="mtx-cross-link"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.8rem 1rem",
                    background: "var(--color-paper-2)",
                    border: "1px solid var(--color-hairline-dark)",
                    borderRadius: 8,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.92rem",
                      fontWeight: 500,
                      color: "var(--color-ink)",
                    }}
                  >
                    Tout savoir sur {service.title.toLowerCase()}
                  </span>
                  <span style={{ color: accentDeep, fontFamily: "var(--font-mono)" }}>→</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <ContactForm />
      <FinalCTA />

      <style>{`
        @media (min-width: 880px) {
          .mtx-hero-grid {
            grid-template-columns: 1.25fr 0.75fr !important;
            gap: 2.5rem !important;
          }
          .mtx-intro-grid {
            grid-template-columns: 0.85fr 1.15fr !important;
            gap: 3rem !important;
          }
          .mtx-cross {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
        }
        @media (min-width: 720px) {
          .mtx-situations { grid-template-columns: repeat(2, 1fr) !important; gap: 1.1rem !important; }
        }
        .mtx-cta-primary:hover {
          background: var(--color-vermillion-2) !important;
          transform: translateY(-1px);
        }
        .mtx-cta-secondary:hover {
          border-color: var(--color-brass) !important;
          color: var(--color-brass) !important;
        }
        .mtx-cross-link:hover {
          border-color: var(--color-brass) !important;
        }
      `}</style>
    </main>
  )
}
