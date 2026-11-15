import Image from "next/image"

export function Logo({ size = 60, priority = false }: { size?: number; priority?: boolean }) {
  return (
    <Image
      src="/images/logo.png"
      alt="Serrurier Nova Genève"
      width={484}
      height={448}
      priority={priority}
      style={{
        height: size,
        width: "auto",
        display: "block",
      }}
    />
  )
}
