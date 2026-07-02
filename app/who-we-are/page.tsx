import { WhoWeAreHero } from "@/components/sections/who-we-are-hero"
import { CompanyOverview } from "@/components/sections/company-overview"
import { StatsStrip } from "@/components/sections/stats-strip"
import { TechStack } from "@/components/sections/tech-stack"
import { WorldwideFootprint } from "@/components/sections/worldwide-footprint"
import { MeetProfessionals } from "@/components/sections/meet-professionals"
import { Faq } from "@/components/sections/faq"
import { Cta } from "@/components/sections/cta"
import { SiteHeader } from "@/components/site-header"
import { SideRail } from "@/components/side-rail"
import { SiteFooter } from "@/components/site-footer"

export default function WhoWeArePage() {
  return (
    <main className="font-sans">
      <SiteHeader />
      <SideRail />
      <WhoWeAreHero />
      <CompanyOverview />
      <StatsStrip />
      <TechStack />
      <WorldwideFootprint />
      <MeetProfessionals />
      <Faq />
      <Cta />
      <SiteFooter />
    </main>
  )
}
