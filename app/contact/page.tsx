import type { Metadata } from "next"
import Link from "next/link"

import { StatusBar } from "@/components/layout/StatusBar"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Breadcrumb } from "@/components/ui/Breadcrumb"
import { LiveDot } from "@/components/ui/LiveDot"
import { LiveTime } from "@/components/ui/LiveTime"
import { ContactForm } from "@/components/sections/ContactForm"
import { FinalCTA } from "@/components/sections/FinalCTA"

import { breadcrumbSchema, CONTACT } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Contact · Serrurier Nova Genève · 24h/24",
  description:
    "Contactez Serrurier Nova Genève : téléphone direct 022 557 65 59, WhatsApp 076 475 08 81, email serruriernova@gmail.com. Devis gratuit, délai annoncé au téléphone avant tout déplacement.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact · Serrurier Nova Genève",
    description: "Téléphone, WhatsApp, email, formulaire. Un seul artisan, plusieurs façons de le joindre.",
    type: "website",
    locale: "fr_CH",
  },
}

const CHANNELS = [
  {
    k: "Téléphone direct",
    sub: "Urgence · 24h/24 · Réponse immédiate",
    value: "022 557 65 59",
    href: `tel:${CONTACT.phone}`,
    badge: "Le plus rapide",
    badgeColor: "var(--color-vermillion)",
    pulse: "red" as const,
    note: "Répondu par le serrurier lui-même, jamais par un standard.",
  },
  {
    k: "WhatsApp · SMS",
    sub: "Pour envoyer des photos · 24h/24",
    value: "076 475 08 81",
    href: "tel:+41764750881",
    badge: "Avec photos",
    badgeColor: "var(--color-brass-deep)",
    pulse: "green" as const,
    note: "Idéal pour décrire votre porte ou cylindre avant l'intervention.",
  },
  {
    k: "Email",
    sub: "Devis détaillé · Sous 2h en journée",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    badge: "Pour devis",
    badgeColor: "var(--color-navy)",
    pulse: "paper" as const,
    note: "Pour les demandes non urgentes : changement de serrure planifié, conseil, devis détaillé.",
  },
] as const

const HOURS = [
  { day: "Lundi", hours: "00:00 – 23:59" },
  { day: "Mardi", hours: "00:00 – 23:59" },
  { day: "Mercredi", hours: "00:00 – 23:59" },
  { day: "Jeudi", hours: "00:00 – 23:59" },
  { day: "Vendredi", hours: "00:00 – 23:59" },
  { day: "Samedi", hours: "00:00 – 23:59" },
  { day: "Dimanche", hours: "00:00 – 23:59" },
] as const

export default function ContactPage() {
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
                { name: "Contact", url: "/contact" },
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
            paddingBottom: "clamp(3rem, 5vw, 4rem)",
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
            <Breadcrumb tone="dark" items={[{ name: "Accueil", href: "/" }, { name: "Contact" }]} />

            <div style={{ marginTop: "clamp(1.6rem, 3vw, 2.4rem)", maxWidth: "75ch" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.7rem",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--color-silver-2)",
                  fontWeight: 500,
                  marginBottom: "1.1rem",
                }}
              >
                <LiveDot variant="green" size={7} />
                <span>
                  Opérationnel · <LiveTime /> CET · 24h/24
                </span>
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
                Plusieurs façons de{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    fontVariationSettings: '"SOFT" 70',
                    fontWeight: 400,
                    color: "var(--color-brass)",
                  }}
                >
                  nous joindre.
                </em>
              </h1>

              <p
                style={{
                  marginTop: "1.3rem",
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(1rem, 1.4vw, 1.12rem)",
                  color: "var(--color-silver)",
                  lineHeight: 1.6,
                  maxWidth: "60ch",
                }}
              >
                Téléphone pour les urgences, WhatsApp si vous voulez envoyer une photo, email
                pour un devis détaillé, formulaire si vous préférez écrire. Toutes les voies
                arrivent à la même personne — celle qui vient ensuite chez vous.
              </p>
            </div>
          </div>
        </section>

        {/* CHANNELS */}
        <section
          style={{
            background: "var(--color-paper)",
            paddingTop: "clamp(3rem, 5vw, 4rem)",
            paddingBottom: "clamp(3rem, 5vw, 4rem)",
            borderTop: "1px solid var(--color-hairline-dark)",
          }}
        >
          <div className="container">
            <ul
              className="contact-channels"
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "1.2rem",
              }}
            >
              {CHANNELS.map((c) => (
                <li key={c.k}>
                  <a
                    href={c.href}
                    className="contact-channel"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.85rem",
                      padding: "1.6rem 1.7rem 1.8rem",
                      background: "var(--color-paper)",
                      border: "1px solid var(--color-hairline-dark)",
                      borderTop: `3px solid ${c.badgeColor}`,
                      borderRadius: 14,
                      transition: "transform 0.3s ease, border-color 0.2s ease, box-shadow 0.3s ease",
                      height: "100%",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-flex",
                        alignSelf: "flex-start",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.6rem",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--color-paper)",
                        background: c.badgeColor,
                        padding: "0.35rem 0.65rem",
                        borderRadius: 4,
                        fontWeight: 700,
                      }}
                    >
                      <LiveDot variant={c.pulse} size={6} />
                      {c.badge}
                    </span>

                    <div>
                      <h2
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.35rem",
                          fontWeight: 600,
                          letterSpacing: "-0.015em",
                          color: "var(--color-ink)",
                          margin: 0,
                        }}
                      >
                        {c.k}
                      </h2>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.66rem",
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "var(--color-steel)",
                          fontWeight: 600,
                          marginTop: "0.35rem",
                          display: "block",
                        }}
                      >
                        {c.sub}
                      </span>
                    </div>

                    <span
                      className="contact-value"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontVariantNumeric: "tabular-nums",
                        fontSize: "clamp(1.15rem, 2vw, 1.45rem)",
                        color: "var(--color-navy)",
                        fontWeight: 600,
                        wordBreak: "break-all",
                      }}
                    >
                      {c.value}
                    </span>

                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.88rem",
                        color: "var(--color-ink-2)",
                        lineHeight: 1.55,
                        margin: 0,
                        flex: 1,
                      }}
                    >
                      {c.note}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FORM (reuse home contact form) */}
        <ContactForm />

        {/* HOURS + INFO */}
        <section
          style={{
            background: "var(--color-paper-2)",
            paddingTop: "clamp(3rem, 5vw, 4rem)",
            paddingBottom: "clamp(3rem, 5vw, 4rem)",
            borderTop: "1px solid var(--color-hairline-dark)",
          }}
        >
          <div
            className="container contact-meta"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2rem",
              maxWidth: 1100,
              marginInline: "auto",
              alignItems: "start",
            }}
          >
            {/* Hours */}
            <div
              style={{
                background: "var(--color-paper)",
                border: "1px solid var(--color-hairline-dark)",
                borderRadius: 14,
                padding: "1.8rem 1.9rem 2rem",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: "1.45rem",
                  letterSpacing: "-0.018em",
                  color: "var(--color-ink)",
                  margin: "0 0 0.4rem",
                }}
              >
                Horaires
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9rem",
                  color: "var(--color-ink-2)",
                  lineHeight: 1.55,
                  margin: "0 0 1.3rem",
                }}
              >
                Disponibilité continue, sans interruption ni majoration nocturne.
              </p>

              <dl
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "0.55rem 1.5rem",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.86rem",
                  margin: 0,
                }}
              >
                {HOURS.map((h) => (
                  <div key={h.day} style={{ display: "contents" }}>
                    <dt
                      style={{
                        color: "var(--color-steel)",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        fontSize: "0.7rem",
                        fontWeight: 600,
                      }}
                    >
                      {h.day}
                    </dt>
                    <dd
                      style={{
                        color: "var(--color-ink)",
                        margin: 0,
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {h.hours}
                    </dd>
                  </div>
                ))}
              </dl>

              <p
                style={{
                  marginTop: "1.4rem",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.85rem",
                  color: "var(--color-ink-2)",
                  lineHeight: 1.55,
                  padding: "1rem 1.1rem",
                  background: "rgba(95, 138, 61, 0.08)",
                  border: "1px solid rgba(95, 138, 61, 0.25)",
                  borderRadius: 8,
                }}
              >
                <strong style={{ color: "var(--color-green)" }}>Aucune majoration</strong> les
                nuits, dimanches ou jours fériés. Mêmes tarifs 24h/24, 365 jours par an.
              </p>
            </div>

            {/* Zone + base */}
            <div
              style={{
                background: "var(--color-paper)",
                border: "1px solid var(--color-hairline-dark)",
                borderRadius: 14,
                padding: "1.8rem 1.9rem 2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.4rem",
              }}
            >
              <div>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    fontSize: "1.45rem",
                    letterSpacing: "-0.018em",
                    color: "var(--color-ink)",
                    margin: "0 0 0.4rem",
                  }}
                >
                  Zone d'intervention
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.95rem",
                    color: "var(--color-ink-2)",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  L'intégralité du{" "}
                  <strong style={{ color: "var(--color-navy)" }}>canton de Genève</strong> : les
                  45 communes, jour et nuit. Délai exact annoncé au téléphone, avant tout déplacement.
                </p>
              </div>

              <div style={{ height: 1, background: "var(--color-hairline-dark)" }} />

              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--color-steel)",
                    fontWeight: 600,
                    margin: "0 0 0.6rem",
                  }}
                >
                  — Voisinage immédiat
                </h3>
                <ul
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.4rem",
                  }}
                >
                  {["Vernier", "Le Grand-Saconnex", "Meyrin", "Lancy", "Genève"].map((name) => (
                    <li
                      key={name}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        padding: "0.5rem 0.85rem",
                        background: "rgba(70, 105, 42, 0.14)",
                        color: "#3f6125",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.78rem",
                        borderRadius: 999,
                        fontWeight: 600,
                        border: "1px solid rgba(70, 105, 42, 0.35)",
                      }}
                    >
                      {name}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/zones"
                  style={{
                    marginTop: "0.9rem",
                    display: "inline-block",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.78rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--color-navy)",
                    fontWeight: 600,
                    borderBottom: "1.5px solid var(--color-brass)",
                    paddingBottom: 2,
                  }}
                >
                  Voir les 13 communes →
                </Link>
              </div>

              <div style={{ height: 1, background: "var(--color-hairline-dark)" }} />

              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--color-steel)",
                    fontWeight: 600,
                    margin: "0 0 0.6rem",
                  }}
                >
                  — Langues
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.95rem",
                    color: "var(--color-ink-2)",
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  Français · English (
                  <Link
                    href="/locksmith"
                    style={{
                      color: "var(--color-brass-deep)",
                      borderBottom: "1px solid var(--color-brass)",
                    }}
                  >
                    locksmith page
                  </Link>
                  )
                </p>
              </div>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>

      <Footer />

      <style>{`
        @media (min-width: 720px) {
          .contact-channels { grid-template-columns: repeat(3, 1fr) !important; gap: 1.4rem !important; }
        }
        @media (min-width: 880px) {
          .contact-meta { grid-template-columns: 1fr 1fr !important; gap: 2.5rem !important; }
        }
        .contact-channel:hover {
          transform: translateY(-4px);
          border-color: var(--color-brass) !important;
          box-shadow: 0 22px 40px -22px rgba(13, 18, 38, 0.25);
        }
        .contact-channel:hover .contact-value { color: var(--color-brass-deep) !important; }
      `}</style>
    </>
  )
}
