import type { Metadata } from "next"

import { StatusBar } from "@/components/layout/StatusBar"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Breadcrumb } from "@/components/ui/Breadcrumb"

import { breadcrumbSchema, CONTACT } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Politique de confidentialité · Serrurier Nova Genève",
  description:
    "Comment Serrurier Nova Genève collecte, utilise et protège vos données personnelles. Conforme à la LPD suisse et au RGPD européen.",
  alternates: { canonical: "/politique-de-confidentialite" },
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
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
                { name: "Politique de confidentialité", url: "/politique-de-confidentialite" },
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
            <Breadcrumb
              tone="dark"
              items={[
                { name: "Accueil", href: "/" },
                { name: "Politique de confidentialité" },
              ]}
            />
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.025em",
                color: "var(--color-paper)",
                margin: "1.5rem 0 0",
                maxWidth: "22ch",
              }}
            >
              Politique de{" "}
              <em
                style={{
                  fontStyle: "italic",
                  fontVariationSettings: '"SOFT" 70',
                  fontWeight: 400,
                  color: "var(--color-brass)",
                }}
              >
                confidentialité.
              </em>
            </h1>
            <p
              style={{
                marginTop: "1rem",
                fontFamily: "var(--font-body)",
                fontSize: "0.96rem",
                color: "var(--color-silver)",
                lineHeight: 1.55,
                maxWidth: "62ch",
              }}
            >
              Conforme à la Loi fédérale suisse sur la protection des données (LPD, rev. 2023) et
              au Règlement européen RGPD pour les visiteurs depuis l'Union européenne.
            </p>
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
            <PrivacySection title="1. Qui sommes-nous ?">
              <p>
                <strong>Serrurier Nova Genève</strong>, entreprise individuelle, sise au Chemin
                De-Maisonneuve 12D, 1219 Châtelaine (Vernier), canton de Genève, Suisse, est
                responsable du traitement des données personnelles collectées via le présent
                site internet.
              </p>
              <p>
                Pour toute question liée à la protection de vos données, vous pouvez nous
                contacter par email à{" "}
                <a href={`mailto:${CONTACT.email}`} className="privacy-link">
                  {CONTACT.email}
                </a>{" "}
                ou par téléphone au{" "}
                <a href={`tel:${CONTACT.phone}`} className="privacy-link">
                  +41 22 557 65 59
                </a>{" "}
                — ligne directe et WhatsApp au{" "}
                <a href={`tel:${CONTACT.mobile}`} className="privacy-link">
                  +41 76 475 08 81
                </a>
                .
              </p>
            </PrivacySection>

            <PrivacySection title="2. Quelles données collectons-nous ?">
              <p>
                Nous collectons uniquement les données strictement nécessaires à la fourniture
                de nos services :
              </p>
              <ul>
                <li>
                  <strong>Formulaire de contact</strong> : nom, téléphone (obligatoires), email
                  (facultatif), type d'intervention, message libre.
                </li>
                <li>
                  <strong>Appels téléphoniques</strong> : numéro appelant (via affichage standard
                  opérateur), date et heure, durée. Aucun enregistrement audio.
                </li>
                <li>
                  <strong>Email / WhatsApp / SMS</strong> : contenu volontairement transmis,
                  numéro ou adresse de l'expéditeur.
                </li>
                <li>
                  <strong>Données techniques de navigation</strong> : adresse IP anonymisée, type
                  de navigateur, pages consultées. Collecte limitée à des fins d'analyse
                  agrégée.
                </li>
              </ul>
            </PrivacySection>

            <PrivacySection title="3. Pourquoi collectons-nous ces données ?">
              <p>Les finalités du traitement sont strictement les suivantes :</p>
              <ul>
                <li>Vous rappeler suite à votre demande de devis ou d'intervention.</li>
                <li>Réaliser la prestation demandée et émettre une facture.</li>
                <li>
                  Assurer le suivi technique d'une intervention (en cas de garantie ou de
                  rappel).
                </li>
                <li>Respecter nos obligations légales et comptables.</li>
                <li>Améliorer la qualité et la sécurité de notre site internet.</li>
              </ul>
              <p>
                Nous ne pratiquons aucune prospection commerciale, aucune revente de données,
                aucune segmentation à des fins publicitaires.
              </p>
            </PrivacySection>

            <PrivacySection title="4. Base légale du traitement">
              <p>
                Le traitement repose sur :
              </p>
              <ul>
                <li>
                  <strong>Le consentement</strong> que vous donnez en remplissant le formulaire
                  de contact ou en nous écrivant volontairement.
                </li>
                <li>
                  <strong>L'exécution d'un contrat</strong> ou de mesures précontractuelles à
                  votre demande (devis, intervention).
                </li>
                <li>
                  <strong>L'intérêt légitime</strong> de Serrurier Nova Genève à assurer le
                  fonctionnement et la sécurité de son site.
                </li>
                <li>
                  <strong>Les obligations légales</strong> applicables en matière comptable et
                  fiscale en droit suisse.
                </li>
              </ul>
            </PrivacySection>

            <PrivacySection title="5. Combien de temps conservons-nous vos données ?">
              <ul>
                <li>
                  <strong>Demande sans suite</strong> (formulaire ou email sans intervention) :
                  90 jours, puis suppression automatique.
                </li>
                <li>
                  <strong>Client ayant bénéficié d'une intervention</strong> : 10 ans
                  (obligations légales suisses, art. 958f CO).
                </li>
                <li>
                  <strong>Données techniques de navigation</strong> : 13 mois maximum, sous
                  forme agrégée et anonymisée.
                </li>
              </ul>
            </PrivacySection>

            <PrivacySection title="6. Avec qui partageons-nous vos données ?">
              <p>
                Vos données ne sont jamais vendues. Elles peuvent être partagées dans les seuls
                cas suivants :
              </p>
              <ul>
                <li>
                  <strong>Sous-traitants techniques</strong> : hébergeur du site (Vercel Inc.),
                  prestataire d'envoi d'emails transactionnels, comptable. Ces tiers sont liés
                  par contrat et n'ont accès qu'aux données strictement nécessaires.
                </li>
                <li>
                  <strong>Autorités compétentes</strong> : sur réquisition judiciaire ou
                  administrative légalement contraignante.
                </li>
                <li>
                  <strong>Assurances</strong> : pour le compte de votre régie ou de votre
                  assurance habitation, sur votre demande explicite et uniquement pour les
                  données nécessaires à votre dossier.
                </li>
              </ul>
            </PrivacySection>

            <PrivacySection title="7. Vos droits">
              <p>
                Conformément à la LPD suisse et au RGPD, vous disposez à tout moment des droits
                suivants sur vos données personnelles :
              </p>
              <ul>
                <li>
                  <strong>Droit d'accès</strong> : savoir quelles données nous détenons sur
                  vous.
                </li>
                <li>
                  <strong>Droit de rectification</strong> : corriger une information inexacte.
                </li>
                <li>
                  <strong>Droit d'effacement</strong> (« droit à l'oubli ») : demander la
                  suppression de vos données, sauf obligation légale de conservation.
                </li>
                <li>
                  <strong>Droit d'opposition</strong> à un traitement spécifique.
                </li>
                <li>
                  <strong>Droit à la portabilité</strong> : recevoir vos données dans un format
                  structuré et lisible.
                </li>
              </ul>
              <p>
                Pour exercer ces droits, écrivez-nous à{" "}
                <a href={`mailto:${CONTACT.email}`} className="privacy-link">
                  {CONTACT.email}
                </a>{" "}
                en précisant l'objet « Protection des données ». Réponse sous 30 jours
                maximum.
              </p>
            </PrivacySection>

            <PrivacySection title="8. Cookies et traceurs">
              <p>
                Le site n'utilise pas de cookies publicitaires ni de traceurs tiers. Seuls
                quelques cookies strictement nécessaires au fonctionnement du site (session,
                préférences) peuvent être déposés, sans nécessiter votre consentement
                conformément à la législation applicable.
              </p>
              <p>
                Si vous souhaitez bloquer tous les cookies, vous pouvez le faire dans les
                paramètres de votre navigateur — cela n'affectera pas votre expérience de
                navigation.
              </p>
            </PrivacySection>

            <PrivacySection title="9. Sécurité">
              <p>
                Vos données sont stockées sur des serveurs sécurisés, chiffrés au repos (TLS et
                AES) et en transit (HTTPS). Les accès sont strictement limités à l'artisan et à
                ses sous-traitants techniques liés par confidentialité.
              </p>
            </PrivacySection>

            <PrivacySection title="10. Réclamation">
              <p>
                Si vous estimez que vos droits n'ont pas été respectés, vous pouvez introduire
                une réclamation auprès du{" "}
                <a
                  href="https://www.edoeb.admin.ch/edoeb/fr/home.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="privacy-link"
                >
                  Préposé fédéral à la protection des données et à la transparence (PFPDT)
                </a>{" "}
                en Suisse, ou auprès de l'autorité de contrôle compétente de votre État membre
                pour les résidents de l'UE.
              </p>
            </PrivacySection>

            <PrivacySection title="11. Mise à jour de cette politique">
              <p>
                La présente politique de confidentialité a été mise à jour en mai 2026. Elle
                peut être modifiée à tout moment pour refléter des évolutions techniques,
                réglementaires ou organisationnelles. Les modifications substantielles vous
                seront signalées sur cette page.
              </p>
            </PrivacySection>
          </div>

          <style>{`
            .privacy-link {
              color: var(--color-navy);
              border-bottom: 1px solid var(--color-brass);
              transition: color 0.2s ease;
            }
            .privacy-link:hover { color: var(--color-brass-deep); }
          `}</style>
        </article>
      </main>

      <Footer />
    </>
  )
}

function PrivacySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: "2.4rem" }}>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.25rem, 2.2vw, 1.5rem)",
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
          fontSize: "0.96rem",
          color: "var(--color-ink-2)",
          lineHeight: 1.72,
        }}
      >
        {children}
      </div>
      <style>{`
        section ul {
          margin: 0.5rem 0 1rem;
          padding-left: 1.3rem;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }
        section p { margin: 0 0 1rem; }
      `}</style>
    </section>
  )
}
