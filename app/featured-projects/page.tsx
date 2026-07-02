import type { Metadata } from "next"
import { FeaturedProjects } from "@/components/sections/featured-projects"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Featured Projects | Infix Systems",
  description:
    "Selected case studies showing how Infix Systems designs and builds AI-powered products end to end.",
}

export default function FeaturedProjectsIndexPage() {
  return (
    <main className="bg-ink pt-24">
      <FeaturedProjects />
      <SiteFooter />
    </main>
  )
}
