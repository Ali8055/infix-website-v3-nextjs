// import { Mail, Phone } from "lucide-react"
// import { Logo } from "@/components/logo"
// import { InstagramIcon, LinkedInIcon, XIcon } from "./social-icons"

// const COLUMNS = [
//   {
//     title: "Navigation",
//     links: [
//       { label: "Who We Are", href: "/who-we-are" },
//       { label: "Portfolio", href: "/#portfolio" },
//       { label: "Resources", href: "/resources" },
//       { label: "Careers", href: "/careers" },
//       { label: "Contact Us", href: "/contact" },
//     ],
//   },
//   {
//     title: "Services",
//     links: [
//       { label: "AI Transformation", href: "/#services" }, // Anchor link assuming section is on home
//       { label: "Data & Analytics", href: "/services/data-analytics" },
//       { label: "Cloud", href: "/services/cloud" },
//       { label: "Security", href: "/services/security" },
//       { label: "BPS", href: "/services/bps" },
//     ],
//   },
// ]

// const SOCIALS = [
//   { Icon: XIcon, href: "https://x.com/infixsystems" },
//   { Icon: InstagramIcon, href: "https://instagram.com/infixsystems" },
//   { Icon: LinkedInIcon, href: "https://linkedin.com/company/infixsystems" },
// ]

// export function SiteFooter() {
//   return (
//     <footer id="contact" className="bg-ink text-white">
//       <div className="mx-auto px-16 py-16">
//         <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
//           <div className="max-w-xs">
//             <Logo dark />
//             <p className="mt-4 leading-relaxed text-white text-lg">
//               Connect with us to explore how we can deliver exceptional AI
//               solutions for your needs.
//             </p>
//             <div className="mt-6 space-y-2 text-white/70">
//               <a
//                 href="mailto:info@infixsystems.com"
//                 className="flex items-center gap-2 hover:text-white"
//               >
//                 <Mail className="size-4" /> info@infixsystems.com
//               </a>
//               <a
//                 href="tel:+925123456789"
//                 className="flex items-center gap-2 hover:text-white"
//               >
//                 <Phone className="size-4" /> +92 51 234 56789
//               </a>
//             </div>
//           </div>

//           {COLUMNS.map((col) => (
//             <div key={col.title}>
//               <h3 className="font-heading text-lg font-bold text-white">
//                 {col.title}
//               </h3>
//               <ul className="mt-4 space-y-3">
//                 {col.links.map((link) => (
//                   <li key={link.label}>
//                     <a
//                       href={link.href}
//                       className="text-white/60 text-lg transition-colors hover:text-white"
//                     >
//                       {link.label}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}

//           <div>
//             <h3 className="font-heading text-lg font-bold text-white">
//               Contacts
//             </h3>
//             <p className="mt-4 font-medium text-lg text-white/80">
//               Corporate Headquarters
//             </p>
//             <p className="mt-1 text-lg leading-relaxed text-white/60">
//               Address: Viale Francesco Crispi 11, Milan, Italy
//             </p>
//             <h4 className="mt-6 font-heading text-lg font-bold text-white">
//               Socials
//             </h4>
//             <div className="mt-3 flex gap-3">
//               {SOCIALS.map(({ Icon, href }, i) => (
//                 <a
//                   key={i}
//                   href={href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex size-12 border border-white/30 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
//                 >
//                   <Icon className="size-4" />
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
//           <p>© 2026 infixsystems.com</p>
//           <div className="flex gap-6">
//             <a href="/terms" className="hover:text-white">
//               Terms &amp; Conditions
//             </a>
//             <a href="/privacy" className="hover:text-white">
//               Privacy Policy
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

import { Logo } from "@/components/logo";
import { InstagramIcon, LinkedInIcon, XIcon } from "./social-icons";

const COLUMNS = [
  {
    title: "Navigation",
    links: [
      { label: "Who We Are", href: "/who-we-are" },
      { label: "Solutions", href: "/#portfolio" },
      { label: "Resources", href: "/resources" },
      { label: "Careers", href: "/careers" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "AI Transformation", href: "/#services" },
      { label: "Data & Analytics", href: "/services/data-analytics" },
      { label: "Cloud", href: "/services/cloud" },
      { label: "Security", href: "/services/security" },
      { label: "BPS", href: "/services/bps" },
    ],
  },
];

const SOCIALS = [
  {
    Icon: XIcon,
    href: "https://x.com/infixsystems",
  },
  {
    Icon: InstagramIcon,
    href: "https://instagram.com/infixsystems",
  },
  {
    Icon: LinkedInIcon,
    href: "https://linkedin.com/company/infixsystems",
  },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-black px-4 py-4 lg:px-6 lg:py-6">
      <div
        className="
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-[#252B46]
          bg-[#03050B]
        "
      >
        {/* Background Pattern */}
        <img
          src="/assets/black-tiles-BG-C.png"
          alt=""
          aria-hidden="true"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-contain
            opacity-80
            pointer-events-none
          "
        />

        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-[#03050B]/70" /> */}

        {/* Content */}
        <div className="relative z-10 px-8 py-10 lg:px-14 lg:py-14">
          <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1.3fr]">
            {/* Left Column */}
            <div className="max-w-md">
              <Logo dark />

              <p className="mt-8 text-lg leading-relaxed text-white lg:text-[22px]">
                Connect with us to explore how we can deliver exceptional AI
                solutions for your needs.
              </p>

              <div className="mt-10 space-y-5">
                <a
                  href="mailto:info@infixsystems.com"
                  className="
                    flex
                    items-center
                    gap-4
                    text-white/70
                    transition-colors
                    hover:text-white
                  "
                >
                  <Mail className="size-6 shrink-0" />
                  <span className="text-lg lg:text-[18px]">
                    info@infixsystems.com
                  </span>
                </a>

                <a
                  href="tel:+925123456789"
                  className="
                    flex
                    items-center
                    gap-4
                    text-white/70
                    transition-colors
                    hover:text-white
                  "
                >
                  <Phone className="size-6 shrink-0" />
                  <span className="text-lg lg:text-[18px]">
                    +92 51 234 56789
                  </span>
                </a>
              </div>
            </div>

            {/* Navigation + Services */}
            {COLUMNS.map((column) => (
              <div key={column.title}>
                <h3 className="text-2xl font-semibold text-white lg:text-[28px]">
                  {column.title}
                </h3>

                <ul className="mt-8 space-y-5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="
                          text-white/60
                          transition-colors
                          hover:text-white
                          text-lg
                        "
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contacts */}
            <div>
              <h3 className="text-2xl font-semibold text-white lg:text-[28px]">
                Contacts
              </h3>

              <h4 className="mt-8 text-xl font-medium text-white">
                Corporate Headquarters
              </h4>

              <p className="mt-3 max-w-sm text-lg leading-relaxed text-white/60">
                Address: Viale Francesco Crispi 11,
                <br />
                Milan, Italy
              </p>

              <h4 className="mt-10 text-xl font-semibold text-white">
                Socials
              </h4>

              <div className="mt-5 flex gap-4">
                {SOCIALS.map(({ Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/20
                      bg-white/10
                      text-white
                      transition-all
                      duration-300
                      hover:scale-105
                      hover:bg-white/20
                    "
                  >
                    <Icon className="size-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-14 border-t border-dashed border-white/20 pt-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <p className="text-sm text-white/40 lg:text-base">
                © 2026 infixsystems.com
              </p>

              <div className="flex gap-8 text-sm lg:text-base">
                <Link
                  href="/terms"
                  className="text-white/40 transition-colors hover:text-white"
                >
                  Terms & Conditions
                </Link>

                <Link
                  href="/privacy"
                  className="text-white/40 transition-colors hover:text-white"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}