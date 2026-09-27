"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-40 pb-28 md:pt-48 md:pb-36"
    >
      <div className="absolute inset-0 bg-radial-glow" aria-hidden="true" />
      <div
        className="absolute -top-24 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-violet-500/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-ink-300">
            <Sparkles size={13} className="text-electric-400" />
            Automotive Student &amp; AI-Assisted Developer
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] text-ink-100">
            Hi, I&apos;m{" "}
            <span className="text-gradient">Bayu Rahmat Kurniawan.</span>
          </h1>

          <p className="mt-5 font-display text-xl sm:text-2xl font-medium text-electric-400">
            Building Digital Experiences with Code &amp; AI.
          </p>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-300">
            An automotive engineering student at SMK ADIBANGSA with a passion
            for programming, artificial intelligence, and developing digital
            solutions through modern AI-assisted workflows.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#projects"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-electric-500 px-6 py-3 text-sm font-medium text-white hover:bg-electric-400 transition-colors focus-ring shadow-glow"
            >
              Explore My Work
              <ArrowRight size={16} />
            </a>
            <a
              href="#about"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-ink-100 hover:bg-white/[0.06] transition-colors focus-ring"
            >
              About Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
