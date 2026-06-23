import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink">
      <img
        src="/assets/hero-section-bg.png"
        alt="hero"
        className="absolute size-full object-cover "
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/30 to-ink/70" />

      <div className="relative mx-auto flex min-h-[88vh] px-20 flex-col justify-center pt-32 pb-20">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur">
            <Sparkles className="size-3.5 text-primary" />
            AI-Powered Innovation for Businesses
          </span>

          <h1 className="mt-6 text-balance font-heading text-5xl  leading-[1.20] text-white sm:text-6xl lg:text-6xl">
            The Home of <br/> Innovative Software &amp; Engineering Solutions
          </h1>

         

          <div className="mt-9">
            <Button
              size="lg"
              className="rounded-sm cursor-pointer py-6 bg-white px-8 text-ink hover:bg-white/90"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
