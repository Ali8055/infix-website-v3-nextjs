import { Sparkles } from "lucide-react"

export function WhoWeAreHero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink h-screen">
      <img
        src="/assets/hero-section-bg.png"
        alt="Who We Are hero"
        className="absolute size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/30 to-ink/70" />

      <div className="relative mx-auto flex min-h-[88vh] px-20 flex-col justify-center pt-32 pb-20">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur">
            <Sparkles className="size-3.5 text-primary" />
            Get to Know Us
          </span>

          <h1 className="mt-6 text-balance font-heading text-5xl leading-[1.20] text-white sm:text-6xl lg:text-6xl">
            Your Trusted IT Partner
          </h1>
        </div>
      </div>
    </section>
  )
}
