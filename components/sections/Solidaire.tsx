import { CONTACT } from "@/lib/schema"

const BENEFICIARIES = [
  { title: "Personnes âgées", detail: "Retraités AVS" },
  { title: "Hospice général", detail: "Bénéficiaires de l'aide sociale" },
]

export function Solidaire() {
  return (
    <section
      id="tarif-solidaire"
      aria-labelledby="solidaire-title"
      style={{
        background: "var(--color-paper)",
        paddingTop: "clamp(2.5rem, 4.5vw, 4rem)",
        paddingBottom: "clamp(2.5rem, 4.5vw, 4rem)",
        borderTop: "1px solid var(--color-hairline-dark)",
      }}
    >
      <div
        className="container sol-wrap"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "1.75rem",
          alignItems: "center",
        }}
      >
        {/* Discount figure */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.25rem",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              flexShrink: 0,
              display: "grid",
              placeItems: "center",
              width: "clamp(5.5rem, 10vw, 7rem)",
              aspectRatio: "1",
              borderRadius: "50%",
              background: "var(--color-navy)",
              color: "var(--color-paper)",
              border: "2px solid var(--color-brass)",
              fontFamily: "var(--font-mono)",
              fontVariantNumeric: "tabular-nums",
              fontWeight: 600,
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              letterSpacing: "-0.02em",
            }}
          >
            −20 %
          </div>

          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.7rem",
                color: "var(--color-steel)",
                fontFamily: "var(--font-body)",
                fontSize: "0.68rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontWeight: 500,
                marginBottom: "0.6rem",
              }}
            >
              <span
                aria-hidden="true"
                style={{ width: 24, height: 1, background: "var(--color-brass)", opacity: 0.85 }}
              />
              <span>Tarif solidaire</span>
            </div>

            <h2
              id="solidaire-title"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(1.4rem, 2.8vw, 2.1rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.022em",
                color: "var(--color-ink)",
                margin: 0,
                maxWidth: "26ch",
              }}
            >
              20 % de réduction{" "}
              <em
                style={{
                  fontStyle: "italic",
                  fontVariationSettings: '"SOFT" 70',
                  fontWeight: 400,
                  color: "var(--color-brass-deep)",
                }}
              >
                sur toutes nos interventions.
              </em>
            </h2>

            <p
              style={{
                marginTop: "0.7rem",
                marginBottom: 0,
                fontFamily: "var(--font-body)",
                fontSize: "0.94rem",
                color: "var(--color-ink-2)",
                lineHeight: 1.55,
                maxWidth: "52ch",
              }}
            >
              Pour les personnes âgées et les bénéficiaires de l&apos;Hospice général.
              Signalez-le simplement au téléphone : la réduction est déduite du prix
              annoncé, avant tout déplacement.
            </p>
          </div>
        </div>

        {/* Beneficiaries */}
        <ul
          className="sol-list"
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0.75rem",
          }}
        >
          {BENEFICIARIES.map((b) => (
            <li
              key={b.title}
              style={{
                padding: "1rem 1.1rem",
                border: "1px solid var(--color-hairline-dark)",
                borderTop: "2px solid var(--color-brass)",
                borderRadius: 6,
                background: "var(--color-paper-2)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: "0.92rem",
                  color: "var(--color-ink)",
                }}
              >
                {b.title}
              </div>
              <div
                style={{
                  marginTop: "0.25rem",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8rem",
                  color: "var(--color-steel)",
                }}
              >
                {b.detail}
              </div>
            </li>
          ))}
          <li style={{ gridColumn: "1 / -1" }}>
            <a
              href={`tel:${CONTACT.phone}`}
              className="sol-cta"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.5rem",
                minHeight: 48,
                padding: "0.85rem 1.2rem",
                background: "var(--color-navy)",
                color: "var(--color-paper)",
                fontFamily: "var(--font-body)",
                fontSize: "0.92rem",
                fontWeight: 600,
                borderRadius: 6,
                transition: "background 0.2s ease",
              }}
            >
              <span>Appeler ·</span>
              <span style={{ fontFamily: "var(--font-mono)", fontVariantNumeric: "tabular-nums" }}>
                {CONTACT.phoneDisplay.replace("+41 ", "0").replace(/\s+/g, " ")}
              </span>
            </a>
          </li>
        </ul>
      </div>

      <style>{`
        @media (min-width: 880px) {
          .sol-wrap { grid-template-columns: 1.3fr 1fr !important; gap: 3rem !important; }
        }
        .sol-cta:hover { background: var(--color-navy-2) !important; }
      `}</style>
    </section>
  )
}
