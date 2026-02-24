"use client";

import ColorBends from "./ColorBends";

export function About() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 bg-black border-t border-gray-900">
      {" "}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ColorBends
          colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
          rotation={64}
          speed={0.2}
          scale={0.2}
          frequency={3.9}
          warpStrength={1}
          mouseInfluence={1}
          parallax={0.5}
          noise={0.1}
          transparent={true}
        />
      </div>
      <div className="relative z-10 w-screen p-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div>
              <span className="text-xs tracking-widest uppercase text-gray-500 mb-4 block">
                About
              </span>
              <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-6">
                Blending Code <span className="text-gray-500">&</span> Security
              </h2>
            </div>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm a passionate Full Stack Developer with deep expertise in
                building secure, scalable web applications. My unique blend of
                development skills and cybersecurity forensics knowledge allows
                me to create not just beautiful, but{" "}
                <span className="text-white font-semibold">bulletproof</span>{" "}
                digital solutions.
              </p>

              <p>
                Currently based in{" "}
                <span className="text-white font-medium">
                  Thane, Maharashtra
                </span>
                , I work as a Technical Lead at Properbean, architecting
                e-commerce platforms and crafting innovative digital experiences
                that prioritize both performance and security.
              </p>

              <p>
                With hands-on experience in{" "}
                <span className="text-white font-semibold">
                  Next.js, Svelte, React, Node.js,
                </span>
                and <span className="text-white font-semibold">PostgreSQL</span>
                , I've shipped production applications for ticketing platforms,
                expo management systems, and web3 projects. I'm equally
                comfortable debugging code or analyzing digital forensics.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-800">
              <div>
                <div className="text-3xl font-black text-white mb-2">4+</div>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>
              <div>
                <div className="text-3xl font-black text-white mb-2">20+</div>
                <p className="text-sm text-gray-400">Projects Shipped</p>
              </div>
              <div>
                <div className="text-3xl font-black text-white mb-2">5</div>
                <p className="text-sm text-gray-400">Certifications</p>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="hidden lg:block space-y-6">
            <div className="bg-gradient-to-b from-gray-900 to-black p-8 rounded-lg border border-gray-800">
              <div className="space-y-4 text-sm font-mono text-gray-400">
                <div className="flex items-center">
                  <span className="text-green-500">$</span>
                  <span className="ml-2">whoami</span>
                </div>
                <div className="text-gray-300">
                  Full Stack Developer & Cybersecurity Analyst
                </div>

                <div className="flex items-center mt-4">
                  <span className="text-green-500">$</span>
                  <span className="ml-2">cat skills.txt</span>
                </div>
                <div className="text-gray-300">
                  Next.js • React • Svelte • Node.js
                </div>
                <div className="text-gray-300">
                  PostgreSQL • AWS • Digital Forensics
                </div>

                <div className="flex items-center mt-4">
                  <span className="text-green-500">$</span>
                  <span className="ml-2">echo "building the future"</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
