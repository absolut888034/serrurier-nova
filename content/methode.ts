export interface MethodStep {
  num: string
  title: string
  body: string
  image: string
  imageAlt: string
}

export const METHOD_STEPS: MethodStep[] = [
  {
    num: "01",
    title: "Appel",
    body:
      "Vous décrivez le problème. Je vous dis si je peux le résoudre, en combien de temps je peux être chez vous, et combien cela coûtera.",
    image: "/images/methode-01-appel.png",
    imageAlt: "Serrurier répondant à un appel d'urgence",
  },
  {
    num: "02",
    title: "Diagnostic",
    body:
      "Sur place, je vérifie la serrure, la porte et le contexte. Si le devis change, je vous le dis avant de toucher quoi que ce soit.",
    image: "/images/methode-02-diagnostic.png",
    imageAlt: "Diagnostic d'une serrure de porte à Genève",
  },
  {
    num: "03",
    title: "Intervention",
    body:
      "Outils non destructifs en priorité. Je remplace ou répare uniquement ce qui le nécessite, avec des pièces de qualité reconnue.",
    image: "/images/methode-03-intervention.png",
    imageAlt: "Remplacement d'un cylindre de serrure",
  },
  {
    num: "04",
    title: "Paiement",
    body:
      "Cartes, TWINT, espèces ou facture. Reçu détaillé immédiat, utilisable pour l'assurance ou la régie.",
    image: "/images/methode-04-paiement.png",
    imageAlt: "Remise des clés et reçu détaillé",
  },
]
