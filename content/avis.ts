import data from "./avis.json"
import { ReviewSchema } from "./schema"
import { z } from "zod"

export interface Review {
  author: string
  body: string
  rating: 1 | 2 | 3 | 4 | 5
  location: string
  date: string // affichage humain "Mars 2026"
  isoDate: string // ISO pour schema
}

/** Avis vérifiés (extrait du Google Business Profile). */
export const REVIEWS: Review[] = z.array(ReviewSchema).parse(data) as Review[]
