import { ArrowRight, BriefcaseBusiness } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionBadge } from "@/components/section-badge"
import { CASE_STUDIES } from "@/lib/case-studies"

export function FeaturedProjects() {
  return (
    <section id="portfolio" className="bg-ink">
      <div className="mx-auto  px-4 py-12 sm:px-6 lg:px-8 lg:py-28">
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
        <div className="mt-10 grid grid-cols-1 gap-8 xl:grid-cols-2">
              {CASE_STUDIES.map((project) => (
                <Link
                  key={project.slug}
                  href={`/featured-projects/${project.slug}`}
                  className="
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-[#2A3150]
        bg-[#03050B]
        p-4
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-primary/40
      "
                >
                  {/* Glow Border */}
                  <div
                    className="
          pointer-events-none
          absolute
          inset-0
          rounded-[32px]
          ring-1
          ring-white/5
        "
                  />

                  <div className="grid h-[420px] grid-cols-[44%_56%]">
                    {/* ================= IMAGE ================= */}
                    <div className="relative overflow-hidden rounded-l-[24px]">
                      <img
                        src={project.cardImage}
                        alt={project.name}
                        className="
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-700
                          group-hover:scale-105
                        "
                      />

                      {/* Bottom fade */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                    </div>

                    {/* ================= CONTENT ================= */}
                    <div className="relative overflow-hidden">
                      {/* Background Pattern */}
                      <img
                        src="/assets/black-tiles-BG-C.png"
                        alt=""
                        className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
             
            "
                      />

                      {/* Dark Overlay */}
                      {/* <div className="absolute inset-0 bg-[#04070F]/70" /> */}

                      {/* Content */}
                      <div className="relative z-10 flex h-full flex-col px-8 py-10">
                        <h3
                          className="
                font-heading
                text-3xl
                font-bold
                text-white
                lg:text-4xl
              "
                        >
                          {project.name}
                        </h3>

                        <p
                          className="
                mt-5
                line-clamp-5
                text-base
                leading-relaxed
                text-white/85
                lg:text-[18px]
              "
                        >
                          {project.cardDescription}
                        </p>

                        <span
                          className="
                mt-auto
                inline-flex
                items-center
                gap-2
                text-xl
                font-semibold
                text-primary
              "
                        >
                          Read More

                          <ArrowRight
                            className="
                  h-5
                  w-5
                  transition-transform
                  duration-300
                  group-hover:translate-x-2
                "
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

        {/* Footer CTA Text */}
        <div className="mt-16 max-w-4xl">
          <p className="text-pretty text-lg leading-relaxed text-white/90 sm:text-xl lg:text-2xl">
            Explore some of our standout projects that showcase our expertise in
            AI, software development, and digital innovation. Each solution is
            designed to solve real-world challenges, enhance business
            performance, and deliver measurable results for our clients.
          </p>
          <Link href={"/contact/#contactform"}>
            <Button
              size="lg"
              className="mt-7 w-full rounded-full bg-white px-7 py-6 text-ink hover:bg-white/90 sm:w-auto"
            >
              Start a Project
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
