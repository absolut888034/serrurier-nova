import Image from "next/image"
import { METHOD_STEPS } from "@/content/methode"

export function Methode() {
  return (
    <section
      id="methode"
      style={{
        background: "var(--color-paper-2)",
        paddingTop: "clamp(3.5rem, 6vw, 5rem)",
        paddingBottom: "clamp(3.5rem, 6vw, 5rem)",
        borderTop: "1px solid var(--color-hairline-dark)",
      }}
    >
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
            <span>Méthode · 04 étapes</span>
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
            Comment{" "}
            <em
              style={{
                fontStyle: "italic",
                fontVariationSettings: '"SOFT" 70',
                fontWeight: 400,
                color: "var(--color-brass-deep)",
              }}
            >
              se déroule
            </em>{" "}
            une intervention.
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.96rem",
              color: "var(--color-ink-2)",
              maxWidth: "52ch",
              margin: 0,
              lineHeight: 1.55,
            }}
          >
            Quatre étapes, dans cet ordre, sans exception. C'est ce qui sépare un artisan d'une
            centrale d'appel.
          </p>
        </div>

        {/* Steps grid */}
        <ol
          className="method-grid"
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.25rem",
          }}
        >
          {METHOD_STEPS.map((step) => (
            <li
              key={step.num}
              className="method-card"
              style={{
                background: "var(--color-paper)",
                border: "1px solid var(--color-hairline-dark)",
                borderRadius: 14,
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
              }}
            >
              {/* Image */}
              <div
                style={{
                  position: "relative",
                  aspectRatio: "4 / 3",
                  background: "var(--color-navy-deep)",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  fill
                  sizes="(min-width: 1080px) 25vw, (min-width: 720px) 50vw, 100vw"
                  style={{ objectFit: "cover" }}
                  className="method-img"
                />
                {/* Bottom overlay */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(6,9,20,0) 55%, rgba(6,9,20,0.6) 100%)",
                  }}
                />
                {/* Step number badge */}
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.66rem",
                    letterSpacing: "0.18em",
                    fontWeight: 600,
                    color: "var(--color-paper)",
                    background: "rgba(6,9,20,0.7)",
                    padding: "0.32rem 0.55rem",
                    borderRadius: 4,
                    border: "1px solid rgba(201, 162, 74, 0.5)",
                    backdropFilter: "blur(4px)",
                    WebkitBackdropFilter: "blur(4px)",
                  }}
                >
                  ÉTAPE {step.num}
                </span>
                {/* Brass corner */}
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: "var(--color-brass)",
                    opacity: 0.85,
                  }}
                />
              </div>

              {/* Body */}
              <div
                style={{
                  padding: "1.4rem 1.5rem 1.6rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.55rem",
                  flex: 1,
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.4rem",
                    fontWeight: 600,
                    letterSpacing: "-0.015em",
                    color: "var(--color-ink)",
                    margin: 0,
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.93rem",
                    color: "var(--color-ink-2)",
                    lineHeight: 1.6,
                    margin: 0,
                    maxWidth: "42ch",
                  }}
                >
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <style>{`
        .method-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 30px -18px rgba(13, 18, 38, 0.25);
        }
        .method-card .method-img {
          transition: transform 0.7s ease;
        }
        .method-card:hover .method-img {
          transform: scale(1.04);
        }
        @media (min-width: 720px) {
          .method-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 1.5rem !important; }
        }
        @media (min-width: 1080px) {
          .method-grid { grid-template-columns: repeat(4, 1fr) !important; gap: 1.5rem !important; }
        }
      `}</style>
    </section>
  )
}
