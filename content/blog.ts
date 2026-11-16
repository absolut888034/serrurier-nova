import data from "./blog.json"
import { BlogPostSchema } from "./schema"
import { z } from "zod"

export interface BlogSection {
  type: "p" | "h2" | "h3" | "ul" | "ol" | "callout" | "quote"
  content: string | string[]
}

export interface BlogFAQ {
  q: string
  a: string
}

export interface BlogPost {
  slug: string
  title: string
  /** Used in card + meta description (~155 chars). */
  excerpt: string
  /** ISO 8601. */
  date: string
  dateDisplay: string
  category: "Sécurité" | "Urgence" | "Conseil" | "Choix matériel"
  readMinutes: number
  /** Image principale (illustration de la card). */
  image?: string
  /** Corps de l'article — sections successives. */
  body: BlogSection[]
  faqs?: BlogFAQ[]
  related?: string[]
}

// Dans le JSON, le slug de l'article s'appelle `id`.
export const BLOG_POSTS: BlogPost[] = z
  .array(BlogPostSchema)
  .parse(data)
  .map(({ id, ...post }) => ({ slug: id, ...post }))

export { BLOG_CATEGORIES } from "./schema"
