"use client"

import { useState } from "react"
import Link from "next/link"
import { XIcon as CloseIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const LETS_TALK_VIDEO_SRC = "/assets/hero1.mp4"

export function LetsTalkWidget() {
  const [open, setOpen] = useState(false)

  return (
    <Popover modal open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          aria-haspopup="dialog"
          aria-label="Open Let's Talk video"
          className="group fixed bottom-6 right-6 z-50 size-16 overflow-hidden rounded-full border-2 border-white/20 bg-black shadow-xl ring-1 ring-black/10 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 sm:right-8 sm:size-20"
        >
          <video
            src={LETS_TALK_VIDEO_SRC}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden
            className="size-full object-cover"
          />
          <span className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-inset ring-white/10" />
        </button>
      </PopoverTrigger>

      <PopoverContent
        side="top"
        align="end"
        sideOffset={12}
        aria-labelledby="lets-talk-dialog-title"
        className="w-[min(320px,calc(100vw-3rem))] gap-0 overflow-hidden rounded-2xl p-0 shadow-xl"
      >
        <div className="flex items-center justify-between border-b border-border/60 px-4 py-3">
          <p
            id="lets-talk-dialog-title"
            className="font-heading text-base font-semibold"
          >
            Let&apos;s Talk
          </p>
          <button
            type="button"
            aria-label="Close Let's Talk panel"
            onClick={() => setOpen(false)}
            className="flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <CloseIcon className="size-4" />
          </button>
        </div>

        <div className="flex flex-col gap-4 p-4">
          <video
            src={LETS_TALK_VIDEO_SRC}
            autoPlay
            muted
            loop
            playsInline
            aria-label="Introduction video"
            className="aspect-[9/16] w-full rounded-xl bg-black object-cover"
          />

          <Button asChild size="lg" className="w-full py-5 text-base">
            <Link href="/contact/#contactform">Contact Me</Link>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
