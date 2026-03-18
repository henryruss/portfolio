"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroWordStagger, heroWord, fadeUp } from "@/lib/animations";

const cyclingWords = ["building", "learning"];

const stats = [
  { label: "Graduating", value: "May 2026" },
  { label: "GPA", value: "3.78" },
  { label: "Founder", value: "Campus Swap: Closing seed round" },
  { label: "Looking for", value: "Robotics · Autonomy · Hardware + AI" },
];

export default function Hero() {
  const [titleDone, setTitleDone] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (!titleDone) return;
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % cyclingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [titleDone]);

  return (
    <section className="flex min-h-[calc(100vh-65px)] flex-col justify-center px-6">
      <div className="mx-auto w-full max-w-[1120px] pt-20 pb-10">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-6 font-mono text-[12px] font-medium tracking-wide text-accent"
        >
          Physics · CS · Autonomous Systems
        </motion.p>

        {/* Title */}
        <motion.h1
          variants={heroWordStagger}
          initial="initial"
          animate="animate"
          onAnimationComplete={() => setTitleDone(true)}
          className="mb-8 text-[40px] font-semibold leading-[1.15] tracking-[-0.02em] text-primary sm:text-[56px]"
        >
          <motion.span variants={heroWord} className="mr-[0.3em] inline-block">
            Always
          </motion.span>
          <motion.span
            variants={heroWord}
            className="relative mr-[0.3em] inline-block overflow-hidden"
            style={{ verticalAlign: "bottom" }}
          >
            {/* Invisible spacer locks width to longest word */}
            <span className="invisible">building</span>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={cyclingWords[wordIndex]}
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "100%", opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="absolute inset-0 text-accent"
              >
                {cyclingWords[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.span>
          <motion.span variants={heroWord} className="inline-block">
            something new.
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="initial"
          animate={titleDone ? "animate" : "initial"}
          className="mb-10 max-w-[560px] text-[16px] leading-[1.7] text-secondary"
        >
          Physics + CS at Davidson College. Three years running a makerspace. Building toward systems that act on their own, one project at
          a time.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate={titleDone ? "animate" : "initial"}
          className="mb-16 flex gap-4"
        >
          <a
            href="#hardware"
            className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-[13px] font-medium text-background transition-opacity hover:opacity-90"
          >
            View Projects
          </a>
          <a
            href="#about"
            className="inline-flex items-center rounded-md border border-border px-5 py-2.5 text-[13px] font-medium text-primary transition-colors hover:bg-surface"
          >
            About Me
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md border border-border px-5 py-2.5 text-[13px] font-medium text-accent transition-colors hover:bg-surface"
          >
            Resume ↗
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate={titleDone ? "animate" : "initial"}
        >
          <div className="mb-6 h-px bg-border" />
          <div className="grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="mb-1 font-mono text-[9px] font-medium uppercase tracking-[0.08em] text-muted">
                  {stat.label}
                </p>
                <p className="text-[13px] font-medium" style={{ color: "#555550" }}>
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
