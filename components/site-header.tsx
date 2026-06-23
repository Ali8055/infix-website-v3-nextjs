"use client"

import { useState } from "react"
import { Globe, Menu, X } from "lucide-react"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const NAV = [
  { label: "Who We Are", href: "/who-we-are" }, // Added leading slash
  { label: "Services", href: "/#services" },   // Added leading slash
  { label: "Solutions", href: "/#solutions" },   // Added leading slash
  { label: "Careers", href: "/careers" },       // Standardized path
  { label: "Contact", href: "/contact" },
]
export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50 p-4">
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
                  className="text-2xl font-medium text-white transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="hidden items-center gap-1.5 rounded-sm border border-white/20 px-3 py-3 text-xs font-medium text-white/80 transition-colors hover:bg-white/10 lg:flex"
            >
              <Globe className="size-3.5" />
              EN
            </button>
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
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white"
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
