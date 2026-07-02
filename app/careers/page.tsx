import { CareersHero } from "@/components/sections/careers-hero"
import { StatsStrip } from "@/components/sections/stats-strip"
import { MeetProfessionals } from "@/components/sections/meet-professionals"
import { JobListings } from "@/components/sections/job-listings"
import { Faq } from "@/components/sections/faq"
import { Cta } from "@/components/sections/cta"
import { SiteHeader } from "@/components/site-header"
import { SideRail } from "@/components/side-rail"
import { SiteFooter } from "@/components/site-footer"

export default function CareersPage() {
  return (
    <main className="font-sans">
      <SiteHeader />
      <SideRail />
      <CareersHero />
      <StatsStrip />
      <MeetProfessionals />
      <JobListings />
      <Faq />
      <Cta />
      <SiteFooter />
    </main>
  )
}
