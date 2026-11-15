import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { StatusBar } from "@/components/layout/StatusBar"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Breadcrumb } from "@/components/ui/Breadcrumb"
import { LiveDot } from "@/components/ui/LiveDot"
import { FinalCTA } from "@/components/sections/FinalCTA"

import { ZONES, proximityColor } from "@/content/zones"
import { breadcrumbSchema, faqSchema, serviceSchema, CONTACT } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Locksmith Geneva · 24/7 — Nova ★ 5,0",
  description:
    "English-speaking locksmith in Geneva, available 24/7 across the canton. ★ 5.0 on Google. Door lockouts, lock replacements, post-burglary security. Price and ETA confirmed by phone before any travel. ☎ 022 557 65 59.",
  alternates: {
    canonical: "/locksmith",
    languages: {
      "fr-CH": "/",
      "en": "/locksmith",
    },
  },
  openGraph: {
    title: "Locksmith Geneva · 24/7 — Nova",
    description:
      "English-speaking locksmith in Geneva. Lockouts, lock changes, post-burglary. Direct line to the locksmith, 24/7 across the canton.",
    type: "website",
    locale: "en_GB",
    images: ["/images/hero-locksmith.png"],
  },
  keywords: [
    "locksmith Geneva",
    "locksmith near me",
    "emergency locksmith Geneva",
    "lockout Geneva",
    "lock replacement Geneva",
    "post-burglary Geneva",
    "24/7 locksmith Switzerland",
  ],
}

const SERVICES_EN = [
  {
    k: "Lockouts",
    v: "Slammed door, lost keys, broken cylinder. Non-destructive opening in 9 out of 10 cases.",
    href: "/services/ouverture-de-porte",
  },
  {
    k: "Lock replacement",
    v: "All European brands — Kaba, Fichet, Bricard, Mul-T-Lock. High-security cylinders on request.",
    href: "/services/changement-de-serrure",
  },
  {
    k: "Post-burglary",
    v: "Immediate securing, photo report for insurance, full repair within 48 hours.",
    href: "/services/depannage-apres-effraction",
  },
] as const

const TRUST_POINTS = [
  { k: "English spoken", v: "Direct conversation with the locksmith, no language barrier." },
  { k: "Transparent pricing", v: "Price quoted on the phone before any travel. No hidden fees." },
  { k: "No surcharge nights or weekends", v: "Same rates 24/7, 365 days a year." },
  { k: "Insurance-grade invoice", v: "Detailed invoice accepted by all Swiss insurance providers." },
] as const

const FAQ_EN = [
  {
    q: "How fast can a locksmith reach me in Geneva?",
    a: "It depends on your address, the time of day, and traffic. Rather than promising a round number that traffic won't honour, we'd rather give you an honest ETA on the phone, before we set off. Vernier, Meyrin and Le Grand-Saconnex are our immediate neighbourhood; the rest of the canton is farther. The exact time is confirmed when you call.",
  },
  {
    q: "Do you charge more at night or on weekends?",
    a: "No. Same rates 24/7, 7 days a week. No nighttime, Sunday, or holiday surcharges. This is what separates an independent artisan from a call-centre dispatch service.",
  },
  {
    q: "Will you damage my door?",
    a: "In 9 out of 10 cases, no. We always start with non-destructive techniques (picking, bypass tools, half-cylinder). Drilling is only used when the lock genuinely resists — and we always tell you before doing so.",
  },
  {
    q: "Do you work with my insurance company?",
    a: "Yes. Our invoice meets the standard requirements of all Swiss insurers: detailed itemisation, before/after photos when relevant, identification of replaced parts. Most policies cover the intervention (subject to your deductible).",
  },
  {
    q: "Can I get an English-speaking locksmith?",
    a: "Yes — that's what this page is for. The locksmith who picks up the phone speaks fluent English and can handle your job end-to-end without translation.",
  },
] as const

export default function LocksmithEnglishPage() {
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
                { name: "Home", url: "/" },
                { name: "Locksmith Geneva", url: "/locksmith" },
              ]),
            ),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              serviceSchema({
                name: "Locksmith services in Geneva",
                slug: "locksmith",
                description:
                  "English-speaking 24/7 locksmith covering the entire canton of Geneva. Lockouts, lock replacements, post-burglary securing.",
                image: "/images/hero-locksmith.png",
              }),
            ),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema([...FAQ_EN])),
          }}
        />

        {/* HERO */}
        <section
          lang="en"
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
                { name: "Home", href: "/" },
                { name: "Locksmith Geneva" },
              ]}
            />

            <div
              className="lck-hero-grid"
              style={{
                marginTop: "clamp(1.8rem, 3vw, 2.6rem)",
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "2rem",
                alignItems: "center",
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
                    fontSize: "0.68rem",
                    letterSpacing: "0.2em",
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
                  English-speaking · 24/7 · Geneva
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
                  English-speaking locksmith in{" "}
                  <em
                    style={{
                      fontStyle: "italic",
                      fontVariationSettings: '"SOFT" 70',
                      fontWeight: 400,
                      color: "var(--color-brass)",
                    }}
                  >
                    Geneva, 24/7.
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
                  Locked out? Lost your keys? Broken cylinder? The same person who answers the
                  phone is the one who comes to your door — with their tools, their name, and a
                  price agreed in advance. Across the entire canton of Geneva.
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
                    className="lck-cta-primary"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.8rem",
                      padding: "1.1rem 1.8rem",
                      background: "var(--color-vermillion)",
                      color: "var(--color-paper)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "clamp(1.15rem, 2vw, 1.5rem)",
                      fontWeight: 600,
                      fontVariantNumeric: "tabular-nums",
                      borderRadius: 6,
                      transition: "background 0.2s ease, transform 0.2s ease",
                      boxShadow: "0 14px 32px -14px rgba(210, 58, 28, 0.55)",
                    }}
                  >
                    <LiveDot variant="paper" size={9} />
                    +41 22 557 65 59
                  </a>

                  <a
                    href={`mailto:${CONTACT.email}?subject=Locksmith%20enquiry`}
                    className="lck-cta-secondary"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "1.1rem 1.5rem",
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
                    <span>Email enquiry</span>
                    <span aria-hidden="true">→</span>
                  </a>
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
                    Mobile · WhatsApp
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
                    +41 76 475 08 81
                  </a>
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--color-silver-2)",
                    margin: "0.4rem 0 0",
                  }}
                >
                  ★ 5.0 on Google · 30-min average response · Price quoted before travel
                </p>
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
                  src="/images/hero-locksmith.png"
                  alt="English-speaking locksmith in Geneva, intervention in a residential building"
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
              </div>
            </div>
          </div>
        </section>

        {/* TRUST POINTS */}
        <section
          lang="en"
          style={{
            background: "var(--color-paper)",
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
                fontSize: "clamp(1.55rem, 3vw, 2.2rem)",
                letterSpacing: "-0.022em",
                lineHeight: 1.1,
                color: "var(--color-ink)",
                margin: "0 0 2rem",
                maxWidth: "26ch",
              }}
            >
              Why the{" "}
              <em
                style={{
                  fontStyle: "italic",
                  fontVariationSettings: '"SOFT" 70',
                  fontWeight: 400,
                  color: "var(--color-brass-deep)",
                }}
              >
                international community
              </em>{" "}
              in Geneva trusts us.
            </h2>

            <ul
              className="lck-trust"
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "1.1rem",
              }}
            >
              {TRUST_POINTS.map((t) => (
                <li
                  key={t.k}
                  style={{
                    background: "var(--color-paper-2)",
                    border: "1px solid var(--color-hairline-dark)",
                    borderLeft: "3px solid var(--color-brass)",
                    borderRadius: 10,
                    padding: "1.2rem 1.4rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.4rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      letterSpacing: "-0.01em",
                      color: "var(--color-ink)",
                      margin: 0,
                    }}
                  >
                    {t.k}
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
                    {t.v}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SERVICES IN ENGLISH */}
        <section
          lang="en"
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
                  fontSize: "clamp(1.55rem, 3vw, 2.2rem)",
                  letterSpacing: "-0.022em",
                  lineHeight: 1.1,
                  color: "var(--color-ink)",
                  margin: 0,
                  maxWidth: "24ch",
                }}
              >
                What we{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    fontVariationSettings: '"SOFT" 70',
                    fontWeight: 400,
                    color: "var(--color-brass-deep)",
                  }}
                >
                  do.
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
                — 06 services
              </span>
            </div>

            <ul
              className="lck-services"
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "1rem",
              }}
            >
              {SERVICES_EN.map((s, i) => (
                <li key={s.k}>
                  <Link
                    href={s.href}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                      padding: "1.4rem 1.5rem 1.5rem",
                      background: "var(--color-paper)",
                      border: "1px solid var(--color-hairline-dark)",
                      borderRadius: 12,
                      transition: "border-color 0.2s ease, transform 0.2s ease",
                    }}
                    className="lck-service-link"
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.62rem",
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "var(--color-brass-deep)",
                        fontWeight: 600,
                      }}
                    >
                      — {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.2rem",
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
                    <span
                      style={{
                        marginTop: "0.4rem",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.72rem",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--color-navy)",
                        fontWeight: 600,
                      }}
                      className="lck-service-cta"
                    >
                      Learn more →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SERVICE AREAS */}
        <section
          lang="en"
          style={{
            background: "var(--color-paper)",
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
                fontSize: "clamp(1.45rem, 2.6vw, 1.9rem)",
                letterSpacing: "-0.022em",
                lineHeight: 1.1,
                color: "var(--color-ink)",
                margin: "0 0 1.5rem",
              }}
            >
              Service areas across{" "}
              <em
                style={{
                  fontStyle: "italic",
                  fontVariationSettings: '"SOFT" 70',
                  fontWeight: 400,
                  color: "var(--color-brass-deep)",
                }}
              >
                the canton.
              </em>
            </h2>

            <ul
              className="lck-areas"
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "0.6rem",
              }}
            >
              {ZONES.map((z) => (
                <li
                  key={z.slug}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    padding: "0.75rem 1rem",
                    background: "var(--color-paper-2)",
                    border: "1px solid var(--color-hairline-dark)",
                    borderRadius: 8,
                  }}
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
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.92rem",
                      color: "var(--color-ink)",
                      fontWeight: 500,
                    }}
                  >
                    {z.name}
                    {z.isBase && (
                      <span
                        style={{
                          marginLeft: 6,
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.6rem",
                          letterSpacing: "0.14em",
                          color: "var(--color-brass-deep)",
                          fontWeight: 700,
                        }}
                      >
                        BASE
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section
          lang="en"
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
                fontSize: "clamp(1.7rem, 3.2vw, 2.4rem)",
                letterSpacing: "-0.022em",
                lineHeight: 1.1,
                color: "var(--color-ink)",
                margin: "0 0 1.5rem",
                textAlign: "center",
              }}
            >
              Frequently asked{" "}
              <em
                style={{
                  fontStyle: "italic",
                  fontVariationSettings: '"SOFT" 70',
                  fontWeight: 400,
                  color: "var(--color-brass-deep)",
                }}
              >
                questions.
              </em>
            </h2>

            <div style={{ borderTop: "2px solid var(--color-navy)" }}>
              {FAQ_EN.map((item, i) => (
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

        <FinalCTA />
      </main>

      <Footer />

      <style>{`
        @media (min-width: 980px) {
          .lck-hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
            gap: 3rem !important;
          }
        }
        @media (min-width: 540px) {
          .lck-areas { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (min-width: 880px) {
          .lck-areas { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (min-width: 720px) {
          .lck-services { grid-template-columns: repeat(2, 1fr) !important; gap: 1.2rem !important; }
          .lck-trust { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 1080px) {
          .lck-services { grid-template-columns: repeat(3, 1fr) !important; }
          .lck-trust { grid-template-columns: repeat(4, 1fr) !important; }
        }
        .lck-cta-primary:hover {
          background: var(--color-vermillion-2) !important;
          transform: translateY(-1px);
        }
        .lck-cta-secondary:hover {
          border-color: var(--color-brass) !important;
          color: var(--color-brass) !important;
        }
        .lck-service-link:hover {
          border-color: var(--color-brass) !important;
          transform: translateY(-2px);
        }
        .lck-service-link:hover .lck-service-cta { color: var(--color-brass-deep) !important; }
        .faq-item summary::-webkit-details-marker { display: none; }
        .faq-item[open] .faq-plus { transform: rotate(45deg); color: var(--color-vermillion) !important; }
      `}</style>
    </>
  )
}
