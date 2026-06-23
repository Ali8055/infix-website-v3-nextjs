// import type { LucideIcon } from "lucide-react"
// import { cn } from "@/lib/utils"

// export function SectionBadge({
//   icon: Icon,
//   children,
//   dark = false,
// }: {
//   icon: LucideIcon
//   children: React.ReactNode
//   dark?: boolean
// }) {
//   return (
//     <span
//       className={cn(
//         "inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium",
//         dark
//           ? "border-white/15 bg-white/5 text-white/90"
//           : "border-border bg-secondary text-foreground",
//       )}
//     >
//       <Icon className="size-6 text-primary" />
//       {children}
//     </span>
//   )
// }
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export function SectionBadge({
  icon: Icon,
  children,
  dark = false,
}: {
  icon: LucideIcon
  children: React.ReactNode
  dark?: boolean
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-2 text-lg font-medium", // Changed text-xs to text-base
        dark
          ? "border-white/15 bg-white/5 text-white/90"
          : "border-border bg-secondary text-foreground",
      )}
    >
      <Icon className="size-6 text-primary" /> {/* Kept size-6 (24px) */}
      {children}
    </span>
  )
}