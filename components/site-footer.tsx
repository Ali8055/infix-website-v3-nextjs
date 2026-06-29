import { Mail, Phone } from "lucide-react"
import { Logo } from "@/components/logo"
import { InstagramIcon, LinkedInIcon, XIcon } from "./social-icons"

const COLUMNS = [
  {
    title: "Navigation",
    links: [
      { label: "Who We Are", href: "/who-we-are" },
      { label: "Portfolio", href: "/#portfolio" },
      { label: "Resources", href: "/resources" },
      { label: "Careers", href: "/careers" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "AI Transformation", href: "/#services" }, // Anchor link assuming section is on home
      { label: "Data & Analytics", href: "/services/data-analytics" },
      { label: "Cloud", href: "/services/cloud" },
      { label: "Security", href: "/services/security" },
      { label: "BPS", href: "/services/bps" },
    ],
  },
]

const SOCIALS = [
  { Icon: XIcon, href: "https://x.com/infixsystems" },
  { Icon: InstagramIcon, href: "https://instagram.com/infixsystems" },
  { Icon: LinkedInIcon, href: "https://linkedin.com/company/infixsystems" },
]

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-ink text-white">
      <div className="mx-auto px-16 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-xs">
            <Logo dark />
            <p className="mt-4 leading-relaxed text-white text-lg">
              Connect with us to explore how we can deliver exceptional AI
              solutions for your needs.
            </p>
            <div className="mt-6 space-y-2 text-white/70">
              <a
                href="mailto:info@infixsystems.com"
                className="flex items-center gap-2 hover:text-white"
              >
                <Mail className="size-4" /> info@infixsystems.com
              </a>
              <a
                href="tel:+925123456789"
                className="flex items-center gap-2 hover:text-white"
              >
                <Phone className="size-4" /> +92 51 234 56789
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading text-lg font-bold text-white">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/60 text-lg transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-heading text-lg font-bold text-white">
              Contacts
            </h3>
            <p className="mt-4 font-medium text-lg text-white/80">
              Corporate Headquarters
            </p>
            <p className="mt-1 text-lg leading-relaxed text-white/60">
              Address: Viale Francesco Crispi 11, Milan, Italy
            </p>
            <h4 className="mt-6 font-heading text-lg font-bold text-white">
              Socials
            </h4>
            <div className="mt-3 flex gap-3">
              {SOCIALS.map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-12 border border-white/30 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 infixsystems.com</p>
          <div className="flex gap-6">
            <a href="/terms" className="hover:text-white">
              Terms &amp; Conditions
            </a>
            <a href="/privacy" className="hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}