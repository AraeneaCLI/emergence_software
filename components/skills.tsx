"use client";
import Orb from "./Orb";

export function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        "Next.js",
        "React",
        "Svelte/SvelteKit",
        "React Native Expo",
        "GSAP",
        "Framer Motion",
        "WebGL",
        "Tailwind CSS",
      ],
    },
    {
      category: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Supabase",
        "Prisma ORM",
        "RESTful APIs",
        "AWS EC2",
        "Amazon SES",
      ],
    },
    {
      category: "Security & Forensics",
      skills: [
        "Digital Forensics",
        "Reverse Engineering",
        "OllyDBG",
        "Burpsuite",
        "CryptoJS",
        "RLS Policies",
        "Vulnerability Testing",
      ],
    },
    {
      category: "Tools & Workflow",
      skills: [
        "Git/GitHub",
        "Jira",
        "Linear",
        "Postman",
        "Vercel",
        "CloudFlare",
        "Amazon S3",
        "Docker",
      ],
    },
    {
      category: "Integrations",
      skills: [
        "Razorpay",
        "Juspay",
        "Shopify API",
        "Otpless",
        "Amazon EC2",
        "Google Analytics",
        "Stripe",
        "Spline",
      ],
    },
    {
      category: "Specializations",
      skills: [
        "Full-Stack Development",
        "E-Commerce Architecture",
        "Event Management Platforms",
        "Performance Optimization",
        "Security Architecture",
      ],
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 bg-black border-t border-gray-900">
      {" "}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Orb
          hoverIntensity={2}
          rotateOnHover
          hue={5}
          forceHoverState={false}
          backgroundColor="#000000"
        />
      </div>
      <div className="relative z-10 w-screen p-4 mx-auto w-full">
        <div className="mb-16">
          <span className="text-xs tracking-widest uppercase text-gray-500 mb-4 block">
            Expertise
          </span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white">
            Technical Skills
          </h2>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl">
            A comprehensive toolkit of technologies and methodologies I've
            mastered to deliver exceptional solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 rounded-lg hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-white/5"
            >
              {/* Category header */}
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3 group-hover:text-gray-100 transition-colors">
                <span className="w-1 h-6 bg-gradient-to-b from-white to-gray-500 rounded-full" />
                {category.category}
              </h3>

              {/* Skills grid */}
              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group/skill"
                  >
                    <svg
                      className="w-4 h-4 text-gray-500 group-hover/skill:text-white transition-colors"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom accent section */}
        <div className="mt-20 pt-16 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-black text-white mb-3">10+</div>
              <p className="text-gray-400 text-sm">Technology Stacks</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-white mb-3">30+</div>
              <p className="text-gray-400 text-sm">APIs Integrated</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-white mb-3">100%</div>
              <p className="text-gray-400 text-sm">Security Focus</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
