"use client"

import { useState, useEffect } from "react"
import { Globe, Menu, X } from "lucide-react"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const NAV = [
  { label: "Who We Are", href: "/who-we-are" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Check if scroll position is greater than or equal to viewport height
      if (window.scrollY >= window.innerHeight) {
        setIsScrolledPastHero(true)
      } else {
        setIsScrolledPastHero(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "mx-auto inset-x-0 top-0 z-50 transition-all duration-500 ease-in-out",
        isScrolledPastHero
          ? "fixed  text-[#7B51FC] rounded-b-[100px] bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] p-3 px-6"
          : "absolute p-4 bg-transparent  text-white"
      )}
    >

      <nav className="mx-auto flex px-16 items-center justify-between px-6 py-6">
        <a href="./#top" aria-label="Infix Systems home">
          <Logo dark />
        </a>
        <div className="flex items-center gap-10">
          <ul className="hidden items-center gap-8 lg:flex">
            {NAV.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-2xl font-medium transition-colors "
                >
                  {item.label}
                </a>
              </li>
            ))}
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
          {NAV.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 hover:bg-white/10 "
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="px-3 pt-2">
            <Button className="w-full rounded-full">Get in Touch</Button>
          </li>
        </ul>
      </div>
    </header>
  )
}