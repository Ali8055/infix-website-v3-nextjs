import { ArrowRight, BriefcaseBusiness } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionBadge } from "../section-badge"

const PROJECTS = [
  {
    name: "InDrive",
    image: "/assets/ai-network.png",
    description:
      "inDrive is an international company operating in the fields of ride-hailing, delivery, cargo transportation, and urban services.",
  },
  {
    name: "Bandy",
    image: "/assets/figma.png",
    description:
      'This project involved creating an application for managing shared accommodation and expenses. I named it Bandy, from the English word "band," meaning group.',
  },
  {
    name: "TopCoach",
    image: "/assets/topcoach.png",
    description:
      "Projet réalisé lors de mon alternance chez Upyne Digital Solution. J'ai dû intégrer une maquette réalisée au préalable, sur WordPress.",
  },
  {
    name: "CRM TECH-O",
    image: "/assets/crm.png",
    description:
      "I was contacted by the development agency SINEO for a project with their client TECH-O, to design a high-definition mockup and an advanced prototype of a custom CRM.",
  },
]

export function FeaturedProjects() {
  return (
    <section id="solutions" className="bg-ink">
      {/* Changed: Made padding fluid (px-4 to px-8 on desktop, py-12 to py-28) */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-28">
        
        {/* Header Section */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionBadge icon={BriefcaseBusiness} dark>
              Selected Work
            </SectionBadge>
            <h2 className="mt-4 text-balance font-medium text-3xl tracking-tight text-white sm:text-4xl lg:text-5xl">
              Featured projects &amp; creative works
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-base text-white/80 lg:text-right lg:text-lg">
            We don&apos;t just build websites; we create digital experiences
            that resonate with users and drive long-term business growth.
          </p>
        </div>

        {/* Projects Grid */}
        {/* Changed: Adjusted gap for mobile, shifts from 1 col on mobile/tablet to 2 cols on big desktops if you want, but kept 1 or 2 seamlessly */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:gap-10 xl:grid-cols-2">
          {PROJECTS.map((project) => (
            <article
              key={project.name}
              // Changed: flex-col on mobile, flex-row on large tablet/desktop (sm:flex-row)
              className="flex flex-col gap-6 rounded-2xl border border-white/10 p-5 transition-colors hover:border-primary/40 bg-white/5 sm:flex-row sm:p-6"
            >
              {/* Image Wrapper Container */}
              {/* Changed: w-full and responsive height aspect on mobile, fixed layout sizes on desktop (sm:w-48 sm:h-auto) */}
              <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-xl sm:h-56 sm:w-48 md:h-64 md:w-56 lg:h-72 lg:w-64">
                <img
                  src={project.image || "/assets/ai-network.png"}
                  alt={`${project.name} preview`}
                  className="h-full w-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 pointer-events-none" />
              </div>

              {/* Text Content Area */}
              {/* Changed: Balanced typography so text scaling matches mobile viewports smoothly */}
              <div className="flex flex-col py-2 sm:py-4">
                <h3 className="font-heading text-xl font-bold text-white sm:text-2xl lg:text-3xl">
                  {project.name}
                </h3>
                <p className="mt-2 line-clamp-4 text-sm text-white/80 leading-relaxed sm:text-base lg:text-lg">
                  {project.description}
                </p>
                <a
                  href="#"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline sm:mt-auto"
                >
                  Read More <ArrowRight className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Footer CTA Text */}
        {/* Changed: Removed px-50 completely, restricted max width, balanced text size down from 30px to adapt to tiny screens */}
        <div className="mt-16 max-w-4xl">
          <p className="text-pretty text-lg leading-relaxed text-white/90 sm:text-xl lg:text-2xl">
            Explore some of our standout projects that showcase our expertise in
            AI, software development, and digital innovation. Each solution is
            designed to solve real-world challenges, enhance business
            performance, and deliver measurable results for our clients.
          </p>
          <Button
            size="lg"
            className="mt-7 w-full rounded-full bg-white px-7 py-6 text-ink hover:bg-white/90 sm:w-auto"
          >
            Start a Project
          </Button>
        </div>
      </div>
    </section>
  )
}