"use client"

import dynamic from "next/dynamic"

interface ZoneMapProps {
  activeSlug: string | null
  onActiveChange: (slug: string | null) => void
}

const placeholder = (
  <div
    aria-label="Chargement de la carte"
    style={{
      width: "100%",
      aspectRatio: "16 / 11",
      background: "var(--color-paper)",
      border: "1px solid var(--color-hairline-dark)",
      borderRadius: 14,
    }}
  />
)

export const ZoneMap = dynamic<ZoneMapProps>(
  () => import("./ZoneMapClient").then((m) => m.ZoneMapClient),
  {
    ssr: false,
    loading: () => placeholder,
  },
)
