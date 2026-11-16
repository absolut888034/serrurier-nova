import { REVIEWS } from "@/content/avis"

const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=Serrurier+Nova+Geneve"

interface ZoneReviewsProps {
  /** Commune name, shown in the intro line. */
  zoneName: string
  /** Stable per-zone seed (e.g. zone.order) to rotate which reviews show,
   *  so the 16 zone pages don't all display the same three (duplicate content). */
  seed?: number
}

/**
 * Reviews block for zone pages. Shows 3 genuine Google reviews, rotated per
 * zone via `seed` so each commune surfaces a different subset. Reviews are not
 * commune-tagged (Google doesn't expose it), so we never imply a fake location.
 */
export function ZoneReviews({ zoneName, seed = 0 }: ZoneReviewsProps) {
  const n = REVIEWS.length
  const count = Math.min(3, n)
  const start = ((seed % n) + n) % n
  const selected = Array.from({ length: count }, (_, i) => REVIEWS[(start + i) % n])

  return (
    <section
      style={{
        background: "var(--color-navy-3)",
        color: "var(--color-silver)",
        paddingTop: "clamp(3rem, 5vw, 4.5rem)",
        paddingBottom: "clamp(3rem, 5vw, 4.5rem)",
        borderTop: "1px solid var(--color-hairline-dark)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 50% 55% at 15% 10%, rgba(201, 162, 74, 0.10), transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative" }}>
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
              fontSize: "clamp(1.5rem, 2.8vw, 2.1rem)",
              letterSpacing: "-0.022em",
              lineHeight: 1.1,
              color: "var(--color-paper)",
              margin: 0,
              maxWidth: "26ch",
            }}
          >
            Ce que disent{" "}
            <em
              style={{
                fontStyle: "italic",
                fontVariationSettings: '"SOFT" 70',
                fontWeight: 400,
                color: "var(--color-brass)",
              }}
            >
              nos clients.
            </em>
          </h2>

          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.78rem",
              letterSpacing: "0.04em",
              color: "var(--color-silver)",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ color: "var(--color-brass)", fontSize: "0.95rem" }}>★ 5,0</span>
            <span>· 13 avis Google →</span>
          </a>
        </div>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.92rem",
            color: "var(--color-silver-2)",
            lineHeight: 1.6,
            margin: "0 0 1.6rem",
            maxWidth: "60ch",
          }}
        >
          Note parfaite de 5,0 ★ sur 13 avis Google vérifiés — la même équipe
          intervient à {zoneName} et dans tout le canton.
        </p>

        <ul
          className="zr-grid"
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1rem",
          }}
        >
          {selected.map((r) => (
            <li
              key={r.author + r.isoDate}
              style={{
                background: "rgba(28, 37, 72, 0.55)",
                border: "1px solid rgba(212, 216, 226, 0.16)",
                borderRadius: 14,
                padding: "1.5rem 1.6rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.9rem",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              <span
                aria-label={`${r.rating} sur 5`}
                style={{
                  color: "var(--color-brass)",
                  fontSize: "0.95rem",
                  letterSpacing: "0.12em",
                }}
              >
                {"★".repeat(r.rating)}
                <span style={{ color: "var(--color-steel)" }}>{"☆".repeat(5 - r.rating)}</span>
              </span>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.96rem",
                  color: "var(--color-silver)",
                  lineHeight: 1.6,
                  margin: 0,
                  flex: 1,
                }}
              >
                « {r.body} »
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  gap: "0.8rem",
                  paddingTop: "0.4rem",
                  borderTop: "1px solid rgba(212, 216, 226, 0.12)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "var(--color-paper)",
                  }}
                >
                  {r.author}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.08em",
                    color: "var(--color-silver-2)",
                  }}
                >
                  {r.location ? `${r.location} · ${r.date}` : r.date}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        @media (min-width: 720px) {
          .zr-grid { grid-template-columns: repeat(${Math.min(count, 3)}, 1fr) !important; gap: 1.1rem !important; }
        }
      `}</style>
    </section>
  )
}
