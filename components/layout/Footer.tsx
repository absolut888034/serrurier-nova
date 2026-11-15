import Link from "next/link"
import { Logo } from "@/components/ui/Logo"
import { CONTACT } from "@/lib/schema"
import { ZONES } from "@/content/zones"

const SERVICES_LINKS = [
  { href: "/services/ouverture-de-porte", label: "Ouverture de porte" },
  { href: "/services/changement-de-serrure", label: "Changement de serrure" },
  { href: "/services/depannage-apres-effraction", label: "Après effraction" },
] as const

// Link every commune from the footer so each page exposes a crawl path to
// every zone page (internal discovery + link equity for local SEO).
const ZONES_LINKS = [
  ...[...ZONES]
    .sort((a, b) => a.order - b.order)
    .map((z) => ({ href: `/zones/${z.slug}`, label: z.shortName ?? z.name })),
  { href: "/zones", label: "Toutes les communes →" },
] as const

export function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-navy-deep)",
        color: "var(--color-silver)",
        paddingTop: "clamp(3rem, 6vw, 5rem)",
        paddingBottom: "2rem",
        fontSize: "0.92rem",
        borderTop: "1px solid var(--color-hairline)",
      }}
    >
      <div className="container">
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2.5rem",
            paddingBottom: "3rem",
            borderBottom: "1px solid var(--color-hairline)",
          }}
        >
          {/* Brand col */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.7rem" }}>
              <Logo size={52} />
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: "var(--color-paper)",
                  letterSpacing: "-0.01em",
                }}
              >
                Serrurier{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    fontVariationSettings: '"SOFT" 70',
                    color: "var(--color-brass)",
                  }}
                >
                  Nova
                </em>
              </span>
            </div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1rem",
                color: "var(--color-silver)",
                marginTop: "1.1rem",
                maxWidth: "30ch",
                lineHeight: 1.5,
              }}
            >
              Le serrurier{" "}
              <em
                style={{
                  fontStyle: "italic",
                  fontVariationSettings: '"SOFT" 70',
                  color: "var(--color-brass)",
                }}
              >
                de confiance
              </em>{" "}
              à Genève, depuis dix ans.
            </p>
          </div>

          {/* Contact col */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.68rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--color-silver-2)",
                marginBottom: "1.1rem",
                fontWeight: 600,
              }}
            >
              Contact
            </h4>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <li>
                <a
                  href={`tel:${CONTACT.phone}`}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontVariantNumeric: "tabular-nums",
                    color: "var(--color-paper)",
                    transition: "color 0.2s ease",
                  }}
                  className="footer-link"
                >
                  022 557 65 59
                </a>
              </li>
              <li style={{ display: "flex", flexDirection: "column", gap: "0.15rem" }}>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.68rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--color-silver-2)",
                    fontWeight: 500,
                  }}
                >
                  Ligne directe · WhatsApp
                </span>
                <a
                  href={`tel:${CONTACT.mobile}`}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontVariantNumeric: "tabular-nums",
                    color: "var(--color-silver)",
                    transition: "color 0.2s ease",
                  }}
                  className="footer-link"
                >
                  076 475 08 81
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  style={{ color: "var(--color-silver)", transition: "color 0.2s ease" }}
                  className="footer-link"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li style={{ color: "var(--color-silver)", lineHeight: 1.5 }}>
                Canton de Genève
                <br />
                24h/24 · 7j/7
              </li>
            </ul>
          </div>

          {/* Services col */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.68rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--color-silver-2)",
                marginBottom: "1.1rem",
                fontWeight: 600,
              }}
            >
              Services
            </h4>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.55rem" }}>
              {SERVICES_LINKS.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    style={{ color: "var(--color-silver)", transition: "color 0.2s ease" }}
                    className="footer-link"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones col */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.68rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--color-silver-2)",
                marginBottom: "1.1rem",
                fontWeight: 600,
              }}
            >
              Zones
            </h4>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.55rem" }}>
              {ZONES_LINKS.map((z) => (
                <li key={z.href}>
                  <Link
                    href={z.href}
                    style={{ color: "var(--color-silver)", transition: "color 0.2s ease" }}
                    className="footer-link"
                  >
                    {z.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: "2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.6rem 1rem",
            fontFamily: "var(--font-mono)",
            fontSize: "0.78rem",
            letterSpacing: "0.08em",
            color: "var(--color-silver-2)",
          }}
        >
          <span>© 2026 Serrurier Nova Genève</span>
          <span style={{ display: "inline-flex", gap: "0.4rem 1.2rem", flexWrap: "wrap" }}>
            <Link
              href="/mentions-legales"
              style={{ transition: "color 0.2s ease", padding: "0.6rem 0", display: "inline-flex", alignItems: "center", minHeight: 44 }}
              className="footer-link"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-de-confidentialite"
              style={{ transition: "color 0.2s ease", padding: "0.6rem 0", display: "inline-flex", alignItems: "center", minHeight: 44 }}
              className="footer-link"
            >
              Politique de confidentialité
            </Link>
          </span>
        </div>
      </div>

      <style>{`
        .footer-link:hover { color: var(--color-brass) !important; }
        @media (min-width: 640px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (min-width: 980px) {
          .footer-grid { grid-template-columns: 1.4fr repeat(3, 1fr) !important; }
        }
      `}</style>
    </footer>
  )
}
