import data from "./services.json"
import { ServiceSchema } from "./schema"
import { z } from "zod"

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

// Dans le JSON, le slug de la page s'appelle `id`.
export const SERVICES: Service[] = z
  .array(ServiceSchema)
  .parse(data)
  .map(({ id, ...service }) => ({ slug: id, ...service }))

export const HOME_SERVICES = SERVICES
