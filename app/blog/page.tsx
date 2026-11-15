import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { StatusBar } from "@/components/layout/StatusBar"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Breadcrumb } from "@/components/ui/Breadcrumb"
import { FinalCTA } from "@/components/sections/FinalCTA"

import { BLOG_POSTS } from "@/content/blog"
import { breadcrumbSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Blog · Conseils serrurerie & sécurité à Genève",
  description:
    "Articles pratiques sur la serrurerie, la sécurité résidentielle et le bon réflexe en cas d'urgence à Genève. Par un artisan local, sans jargon.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog · Serrurier Nova Genève",
    description:
      "Conseils pratiques sur la serrurerie et la sécurité résidentielle à Genève.",
    type: "website",
    locale: "fr_CH",
  },
}

export default function BlogHubPage() {
  const sorted = [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1))
  const [featured, ...rest] = sorted

  return (
    <>
      <StatusBar />
      <Header />

      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              breadcrumbSchema([
                { name: "Accueil", url: "/" },
                { name: "Blog", url: "/blog" },
              ]),
            ),
          }}
        />

        {/* HERO */}
        <section
          style={{
            background: "var(--color-navy-3)",
            color: "var(--color-silver)",
            position: "relative",
            overflow: "hidden",
            paddingTop: "clamp(2.5rem, 4.5vw, 4rem)",
            paddingBottom: "clamp(3rem, 5vw, 4rem)",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 55% 60% at 85% 15%, rgba(201, 162, 74, 0.12), transparent 65%)",
              pointerEvents: "none",
            }}
          />

          <div className="container" style={{ position: "relative" }}>
            <Breadcrumb tone="dark" items={[{ name: "Accueil", href: "/" }, { name: "Blog" }]} />

            <div style={{ marginTop: "clamp(1.6rem, 3vw, 2.4rem)", maxWidth: "70ch" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.9rem",
                  color: "var(--color-silver-2)",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  marginBottom: "1.1rem",
                }}
              >
                <span aria-hidden="true" style={{ width: 28, height: 1, background: "var(--color-brass)", opacity: 0.85 }} />
                <span>Blog · {BLOG_POSTS.length} articles</span>
              </div>

              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: "clamp(2.1rem, 5vw, 3.5rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                  color: "var(--color-paper)",
                  margin: 0,
                  maxWidth: "20ch",
                }}
              >
                Le serrurier qui{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    fontVariationSettings: '"SOFT" 70',
                    fontWeight: 400,
                    color: "var(--color-brass)",
                  }}
                >
                  prend le temps d'expliquer.
                </em>
              </h1>

              <p
                style={{
                  marginTop: "1.2rem",
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(1rem, 1.4vw, 1.1rem)",
                  color: "var(--color-silver)",
                  lineHeight: 1.6,
                  maxWidth: "60ch",
                }}
              >
                Conseils pratiques sur la serrurerie, la sécurité résidentielle et les bons
                réflexes en cas d'urgence à Genève. Écrits par un artisan, pour des Genevois.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURED */}
        <section
          style={{
            background: "var(--color-paper)",
            paddingTop: "clamp(3rem, 5vw, 4rem)",
            paddingBottom: "clamp(2rem, 3.5vw, 3rem)",
            borderTop: "1px solid var(--color-hairline-dark)",
          }}
        >
          <div className="container">
            <Link
              href={`/blog/${featured.slug}`}
              className="blog-featured"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "1.8rem",
                padding: "0",
                background: "var(--color-paper)",
                border: "1px solid var(--color-hairline-dark)",
                borderRadius: 14,
                overflow: "hidden",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              {featured.image && (
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "16 / 10",
                    background: "var(--color-navy-deep)",
                    overflow: "hidden",
                  }}
                  className="blog-featured-img-wrap"
                >
                  <Image
                    src={featured.image}
                    alt={`${featured.title} — Article ${featured.category} par Serrurier Nova Genève`}
                    fill
                    sizes="(min-width: 980px) 60vw, 100vw"
                    style={{ objectFit: "cover" }}
                    className="blog-featured-img"
                  />
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(6,9,20,0) 60%, rgba(6,9,20,0.5) 100%)",
                    }}
                  />
                </div>
              )}
              <div
                style={{
                  padding: "1.6rem 1.8rem 1.8rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.9rem",
                  justifyContent: "center",
                }}
              >
                <div style={{ display: "inline-flex", gap: "0.7rem", alignItems: "center" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.62rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--color-paper)",
                      background: "var(--color-vermillion)",
                      padding: "0.4rem 0.7rem",
                      borderRadius: 4,
                      fontWeight: 700,
                    }}
                  >
                    À la une
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--color-steel)",
                    }}
                  >
                    {featured.category} · {featured.readMinutes} min · {featured.dateDisplay}
                  </span>
                </div>

                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    fontSize: "clamp(1.55rem, 3.2vw, 2.2rem)",
                    letterSpacing: "-0.022em",
                    lineHeight: 1.1,
                    color: "var(--color-ink)",
                    margin: 0,
                    maxWidth: "26ch",
                  }}
                >
                  {featured.title}
                </h2>

                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.97rem",
                    color: "var(--color-ink-2)",
                    lineHeight: 1.6,
                    margin: 0,
                    maxWidth: "60ch",
                  }}
                >
                  {featured.excerpt}
                </p>

                <span
                  style={{
                    marginTop: "0.3rem",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.78rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--color-navy)",
                    fontWeight: 600,
                  }}
                  className="blog-featured-cta"
                >
                  Lire l'article →
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* GRID */}
        <section
          style={{
            background: "var(--color-paper-2)",
            paddingTop: "clamp(2.5rem, 4vw, 3.5rem)",
            paddingBottom: "clamp(3rem, 5vw, 4rem)",
            borderTop: "1px solid var(--color-hairline-dark)",
          }}
        >
          <div className="container">
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(1.45rem, 2.6vw, 1.9rem)",
                letterSpacing: "-0.022em",
                color: "var(--color-ink)",
                margin: "0 0 1.6rem",
              }}
            >
              Tous les articles
            </h2>

            <ul
              className="blog-grid"
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "1.2rem",
              }}
            >
              {rest.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="blog-card"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      background: "var(--color-paper)",
                      border: "1px solid var(--color-hairline-dark)",
                      borderRadius: 12,
                      overflow: "hidden",
                      transition: "transform 0.3s ease, border-color 0.2s ease",
                      height: "100%",
                    }}
                  >
                    {post.image && (
                      <div
                        style={{
                          position: "relative",
                          aspectRatio: "4 / 3",
                          background: "var(--color-navy-deep)",
                          overflow: "hidden",
                        }}
                      >
                        <Image
                          src={post.image}
                          alt={`${post.title} — ${post.category} · Blog Serrurier Nova Genève`}
                          fill
                          sizes="(min-width: 720px) 33vw, 100vw"
                          style={{ objectFit: "cover" }}
                          className="blog-card-img"
                        />
                      </div>
                    )}
                    <div
                      style={{
                        padding: "1.3rem 1.4rem 1.5rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.7rem",
                        flex: 1,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.66rem",
                          letterSpacing: "0.16em",
                          textTransform: "uppercase",
                          color: "var(--color-brass-deep)",
                          fontWeight: 600,
                        }}
                      >
                        — {post.category} · {post.readMinutes} min
                      </span>
                      <h3
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.18rem",
                          fontWeight: 600,
                          letterSpacing: "-0.015em",
                          lineHeight: 1.2,
                          color: "var(--color-ink)",
                          margin: 0,
                        }}
                      >
                        {post.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.9rem",
                          color: "var(--color-ink-2)",
                          lineHeight: 1.55,
                          margin: 0,
                          flex: 1,
                        }}
                      >
                        {post.excerpt}
                      </p>
                      <span
                        style={{
                          marginTop: "0.3rem",
                          fontFamily: "var(--font-body)",
                          fontSize: "0.74rem",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "var(--color-navy)",
                          fontWeight: 600,
                        }}
                      >
                        Lire →
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <FinalCTA />
      </main>

      <Footer />

      <style>{`
        @media (min-width: 880px) {
          .blog-featured {
            grid-template-columns: 1.2fr 1fr !important;
            align-items: stretch !important;
          }
        }
        @media (min-width: 720px) {
          .blog-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 1.4rem !important; }
        }
        @media (min-width: 1080px) {
          .blog-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        .blog-featured:hover {
          transform: translateY(-3px);
          box-shadow: 0 22px 40px -22px rgba(13, 18, 38, 0.25);
        }
        .blog-featured-img { transition: transform 0.7s ease; }
        .blog-featured:hover .blog-featured-img { transform: scale(1.04); }
        .blog-featured:hover .blog-featured-cta { color: var(--color-brass-deep) !important; }
        .blog-card:hover {
          transform: translateY(-3px);
          border-color: var(--color-brass) !important;
        }
        .blog-card-img { transition: transform 0.7s ease; }
        .blog-card:hover .blog-card-img { transform: scale(1.05); }
      `}</style>
    </>
  )
}
