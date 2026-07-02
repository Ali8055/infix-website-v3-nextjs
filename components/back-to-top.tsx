"use client"

import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"

const SCROLL_THRESHOLD = 300

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-24 right-6 z-50 flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 sm:bottom-28 sm:right-8",
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      )}
    >
      <ChevronUp className="size-5" aria-hidden />
    </button>
  )
}
