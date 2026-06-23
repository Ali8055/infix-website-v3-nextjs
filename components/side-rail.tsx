import Image from "next/image"
import { InstagramIcon, LinkedInIcon, XIcon } from "./social-icons"

export function SideRail() {
  return (
    <div className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2  items-center gap-3 lg:flex">
      <div className="flex flex-col gap-2 rounded-2xl  p-2 bg-primary/20 backdrop-blur">
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

      <button
        type="button"
        className="flex flex-col items-center gap-2 rounded-l-lg bg-primary px-4 py-6 text-xl font-semibold text-primary-foreground"
      >


        {/* Label applies vertical writing mode directly to keep text separate from icon behavior */}
        <span className="[writing-mode:vertical-lr]">
          Let&apos;s Talk
        </span>
        <div className="shrink-0">
          <Image
            src="/icon-svgs/bot.svg"
            alt="Bot Icon"
            width={34}
            height={34}
            className="text-primary-foreground"
          />
        </div>
      </button>
    </div>
  )
}