import { ArrowRight, BriefcaseBusiness, Map, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
// import { SectionBadge } from "../section-badge"
import { SectionBadge } from "@/components/section-badge"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"

const TRAVEL_APP_TAGS = ["React Native", "FastAPI", "PyTorch", "PostgreSQL"]

const PORTFOLIO_LIST = [
    {
        name: "InDrive",
        image: "/assets/ai-network.png", // Replace with your actual path from the project
        description:
            "inDrive is an international company operating in the fields of ride-hailing, delivery, cargo transportation, and urban services.",
    },
    {
        name: "Bandy",
        image: "/assets/figma.png",
        description:
            'This project involved creating an application for managing shared accommodation and expenses. I named it Bandy, from the English word "band," meaning group.',
    },
    {
        name: "TopCoach",
        image: "/assets/topcoach.png",
        description:
            "Projet réalisé lors de mon alternance chez Upyne Digital Solution. J'ai dû intégrer une maquette réalisée au préalable, sur WordPress.",
    },
    {
        name: "CRM TECH-O",
        image: "/assets/crm.png",
        description:
            "I was contacted by the development agency SINEO for a project with their client TECH-O, to design a high-definition mockup and an advanced prototype of a custom CRM.",
    },
]

export default function FeaturedProjects() {
    return (
        <section id="portfolio" className="bg-ink text-white relative">
            {/* <SiteHeader /> */}

            {/* SECTION 1: Case Study Hero (Gradient Header) */}
            <div className="w-full bg-hero-cyber via-ink to-ink border-b border-white/5 h-screen flex items-center">
                <div className="w-full px-16 py-28">
                    <div className="grid grid-cols-2 gap-12   ">

                        {/* Left Main Content */}
                        <div className="">
                            <SectionBadge icon={BriefcaseBusiness} dark>
                                Project Name
                            </SectionBadge>

                            <h2 className="max-w-2xl mt-6 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15]">
                                Nextflag - A social network for travel you can actually trust.
                            </h2>

                            <p className="mt-6 text-2xl text-white/80 leading-relaxed max-w-xl">
                                Most travel apps optimize for volume – more listings, more reviews, more strangers' opinions.
                                Nextflag is built on the opposite bet: that the only recommendation worth following is one from
                                someone you would actually ask. We designed and built the mobile app, the backend, and the discovery
                                model that makes that bet work at scale.
                            </p>
                        </div>

                        {/* Right Project Brief Card */}
                        <div className="flex justify-end items-center">
                            <div className=" bg-white/[0.03]  backdrop-blur-md border border-white/10 rounded-2xl p-6 lg:p-8">
                                <h3 className="font-heading text-sm font-semibold tracking-wider text-[#FFB648] uppercase  pb-4">
                                    Project Brief
                                </h3>
                                <div className="mt-6 space-y-6">
                                    <div className="flex justify-between items-start gap-4 text-sm sm:text-base border-b border-white/10 pb-4">
                                        <span className="text-white/50">Client</span>
                                        <span className="text-white font-medium text-right">Nextflag</span>
                                    </div>
                                    <div className="flex justify-between items-start gap-4 text-sm sm:text-base border-b border-white/10 pb-4">
                                        <span className="text-white/50">Industry</span>
                                        <span className="text-white font-medium text-right">Travel &amp; Social Discovery</span>
                                    </div>
                                    <div className="flex justify-between items-start gap-4 text-sm sm:text-base border-b border-white/10 pb-4">
                                        <span className="text-white/50">Platform</span>
                                        <span className="text-white font-medium text-right">iOS &amp; Android, React Native</span>
                                    </div>
                                    <div className="flex justify-between items-start gap-4 text-sm sm:text-base border-b border-white/10 pb-4">
                                        <span className="text-white/50">Engagement</span>
                                        <span className="text-white font-medium text-right">Product design, mobile &amp; backend engineering</span>
                                    </div>
                                    <div className="flex justify-between items-start gap-4 text-sm sm:text-base">
                                        <span className="text-white/50">Audience</span>
                                        <span className="text-white font-medium text-right w-xl">Families, luxury &amp; nature travelers, cultural explorers</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            {/* SECTION 2: Problem / Pain Points Grid */}
            <div className="relative overflow-hidden text-black h-screen">
                <img
                    src="/assets/worldBG.jpg"
                    alt="Shared background texture"
                    className="absolute inset-0 size-full object-cover z-0"
                />
                <div className="relative z-10  mx-auto  px-6 py-16 lg:px-16 lg:py-24 ">

                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 border-b border-white/10 pb-10">
                        <div>
                            {/* <span className="text-xs font-semibold tracking-widest uppercase text-primary">Four Flags</span> */}
                            <SectionBadge icon={Settings} >
                                Project Name
                            </SectionBadge>
                            <h3 className="mt-2 text-[60px] font-heading ">
                                Four flags travelers kept raising
                            </h3>
                        </div>
                        <p className="max-w-md text-xl sm:text-base lg:text-right">
                            Before Nextflag, the team kept hearing the same complaints about every leading travel tool on the market — regardless of how many features it shipped.
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {[
                            { title: "No inherent trust", desc: "Star ratings and reviews are easily gamed, making people completely reliant on strangers and algorithms, not trustworthy recommendations." },
                            { title: "Scattered planning", desc: "Saved links end up lost across messages, links folders, and random note apps — with no structured system that ties everything together cleanly." },
                            { title: "One structure, every traveler", desc: "The loose list model doesn't work for different archetypes. Planning setup is identical, whether you are a backpacker or a dynamic group." },
                            { title: "Signal lost in the noise", desc: "Yes, indexed listings help, but findings become highly diluted. Users want fewer recommendations that are structurally worth looking." },
                        ].map((pain, idx) => (
                            <div key={idx} className=" bg-gradient-to-b from-white via-[#7B51FC]/5 to-[#7B51FC]/75 shadow-sm border border-black rounded-sm p-12 hover:border-white/10 transition-colors">
                                <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm mb-4 ">
                                    0{idx + 1}
                                </div>
                                <h4 className="text-lg font-bold font-heading ">{pain.title}</h4>
                                <p className="mt-2 text-sm  leading-relaxed">{pain.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* SECTION 3: Mobile-First Feature Architecture with Custom Subtle Checkerboard BG */}
            <div className="bg-black/20 border-y border-white/5">
                <div className="mx-auto max-w-7xl px-6 py-20 lg:px-16 lg:py-28">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <span className="text-xs font-semibold tracking-widest uppercase text-primary">App Flow</span>
                            <h3 className="mt-2 text-3xl font-heading font-bold sm:text-4xl lg:text-5xl">
                                A mobile-first social map,<br />not another listings app
                            </h3>
                        </div>
                        <p className="max-w-md text-sm sm:text-base text-white/70">
                            Nextflag merges community trust with intuitive travel mapping. Every feature counts to promote a genuine connection instead of endless scrolls.
                        </p>
                    </div>

                    {/* Core Feature Grid */}
                    <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            { title: "Social discovery engine", desc: "Places surface because someone you follow voted them first — not because a listing paid for placement. Content is driven by social rings, so the feed remains authentic." },
                            { title: "Interactive map interface", desc: "Every saved place lives on a personal map layout, combining friends' pins, so a city dissolves into a network of trusted data instead of walls of text reviews." },
                            { title: "Save & curate travel lists", desc: "Build shared lists — an active trip, a honeymoon shortlist — then keep them private or share them as a head start for someone else's trip." },
                            { title: "Community feed", desc: "A feed built only from people you follow — real visits, real photos, real notes. No algorithmic filler competing for attention." },
                            { title: "Privacy & sharing controls", desc: "Decide exactly who sees what — public for followers, private for group travel partners. Nothing is shared by default." },
                        ].map((feature, idx) => (
                            <div
                                key={idx}
                                className="relative overflow-hidden rounded-2xl border border-white/10 p-6 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/[0.04] via-transparent to-transparent"
                                style={{
                                    backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
                                    backgroundSize: '24px 24px'
                                }}
                            >
                                <div className="size-10 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center mb-6">
                                    <Map className="size-5 text-primary" />
                                </div>
                                <h4 className="text-xl font-bold font-heading text-white">{feature.title}</h4>
                                <p className="mt-2 text-sm text-white/60 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Technical Dynamic Badge / Note Layer */}
                    <div className="mt-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 p-4 max-w-3xl">
                        <p className="text-xs sm:text-sm text-yellow-200/80 leading-relaxed">
                            <span className="font-bold text-yellow-400">Note:</span> The live page currently lists computer vision tools (YOLOv8, OpenCV, PyTorch) under this case study — those belong to a different, security-monitoring project. Swapped them below for a genuine travel-app stack worth confirming the real one with the engineering team.
                        </p>
                    </div>

                    {/* Interactive Technology Tech Stack Pill Row */}
                    <div className="mt-6 flex flex-wrap gap-2">
                        {TRAVEL_APP_TAGS.map((tag) => (
                            <span key={tag} className="rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs font-medium text-white/80">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* SECTION 4: Secondary Standard Multi-Project Portfolio Display Grid */}
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-16 lg:py-28">
                <div className="border-b border-white/10 pb-6 mb-12">
                    <SectionBadge icon={BriefcaseBusiness} dark>
                        More Case Studies
                    </SectionBadge>
                    <h3 className="mt-4 text-2xl font-heading font-bold sm:text-3xl text-white">
                        Other Standout Deployments
                    </h3>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {PORTFOLIO_LIST.map((project) => (
                        <article
                            key={project.name}
                            className="group flex flex-col gap-6 rounded-2xl border border-white/5 p-5 transition-all hover:border-primary/40 hover:bg-white/[0.02] bg-white/[0.01]"
                        >
                            {/* Responsive Image Frame Block */}
                            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-ink/50 border border-white/10">
                                <img
                                    src={project.image}
                                    alt={`${project.name} preview`}
                                    className="h-full w-full object-cover opacity-80 group-hover:scale-[1.02] transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-60" />
                            </div>

                            {/* Summary Presentation Text block */}
                            <div className="flex flex-col flex-1 justify-between">
                                <div>
                                    <h4 className="font-heading text-2xl font-bold text-white group-hover:text-primary transition-colors">
                                        {project.name}
                                    </h4>
                                    <p className="mt-3 text-sm sm:text-base text-white/75 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="mt-6 pt-4 border-t border-white/5">
                                    <a
                                        href="#"
                                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2 transition-all"
                                    >
                                        Read Full Case Study <ArrowRight className="size-4" />
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Global Bottom Section CTA Unit */}
                <div className="mt-24 border-t border-white/10 pt-16 max-w-4xl">
                    <p className="text-pretty text-lg leading-relaxed text-white/90 sm:text-xl lg:text-2xl font-light">
                        Explore some of our standout projects that showcase our expertise in AI, software development, and digital innovation. Each solution is designed to solve real-world challenges, enhance business performance, and deliver measurable results for our clients.
                    </p>
                    <Link href="/contact/#contactform" >
                        <Button
                            size="lg"
                            className="mt-8 w-full rounded-full bg-white px-8 py-6 text-ink font-semibold hover:bg-white/90 sm:w-auto transition-transform active:scale-95 cursor-pointer"
                        >
                            Start a Project
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}