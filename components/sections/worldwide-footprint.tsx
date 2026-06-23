import { SectionBadge } from "@/components/section-badge"
import { Globe } from "lucide-react"

const OFFICES = [
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    address: "Office # 3207, 3rd Floor, NSTP, H-12, Islamabad, Pakistan",
  },
  {
    country: "Italy",
    flag: "🇮🇹",
    address: "Viale Francesco, Crispi 11, Milan, Italy",
  },
  {
    country: "Pakistan",
    flag: "🇵🇰",
    address: "Office # 3207, 3rd Floor, NSTP, H-12, Islamabad, Pakistan",
  },
]

export function WorldwideFootprint() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto px-20">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-12">
          <div>
            <SectionBadge icon={Globe}>Branches</SectionBadge>
            <h2 className="mt-4 font-heading text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              Our Worldwide Footprint
            </h2>
          </div>
          <p className="max-w-xs text-lg font-semibold text-foreground/70 lg:text-right">
            We craft high-impact digital experiences through strategic design,
            seamless coding, and creative thinking.
          </p>
        </div>

        {/* World map */}
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src="/assets/worldBG.jpg"
            alt="World map"
            className="w-full h-64 lg:h-96 object-cover opacity-60"
          />

          {/* Pin: UK */}
          <div className="absolute top-[28%] left-[43%] flex flex-col items-center">
            <div className="size-3 rounded-full bg-primary shadow-lg shadow-primary/50" />
            <span className="mt-1 rounded bg-background/90 px-2 py-0.5 text-xs font-semibold text-foreground">
              United Kingdom
            </span>
          </div>

          {/* Pin: Italy */}
          <div className="absolute top-[38%] left-[49%] flex flex-col items-center">
            <div className="size-3 rounded-full bg-foreground shadow-lg" />
            <span className="mt-1 rounded bg-background/90 px-2 py-0.5 text-xs font-semibold text-foreground">
              Italy
            </span>
          </div>

          {/* Pin: Pakistan */}
          <div className="absolute top-[35%] left-[62%] flex flex-col items-center">
            <div className="size-3 rounded-full bg-primary shadow-lg shadow-primary/50" />
            <span className="mt-1 rounded bg-background/90 px-2 py-0.5 text-xs font-semibold text-foreground">
              Pakistan
            </span>
          </div>
        </div>

        {/* Office cards */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {OFFICES.map((office) => (
            <div
              key={office.country}
              className="rounded-xl border border-border bg-secondary p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{office.flag}</span>
                <span className="font-heading font-bold text-lg text-foreground">
                  {office.country}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {office.address}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
