"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { XIcon as CloseIcon } from "lucide-react"
import { InstagramIcon, LinkedInIcon, XIcon } from "./social-icons"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const LETS_TALK_VIDEO_SRC = "/assets/hero1.mp4"

export function SideRail() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 items-center gap-3 lg:flex">
      <div className="flex flex-col gap-2 rounded-2xl bg-primary/20 p-2 backdrop-blur">
        {[
          { icon: XIcon, label: "X" },
          { icon: InstagramIcon, label: "Instagram" },
          { icon: LinkedInIcon, label: "LinkedIn" },
        ].map(({ icon: Icon, label }) => (
          <a
            key={label}
            href="#"
            aria-label={label}
            className="flex size-9 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          >
            <Icon className="size-4" />
          </a>
        ))}
      </div>

      <Popover modal open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            type="button"
            aria-haspopup="dialog"
            aria-label="Open Let's Talk video"
            className="flex flex-col items-center gap-2 rounded-l-lg bg-primary px-4 py-6 text-xl font-semibold text-primary-foreground"
          >
            <span className="[writing-mode:vertical-lr]">
              Let&apos;s Talk
            </span>
            <div className="shrink-0">
              <Image
                src="/icon-svgs/bot.svg"
                alt=""
                aria-hidden
                width={34}
                height={34}
                className="text-primary-foreground"
              />
            </div>
          </button>
        </PopoverTrigger>

        <PopoverContent
          side="left"
          align="center"
          sideOffset={16}
          aria-labelledby="lets-talk-dialog-title"
          className="w-[min(320px,calc(100vw-6rem))] gap-0 overflow-hidden rounded-2xl p-0 shadow-xl"
        >
          <div className="flex items-center justify-between border-b border-border/60 px-4 py-3">
            <p id="lets-talk-dialog-title" className="font-heading text-base font-semibold">
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
    </div>
  )
}
