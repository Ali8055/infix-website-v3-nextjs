import { useState, useEffect } from "react"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { InstagramIcon, LinkedInIcon, XIcon } from "../social-icons"

// Dummy array repeating your asset for the carousel effect
const HERO_VIDEOS = [
  "/assets/hero1.mp4",
  "/assets/hero2.mp4",
  "/assets/hero1.mp4",
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Automatically switch videos every 8 seconds (adjust time as needed)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_VIDEOS.length)
    }, 8000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink h-screen">

      {/* Video Carousel Container */}
      <div className="absolute inset-0 size-full">
        {HERO_VIDEOS.map((videoSrc, index) => (
          <video
            key={index}
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className={`absolute size-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-0" : "opacity-0 -z-10"
              }`}
          />
        ))}
      </div>

      {/* Asset Overlay Image with Opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center mix-blend-normal opacity-40 z-10"
        style={{ backgroundImage: `url('/assets/hero section background overlay.jpg')` }}
      />

      {/* Gradient Shader for Depth / Text Readability */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/30 to-ink/70 z-20" /> */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-transparent to-ink/30 z-20" />
      {/* Content Layer */}
      <div className="relative  mx-auto  flex min-h-full px-20 justify-between items-center pt-32 pb-20 z-30">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur">
            <Sparkles className="size-3.5 text-primary" />
            AI-Powered Innovation for Businesses
          </span>

          <h1 className="mt-6 text-balance font-heading text-5xl leading-[1.20] text-white sm:text-6xl lg:text-6xl">
            The Home of <br /> Innovative Software &amp; Engineering Solutions
          </h1>

          <div className="mt-9">
            <Link href={"/contact/#contactform"}>
              <Button
                size="lg"

                className="rounded-sm cursor-pointer py-6 bg-white px-8 text-ink hover:bg-white/90"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex  flex-col gap-4  ">
        {[
          { icon: XIcon, label: "X" },
          { icon: InstagramIcon, label: "Instagram" },
          { icon: LinkedInIcon, label: "LinkedIn" },
        ].map(({ icon: Icon, label }) => (
          <a
            key={label}
            href="#"
            aria-label={label}
            className="flex size-14 items-center backdrop-blur justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white rounded-2xl bg-primary/20 p-3"
          >
            <Icon className="size-10" />
          </a>
        ))}
      </div>

      </div>

      {/* Optional: Carousel Indicators/Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {HERO_VIDEOS.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`size-2 rounded-full transition-all ${index === currentSlide ? "bg-white w-6" : "bg-white/40"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}