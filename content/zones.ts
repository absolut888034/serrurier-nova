/**
 * Proximity tier — used internally for ordering and color hint on the map.
 * NOT a time promise: we never display minute estimates publicly to avoid
 * making commitments the artisan can't reliably keep (traffic, current job).
 */
export type Proximity = "immediate" | "near" | "canton"

export interface Zone {
  slug: string
  name: string
  shortName?: string
  /** Geographic proximity tier from Vernier base. Used for sort + map color. */
  proximity: Proximity
  /** Internal sort weight (lower = closer to base). Never shown to the public. */
  order: number
  isBase?: boolean
  /** lat/lng aprox. para colocar los pins sobre el SVG del cantón */
  lat: number
  lng: number
}

/** Zonas top 13 ordenadas por proximidad creciente. */
export const ZONES: Zone[] = [
  { slug: "vernier",         name: "Vernier",            proximity: "immediate", order: 1,  isBase: true, lat: 46.2150, lng: 6.0950 },
  { slug: "grand-saconnex",  name: "Le Grand-Saconnex",  shortName: "Grand-Saconnex", proximity: "immediate", order: 2,  lat: 46.2275, lng: 6.1220 },
  { slug: "meyrin",          name: "Meyrin",             proximity: "immediate", order: 3,  lat: 46.2330, lng: 6.0780 },
  { slug: "lancy",           name: "Lancy",              proximity: "near",      order: 4,  lat: 46.1830, lng: 6.1200 },
  { slug: "geneve",          name: "Genève centre",      shortName: "Genève",    proximity: "near",      order: 5,  lat: 46.2044, lng: 6.1432 },
  { slug: "onex",            name: "Onex",               proximity: "near",      order: 6,  lat: 46.1830, lng: 6.1020 },
  { slug: "versoix",         name: "Versoix",            proximity: "near",      order: 7,  lat: 46.2840, lng: 6.1620 },
  { slug: "carouge",         name: "Carouge",            proximity: "near",      order: 8,  lat: 46.1810, lng: 6.1400 },
  { slug: "plan-les-ouates", name: "Plan-les-Ouates",    proximity: "canton",    order: 9,  lat: 46.1620, lng: 6.1330 },
  { slug: "chene-bougeries", name: "Chêne-Bougeries",    proximity: "canton",    order: 10, lat: 46.1980, lng: 6.1900 },
  { slug: "thonex",          name: "Thônex",             proximity: "canton",    order: 11, lat: 46.1970, lng: 6.2010 },
  { slug: "chene-bourg",     name: "Chêne-Bourg",        proximity: "canton",    order: 12, lat: 46.1990, lng: 6.2090 },
  { slug: "bernex",          name: "Bernex",             proximity: "canton",    order: 13, lat: 46.1740, lng: 6.0750 },
  { slug: "veyrier",         name: "Veyrier",            proximity: "canton",    order: 14, lat: 46.1660, lng: 6.1830 },
  { slug: "troinex",         name: "Troinex",            proximity: "canton",    order: 15, lat: 46.1550, lng: 6.1540 },
]

/** Étiquette publique non-engageante par tier de proximité. */
export function proximityLabel(p: Proximity): string {
  if (p === "immediate") return "Voisinage immédiat"
  if (p === "near") return "Proche de Vernier"
  return "Canton de Genève"
}

/** Bounds del bounding box del mapa (un poco más anchos que las comunas para dar aire) */
export const MAP_BOUNDS = {
  minLat: 46.135,
  maxLat: 46.305,
  minLng: 5.97,
  maxLng: 6.27,
}

/** lng → porcentaje horizontal (0 = izquierda) */
export function lngToPercent(lng: number): number {
  return ((lng - MAP_BOUNDS.minLng) / (MAP_BOUNDS.maxLng - MAP_BOUNDS.minLng)) * 100
}

/** lat → porcentaje vertical (0 = arriba; lat más alta = más arriba) */
export function latToPercent(lat: number): number {
  return ((MAP_BOUNDS.maxLat - lat) / (MAP_BOUNDS.maxLat - MAP_BOUNDS.minLat)) * 100
}

/** Color del dot según proximidad geográfica (no es un compromiso de tiempo). */
export function proximityColor(p: Proximity): string {
  if (p === "immediate") return "var(--color-green)"
  if (p === "near") return "var(--color-brass)"
  return "var(--color-steel)"
}
