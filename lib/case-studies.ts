export type CaseStudyChallenge = {
  title: string
  description: string
}

export type CaseStudyFeature = {
  icon: "share" | "map" | "ticket" | "chat" | "lock" | "settings" | "layers"
  title: string
  description: string
}

export type ProjectBriefRow = {
  label: string
  value: string
}

export type CaseStudy = {
  slug: string
  name: string
  tagline: string
  summary: string
  cardImage: string
  cardDescription: string
  brief?: ProjectBriefRow[]
  challenges?: {
    eyebrow: string
    heading: string
    intro: string
    items: CaseStudyChallenge[]
  }
  solution?: {
    eyebrow: string
    heading: string
    intro: string
    features: CaseStudyFeature[]
    techStack?: string[]
  }
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "nextflag",
    name: "Nextflag",
    tagline: "A social network for travel you can actually trust.",
    summary:
      "In an era dominated by impersonal review platforms and overcooked travel apps, Nextflag offers a fresh approach: a social first, mobile centric travel platform where users can discover, save, and share places that truly matter, recommended by people they trust. Designed for foodies, luxury travelers, nature lovers, and cultural explorers alike, Nextflag lets users build personal travel maps, curate custom lists, and connect over shared experiences.",
    cardImage: "/assets/ai-network.png",
    cardDescription:
      "A mobile-first social travel app that replaces anonymous reviews with recommendations from people you actually trust.",
    brief: [
      { label: "Client", value: "Nextflag" },
      { label: "Industry", value: "Travel & Social Discovery" },
      { label: "Platform", value: "iOS & Android, React Native" },
      { label: "Engagement", value: "Product design, mobile & backend engineering" },
      { label: "Audience", value: "Families, luxury & nature travelers, cultural explorers" },
    ],
    challenges: {
      eyebrow: "Four Flags",
      heading: "The Challenge",
      intro:
        "Conventional travel tools are packed with features, yet still fail to serve the core needs of modern travelers:",
      items: [
        {
          title: "Challenge One",
          description:
            "Overwhelming and impersonal: reviews from strangers and sponsored influencers can't build confidence.",
        },
        {
          title: "Challenge Two",
          description:
            "Fragmented planning tools: travel planning is clunky, scattered across sheets, bookmarks, and notes.",
        },
        {
          title: "Challenge Three",
          description:
            "No true personalization: users are bombarded with one-size-fits-all content, not tailored to their tastes or social circle.",
        },
        {
          title: "Challenge Four",
          description:
            "Too much noise, not enough signal: ads, irrelevant listings, and rating manipulation dilute the experience and credibility.",
        },
      ],
    },
    solution: {
      eyebrow: "Solutions",
      heading: "A mobile-first social map, not another listings app",
      intro:
        "Nextflag was crafted as a mobile first social discovery app, merging community trust with intuitive travel mapping. Each feature is designed to promote authentic connections and elevated planning without the noise.",
      features: [
        {
          icon: "share",
          title: "Social Discovery Engine",
          description:
            "Places surface because someone you follow vetted them first — not because a listing paid for placement. Rank is driven by your actual circle, so the feed gets sharper the more people you trust on the app.",
        },
        {
          icon: "map",
          title: "Interactive Map Interface",
          description:
            "Every saved place lives on a personal map layered with friends' pins, so a city resolves into a network of trusted dots instead of a wall of reviews.",
        },
        {
          icon: "ticket",
          title: "Save & curate travel lists",
          description:
            "Build themed lists — a coffee crawl, a honeymoon shortlist — then keep them private or share them as a head start for someone else's trip.",
        },
        {
          icon: "chat",
          title: "Community feed",
          description:
            "A feed built only from people you follow — real visits, real photos, real notes. No algorithmic filler competing for attention.",
        },
        {
          icon: "lock",
          title: "Privacy & sharing controls",
          description:
            "Decide list by list who sees what — public for followers, private for just a travel partner. Nothing is shared by default.",
        },
      ],
      // TODO: confirm this list with engineering — see note in project chat history.
      techStack: ["React Native", "FastAPI", "PyTorch", "PostgreSQL"],
    },
  },
  {
    slug: "indrive",
    name: "InDrive",
    tagline: "Ride-hailing, delivery, and urban services at global scale.",
    summary:
      "inDrive is an international company operating in the fields of ride-hailing, delivery, cargo transportation, and urban services.",
    cardImage: "/assets/ai-network.png",
    cardDescription:
      "inDrive is an international company operating in the fields of ride-hailing, delivery, cargo transportation, and urban services.",
  },
  {
    slug: "bandy",
    name: "Bandy",
    tagline: "Managing shared accommodation and expenses, together.",
    summary:
      'This project involved creating an application for managing shared accommodation and expenses. I named it Bandy, from the English word "band," meaning group.',
    cardImage: "/assets/figma.png",
    cardDescription:
      'This project involved creating an application for managing shared accommodation and expenses. I named it Bandy, from the English word "band," meaning group.',
  },
  {
    slug: "topcoach",
    name: "TopCoach",
    tagline: "Bringing a WordPress mockup to life.",
    summary:
      "Projet réalisé lors de mon alternance chez Upyne Digital Solution. J'ai dû intégrer une maquette réalisée au préalable, sur WordPress.",
    cardImage: "/assets/topcoach.png",
    cardDescription:
      "Projet réalisé lors de mon alternance chez Upyne Digital Solution. J'ai dû intégrer une maquette réalisée au préalable, sur WordPress.",
  },
  {
    slug: "crm-tech-o",
    name: "CRM TECH-O",
    tagline: "A custom CRM, from mockup to advanced prototype.",
    summary:
      "I was contacted by the development agency SINEO for a project with their client TECH-O, to design a high-definition mockup and an advanced prototype of a custom CRM.",
    cardImage: "/assets/crm.png",
    cardDescription:
      "I was contacted by the development agency SINEO for a project with their client TECH-O, to design a high-definition mockup and an advanced prototype of a custom CRM.",
  },
]

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((study) => study.slug === slug)
}

export function getOtherCaseStudies(slug: string, limit = 4) {
  return CASE_STUDIES.filter((study) => study.slug !== slug).slice(0, limit)
}
