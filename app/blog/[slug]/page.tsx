import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import { StatusBar } from "@/components/layout/StatusBar"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Breadcrumb } from "@/components/ui/Breadcrumb"
import { CTABanner } from "@/components/sections/CTABanner"
import { FinalCTA } from "@/components/sections/FinalCTA"

import { BLOG_POSTS, type BlogSection } from "@/content/blog"
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
} from "@/lib/schema"

interface PageParams {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      locale: "fr_CH",
      publishedTime: post.date,
      authors: ["Serrurier Nova Genève"],
      images: post.image ? [post.image] : undefined,
    },
  }
}

function renderSection(section: BlogSection, key: number) {
  switch (section.type) {
    case "h2":
      return (
        <h2
          key={key}
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: "clamp(1.5rem, 2.6vw, 1.95rem)",
            letterSpacing: "-0.022em",
            lineHeight: 1.15,
            color: "var(--color-ink)",
            margin: "2rem 0 0.6rem",
          }}
        >
          {section.content as string}
        </h2>
      )
    case "h3":
      return (
        <h3
          key={key}
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "clamp(1.15rem, 2vw, 1.35rem)",
            letterSpacing: "-0.012em",
            lineHeight: 1.2,
            color: "var(--color-ink)",
            margin: "1.4rem 0 0.4rem",
          }}
        >
          {section.content as string}
        </h3>
      )
    case "p":
      return (
        <p
          key={key}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.04rem",
            color: "var(--color-ink-2)",
            lineHeight: 1.72,
            margin: "0 0 1rem",
            maxWidth: "65ch",
          }}
        >
          {section.content as string}
        </p>
      )
    case "ul":
      return (
        <ul
          key={key}
          style={{
            margin: "0 0 1.2rem",
            padding: "0 0 0 1.4rem",
            fontFamily: "var(--font-body)",
            fontSize: "1.02rem",
            color: "var(--color-ink-2)",
            lineHeight: 1.7,
            maxWidth: "65ch",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          {(section.content as string[]).map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )
    case "ol":
      return (
        <ol
          key={key}
          style={{
            margin: "0 0 1.2rem",
            padding: "0 0 0 1.4rem",
            fontFamily: "var(--font-body)",
            fontSize: "1.02rem",
            color: "var(--color-ink-2)",
            lineHeight: 1.7,
            maxWidth: "65ch",
            display: "flex",
            flexDirection: "column",
            gap: "0.55rem",
            counterReset: "li",
          }}
        >
          {(section.content as string[]).map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      )
    case "callout":
      return (
        <aside
          key={key}
          style={{
            background: "var(--color-navy-3)",
            color: "var(--color-paper)",
            borderLeft: "3px solid var(--color-brass)",
            padding: "1.3rem 1.5rem 1.4rem",
            borderRadius: 8,
            margin: "1.6rem 0 1.8rem",
            fontFamily: "var(--font-body)",
            fontSize: "0.96rem",
            lineHeight: 1.65,
            maxWidth: "65ch",
            boxShadow: "0 12px 24px -16px rgba(13, 18, 38, 0.25)",
          }}
        >
          <span
            style={{
              display: "block",
              fontFamily: "var(--font-mono)",
              fontSize: "0.62rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--color-brass)",
              fontWeight: 600,
              marginBottom: "0.5rem",
            }}
          >
            — En pratique
          </span>
          {section.content as string}
        </aside>
      )
    case "quote":
      return (
        <blockquote
          key={key}
          style={{
            margin: "1.5rem 0 1.8rem",
            paddingLeft: "1.5rem",
            borderLeft: "3px solid var(--color-brass)",
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontVariationSettings: '"SOFT" 70',
            fontSize: "1.2rem",
            color: "var(--color-ink)",
            lineHeight: 1.5,
            maxWidth: "55ch",
          }}
        >
          « {section.content as string} »
        </blockquote>
      )
  }
}

export default async function BlogPostPage({ params }: PageParams) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) notFound()

  const related = (post.related ?? [])
    .map((s) => BLOG_POSTS.find((p) => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))

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
                { name: post.title, url: `/blog/${post.slug}` },
              ]),
            ),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              articleSchema({
                headline: post.title,
                description: post.excerpt,
                slug: post.slug,
                datePublished: post.date,
                image: post.image,
                category: post.category,
              }),
            ),
          }}
        />
        {post.faqs && post.faqs.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(faqSchema(post.faqs)),
            }}
          />
        )}

        {/* HERO */}
        <section
          style={{
            background: "var(--color-navy-3)",
            color: "var(--color-silver)",
            position: "relative",
            overflow: "hidden",
            paddingTop: "clamp(2.5rem, 4.5vw, 4rem)",
            paddingBottom: "clamp(2.5rem, 4vw, 3.5rem)",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 55% 60% at 85% 15%, rgba(201, 162, 74, 0.10), transparent 65%)",
              pointerEvents: "none",
            }}
          />

          <div className="container" style={{ position: "relative", maxWidth: 1000 }}>
            <Breadcrumb
              tone="dark"
              items={[
                { name: "Accueil", href: "/" },
                { name: "Blog", href: "/blog" },
                { name: post.title.length > 50 ? post.title.slice(0, 50) + "…" : post.title },
              ]}
            />

            <div style={{ marginTop: "clamp(1.5rem, 2.5vw, 2.2rem)" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.7rem",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.66rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--color-brass)",
                  fontWeight: 600,
                  marginBottom: "1.2rem",
                }}
              >
                <span>{post.category}</span>
                <span aria-hidden="true" style={{ color: "var(--color-silver-2)" }}>·</span>
                <span style={{ color: "var(--color-silver-2)" }}>{post.dateDisplay}</span>
                <span aria-hidden="true" style={{ color: "var(--color-silver-2)" }}>·</span>
                <span style={{ color: "var(--color-silver-2)" }}>{post.readMinutes} min de lecture</span>
              </div>

              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: "clamp(2rem, 4.4vw, 3.2rem)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.025em",
                  color: "var(--color-paper)",
                  margin: 0,
                  maxWidth: "26ch",
                }}
              >
                {post.title}
              </h1>

              <p
                style={{
                  marginTop: "1.2rem",
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(1.05rem, 1.4vw, 1.18rem)",
                  color: "var(--color-silver)",
                  lineHeight: 1.55,
                  maxWidth: "62ch",
                }}
              >
                {post.excerpt}
              </p>
            </div>
          </div>
        </section>

        {/* IMAGE */}
        {post.image && (
          <section
            style={{
              background: "var(--color-paper)",
              paddingTop: "0",
              paddingBottom: "clamp(1.5rem, 2.5vw, 2.5rem)",
              borderTop: "1px solid var(--color-hairline-dark)",
            }}
          >
            <div className="container" style={{ maxWidth: 1000 }}>
              <div
                style={{
                  position: "relative",
                  aspectRatio: "16 / 9",
                  borderRadius: 14,
                  overflow: "hidden",
                  background: "var(--color-navy-deep)",
                  marginTop: "-3rem",
                  boxShadow: "0 30px 60px -25px rgba(13, 18, 38, 0.35)",
                  border: "1px solid var(--color-hairline-dark)",
                }}
              >
                <Image
                  src={post.image}
                  alt={`${post.title} — Illustration de l'article ${post.category}, blog Serrurier Nova Genève`}
                  fill
                  priority
                  sizes="(min-width: 1000px) 1000px, 100vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </section>
        )}

        {/* BODY */}
        <article
          style={{
            background: "var(--color-paper)",
            paddingTop: "clamp(2rem, 3vw, 2.8rem)",
            paddingBottom: "clamp(3rem, 5vw, 4rem)",
          }}
        >
          <div className="container" style={{ maxWidth: 720 }}>
            {post.body.map((s, i) => renderSection(s, i))}
          </div>
        </article>

        {/* FAQ */}
        {post.faqs && post.faqs.length > 0 && (
          <section
            style={{
              background: "var(--color-paper-2)",
              paddingTop: "clamp(3rem, 5vw, 4rem)",
              paddingBottom: "clamp(3rem, 5vw, 4rem)",
              borderTop: "1px solid var(--color-hairline-dark)",
            }}
          >
            <div className="container" style={{ maxWidth: 900 }}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: "clamp(1.5rem, 2.8vw, 2rem)",
                  letterSpacing: "-0.022em",
                  color: "var(--color-ink)",
                  margin: "0 0 1.6rem",
                }}
              >
                Questions{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    fontVariationSettings: '"SOFT" 70',
                    fontWeight: 400,
                    color: "var(--color-brass-deep)",
                  }}
                >
                  fréquentes.
                </em>
              </h2>

              <div style={{ borderTop: "2px solid var(--color-navy)" }}>
                {post.faqs.map((item, i) => (
                  <details
                    key={item.q}
                    className="faq-item"
                    style={{ borderBottom: "1px solid var(--color-hairline-dark)" }}
                  >
                    <summary
                      style={{
                        display: "grid",
                        gridTemplateColumns: "auto 1fr auto",
                        gap: "1.2rem",
                        alignItems: "center",
                        padding: "1.2rem 0",
                        cursor: "pointer",
                        listStyle: "none",
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.72rem",
                          color: "var(--color-brass-deep)",
                          letterSpacing: "0.06em",
                          fontWeight: 600,
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.08rem",
                          fontWeight: 600,
                          letterSpacing: "-0.01em",
                          color: "var(--color-ink)",
                        }}
                      >
                        {item.q}
                      </span>
                      <span
                        aria-hidden="true"
                        className="faq-plus"
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "1.3rem",
                          color: "var(--color-navy)",
                          fontWeight: 500,
                          transition: "transform 0.3s ease, color 0.2s ease",
                          lineHeight: 1,
                        }}
                      >
                        +
                      </span>
                    </summary>
                    <div
                      style={{
                        paddingBottom: "1.3rem",
                        paddingLeft: "calc(1.2rem + 1.5rem)",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.96rem",
                        lineHeight: 1.65,
                        color: "var(--color-ink-2)",
                        maxWidth: "64ch",
                      }}
                    >
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        <CTABanner
          variant="navy"
          eyebrow="Genève · 24h/24"
          title="Besoin d'un serrurier"
          titleAccent="maintenant ?"
          subtitle="Réponse directe par l'artisan, devis et délai annoncés au téléphone avant tout déplacement, dans tout le canton."
          secondary={{ label: "Formulaire de contact", href: "/#contact" }}
        />

        {/* RELATED */}
        {related.length > 0 && (
          <section
            style={{
              background: "var(--color-paper)",
              paddingTop: "clamp(3rem, 5vw, 4rem)",
              paddingBottom: "clamp(3rem, 5vw, 4rem)",
              borderTop: "1px solid var(--color-hairline-dark)",
            }}
          >
            <div className="container">
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: "clamp(1.4rem, 2.5vw, 1.85rem)",
                  letterSpacing: "-0.022em",
                  color: "var(--color-ink)",
                  margin: "0 0 1.5rem",
                }}
              >
                À lire ensuite
              </h2>
              <ul
                className="blog-related"
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "1.2rem",
                }}
              >
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/blog/${r.slug}`}
                      className="blog-related-card"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.6rem",
                        padding: "1.3rem 1.5rem",
                        background: "var(--color-paper-2)",
                        border: "1px solid var(--color-hairline-dark)",
                        borderRadius: 12,
                        transition: "border-color 0.2s ease, transform 0.2s ease",
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
                        — {r.category} · {r.readMinutes} min
                      </span>
                      <h3
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.15rem",
                          fontWeight: 600,
                          letterSpacing: "-0.015em",
                          color: "var(--color-ink)",
                          margin: 0,
                          lineHeight: 1.25,
                        }}
                      >
                        {r.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.9rem",
                          color: "var(--color-ink-2)",
                          lineHeight: 1.55,
                          margin: 0,
                        }}
                      >
                        {r.excerpt}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <FinalCTA />
      </main>

      <Footer />

      <style>{`
        @media (min-width: 720px) {
          .blog-related { grid-template-columns: repeat(2, 1fr) !important; }
        }
        .blog-related-card:hover {
          border-color: var(--color-brass) !important;
          transform: translateY(-2px);
        }
        .faq-item summary::-webkit-details-marker { display: none; }
        .faq-item[open] .faq-plus { transform: rotate(45deg); color: var(--color-vermillion) !important; }
      `}</style>
    </>
  )
}
