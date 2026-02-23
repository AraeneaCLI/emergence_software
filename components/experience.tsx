"use client";

export function Experience() {
  const experiences = [
    {
      role: "Technical Lead",
      company: "Properbean Pvt. Ltd",
      period: "July 2025 - Present",
      description:
        "Leading full-stack development for e-commerce architecture. Built and scaled Beanzy Shopify storefront with interactive 3D product modules.",
      highlights: [
        "E-Commerce Architecture",
        "Payment Integration",
        "Security Testing",
        "Logistics & Marketing",
      ],
    },
    {
      role: "Associate Full Stack Developer",
      company: "Procohat Technologies Pvt. Ltd",
      period: "July 2024 - July 2025",
      description:
        "Lead developer on multiple projects including Superadmin panel design, expo management platform, and security assessments.",
      highlights: [
        "Full-Stack Development",
        "Security Testing",
        "Performance Optimization",
        "Team Leadership",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "IEEE Bombay Section X Alhansat",
      period: "August 2023 - September 2023",
      description:
        "Project Co-Lead for Developer Star platform. Architected and built the Gradient Generator Module using SvelteKit.",
      highlights: [
        "SvelteKit",
        "Modular Architecture",
        "Production Deployment",
        "Technical Documentation",
      ],
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 bg-black border-t border-gray-900">
      <div className="relative z-10 w-screen p-4 mx-auto w-full">
        <div className="mb-16">
          <span className="text-xs tracking-widest uppercase text-gray-500 mb-4 block">
            Professional Journey
          </span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white">
            Experience
          </h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline connector */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-0 top-20 w-0.5 h-24 bg-gradient-to-b from-gray-700 to-transparent hidden md:block" />
              )}

              <div className="group cursor-pointer">
                {/* Timeline dot */}
                <div className="absolute -left-4 top-2 w-3 h-3 bg-white rounded-full hidden md:block group-hover:scale-150 transition-transform" />

                <div className="md:ml-12 bg-gradient-to-r from-gray-900 to-black border border-gray-800 p-8 rounded-lg hover:border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-white/5">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-gray-400">{exp.company}</p>
                    </div>
                    <p className="text-sm text-gray-500 mt-2 md:mt-0">
                      {exp.period}
                    </p>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium text-gray-300 bg-gray-800 rounded-full border border-gray-700 hover:border-gray-500 transition-colors"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education section */}
        <div className="mt-16 pt-16 border-t border-gray-800">
          <h3 className="text-2xl font-bold text-white mb-8">
            Education & Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-lg">
              <p className="font-semibold text-white mb-2">
                B.Tech in CSE (Cyber Security)
              </p>
              <p className="text-gray-400 text-sm">
                G. H. Raisoni College of Engineering and Management
              </p>
              <p className="text-gray-500 text-xs mt-2">2021 - 2025</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-lg">
              <p className="font-semibold text-white mb-2">
                Multiple Certifications
              </p>
              <p className="text-gray-400 text-sm">
                Industry 4.0 • Cloud Computing • Reverse Engineering • Digital
                Forensics
              </p>
              <p className="text-gray-500 text-xs mt-2">2021 - 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
