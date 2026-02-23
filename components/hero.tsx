"use client";

import { useEffect, useState } from "react";
import TextType from "./TextType";
import { GridScan } from "./GridScan";

export function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 bg-black overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-3xl bg-gradient-to-b from-white/5 to-transparent opacity-30 blur-3xl pointer-events-none z-0" />

      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05)_76%,transparent_77%,transparent)] bg-[size:50px_50px]" />
      </div>

      {/* Light Pillar Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#392e4e"
          gridScale={0.1}
          scanColor="#FF9FFC"
          scanOpacity={0.4}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
        />
      </div>

      {/* FOREGROUND CONTENT (z-10 ensures it stays above the background effects) */}
      <div className="relative z-10 text-center max-w-4xl mx-auto pointer-events-auto">
        <div className="space-y-6 mb-12">
          <div className="inline-block">
            <span className="text-sm tracking-widest uppercase text-white-400 font-light">
              Full Stack Developer
            </span>
          </div>

          <h1 className="text-7xl md:text-8xl font-black tracking-tighter leading-[1.1]">
            <TextType
              text={["Yash R. Mankar", "Software Analyst", "Forensic Analyst"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="|"
              deletingSpeed={50}
              cursorBlinkDuration={0.5}
            />
          </h1>

          <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
            Crafting{" "}
            <span className="text-white font-semibold italic">
              secure, scalable
            </span>{" "}
            web experiences.
            <br className="hidden md:block" />
            Full Stack Developer &{" "}
            <span className="text-white font-semibold">
              Cybersecurity Forensic Analyst
            </span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className={`flex justify-center transition-opacity duration-300 ${
            scrolled ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
