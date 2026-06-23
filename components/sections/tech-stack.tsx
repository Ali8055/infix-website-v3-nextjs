const TECH_ROWS = [
  {
    justify: "justify-center",
    items: [
      { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", isActive: true },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "Jupyter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
    ],
  },
  {
    justify: "justify-center",
    items: [
      { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
      { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
      // Fallback for Zeplin as it's less common in devicon packages
      { name: "Zeplin", logo: "https://www.vectorlogo.zone/logos/zeplin/zeplin-icon.svg" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Android", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
    ],
  },
];

export function TechStack() {
  return (
    <section 
      className="py-20 lg:py-24 px-4 select-none"
      style={{
        background: "linear-gradient(180deg, #EDF1F4  0%, #EDF1F4 26.15%, #D8D6FD 100%)"
      }}
    >
      {/* #D8D6FD */}
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#111827] tracking-tight mb-12">
          50+ Technologies and Stacks
        </h2>

        {/* Rows Container */}
        <div className="flex flex-col gap-5">
          {TECH_ROWS.map((row, ri) => (
            <div 
              key={ri} 
              className={`flex flex-wrap items-center gap-4 ${row.justify}`}
            >
              {row.items.map((tech) => (
                <div
                  key={tech.name}
                  className={`
                    flex items-center justify-center gap-3 
                    w-[170px] h-[72px] rounded-xl bg-white text-base font-medium text-[#374151]
                    transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md
                    ${tech.isActive 
                      ? "border-[2.5px] border-blue-500 ring-1 ring-blue-500/20" 
                      : "border border-gray-100"
                    }
                  `}
                >
                  <img 
                    src={tech.logo} 
                    alt={`${tech.name} logo`} 
                    className="w-6 h-6 object-contain"
                    // onError={(e) => {
                    //   // Fallback if an external asset asset fails
                    //   e.currentTarget.style.display = 'none';
                    // }}
                  />
                  <span className="font-semibold tracking-wide">{tech.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}