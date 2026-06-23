// import { Boxes, Hexagon, Drama, Activity, Sparkles } from "lucide-react"

// const LOGOS = [
//   { name: "MediaPipe", icon: Activity },
//   { name: "Tesseract", icon: Boxes },
//   { name: "ONNX", icon: Hexagon },
//   { name: "Playwright", icon: Drama },
// ]

// export function ClientsStrip() {
//   return (
//     <section className="border-b border-border bg-red-500">
//       <div className="mx-auto flex px-16 flex-col items-center gap-8 px-6 py-8 lg:flex-row lg:justify-between">
//         //left section
//         <div className="flex items-center gap-3 text-center lg:text-left bg-yellow-500">
//           <span className="flex size-9 shrink-0 items-center justify-center rounded-full text-primary">
//             {/* <Sparkles className="size-4" /> */}
//             <img src={'/icon-svgs/star-icon.svg'} alt="icon"/>
//           </span>
//           <p className="max-w-[16rem] font-medium leading-snug text-foreground">
//             We&apos;ve done 500+ enterprise and business consulting.
//           </p>
//         </div>
//         // right section
//         <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 bg-green-500">
//           {LOGOS.map(({ name, icon: Icon }) => (
//             <div
//               key={name}
//               className="flex items-center gap-2 text-foreground/80"
//             >
//               <Icon className="size-5" />
//               <span className="text-base font-semibold">{name}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
import { Boxes, Hexagon, Drama, Activity } from "lucide-react"

const LOGOS = [
  { name: "MediaPipe", icon: Activity },
  { name: "Tesseract", icon: Boxes },
  { name: "ONNX", icon: Hexagon },
  { name: "Playwright", icon: Drama },
]

export function ClientsStrip() {
  // We can repeat the array elements to ensure it fills widescreen monitors and handles the loop smoothly
  const infiniteLogos = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS]

  return (
    <section className="border-b border-border bg-background w-full px-4">
      <div className="mx-auto flex px-6 py-8 lg:px-16 flex-col items-center gap-8 lg:flex-row lg:justify-between w-full">
        
        {/* Left Section: Strict to its content width */}
        <div className="flex shrink-0 items-center gap-3 text-center lg:text-left z-10">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <img src="/icon-svgs/star-icon.svg" alt="icon" className="size-4" />
          </span>
          <p className="max-w-[16rem] font-medium leading-snug text-muted-foreground">
            We&apos;ve done 500+ enterprise and business consulting.
          </p>
        </div>

        {/* Right Section / Carousel Container */}
        <div className="group flex-1 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
          
          {/* Track: Uses Tailwind v4 marquee animation. Pauses seamlessly on hover */}
          <div className="flex w-max items-center gap-x-16 py-2 animate-marquee group-hover:[animation-play-state:paused] no-scrollbar">
            {infiniteLogos.map(({ name, icon: Icon }, index) => (
              <div 
                key={`${name}-infinite-${index}`} 
                className="flex shrink-0 items-center gap-2 text-foreground/80"
              >
                <Icon className="size-5 text-muted-foreground" />
                <span className="text-base font-semibold">{name}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}