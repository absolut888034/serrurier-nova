import type { Metadata } from "next"
import Link from "next/link"
import { StatusBar } from "@/components/layout/StatusBar"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ServiceCard } from "@/components/ui/ServiceCard"
import { Breadcrumb } from "@/components/ui/Breadcrumb"
import { CTABanner } from "@/components/sections/CTABanner"
import { FinalCTA } from "@/components/sections/FinalCTA"
import { LiveDot } from "@/components/ui/LiveDot"
import { SERVICES } from "@/content/services"
import { breadcrumbSchema, serviceListSchema, CONTACT } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Tous nos services de serrurerie à Genève",
  description:
    "Ouverture de porte, changement de serrure, dépannage après effraction. Un artisan certifié, disponible 24h/24 dans tout le canton de Genève.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Tous nos services de serrurerie à Genève",
    description:
      "Trois prestations menées par un seul artisan certifié, joignable directement 24h/24 et 7j/7 dans tout le canton.",
    type: "website",
    locale: "fr_CH",
  },
}

const PROCESS = [
  {
    k: "Appel",
    v: "Vous décrivez le problème. Réponse directe par l'artisan.",
  },
  {
    k: "Devis annoncé",
    v: "Engagement clair avant tout déplacement, jour comme nuit.",
  },
  {
    k: "Intervention",
    v: "Outils non destructifs en priorité. Pièces de qualité reconnue.",
  },
  {
    k: "Facture détaillée",
    v: "Reçu utilisable assurance et régie, remis sur place.",
  },
] as const

export default function ServicesPage() {
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
              ]),
            ),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              serviceListSchema(
                SERVICES.map((s) => ({
                  name: s.title,
                  slug: s.slug,
                  description: s.description,
                })),
              ),
            ),
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
                "radial-gradient(ellipse 55% 60% at 85% 15%, rgba(201, 162, 74, 0.12), transparent 65%), radial-gradient(ellipse 50% 50% at 10% 90%, rgba(210, 58, 28, 0.06), transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div className="container" style={{ position: "relative" }}>
            <Breadcrumb
              items={[{ name: "Accueil", href: "/" }, { name: "Services" }]}
              tone="dark"
            />

            <div
              className="svc-hero-grid"
              style={{
                marginTop: "clamp(1.6rem, 3vw, 2.4rem)",
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "1.5rem 2.5rem",
                alignItems: "end",
              }}
            >
              <div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.9rem",
                    color: "var(--color-silver-2)",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                    marginBottom: "1.1rem",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      width: 28,
                      height: 1,
                      background: "var(--color-brass)",
                      opacity: 0.85,
                    }}
                  />
                  <span>Services · 03 prestations · 24h/24</span>
                </div>

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
                  Tout ce qu'un{" "}
                  <em
                    style={{
                      fontStyle: "italic",
                      fontVariationSettings: '"SOFT" 70',
                      fontWeight: 400,
                      color: "var(--color-brass)",
                    }}
                  >
                    serrurier de confiance
                  </em>{" "}
                  doit savoir faire.
                </h1>

                <p
                  style={{
                    marginTop: "1.3rem",
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(0.98rem, 1.4vw, 1.08rem)",
                    color: "var(--color-silver)",
                    lineHeight: 1.6,
                    maxWidth: "58ch",
                  }}
                >
                  Trois prestations, un seul artisan. De l'urgence nocturne au dépannage après
                  effraction, chaque intervention est menée du début à la fin par la même
                  personne — celle qui décroche le téléphone.
                </p>
              </div>

              {/* Side phone card */}
              <a
                href={`tel:${CONTACT.phone}`}
                className="svc-hero-phone"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                  padding: "1.4rem 1.6rem",
                  background: "rgba(28, 37, 72, 0.55)",
                  border: "1px solid rgba(212, 216, 226, 0.16)",
                  borderRadius: 14,
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  transition: "border-color 0.2s ease, transform 0.2s ease",
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.66rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--color-brass)",
                    fontWeight: 600,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <LiveDot variant="red" size={7} />
                  Urgence · 24h/24
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontVariantNumeric: "tabular-nums",
                    fontSize: "clamp(1.5rem, 2.6vw, 1.9rem)",
                    color: "var(--color-paper)",
                    fontWeight: 600,
                    letterSpacing: "0.005em",
                  }}
                >
                  022 557 65 59
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.82rem",
                    color: "var(--color-silver-2)",
                    lineHeight: 1.5,
                  }}
                >
                  Répondu directement par l'artisan. Devis annoncé avant déplacement.
                </span>
              </a>

              <a
                href={`tel:${CONTACT.mobile}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  marginTop: "0.75rem",
                  padding: "0.75rem 1.1rem",
                  background: "rgba(28, 37, 72, 0.32)",
                  border: "1px solid rgba(212, 216, 226, 0.12)",
                  borderRadius: 10,
                  fontFamily: "var(--font-body)",
                  fontSize: "0.72rem",
                  color: "var(--color-silver-2)",
                  transition: "border-color 0.2s ease",
                }}
              >
                <span style={{ textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 500 }}>
                  Ligne directe · WhatsApp
                </span>
                <span aria-hidden="true" style={{ opacity: 0.4 }}>—</span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontVariantNumeric: "tabular-nums",
                    color: "var(--color-silver)",
                    fontWeight: 600,
                  }}
                >
                  076 475 08 81
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section
          style={{
            background: "var(--color-paper)",
            paddingTop: "clamp(3.5rem, 6vw, 5rem)",
            paddingBottom: "clamp(3rem, 5vw, 4.5rem)",
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
                marginBottom: "clamp(1.8rem, 3vw, 2.5rem)",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: "clamp(1.55rem, 3vw, 2.3rem)",
                  letterSpacing: "-0.022em",
                  lineHeight: 1.1,
                  color: "var(--color-ink)",
                  margin: 0,
                  maxWidth: "30ch",
                }}
              >
                Choisissez votre{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    fontVariationSettings: '"SOFT" 70',
                    fontWeight: 400,
                    color: "var(--color-brass-deep)",
                  }}
                >
                  prestation.
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
                — 03 prestations
              </span>
            </div>

            <ul
              className="svc-grid"
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "1.4rem",
              }}
            >
              {SERVICES.map((service, i) => (
                <li key={service.slug} style={{ display: "flex" }}>
                  <ServiceCard service={service} index={i} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CTABanner
          variant="paper"
          eyebrow="Pas sûr de la bonne prestation ?"
          title="Décrivez votre porte."
          titleAccent="On vous dit quoi faire."
          subtitle="Au téléphone pour une urgence, par formulaire pour un conseil ou un devis détaillé. Vous parlez directement à l'artisan, pas à un standard."
          secondary={{ label: "Demander un devis écrit", href: "/#contact" }}
        />

        {/* PROCESS RECAP */}
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
                <span
                  aria-hidden="true"
                  style={{
                    width: 28,
                    height: 1,
                    background: "var(--color-brass)",
                    opacity: 0.7,
                  }}
                />
                <span>Méthode · Toutes prestations</span>
                <span
                  aria-hidden="true"
                  style={{
                    width: 28,
                    height: 1,
                    background: "var(--color-brass)",
                    opacity: 0.7,
                  }}
                />
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
                Quatre étapes,{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    fontVariationSettings: '"SOFT" 70',
                    fontWeight: 400,
                    color: "var(--color-brass-deep)",
                  }}
                >
                  pour chaque intervention.
                </em>
              </h2>
            </div>

            <ol
              className="svc-process"
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "1rem",
                counterReset: "step",
              }}
            >
              {PROCESS.map((p, i) => (
                <li
                  key={p.k}
                  style={{
                    background: "var(--color-paper)",
                    border: "1px solid var(--color-hairline-dark)",
                    borderRadius: 12,
                    padding: "1.2rem 1.4rem 1.3rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.4rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.66rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--color-brass-deep)",
                      fontWeight: 600,
                    }}
                  >
                    — Étape {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.18rem",
                      fontWeight: 600,
                      letterSpacing: "-0.012em",
                      color: "var(--color-ink)",
                      margin: 0,
                    }}
                  >
                    {p.k}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.9rem",
                      color: "var(--color-ink-2)",
                      lineHeight: 1.55,
                      margin: 0,
                    }}
                  >
                    {p.v}
                  </p>
                </li>
              ))}
            </ol>

            <div style={{ marginTop: "clamp(2rem, 3.5vw, 2.8rem)", textAlign: "center" }}>
              <Link
                href="/#methode"
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
                Voir la méthode en détail →
              </Link>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>

      <Footer />

      <style>{`
        @media (min-width: 720px) {
          .svc-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 1.5rem !important; }
        }
        @media (min-width: 1080px) {
          .svc-grid { grid-template-columns: repeat(3, 1fr) !important; gap: 1.6rem !important; }
        }
        @media (min-width: 720px) {
          .svc-process { grid-template-columns: repeat(2, 1fr) !important; gap: 1.1rem !important; }
        }
        @media (min-width: 1080px) {
          .svc-process { grid-template-columns: repeat(4, 1fr) !important; gap: 1.1rem !important; }
        }
        @media (min-width: 880px) {
          .svc-hero-grid { grid-template-columns: 1.5fr 0.85fr !important; gap: 3rem !important; }
        }
        .svc-hero-phone:hover {
          border-color: var(--color-brass) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </>
  )
}
