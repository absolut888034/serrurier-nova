import Link from "next/link"
import { LiveDot } from "@/components/ui/LiveDot"
import { CONTACT } from "@/lib/schema"

type Variant = "navy" | "paper" | "vermillion"

interface CTABannerProps {
  eyebrow?: string
  title: string
  titleAccent?: string
  subtitle?: string
  variant?: Variant
  primaryLabel?: string
  secondary?: { label: string; href: string }
}

const STYLES: Record<
  Variant,
  {
    bg: string
    text: string
    subText: string
    accent: string
    btn: string
    btnText: string
    btnHover: string
    secondaryBorder: string
    secondaryText: string
  }
> = {
  navy: {
    bg: "var(--color-navy-3)",
    text: "var(--color-paper)",
    subText: "var(--color-silver)",
    accent: "var(--color-brass)",
    btn: "var(--color-vermillion)",
    btnText: "var(--color-paper)",
    btnHover: "var(--color-vermillion-2)",
    secondaryBorder: "rgba(212, 216, 226, 0.28)",
    secondaryText: "var(--color-silver)",
  },
  paper: {
    bg: "var(--color-paper-2)",
    text: "var(--color-ink)",
    subText: "var(--color-ink-2)",
    accent: "var(--color-brass-deep)",
    btn: "var(--color-vermillion)",
    btnText: "var(--color-paper)",
    btnHover: "var(--color-vermillion-2)",
    secondaryBorder: "var(--color-hairline-dark)",
    secondaryText: "var(--color-navy)",
  },
  vermillion: {
    bg: "var(--color-vermillion)",
    text: "var(--color-paper)",
    subText: "rgba(244, 241, 234, 0.85)",
    accent: "var(--color-paper)",
    btn: "var(--color-navy-deep)",
    btnText: "var(--color-paper)",
    btnHover: "var(--color-navy)",
    secondaryBorder: "rgba(244, 241, 234, 0.5)",
    secondaryText: "var(--color-paper)",
  },
}

export function CTABanner({
  eyebrow = "Disponible maintenant · 24h/24",
  title,
  titleAccent,
  subtitle,
  variant = "navy",
  primaryLabel = "Appeler",
  secondary,
}: CTABannerProps) {
  const s = STYLES[variant]
  return (
    <section
      style={{
        background: s.bg,
        color: s.text,
        paddingTop: "clamp(2.5rem, 4.5vw, 4rem)",
        paddingBottom: "clamp(2.5rem, 4.5vw, 4rem)",
        borderTop: "1px solid var(--color-hairline-dark)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {variant === "navy" && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(201, 162, 74, 0.10), transparent 70%)",
            pointerEvents: "none",
          }}
        />
      )}

      <div
        className="container ctab-wrap"
        style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "1.5rem",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.7rem",
              color: s.subText,
              fontFamily: "var(--font-body)",
              fontSize: "0.68rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 500,
              marginBottom: "0.9rem",
            }}
          >
            <span
              aria-hidden="true"
              style={{ width: 24, height: 1, background: s.accent, opacity: 0.85 }}
            />
            <span>{eyebrow}</span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "clamp(1.55rem, 3.2vw, 2.4rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.022em",
              margin: 0,
              maxWidth: "28ch",
              color: s.text,
            }}
          >
            {title}
            {titleAccent && (
              <>
                {" "}
                <em
                  style={{
                    fontStyle: "italic",
                    fontVariationSettings: '"SOFT" 70',
                    fontWeight: 400,
                    color: s.accent,
                  }}
                >
                  {titleAccent}
                </em>
              </>
            )}
          </h2>

          {subtitle && (
            <p
              style={{
                marginTop: "0.85rem",
                fontFamily: "var(--font-body)",
                fontSize: "0.96rem",
                color: s.subText,
                lineHeight: 1.55,
                maxWidth: "56ch",
              }}
            >
              {subtitle}
            </p>
          )}
        </div>

        <div
          className="ctab-actions"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.85rem",
              alignItems: "center",
            }}
          >
          <a
            href={`tel:${CONTACT.phone}`}
            className="ctab-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "1rem 1.6rem",
              background: s.btn,
              color: s.btnText,
              fontFamily: "var(--font-body)",
              fontSize: "0.95rem",
              fontWeight: 600,
              borderRadius: 6,
              transition: "background 0.2s ease, transform 0.2s ease",
              boxShadow:
                variant === "navy" ? "0 10px 24px -12px rgba(210, 58, 28, 0.55)" : "none",
            }}
          >
            <LiveDot variant="paper" size={8} />
            <span>
              {primaryLabel} ·{" "}
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontWeight: 600,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {CONTACT.phoneDisplay.replace("+41 ", "0").replace(/\s+/g, " ")}
              </span>
            </span>
          </a>

          {secondary && (
            <Link
              href={secondary.href}
              className="ctab-secondary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "1rem 1.3rem",
                background: "transparent",
                color: s.secondaryText,
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
                fontWeight: 500,
                border: `1px solid ${s.secondaryBorder}`,
                borderRadius: 6,
                transition: "border-color 0.2s ease, color 0.2s ease",
              }}
            >
              <span>{secondary.label}</span>
              <span aria-hidden="true" className="ctab-arrow">
                →
              </span>
            </Link>
          )}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "0.5rem",
              fontFamily: "var(--font-body)",
              fontSize: "0.74rem",
              color: s.subText,
            }}
          >
            <span style={{ textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 500 }}>
              Ligne directe · WhatsApp
            </span>
            <span aria-hidden="true" style={{ opacity: 0.4 }}>—</span>
            <a
              href={`tel:${CONTACT.mobile}`}
              style={{
                fontFamily: "var(--font-mono)",
                fontVariantNumeric: "tabular-nums",
                color: s.text,
                fontWeight: 500,
              }}
            >
              076 475 08 81
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 880px) {
          .ctab-wrap { grid-template-columns: 1.4fr auto !important; gap: 2rem !important; }
        }
        .ctab-primary:hover {
          background: ${s.btnHover} !important;
          transform: translateY(-1px);
        }
        .ctab-secondary:hover {
          border-color: ${s.accent} !important;
          color: ${s.accent} !important;
        }
        .ctab-secondary .ctab-arrow {
          display: inline-block;
          transition: transform 0.2s ease;
        }
        .ctab-secondary:hover .ctab-arrow { transform: translateX(3px); }
      `}</style>
    </section>
  )
}
