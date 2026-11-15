import Image from "next/image"

type Item = {
  src: string
  alt: string
  caption: string
  tag: string
  span?: "wide" | "tall" | "square"
}

const ITEMS: Item[] = [
  {
    src: "/images/gallery-01-cylindre-navy.png",
    alt: "Pose d'un cylindre européen sur une porte blindée navy à Genève",
    caption: "Pose d'un cylindre européen",
    tag: "Changement",
    span: "tall",
  },
  {
    src: "/images/gallery-04-picks.png",
    alt: "Ouverture fine non destructive d'un cylindre haute sécurité",
    caption: "Ouverture fine, non destructive",
    tag: "Ouverture",
    span: "square",
  },
  {
    src: "/images/gallery-06-strikeplate.png",
    alt: "Pose d'une gâche renforcée sur un dormant en bois massif",
    caption: "Gâche renforcée, dormant massif",
    tag: "Blindage",
    span: "square",
  },
  {
    src: "/images/gallery-07-van-geneve.png",
    alt: "Intervention de nuit dans une rue résidentielle de Genève",
    caption: "En intervention · Genève, 23h12",
    tag: "Urgence",
    span: "wide",
  },
  {
    src: "/images/gallery-02-cylindre-glass.png",
    alt: "Remplacement d'un cylindre sur une porte vitrée d'immeuble",
    caption: "Remplacement sur porte d'immeuble",
    tag: "Cylindre",
    span: "square",
  },
  {
    src: "/images/gallery-03-kneeling.png",
    alt: "Installation d'une serrure multipoints sur palier",
    caption: "Multipoints A2P · sur palier",
    tag: "Sécurité",
    span: "tall",
  },
  {
    src: "/images/gallery-05-a2p-cylinder.png",
    alt: "Cylindre A2P haute sécurité avec carte de propriété",
    caption: "A2P · carte de propriété",
    tag: "Haute sécurité",
    span: "square",
  },
  {
    src: "/images/gallery-08-key-bench.png",
    alt: "Clé brevetée sur l'établi de l'atelier",
    caption: "Clé brevetée · atelier",
    tag: "Double de clé",
    span: "square",
  },
]

export function Gallery() {
  return (
    <section
      id="galerie"
      style={{
        background: "var(--color-paper)",
        paddingTop: "clamp(3.5rem, 6vw, 5.5rem)",
        paddingBottom: "clamp(3.5rem, 6vw, 5.5rem)",
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
            <span>En images · interventions récentes</span>
            <span aria-hidden="true" style={{ width: 28, height: 1, background: "var(--color-brass)", opacity: 0.7 }} />
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "clamp(1.85rem, 3.8vw, 2.9rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.022em",
              color: "var(--color-ink)",
              maxWidth: "26ch",
              margin: 0,
            }}
          >
            Le{" "}
            <em
              style={{
                fontStyle: "italic",
                fontVariationSettings: '"SOFT" 70',
                fontWeight: 400,
                color: "var(--color-brass-deep)",
              }}
            >
              geste juste
            </em>
            , à chaque intervention.
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.96rem",
              color: "var(--color-ink-2)",
              maxWidth: "56ch",
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            Captures réelles du quotidien : porte claquée à 23 h, cylindre A2P remplacé en quinze
            minutes, gâche renforcée posée au millimètre. Sans mise en scène.
          </p>
        </div>

        {/* Masonry grid */}
        <ul
          className="gallery-grid"
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1rem",
          }}
        >
          {ITEMS.map((item, i) => (
            <li
              key={item.src}
              className={`gallery-cell gallery-cell-${item.span ?? "square"}`}
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 10,
                border: "1px solid var(--color-hairline-dark)",
                background: "var(--color-navy-deep)",
                aspectRatio: "4 / 3",
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1080px) 25vw, (min-width: 720px) 50vw, 100vw"
                style={{ objectFit: "cover" }}
                className="gallery-img"
                loading={i < 2 ? "eager" : "lazy"}
              />
              {/* Gradient overlay */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(6,9,20,0) 45%, rgba(6,9,20,0.78) 100%)",
                  pointerEvents: "none",
                }}
              />
              {/* Tag pill */}
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 12,
                  left: 12,
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.62rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  color: "var(--color-brass)",
                  background: "rgba(6,9,20,0.55)",
                  padding: "0.32rem 0.6rem",
                  borderRadius: 999,
                  border: "1px solid rgba(201,162,74,0.35)",
                  backdropFilter: "blur(6px)",
                  WebkitBackdropFilter: "blur(6px)",
                }}
              >
                {item.tag}
              </span>
              {/* Caption */}
              <figcaption
                style={{
                  position: "absolute",
                  left: 14,
                  right: 14,
                  bottom: 12,
                  fontFamily: "var(--font-body)",
                  fontSize: "0.86rem",
                  fontWeight: 500,
                  color: "var(--color-paper)",
                  letterSpacing: "-0.005em",
                  lineHeight: 1.3,
                }}
              >
                {item.caption}
              </figcaption>
              {/* Brass bottom line */}
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
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        .gallery-cell .gallery-img {
          transition: transform 0.7s ease;
        }
        .gallery-cell:hover .gallery-img {
          transform: scale(1.04);
        }
        @media (min-width: 720px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.1rem !important;
          }
        }
        @media (min-width: 1080px) {
          .gallery-grid {
            grid-template-columns: repeat(4, 1fr) !important;
            grid-auto-rows: 220px;
            gap: 1.1rem !important;
          }
          .gallery-cell {
            aspect-ratio: auto !important;
            grid-row: span 2;
          }
          .gallery-cell-tall { grid-row: span 3; }
          .gallery-cell-wide { grid-column: span 2; grid-row: span 2; }
        }
      `}</style>
    </section>
  )
}
