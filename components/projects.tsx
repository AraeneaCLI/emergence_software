"use client";

export function Projects() {
  const projects = [
    {
      title: "RuF Studios X Run Frenzy",
      description:
        "Immersive WebGL-powered website with smooth scroll animations, 3D content, and cinematic transitions.",
      tech: ["Next.js", "Framer Motion", "Spline", "GSAP", "Amazon S3"],
      highlight: "Lead Developer & WebGL Website Developer",
      year: "2025",
    },
    {
      title: "Infivent Listing & Superadmin - Phase 2",
      description:
        "Scalable multi-event ticketing platform with secure authentication, Juspay payment gateway, and advanced admin controls.",
      tech: ["Next.js", "Otpless Auth", "Juspay", "Amazon EC2", "PostgreSQL"],
      highlight: "Lead Full Stack Developer",
      year: "2025",
    },
    {
      title: "Chennai Steel Construction Expo",
      description:
        "Comprehensive expo management platform handling visitor, exhibitor, delegate management with real-time verification.",
      tech: ["Next.js", "Supabase", "Prisma", "Razorpay", "QR Codes"],
      highlight: "Associate Full Stack Developer",
      year: "2025",
    },
    {
      title: "Advantage Vidarbha 2025 Expo",
      description:
        "Streamlined expo management with custom ticketing, registration, exhibitor stall booking, and automated invoicing.",
      tech: ["Next.js", "Supabase", "Razorpay", "Amazon SES", "Prisma"],
      highlight: "Associate Full Stack Developer",
      year: "2025",
    },
    {
      title: "Developer Star",
      description:
        "Modular platform for creative development tools. Led architecture and built Gradient Generator Module with real-time preview.",
      tech: [
        "SvelteKit",
        "Modular Architecture",
        "Performance Optimization",
        "Production Deployment",
      ],
      highlight: "Project Co-Lead",
      year: "2023",
    },
    {
      title: "Girdhari Bagwani Foundation",
      description:
        "NGO website with responsive design, Amazon SES contact form, Cloudflare CDN, and SEO optimization.",
      tech: ["Next.js", "Amazon SES", "Cloudflare", "SSL/TLS", "SEO"],
      highlight: "Lead Developer",
      year: "2024",
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-auto flex items-center justify-center px-6 py-24 bg-black border-t border-gray-900"
    >
      <div className="relative z-10 w-screen p-4 mx-auto w-full">
        <div className="mb-16">
          <span className="text-xs tracking-widest uppercase text-gray-500 mb-4 block">
            Portfolio
          </span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white">
            Featured Projects
          </h2>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl">
            A selection of projects that showcase my expertise in full-stack
            development, architecture, and security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 rounded-lg hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-white/5 cursor-pointer"
            >
              {/* Accent line */}
              <div className="absolute top-0 left-0 w-1 h-12 bg-gradient-to-b from-white to-transparent rounded-r group-hover:h-full transition-all duration-500" />

              <div className="relative">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                      {project.highlight}
                    </p>
                    <h3 className="text-2xl font-bold text-white group-hover:text-gray-100 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-sm text-gray-500 whitespace-nowrap ml-4">
                    {project.year}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs font-medium text-gray-300 bg-gray-800/50 border border-gray-700 rounded-full group-hover:border-gray-600 group-hover:bg-gray-800 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg
                    className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17L17 7M17 7H7m10 0v10"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Want to see more of my work or discuss potential collaborations?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            Let&apos;s Work Together
          </a>
        </div>
      </div>
    </section>
  );
}
