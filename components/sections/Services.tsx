import Link from "next/link"
import { HOME_SERVICES } from "@/content/services"
import { ServiceCard } from "@/components/ui/ServiceCard"

export function Services() {
  return (
    <section
      id="services"
      style={{
        background: "var(--color-paper)",
        paddingTop: "clamp(4.5rem, 8vw, 7rem)",
        paddingBottom: "clamp(4.5rem, 8vw, 7rem)",
      }}
    >
      <div className="container">
        {/* Block head — centered */}
        <div
          className="services-head"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "1.4rem",
            marginBottom: "clamp(2.5rem, 4vw, 3.8rem)",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "1rem",
              color: "var(--color-steel)",
              fontFamily: "var(--font-body)",
              fontSize: "0.72rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: 36,
                height: 1,
                background: "var(--color-brass)",
                opacity: 0.7,
              }}
            />
            <span>Nos services · 03 prestations</span>
            <span
              aria-hidden="true"
              style={{
                width: 36,
                height: 1,
                background: "var(--color-brass)",
                opacity: 0.7,
              }}
            />
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.022em",
              color: "var(--color-ink)",
              maxWidth: "20ch",
              margin: 0,
            }}
          >
            Trois prestations.{" "}
            <em
              style={{
                fontStyle: "italic",
                fontVariationSettings: '"SOFT" 70',
                fontWeight: 400,
                color: "var(--color-brass-deep)",
              }}
            >
              Un seul artisan.
            </em>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.02rem",
              color: "var(--color-ink-2)",
              maxWidth: "52ch",
              margin: 0,
              lineHeight: 1.55,
            }}
          >
            Le serrurier qui répond au téléphone est celui qui vient chez vous — sans centrale, sans
            sous-traitance.
          </p>
        </div>

        {/* Grid — strict 3×2 on desktop, 2×3 on tablet, 1×6 on mobile */}
        <div
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.5rem",
          }}
        >
          {HOME_SERVICES.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>

        {/* Bottom link */}
        <div
          style={{
            marginTop: "clamp(2rem, 4vw, 3rem)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link
            href="/services"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.7rem",
              padding: "0.95rem 1.6rem",
              border: "1px solid var(--color-hairline-strong)",
              borderRadius: 999,
              color: "var(--color-ink)",
              fontFamily: "var(--font-body)",
              fontSize: "0.88rem",
              fontWeight: 500,
              letterSpacing: "0.04em",
              transition: "border-color 0.2s ease, color 0.2s ease, background 0.2s ease",
              background: "transparent",
            }}
            className="services-bottom-link"
          >
            Voir tous les services
            <span aria-hidden="true" className="services-bottom-arrow">
              →
            </span>
          </Link>
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.75rem !important;
          }
        }
        @media (min-width: 980px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 1.75rem !important;
          }
        }
        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 22px 50px -24px rgba(13, 18, 38, 0.28);
          border-color: rgba(28, 37, 72, 0.28);
        }
        .service-card:hover .service-card-img {
          transform: scale(1.04);
        }
        .service-card:hover .service-card-link {
          color: var(--color-brass-deep);
          gap: 0.7rem;
        }
        .services-bottom-link:hover {
          border-color: var(--color-navy);
          background: var(--color-paper-2);
        }
        .services-bottom-link:hover .services-bottom-arrow {
          transform: translateX(3px);
        }
        .services-bottom-arrow {
          transition: transform 0.2s ease;
          display: inline-block;
        }
      `}</style>
    </section>
  )
}
