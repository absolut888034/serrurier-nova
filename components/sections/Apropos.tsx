import { Slider } from "@/components/ui/Slider"

const PRINCIPLES = [
  {
    k: "Artisan unique",
    v: "Le serrurier qui répond au téléphone est celui qui vient chez vous.",
  },
  {
    k: "Sans centrale",
    v: "Pas de sous-traitance, pas de standard, pas d'appel surtaxé.",
  },
  {
    k: "Outils non destructifs",
    v: "Ouverture fine en priorité. Remplacement uniquement si nécessaire.",
  },
  {
    k: "Toutes les marques",
    v: "Formé chez les principaux constructeurs de serrures haute sécurité.",
  },
] as const

const BADGES = ["Fichet", "Kaba", "Bricard", "Picard", "A2P", "EN 1143-1"] as const

const SLIDES = [
  {
    src: "/images/apropos-atelier.png",
    alt: "Atelier du serrurier à Genève",
    caption: "Atelier · Canton de Genève",
  },
  {
    src: "/images/apropos-portrait.png",
    alt: "Portrait de l'artisan serrurier",
    caption: "Artisan certifié · Toutes marques",
  },
  {
    src: "/images/apropos-tools.png",
    alt: "Outils du serrurier disposés sur l'établi",
    caption: "Outillage professionnel non destructif",
  },
]

export function Apropos() {
  return (
    <section
      style={{
        background: "var(--color-navy-3)",
        color: "var(--color-silver)",
        paddingTop: "clamp(4rem, 7vw, 6rem)",
        paddingBottom: "clamp(4rem, 7vw, 6rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle radial accent */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 55% 50% at 90% 10%, rgba(201, 162, 74, 0.10), transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "1rem",
            marginBottom: "clamp(2.5rem, 4vw, 3.5rem)",
          }}
        >
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
            }}
          >
            <span aria-hidden="true" style={{ width: 28, height: 1, background: "var(--color-brass)", opacity: 0.7 }} />
            <span>À propos · l'artisan</span>
            <span aria-hidden="true" style={{ width: 28, height: 1, background: "var(--color-brass)", opacity: 0.7 }} />
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "clamp(1.85rem, 3.8vw, 2.9rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.022em",
              color: "var(--color-paper)",
              maxWidth: "24ch",
              margin: 0,
            }}
          >
            Une entreprise{" "}
            <em
              style={{
                fontStyle: "italic",
                fontVariationSettings: '"SOFT" 70',
                fontWeight: 400,
                color: "var(--color-brass)",
              }}
            >
              indépendante
            </em>
            , à taille humaine.
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              color: "var(--color-silver)",
              maxWidth: "58ch",
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            Pas de centrale, pas de sous-traitance. Le serrurier qui répond au téléphone est celui
            qui vient chez vous — avec son nom, son matériel et ses certifications.
          </p>
        </div>

        {/* Slider + info */}
        <div
          className="apropos-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            alignItems: "stretch",
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          {/* Slider column */}
          <div style={{ display: "flex", flexDirection: "column", minHeight: 0 }}>
            <Slider slides={SLIDES} interval={5500} fillHeight />
          </div>

          {/* Info column */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            {/* Principles card */}
            <div
              style={{
                background: "rgba(28, 37, 72, 0.55)",
                border: "1px solid rgba(212, 216, 226, 0.12)",
                borderRadius: 14,
                padding: "1.6rem 1.8rem",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.66rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--color-silver-2)",
                  marginBottom: "1.2rem",
                  fontWeight: 600,
                }}
              >
                Notre engagement
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {PRINCIPLES.map((p) => (
                  <li key={p.k} style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.66rem",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--color-brass)",
                        fontWeight: 600,
                      }}
                    >
                      — {p.k}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.92rem",
                        color: "var(--color-paper)",
                        lineHeight: 1.5,
                      }}
                    >
                      {p.v}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Badges card */}
            <div
              style={{
                background: "rgba(28, 37, 72, 0.55)",
                border: "1px solid rgba(212, 216, 226, 0.12)",
                borderRadius: 14,
                padding: "1.4rem 1.8rem 1.5rem",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.66rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--color-silver-2)",
                  marginBottom: "0.4rem",
                  fontWeight: 600,
                }}
              >
                Certifications &amp; partenaires
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9rem",
                  color: "var(--color-silver)",
                  marginBottom: "1.1rem",
                  lineHeight: 1.55,
                  maxWidth: "44ch",
                }}
              >
                Formé chez les principaux constructeurs de serrures haute sécurité.
              </p>
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                }}
              >
                {BADGES.map((b) => (
                  <li
                    key={b}
                    style={{
                      background: "rgba(201, 162, 74, 0.15)",
                      color: "var(--color-brass)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      padding: "0.42rem 0.75rem",
                      borderRadius: 999,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      fontWeight: 600,
                      border: "1px solid rgba(201, 162, 74, 0.3)",
                    }}
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 980px) {
          .apropos-grid { grid-template-columns: 1.15fr 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  )
}
