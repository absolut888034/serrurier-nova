import { LiveDot } from "@/components/ui/LiveDot"

export function FinalCTA() {
  return (
    <section
      style={{
        background: "var(--color-navy-3)",
        color: "var(--color-silver)",
        paddingTop: "clamp(5rem, 9vw, 8rem)",
        paddingBottom: "clamp(5rem, 9vw, 8rem)",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Background gradients */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 50% 80% at 50% 50%, rgba(201, 162, 74, 0.10), transparent 70%), radial-gradient(ellipse 60% 50% at 50% 100%, rgba(210, 58, 28, 0.10), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container"
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.8rem",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
            lineHeight: 1.06,
            letterSpacing: "-0.022em",
            color: "var(--color-paper)",
            maxWidth: "22ch",
            margin: 0,
          }}
        >
          Une porte fermée n'attend pas.{" "}
          <em
            style={{
              fontStyle: "italic",
              fontVariationSettings: '"SOFT" 70',
              fontWeight: 400,
              color: "var(--color-brass)",
            }}
          >
            Nous non plus.
          </em>
        </h2>

        <a
          href="tel:+41225576559"
          aria-label="Appeler Serrurier Nova au 022 557 65 59"
          className="finalcta-btn"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.95rem",
            padding: "1.3rem 2.4rem",
            background: "var(--color-vermillion)",
            color: "var(--color-paper)",
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(1.4rem, 2.6vw, 1.95rem)",
            fontWeight: 600,
            letterSpacing: "0.01em",
            fontVariantNumeric: "tabular-nums",
            borderRadius: 6,
            transition: "background 0.2s ease, transform 0.2s ease",
            boxShadow: "0 10px 30px -10px rgba(210, 58, 28, 0.5)",
          }}
        >
          <LiveDot variant="paper" size={9} />
          <span>022 557 65 59</span>
        </a>

        <p
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.6rem",
            fontFamily: "var(--font-body)",
            fontSize: "0.78rem",
            color: "var(--color-silver-2)",
            margin: 0,
          }}
        >
          <span style={{ textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 500 }}>
            Ligne directe · WhatsApp
          </span>
          <span aria-hidden="true" style={{ opacity: 0.4 }}>—</span>
          <a
            href="tel:+41764750881"
            style={{
              fontFamily: "var(--font-mono)",
              fontVariantNumeric: "tabular-nums",
              color: "var(--color-silver)",
              fontWeight: 500,
              fontSize: "0.92rem",
            }}
          >
            076 475 08 81
          </a>
        </p>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.72rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--color-silver-2)",
            fontWeight: 500,
            margin: 0,
          }}
        >
          Joignable directement · Réponse par le serrurier · 24h/24
        </p>
      </div>

      <style>{`
        .finalcta-btn:hover {
          background: var(--color-vermillion-2) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  )
}
