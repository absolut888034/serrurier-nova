import data from "./services-detail.json"
import { ServiceDetailSchema } from "./schema"
import { z } from "zod"

/**
 * Contenu enrichi pour chaque page de service.
 * Les champs de base (slug, titre, image…) restent dans `services.ts`.
 */

export interface ServiceSituation {
  k: string
  v: string
}

export interface ServiceIncluded {
  k: string
  v: string
}

export interface ServiceFAQ {
  q: string
  a: string
}

export interface ServiceMeta {
  delay: string
  guarantee: string
  payment: string
}

export interface ServiceDetail {
  /** Phrase d'accroche (hero subtitle, ~1 phrase). */
  lead: string
  /** Long intro après le hero (2–3 paragraphes, prose). */
  intro: string[]
  /** Cas d'usage typiques. */
  situations: ServiceSituation[]
  /** Ce que la prestation inclut. */
  includes: ServiceIncluded[]
  /** Données factuelles affichées dans le hero. */
  meta: ServiceMeta
  /** Questions fréquentes spécifiques à la prestation. */
  faqs: ServiceFAQ[]
  /** Phrase finale dans le CTA banner. */
  ctaTitle: string
  ctaAccent: string
}

// Dans le JSON, une liste avec le slug du service en `id`.
export const SERVICE_DETAILS: Record<string, ServiceDetail> = Object.fromEntries(
  z
    .array(ServiceDetailSchema)
    .parse(data)
    .map(({ id, ...detail }) => [id, detail]),
)
