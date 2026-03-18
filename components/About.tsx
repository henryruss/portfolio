"use client";

import { motion } from "framer-motion";
import { fadeUp, skillStagger } from "@/lib/animations";

const skillGroups = [
  {
    label: "Programming",
    skills: ["Python", "C/C++", "Java", "JavaScript", "Mathematica"],
  },
  {
    label: "Electronics",
    skills: ["Arduino", "KiCad", "PCB Design", "COMSOL", "Multisim"],
  },
  {
    label: "Mechanical",
    skills: [
      "Fusion 360",
      "SolidWorks",
      "Welding",
      "3D Printing",
      "Laser Cutting",
      "CNC",
    ],
  },
  {
    label: "Lab",
    skills: ["Oscilloscopes", "Function Generators", "Mass Spectrometer"],
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-[1120px]">
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-20">
          {/* Text — left */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:w-[55%]"
          >
            <h2 className="mb-8 font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-primary">
              About
            </h2>
            <div className="space-y-5 text-[15px] leading-[1.75] text-secondary">
              <p>
  Hi! I&apos;m Henry Russell, a Physics major at Davidson College with a 
  concentration in CS and Math. I&apos;m drawn to the intersection of hardware 
  and software, and I believe the next big thing in technology is 
  AI integrated with physical systems. Not just AI in a browser tab, but AI that 
  moves things, controls things, and keeps running when you walk away.
</p>
<p>
  I get a specific kind of satisfaction from building systems that act on 
  their own. Whether that&apos;s an agent running in the cloud or an electronics 
  project that does something real at the press of a button, the moment it 
  works without me is the moment I feel like it&apos;s done.
</p>
<p>
  I&apos;ve spent three years running Davidson&apos;s student makerspace, led 
  multiple capstone engineering projects, and I&apos;m always halfway through 
  something new. I learn best by building things that are just a little 
  harder than what I&apos;ve built before.
</p>
            </div>

            {/* Recruiting callout */}
<div className="mt-8 pt-8 border-t border-[#e0ddd4]">
  <p className="text-sm font-mono text-[#3a7d44] uppercase tracking-widest mb-3">
    Currently recruiting
  </p>
  <p className="text-[#555550] text-base mb-4">
    Actively looking for full-time roles in robotics, autonomous systems, 
    and hardware/AI integration. Available May 2026.
  </p>
  <div className="flex flex-wrap gap-4 text-sm">
    <a 
      href="mailto:herussell@davidson.edu"
      className="text-[#1a1a16] font-medium hover:text-[#3a7d44] transition-colors"
    >
      herussell@davidson.edu
    </a>
    <a 
      href="https://linkedin.com/in/henry-russell26"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#1a1a16] font-medium hover:text-[#3a7d44] transition-colors"
    >
      LinkedIn ↗
    </a>
    <a 
      href="https://github.com/henryruss"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#1a1a16] font-medium hover:text-[#3a7d44] transition-colors"
    >
      GitHub ↗
    </a>
  </div>
</div>
          </motion.div>

          {/* Skills — right */}
          <motion.div
            variants={skillStagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:w-[45%]"
          >
            <h2 className="mb-8 font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-primary lg:invisible">
              Skills
            </h2>
            <div className="grid grid-cols-2 gap-8">
              {skillGroups.map((group) => (
                <motion.div key={group.label} variants={fadeUp}>
                  <h3 className="mb-2 font-mono text-[12px] font-medium text-accent">
                    {group.label}
                  </h3>
                  <ul className="space-y-1">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="text-[13px] text-secondary"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
