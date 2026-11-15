"use client"

import { useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { ZONES, proximityLabel, type Proximity, type Zone } from "@/content/zones"

interface Props {
  activeSlug: string | null
  onActiveChange: (slug: string | null) => void
}

function proximityColorHex(p: Proximity): string {
  if (p === "immediate") return "#5f8a3d"
  if (p === "near") return "#c9a24a"
  return "#5e6680"
}

function makeIcon(zone: Zone, isActive: boolean): L.DivIcon {
  const color = zone.isBase ? "#c9a24a" : proximityColorHex(zone.proximity)
  const size = zone.isBase ? 16 : isActive ? 16 : 11

  if (zone.isBase) {
    return L.divIcon({
      className: "zone-marker",
      html: `
        <span class="zone-marker-base" aria-hidden="true">
          <span class="zone-marker-halo" style="background:${color};"></span>
          <span class="zone-marker-dot" style="background:${color};box-shadow:0 2px 10px rgba(201,162,74,0.55);width:16px;height:16px;"></span>
        </span>
      `,
      iconSize: [size, size],
      iconAnchor: [size / 2, size / 2],
    })
  }

  return L.divIcon({
    className: "zone-marker",
    html: `
      <span class="zone-marker-dot${isActive ? " zone-marker-active" : ""}"
            style="background:${color};box-shadow:0 2px 8px ${color}55;width:${size}px;height:${size}px;"></span>
    `,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  })
}

const CENTER: [number, number] = [46.205, 6.13]
const BOUNDS: [[number, number], [number, number]] = [
  [46.10, 5.92],
  [46.34, 6.34],
]

export function ZoneMapClient({ activeSlug, onActiveChange }: Props) {
  const router = useRouter()
  const markerRefs = useRef<Record<string, L.Marker | null>>({})

  // Open/close tooltips when the active slug changes
  useEffect(() => {
    Object.entries(markerRefs.current).forEach(([slug, marker]) => {
      if (!marker) return
      const zone = ZONES.find((z) => z.slug === slug)
      if (!zone) return
      if (slug === activeSlug || zone.isBase) {
        marker.openTooltip()
      } else {
        marker.closeTooltip()
      }
    })
  }, [activeSlug])

  return (
    <div
      className="zone-map-wrap"
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "16 / 11",
        borderRadius: 14,
        overflow: "hidden",
        border: "1px solid var(--color-hairline-dark)",
        boxShadow: "0 1px 0 rgba(255, 255, 255, 0.6) inset",
      }}
    >
      <MapContainer
        center={CENTER}
        zoom={11}
        minZoom={10}
        maxZoom={14}
        scrollWheelZoom={false}
        zoomControl={false}
        attributionControl={false}
        maxBounds={BOUNDS}
        maxBoundsViscosity={0.95}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
          subdomains={["a", "b", "c", "d"]}
        />

        {ZONES.map((zone) => (
          <Marker
            key={zone.slug}
            position={[zone.lat, zone.lng]}
            icon={makeIcon(zone, zone.slug === activeSlug)}
            ref={(ref) => {
              markerRefs.current[zone.slug] = ref ?? null
            }}
            eventHandlers={{
              click: () => router.push(`/zones/${zone.slug}`),
              mouseover: () => onActiveChange(zone.slug),
              mouseout: () => onActiveChange(null),
            }}
          >
            <Tooltip
              permanent={zone.isBase}
              direction={zone.isBase ? "bottom" : "top"}
              offset={[0, zone.isBase ? 11 : -10]}
              className={`zone-tooltip ${zone.isBase ? "zone-tooltip-base" : ""}`}
            >
              <span style={{ fontWeight: 600 }}>{zone.shortName ?? zone.name}</span>
              {zone.isBase && (
                <span
                  style={{
                    marginLeft: 6,
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.55rem",
                    letterSpacing: "0.14em",
                    color: "var(--color-brass)",
                    fontWeight: 700,
                  }}
                >
                  BASE
                </span>
              )}
              {!zone.isBase && (
                <span
                  style={{
                    marginLeft: 6,
                    fontFamily: "var(--font-body)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--color-steel)",
                    fontWeight: 500,
                  }}
                >
                  · {proximityLabel(zone.proximity)}
                </span>
              )}
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>

      {/* Attribution corner */}
      <div
        style={{
          position: "absolute",
          bottom: 6,
          right: 8,
          zIndex: 500,
          fontFamily: "var(--font-mono)",
          fontSize: "0.55rem",
          letterSpacing: "0.06em",
          color: "var(--color-steel)",
          background: "rgba(244, 241, 234, 0.78)",
          padding: "0.18rem 0.45rem",
          borderRadius: 2,
        }}
      >
        © OpenStreetMap · CARTO
      </div>

      <style>{`
        @keyframes zone-pulse {
          0%   { transform: scale(1);   opacity: 0.45; }
          70%  { transform: scale(2.8); opacity: 0; }
          100% { transform: scale(2.8); opacity: 0; }
        }

        .zone-map-wrap .leaflet-container {
          background: var(--color-paper-2);
          font-family: var(--font-body);
          outline: none;
        }
        .zone-map-wrap .leaflet-tile-pane {
          filter: sepia(8%) saturate(82%) brightness(1.02) contrast(0.97);
        }
        .zone-map-wrap .leaflet-marker-icon { cursor: pointer; }

        .zone-marker-dot {
          display: block;
          border-radius: 50%;
          border: 2px solid var(--color-paper);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .zone-marker-active {
          transform: scale(1.25);
          box-shadow: 0 0 0 3px rgba(28, 37, 72, 0.18), 0 4px 12px rgba(13, 18, 38, 0.25) !important;
        }
        .zone-marker-base {
          display: block;
          position: relative;
          width: 16px;
          height: 16px;
        }
        .zone-marker-base .zone-marker-dot { position: absolute; inset: 0; z-index: 2; }
        .zone-marker-halo {
          position: absolute;
          inset: 0;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          opacity: 0.45;
          animation: zone-pulse 2.2s ease-out infinite;
          z-index: 1;
        }

        .zone-map-wrap .leaflet-tooltip {
          background: rgba(244, 241, 234, 0.96) !important;
          border: 1px solid var(--color-hairline-dark) !important;
          border-radius: 4px !important;
          color: var(--color-ink) !important;
          font-family: var(--font-body) !important;
          font-size: 0.72rem !important;
          font-weight: 500 !important;
          padding: 0.28rem 0.55rem !important;
          box-shadow: 0 4px 14px rgba(13, 18, 38, 0.12) !important;
          white-space: nowrap;
        }
        .zone-map-wrap .leaflet-tooltip::before { display: none !important; }

        .zone-map-wrap .leaflet-tooltip.zone-tooltip-base {
          background: var(--color-navy) !important;
          color: var(--color-paper) !important;
          border-color: var(--color-navy) !important;
        }
        .zone-map-wrap .leaflet-control-zoom { display: none; }
      `}</style>
    </div>
  )
}
