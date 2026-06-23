import { Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { SectionBadge } from "../section-badge"

const SERVICES = [
  { title: "AI Transformation", icon: "/icon-svgs/card1.svg" },
  { title: "Data & Analytics", icon: "/icon-svgs/card2.svg" },
  { title: "Cloud", icon: "/icon-svgs/card3.svg" },
  { title: "Security", icon: "/icon-svgs/card4.svg" },
  { title: "Business Process Services (BPS)", icon: "/icon-svgs/card5.svg" },
]

const DESC = "AI-driven transformation enables organizations to optimize operations,"

interface ServicesProps {
  activeIndex: number
  setActiveIndex: (index: number) => void
}

export function Services({ activeIndex, setActiveIndex }: ServicesProps) {
  return (
    <section id="services" className="relative overflow-hidden">
      <div className="relative z-10 px-20 py-20 lg:py-28">
        
        {/* Header Section */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionBadge icon={Sparkles}>Our Services</SectionBadge>
            <h2 className="mt-10 text-balance font-heading text-6xl tracking-tight text-foreground sm:text-6xl">
              Our Exclusive Services
            </h2>
          </div>
          <div>
            <p className="font-bold text-pretty text-lg lg:text-right">
              We craft high-impact digital experiences 
            </p>
            <p className="font-bold text-pretty text-lg leading-relaxed lg:text-right">
              through strategic design, seamless
            </p>
            <p className="font-bold text-pretty text-lg leading-relaxed lg:text-right">
               coding, and creative thinking.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {SERVICES.map(({ title, icon }, i) => {
            const isFeatured = i === activeIndex

            return (
              <div
                key={title}
                onClick={() => setActiveIndex(i)} // Change the active layout target on click
                className={cn(
                  "group flex flex-col justify-between rounded-lg border p-6 transition-all duration-300 min-h-[260px] cursor-pointer select-none",
                  isFeatured
                    ? "border-[#7B51FC] bg-gradient-to-b from-white via-[#7B51FC]/5 to-[#7B51FC]/75 shadow-sm scale-[1.02]"
                    : "border-neutral-200 backdrop-blur-[1px] hover:border-[#7B51FC]/30 hover:shadow-md",
                )}
              >
                <div className="flex items-start justify-start">
                  <img
                    src={icon}
                    alt={`${title} icon`}
                    className="size-9 object-contain"
                  />
                </div>

                <div className="mt-8">
                  <h3 className="font-heading text-2xl font-medium tracking-tight text-neutral-900">
                    {title}
                  </h3>
                  <p className="mt-4 text-lg font-medium line-clamp-3">
                    {DESC}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}