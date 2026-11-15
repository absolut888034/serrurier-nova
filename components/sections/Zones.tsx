"use client"

import { useState } from "react"
import Link from "next/link"
import { ZONES, proximityColor, proximityLabel } from "@/content/zones"
import { ZoneMap } from "@/components/ui/ZoneMap"

export function Zones() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null)

  return (
    <section
      id="zones"
      style={{
        background: "var(--color-paper-2)",
        paddingTop: "clamp(2.8rem, 4.5vw, 4rem)",
        paddingBottom: "clamp(2.8rem, 4.5vw, 4rem)",
        borderTop: "1px solid var(--color-hairline-dark)",
      }}
    >
      <div className="container">
        {/* Header — tight centered */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "0.85rem",
            marginBottom: "clamp(1.5rem, 3vw, 2.4rem)",
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
            <span>Zones desservies · 45 communes</span>
            <span aria-hidden="true" style={{ width: 28, height: 1, background: "var(--color-brass)", opacity: 0.7 }} />
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "clamp(1.6rem, 3vw, 2.3rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.022em",
              color: "var(--color-ink)",
              maxWidth: "26ch",
              margin: 0,
            }}
          >
            Tout le canton de Genève.{" "}
            <em
              style={{
                fontStyle: "italic",
                fontVariationSettings: '"SOFT" 70',
                fontWeight: 400,
                color: "var(--color-brass-deep)",
              }}
            >
              Une seule base, à Vernier.
            </em>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.88rem",
              color: "var(--color-ink-2)",
              maxWidth: "44ch",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            Passez la souris sur une commune pour la repérer.
          </p>
        </div>

        {/* Map + chips */}
        <div
          className="zones-layout"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.5rem",
            alignItems: "start",
          }}
        >
          <ZoneMap activeSlug={activeSlug} onActiveChange={setActiveSlug} />

          <ul
            className="zones-list"
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.4rem",
            }}
          >
            {ZONES.map((zone) => {
              const isActive = zone.slug === activeSlug
              return (
                <li key={zone.slug}>
                  <Link
                    href={`/zones/${zone.slug}`}
                    aria-label={`Serrurier à ${zone.name} — ${proximityLabel(zone.proximity).toLowerCase()}`}
                    onMouseEnter={() => setActiveSlug(zone.slug)}
                    onMouseLeave={() => setActiveSlug(null)}
                    onFocus={() => setActiveSlug(zone.slug)}
                    onBlur={() => setActiveSlug(null)}
                    className={`zone-chip ${isActive ? "zone-chip-active" : ""}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.55rem",
                      padding: "0.62rem 0.8rem",
                      background: isActive ? "var(--color-navy)" : "var(--color-paper)",
                      border: `1px solid ${isActive ? "var(--color-navy)" : "var(--color-hairline-dark)"}`,
                      borderRadius: 10,
                      transition:
                        "background 0.18s ease, border-color 0.18s ease, transform 0.18s ease, color 0.18s ease, box-shadow 0.18s ease",
                      color: isActive ? "var(--color-paper)" : "var(--color-ink)",
                      transform: isActive ? "translateX(3px)" : "translateX(0)",
                      boxShadow: isActive ? "0 4px 14px -6px rgba(13, 18, 38, 0.25)" : "none",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: zone.isBase ? "var(--color-brass)" : proximityColor(zone.proximity),
                        flexShrink: 0,
                        boxShadow: isActive ? `0 0 0 3px rgba(244,241,234,0.18)` : "none",
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        letterSpacing: "-0.005em",
                        flex: 1,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {zone.shortName ?? zone.name}
                      {zone.isBase && (
                        <span
                          style={{
                            marginLeft: 6,
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.55rem",
                            letterSpacing: "0.14em",
                            color: isActive ? "var(--color-brass)" : "var(--color-brass-deep)",
                            fontWeight: 700,
                          }}
                        >
                          BASE
                        </span>
                      )}
                    </span>
                    <span
                      aria-hidden="true"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.78rem",
                        color: isActive ? "rgba(244,241,234,0.7)" : "var(--color-steel)",
                        transition: "color 0.18s ease, transform 0.18s ease",
                        transform: isActive ? "translateX(2px)" : "translateX(0)",
                      }}
                    >
                      →
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Footer: legend + link */}
        <div
          style={{
            marginTop: "clamp(1.2rem, 2.5vw, 1.8rem)",
            display: "flex",
            justifyContent: "center",
            gap: "1.25rem",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.9rem",
              fontFamily: "var(--font-body)",
              fontSize: "0.62rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--color-steel)",
              fontWeight: 500,
            }}
          >
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem" }}>
              <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-green)" }} />
              Voisinage immédiat
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem" }}>
              <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-brass)" }} />
              Proche de Vernier
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem" }}>
              <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-steel)" }} />
              Reste du canton
            </span>
          </div>

          <span style={{ color: "var(--color-hairline-strong)" }}>·</span>

          <Link
            href="/zones"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.74rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--color-navy)",
              fontWeight: 600,
              borderBottom: "1.5px solid var(--color-brass)",
              paddingBottom: 3,
              transition: "color 0.2s ease",
            }}
          >
            Voir les 45 communes →
          </Link>
        </div>
      </div>

      <style>{`
        @media (min-width: 980px) {
          .zones-layout {
            grid-template-columns: 1.3fr 1fr !important;
            gap: 1.75rem !important;
          }
        }
        @media (max-width: 560px) {
          .zones-list { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
