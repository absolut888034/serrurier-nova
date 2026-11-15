import type { NextConfig } from "next"

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
