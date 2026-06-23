import { Play } from "lucide-react"

export function FounderQuote() {
  return (
    // Added 'flex items-center' to vertically center the inner grid inside the h-screen
    <section id="who-we-are" className="bg-lavender h-screen flex items-center">
      {/* Cleaned up duplicate px-20 / px-6 spacing */}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-20">
        <div className="relative mx-auto w-full max-w-sm">
          <img
            src="/assets/team/CEO.png"
            alt="Infix Systems founder"
          />
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
              Rooted in innovation and real world impact, Infix&apos;s platforms
              support businesses and startups with product development,
              automation, and AI integration accelerating growth and solving
              challenges across diverse industries.
            </p>
          </div>

          <button
            type="button"
            className="mt-8 flex items-center gap-3 text-sm font-semibold text-lavender-foreground"
          >
            <span className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Play className="size-4 fill-current" />
            </span>
            Play Video
          </button>
        </div>
      </div>
    </section>
  )
}