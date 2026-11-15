import Image from "next/image"
import { FAQ_ITEMS } from "@/content/faq"
import { faqSchema } from "@/lib/schema"

export function FAQ() {
  return (
    <section
      id="faq"
      style={{
        background: "var(--color-paper)",
        paddingTop: "clamp(3.5rem, 6vw, 5rem)",
        paddingBottom: "clamp(3.5rem, 6vw, 5rem)",
        borderTop: "1px solid var(--color-hairline-dark)",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(FAQ_ITEMS)),
        }}
      />

      <div className="container">
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "1rem",
            marginBottom: "clamp(2rem, 3.5vw, 3rem)",
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
            <span aria-hidden="true" style={{ width: 28, height: 1, background: "var(--color-brass)", opacity: 0.7 }} />
            <span>FAQ · 06 questions</span>
            <span aria-hidden="true" style={{ width: 28, height: 1, background: "var(--color-brass)", opacity: 0.7 }} />
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "clamp(1.75rem, 3.5vw, 2.7rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.022em",
              color: "var(--color-ink)",
              maxWidth: "24ch",
              margin: 0,
            }}
          >
            Les questions que{" "}
            <em
              style={{
                fontStyle: "italic",
                fontVariationSettings: '"SOFT" 70',
                fontWeight: 400,
                color: "var(--color-brass-deep)",
              }}
            >
              vous nous posez
            </em>{" "}
            le plus.
          </h2>
        </div>

        <div
          className="faq-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          {/* Image column */}
          <aside className="faq-aside">
            <div
              className="faq-image"
              style={{
                position: "relative",
                aspectRatio: "1 / 1",
                borderRadius: 14,
                overflow: "hidden",
                background: "var(--color-navy-deep)",
                border: "1px solid var(--color-hairline-dark)",
                boxShadow: "0 22px 50px -25px rgba(13, 18, 38, 0.4)",
              }}
            >
              <Image
                src="/images/faq-cylinder.png"
                alt="Cylindre européen haute sécurité, mécanisme interne"
                fill
                sizes="(min-width: 880px) 38vw, 100vw"
                style={{ objectFit: "cover" }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(6,9,20,0) 50%, rgba(6,9,20,0.75) 100%)",
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
                  borderTop: "1.5px solid var(--color-brass)",
                  borderLeft: "1.5px solid var(--color-brass)",
                  opacity: 0.85,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: "1.2rem",
                  right: "1.2rem",
                  bottom: "1.2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.45rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.66rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--color-brass)",
                    fontWeight: 600,
                  }}
                >
                  — Détail technique
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.05rem",
                    color: "var(--color-paper)",
                    margin: 0,
                    lineHeight: 1.35,
                    fontWeight: 500,
                    textShadow: "0 1px 4px rgba(0,0,0,0.5)",
                  }}
                >
                  Un cylindre européen,{" "}
                  <em
                    style={{
                      fontStyle: "italic",
                      fontVariationSettings: '"SOFT" 70',
                      color: "var(--color-brass)",
                      fontWeight: 400,
                    }}
                  >
                    décortiqué.
                  </em>
                </p>
              </div>
            </div>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                color: "var(--color-ink-2)",
                lineHeight: 1.55,
                marginTop: "1rem",
                maxWidth: "32ch",
              }}
            >
              Vous trouverez ici l'essentiel. Pour le reste, un appel suffit — la réponse est
              gratuite.
            </p>
          </aside>

          {/* Accordion column */}
          <div
            style={{
              borderTop: "2px solid var(--color-navy)",
            }}
          >
            {FAQ_ITEMS.map((item, i) => (
              <details
                key={item.q}
                className="faq-item"
                style={{
                  borderBottom: "1px solid var(--color-hairline-dark)",
                }}
              >
                <summary
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr auto",
                    gap: "1.2rem",
                    alignItems: "center",
                    padding: "1.4rem 0",
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
                      fontSize: "1.12rem",
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
      </div>

      <style>{`
        .faq-item summary::-webkit-details-marker { display: none; }
        .faq-item summary:hover { padding-left: 0.5rem !important; }
        .faq-item[open] .faq-plus {
          transform: rotate(45deg);
          color: var(--color-vermillion) !important;
        }
        @media (max-width: 640px) {
          .faq-item .faq-answer { padding-left: 0 !important; }
        }
        @media (min-width: 880px) {
          .faq-grid {
            grid-template-columns: 0.7fr 1.3fr !important;
            gap: 3rem !important;
            align-items: start !important;
          }
          .faq-aside { position: sticky; top: 92px; }
        }
      `}</style>
    </section>
  )
}
