import type { NextConfig } from "next"
import { syncContentSchema } from "./content/schema-file"

// content/schema.generated.json : ce que le panneau NexaLab peut modifier (voir content/schema.ts).
syncContentSchema()

const config: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: [],
  },
  // Canonical host: force apex (serruriernova.ch) -> www.serruriernova.ch
  // so search engines consolidate ranking signals on a single hostname.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "serruriernova.ch" }],
        destination: "https://www.serruriernova.ch/:path*",
        permanent: true,
      },
    ]
  },
}

export default config
