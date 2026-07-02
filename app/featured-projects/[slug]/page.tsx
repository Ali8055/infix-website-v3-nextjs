import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CaseStudyTemplate } from "@/components/sections/case-study-template"
import { CASE_STUDIES, getCaseStudy } from "@/lib/case-studies"

export function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({ slug: study.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudy(slug)

  if (!study) return {}

  return {
    title: `${study.name} — Case Study | Infix Systems`,
    description: study.cardDescription,
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const study = getCaseStudy(slug)

  if (!study) notFound()

  return <CaseStudyTemplate study={study} />
}
