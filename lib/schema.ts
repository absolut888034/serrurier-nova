/**
 * JSON-LD schema helpers for SEO.
 * Producers return objects that can be serialized inside <script type="application/ld+json">.
 */

const SITE_URL = "https://www.serruriernova.ch"
const BUSINESS_NAME = "Serrurier Nova Genève"
const PHONE = "+41225576559"
const PHONE_DISPLAY = "+41 22 557 65 59"
const MOBILE = "+41764750881"
const MOBILE_DISPLAY = "+41 76 475 08 81"
const EMAIL = "serruriernova@gmail.com"

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Locksmith"],
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS_NAME,
    alternateName: ["Nova Serrurerie", "Serrurier Nova"],
    image: `${SITE_URL}/images/logo.png`,
    logo: `${SITE_URL}/images/logo.png`,
    url: SITE_URL,
    telephone: PHONE,
    email: EMAIL,
    priceRange: "$$",
    currenciesAccepted: "CHF",
    paymentAccepted: "Cash, Credit Card, Debit Card, TWINT, Invoice",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Chemin De-Maisonneuve 12D",
      addressLocality: "Châtelaine",
      postalCode: "1219",
      addressRegion: "Genève",
      addressCountry: "CH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 46.2150,
      longitude: 6.0950,
    },
    hasMap: "https://www.google.com/maps?q=Chemin+De-Maisonneuve+12D+1219+Ch%C3%A2telaine",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: [
      { "@type": "City", name: "Genève" },
      { "@type": "City", name: "Vernier" },
      { "@type": "City", name: "Carouge" },
      { "@type": "City", name: "Lancy" },
      { "@type": "City", name: "Meyrin" },
      { "@type": "City", name: "Onex" },
      { "@type": "City", name: "Thônex" },
      { "@type": "City", name: "Chêne-Bougeries" },
      { "@type": "City", name: "Chêne-Bourg" },
      { "@type": "City", name: "Plan-les-Ouates" },
      { "@type": "City", name: "Le Grand-Saconnex" },
      { "@type": "City", name: "Versoix" },
      { "@type": "City", name: "Bernex" },
      { "@type": "AdministrativeArea", name: "Canton de Genève" },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: PHONE,
        contactType: "emergency",
        availableLanguage: ["French", "English"],
        areaServed: "CH",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      },
      {
        "@type": "ContactPoint",
        telephone: MOBILE,
        contactType: "customer service",
        availableLanguage: ["French", "English"],
        areaServed: "CH",
        contactOption: "TollFree",
      },
    ],
    knowsLanguage: ["fr", "en"],
    slogan: "Le serrurier de confiance à Genève, 24h/24",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "13",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [
      // À compléter : URL Google Business Profile, Facebook, LinkedIn
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Prestations de serrurerie",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ouverture de porte" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Changement de serrure" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dépannage après effraction" } },
      ],
    },
  }
}

export interface FAQItem {
  q: string
  a: string
}

export function faqSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.a,
      },
    })),
  }
}

export interface ReviewItem {
  author: string
  body: string
  rating: number
  datePublished: string // ISO yyyy-mm-dd
  location?: string
}

export function reviewListSchema(reviews: ReviewItem[]) {
  return reviews.map((r) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "LocalBusiness",
      name: BUSINESS_NAME,
    },
    author: { "@type": "Person", name: r.author },
    reviewBody: r.body,
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(r.rating),
      bestRating: "5",
    },
    datePublished: r.datePublished,
  }))
}

export interface ServiceSchemaInput {
  name: string
  slug: string
  description: string
  image?: string
}

export function serviceSchema(s: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.description,
    serviceType: s.name,
    url: `${SITE_URL}/services/${s.slug}`,
    image: s.image ? `${SITE_URL}${s.image}` : undefined,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Canton de Genève",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: PHONE,
      availableLanguage: ["fr"],
    },
  }
}

export interface ArticleSchemaInput {
  headline: string
  description: string
  slug: string
  datePublished: string
  dateModified?: string
  image?: string
  category?: string
}

export function articleSchema(a: ArticleSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.headline,
    description: a.description,
    datePublished: a.datePublished,
    dateModified: a.dateModified ?? a.datePublished,
    image: a.image ? `${SITE_URL}${a.image}` : `${SITE_URL}/images/hero-locksmith.png`,
    articleSection: a.category,
    author: {
      "@type": "Organization",
      name: BUSINESS_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#business`,
      name: BUSINESS_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo.png`,
      },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${a.slug}`,
    inLanguage: "fr-CH",
  }
}

export interface BreadcrumbCrumb {
  name: string
  url: string
}

export function breadcrumbSchema(crumbs: BreadcrumbCrumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url.startsWith("http") ? c.url : `${SITE_URL}${c.url}`,
    })),
  }
}

export interface ServiceListEntry {
  name: string
  slug: string
  description: string
}

export function serviceListSchema(services: ServiceListEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Prestations · Serrurier Nova Genève",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/services/${s.slug}`,
      name: s.name,
      description: s.description,
    })),
  }
}

export const CONTACT = {
  phone: PHONE,
  phoneDisplay: PHONE_DISPLAY,
  mobile: MOBILE,
  mobileDisplay: MOBILE_DISPLAY,
  email: EMAIL,
}
