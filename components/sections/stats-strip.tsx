const STATS = [
  { value: "14+", label: "Years of continual excellence" },
  { value: "3500+", label: "Change makers driving revolution" },
  { value: "3+", label: "Countries with our presence and clientele" },
  { value: "128+", label: "Active clients across the globe" },
]

export function StatsStrip() {
  return (
    <section className="bg-background border-b border-border">
      <div className="mx-auto px-20 py-10">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.value} className="flex flex-col gap-1">
              <span className="font-heading text-4xl font-bold text-foreground">
                {stat.value}
              </span>
              <span className="text-base text-muted-foreground leading-snug max-w-[10rem]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
