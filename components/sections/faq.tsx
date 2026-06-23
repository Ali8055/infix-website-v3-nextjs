
import { HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionBadge } from "../section-badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"

const FAQS = [
  {
    q: "How can I get started with your services?",
    a: "You can get started by contacting us through our website's contact form, emailing us at info@infixsystems.com, or calling us at (123) 456-7890. We'll schedule an initial consultation to understand your needs and propose the best solutions.",
  },
  {
    q: "What is included in your application design service?",
    a: "Our application design service covers research, wireframing, high-fidelity UI design, interactive prototyping, and design handoff—everything needed to take your product from concept to a developer-ready design system.",
  },
  {
    q: "What technologies do you use for app and web development?",
    a: "We work across a 50+ strong stack including React, Next.js, Node.js, Python, Laravel, Firebase, GraphQL, and major cloud platforms, choosing the right tools for each project's goals.",
  },
  {
    q: "How can I get started with your services?",
    a: "Reach out anytime and our team will guide you through scoping, timelines, and a tailored proposal so you can start with confidence.",
  },
]

export function Faq() {
  return (
    // 1. Changed h-screen to min-h-screen so it never forces elements to overflow and hide
    <section id="careers" className="bg-lavender min-h-screen flex flex-col">
      {/* 2. Added a safe bottom padding (pb-12 lg:pb-16) so the accordion never slams into the very bottom of the screen */}
      <div className="mx-auto px-20 pt-20 lg:pt-28 pb-12 lg:pb-16 flex flex-col flex-1 w-full ">
        
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionBadge icon={HelpCircle}>Your Questions, Answers</SectionBadge>
            <h2 className="mt-4 text-balance font-heading text-4xl font-bold leading-tight tracking-tight text-lavender-foreground sm:text-5xl">
              Got questions?
              <br />
              We&apos;ve got answers
            </h2>
          </div>
          <p className="max-w-md text-2xl font-bold lg:text-right">
            Find quick answers to common questions about our services, process,
            and support.
          </p>
        </div>

        {/* mt-auto pushes this block to the bottom dynamically */}
        <div className="mt-auto pt-12 grid grid-cols-1 gap-52 lg:grid-cols-[0.8fr_1.2fr] items-end">
          
          {/* card */}
          <div className="flex flex-col rounded-2xl bg-primary p-12 text-primary-foreground">
            <h3 className="font-heading text-4xl font-bold">
              Bring us your challenge.
            </h3>
            <p className="mt-3 text-xl leading-relaxed text-white/80">
              We&apos;ll build the right solution with speed, precision, and
              expertise.
            </p>
            <Button
              className="mt-6 w-fit rounded-sm text-lg p-6 bg-white px-7 text-ink hover:bg-white/90"
            >
              Get in Touch
            </Button>
          </div>

          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="flex flex-col gap-3 w-full"
          >
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-md border transition-all duration-300
                  data-[state=closed]:border-white/20 
                  data-[state=closed]:bg-white/30 
                  data-[state=closed]:backdrop-blur-md 
                  data-[state=open]:border-transparent 
                  data-[state=open]:bg-background 
                  data-[state=open]:shadow-md
                  px-6"
              >
                <AccordionTrigger className="py-5 text-left font-heading text-2xl font-semibold text-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                {/* 3. Added pb-5 to ensure the expanded text has clear interior padding */}
                <AccordionContent className="pb-8 text-xl leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}