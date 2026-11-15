import Image from "next/image"
import Link from "next/link"
import type { Service } from "@/content/services"

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const isUrgence = service.tag === "Urgence"
  const accentColor = isUrgence ? "var(--color-vermillion)" : "var(--color-brass)"
  const tagBg = isUrgence ? "rgba(210, 58, 28, 0.10)" : "rgba(201, 162, 74, 0.14)"
  const tagFg = isUrgence ? "var(--color-vermillion)" : "var(--color-brass-deep)"
  const num = String(index + 1).padStart(2, "0")

  return (
    <Link
      href={`/services/${service.slug}`}
      className="service-card"
      aria-label={`${service.title} — en savoir plus`}
      style={{
        display: "flex",
        flexDirection: "column",
        background: "var(--color-paper)",
        border: "1px solid var(--color-hairline-dark)",
        borderTop: `3px solid ${accentColor}`,
        borderRadius: 14,
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.2s ease",
        position: "relative",
      }}
    >
      {/* IMAGE */}
      <div
        className="service-card-image"
        style={{
          position: "relative",
          overflow: "hidden",
          aspectRatio: "4 / 3",
          background: "var(--color-navy-3)",
        }}
      >
        <Image
          src={service.image}
          alt={`${service.title} à Genève — Serrurier Nova ${service.tag === "Urgence" ? "24h/24" : ""}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
          className="service-card-img"
          style={{ objectFit: "cover", transition: "transform 0.7s ease" }}
        />

        {/* Bottom gradient */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(6, 9, 20, 0.10) 0%, rgba(6, 9, 20, 0) 30%, rgba(6, 9, 20, 0) 50%, rgba(6, 9, 20, 0.70) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Number badge top-left */}
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "0.85rem",
            left: "0.85rem",
            fontFamily: "var(--font-mono)",
            fontSize: "0.66rem",
            letterSpacing: "0.16em",
            color: "var(--color-paper)",
            background: "rgba(6, 9, 20, 0.6)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            border: "1px solid rgba(212, 216, 226, 0.18)",
            padding: "0.35rem 0.6rem",
            borderRadius: 3,
            fontVariantNumeric: "tabular-nums",
            fontWeight: 500,
          }}
        >
          <span style={{ color: "var(--color-brass)" }}>—</span> {num}
        </span>

        {/* Overlay title centered bottom */}
        <div
          style={{
            position: "absolute",
            left: "1.25rem",
            right: "1.25rem",
            bottom: "1.1rem",
            color: "var(--color-paper)",
            textShadow: "0 2px 22px rgba(6, 9, 20, 0.6)",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "1.4rem",
              letterSpacing: "0.015em",
              textTransform: "uppercase",
              lineHeight: 1.05,
            }}
          >
            {service.shortTitle}
          </div>
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              fontSize: "0.68rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--color-silver)",
              marginTop: "0.3rem",
            }}
          >
            {service.shortSub}
          </div>
          <span
            aria-hidden="true"
            style={{
              display: "block",
              width: 32,
              height: 2,
              background: accentColor,
              marginTop: "0.7rem",
            }}
          />
        </div>
      </div>

      {/* BODY */}
      <div
        style={{
          padding: "1.5rem 1.6rem 1.7rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.9rem",
          flex: 1,
        }}
      >
        {/* Tag */}
        <div>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.6rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: tagFg,
              background: tagBg,
              padding: "0.4rem 0.75rem",
              borderRadius: 999,
              fontWeight: 700,
            }}
          >
            {service.tag}
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.32rem",
            fontWeight: 600,
            letterSpacing: "-0.015em",
            color: "var(--color-ink)",
            lineHeight: 1.18,
            margin: 0,
          }}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.94rem",
            color: "var(--color-ink-2)",
            lineHeight: 1.6,
            margin: 0,
            flex: 1,
          }}
        >
          {service.description}
        </p>

        {/* Link */}
        <span
          className="service-card-link"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.76rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--color-navy)",
            fontWeight: 600,
            marginTop: "0.4rem",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.55rem",
            transition: "gap 0.25s ease, color 0.2s ease",
          }}
        >
          En savoir plus
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  )
}
