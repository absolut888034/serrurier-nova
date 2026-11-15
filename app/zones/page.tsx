import type { Metadata } from "next"
import Link from "next/link"

import { StatusBar } from "@/components/layout/StatusBar"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Breadcrumb } from "@/components/ui/Breadcrumb"
import { LiveDot } from "@/components/ui/LiveDot"
import { CTABanner } from "@/components/sections/CTABanner"
import { FinalCTA } from "@/components/sections/FinalCTA"

import { ZONES } from "@/content/zones"
import { breadcrumbSchema, CONTACT } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Toutes les communes desservies — Serrurier Nova Genève",
  description:
    "Notre serrurier intervient 24h/24 et 7j/7 dans tout le canton de Genève. Toutes les communes desservies : Vernier, Carouge, Meyrin, Genève, Lancy, Bernex et plus. Délai annoncé au téléphone.",
  alternates: { canonical: "/zones" },
  openGraph: {
    title: "Toutes les communes desservies à Genève",
    description: "Délai d'intervention par commune, 24h/24 dans tout le canton.",
    type: "website",
    locale: "fr_CH",
  },
}

export default function ZonesHubPage() {
  // Sort by geographic proximity to base (Vernier). Used internally only —
  // we never display per-commune minutes publicly.
  const sorted = [...ZONES].sort((a, b) => a.order - b.order)
  const closest = sorted.slice(0, 5)
  const rest = sorted.slice(5)

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
                { name: "Zones desservies", url: "/zones" },
              ]),
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
                "radial-gradient(ellipse 55% 60% at 85% 15%, rgba(201, 162, 74, 0.12), transparent 65%)",
              pointerEvents: "none",
            }}
          />

          <div className="container" style={{ position: "relative" }}>
            <Breadcrumb tone="dark" items={[{ name: "Accueil", href: "/" }, { name: "Zones desservies" }]} />

            <div style={{ marginTop: "clamp(1.8rem, 3vw, 2.4rem)", maxWidth: "70ch" }}>
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
                  style={{ width: 28, height: 1, background: "var(--color-brass)", opacity: 0.85 }}
                />
                <span>Zones · {ZONES.length} communes · Canton de Genève</span>
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
                Là où{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    fontVariationSettings: '"SOFT" 70',
                    fontWeight: 400,
                    color: "var(--color-brass)",
                  }}
                >
                  nous intervenons.
                </em>
              </h1>

              <p
                style={{
                  marginTop: "1.3rem",
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(1rem, 1.4vw, 1.1rem)",
                  color: "var(--color-silver)",
                  lineHeight: 1.6,
                  maxWidth: "62ch",
                }}
              >
                Notre base est à Vernier (Châtelaine). De là, nous couvrons l'ensemble du canton de
                Genève, 24h/24 et 7j/7. Voici la carte des communes desservies — le délai exact
                vous est annoncé au téléphone, avant tout déplacement.
              </p>
            </div>
          </div>
        </section>

        {/* FASTEST FIVE */}
        <section
          style={{
            background: "var(--color-paper)",
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
                  fontSize: "clamp(1.55rem, 2.8vw, 2.1rem)",
                  letterSpacing: "-0.022em",
                  lineHeight: 1.1,
                  color: "var(--color-ink)",
                  margin: 0,
                  maxWidth: "26ch",
                }}
              >
                Les cinq communes{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    fontVariationSettings: '"SOFT" 70',
                    fontWeight: 400,
                    color: "var(--color-green)",
                  }}
                >
                  les plus proches de Vernier.
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
                — Distance depuis Châtelaine
              </span>
            </div>

            <ul
              className="zhub-fast"
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "1rem",
              }}
            >
              {closest.map((z, i) => (
                <li key={z.slug}>
                  <Link
                    href={`/zones/${z.slug}`}
                    className="zhub-card"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.7rem",
                      padding: "1.4rem 1.5rem 1.5rem",
                      background: "var(--color-paper-2)",
                      border: "1px solid var(--color-hairline-dark)",
                      borderTop: "3px solid var(--color-green)",
                      borderRadius: 12,
                      transition: "transform 0.2s ease, border-color 0.2s ease",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.66rem",
                          letterSpacing: "0.16em",
                          textTransform: "uppercase",
                          color: "var(--color-green)",
                          fontWeight: 600,
                        }}
                      >
                        — {String(i + 1).padStart(2, "0")} {z.isBase && "· Base"}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.68rem",
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "var(--color-green)",
                          fontWeight: 600,
                        }}
                      >
                        {z.isBase ? "Base" : "Voisinage"}
                      </span>
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.35rem",
                        fontWeight: 600,
                        letterSpacing: "-0.012em",
                        color: "var(--color-ink)",
                        margin: 0,
                      }}
                    >
                      {z.name}
                    </h3>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.78rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--color-navy)",
                        fontWeight: 600,
                      }}
                      className="zhub-cta"
                    >
                      Voir la commune →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* OTHER COMMUNES */}
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
                fontSize: "clamp(1.55rem, 2.8vw, 2.1rem)",
                letterSpacing: "-0.022em",
                lineHeight: 1.1,
                color: "var(--color-ink)",
                margin: "0 0 1.8rem",
                maxWidth: "30ch",
              }}
            >
              Les autres communes{" "}
              <em
                style={{
                  fontStyle: "italic",
                  fontVariationSettings: '"SOFT" 70',
                  fontWeight: 400,
                  color: "var(--color-brass-deep)",
                }}
              >
                du canton.
              </em>
            </h2>

            <ul
              className="zhub-rest"
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "0.6rem",
              }}
            >
              {rest.map((z) => (
                <li key={z.slug}>
                  <Link
                    href={`/zones/${z.slug}`}
                    className="zhub-line"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.8rem",
                      padding: "0.9rem 1.2rem",
                      background: "var(--color-paper)",
                      border: "1px solid var(--color-hairline-dark)",
                      borderRadius: 10,
                      transition: "border-color 0.2s ease, transform 0.2s ease",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.05rem",
                        fontWeight: 600,
                        letterSpacing: "-0.01em",
                        color: "var(--color-ink)",
                      }}
                    >
                      {z.name}
                    </span>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.66rem",
                          letterSpacing: "0.13em",
                          textTransform: "uppercase",
                          color: z.proximity === "near" ? "var(--color-brass-deep)" : "var(--color-steel)",
                          fontWeight: 600,
                        }}
                      >
                        Canton GE
                      </span>
                      <span
                        aria-hidden="true"
                        className="zhub-arrow"
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.95rem",
                          color: "var(--color-brass-deep)",
                          transition: "transform 0.2s ease",
                        }}
                      >
                        →
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CTABanner
          variant="paper"
          eyebrow="Une commune absente de la liste ?"
          title="On dessert"
          titleAccent="tout le canton."
          subtitle="Si votre adresse est dans le canton de Genève, nous venons — même si votre commune ne figure pas dans la liste ci-dessus. Délai confirmé au téléphone."
          secondary={{ label: "Demander un devis pour mon adresse", href: "/#contact" }}
        />

        <FinalCTA />
      </main>

      <Footer />

      <style>{`
        @media (min-width: 720px) {
          .zhub-fast { grid-template-columns: repeat(2, 1fr) !important; gap: 1.2rem !important; }
          .zhub-rest { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 1080px) {
          .zhub-fast { grid-template-columns: repeat(5, 1fr) !important; }
          .zhub-rest { grid-template-columns: repeat(3, 1fr) !important; }
        }
        .zhub-card:hover {
          transform: translateY(-3px);
          border-color: var(--color-green) !important;
        }
        .zhub-card:hover .zhub-cta { color: var(--color-green) !important; }
        .zhub-line:hover {
          border-color: var(--color-brass) !important;
          transform: translateX(3px);
        }
        .zhub-line:hover .zhub-arrow { transform: translateX(4px); }
      `}</style>
    </>
  )
}
