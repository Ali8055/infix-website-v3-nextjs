"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { CAPABILITIES_BY_SERVICE } from "@/lib/CAPABILITIES_BY_SERVICE"


interface CapabilitiesProps {
  activeIndex: number
}

export function Capabilities({ activeIndex }: CapabilitiesProps) {
  // Extract active parent category safely
  const currentCategory = CAPABILITIES_BY_SERVICE[activeIndex] || CAPABILITIES_BY_SERVICE[0]
  
  // Local state tracking the selected specific item index
  const [activeItemIndex, setActiveItemIndex] = useState(0)

  // Reset the active nested list item to 0 whenever the parent category changes
  useEffect(() => {
    setActiveItemIndex(0)
  }, [activeIndex])

  // Current sub-item data to present in right-hand visualization block
  const currentItem = currentCategory.items[activeItemIndex] || currentCategory.items[0]

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid grid-cols-1 gap-12 px-6 pb-20 sm:px-12 lg:grid-cols-2 lg:gap-20 lg:px-25 lg:pb-28">

        {/* Left List Column */}
        <ul className="flex flex-col">
          {currentCategory.items.map((item, i) => {
            const isCurrentItemActive = i === activeItemIndex

            return (
              <li
                key={item.name}
                // Triggers update on click. Change to onMouseEnter if you prefer hover behavior
                onClick={() => setActiveItemIndex(i)}
                className="flex items-center gap-10 border-b border-neutral-100 py-8 first:pt-0 cursor-pointer group select-none"
              >
                <span
                  className={cn(
                    "font-heading text-5xl font-bold tracking-tight min-w-[50px] transition-colors duration-300",
                    isCurrentItemActive ? "text-[#7B51FC]" : "text-[#7B51FC]/30 group-hover:text-[#7B51FC]/60"
                  )}
                >
                  {i + 1}
                </span>
                <span
                  className={cn(
                    "font-heading text-3xl tracking-tight text-neutral-900 transition-all duration-300",
                    isCurrentItemActive ? "font-bold translate-x-1 text-[#7B51FC]" : "font-medium group-hover:translate-x-1"
                  )}
                >
                  {item.name}
                </span>
              </li>
            )
          })}
        </ul>

        {/* Right Content Column */}
        {/* The dynamic key here ensures that switching sub-items perfectly re-triggers the entry animation */}
        <div key={`${activeIndex}-${activeItemIndex}`} className="flex flex-col justify-between">
          <div className="relative pt-6 pl-6">

            {/* Design Element: Top-Left Purple Pulse Target */}
            <div className="absolute left-2 top-2 z-20 flex size-12 items-center justify-center">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#7B51FC]/70 opacity-75"></span>
              <span className="absolute inline-flex size-8 rounded-full bg-[#7B51FC]/40"></span>
              <span className="relative size-2.5 rounded-full bg-[#7B51FC]"></span>
            </div>

            {/* Asymmetrical Curved Container for Image */}
            <div className="relative overflow-hidden rounded-bl-[140px] rounded-tl-[14px] rounded-br-[140px] rounded-tr-[140px] bg-neutral-950">
              <motion.img
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 0.85, scale: 1 }}
                transition={{ duration: 0.4 }}
                src={currentItem.img}
                alt={`${currentItem.name} visualization`}
                className="h-[280px] w-full object-cover mix-blend-screen"
              />
            </div>

            {/* Floating Stacked Experience Badge */}
            <div className="absolute -right-2 top-1/2 z-10 -translate-y-1/2 translate-x-4">
              <motion.div
                className="absolute inset-0 scale-[1.15] rounded-3xl bg-white/90 border border-neutral-100 shadow-sm origin-center"
                animate={{ rotate: [6, 366] }}
                transition={{
                  duration: 10,
                  ease: "linear",
                  repeat: Infinity,
                }}
              />

              {/* Primary Active Badge layer */}
              <div className="relative -rotate-12 rounded-3xl border border-neutral-100 bg-white p-6 text-center shadow-sm min-w-[110px]">
                <motion.span 
                  initial={{ opacity: 0, y: 3 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="block font-heading text-3xl font-extrabold tracking-tight text-[#7B51FC]"
                >
                  {currentItem.exp}
                </motion.span>
                <span className="mt-1 block text-[11px] font-bold leading-tight text-neutral-500 uppercase tracking-wider">
                  Years of
                  <br />
                  Exp
                </span>
              </div>
            </div>
          </div>

          {/* Dynamic Description Block */}
          <div className="mt-6 space-y-5 text-xl leading-relaxed text-neutral-600 font-medium ">
            <AnimatePresence mode="wait">
              {currentItem.paragraphs.map((text, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {text}
                </motion.p>
              ))}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  )
}