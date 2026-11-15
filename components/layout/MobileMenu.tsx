"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import { Logo } from "@/components/ui/Logo"
import { LiveDot } from "@/components/ui/LiveDot"
import { LiveTime } from "@/components/ui/LiveTime"

type NavItem = { href: string; label: string }

export function MobileMenu({ items }: { items: readonly NavItem[] }) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Ouvrir le menu"
        aria-expanded={open}
        className="menu-trigger"
        style={{
          width: 44,
          height: 44,
          background: "rgba(244, 241, 234, 0.55)",
          border: "1px solid rgba(13, 18, 38, 0.10)",
          borderRadius: 999,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          display: "none",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "background 0.25s ease, border-color 0.25s ease",
          boxShadow: "0 1px 0 rgba(255, 255, 255, 0.6) inset, 0 2px 14px -8px rgba(13, 18, 38, 0.18)",
        }}
      >
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
          <line x1="0" y1="1" x2="18" y2="1" stroke="var(--color-navy)" strokeWidth="2" strokeLinecap="round" />
          <line x1="0" y1="7" x2="18" y2="7" stroke="var(--color-navy)" strokeWidth="2" strokeLinecap="round" />
          <line x1="0" y1="13" x2="18" y2="13" stroke="var(--color-navy)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {open && mounted && createPortal(
        <div
          className="menu-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
          }}
        >
          <div
            className="menu-panel"
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 1001,
              background: "var(--color-paper, #f4f1ea)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              display: "flex",
              flexDirection: "column",
              padding: "1.25rem var(--gutter) 2rem",
              animation: "menuFadeIn 0.3s ease-out",
              overflowY: "auto",
            }}
          >
            {/* Top bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "auto",
              }}
            >
              <Logo size={44} />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fermer le menu"
                style={{
                  width: 44,
                  height: 44,
                  background: "transparent",
                  border: "1px solid rgba(13, 18, 38, 0.18)",
                  borderRadius: 999,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "background 0.2s ease, border-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(13, 18, 38, 0.05)"
                  e.currentTarget.style.borderColor = "rgba(13, 18, 38, 0.32)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent"
                  e.currentTarget.style.borderColor = "rgba(13, 18, 38, 0.18)"
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <line x1="1" y1="1" x2="13" y2="13" stroke="var(--color-navy)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="13" y1="1" x2="1" y2="13" stroke="var(--color-navy)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <nav
              aria-label="Navigation mobile"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
                margin: "2.5rem 0 auto",
              }}
            >
              {items.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="menu-link"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2rem",
                    fontWeight: 600,
                    color: "var(--color-navy)",
                    letterSpacing: "-0.02em",
                    padding: "0.7rem 0",
                    borderBottom: "1px solid var(--color-hairline-dark)",
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    gap: "1rem",
                    transition: "padding-left 0.25s ease, color 0.2s ease",
                    animation: `menuItemFadeIn 0.4s ease-out ${0.1 + i * 0.06}s both`,
                  }}
                >
                  <span>{item.label}</span>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.7rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--color-steel)",
                      fontWeight: 500,
                    }}
                  >
                    0{i + 1}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Bottom: phone CTA + status */}
            <div
              style={{
                marginTop: "2.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                animation: "menuItemFadeIn 0.4s ease-out 0.45s both",
              }}
            >
              <a
                href="tel:+41225576559"
                onClick={() => setOpen(false)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.85rem",
                  padding: "1.15rem 1.5rem",
                  background: "var(--color-vermillion)",
                  color: "var(--color-paper)",
                  borderRadius: 999,
                  fontFamily: "var(--font-mono)",
                  fontSize: "1.18rem",
                  fontWeight: 600,
                  letterSpacing: "0.01em",
                  fontVariantNumeric: "tabular-nums",
                  transition: "background 0.2s ease, transform 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--color-vermillion-2)"
                  e.currentTarget.style.transform = "translateY(-1px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--color-vermillion)"
                  e.currentTarget.style.transform = ""
                }}
              >
                <LiveDot variant="paper" />
                <span>022 557 65 59</span>
              </a>

              <a
                href="tel:+41764750881"
                onClick={() => setOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.6rem",
                  padding: "0.85rem 1.25rem",
                  background: "transparent",
                  border: "1px solid rgba(13, 18, 38, 0.14)",
                  borderRadius: 999,
                  fontFamily: "var(--font-body)",
                  fontSize: "0.78rem",
                  color: "var(--color-ink-2)",
                  transition: "border-color 0.2s ease, background 0.2s ease",
                }}
              >
                <span style={{ textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 500 }}>
                  Ligne directe · WhatsApp
                </span>
                <span aria-hidden="true" style={{ opacity: 0.4 }}>—</span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontVariantNumeric: "tabular-nums",
                    fontWeight: 600,
                    color: "var(--color-navy)",
                  }}
                >
                  076 475 08 81
                </span>
              </a>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.65rem",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  color: "var(--color-steel)",
                }}
              >
                <LiveDot variant="green" />
                <span>
                  Opérationnel · <LiveTime /> CET · Joignable 24h/24
                </span>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      <style>{`
        @media (max-width: 1099px) {
          .menu-trigger { display: inline-flex !important; }
        }
        .menu-trigger:hover {
          background: rgba(28, 37, 72, 0.08) !important;
          border-color: rgba(13, 18, 38, 0.20) !important;
        }
        .menu-link:hover {
          padding-left: 0.5rem !important;
          color: var(--color-brass-deep) !important;
        }
        @keyframes menuFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes menuItemFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  )
}
