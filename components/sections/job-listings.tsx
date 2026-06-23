// import { Briefcase } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { SectionBadge } from "@/components/section-badge"

// const JOBS = [
//   {
//     title: "Software Developer",
//     type: "Full-time",
//     salary: "PKR 250,000",
//     expired: false,
//   },
//   {
//     title: "User Experience Designer",
//     type: "Full-time",
//     salary: "PKR 250,000",
//     expired: false,
//   },
//   {
//     title: "React Js Developer",
//     type: "Full-time",
//     salary: "PKR 250,000",
//     expired: false,
//   },
//   {
//     title: "Full Stack Developer",
//     type: "Full-time",
//     salary: "PKR 250,000",
//     expired: true,
//   },
// ]

// export function JobListings() {
//   return (
//     <section className="bg-background py-20 lg:py-28">
//       <div className="mx-auto px-20">
//         {/* Header */}
//         <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-14">
//           <div>
//             <SectionBadge icon={Briefcase}>Job Opportunities</SectionBadge>
//             <h2 className="mt-4 font-heading text-4xl font-bold leading-tight text-foreground sm:text-5xl flex items-center gap-3">
//               Find a job at infi
//               <span className="text-primary">✦</span>
//             </h2>
//           </div>
//           <p className="max-w-xs text-lg font-semibold text-foreground/70 lg:text-right">
//             We craft high-impact digital experiences through strategic design,
//             seamless coding, and creative thinking.
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//           {JOBS.map((job) => (
//             <div
//               key={job.title}
//               className="rounded-2xl border border-border bg-card p-8 flex flex-col gap-4"
//             >
//               <div className="flex items-start justify-between gap-4">
//                 <h3 className="font-heading text-2xl font-bold text-foreground">
//                   {job.title}
//                 </h3>
//                 <span className="shrink-0 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
//                   {job.type}
//                 </span>
//               </div>

//               <p className="text-base text-muted-foreground leading-relaxed">
//                 You can get started by contacting us through our website&apos;s
//                 contact form, emailing us at info@infixsystems.com, or calling
//                 us at (123) 456-7890. We&apos;ll schedule an initial
//                 consultation to understand your needs and propose the best
//                 solutions.
//               </p>

//               <div className="mt-auto pt-2 flex items-center justify-between gap-4">
//                 <div>
//                   <span className="font-heading text-xl font-bold text-foreground">
//                     {job.salary}
//                   </span>
//                   <span className="ml-1 text-sm text-muted-foreground">
//                     Per Month
//                   </span>
//                 </div>

//                 {job.expired ? (
//                   <div className="flex items-center gap-3">
//                     <Button
//                       disabled
//                       className="rounded-sm px-6 py-2 opacity-40 cursor-not-allowed"
//                     >
//                       Apply Now
//                     </Button>
//                     <span className="rounded border border-destructive/40 bg-destructive/10 px-3 py-1 text-xs font-semibold text-destructive">
//                       Expired
//                     </span>
//                   </div>
//                 ) : (
//                   <Button className="rounded-sm px-6 py-2 cursor-pointer">
//                     Apply Now
//                   </Button>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
import { Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionBadge } from "@/components/section-badge"
import { Logo } from "@/components/logo"

const JOBS = [
  { title: "Software Developer",       type: "Full-time", salary: "PKR 250,000", expired: false },
  { title: "User Experience Designer", type: "Full-time", salary: "PKR 250,000", expired: false },
  { title: "React Js Developer",       type: "Full-time", salary: "PKR 250,000", expired: false },
  { title: "Full Stack Developer",     type: "Full-time", salary: "PKR 250,000", expired: true  },
]

const DESC =
  "You can get started by contacting us through our website's contact form, emailing us at info@infixsystems.com, or calling us at (123) 456-7890. We'll schedule an initial consultation to understand your needs and propose the best solutions."

export function JobListings() {
  return (
    <section className="bg-[#f4f4f6] py-20 lg:py-28">
      <div className="mx-auto px-16 lg:px-20">

        {/* ── Header ── */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between mb-6">
          <div>
            <SectionBadge icon={Briefcase}>Job Opportunities</SectionBadge>
            <h2 className="mt-4 font-heading text-5xl font-bold leading-tight text-foreground lg:text-6xl flex items-center gap-2">
              Find a job at infi
              {/* Infix logo mark inline */}
              <span className="inline-flex">
                <Logo />
              </span>
            </h2>
          </div>
          <p className="max-w-xs text-lg font-bold text-foreground lg:text-right">
            We craft high-impact digital experiences through strategic design,
            seamless coding, and creative thinking.
          </p>
        </div>

        {/* thin divider */}
        <hr className="border-border mb-10" />

        {/* ── Job cards grid ── */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {JOBS.map((job) => (
            <div
              key={job.title}
              className="rounded-2xl border border-border bg-white p-8 flex flex-col gap-5 shadow-sm"
            >
              {/* Title + badge */}
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  {job.title}
                </h3>
                <span className="shrink-0 rounded-full bg-primary/15 px-4 py-1 text-sm font-semibold text-primary">
                  {job.type}
                </span>
              </div>

              {/* Description */}
              <p className="text-base text-muted-foreground leading-relaxed">
                {DESC}
              </p>

              {/* Salary + CTA */}
              <div className="mt-auto pt-1 flex items-center justify-between gap-4">
                <p className="font-heading text-xl font-black text-foreground">
                  {job.salary}{" "}
                  <span className="text-sm font-normal text-muted-foreground">
                    Per Month
                  </span>
                </p>

                {job.expired ? (
                  <div className="flex items-center gap-3">
                    <Button
                      disabled
                      variant="secondary"
                      className="rounded-md px-7 py-5 text-base font-semibold opacity-60 cursor-not-allowed"
                    >
                      Apply Now
                    </Button>
                    <span className="text-base font-semibold text-red-500">
                      Expired
                    </span>
                  </div>
                ) : (
                  <Button className="rounded-md px-7 py-5 text-base font-semibold cursor-pointer">
                    Apply Now
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}