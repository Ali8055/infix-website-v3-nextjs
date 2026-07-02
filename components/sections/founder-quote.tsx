"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { Play, X } from "lucide-react"

import { cn } from "@/lib/utils"

const FOUNDER_VIDEO_SRC = "/assets/hero1.mp4"

const RIPPLE_RINGS = [
  {
    className: "size-16 bg-primary/30",
    delay: "0s",
  },
  {
    className: "size-[4.75rem] bg-primary/18",
    delay: "0.45s",
  },
  {
    className: "size-24 border border-primary/40 bg-primary/10",
    delay: "0.9s",
  },
] as const

function PlayVideoButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-haspopup="dialog"
      aria-label="Play founder video"
      className="group mt-8 flex items-center gap-4 text-lavender-foreground transition-opacity hover:opacity-90"
    >
      <span className="relative flex size-14 items-center justify-center">
        {RIPPLE_RINGS.map((ring, index) => (
          <span
            key={index}
            aria-hidden
            style={{ animationDelay: ring.delay }}
            className={cn(
              "pointer-events-none absolute rounded-full animate-play-ripple",
              ring.className
            )}
          />
        ))}

        <span className="relative z-10 flex size-14 items-center justify-center rounded-full bg-lavender-foreground shadow-[0_8px_24px_rgba(35,25,55,0.18)]">
          <Play className="ml-0.5 size-5 fill-primary text-primary" />
        </span>
      </span>

      <span className="text-base font-bold tracking-tight">Play Video</span>
    </button>
  )
}

function FounderVideoModal({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)

    const frame = window.requestAnimationFrame(() => {
      void videoRef.current?.play()
    })

    return () => {
      window.cancelAnimationFrame(frame)
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [open, onClose])

  if (!open) return null

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
      <button
        type="button"
        aria-label="Close video"
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Founder video"
        className="relative z-10 w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/10"
      >
        <button
          type="button"
          aria-label="Close video player"
          onClick={onClose}
          className="absolute top-3 right-3 z-20 flex size-9 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80"
        >
          <X className="size-4" />
        </button>

        <video
          ref={videoRef}
          src={FOUNDER_VIDEO_SRC}
          controls
          playsInline
          className="aspect-video w-full bg-black object-contain"
        />
      </div>
    </div>,
    document.body
  )
}

export function FounderQuote() {
  const [videoOpen, setVideoOpen] = useState(false)

  const openVideo = useCallback(() => setVideoOpen(true), [])
  const closeVideo = useCallback(() => setVideoOpen(false), [])

  return (
    <>
      <section
        id="who-we-are"
        className="relative flex min-h-screen items-center overflow-hidden bg-lavender"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/FAQ-BG.png"
            alt="Section background"
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 mix-blend-multiply" />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-20">
          <div className="relative mx-auto w-full max-w-sm">
            <img src="/assets/team/CEO.png" alt="Infix Systems founder" />
          </div>

          <div>
            <blockquote className="font-heading text-4xl leading-tight text-lavender-foreground sm:text-6xl">
              &ldquo;Delivering Gen-AI solutions &amp; MVP&apos;s for real world
              impact&rdquo;
            </blockquote>

            <div className="mt-8 flex flex-col gap-4 border-t border-lavender-foreground/15 pt-8 sm:flex-row sm:gap-8">
              <span className="shrink-0 text-lg font-semibold text-lavender-foreground/70">
                About Me
              </span>
              <p className="text-lg leading-relaxed text-lavender-foreground/80">
                Rooted in innovation and real world impact, Infix&apos;s
                platforms support businesses and startups with product
                development, automation, and AI integration accelerating growth
                and solving challenges across diverse industries.
              </p>
            </div>

            <PlayVideoButton onClick={openVideo} />
          </div>
        </div>
      </section>

      <FounderVideoModal open={videoOpen} onClose={closeVideo} />
    </>
  )
}
