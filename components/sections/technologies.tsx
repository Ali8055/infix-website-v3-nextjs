const TECHS = [
  "Laravel",
  "Python",
  "Docker",
  "Firebase",
  "Jupyter",
  "GraphQL",
  "Google Cloud",
  "Zeplin",
  "MySQL",
  "Figma",
  "Android",
  "AWS",
  "Next.js",
  "Django",
]

// Positions (in %) for the floating chips around the centerpiece (lg+)
const POS = [
  { top: "8%", left: "12%" },
  { top: "4%", left: "40%" },
  { top: "10%", left: "70%" },
  { top: "26%", left: "86%" },
  { top: "50%", left: "92%" },
  { top: "74%", left: "82%" },
  { top: "88%", left: "60%" },
  { top: "90%", left: "32%" },
  { top: "74%", left: "10%" },
  { top: "50%", left: "4%" },
  { top: "26%", left: "6%" },
  { top: "18%", left: "54%" },
  { top: "70%", left: "46%" },
  { top: "40%", left: "76%" },
]

export function Technologies() {
  return (
    <section className="bg-background relative font-heading">
      {/* <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
          <div className="relative hidden h-[34rem] lg:block">
            {TECHS.map((tech, i) => (
              <span
                key={tech}
                className="absolute -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground shadow-sm"
                style={POS[i % POS.length]}
              >
                {tech}
              </span>
            ))}
            <div className="absolute left-1/2 top-1/2 flex size-48 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-border bg-secondary text-center">
              <span className="font-heading text-5xl font-bold text-primary">
                50+
              </span>
              <span className="mt-1 text-sm font-medium text-foreground">
                Technologies
                <br />
                &amp; Stacks
              </span>
            </div>
          </div>
  
       
          <div className="lg:hidden">
            <div className="flex flex-col items-center text-center">
              <span className="font-heading text-5xl font-bold text-primary">
                50+
              </span>
              <span className="mt-1 font-heading text-lg font-semibold text-foreground">
                Technologies &amp; Stacks
              </span>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {TECHS.map((tech) => (
                <span
                  key={tech}
                  className="rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div> */}
      <img src={'/icon-svgs/bg-icons.svg'} className="w-full" />
      <div className="absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-center items-center">
        <h1 className="font-medium text-8xl flex items-baseline">
          50
          <span className="text-4xl ml-1">+</span>
        </h1>
        <p className="text-2xl">Technologies</p>
        <p className="text-2xl">a Stacks</p>
      </div>
    </section>
  )
}
