import Image from "next/image"
import Link from "next/link"
import { LiveDot } from "@/components/ui/LiveDot"

const STATS = [
  { k: "Disponibilité", v: "24", unit: "h/24" },
  { k: "Semaine", v: "7", unit: "j/7" },
  { k: "Note Google", v: "5,0", unit: "/5" },
  { k: "Communes", v: "45", unit: "/45" },
] as const

export function Hero() {
  return (
    <section
      style={{
        position: "relative",
        background: "var(--color-navy-3)",
        color: "var(--color-silver)",
        overflow: "hidden",
      }}
    >
      {/* Background radial gradients for depth */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 65% 50% at 90% 25%, rgba(201, 162, 74, 0.16), transparent 60%), radial-gradient(ellipse 55% 60% at 8% 95%, rgba(28, 37, 72, 0.65), transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container hero-grid"
        style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "clamp(2.5rem, 4vw, 4rem)",
          paddingTop: "clamp(3.5rem, 6vw, 5.5rem)",
          paddingBottom: "clamp(3rem, 5vw, 4.5rem)",
        }}
      >
        {/* TEXT COLUMN */}
        <div>
          {/* Eyebrow */}
          <div
            className="hero-reveal hero-reveal-1"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "1.6rem",
              color: "var(--color-silver-2)",
              fontFamily: "var(--font-body)",
              fontSize: "0.72rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            <span
              aria-hidden="true"
              style={{
                flex: "0 0 48px",
                height: 1,
                background: "var(--color-brass)",
                opacity: 0.85,
              }}
            />
            <span>Serrurier · Vernier · Canton de Genève</span>
          </div>

          {/* H1 */}
          <h1
            className="hero-reveal hero-reveal-2"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
              lineHeight: 1.04,
              letterSpacing: "-0.025em",
              marginBottom: "1.5rem",
              color: "var(--color-paper)",
              maxWidth: "16ch",
            }}
          >
            Le serrurier{" "}
            <em
              style={{
                fontStyle: "italic",
                fontVariationSettings: '"SOFT" 70',
                fontWeight: 400,
                color: "var(--color-brass)",
              }}
            >
              de confiance
            </em>{" "}
            à Genève, 24h/24.
          </h1>

          {/* Dek */}
          <p
            className="hero-reveal hero-reveal-3"
            style={{
              fontSize: "clamp(1rem, 1.25vw, 1.13rem)",
              lineHeight: 1.6,
              color: "var(--color-silver)",
              maxWidth: "50ch",
              marginBottom: "2rem",
            }}
          >
            Joignable directement,{" "}
            <span
              style={{
                borderBottom: "1.5px solid var(--color-brass)",
                paddingBottom: 1,
                color: "var(--color-paper)",
              }}
            >
              24h/24 et 7j/7
            </span>{" "}
            dans tout le canton. Pas d'appel surtaxé, pas de centrale opaque — un serrurier
            diplômé qui vous donne un délai et un prix avant tout déplacement.
          </p>

          {/* CTAs */}
          <div
            className="hero-reveal hero-reveal-4"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.85rem",
              alignItems: "center",
              marginBottom: "2.5rem",
            }}
          >
            <a
              href="tel:+41225576559"
              className="hero-cta-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "1rem 1.5rem",
                background: "var(--color-vermillion)",
                color: "var(--color-paper)",
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
                fontWeight: 600,
                borderRadius: 6,
                transition: "background 0.2s ease, transform 0.2s ease",
              }}
            >
              <LiveDot variant="paper" size={8} />
              <span>
                Appeler ·{" "}
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontWeight: 600,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  022 557 65 59
                </span>
              </span>
            </a>

            <Link
              href="#contact"
              className="hero-cta-secondary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "1rem 1.4rem",
                background: "transparent",
                color: "var(--color-silver)",
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
                fontWeight: 500,
                border: "1px solid rgba(212, 216, 226, 0.28)",
                borderRadius: 6,
                transition: "border-color 0.2s ease, color 0.2s ease, background 0.2s ease",
              }}
            >
              <span>Demander un devis</span>
              <span
                aria-hidden="true"
                style={{ transition: "transform 0.2s ease", display: "inline-block" }}
                className="hero-cta-arrow"
              >
                →
              </span>
            </Link>
          </div>

          {/* Secondary line: mobile / WhatsApp */}
          <div
            className="hero-reveal hero-reveal-4"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "-1.75rem",
              marginBottom: "2.5rem",
              fontFamily: "var(--font-body)",
              fontSize: "0.78rem",
              color: "var(--color-silver-2)",
              letterSpacing: "0.01em",
            }}
          >
            <span style={{ textTransform: "uppercase", letterSpacing: "0.08em" }}>
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
              }}
            >
              076 475 08 81
            </a>
          </div>

          {/* Stats */}
          <dl
            className="hero-reveal hero-reveal-5 hero-stats"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              borderTop: "1px solid rgba(212, 216, 226, 0.18)",
              borderBottom: "1px solid rgba(212, 216, 226, 0.18)",
              margin: 0,
            }}
          >
            {STATS.map((s, i) => (
              <div
                key={s.k}
                className="hero-stat"
                data-index={i}
                style={{
                  padding: "1.1rem 1rem 1.1rem 0",
                  borderRight: "1px solid var(--color-hairline)",
                }}
              >
                <dt
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.62rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--color-silver-2)",
                    marginBottom: "0.4rem",
                    fontWeight: 500,
                  }}
                >
                  {s.k}
                </dt>
                <dd
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.55rem",
                    fontWeight: 500,
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                    color: "var(--color-paper)",
                    margin: 0,
                  }}
                >
                  {s.v}
                  <small
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      color: "var(--color-silver-2)",
                      letterSpacing: "0.06em",
                      marginLeft: "0.22rem",
                      fontWeight: 400,
                    }}
                  >
                    {s.unit}
                  </small>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* IMAGE / VIDEO COLUMN */}
        <div className="hero-reveal hero-reveal-2" style={{ position: "relative" }}>
          {/* Brass corner brackets */}
          {([
            { pos: "tl", top: -7, left: -7, borderTopWidth: 2, borderLeftWidth: 2 },
            { pos: "tr", top: -7, right: -7, borderTopWidth: 2, borderRightWidth: 2 },
            { pos: "bl", bottom: -7, left: -7, borderBottomWidth: 2, borderLeftWidth: 2 },
            { pos: "br", bottom: -7, right: -7, borderBottomWidth: 2, borderRightWidth: 2 },
          ] as const).map((c) => (
            <span
              key={c.pos}
              aria-hidden="true"
              style={{
                position: "absolute",
                width: 22,
                height: 22,
                borderColor: "var(--color-brass)",
                borderStyle: "solid",
                borderWidth: 0,
                pointerEvents: "none",
                zIndex: 3,
                ...c,
              }}
            />
          ))}

          <div
            className="hero-image-wrap"
            style={{
              position: "relative",
              overflow: "hidden",
              border: "1px solid rgba(212, 216, 226, 0.18)",
              borderRadius: 4,
              aspectRatio: "16 / 9",
              background: "var(--color-navy-deep)",
              boxShadow: "0 30px 80px -30px rgba(0, 0, 0, 0.55)",
            }}
          >
            {/* Video with poster fallback — falls back to static image while video loads.
                Decorative: marked aria-hidden to avoid screen-reader noise. */}
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/images/hero-locksmith.png"
              aria-hidden="true"
              tabIndex={-1}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            >
              <source src="/videos/hero-locksmith.mp4" type="video/mp4" />
              {/* Image fallback for browsers that can't play the video */}
              <Image
                src="/images/hero-locksmith.png"
                alt="Serrurier d'urgence Nova en intervention dans un immeuble à Genève, intervention 24h/24"
                fill
                priority
                sizes="(max-width: 980px) 100vw, 55vw"
                style={{ objectFit: "cover" }}
              />
            </video>

            {/* Subtle gradient */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(135deg, rgba(14, 20, 40, 0) 55%, rgba(14, 20, 40, 0.35) 100%)",
                pointerEvents: "none",
              }}
            />

            {/* Live tag */}
            <div
              style={{
                position: "absolute",
                bottom: "1rem",
                left: "1rem",
                background: "rgba(6, 9, 20, 0.85)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                color: "var(--color-paper)",
                fontFamily: "var(--font-body)",
                fontSize: "0.66rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                fontWeight: 500,
                padding: "0.55rem 0.9rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                border: "1px solid rgba(212, 216, 226, 0.15)",
                borderRadius: 4,
              }}
            >
              <LiveDot variant="red" size={7} />
              <span>Intervention en cours · Vernier</span>
            </div>

            {/* Timecode top-right — documentary feel */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                color: "rgba(244, 241, 234, 0.55)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.62rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontVariantNumeric: "tabular-nums",
                background: "rgba(6, 9, 20, 0.4)",
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
                padding: "0.4rem 0.7rem",
                border: "1px solid rgba(212, 216, 226, 0.10)",
                borderRadius: 3,
              }}
            >
              REC · 00:00:18
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 980px) {
          .hero-grid {
            grid-template-columns: 0.82fr 1.18fr !important;
            align-items: center;
            gap: clamp(2.5rem, 4vw, 4.5rem) !important;
          }
        }
        @media (min-width: 540px) {
          .hero-stats { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (max-width: 539px) {
          .hero-stat[data-index="1"] { border-right: none !important; }
          .hero-stat[data-index="3"] { border-right: none !important; }
          .hero-stat[data-index="0"], .hero-stat[data-index="1"] {
            border-bottom: 1px solid var(--color-hairline);
          }
        }
        @media (min-width: 540px) {
          .hero-stat[data-index="3"] { border-right: none !important; }
        }

        .hero-cta-primary:hover {
          background: var(--color-vermillion-2) !important;
          transform: translateY(-1px);
        }
        .hero-cta-secondary:hover {
          border-color: var(--color-brass) !important;
          color: var(--color-brass) !important;
        }
        .hero-cta-secondary:hover .hero-cta-arrow {
          transform: translateX(3px);
        }

        .hero-reveal {
          opacity: 0;
          transform: translateY(14px);
          animation: heroFadeIn 0.8s ease-out forwards;
        }
        .hero-reveal-1 { animation-delay: 0.05s; }
        .hero-reveal-2 { animation-delay: 0.15s; }
        .hero-reveal-3 { animation-delay: 0.25s; }
        .hero-reveal-4 { animation-delay: 0.35s; }
        .hero-reveal-5 { animation-delay: 0.45s; }
        @keyframes heroFadeIn {
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
