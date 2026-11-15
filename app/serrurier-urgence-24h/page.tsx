import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { StatusBar } from "@/components/layout/StatusBar"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Breadcrumb } from "@/components/ui/Breadcrumb"
import { LiveDot } from "@/components/ui/LiveDot"
import { CTABanner } from "@/components/sections/CTABanner"
import { ContactForm } from "@/components/sections/ContactForm"
import { FinalCTA } from "@/components/sections/FinalCTA"

import { ZONES, proximityLabel, proximityColor } from "@/content/zones"
import { breadcrumbSchema, faqSchema, serviceSchema, CONTACT } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Serrurier d'urgence à Genève · 24h/24 · 7j/7",
  description:
    "Serrurier d'urgence à Genève, disponible 24h/24, 7j/7 dans tout le canton. Porte claquée, clés perdues, effraction. Devis et délai annoncés avant tout déplacement. ☎ 022 557 65 59.",
  alternates: { canonical: "/serrurier-urgence-24h" },
  openGraph: {
    title: "Serrurier d'urgence à Genève · 24h/24",
    description:
      "Joignable directement, 24h/24 et 7j/7 dans tout le canton. Devis et délai annoncés avant déplacement.",
    type: "website",
    locale: "fr_CH",
    images: ["/images/svc-ouverture.png"],
  },
  keywords: [
    "serrurier urgence Genève",
    "urgence serrurerie",
    "serrurier 24h/24",
    "serrurier d'urgence",
    "SOS serrurier",
    "serrurier nuit Genève",
    "dépannage serrurier",
    "porte claquée Genève",
  ],
}

const URGENCE_TYPES = [
  {
    k: "Porte claquée",
    v: "Sortie sans clés, porte refermée. Ouverture fine en quelques minutes — la serrure reste intacte.",
    icon: "↺",
  },
  {
    k: "Clés perdues",
    v: "Plus de trace des clés. On ouvre, puis on parle du changement de cylindre pour neutraliser les copies.",
    icon: "🗝",
  },
  {
    k: "Clés cassées dans la serrure",
    v: "La clé s'est rompue dans le canon. Extraction propre, test du mécanisme, remplacement si nécessaire.",
    icon: "⚷",
  },
  {
    k: "Effraction · cambriolage",
    v: "Mise en sécurité immédiate, photos pour assurance, remplacement définitif sous 48 h.",
    icon: "⚠",
  },
  {
    k: "Cylindre arraché",
    v: "Tentative d'effraction au pied-de-biche. Démontage et remplacement par un cylindre anti-arrachement.",
    icon: "✕",
  },
  {
    k: "Enfant ou animal seul",
    v: "Priorité absolue. On déplace tout, on arrive le plus vite possible. Appelez d'abord, expliquez après.",
    icon: "♡",
  },
] as const

const URGENCE_FAQS = [
  {
    q: "Combien de temps pour qu'un serrurier d'urgence arrive à Genève ?",
    a: "Le délai dépend de votre commune, de l'heure et du trafic. Nous préférons vous donner une estimation honnête au téléphone, au moment de l'appel, plutôt que de promettre un chiffre rond que la route ne tiendra pas. Vernier, Meyrin et Le Grand-Saconnex sont notre voisinage immédiat ; le reste du canton est plus éloigné. Le serrurier vous confirme le délai exact avant de partir.",
  },
  {
    q: "Le tarif est-il plus élevé la nuit, le week-end ou les jours fériés ?",
    a: "Non. Mêmes conditions 24h/24, 7j/7. Aucune majoration nocturne, dominicale ou fériée. C'est ce qui sépare un artisan local d'une centrale d'appel. Le devis est annoncé au téléphone, avant tout déplacement.",
  },
  {
    q: "Que faire si je suis enfermé dehors la nuit ?",
    a: "Appelez le 022 557 65 59 — vous tombez directement sur le serrurier, pas sur un standard. Décrivez la porte (claquée ou fermée à clé), la marque de la serrure si vous la connaissez, et votre adresse. Le délai et le prix vous sont confirmés au téléphone avant que nous prenions la route.",
  },
  {
    q: "Vous travaillez avec mon assurance habitation ?",
    a: "Oui. Notre facture est conforme aux exigences habituelles : libellé détaillé, photos avant/après si nécessaire, identification des pièces remplacées. La grande majorité des assurances genevoises remboursent (sous réserve de votre franchise).",
  },
  {
    q: "Vous intervenez dans toutes les communes du canton ?",
    a: "Vernier, Genève, Carouge, Meyrin, Lancy, Onex, Le Grand-Saconnex, Versoix, Plan-les-Ouates, Chêne-Bougeries, Chêne-Bourg, Thônex, Bernex et toutes les autres. Si votre adresse est dans le canton de Genève, nous venons.",
  },
  {
    q: "Comment reconnaître un faux serrurier ?",
    a: "Quatre signes d'alerte : (1) numéro surtaxé ou annonce « dès 50–80 CHF » au téléphone ; (2) refus de donner un prix avant déplacement ; (3) pas d'adresse physique vérifiable dans le canton ; (4) paiement exigé uniquement en espèces. Si un de ces points apparaît, raccrochez.",
  },
] as const

export default function SerrurierUrgencePage() {
  const phoneDisplay = "022 557 65 59"

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
                { name: "Serrurier d'urgence 24h/24", url: "/serrurier-urgence-24h" },
              ]),
            ),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              serviceSchema({
                name: "Serrurier d'urgence 24h/24 à Genève",
                slug: "serrurier-urgence-24h",
                description:
                  "Intervention serrurerie d'urgence dans tout le canton de Genève, 24 heures sur 24, 7 jours sur 7. Délai et devis annoncés avant tout déplacement.",
                image: "/images/svc-ouverture.png",
              }),
            ),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema([...URGENCE_FAQS])),
          }}
        />

        {/* HERO — VERMILLION URGENT */}
        <section
          style={{
            background: "var(--color-navy-deep)",
            color: "var(--color-silver)",
            position: "relative",
            overflow: "hidden",
            paddingTop: "clamp(2.5rem, 4.5vw, 4rem)",
            paddingBottom: "clamp(3.5rem, 6vw, 5rem)",
          }}
        >
          {/* Pulsing red gradient */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 60% 70% at 80% 20%, rgba(210, 58, 28, 0.16), transparent 65%), radial-gradient(ellipse 50% 50% at 10% 90%, rgba(201, 162, 74, 0.08), transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div className="container" style={{ position: "relative" }}>
            <Breadcrumb
              tone="dark"
              items={[
                { name: "Accueil", href: "/" },
                { name: "Serrurier d'urgence 24h/24" },
              ]}
            />

            <div
              className="urg-hero-grid"
              style={{
                marginTop: "clamp(1.8rem, 3vw, 2.4rem)",
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "2rem",
                alignItems: "stretch",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "1.3rem" }}>
                <span
                  className="urg-pulse-badge"
                  style={{
                    display: "inline-flex",
                    alignSelf: "flex-start",
                    alignItems: "center",
                    gap: "0.6rem",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.66rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--color-paper)",
                    background: "var(--color-vermillion)",
                    padding: "0.55rem 0.95rem",
                    borderRadius: 999,
                    fontWeight: 700,
                  }}
                >
                  <LiveDot variant="paper" size={7} />
                  Urgence · 24h/24 · 7j/7 · Canton de Genève
                </span>

                <h1
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    fontSize: "clamp(2.2rem, 5vw, 4rem)",
                    lineHeight: 1.04,
                    letterSpacing: "-0.025em",
                    color: "var(--color-paper)",
                    margin: 0,
                    maxWidth: "18ch",
                  }}
                >
                  Serrurier d'urgence à Genève.{" "}
                  <em
                    style={{
                      fontStyle: "italic",
                      fontVariationSettings: '"SOFT" 70',
                      fontWeight: 400,
                      color: "var(--color-brass)",
                    }}
                  >
                    Joignable directement, jour et nuit.
                  </em>
                </h1>

                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(1.02rem, 1.5vw, 1.18rem)",
                    color: "var(--color-silver)",
                    lineHeight: 1.6,
                    maxWidth: "58ch",
                    margin: 0,
                  }}
                >
                  Porte claquée, clés perdues, cylindre arraché ou après effraction. Un seul
                  numéro, un seul artisan — celui qui répond au téléphone est celui qui vient chez
                  vous. Tarifs identiques jour, nuit, week-end et jours fériés.
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.85rem",
                    marginTop: "0.4rem",
                  }}
                >
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="urg-cta-primary"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.8rem",
                      padding: "1.2rem 2rem",
                      background: "var(--color-vermillion)",
                      color: "var(--color-paper)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "clamp(1.2rem, 2.2vw, 1.65rem)",
                      fontWeight: 600,
                      letterSpacing: "0.01em",
                      fontVariantNumeric: "tabular-nums",
                      borderRadius: 6,
                      transition: "background 0.2s ease, transform 0.2s ease",
                      boxShadow: "0 14px 32px -14px rgba(210, 58, 28, 0.65)",
                    }}
                  >
                    <LiveDot variant="paper" size={9} />
                    {phoneDisplay}
                  </a>

                  <Link
                    href="/#contact"
                    className="urg-cta-secondary"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "1.2rem 1.5rem",
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
                    <span>Formulaire si non-urgent</span>
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

                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--color-silver-2)",
                    margin: "0.5rem 0 0",
                  }}
                >
                  Répondu par le serrurier · ★ 5,0 sur Google · Devis et délai annoncés avant déplacement
                </p>
              </div>

              {/* Image */}
              <div
                style={{
                  position: "relative",
                  borderRadius: 14,
                  overflow: "hidden",
                  background: "var(--color-navy-deep)",
                  border: "1px solid rgba(210, 58, 28, 0.25)",
                  boxShadow: "0 30px 60px -22px rgba(210, 58, 28, 0.3)",
                  aspectRatio: "4 / 3",
                }}
              >
                <Image
                  src="/images/svc-ouverture.png"
                  alt="Serrurier d'urgence en intervention à Genève"
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
                      "linear-gradient(180deg, rgba(6,9,20,0) 50%, rgba(6,9,20,0.7) 100%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: "1rem",
                    bottom: "1rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    background: "rgba(210, 58, 28, 0.92)",
                    color: "var(--color-paper)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.66rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    padding: "0.5rem 0.85rem",
                    borderRadius: 4,
                  }}
                >
                  <LiveDot variant="paper" size={7} />
                  INTERVENTION EN COURS
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DELAYS BY COMMUNE */}
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
                <span aria-hidden="true" style={{ width: 28, height: 1, background: "var(--color-vermillion)", opacity: 0.75 }} />
                <span>Couverture · {ZONES.length} communes</span>
                <span aria-hidden="true" style={{ width: 28, height: 1, background: "var(--color-vermillion)", opacity: 0.75 }} />
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
                  maxWidth: "28ch",
                }}
              >
                Toutes les communes,{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    fontVariationSettings: '"SOFT" 70',
                    fontWeight: 400,
                    color: "var(--color-vermillion)",
                  }}
                >
                  délai annoncé au téléphone.
                </em>
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.92rem",
                  color: "var(--color-ink-2)",
                  lineHeight: 1.6,
                  maxWidth: "55ch",
                  margin: 0,
                }}
              >
                Nous n'affichons pas de minutes par commune : la circulation à Genève varie trop
                pour faire une promesse honnête. Le délai exact vous est confirmé à l'appel, en
                fonction de l'heure et du trafic réel.
              </p>
            </div>

            <ul
              className="urg-delays"
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "0.6rem",
                maxWidth: 1000,
                marginInline: "auto",
              }}
            >
              {ZONES.map((z) => (
                <li
                  key={z.slug}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "0.8rem",
                    padding: "0.85rem 1.1rem",
                    background: "var(--color-paper-2)",
                    border: "1px solid var(--color-hairline-dark)",
                    borderRadius: 8,
                  }}
                >
                  <Link
                    href={`/zones/${z.slug}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.55rem",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: "var(--color-ink)",
                      transition: "color 0.2s ease",
                    }}
                    className="urg-delay-link"
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: z.isBase ? "var(--color-brass)" : proximityColor(z.proximity),
                      }}
                    />
                    {z.name}
                  </Link>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.7rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--color-steel)",
                      fontWeight: 500,
                    }}
                  >
                    {z.isBase ? "Base" : proximityLabel(z.proximity)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* URGENCE TYPES */}
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
                Les 6 urgences{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    fontVariationSettings: '"SOFT" 70',
                    fontWeight: 400,
                    color: "var(--color-vermillion)",
                  }}
                >
                  qui nous appellent.
                </em>
              </h2>
            </div>

            <ul
              className="urg-types"
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "1rem",
              }}
            >
              {URGENCE_TYPES.map((t, i) => (
                <li
                  key={t.k}
                  style={{
                    background: "var(--color-paper)",
                    border: "1px solid var(--color-hairline-dark)",
                    borderLeft: "3px solid var(--color-vermillion)",
                    borderRadius: 12,
                    padding: "1.4rem 1.5rem 1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.66rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--color-vermillion)",
                      fontWeight: 600,
                    }}
                  >
                    — Urgence {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.25rem",
                      fontWeight: 600,
                      letterSpacing: "-0.012em",
                      color: "var(--color-ink)",
                      margin: 0,
                    }}
                  >
                    {t.k}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.94rem",
                      color: "var(--color-ink-2)",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {t.v}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CTABanner
          variant="vermillion"
          eyebrow="Maintenant · Disponible"
          title="Une porte fermée n'attend pas."
          titleAccent="Nous non plus."
          subtitle="Le serrurier vous répond directement, vous donne un délai et un prix avant tout déplacement."
          secondary={{ label: "Voir la couverture par commune", href: "#urg-delays" }}
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
                <span aria-hidden="true" style={{ width: 28, height: 1, background: "var(--color-vermillion)", opacity: 0.75 }} />
                <span>FAQ Urgence · 06 questions</span>
                <span aria-hidden="true" style={{ width: 28, height: 1, background: "var(--color-vermillion)", opacity: 0.75 }} />
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
                Ce que les gens nous demandent{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    fontVariationSettings: '"SOFT" 70',
                    fontWeight: 400,
                    color: "var(--color-vermillion)",
                  }}
                >
                  en urgence.
                </em>
              </h2>
            </div>

            <div style={{ borderTop: "2px solid var(--color-navy)" }}>
              {URGENCE_FAQS.map((item, i) => (
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
                        color: "var(--color-vermillion)",
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

        <ContactForm />
        <FinalCTA />
      </main>

      <Footer />

      <style>{`
        @media (min-width: 980px) {
          .urg-hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
            gap: 3rem !important;
            align-items: center !important;
          }
        }
        @media (min-width: 540px) {
          .urg-delays { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (min-width: 880px) {
          .urg-delays { grid-template-columns: repeat(4, 1fr) !important; gap: 0.7rem !important; }
        }
        @media (min-width: 720px) {
          .urg-types { grid-template-columns: repeat(2, 1fr) !important; gap: 1.1rem !important; }
        }
        @media (min-width: 1080px) {
          .urg-types { grid-template-columns: repeat(3, 1fr) !important; }
        }
        .urg-cta-primary:hover {
          background: var(--color-vermillion-2) !important;
          transform: translateY(-1px);
        }
        .urg-cta-secondary:hover {
          border-color: var(--color-brass) !important;
          color: var(--color-brass) !important;
        }
        .urg-delay-link:hover { color: var(--color-vermillion) !important; }
        .urg-pulse-badge {
          animation: urg-pulse 2.4s ease-in-out infinite;
        }
        @keyframes urg-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(210, 58, 28, 0.4); }
          50% { box-shadow: 0 0 0 14px rgba(210, 58, 28, 0); }
        }
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
