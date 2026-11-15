"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export interface SlideItem {
  src: string
  alt: string
  caption?: string
}

export function Slider({
  slides,
  interval = 5000,
  aspect = "3 / 2",
  fillHeight = false,
}: {
  slides: SlideItem[]
  interval?: number
  aspect?: string
  fillHeight?: boolean
}) {
  const [index, setIndex] = useState(0)
  const paused = useRef(false)

  useEffect(() => {
    // Respect user preference for reduced motion — don't auto-advance.
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }
    const id = window.setInterval(() => {
      if (!paused.current) setIndex((i) => (i + 1) % slides.length)
    }, interval)
    return () => window.clearInterval(id)
  }, [interval, slides.length])

  const go = (i: number) => setIndex((i + slides.length) % slides.length)

  return (
    <div
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      style={{
        position: "relative",
        borderRadius: 16,
        overflow: "hidden",
        background: "var(--color-navy-deep)",
        border: "1px solid rgba(212, 216, 226, 0.12)",
        boxShadow: "0 30px 60px -20px rgba(0,0,0,0.55)",
        ...(fillHeight
          ? { height: "100%", minHeight: 320 }
          : { aspectRatio: aspect }),
      }}
    >
      {slides.map((s, i) => (
        <div
          key={s.src}
          aria-hidden={i !== index}
          style={{
            position: "absolute",
            inset: 0,
            opacity: i === index ? 1 : 0,
            transition: "opacity 0.9s ease",
            transform: i === index ? "scale(1)" : "scale(1.04)",
            transitionProperty: "opacity, transform",
            transitionDuration: "0.9s, 7s",
          }}
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            sizes="(min-width: 980px) 50vw, 100vw"
            style={{ objectFit: "cover" }}
            priority={i === 0}
          />
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(6,9,20,0) 40%, rgba(6,9,20,0.75) 100%)",
            }}
          />
        </div>
      ))}

      {/* Brass corner brackets */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          width: 22,
          height: 22,
          borderTop: "1.5px solid var(--color-brass)",
          borderLeft: "1.5px solid var(--color-brass)",
          opacity: 0.85,
          pointerEvents: "none",
        }}
      />
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 10,
          right: 10,
          width: 22,
          height: 22,
          borderBottom: "1.5px solid var(--color-brass)",
          borderRight: "1.5px solid var(--color-brass)",
          opacity: 0.85,
          pointerEvents: "none",
        }}
      />

      {/* Caption */}
      {slides[index].caption && (
        <div
          style={{
            position: "absolute",
            left: "1.2rem",
            bottom: "1.1rem",
            right: "5rem",
            fontFamily: "var(--font-mono)",
            fontSize: "0.7rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--color-paper)",
            fontWeight: 500,
            textShadow: "0 1px 2px rgba(0,0,0,0.6)",
          }}
        >
          {slides[index].caption}
        </div>
      )}

      {/* Dots */}
      <div
        style={{
          position: "absolute",
          right: "0.6rem",
          bottom: "0.6rem",
          display: "inline-flex",
          gap: "0.2rem",
          alignItems: "center",
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Voir la photo ${i + 1} sur ${slides.length}`}
            aria-current={i === index ? "true" : undefined}
            onClick={() => go(i)}
            className="slider-dot"
            style={{
              minWidth: 44,
              width: i === index ? 44 : 28,
              height: 44,
              borderRadius: 22,
              border: "none",
              background: "transparent",
              cursor: "pointer",
              padding: 0,
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "width 0.3s ease",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                display: "block",
                width: i === index ? 22 : 8,
                height: 4,
                borderRadius: 2,
                background:
                  i === index ? "var(--color-brass)" : "rgba(244, 241, 234, 0.4)",
                transition: "width 0.3s ease, background 0.3s ease",
              }}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
