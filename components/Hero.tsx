"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { heroWordStagger, heroWord, fadeUp } from "@/lib/animations";

const titleLine1 = "I want the machine";
const titleLine2 = "to not need me.";

const stats = [
  { label: "Graduating", value: "May 2026" },
  { label: "GPA", value: "3.78" },
  { label: "Founder", value: "Campus Swap: Closing seed round" },
  { label: "Looking for", value: "Robotics · Autonomy · Hardware + AI" },
];

export default function Hero() {
  const [titleDone, setTitleDone] = useState(false);

  return (
    <section className="flex min-h-[calc(100vh-65px)] flex-col justify-center px-6">
      <div className="mx-auto w-full max-w-[1120px] py-20">
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
          {titleLine1.split(" ").map((word, i) => (
            <motion.span
              key={i}
              variants={heroWord}
              className="mr-[0.3em] inline-block"
            >
              {word}
            </motion.span>
          ))}
          <br />
          {titleLine2.split(" ").map((word, i) => (
            <motion.span
              key={`l2-${i}`}
              variants={heroWord}
              className="mr-[0.3em] inline-block"
            >
              {word}
            </motion.span>
          ))}
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
