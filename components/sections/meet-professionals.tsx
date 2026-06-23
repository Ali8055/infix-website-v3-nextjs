// "use client"

// import { useState } from "react"
// import { ChevronRight } from "lucide-react"
// import { SectionBadge } from "@/components/section-badge"
// import { Users } from "lucide-react"

// const TEAM_MEMBERS = [
//   {
//     name: "Kendrick",
//     role: "Chief Executive Officer",
//     label: "CEO",
//     image: "/assets/CEO.png",
//   },
//   {
//     name: "Sarah",
//     role: "Chief Technology Officer",
//     label: "CTO",
//     image: "/assets/CEO.png",
//   },
//   {
//     name: "Alex",
//     role: "Head of Design",
//     label: "Design",
//     image: "/assets/CEO.png",
//   },
//   {
//     name: "James",
//     role: "Lead Engineer",
//     label: "Eng",
//     image: "/assets/CEO.png",
//   },
// ]

// export function MeetProfessionals() {
//   const [activeIndex, setActiveIndex] = useState(0)

//   return (
//     <section className="bg-ink py-20 lg:py-28">
//       <div className="mx-auto px-20">
//         {/* Header row */}
//         <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-12">
//           <div>
//             <SectionBadge icon={Users} dark>
//               Our Teams
//             </SectionBadge>
//             <h2 className="mt-4 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl">
//               Meet the Professionals
//             </h2>
//           </div>
//           <p className="max-w-xs text-lg text-white/60 lg:text-right">
//             Our team brings decades of renewable wind, solar energy, asset
//             management and construction.
//           </p>
//         </div>

//         {/* Cards row */}
//         <div className="relative flex gap-4 items-stretch">
//           {/* Active member name label on left */}
//           <div className="hidden lg:flex flex-col justify-end pb-4 pr-2 min-w-[100px]">
//             <p className="text-primary font-heading font-bold text-xl">
//               {TEAM_MEMBERS[activeIndex].name}
//             </p>
//             <p className="text-white/50 text-sm mt-1">
//               {TEAM_MEMBERS[activeIndex].role}
//             </p>
//           </div>

//           {/* Cards */}
//           <div className="flex gap-4 flex-1 overflow-hidden">
//             {TEAM_MEMBERS.map((member, i) => (
//               <button
//                 key={member.name}
//                 type="button"
//                 onClick={() => setActiveIndex(i)}
//                 className={`relative rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer flex-shrink-0 ${
//                   i === activeIndex
//                     ? "w-56 opacity-100"
//                     : "w-44 opacity-70 hover:opacity-90"
//                 }`}
//                 style={{ height: "320px" }}
//               >
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="absolute inset-0 size-full object-cover object-top grayscale"
//                 />
//                 {/* Label overlay at bottom */}
//                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
//                   <span className="font-heading text-4xl font-bold text-white/20 uppercase tracking-widest">
//                     {member.label}
//                   </span>
//                 </div>
//               </button>
//             ))}
//           </div>

//           {/* Arrow button */}
//           <button
//             type="button"
//             onClick={() =>
//               setActiveIndex((prev) => (prev + 1) % TEAM_MEMBERS.length)
//             }
//             className="flex-shrink-0 self-end mb-4 flex size-10 items-center justify-center rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
//           >
//             <ChevronRight className="size-5" />
//           </button>
//         </div>

//         {/* Mobile name */}
//         <div className="mt-4 lg:hidden">
//           <p className="text-primary font-heading font-bold text-xl">
//             {TEAM_MEMBERS[activeIndex].name}
//           </p>
//           <p className="text-white/50 text-sm mt-1">
//             {TEAM_MEMBERS[activeIndex].role}
//           </p>
//         </div>
//       </div>
//     </section>
//   )
// }
"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"
import { SectionBadge } from "@/components/section-badge"
import { Users } from "lucide-react"

const TEAM_MEMBERS = [
  { name: "Ali Jawad", role: "Chief Executive Officer | Founder",  label: "CEO", image: "/assets/team/CEO.png" },
  { name: "Shahrukh Babar",    role: "Chief Business Development Officer | Co-Founder", label: "CBDO", image: "/assets/team/Shahrukh.png" },
  // { name: "M Ali Awan",   role: "Head of Product",          label: "CPO", image: "/assets/CEO.png" },
  { name: "Farhan Shaukat",   role: "Mobile App Dev",           label: "DEV", image: "/assets/team/Farhan.png" },
  { name: "Afaq Karim",    role: "AI Dev",  label: "DEV", image: "/assets/team/Afaq.png" },
  { name: "Shahrukh Babar",    role: "Chief Business Development Officer | Co-Founder", label: "CBDO", image: "/assets/team/Shahrukh.png" },
  { name: "Umer Murtaza",  role: "Sr. Mobile App Dev",  label: "DEV", image: "/assets/team/Umer-Murtaza.png" },
  { name: "Afaq Karim",    role: "AI Dev",  label: "DEV", image: "/assets/team/Afaq.png" },
  { name: "Farhan Shaukat",   role: "Mobile App Dev",           label: "DEV", image: "/assets/team/Farhan.png" },
]

const CARD_HEIGHT    = 400
const EXPANDED_W     = 560   // active card width
const COLLAPSED_W    = 220   // inactive card width
const GAP            = 16
const SCROLL_AMOUNT  = COLLAPSED_W + GAP

export function MeetProfessionals() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0)
  const [canScrollLeft,  setCanScrollLeft]  = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const scrollRef = useRef<HTMLDivElement>(null)

  /* ── track scroll position to show/hide arrows ── */
  const syncArrows = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 4)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    syncArrows()
    el.addEventListener("scroll", syncArrows, { passive: true })
    const ro = new ResizeObserver(syncArrows)
    ro.observe(el)
    return () => { el.removeEventListener("scroll", syncArrows); ro.disconnect() }
  }, [syncArrows])

  const scrollBy = (dir: 1 | -1) => {
    scrollRef.current?.scrollBy({ left: dir * SCROLL_AMOUNT, behavior: "smooth" })
  }

  const active = TEAM_MEMBERS[hoveredIndex]

  return (
    <section className="bg-ink py-20 lg:py-28">
      <div className="mx-auto px-16">

        {/* ── Header ── */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between mb-14">
          <div>
            <SectionBadge icon={Users} dark>Our Teams</SectionBadge>
            <h2 className="mt-5 font-heading text-5xl font-bold leading-tight text-white lg:text-6xl">
              Meet the Professionals
            </h2>
          </div>
          <p className="max-w-sm text-xl font-bold text-white lg:text-right">
            Our team brings decades of renewable wind, solar energy, asset
            management and construction.
          </p>
        </div>

        {/* ── Carousel wrapper with nav arrows ── */}
        <div className="relative">

          {/* LEFT arrow — only visible when scrolled right */}
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scrollBy(-1)}
            className={[
              "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-20",
              "flex size-11 items-center justify-center rounded-full",
              "bg-white/10 text-white backdrop-blur hover:bg-white/20 transition-all duration-300",
              canScrollLeft ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
            ].join(" ")}
          >
            <ChevronLeft className="size-5" />
          </button>

          {/* RIGHT arrow — only visible when more cards exist to the right */}
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scrollBy(1)}
            className={[
              "absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-20",
              "flex size-11 items-center justify-center rounded-full",
              "bg-white/10 text-white backdrop-blur hover:bg-white/20 transition-all duration-300",
              canScrollRight ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
            ].join(" ")}
          >
            <ChevronRight className="size-5" />
          </button>

          {/* ── Scrollable track ── */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <style>{`.meet-track::-webkit-scrollbar { display: none; }`}</style>

            {TEAM_MEMBERS.map((member, i) => {
              const isActive = i === hoveredIndex

              return (
                <div
                  key={member.name + i}
                  role="button"
                  tabIndex={0}
                  aria-label={`${member.name}, ${member.role}`}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onFocus={() => setHoveredIndex(i)}
                  onKeyDown={(e) => e.key === "Enter" && setHoveredIndex(i)}
                  className="relative flex-shrink-0 rounded-2xl border overflow-hidden cursor-pointer outline-none"
                  style={{
                    height: CARD_HEIGHT,
                    width: isActive ? EXPANDED_W : COLLAPSED_W,
                    borderColor: isActive ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.08)",
                    transition: "width 450ms cubic-bezier(0.4,0,0.2,1), border-color 300ms ease",
                  }}
                >

                  {/* ── Inactive state: full-bleed photo + watermark label ── */}
                  <div
                    className="absolute inset-0 flex"
                    style={{
                      opacity: isActive ? 0 : 1,
                      transition: "opacity 300ms ease",
                      pointerEvents: isActive ? "none" : "auto",
                    }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="absolute inset-0 size-full object-cover object-top grayscale"
                    />
                    <div className="absolute inset-0 bg-black/35" />
                    {/* Vertical watermark */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                      <span
                        className="font-heading font-black text-white/12 leading-none"
                        style={{
                          fontSize: "5.5rem",
                          writingMode: "vertical-rl",
                          transform: "rotate(180deg)",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {member.label}
                      </span>
                    </div>
                  </div>

                  {/* ── Active state: split info-pane + photo-pane ── */}
                  <div
                    className="absolute inset-0 flex"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transition: "opacity 350ms ease 100ms",
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                  >
                    {/* Left info pane */}
                    <div
                      className="relative flex flex-col bg-[#0e0e0e] p-7 flex-shrink-0 overflow-hidden"
                      style={{ width: 220 }}
                    >
                      {/* Name + role */}
                      <p className="font-heading text-2xl font-bold text-primary leading-tight">
                        {member.name}
                      </p>
                      <p className="mt-2 text-sm text-white/65 leading-snug">
                        {member.role}
                      </p>

                      {/* Vertical watermark */}
                      <div className="absolute bottom-20 left-0 right-0 flex justify-center pointer-events-none select-none">
                        <span
                          className="font-heading font-black text-white/8 leading-none"
                          style={{
                            fontSize: "5rem",
                            writingMode: "vertical-rl",
                            transform: "rotate(180deg)",
                            letterSpacing: "0.05em",
                          }}
                        >
                          {member.label}
                        </span>
                      </div>

                      {/* Arrow button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          setHoveredIndex((prev) => (prev + 1) % TEAM_MEMBERS.length)
                        }}
                        className="mt-auto relative z-10 flex size-12 items-center justify-center rounded-full bg-primary text-white hover:bg-primary/85 transition-colors cursor-pointer"
                      >
                        <ArrowUpRight className="size-5" />
                      </button>
                    </div>

                    {/* Right photo pane */}
                    <div className="relative flex-1 bg-[#1a1a1a] overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="absolute inset-0 size-full object-cover object-top grayscale"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                    </div>
                  </div>

                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}