import { Button } from "@/components/ui/button"

export function Cta() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:py-28">
        <h2 className="text-balance font-heading text-4xl  text-foreground sm:text-5xl">
          Everything you need to
        </h2>
        <h2 className="font-heading text-4xl py-3  text-foreground sm:text-5xl">grow your business is a click away</h2>
        <p className="mx-auto mt-5 font-semibold text-md text-pretty leading-relaxed ">
          Connect with us to explore how we can deliver exceptional AI
        </p>
        <p className="mx-auto font-semibold  text-pretty text-md leading-relaxed">solutions for your needs.</p>
        <Button size="lg" className="mt-8 rounded-sm shadow font-semibold text-lg py-7 cursor-pointer px-8">
          Book a Consultation
        </Button>
      </div>
    </section>
  )
}
