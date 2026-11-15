"use server"

type FieldKey =
  | "nom"
  | "telephone"
  | "email"
  | "adresse"
  | "npa"
  | "ville"
  | "type"
  | "urgence"
  | "message"

export interface ContactState {
  status: "idle" | "success" | "error"
  message: string
  fieldErrors?: Partial<Record<FieldKey, string>>
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const nom = String(formData.get("nom") ?? "").trim()
  const telephone = String(formData.get("telephone") ?? "").trim()
  const email = String(formData.get("email") ?? "").trim()
  const adresse = String(formData.get("adresse") ?? "").trim()
  const npa = String(formData.get("npa") ?? "").trim()
  const ville = String(formData.get("ville") ?? "").trim()
  const acces = String(formData.get("acces") ?? "").trim()
  const type = String(formData.get("type") ?? "").trim()
  const urgence = String(formData.get("urgence") ?? "").trim()
  const message = String(formData.get("message") ?? "").trim()
  const honeypot = String(formData.get("website") ?? "").trim()

  if (honeypot) {
    return { status: "success", message: "Merci, votre demande a bien été envoyée." }
  }

  const fieldErrors: ContactState["fieldErrors"] = {}
  if (nom.length < 2) fieldErrors.nom = "Merci d'indiquer votre nom."
  if (!/^[+0-9 .\-()/]{8,}$/.test(telephone))
    fieldErrors.telephone = "Numéro de téléphone invalide."
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    fieldErrors.email = "Email invalide."
  if (adresse.length < 4) fieldErrors.adresse = "Indiquez la rue et le numéro."
  if (!/^1[0-2][0-9]{2}$/.test(npa))
    fieldErrors.npa = "NPA genevois (1200–1299)."
  if (ville.length < 2) fieldErrors.ville = "Indiquez la commune."
  if (!type) fieldErrors.type = "Choisissez un type d'intervention."
  if (!urgence) fieldErrors.urgence = "Précisez le niveau d'urgence."

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Quelques champs sont à vérifier.",
      fieldErrors,
    }
  }

  const fields = { nom, telephone, email, adresse, npa, ville, acces, type, urgence, message }
  console.info("[contact] submission", fields)

  // Forward to the owner's Gmail via Resend. The Resend account is registered
  // with serruriernova@gmail.com, so sending to that address needs no domain setup.
  const apiKey = process.env.RESEND_API_KEY
  if (apiKey) {
    const lines = [
      `Nom : ${nom}`,
      `Téléphone : ${telephone}`,
      `Email : ${email || "—"}`,
      `Adresse : ${adresse}, ${npa} ${ville}`,
      `Accès / étage : ${acces || "—"}`,
      `Type d'intervention : ${type}`,
      `Urgence : ${urgence}`,
      "",
      "Message :",
      message || "—",
    ]
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: "Site Serrurier Nova <onboarding@resend.dev>",
          to: [process.env.CONTACT_TO_EMAIL || "serruriernova@gmail.com"],
          reply_to: email || undefined,
          subject: `Nouvelle demande du site — ${type} — ${nom} (${ville})`,
          text: lines.join("\n"),
        }),
      })
      if (!res.ok) {
        console.error("[contact] resend error", res.status, await res.text())
        return {
          status: "error",
          message:
            "L'envoi n'a pas fonctionné. Appelez-nous directement au 022 557 65 59 ou écrivez sur WhatsApp au 076 475 08 81.",
        }
      }
    } catch (err) {
      console.error("[contact] resend failed", err)
      return {
        status: "error",
        message:
          "L'envoi n'a pas fonctionné. Appelez-nous directement au 022 557 65 59 ou écrivez sur WhatsApp au 076 475 08 81.",
      }
    }
  }

  return {
    status: "success",
    message:
      "Merci, votre demande est arrivée. Le serrurier vous rappellera dès que possible. Pour une urgence, composez le 022 557 65 59.",
  }
}
