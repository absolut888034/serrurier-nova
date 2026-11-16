import Link from "next/link"
import { REVIEWS } from "@/content/avis"
import { reviewListSchema } from "@/lib/schema"

function initials(name: string) {
  return name
    .replace(/\./g, "")
    .split(/\s+/)
    .map((p) => p.charAt(0))
    .join("")
    .toUpperCase()
    .slice(0, 2)
}

export function Avis() {
  return (
    <section
      id="avis"
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
          __html: JSON.stringify(
            reviewListSchema(
              REVIEWS.map((r) => ({
                author: r.author,
                body: r.body,
                rating: r.rating,
                datePublished: r.isoDate,
                location: r.location,
              })),
            ),
          ),
        }}
      />

      <div className="container">
        {/* Header with rating block */}
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
            <span>Avis · 5,0 ★ sur Google</span>
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
              maxWidth: "22ch",
              margin: 0,
            }}
          >
            Huit avis.{" "}
            <em
              style={{
                fontStyle: "italic",
                fontVariationSettings: '"SOFT" 70',
                fontWeight: 400,
                color: "var(--color-brass-deep)",
              }}
            >
              Cinq étoiles.
            </em>
          </h2>

          {/* Big rating panel */}
          <div
            style={{
              marginTop: "0.6rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "1.4rem",
              padding: "1rem 1.6rem",
              background: "var(--color-paper-2)",
              border: "1px solid var(--color-hairline-dark)",
              borderRadius: 999,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2.4rem",
                fontWeight: 500,
                lineHeight: 1,
                color: "var(--color-ink)",
                fontVariantNumeric: "tabular-nums",
                letterSpacing: "-0.02em",
              }}
            >
              5,0
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "0.2rem" }}>
              <span
                aria-hidden="true"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--color-brass-deep)",
                  fontSize: "1rem",
                  letterSpacing: "0.18em",
                  lineHeight: 1,
                }}
              >
                {"★".repeat(5)}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.66rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--color-steel)",
                  fontWeight: 600,
                }}
              >
                13 avis · Google
              </span>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div
          className="avis-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.5rem",
          }}
        >
          {REVIEWS.slice(0, 6).map((r) => (
            <article
              key={r.author + r.isoDate}
              className="avis-card"
              style={{
                background: "var(--color-paper)",
                border: "1px solid var(--color-hairline-dark)",
                borderTop: "3px solid var(--color-brass)",
                borderRadius: 14,
                padding: "1.8rem 1.8rem 1.6rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.1rem",
                boxShadow: "0 1px 0 rgba(255, 255, 255, 0.6) inset",
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
                position: "relative",
              }}
            >
              {/* Decorative quote mark */}
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 8,
                  right: 18,
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontVariationSettings: '"SOFT" 70',
                  fontSize: "5.5rem",
                  lineHeight: 1,
                  color: "var(--color-brass)",
                  opacity: 0.14,
                  fontWeight: 400,
                  letterSpacing: "-0.04em",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                &ldquo;
              </span>

              {/* Stars + G */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.8rem" }}>
                <div
                  aria-label={`${r.rating} étoiles sur 5`}
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--color-brass-deep)",
                    fontSize: "1rem",
                    letterSpacing: "0.18em",
                  }}
                >
                  {"★".repeat(r.rating) + "☆".repeat(5 - r.rating)}
                </div>
                <span
                  aria-label="Avis Google"
                  title="Google"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: "var(--color-paper-2)",
                    border: "1px solid var(--color-hairline-dark)",
                    fontFamily: "var(--font-display)",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    color: "var(--color-navy)",
                    lineHeight: 1,
                  }}
                >
                  G
                </span>
              </div>

              {/* Quote */}
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.08rem",
                  lineHeight: 1.5,
                  color: "var(--color-ink)",
                  fontWeight: 500,
                  flex: 1,
                  margin: 0,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                « {r.body} »
              </p>

              {/* Meta with avatar */}
              <div
                style={{
                  paddingTop: "1rem",
                  borderTop: "1px solid var(--color-hairline-dark)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.8rem",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, var(--color-brass) 0%, var(--color-brass-deep) 100%)",
                    color: "var(--color-paper)",
                    fontFamily: "var(--font-display)",
                    fontSize: "0.92rem",
                    fontWeight: 600,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    letterSpacing: "0.02em",
                    boxShadow: "0 2px 6px rgba(201, 162, 74, 0.35)",
                    flexShrink: 0,
                  }}
                >
                  {initials(r.author)}
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.94rem",
                      color: "var(--color-navy)",
                      fontWeight: 600,
                    }}
                  >
                    {r.author}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.68rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--color-steel)",
                      fontWeight: 500,
                    }}
                  >
                    {r.location ? `${r.location} · ${r.date}` : `Avis Google · ${r.date}`}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom link */}
        <div
          style={{
            marginTop: "clamp(2rem, 3.5vw, 2.8rem)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link
            href="https://www.google.com/search?q=Serrurier+Nova+Geneve"
            target="_blank"
            rel="noopener"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.78rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--color-navy)",
              fontWeight: 600,
              borderBottom: "1.5px solid var(--color-brass)",
              paddingBottom: 3,
            }}
          >
            Voir les 13 avis sur Google →
          </Link>
        </div>
      </div>

      <style>{`
        .avis-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 32px -20px rgba(13, 18, 38, 0.2);
        }
        @media (min-width: 480px) {
          .avis-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 720px) {
          .avis-grid { grid-template-columns: repeat(3, 1fr) !important; gap: 1.75rem !important; }
        }
      `}</style>
    </section>
  )
}
