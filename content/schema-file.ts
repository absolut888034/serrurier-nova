import fs from "node:fs"
import path from "node:path"
import { siteSchemaJson } from "./schema"

/**
 * Tient `content/schema.generated.json` à jour avec `content/schema.ts`. En local (dev ou build), le fichier est
 * réécrit s'il a changé. En CI et sur Vercel, le build échoue s'il n'est pas à jour : le panneau NexaLab
 * lit la version commitée, elle doit correspondre au code.
 */
export function syncContentSchema() {
  const file = path.join(process.cwd(), "content", "schema.generated.json")
  const expected = JSON.stringify(siteSchemaJson(), null, 2) + "\n"
  const current = fs.existsSync(file) ? fs.readFileSync(file, "utf8") : ""
  if (current === expected) return
  if (process.env.CI || process.env.VERCEL) {
    throw new Error("content/schema.generated.json n'est pas à jour avec content/schema.ts : lancez `npm run build` en local et commitez le fichier.")
  }
  fs.writeFileSync(file, expected)
}
