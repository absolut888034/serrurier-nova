import data from "./methode.json"
import { MethodStepSchema } from "./schema"
import { z } from "zod"

export interface MethodStep {
  num: string
  title: string
  body: string
  image: string
  imageAlt: string
}

export const METHOD_STEPS: MethodStep[] = z.array(MethodStepSchema).parse(data)
