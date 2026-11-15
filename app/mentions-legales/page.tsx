import type { Metadata } from "next"

import { StatusBar } from "@/components/layout/StatusBar"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Breadcrumb } from "@/components/ui/Breadcrumb"

import { breadcrumbSchema, CONTACT } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Mentions légales · Serrurier Nova Genève",
  description: "Informations légales relatives à Serrurier Nova Genève — éditeur, hébergement, propriété intellectuelle.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: true, follow: true },
}

export default function MentionsLegalesPage() {
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
                { name: "Mentions légales", url: "/mentions-legales" },
              ]),
            ),
          }}
        />

        <section
          style={{
            background: "var(--color-navy-3)",
            color: "var(--color-silver)",
            paddingTop: "clamp(2.5rem, 4vw, 3.5rem)",
            paddingBottom: "clamp(2.5rem, 4vw, 3.5rem)",
          }}
        >
          <div className="container">
            <Breadcrumb tone="dark" items={[{ name: "Accueil", href: "/" }, { name: "Mentions légales" }]} />
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.025em",
                color: "var(--color-paper)",
                margin: "1.5rem 0 0",
              }}
            >
              Mentions{" "}
              <em
                style={{
                  fontStyle: "italic",
                  fontVariationSettings: '"SOFT" 70',
                  fontWeight: 400,
                  color: "var(--color-brass)",
                }}
              >
                légales.
              </em>
            </h1>
          </div>
        </section>

        <article
          style={{
            background: "var(--color-paper)",
            paddingTop: "clamp(3rem, 5vw, 4rem)",
            paddingBottom: "clamp(3rem, 5vw, 4rem)",
          }}
        >
          <div className="container" style={{ maxWidth: 760 }}>
            <LegalSection title="Éditeur du site">
              <p>
                <strong>Serrurier Nova Genève</strong>
                <br />
                Entreprise individuelle
                <br />
                Chemin De-Maisonneuve 12D
                <br />
                1219 Châtelaine — Vernier
                <br />
                Canton de Genève, Suisse
              </p>
              <p>
                Téléphone :{" "}
                <a href={`tel:${CONTACT.phone}`} className="legal-link">
                  +41 22 557 65 59
                </a>
                <br />
                Mobile · WhatsApp :{" "}
                <a href={`tel:${CONTACT.mobile}`} className="legal-link">
                  +41 76 475 08 81
                </a>
                <br />
                Email :{" "}
                <a href={`mailto:${CONTACT.email}`} className="legal-link">
                  {CONTACT.email}
                </a>
              </p>
            </LegalSection>

            <LegalSection title="Directeur de la publication">
              <p>
                Le responsable de la publication est l'exploitant de l'entreprise individuelle
                Serrurier Nova Genève.
              </p>
            </LegalSection>

            <LegalSection title="Hébergement">
              <p>
                Le présent site est hébergé par <strong>Vercel Inc.</strong>
                <br />
                440 N Barranca Avenue #4133
                <br />
                Covina, CA 91723, USA
                <br />
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="legal-link"
                >
                  vercel.com
                </a>
              </p>
            </LegalSection>

            <LegalSection title="Propriété intellectuelle">
              <p>
                L'ensemble des contenus présents sur ce site (textes, images, graphismes, logo,
                vidéos, photographies, structure et code) est la propriété exclusive de Serrurier
                Nova Genève, sauf indication contraire. Toute reproduction, représentation,
                modification, publication ou adaptation, partielle ou totale, par quelque
                procédé que ce soit, est interdite sans autorisation écrite préalable.
              </p>
              <p>
                Les marques citées (Kaba, Fichet, Bricard, Picard, Mul-T-Lock, Vachette, A2P, EN
                1143-1, Nuki, Yale, etc.) restent la propriété de leurs détenteurs respectifs.
                Leur citation à des fins descriptives n'implique aucune affiliation officielle.
              </p>
            </LegalSection>

            <LegalSection title="Photographies et illustrations">
              <p>
                Les photographies présentes sur ce site illustrent des prestations types et
                des situations professionnelles. Certaines images ont été générées par
                intelligence artificielle à des fins d'illustration éditoriale. Aucune image
                n'identifie de personnes physiques réelles ni de biens privés sans autorisation.
              </p>
            </LegalSection>

            <LegalSection title="Responsabilité">
              <p>
                Les informations diffusées sur ce site sont données à titre indicatif et peuvent
                évoluer. Serrurier Nova Genève s'efforce d'en garantir l'exactitude mais ne peut
                être tenu responsable des erreurs, omissions ou interprétations qui pourraient
                en découler.
              </p>
              <p>
                Toute prestation fait l'objet d'un devis confirmé au téléphone ou par écrit
                avant intervention. Les conditions d'intervention finales sont celles
                explicitement convenues entre le client et l'artisan.
              </p>
            </LegalSection>

            <LegalSection title="Liens externes">
              <p>
                Le site peut contenir des liens hypertextes vers d'autres sites internet.
                Serrurier Nova Genève n'exerce aucun contrôle sur ces sites et décline toute
                responsabilité quant à leur contenu, leur disponibilité ou leurs pratiques en
                matière de protection des données.
              </p>
            </LegalSection>

            <LegalSection title="Droit applicable">
              <p>
                Le présent site est soumis au droit suisse. Tout litige relatif à son
                utilisation ou aux services proposés relève de la compétence exclusive des
                tribunaux du canton de Genève.
              </p>
            </LegalSection>

            <LegalSection title="Mise à jour">
              <p>
                Dernière mise à jour : mai 2026. Les présentes mentions légales sont susceptibles
                d'être modifiées à tout moment. Il appartient à l'utilisateur de les consulter
                régulièrement.
              </p>
            </LegalSection>
          </div>

          <style>{`
            .legal-link {
              color: var(--color-navy);
              border-bottom: 1px solid var(--color-brass);
              transition: color 0.2s ease;
            }
            .legal-link:hover { color: var(--color-brass-deep); }
          `}</style>
        </article>
      </main>

      <Footer />
    </>
  )
}

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: "2.4rem" }}>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.3rem, 2.4vw, 1.6rem)",
          fontWeight: 600,
          letterSpacing: "-0.018em",
          color: "var(--color-ink)",
          margin: "0 0 0.85rem",
          paddingBottom: "0.55rem",
          borderBottom: "1px solid var(--color-hairline-dark)",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.98rem",
          color: "var(--color-ink-2)",
          lineHeight: 1.72,
        }}
      >
        {children}
      </div>
    </section>
  )
}
