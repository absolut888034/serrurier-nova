import data from "./zones-detail.json"
import { ZoneDetailSchema } from "./schema"
import { z } from "zod"

/**
 * Contenu enrichi pour chaque page de zone (commune).
 */

export interface ZoneQuartier {
  name: string
  note?: string
}

export interface ZoneFAQ {
  q: string
  a: string
}

export interface ZoneDetail {
  /** Phrase d'accroche du hero. */
  lead: string
  /** Paragraphes d'introduction. */
  intro: string[]
  /** Quartiers / lieux-dits typiques. */
  quartiers: ZoneQuartier[]
  /** Spécificités locales (type d'habitat, problématiques courantes). */
  specifics: { k: string; v: string }[]
  /** Questions fréquentes propres à la commune. */
  faqs: ZoneFAQ[]
  /** Phrase mise en avant ("le serrurier à [zone]"). */
  pitch: string
}

// Dans le JSON, une liste avec le slug de la commune en `id`.
export const ZONE_DETAILS: Record<string, ZoneDetail> = Object.fromEntries(
  z
    .array(ZoneDetailSchema)
    .parse(data)
    .map(({ id, ...detail }) => [id, detail]),
)
