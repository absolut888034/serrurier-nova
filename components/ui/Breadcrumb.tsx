import Link from "next/link"

export interface BreadcrumbItem {
  name: string
  href?: string
}

export function Breadcrumb({
  items,
  tone = "light",
}: {
  items: BreadcrumbItem[]
  tone?: "light" | "dark"
}) {
  const textColor = tone === "dark" ? "var(--color-silver-2)" : "var(--color-steel)"
  const activeColor = tone === "dark" ? "var(--color-paper)" : "var(--color-ink)"
  const accent = "var(--color-brass)"

  return (
    <nav
      aria-label="Fil d'Ariane"
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "0.72rem",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: textColor,
        fontVariantNumeric: "tabular-nums",
      }}
    >
      <ol
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "inline-flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "0.55rem",
        }}
      >
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          return (
            <li
              key={`${item.name}-${i}`}
              style={{ display: "inline-flex", alignItems: "center", gap: "0.55rem" }}
            >
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  style={{
                    color: textColor,
                    transition: "color 0.2s ease",
                  }}
                  className="bc-link"
                >
                  {item.name}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  style={{ color: isLast ? activeColor : textColor, fontWeight: isLast ? 600 : 400 }}
                >
                  {item.name}
                </span>
              )}
              {!isLast && (
                <span aria-hidden="true" style={{ color: accent, opacity: 0.75 }}>
                  /
                </span>
              )}
            </li>
          )
        })}
      </ol>

      <style>{`
        .bc-link:hover { color: ${accent} !important; }
      `}</style>
    </nav>
  )
}
