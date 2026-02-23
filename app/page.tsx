"use client";

import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { FeaturedWebsites } from "@/components/featured-websites";
import Ribbons from "@/components/Ribbons";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <main className="relative bg-black text-white min-h-screen">
      {/* RIBBON OVERLAY 
        Fixed to the viewport and pointerEvents set to "none" 
        so it doesn't intercept clicks meant for your buttons.
      */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 50,
          pointerEvents: "none",
          opacity: 0.9,
        }}
      >
        <Ribbons
          baseThickness={30}
          colors={["#5227FF"]}
          speedMultiplier={0.5}
          maxAge={500}
          enableFade={false}
          enableShaderEffect={false}
        />
      </div>

      {/* PAGE CONTENT */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <FeaturedWebsites />
        <Projects />
        <Skills />
        <Contact />
        <ChatWidget />
      </div>
    </main>
  );
}
