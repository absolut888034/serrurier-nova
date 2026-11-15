import type { Metadata } from "next"
import { Fraunces, Geist_Mono, Inter_Tight } from "next/font/google"
import "./globals.css"
import { localBusinessSchema } from "@/lib/schema"

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT"],
  display: "swap",
})

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.serruriernova.ch"),
  title: {
    default: "Serrurier Genève · 24h/24 · 7j/7 — Nova ★ 5,0",
    template: "%s · Serrurier Nova Genève",
  },
  description:
    "Serrurier à Genève, 24h/24 et 7j/7 dans tout le canton. ★ 5,0 sur Google · Devis annoncé avant tout déplacement · ☎ 022 557 65 59.",
  keywords: [
    "serrurier Genève",
    "serrurier urgence Genève",
    "serrurier 24h/24",
    "ouverture de porte Genève",
    "changement de serrure Genève",
    "serrurier Carouge",
    "serrurier Meyrin",
    "serrurier Vernier",
    "locksmith Geneva",
    "dépannage serrurerie",
  ],
  authors: [{ name: "Serrurier Nova Genève" }],
  creator: "Serrurier Nova Genève",
  publisher: "Serrurier Nova Genève",
  openGraph: {
    type: "website",
    locale: "fr_CH",
    siteName: "Serrurier Nova Genève",
    title: "Serrurier Genève · 24h/24 · 7j/7",
    description:
      "Serrurier à Genève, 24h/24 et 7j/7 dans tout le canton. ★ 5,0 sur Google. Devis annoncé avant déplacement.",
    images: [
      {
        url: "/images/hero-locksmith.png",
        width: 1920,
        height: 1080,
        alt: "Serrurier Nova Genève — Joignable 24h/24",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Serrurier Genève · 24h/24 — Nova",
    description: "Serrurier joignable directement 24h/24 dans tout le canton. ★ 5,0 sur Google.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      "fr-CH": "/",
      "en": "/locksmith",
    },
  },
  category: "Locksmith",
  classification: "Local Business",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr-CH" className={`${fraunces.variable} ${interTight.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        {children}
      </body>
    </html>
  )
}
