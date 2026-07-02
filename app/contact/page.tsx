"use client"

import { useState, useRef } from "react"
import { Phone, Mail, Send, MapPin, Globe } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SectionBadge } from "@/components/section-badge"
import { Logo } from "@/components/logo"
import { XIcon, InstagramIcon, LinkedInIcon } from "@/components/social-icons"

const MAX_CHARS = 2000

const BRANCHES = [
    {
        country: "United Kingdom",
        flag: "🇬🇧",
        address: "Office # 3207, 3rd Floor, NSTP, H-12, Islamabad, Pakistan",
        lat: 51.5074,
        lng: -0.1278,
    },
    {
        country: "Italy",
        flag: "🇮🇹",
        address: "Viale Fransesco, Crispi 11, Milan, Italy",
        lat: 45.4642,
        lng: 9.19,
    },
    {
        country: "Pakistan",
        flag: "🇵🇰",
        address: "Office # 3207, 3rd Floor, NSTP, H-12, Islamabad, Pakistan",
        lat: 33.6844,
        lng: 73.0479,
    },
]

type FormState = "idle" | "sending" | "success" | "error"

export default function ContactPage() {
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [formState, setFormState] = useState<FormState>("idle")
    const [errorMsg, setErrorMsg] = useState("")
    const formRef = useRef<HTMLFormElement>(null)

    const charsLeft = MAX_CHARS - message.length

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        if (!email || !message) return

        setFormState("sending")
        setErrorMsg("")

        try {
            const res = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, message }),
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.error || "Something went wrong. Please try again.")
            }

            setFormState("success")
            setEmail("")
            setMessage("")
        } catch (err: unknown) {
            setFormState("error")
            setErrorMsg(err instanceof Error ? err.message : "An unexpected error occurred.")
        }
    }

    return (
        <>
            <SiteHeader />

            {/* ── Hero ── */}
            <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink">
                {/* background image */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{ backgroundImage: "url('/assets/hero-section-bg.png')" }}
                    aria-hidden="true"
                />
                {/* purple gradient overlay */}
                <div
                    className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-ink/80"
                    aria-hidden="true"
                />

                <div className="relative z-10 px-6 text-center">
                    <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
                        ✨ Contact Our Experts
                    </span>
                    <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                        We&rsquo;re ready to help bring
                        <br />
                        your ideas to life.
                    </h1>
                </div>
            </section>

            {/* ── Conversation section ── */}
            <section id="contactform" className="bg-gradient-to-t from-[#D8D6FD] to-[#FFFFFF] bg-white p-20 h-screen">
                {/* top label row */}
                <div className="mx-auto mb-12 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                        <SectionBadge icon={Globe}>Contact Us</SectionBadge>
                        <h2 className="font-heading mt-4 text-5xl text-ink sm:text-5xl">
                            Let&rsquo;s Start a Conversation
                        </h2>
                    </div>
                    <p className="max-w-sm font-bold text-right text-base leading-relaxed sm:mt-2">
                        Ready to transform your ideas into reality? Get in touch with us and
                        let&rsquo;s discuss how we can help you achieve your goals.
                    </p>
                </div>

                {/* two-column card */}
                {/* Changed: Replaced single card grid with a flex or layout grid with a gap and removed overflow-hidden */}
                <div className="mx-auto grid grid-cols-1 gap-8 lg:grid-cols-[440px_1fr]">

                    {/* ── Left – dark info panel ── */}
                    {/* Added: shadow-xl and rounded-3xl explicitly to this container */}
                    {/* <div className="flex flex-col justify-between gap-10 bg-ink p-10 text-white rounded-3xl shadow-xl">
                        <div className="flex flex-col p-4 text-center justify-center item-center">
                            <Logo dark />
                            <p className="mt-6 text-base leading-relaxed ">
                                Connect with us to explore how we can deliver exceptional AI
                                solutions for your needs.
                            </p>
                        </div>

                        <div className="space-y-5">
                            <a
                                href="tel:+923458589342"
                                className="flex items-center gap-3 flex-col text-base text-white transition-colors hover:text-primary"
                            >
                                <span className="flex size-9 items-center justify-center rounded-full border border-white/20 bg-white/10">
                                    <Phone className="size-4" />
                                </span>
                                +92 345 8589342
                            </a>
                            <a
                                href="mailto:info@infixsystems.com"
                                className="flex items-center gap-3 flex-col text-base text-white transition-colors hover:text-primary"
                            >
                                <span className="flex size-9 items-center justify-center rounded-full border border-white/20 bg-white/10">
                                    <Mail className="size-4" />
                                </span>
                                info@infixsystems.com
                            </a>
                        </div>

                        <div className="flex gap-3 justify-center ">
                            {[XIcon, InstagramIcon, LinkedInIcon].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="flex size-11 items-center justify-center rounded-full border border-white/25 bg-white/10 transition-colors hover:bg-white/20"
                                    aria-label={["X / Twitter", "Instagram", "LinkedIn"][i]}
                                >
                                    <Icon className="size-4" />
                                </a>
                            ))}
                        </div>
                    </div> */}
                    {/* ── Left – dark info panel ── */}
                    <div className="relative overflow-hidden flex flex-col justify-between gap-10 bg-ink p-10 text-white rounded-3xl shadow-xl ">

                        {/* NEXT.JS OPTIMIZED BACKGROUND IMAGE ASSET */}
                        {/* <div className="absolute inset-0 z-0">
                            <img
                                src="/assets/black-tiles-BG-C.png"
                                alt="Tile background pattern"
                                className="w-full h-full object-cover object-center pointer-events-none border border-red-500 border-[15px]"
                            /> */}
                        {/* Optional overlay layer to maintain high readability contrast */}
                        {/* <div className="absolute inset-0 bg-ink/50 mix-blend-multiply" /> */}
                        {/* </div> */}
                        <div className="absolute inset-0 z-0 p-3"> {/* Added padding to inset the border slightly if desired, or remove p-3 for a flush edge */}
                            <div className="relative w-full h-full rounded-[45px] border-[5px] border-black overflow-hidden">
                                <img
                                    src="/assets/black-tiles-BG-C.png"
                                    alt="Tile background pattern"
                                    className="w-full h-full object-cover object-center pointer-events-none"
                                />
                                {/* Optional overlay layer to maintain high readability contrast */}
                                {/* <div className="absolute inset-0 bg-ink/50 mix-blend-multiply" /> */}
                            </div>
                        </div>
                        {/* CONTENT - Lifted safely using 'relative z-10' */}
                        <div className="relative z-10 flex flex-col p-4 text-center justify-center items-center">
                            <Logo dark />
                            <p className="mt-6 text-base leading-relaxed text-white/90">
                                Connect with us to explore how we can deliver exceptional AI
                                solutions for your needs.
                            </p>
                        </div>

                        <div className="relative z-10 space-y-5">
                            <a
                                href="tel:+923458589342"
                                className="flex items-center gap-3 flex-col text-base text-white transition-colors hover:text-primary"
                            >
                                <span className="flex size-9 items-center justify-center rounded-full border border-white/20 bg-white/10">
                                    <Phone className="size-4" />
                                </span>
                                +92 345 8589342
                            </a>
                            <a
                                href="mailto:info@infixsystems.com"
                                className="flex items-center gap-3 flex-col text-base text-white transition-colors hover:text-primary"
                            >
                                <span className="flex size-9 items-center justify-center rounded-full border border-white/20 bg-white/10">
                                    <Mail className="size-4" />
                                </span>
                                info@infixsystems.com
                            </a>
                        </div>

                        <div className="relative z-10 flex gap-3 justify-center">
                            {[XIcon, InstagramIcon, LinkedInIcon].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="flex size-11 items-center justify-center rounded-full border border-white/25 bg-white/10 transition-colors hover:bg-white/20"
                                    aria-label={["X / Twitter", "Instagram", "LinkedIn"][i]}
                                >
                                    <Icon className="size-4" />
                                </a>
                            ))}
                        </div>
                    </div>
                    {/* ── Right – contact form ── */}
                    {/* Added: shadow-xl, rounded-3xl, and converted bg-lavender/30 to an opaque or cleanly bordered container */}
                    <div className="bg-white p-10 rounded-3xl shadow-xl border border-lavender/10">
                        <h3 className="font-heading mb-8 text-2xl font-bold text-ink">
                            Get in Touch
                        </h3>

                        {formState === "success" ? (
                            <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                                <span className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <Send className="size-7" />
                                </span>
                                <p className="text-xl font-semibold text-ink">Message sent!</p>
                                <p className="text-muted-foreground">
                                    We&rsquo;ll get back to you at{" "}
                                    <strong className="text-ink">{email || "your email"}</strong>{" "}
                                    soon.
                                </p>
                                <button
                                    onClick={() => setFormState("idle")}
                                    className="mt-2 text-sm font-medium text-primary underline underline-offset-2"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
                                {/* Email */}
                                <div className="space-y-2">
                                    <label
                                        htmlFor="email"
                                        className="block text-md font-semibold text-ink"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email address"
                                        className="w-full rounded-sm border border-border bg-white px-4 py-3 text-sm text-ink placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
                                        disabled={formState === "sending"}
                                    />
                                </div>

                                {/* Message */}
                                <div className="space-y-2">
                                    <label
                                        htmlFor="message"
                                        className="block text-md font-semibold text-ink"
                                    >
                                        Message
                                    </label>
                                    <div className="relative">
                                        <textarea
                                            id="message"
                                            required
                                            rows={6}
                                            maxLength={MAX_CHARS}
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            placeholder="Type your message here..."
                                            className="w-full resize-none rounded-sm border border-border bg-white px-4 py-3 pb-8 text-sm text-ink placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
                                            disabled={formState === "sending"}
                                        />
                                        <span className="pointer-events-none absolute bottom-3 right-4 text-xs text-muted-foreground">
                                            {message.length} / {MAX_CHARS}
                                        </span>
                                    </div>
                                    <p className="text-md text-muted-foreground">
                                        Your message is encrypted and secured. We respect your
                                        privacy and will never share your information.
                                    </p>
                                </div>

                                {/* Error */}
                                {formState === "error" && (
                                    <p className="rounded-lg bg-destructive/10 px-4 py-3 text-sm text-destructive">
                                        {errorMsg}
                                    </p>
                                )}

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={formState === "sending" || !email || !message}
                                    className="inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {formState === "sending" ? (
                                        <>
                                            <span className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                                            Sending…
                                        </>
                                    ) : (
                                        <>
                                            <Send className="size-4" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>

            </section>

            {/* ── Worldwide Footprint ── */}
            <section className="bg-secondary/40 h-screen bg-red-500  p-20 ">
                <div className="mx-auto">
                    {/* header row */}
                    <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                            <SectionBadge icon={MapPin}>Branches</SectionBadge>
                            <h2 className="font-heading mt-4 text-5xl text-ink sm:text-5xl">
                                Our Worldwide Footprint
                            </h2>
                        </div>
                        <p className="max-w-xs text-right font-bold text-base leading-relaxed sm:mt-2">
                            We craft high-impact digital experiences through strategic design,
                            seamless coding, and creative thinking.
                        </p>
                    </div>

                    {/* dot-map illustration */}
                    <div className="relative mb-14 overflow-hidden rounded-3xl bg-white shadow-sm min-h-[450px]">
                        {/* ── Background Map Image – Now perfectly filling the container ── */}
                        <img
                            src="/assets/worldBG.jpg"
                            alt="World map showing Infix Systems office locations"
                            // {/* Changed: Removed max-w-4xl and added absolute dimensions with object-cover */}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        {/* Overlay pins – approximate positions for UK, Italy, Pakistan */}
                        {[
                            { label: "United Kingdom", flag: "🇬🇧", top: "36%", left: "46%" },
                            { label: "Italy", flag: "🇮🇹", top: "68%", left: "52%" },
                            { label: "Pakistan", flag: "🇵🇰", top: "60%", left: "60%" },
                        ].map((pin) => (
                            <div
                                key={pin.label}
                                className="absolute flex -translate-x-1/2 -translate-y-full flex-col items-center gap-1"
                                style={{ top: pin.top, left: pin.left }}
                            >
                                <span className="whitespace-nowrap rounded-full border border-border bg-white px-2.5 py-1 text-xs font-semibold text-ink shadow-sm">
                                    {pin.flag} {pin.label}
                                </span>
                                <span className="size-3 rounded-full bg-primary shadow-md shadow-primary/40" />
                            </div>
                        ))}
                    </div>

                    {/* Branch cards */}
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {BRANCHES.map((branch) => (
                            <div
                                key={branch.country}
                                className="flex flex-col gap-2 rounded-2xl border border-border bg-white p-6 shadow-sm"
                            >
                                <p className="flex items-center gap-2 font-heading text-base font-bold text-ink">
                                    <span className="text-xl">{branch.flag}</span>
                                    {branch.country}
                                </p>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    {branch.address}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <SiteFooter />
        </>
    )
}