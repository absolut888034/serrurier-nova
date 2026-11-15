import { LiveDot } from "@/components/ui/LiveDot"
import { LiveTime } from "@/components/ui/LiveTime"

export function StatusBar() {
  return (
    <div
      style={{
        background: "var(--color-navy)",
        color: "var(--color-silver)",
        borderBottom: "1px solid var(--color-hairline)",
        fontFamily: "var(--font-body)",
        fontSize: "0.72rem",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        fontWeight: 500,
        fontVariantNumeric: "tabular-nums",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.5rem",
          height: 34,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <LiveDot variant="green" />
          <span>
            Opérationnel · <LiveTime /> CET
          </span>
        </div>

        <div
          className="status-right"
          style={{ display: "flex", gap: "1.5rem", color: "var(--color-silver-2)" }}
        >
          <span>Vernier · 1219</span>
          <span>5,0 ★ · 8 avis Google</span>
          <span>Joignable 24h/24</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .status-right { display: none !important; }
        }
      `}</style>
    </div>
  )
}
