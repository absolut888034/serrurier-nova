export type ServiceTag = "Urgence" | "Service"

export interface Service {
  slug: string
  title: string
  shortTitle: string
  shortSub: string
  tag: ServiceTag
  description: string
  image: string
}

export const SERVICES: Service[] = [
  {
    slug: "ouverture-de-porte",
    title: "Ouverture de porte",
    shortTitle: "Ouverture",
    shortSub: "de porte",
    tag: "Urgence",
    description:
      "Porte claquée, clés oubliées, serrure bloquée. Ouverture fine et sans destruction dans 9 cas sur 10.",
    image: "/images/svc-ouverture.png",
  },
  {
    slug: "changement-de-serrure",
    title: "Changement de serrure",
    shortTitle: "Changement",
    shortSub: "de serrure",
    tag: "Service",
    description:
      "Remplacement complet de serrure, cylindre ou verrou. Toutes marques : Kaba, Fichet, Bricard, Vachette.",
    image: "/images/svc-changement.png",
  },
  {
    slug: "depannage-apres-effraction",
    title: "Dépannage après effraction",
    shortTitle: "Après",
    shortSub: "effraction",
    tag: "Urgence",
    description:
      "Sécurisation immédiate, constat photographique pour l'assurance, devis de remise en état. Mise en sécurité le soir même.",
    image: "/images/svc-effraction.png",
  },
]

export const HOME_SERVICES = SERVICES
