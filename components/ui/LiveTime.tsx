"use client"

import { useEffect, useState } from "react"

export function LiveTime() {
  const [time, setTime] = useState<string>("—")

  useEffect(() => {
    const update = () => {
      const t = new Date().toLocaleTimeString("fr-CH", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Europe/Zurich",
      })
      setTime(t)
    }
    update()
    const id = setInterval(update, 30_000)
    return () => clearInterval(id)
  }, [])

  return (
    <span aria-live="off" suppressHydrationWarning>
      {time}
    </span>
  )
}
