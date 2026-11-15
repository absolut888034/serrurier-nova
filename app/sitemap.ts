import type { MetadataRoute } from "next"
import { SERVICES } from "@/content/services"
import { ZONES } from "@/content/zones"

const BASE_URL = "https://www.serruriernova.ch"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/zones`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/serrurier-urgence-24h`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE_URL}/locksmith`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/a-propos`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/mentions-legales`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/politique-de-confidentialite`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ]

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }))

  const zonePages: MetadataRoute.Sitemap = ZONES.map((z) => ({
    url: `${BASE_URL}/zones/${z.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }))

  // Top service × zone combos (programmatic SEO)
  const matrixCombos = [
    "ouverture-de-porte",
    "changement-de-serrure",
    "depannage-apres-effraction",
  ]
  const matrixPages: MetadataRoute.Sitemap = matrixCombos.flatMap((svc) =>
    ZONES.map((z) => ({
      url: `${BASE_URL}/services/${svc}-a-${z.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  )

  return [...staticPages, ...servicePages, ...zonePages, ...matrixPages]
}
