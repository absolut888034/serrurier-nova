import { z } from "zod"

/**
 * Contrat de contenu du site.
 *
 * Les textes, avis, FAQ, services et articles sont dans `content/<collection>.json` et validés ici
 * avec Zod : `content/*.ts` les lit, les vérifie et les expose aux pages (le design ne change pas).
 * Le build écrit `content/schema.generated.json` à partir de ce fichier (voir next.config.ts). Le panneau
 * NexaLab ne lit que ce JSON pour savoir ce que son assistant peut modifier et pour valider chaque
 * changement avant de le proposer au client.
 *
 * Règle : uniquement du contenu. Aucun style, composant ni réglage ici.
 */

const id = z.string().regex(/^[a-z0-9][a-z0-9-]{0,60}$/)
const image = z.string().regex(/^\/images\/[a-z0-9][a-z0-9._-]{0,80}\.(webp|jpg|jpeg|png|avif)$/)
const isoDay = z.string().regex(/^\d{4}-\d{2}-\d{2}$/)
const text = (max: number) => z.string().min(1).max(max)
const kv = z.object({ k: text(120), v: text(600) }).strict()
const qa = z.object({ q: text(220), a: text(2000) }).strict()

export const ReviewSchema = z
  .object({
    id,
    author: text(80),
    body: text(1200),
    rating: z.number().int().min(1).max(5),
    /** Commune, seulement si l'auteur l'a indiquée. */
    location: z.string().max(80).optional(),
    /** Affichage humain : « Mars 2026 ». */
    date: text(40),
    isoDate: isoDay,
  })
  .strict()

export const FaqSchema = z.object({ id, q: text(220), a: text(2000) }).strict()

export const MethodStepSchema = z
  .object({ id, num: z.string().regex(/^\d{2}$/), title: text(80), body: text(600), image, imageAlt: text(200) })
  .strict()

export const ServiceSchema = z
  .object({
    /** Slug de la page : /services/<id>. */
    id,
    title: text(80),
    shortTitle: text(40),
    shortSub: text(40),
    tag: z.enum(["Urgence", "Service"]),
    description: text(500),
    image,
  })
  .strict()

export const ServiceDetailSchema = z
  .object({
    /** Slug du service (même id que dans services.json). */
    id,
    lead: text(300),
    intro: z.array(text(1500)).min(1).max(6),
    situations: z.array(kv).max(12),
    includes: z.array(kv).max(12),
    meta: z.object({ delay: text(120), guarantee: text(120), payment: text(160) }).strict(),
    faqs: z.array(qa).max(12),
    ctaTitle: text(120),
    ctaAccent: text(120),
  })
  .strict()

export const ZoneDetailSchema = z
  .object({
    /** Slug de la commune (même id que dans zones.ts). */
    id,
    lead: text(300),
    intro: z.array(text(1500)).min(1).max(6),
    quartiers: z.array(z.object({ name: text(80), note: z.string().max(200).optional() }).strict()).max(30),
    specifics: z.array(kv).max(12),
    faqs: z.array(qa).max(12),
    pitch: text(200),
  })
  .strict()

export const BLOG_CATEGORIES = ["Sécurité", "Urgence", "Conseil", "Choix matériel"] as const

export const BlogPostSchema = z
  .object({
    /** Slug de l'article : /blog/<id>. */
    id,
    title: text(120),
    excerpt: text(200),
    date: isoDay,
    dateDisplay: text(40),
    category: z.enum(BLOG_CATEGORIES),
    readMinutes: z.number().int().min(1).max(60),
    image: image.optional(),
    body: z
      .array(
        z
          .object({
            type: z.enum(["p", "h2", "h3", "ul", "ol", "callout", "quote"]),
            content: z.union([text(4000), z.array(text(1000)).min(1).max(20)]),
          })
          .strict(),
      )
      .min(1)
      .max(80),
    faqs: z.array(qa).max(12).optional(),
    related: z.array(id).max(6).optional(),
  })
  .strict()

/** Ce que le panneau NexaLab peut modifier, et comment le présenter à son assistant. */
export const COLLECTIONS = {
  avis: { label: "Avis clients", description: "Avis Google affichés sur l'accueil. Ne jamais inventer d'avis : uniquement ceux que donne le client, tels quels.", kind: "list", schema: ReviewSchema },
  faq: { label: "Questions fréquentes", description: "FAQ de l'accueil.", kind: "list", schema: FaqSchema },
  methode: { label: "Notre méthode", description: "Les quatre étapes d'une intervention, sur l'accueil.", kind: "list", schema: MethodStepSchema, imageFields: ["image"], allowAdd: false, allowRemove: false },
  services: { label: "Services", description: "Les trois services (cartes et en-tête de leur page). Le slug (id) est l'adresse de la page.", kind: "list", schema: ServiceSchema, imageFields: ["image"], allowAdd: false, allowRemove: false },
  "services-detail": { label: "Pages des services", description: "Texte détaillé de chaque page de service, même id que dans services.", kind: "list", schema: ServiceDetailSchema, allowAdd: false, allowRemove: false },
  "zones-detail": { label: "Pages des communes", description: "Texte de chaque page de commune desservie.", kind: "list", schema: ZoneDetailSchema, allowAdd: false, allowRemove: false },
  blog: { label: "Articles du blog", description: "Articles du blog. L'id est l'adresse de l'article (/blog/<id>) : en minuscules avec des tirets.", kind: "list", schema: BlogPostSchema, imageFields: ["image"] },
} as const

/** Contenu de content/schema.generated.json, tel que le lit le panneau NexaLab (lib/ai/contract.ts). */
export function siteSchemaJson() {
  return {
    version: 1,
    collections: Object.fromEntries(
      Object.entries(COLLECTIONS).map(([name, { schema, ...def }]) => [name, { ...def, schema: z.toJSONSchema(schema) }]),
    ),
  }
}
