import data from "./faq.json"
import { FaqSchema } from "./schema"
import { z } from "zod"

export interface FAQItem {
  q: string
  a: string
}

export const FAQ_ITEMS: FAQItem[] = z.array(FaqSchema).parse(data)
