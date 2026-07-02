import {
  ArrowRight,
  BriefcaseBusiness,
  Share2,
  Map,
  Ticket,
  MessagesSquare,
  Lock,
  Settings,
  Layers,
  type LucideIcon,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionBadge } from "@/components/section-badge"
import { SiteFooter } from "@/components/site-footer"
// import type { CaseStudy, CaseStudyFeature } from "@/lib/case-studies"
// import { getOtherCaseStudies } from "@/lib/case-studies"

import type { CaseStudy, CaseStudyFeature } from "@/lib/case-studies"
import { getOtherCaseStudies } from "@/lib/case-studies"
import { cn } from "@/lib/utils"

const FEATURE_ICONS: Record<CaseStudyFeature["icon"], LucideIcon> = {
  share: Share2,
  map: Map,
  ticket: Ticket,
  chat: MessagesSquare,
  lock: Lock,
  settings: Settings,
  layers: Layers,
}

export function CaseStudyTemplate({ study }: { study: CaseStudy }) {
  const otherStudies = getOtherCaseStudies(study.slug, 4)

  return (
    <main className="bg-ink text-white">
      {/* Hero */}
      <section className="relative isolate h-[780px] overflow-hidden">

        {/* RIGHT HERO IMAGE */}
        <div className="absolute inset-0">
          <img
            src={study.cardImage}
            alt={study.name}
            className="absolute right-0 top-0 h-full w-[40%] object-cover"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, rgba(0,0,0,.2) 10%, rgba(0,0,0,.8) 25%, black 40%)",
              maskImage:
                "linear-gradient(to right, transparent 0%, rgba(0,0,0,.2) 10%, rgba(0,0,0,.8) 25%, black 40%)",
            }}
          />
        </div>
        {/* LEFT PURPLE OVERLAY */}
        {/* <div
          className="
    absolute
    inset-0
    bg-[linear-gradient(90deg,
    rgba(108,52,218,0.98)_0%,
    rgba(95,61,243,0.96)_45%,
    rgba(95,61,243,0.82)_58%,
    rgba(95,61,243,0.55)_68%,
    rgba(95,61,243,0.15)_80%,
    transparent_100%)
    ]
  "
        /> */}
        <div
          className="
    absolute
    inset-0
bg-[linear-gradient(60deg,#7236A5_0%,#5338C6_30%,transparent_100%,transparent_100%)]    "
        />
        {/* bg-[linear-gradient(90deg,rgba(225,19,19,1)_0%,rgba(24,28,227,1)_25%,rgba(0,212,255,0.4)_60%,rgba(0,212,255,0.4)_100%)] */}
        {/* CENTER GLOW */}
        {/* <div className="absolute left-[55%] top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6C63FF]/25 blur-[150px]" /> */}

        {/* CONTENT */}
        <div className="relative z-20 mx-auto flex h-full  items-center px-6 lg:px-16">

          <div className="max-w-[620px]">

            <SectionBadge icon={BriefcaseBusiness} dark>
              {study.name}
            </SectionBadge>

            <h1 className="mt-8 font-heading text-[64px] font-semibold leading-[1.05] tracking-[-0.03em] text-white">
              {study.tagline}
            </h1>

            <p className="mt-8 text-[22px] leading-[1.65] text-white/85">
              {study.summary}
            </p>

          </div>

        </div>

      </section>
      {/* Challenge */}
      {study.challenges && (
        <section className="relative bg-white text-ink">
          {/* <div className="relative mb-14 overflow-hidden rounded-3xl bg-white shadow-sm min-h-[450px]"> */}
          {/* ── Background Map Image – Now perfectly filling the container ── */}
          <img
            src="/assets/worldBG.jpg"
            alt="World map showing Infix Systems office locations"
            // {/* Changed: Removed max-w-4xl and added absolute dimensions with object-cover */}
            className=" inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center  px-6 lg:px-16">
            <div className="flex flex-col gap-6 border-b w-full border-black/5 pb-10 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <SectionBadge icon={Settings}>{study.challenges.eyebrow}</SectionBadge>
                <h2 className="mt-8 text-balance font-heading text-3xl  tracking-tight sm:text-4xl lg:text-5xl">
                  {study.challenges.heading}
                </h2>
              </div>
              <p className="max-w-sm text-pretty text-base text-black/60 lg:text-right text-xl font-bold">
                {study.challenges.intro}
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              {study.challenges.items.map((challenge, idx) => (
                <div
                  key={challenge.title}
                  className="rounded-2xl border border-black/5 bg-gradient-to-b from-white via-primary/5 to-primary/10 p-6 sm:p-8"
                >
                  <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                    0{idx + 1}
                  </div>
                  <h3 className="mt-4 text-lg font-bold">{challenge.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-black/60">
                    {challenge.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Solution */}
      {study.solution && (
        <section className="bg-ink">
          <div className="mx-auto  px-6 py-16 lg:px-16 lg:py-24">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <SectionBadge icon={Layers} dark>
                  {study.solution.eyebrow}
                </SectionBadge>
                <h2 className="mt-4 max-w-xl text-balance font-heading text-3xl  tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {study.solution.heading}
                </h2>
              </div>
              <p className="max-w-xl text-pretty text-base text-white lg:text-right text-lg">
                {study.solution.intro}
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {study.solution.features.map((feature, index) => {
                const Icon = FEATURE_ICONS[feature.icon]

                // Check if this is the 1st element (index 0) and total elements equal 5
                const isFirstOfFive = study.solution?.features.length === 5 && index === 0

                return (
                  <div
                    key={feature.title}
                    className={cn(
                      // Added 'flex flex-col' so the inner container can stretch to full height
                      "group relative flex flex-col overflow-hidden rounded-[32px] border border-white/10 bg-[#090909] p-2 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]",
                      isFirstOfFive && "md:col-span-2 lg:col-span-2"
                    )}
                  >
                    {/* Inner Card */}
                    {/* Added 'flex-1 w-full h-full flex flex-col' to fill the parent container entirely */}
                    <div className="relative flex flex-1 flex-col h-full w-full overflow-hidden rounded-[26px] bg-black">
                      {/* Background */}
                      <img
                        src="/assets/black-tiles-BG-C.png"
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover  transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Gradient Overlay */}
                      {/* <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-black/40" /> */}

                      {/* Content */}
                      {/* Added 'flex-1' here so the text content layout pushes down naturally if needed */}
                      <div className="relative z-10 flex flex-1 flex-col py-6 px-10">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 text-primary">
                          <Icon className="h-7 w-7" />
                        </div>

                        <h3 className="mt-8 max-w-xs text-4xl font-bold leading-tight text-white">
                          {feature.title}
                        </h3>

                        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            {
              study.solution.techStack && study.solution.techStack.length > 0 && (
                <div className="mt-16 flex flex-col items-center justify-center w-full text-center">

                  {/* Note Paragraph Added Above */}
                  <p className="max-w-4xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg mb-8">
                    <span className="text-amber-500 font-medium">Note:</span> the live page currently lists
                    computer-vision tools (YOLOv8, OpenCV, PyTorch) under this case study — those belong to a
                    different, security-monitoring project. Swapped them below for a plausible travel-app stack;
                    worth confirming the real one with the engineering team.
                  </p>

                  {/* Improved Tech Stack Badges Container */}
                  <div className="flex flex-wrap justify-center gap-3 w-full">
                    {study.solution.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-5 py-2.5 text-sm font-medium text-white/90 backdrop-blur-sm transition-colors hover:bg-white/[0.12]"
                      >
                        {/* Colored Dot Indicator from the image */}
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              )
            }
          </div>
        </section>
      )}

      {/* More case studies */}
      {otherStudies.length > 0 && (
        <section className="bg-ink border-t border-white/10">
          <div className="mx-auto  px-6 py-16 lg:px-16 lg:py-24">
            <SectionBadge icon={BriefcaseBusiness} dark>
              More Case Studies
            </SectionBadge>
            <h2 className="mt-4 text-balance font-heading text-2xl font-bold text-white sm:text-3xl">
              Other standout projects
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-8 xl:grid-cols-2">
              {otherStudies.map((project) => (
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

            {/* <div className="mt-16 max-w-4xl border-t border-white/10 pt-12">
              <p className="text-pretty text-lg leading-relaxed text-white/90 sm:text-xl lg:text-2xl">
                Explore some of our standout projects that showcase our expertise in
                AI, software development, and digital innovation. Each solution is
                designed to solve real-world challenges, enhance business
                performance, and deliver measurable results for our clients.
              </p>
              <Link href="/contact/#contactform">
                <Button
                  size="lg"
                  className="mt-7 w-full rounded-full bg-white px-7 py-6 text-ink hover:bg-white/90 sm:w-auto"
                >
                  Start a Project
                </Button>
              </Link>
            </div> */}
          </div>
        </section>
      )}

      <SiteFooter />
    </main>
  )
}
