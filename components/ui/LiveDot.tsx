type Variant = "green" | "red" | "paper"

const config: Record<Variant, { bg: string; animation: string }> = {
  green: { bg: "var(--color-green)", animation: "pulse-green 2.4s ease-out infinite" },
  red:   { bg: "var(--color-vermillion)", animation: "pulse-red 2s ease-out infinite" },
  paper: { bg: "var(--color-paper)", animation: "pulse-paper 2s ease-out infinite" },
}

export function LiveDot({ variant = "green", size = 7 }: { variant?: Variant; size?: number }) {
  const { bg, animation } = config[variant]
  return (
    <span
      aria-hidden="true"
      style={{
        display: "inline-block",
        width: size,
        height: size,
        borderRadius: "50%",
        background: bg,
        animation,
        flexShrink: 0,
      }}
    />
  )
}
