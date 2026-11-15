import Link from "next/link"
import { Logo } from "@/components/ui/Logo"
import { LiveDot } from "@/components/ui/LiveDot"
import { MobileMenu } from "@/components/layout/MobileMenu"

const NAV_ITEMS = [
  { href: "/services", label: "Services" },
  { href: "/zones", label: "Zones" },
  { href: "/serrurier-urgence-24h", label: "Urgence" },
  { href: "/blog", label: "Blog" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
] as const

export function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(252, 252, 251, 0.82)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--color-hairline-dark)",
      }}
    >
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
          alignItems: "center",
          height: 76,
          gap: "1rem",
        }}
      >
        {/* Brand */}
        <Link
          href="/"
          aria-label="Serrurier Nova Genève — Accueil"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.7rem",
            lineHeight: 1,
          }}
        >
          <Logo size={48} priority />
          <span
            className="brand-text"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.28rem",
              fontWeight: 600,
              color: "var(--color-navy)",
              letterSpacing: "-0.015em",
              whiteSpace: "nowrap",
            }}
          >
            Serrurier{" "}
            <em
              style={{
                fontStyle: "italic",
                fontVariationSettings: '"SOFT" 70',
                color: "var(--color-brass-deep)",
              }}
            >
              Nova
            </em>
          </span>
        </Link>

        {/* Nav pill — desktop only */}
        <nav
          className="nav-pill"
          aria-label="Navigation principale"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.15rem",
            padding: "0.35rem",
            background: "rgba(252, 252, 251, 0.58)",
            border: "1px solid rgba(13, 18, 38, 0.08)",
            borderRadius: 999,
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            justifySelf: "center",
            boxShadow:
              "0 1px 0 rgba(255, 255, 255, 0.6) inset, 0 2px 14px -8px rgba(13, 18, 38, 0.18)",
          }}
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-pill-item"
              style={{
                padding: "0.7rem 1.1rem",
                borderRadius: 999,
                fontSize: "0.9rem",
                fontWeight: 500,
                color: "var(--color-ink-2)",
                transition: "background 0.2s ease, color 0.2s ease",
                lineHeight: 1,
                minHeight: 44,
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right group: mobile menu trigger + phone */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.6rem",
            justifySelf: "end",
          }}
        >
          <MobileMenu items={NAV_ITEMS} />

          <a
            href="tel:+41225576559"
            className="phone-pill"
            aria-label="Appeler Serrurier Nova maintenant au 022 557 65 59"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.7rem",
              padding: "0.7rem 1.1rem",
              background: "rgba(252, 252, 251, 0.58)",
              border: "1px solid rgba(13, 18, 38, 0.10)",
              borderRadius: 999,
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              transition:
                "background 0.25s ease, border-color 0.25s ease, transform 0.2s ease",
              boxShadow:
                "0 1px 0 rgba(255, 255, 255, 0.6) inset, 0 2px 14px -8px rgba(13, 18, 38, 0.18)",
            }}
          >
            <LiveDot variant="red" size={8} />
            <svg
              className="phone-pill-icon"
              aria-hidden="true"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                display: "none",
                color: "var(--color-navy)",
                transition: "color 0.25s ease",
              }}
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
            </svg>
            <span
              className="phone-pill-number"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "1rem",
                fontWeight: 600,
                letterSpacing: "0.01em",
                color: "var(--color-navy)",
                transition: "color 0.25s ease",
                fontVariantNumeric: "tabular-nums",
                whiteSpace: "nowrap",
              }}
            >
              022 557 65 59
            </span>
          </a>
        </div>
      </div>

      <style>{`
        .nav-pill-item:hover {
          background: rgba(28, 37, 72, 0.08);
          color: var(--color-navy);
        }
        .phone-pill:hover {
          background: var(--color-vermillion);
          border-color: var(--color-vermillion);
          transform: translateY(-1px);
        }
        .phone-pill:hover .phone-pill-number { color: var(--color-paper); }
        .phone-pill:hover .phone-pill-icon { color: var(--color-paper) !important; }

        @media (max-width: 1100px) {
          .nav-pill { display: none !important; }
        }
        @media (max-width: 560px) {
          .brand-text { display: none !important; }
          .phone-pill .phone-pill-number { display: none !important; }
          .phone-pill .phone-pill-icon { display: inline-flex !important; }
          .phone-pill { padding: 0 !important; width: 44px; height: 44px; min-width: 44px; justify-content: center; gap: 0 !important; }
          .phone-pill > :not(.phone-pill-icon) { display: none !important; }
        }
      `}</style>
    </header>
  )
}
