"use client"

import Image from "next/image"
import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { submitContact, type ContactState } from "@/app/actions/contact"
import { CONTACT } from "@/lib/schema"
import { LiveDot } from "@/components/ui/LiveDot"

const INITIAL: ContactState = { status: "idle", message: "" }

const INTERVENTION_TYPES = [
  { value: "", label: "Choisir une intervention…" },
  { value: "ouverture", label: "Ouverture de porte" },
  { value: "changement", label: "Changement de serrure / cylindre" },
  { value: "effraction", label: "Dépannage après effraction" },
  { value: "autre", label: "Autre · Conseil" },
] as const

const URGENCE_LEVELS = [
  { value: "maintenant", label: "Maintenant", hint: "Urgence · porte bloquée" },
  { value: "aujourdhui", label: "Aujourd'hui", hint: "Dans la journée" },
  { value: "rendez-vous", label: "Sur rendez-vous", hint: "Devis ou planifié" },
] as const

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="cf-submit"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.7rem",
        padding: "1.05rem 1.6rem",
        background: pending ? "var(--color-navy)" : "var(--color-vermillion)",
        color: "var(--color-paper)",
        fontFamily: "var(--font-body)",
        fontSize: "0.95rem",
        fontWeight: 600,
        letterSpacing: "0.01em",
        border: "none",
        borderRadius: 6,
        cursor: pending ? "wait" : "pointer",
        transition: "background 0.2s ease, transform 0.2s ease",
        boxShadow: pending ? "none" : "0 12px 28px -14px rgba(210, 58, 28, 0.55)",
        width: "100%",
        minHeight: 48,
      }}
    >
      {pending ? "Envoi en cours…" : "Envoyer ma demande →"}
    </button>
  )
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, INITIAL)
  const errs = state.fieldErrors ?? {}

  return (
    <section
      id="contact"
      style={{
        background: "var(--color-paper)",
        paddingTop: "clamp(3.5rem, 6vw, 5rem)",
        paddingBottom: "clamp(3.5rem, 6vw, 5rem)",
        borderTop: "1px solid var(--color-hairline-dark)",
      }}
    >
      <div className="container">
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "1rem",
            marginBottom: "clamp(2rem, 3.5vw, 3rem)",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.9rem",
              color: "var(--color-steel)",
              fontFamily: "var(--font-body)",
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            <span aria-hidden="true" style={{ width: 28, height: 1, background: "var(--color-brass)", opacity: 0.7 }} />
            <span>Contact · Demande de rappel</span>
            <span aria-hidden="true" style={{ width: 28, height: 1, background: "var(--color-brass)", opacity: 0.7 }} />
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "clamp(1.85rem, 3.8vw, 2.9rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.022em",
              color: "var(--color-ink)",
              maxWidth: "24ch",
              margin: 0,
            }}
          >
            Décrivez votre besoin.{" "}
            <em
              style={{
                fontStyle: "italic",
                fontVariationSettings: '"SOFT" 70',
                fontWeight: 400,
                color: "var(--color-brass-deep)",
              }}
            >
              On vous rappelle.
            </em>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.97rem",
              color: "var(--color-ink-2)",
              maxWidth: "54ch",
              margin: 0,
              lineHeight: 1.55,
            }}
          >
            Pour une urgence, le téléphone reste le plus rapide. Pour un devis, une question
            technique ou un rendez-vous, ce formulaire est parfait.
          </p>
        </div>

        <div
          className="cf-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            maxWidth: 1100,
            margin: "0 auto",
            alignItems: "stretch",
          }}
        >
          {/* SIDE: contact channels */}
          <aside
            style={{
              background: "var(--color-navy-3)",
              color: "var(--color-silver)",
              borderRadius: 14,
              padding: "1.8rem 1.8rem 2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.6rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse 60% 60% at 100% 0%, rgba(201, 162, 74, 0.14), transparent 70%)",
                pointerEvents: "none",
              }}
            />

            <div style={{ position: "relative" }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.66rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--color-brass)",
                  fontWeight: 600,
                }}
              >
                — Urgence 24h/24
              </span>
              <a
                href={`tel:${CONTACT.phone}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.7rem",
                  marginTop: "0.55rem",
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem, 3vw, 1.95rem)",
                  fontWeight: 500,
                  color: "var(--color-paper)",
                  letterSpacing: "-0.015em",
                }}
              >
                <LiveDot variant="red" size={8} />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  022 557 65 59
                </span>
              </a>
              <p
                style={{
                  marginTop: "0.4rem",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.85rem",
                  color: "var(--color-silver-2)",
                  lineHeight: 1.5,
                  maxWidth: "32ch",
                }}
              >
                Répondu directement par le serrurier — pas un standard.
              </p>
            </div>

            <div style={{ height: 1, background: "rgba(212, 216, 226, 0.18)", position: "relative" }} />

            <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "0.95rem" }}>
              <ChannelRow label="WhatsApp · SMS" value="076 475 08 81" href={`tel:${CONTACT.mobile}`} />
              <ChannelRow label="Email" value={CONTACT.email} href={`mailto:${CONTACT.email}`} />
              <ChannelRow label="Zone" value="Tout le canton de Genève" />
              <ChannelRow label="Délai" value="Annoncé au téléphone" />
            </div>

            {/* Visual proof */}
            <div
              style={{
                position: "relative",
                marginTop: "auto",
                borderRadius: 10,
                overflow: "hidden",
                border: "1px solid rgba(212, 216, 226, 0.18)",
                aspectRatio: "16 / 9",
                background: "var(--color-navy-deep)",
              }}
            >
              <Image
                src="/images/gallery-01-cylindre-navy.png"
                alt="Pose d'un cylindre haute sécurité par Serrurier Nova"
                fill
                sizes="(min-width: 880px) 40vw, 100vw"
                style={{ objectFit: "cover" }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(6,9,20,0) 40%, rgba(6,9,20,0.78) 100%)",
                }}
              />
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 10,
                  left: 10,
                  width: 18,
                  height: 18,
                  borderTop: "1.5px solid var(--color-brass)",
                  borderLeft: "1.5px solid var(--color-brass)",
                }}
              />
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  bottom: 10,
                  right: 10,
                  width: 18,
                  height: 18,
                  borderBottom: "1.5px solid var(--color-brass)",
                  borderRight: "1.5px solid var(--color-brass)",
                }}
              />
              <figcaption
                style={{
                  position: "absolute",
                  left: 14,
                  right: 14,
                  bottom: 10,
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--color-paper)",
                  fontWeight: 600,
                }}
              >
                Intervention réelle · Vernier
              </figcaption>
            </div>

            <div style={{ position: "relative", paddingTop: "0.4rem" }}>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.78rem",
                  color: "var(--color-silver-2)",
                  lineHeight: 1.5,
                  maxWidth: "34ch",
                  margin: 0,
                }}
              >
                Vos coordonnées ne sont jamais partagées. Réponse directe par le serrurier,
                jour comme nuit, sans standard ni intermédiaire.
              </p>
            </div>
          </aside>

          {/* FORM */}
          <form action={formAction} noValidate className="cf-form" style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
            {/* Honeypot */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
            />

            <div className="cf-row">
              <Field id="nom" label="Nom" required error={errs.nom}>
                <input
                  id="nom"
                  name="nom"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Marc Rossi"
                  className="cf-input"
                  aria-invalid={errs.nom ? "true" : undefined}
                  aria-describedby={errs.nom ? "nom-error" : undefined}
                />
              </Field>
              <Field id="telephone" label="Téléphone" required error={errs.telephone}>
                <input
                  id="telephone"
                  name="telephone"
                  type="tel"
                  autoComplete="tel"
                  required
                  placeholder="079 123 45 67"
                  className="cf-input cf-mono"
                  aria-invalid={errs.telephone ? "true" : undefined}
                  aria-describedby={errs.telephone ? "telephone-error" : undefined}
                />
              </Field>
            </div>

            <Field id="email" label="Email" hint="Facultatif" error={errs.email}>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="marc@exemple.ch"
                className="cf-input"
                aria-invalid={errs.email ? "true" : undefined}
                aria-describedby={errs.email ? "email-error" : undefined}
              />
            </Field>

            {/* Adresse d'intervention — pour gagner du temps en route */}
            <div
              style={{
                marginTop: "0.4rem",
                paddingTop: "1rem",
                borderTop: "1px dashed var(--color-hairline-dark)",
                display: "flex",
                flexDirection: "column",
                gap: "1.1rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.66rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--color-brass-deep)",
                  fontWeight: 600,
                }}
              >
                <span aria-hidden="true" style={{ width: 18, height: 1, background: "var(--color-brass)" }} />
                <span>Adresse d'intervention</span>
              </div>

              <Field id="adresse" label="Rue et numéro" required error={errs.adresse}>
                <input
                  id="adresse"
                  name="adresse"
                  type="text"
                  autoComplete="street-address"
                  required
                  placeholder="Rue du Grand-Bureau 14"
                  className="cf-input"
                  aria-invalid={errs.adresse ? "true" : undefined}
                  aria-describedby={errs.adresse ? "adresse-error" : undefined}
                />
              </Field>

              <div className="cf-row cf-row-3">
                <Field id="npa" label="NPA" required error={errs.npa}>
                  <input
                    id="npa"
                    name="npa"
                    type="text"
                    inputMode="numeric"
                    pattern="1[0-2][0-9]{2}"
                    maxLength={4}
                    autoComplete="postal-code"
                    required
                    placeholder="1219"
                    className="cf-input cf-mono"
                    aria-invalid={errs.npa ? "true" : undefined}
                    aria-describedby={errs.npa ? "npa-error" : undefined}
                  />
                </Field>
                <Field id="ville" label="Commune" required error={errs.ville}>
                  <input
                    id="ville"
                    name="ville"
                    type="text"
                    autoComplete="address-level2"
                    required
                    placeholder="Vernier · Carouge · Genève…"
                    className="cf-input"
                    list="ville-suggestions"
                    aria-invalid={errs.ville ? "true" : undefined}
                    aria-describedby={errs.ville ? "ville-error" : undefined}
                  />
                  <datalist id="ville-suggestions">
                    <option value="Genève" />
                    <option value="Vernier" />
                    <option value="Carouge" />
                    <option value="Lancy" />
                    <option value="Meyrin" />
                    <option value="Onex" />
                    <option value="Thônex" />
                    <option value="Chêne-Bougeries" />
                    <option value="Chêne-Bourg" />
                    <option value="Plan-les-Ouates" />
                    <option value="Le Grand-Saconnex" />
                    <option value="Versoix" />
                  </datalist>
                </Field>
              </div>

              <Field
                id="acces"
                label="Étage · code d'entrée · interphone"
                hint="Facultatif — utile la nuit"
              >
                <input
                  id="acces"
                  name="acces"
                  type="text"
                  placeholder="3e étage · code B1492 · sonnette « Rossi »"
                  className="cf-input"
                />
              </Field>
            </div>

            <Field id="type" label="Type d'intervention" required error={errs.type}>
              <select
                id="type"
                name="type"
                required
                defaultValue=""
                className="cf-input cf-select"
                aria-invalid={errs.type ? "true" : undefined}
                aria-describedby={errs.type ? "type-error" : undefined}
              >
                {INTERVENTION_TYPES.map((t) => (
                  <option key={t.value} value={t.value} disabled={t.value === ""}>
                    {t.label}
                  </option>
                ))}
              </select>
            </Field>

            <Field id="urgence" label="Niveau d'urgence" required error={errs.urgence}>
              <div
                role="radiogroup"
                aria-labelledby="urgence-label"
                className="cf-urgence"
              >
                {URGENCE_LEVELS.map((u, i) => (
                  <label key={u.value} className="cf-urgence-card">
                    <input
                      type="radio"
                      name="urgence"
                      value={u.value}
                      required
                      defaultChecked={i === 0}
                    />
                    <span className="cf-urgence-body">
                      <span className="cf-urgence-label">{u.label}</span>
                      <span className="cf-urgence-hint">{u.hint}</span>
                    </span>
                  </label>
                ))}
              </div>
            </Field>

            <Field id="message" label="Décrivez votre besoin" hint="Facultatif">
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Porte claquée, marque de la serrure si connue, étage…"
                className="cf-input cf-textarea"
              />
            </Field>

            {state.status !== "idle" && (
              <div
                role={state.status === "error" ? "alert" : "status"}
                style={{
                  background:
                    state.status === "success"
                      ? "rgba(95, 138, 61, 0.12)"
                      : "rgba(210, 58, 28, 0.10)",
                  border: `1px solid ${
                    state.status === "success" ? "rgba(95, 138, 61, 0.45)" : "rgba(210, 58, 28, 0.4)"
                  }`,
                  color:
                    state.status === "success" ? "var(--color-green)" : "var(--color-vermillion)",
                  padding: "0.85rem 1rem",
                  borderRadius: 8,
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9rem",
                  lineHeight: 1.5,
                }}
              >
                {state.message}
              </div>
            )}

            <SubmitButton />

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.72rem",
                color: "var(--color-steel)",
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              En envoyant ce formulaire, vous acceptez que vos coordonnées soient utilisées
              uniquement pour vous recontacter au sujet de votre demande.
            </p>
          </form>
        </div>
      </div>

      <style>{`
        .cf-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.1rem;
        }
        .cf-input {
          width: 100%;
          font-family: var(--font-body);
          font-size: 0.97rem;
          color: var(--color-ink);
          background: var(--color-paper);
          border: 1px solid var(--color-hairline-dark);
          border-radius: 8px;
          padding: 0.85rem 1rem;
          line-height: 1.4;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .cf-input:focus {
          outline: none;
          border-color: var(--color-brass);
          box-shadow: 0 0 0 3px rgba(201, 162, 74, 0.22);
        }
        .cf-mono { font-family: var(--font-mono); font-variant-numeric: tabular-nums; letter-spacing: 0.02em; }
        .cf-select {
          appearance: none;
          background-image: linear-gradient(45deg, transparent 50%, var(--color-steel) 50%),
                            linear-gradient(135deg, var(--color-steel) 50%, transparent 50%);
          background-position: calc(100% - 18px) 50%, calc(100% - 13px) 50%;
          background-size: 5px 5px, 5px 5px;
          background-repeat: no-repeat;
          padding-right: 2.3rem;
        }
        .cf-textarea { resize: vertical; min-height: 110px; font-family: var(--font-body); }
        .cf-submit:hover:not(:disabled) {
          background: var(--color-vermillion-2) !important;
          transform: translateY(-1px);
        }
        .cf-urgence {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.6rem;
        }
        .cf-urgence-card {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.85rem 1rem;
          border: 1px solid var(--color-hairline-dark);
          border-radius: 8px;
          background: var(--color-paper);
          cursor: pointer;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }
        .cf-urgence-card input[type="radio"] {
          appearance: none;
          width: 18px;
          height: 18px;
          border: 1.5px solid var(--color-steel);
          border-radius: 999px;
          margin: 0;
          flex-shrink: 0;
          position: relative;
          transition: border-color 0.2s ease;
        }
        .cf-urgence-card input[type="radio"]:checked {
          border-color: var(--color-brass);
        }
        .cf-urgence-card input[type="radio"]:checked::after {
          content: "";
          position: absolute;
          inset: 3px;
          background: var(--color-brass);
          border-radius: 999px;
        }
        .cf-urgence-card:has(input:checked) {
          border-color: var(--color-brass);
          background: rgba(201, 162, 74, 0.06);
          box-shadow: 0 0 0 3px rgba(201, 162, 74, 0.14);
        }
        .cf-urgence-body { display: flex; flex-direction: column; gap: 0.15rem; }
        .cf-urgence-label {
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-ink);
        }
        .cf-urgence-hint {
          font-family: var(--font-mono);
          font-size: 0.66rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--color-steel);
          font-weight: 500;
        }
        @media (min-width: 640px) {
          .cf-row { grid-template-columns: 1fr 1fr !important; gap: 1.1rem !important; }
          .cf-row-3 { grid-template-columns: 0.55fr 1fr !important; }
          .cf-urgence { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (min-width: 880px) {
          .cf-grid { grid-template-columns: 0.85fr 1.15fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  )
}

function Field({
  id,
  label,
  hint,
  required,
  error,
  children,
}: {
  id: string
  label: string
  hint?: string
  required?: boolean
  error?: string
  children: React.ReactNode
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
      <label
        htmlFor={id}
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.72rem",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--color-ink-2)",
          fontWeight: 600,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.6rem",
        }}
      >
        <span>
          {label}
          {required && <span style={{ color: "var(--color-vermillion)", marginLeft: 4 }}>*</span>}
        </span>
        {hint && (
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.62rem",
              letterSpacing: "0.1em",
              color: "var(--color-steel)",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            {hint}
          </span>
        )}
      </label>
      {children}
      {error && (
        <span
          id={`${id}-error`}
          role="alert"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.78rem",
            color: "var(--color-vermillion)",
            marginTop: -2,
            fontWeight: 500,
          }}
        >
          {error}
        </span>
      )}
    </div>
  )
}

function ChannelRow({ label, value, href }: { label: string; value: string; href?: string }) {
  const content = (
    <>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.66rem",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "var(--color-silver-2)",
          fontWeight: 600,
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.96rem",
          color: "var(--color-paper)",
          fontWeight: 500,
        }}
      >
        {value}
      </span>
    </>
  )
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.22rem" }}>
      {href ? (
        <a
          href={href}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.22rem",
            transition: "color 0.2s ease",
          }}
          className="channel-link"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  )
}
