"use client"

import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Globe, Menu, X } from "lucide-react"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const NAV = [
  { label: "Who We Are", href: "/#who-we-are-section" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  
  const [activeItem, setActiveItem] = useState("")
  const pathname = usePathname()
  const lastScrollY = useRef(0)

  // 1. Unified function to resolve active class from URL
  const syncActiveState = () => {
    const currentHash = window.location.hash
    if (currentHash) {
      setActiveItem(`/#${currentHash.replace("#", "")}`)
    } else {
      setActiveItem(pathname)
    }
  }

  // Handle updates on initial load and route changes
  useEffect(() => {
    syncActiveState()

    window.addEventListener("hashchange", syncActiveState)
    return () => window.removeEventListener("hashchange", syncActiveState)
  }, [pathname])

  // Scroll visibility logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY >= window.innerHeight) {
        setIsScrolledPastHero(true)
      } else {
        setIsScrolledPastHero(false)
      }

      if (currentScrollY > lastScrollY.current && currentScrollY > 20) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "mx-auto inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out",
        isScrolledPastHero
          ? "fixed text-[#7B51FC] bg-white/[0.03] backdrop-blur-3xl shadow-sm p-0 px-6"
          : "absolute p-4 bg-transparent text-white ",
        !isVisible ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
      )}
    >
      <nav className="mx-auto flex px-16 items-center justify-between px-6 py-2">
        <Link href="/#top" aria-label="Infix Systems home">
          <Logo dark />
        </Link>
        
        <div className="flex items-center gap-10">
          <ul className="hidden items-center gap-8 lg:flex">
            {NAV.map((item) => {
              const isActive = activeItem === item.href;
              return (
                <li key={item.label} className="relative py-2">
                  <Link
                    href={item.href}
                    // 2. Explicitly force state update on click to override Next.js silent router state
                    onClick={() => setActiveItem(item.href)}
                    className={cn(
                      "text-xl font-medium transition-colors duration-200 block",
                      isActive ? "text-[#7B51FC] font-semibold" : "opacity-80 hover:opacity-100"
                    )}
                  >
                    {item.label}
                  </Link>
                  
                  {/* Underline Indicator */}
                  <span
                    className={cn(
                      "absolute bottom-0 left-1/2 h-[3px] -translate-x-1/2 bg-[#7B51FC] transition-all duration-300 rounded-full",
                      isActive ? "w-1/2 opacity-100" : "w-0 opacity-0"
                    )}
                  />
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="text-white lg:hidden"
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={cn(
          "mx-4 overflow-hidden rounded-2xl border border-white/10 bg-ink/95 backdrop-blur lg:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 border-transparent opacity-0",
          "transition-all duration-300",
        )}
      >
        <ul className="flex flex-col gap-1 p-4">
          {NAV.map((item) => {
            const isActive = activeItem === item.href;
            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => {
                    setActiveItem(item.href) // Force state on mobile click too
                    setOpen(false)
                  }}
                  className={cn(
                    "block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    isActive 
                      ? "bg-[#7B51FC]/10 text-[#7B51FC]" 
                      : "text-white/80 hover:bg-white/10"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
          <li className="px-3 pt-2">
            <Button className="w-full rounded-full">Get in Touch</Button>
          </li>
        </ul>
      </div>
    </header>
  )
}