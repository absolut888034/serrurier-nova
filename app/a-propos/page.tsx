import type { Metadata } from "next"
import Image from "next/image"

import { StatusBar } from "@/components/layout/StatusBar"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Breadcrumb } from "@/components/ui/Breadcrumb"
import { Slider } from "@/components/ui/Slider"
import { CTABanner } from "@/components/sections/CTABanner"
import { FinalCTA } from "@/components/sections/FinalCTA"

import { breadcrumbSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "À propos · L'artisan derrière Serrurier Nova Genève",
  description:
    "Un seul artisan, dix ans de métier à Genève. Pas de centrale, pas de sous-traitance. Découvrez l'histoire et la méthode de Serrurier Nova.",
  alternates: { canonical: "/a-propos" },
  openGraph: {
    title: "À propos · Serrurier Nova Genève",
    description:
      "Un artisan local, dix ans de métier. Découvrez notre histoire et notre méthode.",
    type: "website",
    locale: "fr_CH",
  },
}

const ATELIER_SLIDES = [
  {
    src: "/images/apropos-atelier.png",
    alt: "Atelier du serrurier Serrurier Nova à Genève, clés et cylindres organisés",
    caption: "Atelier · Canton de Genève",
  },
  {
    src: "/images/apropos-portrait.png",
    alt: "Portrait de l'artisan serrurier Serrurier Nova",
    caption: "L'artisan · Dix ans à Genève",
  },
  {
    src: "/images/apropos-tools.png",
    alt: "Outillage professionnel de serrurerie : crochets, picks, clés, cylindres",
    caption: "Outillage non destructif",
  },
]

const VALUES = [
  {
    k: "L'artisan qui décroche est celui qui vient",
    v: "Aucune centrale, aucun standard, aucune sous-traitance. Le serrurier à qui vous parlez au téléphone est celui qui sonnera à votre porte, avec ses outils, son nom et sa carte professionnelle — avec un délai donné honnêtement au moment de l'appel.",
  },
  {
    k: "Un prix avant le déplacement",
    v: "Devis annoncé au téléphone, fourchette honnête, ou refus poli si l'opération est impossible à chiffrer sans voir. Pas de surfacturation surprise une fois sur place.",
  },
  {
    k: "Outils non destructifs en priorité",
    v: "Dans neuf cas sur dix, votre serrure reste utilisable après notre passage. Le perçage est le dernier recours, toujours annoncé avant. La porte qui se ferme à clé après notre intervention vaut mieux qu'une serrure cassée et remplacée à la va-vite.",
  },
  {
    k: "Tarifs identiques jour et nuit",
    v: "Aucune majoration nocturne, dominicale ou fériée. La nuit n'est pas l'occasion de gonfler la facture — c'est l'occasion d'être présent quand les autres ne le sont pas.",
  },
]

const TIMELINE = [
  {
    year: "2014",
    event: "Premières interventions",
    body: "Installation à Châtelaine (Vernier). Premiers dépannages d'urgence chez les voisins, comme artisan indépendant.",
  },
  {
    year: "2016",
    event: "Certifications Kaba & Fichet",
    body: "Formation et habilitations chez les principaux constructeurs suisses et européens.",
  },
  {
    year: "2018",
    event: "Régies & assurances",
    body: "Mandats récurrents avec les principales régies genevoises. Facturation conforme aux assurances habitations du canton.",
  },
  {
    year: "2020",
    event: "Couverture cantonale complète",
    body: "Les 45 communes du canton de Genève desservies 24h/24 et 7j/7. Stock élargi pour intervention sans aller-retour.",
  },
  {
    year: "2023",
    event: "Spécialisation urgence 24h/24",
    body: "Recentrage du métier sur l'ouverture de porte, le changement de serrure et le dépannage après effraction — les trois prestations qui demandent un vrai artisan à toute heure.",
  },
  {
    year: "2026",
    event: "Refonte digitale",
    body: "Nouvelle présence en ligne pour offrir aux Genevois la même transparence que sur place.",
  },
] as const

export default function AProposPage() {
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
                { name: "À propos", url: "/a-propos" },
              ]),
            ),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              name: "À propos de Serrurier Nova Genève",
              description:
                "Un artisan serrurier indépendant à Genève depuis 2014, sans centrale ni sous-traitance.",
              mainEntity: { "@id": "https://www.serruriernova.ch/#business" },
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
            <Breadcrumb tone="dark" items={[{ name: "Accueil", href: "/" }, { name: "À propos" }]} />

            <div
              className="ap-hero-grid"
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
                  À propos · L'artisan · Depuis 2014
                </span>

                <h1
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    fontSize: "clamp(2.1rem, 5vw, 3.7rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.025em",
                    color: "var(--color-paper)",
                    margin: 0,
                    maxWidth: "20ch",
                  }}
                >
                  Un seul artisan.{" "}
                  <em
                    style={{
                      fontStyle: "italic",
                      fontVariationSettings: '"SOFT" 70',
                      fontWeight: 400,
                      color: "var(--color-brass)",
                    }}
                  >
                    Toute votre porte.
                  </em>
                </h1>

                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(1.02rem, 1.5vw, 1.15rem)",
                    color: "var(--color-silver)",
                    lineHeight: 1.6,
                    maxWidth: "58ch",
                    margin: 0,
                  }}
                >
                  Serrurier Nova est une entreprise indépendante installée à Châtelaine, dans la
                  commune de Vernier. Dix ans de métier, le canton de Genève comme terrain de
                  travail, et une seule règle : la personne qui répond au téléphone est celle qui
                  vient chez vous.
                </p>

                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.92rem",
                    color: "var(--color-silver-2)",
                    lineHeight: 1.55,
                    maxWidth: "55ch",
                    margin: 0,
                  }}
                >
                  Pas de centrale. Pas de sous-traitance. Pas de tarif gonflé la nuit. C'est ce
                  qui sépare un artisan d'une plateforme — et c'est aussi pourquoi nos clients
                  reviennent.
                </p>
              </div>

              {/* Atelier slider */}
              <div style={{ display: "flex", flexDirection: "column", minHeight: 0 }}>
                <Slider slides={ATELIER_SLIDES} interval={5500} fillHeight />
              </div>
            </div>
          </div>
        </section>

        {/* VALUES */}
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
                gap: "1rem",
                marginBottom: "clamp(2rem, 3.5vw, 2.8rem)",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: "clamp(1.7rem, 3vw, 2.3rem)",
                  letterSpacing: "-0.022em",
                  lineHeight: 1.1,
                  color: "var(--color-ink)",
                  margin: 0,
                  maxWidth: "26ch",
                }}
              >
                Quatre engagements{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    fontVariationSettings: '"SOFT" 70',
                    fontWeight: 400,
                    color: "var(--color-brass-deep)",
                  }}
                >
                  non négociables.
                </em>
              </h2>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--color-steel)",
                }}
              >
                — Depuis 2014
              </span>
            </div>

            <ol
              className="ap-values"
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "1.3rem",
                counterReset: "v",
              }}
            >
              {VALUES.map((v, i) => (
                <li
                  key={v.k}
                  style={{
                    background: "var(--color-paper-2)",
                    border: "1px solid var(--color-hairline-dark)",
                    borderRadius: 12,
                    padding: "1.5rem 1.7rem 1.7rem",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      top: "0.4rem",
                      right: "1rem",
                      fontFamily: "var(--font-display)",
                      fontStyle: "italic",
                      fontVariationSettings: '"SOFT" 70',
                      fontSize: "5rem",
                      fontWeight: 400,
                      color: "var(--color-brass)",
                      opacity: 0.16,
                      lineHeight: 1,
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.25rem",
                      fontWeight: 600,
                      letterSpacing: "-0.015em",
                      color: "var(--color-ink)",
                      margin: 0,
                      maxWidth: "30ch",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {v.k}
                  </h3>
                  <p
                    style={{
                      marginTop: "0.7rem",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.95rem",
                      color: "var(--color-ink-2)",
                      lineHeight: 1.65,
                      maxWidth: "60ch",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {v.v}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* TIMELINE */}
        <section
          style={{
            background: "var(--color-paper-2)",
            paddingTop: "clamp(3.5rem, 6vw, 5rem)",
            paddingBottom: "clamp(3.5rem, 6vw, 5rem)",
            borderTop: "1px solid var(--color-hairline-dark)",
          }}
        >
          <div className="container" style={{ maxWidth: 900, marginInline: "auto" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(1.7rem, 3vw, 2.3rem)",
                letterSpacing: "-0.022em",
                lineHeight: 1.1,
                color: "var(--color-ink)",
                margin: "0 0 2rem",
                textAlign: "center",
              }}
            >
              Dix ans{" "}
              <em
                style={{
                  fontStyle: "italic",
                  fontVariationSettings: '"SOFT" 70',
                  fontWeight: 400,
                  color: "var(--color-brass-deep)",
                }}
              >
                en quelques dates.
              </em>
            </h2>

            <ol
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                position: "relative",
              }}
            >
              {/* Vertical line */}
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 8,
                  bottom: 8,
                  left: "5.5rem",
                  width: 1,
                  background: "var(--color-hairline-dark)",
                }}
                className="ap-timeline-line"
              />

              {TIMELINE.map((t, i) => (
                <li
                  key={t.year}
                  style={{
                    position: "relative",
                    paddingLeft: "7.5rem",
                    paddingBottom: i === TIMELINE.length - 1 ? 0 : "2rem",
                  }}
                  className="ap-timeline-item"
                >
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: "calc(5.5rem - 6px)",
                      top: 12,
                      width: 13,
                      height: 13,
                      borderRadius: "50%",
                      background: "var(--color-paper)",
                      border: "2px solid var(--color-brass)",
                      boxShadow: "0 0 0 3px var(--color-paper-2)",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 8,
                      fontFamily: "var(--font-display)",
                      fontStyle: "italic",
                      fontVariationSettings: '"SOFT" 70',
                      fontSize: "1.6rem",
                      fontWeight: 500,
                      color: "var(--color-brass-deep)",
                      width: "4.5rem",
                      textAlign: "right",
                    }}
                  >
                    {t.year}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.2rem",
                      fontWeight: 600,
                      letterSpacing: "-0.012em",
                      color: "var(--color-ink)",
                      margin: "0 0 0.35rem",
                    }}
                  >
                    {t.event}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.95rem",
                      color: "var(--color-ink-2)",
                      lineHeight: 1.6,
                      margin: 0,
                      maxWidth: "55ch",
                    }}
                  >
                    {t.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <CTABanner
          variant="navy"
          eyebrow="Vous voulez nous parler ?"
          title="Une porte, une question,"
          titleAccent="un projet — appelez."
          subtitle="Vous arrivez directement à l'artisan. Pas de standard, pas de filtre, pas d'attente musicale."
          secondary={{ label: "Voir nos prestations", href: "/services" }}
        />

        <FinalCTA />
      </main>

      <Footer />

      <style>{`
        @media (min-width: 980px) {
          .ap-hero-grid {
            grid-template-columns: 1.05fr 0.95fr !important;
            gap: 3rem !important;
            align-items: stretch !important;
          }
        }
        @media (min-width: 720px) {
          .ap-values { grid-template-columns: repeat(2, 1fr) !important; gap: 1.5rem !important; }
        }
        @media (max-width: 640px) {
          .ap-timeline-line { left: 0.65rem !important; }
          .ap-timeline-item { padding-left: 2.2rem !important; }
          .ap-timeline-item > span:nth-child(2) { position: static !important; width: auto !important; text-align: left !important; display: block !important; margin-bottom: 0.25rem !important; font-size: 1.3rem !important; }
          .ap-timeline-item > span[aria-hidden="true"]:first-child { left: calc(0.65rem - 6px) !important; }
        }
      `}</style>
    </>
  )
}
