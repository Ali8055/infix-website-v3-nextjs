export function CompanyOverview() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden ">

      {/* Subtle dot-grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, #a0a0b0 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto px-20 lg:px-20 ">
        {/* Changed grid layout to 1fr 1fr (lg:grid-cols-2) and items-stretch to align left & right heights */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12 items-stretch">

          {/* ── LEFT: quote + paragraphs ── */}
          <div className="flex flex-col justify-center">
            <blockquote className="font-heading text-4xl font-bold leading-[1.15] text-foreground lg:text-[50px]">
              &ldquo;Delivering Gen-AI solutions &amp; MVP&apos;s for real world
              impact&rdquo;
            </blockquote>

            <div className="mt-10 flex flex-col gap-5 text-[25px]">
              <p className=" leading-relaxed text-foreground/70">
                Infix Systems is a developer and provider of AI-powered software
                and full-cycle digital solutions.
              </p>
              <p className=" leading-relaxed text-foreground/70">
                Rooted in innovation and real world impact, Infix&apos;s
                platforms support businesses and startups with product
                development, automation, and AI integration accelerating growth
                and solving challenges across diverse industries.
              </p>
            </div>
          </div>

          {/* ── RIGHT: two stacked cards ── */}
          <div className="flex flex-col gap-5 h-full justify-between ">

            {/* Card 1: team photo + 60+ stat side by side */}
            {/* Increased height to h-[260px] */}
            <div className="flex gap-5 h-[320px]">

              {/* Team meeting photo */}
              <div className="relative flex-1 overflow-hidden bg-white rounded-2xl border border-border">
                <img
                  src="/assets/team-meeting.png"
                  alt="Team meeting"
                  className="absolute inset-0 size-full object-cover"
                />
                {/* purple icon badge on top-left */}
                <div className="absolute top-4 left-30 flex size-20 items-center justify-center rounded-full bg-[#111] shadow-lg">
                  {/* bar-chart icon in primary purple */}
                  <svg width="62" height="62" viewBox="0 0 24 24" fill="none" stroke="#7c55f5" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"/>
                    <line x1="12" y1="20" x2="12" y2="4"/>
                    <line x1="6"  y1="20" x2="6"  y2="14"/>
                  </svg>
                </div>
              </div>

              {/* 60+ stat */}
              <div className="flex flex-col justify-center bg-white rounded-2xl border border-border px-8 py-5 w-[50%] shadow-sm">
                <span className="font-heading text-6xl font-black text-foreground leading-none">
                  60+
                </span>
                <p className="mt-3 text-sm text-muted-foreground leading-snug">
                  some big companies that we work with, and trust us very much
                </p>
                <hr className="mt-5 border-border" />
              </div>
            </div>

            {/* Card 2: Drive traffic dark banner */}
            {/* Increased height from 170 to 220 */}
            <div className="relative rounded-2xl overflow-hidden bg-[#0e0e12] h-[220px] shadow-lg">

              {/* Background: worldBG subtly visible */}
              <img
                src="/assets/worldBG.jpg"
                alt=""
                aria-hidden
                className="absolute inset-0 size-full object-cover opacity-20 grayscale"
              />

              {/* Dashed circle decorations */}
              <div className="absolute left-10 top-1/2 -translate-y-1/2 size-40 rounded-full border border-dashed border-white/15" />
              <div className="absolute left-10 top-1/2 -translate-y-1/2 size-24 rounded-full border border-dashed border-white/10" />

              {/* Text */}
              <div className="relative z-10 flex flex-col justify-center h-full px-8 max-w-[60%]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-6 h-px bg-white/50" />
                  <span className="text-xs text-white/60 font-medium tracking-wide uppercase">
                    Drive More Traffic and Sales
                  </span>
                </div>
                <p className="font-heading text-2xl font-bold text-white leading-snug">
                  Drive more traffic<br />and product sales
                </p>
              </div>

              {/* Right side: bar chart graphic using the provided image */}
              <div className="absolute right-0 top-0 bottom-0 flex items-end justify-end pr-8 pb-6 gap-3">
                {/* Three purple bars of increasing height */}
                {[55, 75, 95].map((h, i) => (
                  <div
                    key={i}
                    className="w-12 rounded-t-xl bg-[#7c55f5]"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}