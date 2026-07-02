"use client"
import { Capabilities } from "@/components/sections/capabilities";
import { ClientsStrip } from "@/components/sections/clients-strip";
import { CompanyOverview } from "@/components/sections/company-overview";
import { Cta } from "@/components/sections/cta";
import { Faq } from "@/components/sections/faq";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { FounderQuote } from "@/components/sections/founder-quote";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { StatsStrip } from "@/components/sections/stats-strip";
import { Technologies } from "@/components/sections/technologies";
import { SideRail } from "@/components/side-rail";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { useState } from "react";


export default function Page() {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0)
  return (
    <main className="font-sans ">
      <SiteHeader />
      <SideRail />
      <Hero />
      <ClientsStrip />
      <CompanyOverview />
      <StatsStrip />
      {/* <Services />
      <Capabilities /> */}
      <div className="relative overflow-hidden">
        <img
          src="/assets/worldBG.jpg"
          alt="Shared background texture"
          className="absolute inset-0 size-full object-cover z-0"
        />

        {/* Content wrapper to force them above the image */}
        <div className="relative z-10">
          <Services
            activeIndex={activeServiceIndex}
            setActiveIndex={setActiveServiceIndex}
          />
          <Capabilities
            activeIndex={activeServiceIndex}
          />
        </div>
      </div>
      <FounderQuote />
      <FeaturedProjects />
      <Faq />
      <Technologies />
      <Cta />
      <SiteFooter />
    </main>
  )
}
