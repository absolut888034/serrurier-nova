export interface Review {
  author: string
  body: string
  rating: 1 | 2 | 3 | 4 | 5
  location: string
  date: string // affichage humain "Mars 2026"
  isoDate: string // ISO pour schema
}

/** Avis vérifiés (extrait du Google Business Profile). */
export const REVIEWS: Review[] = [
  {
    author: "M. R.",
    body:
      "Intervention rapide à 2 h du matin pour une porte claquée. Prix annoncé au téléphone, prix payé sur place. Aucune mauvaise surprise.",
    rating: 5,
    location: "Carouge",
    date: "Mars 2026",
    isoDate: "2026-03-15",
  },
  {
    author: "A. B.",
    body:
      "Très professionnel, ponctuel et transparent. M'a expliqué le problème, proposé deux options et installé un cylindre haute sécurité le jour même.",
    rating: 5,
    location: "Plan-les-Ouates",
    date: "Janvier 2026",
    isoDate: "2026-01-22",
  },
  {
    author: "L. D.",
    body:
      "Appel à 23 h, délai annoncé directement au téléphone. Travail propre, paiement par TWINT, facture immédiate pour l'assurance.",
    rating: 5,
    location: "Meyrin",
    date: "Décembre 2025",
    isoDate: "2025-12-08",
  },
]
