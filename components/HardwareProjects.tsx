"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { hardwareProjects } from "@/data/projects";
import { fadeUp, slideFromLeft, slideFromRight, staggerFadeUp } from "@/lib/animations";

export default function HardwareProjects() {
  const featured = hardwareProjects[0]; // truck window
  const midRow = hardwareProjects.slice(1, 3); // solar boat, baja
  const bottomRow = hardwareProjects.slice(3, 5); // pcb, cnc

  return (
    <section id="hardware" className="px-6 py-24">
      <div className="mx-auto max-w-[1120px]">
        {/* Section eyebrow */}
        <div className="mb-12 flex items-center justify-between">
          <h2 className="font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-primary">
            Hardware Projects
          </h2>
          <span className="font-mono text-[12px] text-muted">05</span>
        </div>

        {/* Hero card — full width horizontal */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
        >
          <Link href={`/projects/${featured.slug}`} className="group block">
            <div className="mb-12 flex flex-col overflow-hidden rounded-[10px] bg-surface shadow-sm md:flex-row">
              {/* Photo */}
              <div className="relative aspect-[4/5] overflow-hidden bg-tag-bg md:w-[60%]">
                <Image
                  src="/images/truck-images/truck-door-open.jpg"
                  alt="Truck door panel removed showing mounted motor, window arm, and breadboard"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Text */}
              <div className="flex flex-col justify-center p-8 md:w-[40%] md:p-10">
                <p className="mb-2 font-mono text-[11px] text-muted">
                  {featured.label}
                </p>
                <h3 className="mb-3 text-[22px] font-semibold text-primary">
                  {featured.title}
                </h3>
                <p className="mb-5 text-[14px] leading-[1.7] text-secondary">
                  {featured.description}
                </p>
                <div className="mb-5 flex flex-wrap gap-2">
                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-tag-bg px-2.5 py-0.5 font-mono text-[11px] text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-[13px] font-medium text-accent transition-opacity group-hover:opacity-80">
                  {featured.linkText}
                </span>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Mid row — 2 columns, natural height */}
        <div className="mb-8 grid items-start gap-6 md:grid-cols-2">
          {midRow.map((project, i) => (
            <motion.div
              key={project.slug}
              variants={i === 0 ? slideFromLeft : slideFromRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-80px" }}
            >
              <Link href={`/projects/${project.slug}`} className="group block">
                <div
                  className="overflow-hidden rounded-[10px] bg-surface"
                  style={{ border: "0.5px solid #e0ddd4" }}
                >
                  {project.image ? (
                    <div className="relative aspect-[3/2] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-[3/2] items-center justify-center bg-tag-bg font-mono text-[13px] text-muted">
                      {project.mediaPlaceholder}
                    </div>
                  )}
                  <div className="p-6">
                    <p className="mb-1 font-mono text-[11px] text-muted">
                      {project.label}
                    </p>
                    <h3 className="mb-2 text-[18px] font-semibold text-primary">
                      {project.title}
                    </h3>
                    <p className="mb-4 text-[14px] leading-[1.7] text-secondary">
                      {project.description}
                    </p>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-tag-bg px-2.5 py-0.5 font-mono text-[11px] text-accent"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-[13px] font-medium text-accent transition-opacity group-hover:opacity-80">
                      {project.linkText}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom row — 2 columns, smaller cards */}
        <motion.div
          variants={staggerFadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-2"
        >
          {bottomRow.map((project) => (
            <motion.div key={project.slug} variants={fadeUp}>
              <Link href={`/projects/${project.slug}`} className="group block">
                <div
                  className="overflow-hidden rounded-[10px] bg-surface"
                  style={{ border: "0.5px solid #e0ddd4" }}
                >
                  {project.image ? (
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-[16/9] items-center justify-center bg-tag-bg font-mono text-[13px] text-muted">
                      {project.mediaPlaceholder}
                    </div>
                  )}
                  <div className="p-5">
                    <p className="mb-1 font-mono text-[11px] text-muted">
                      {project.label}
                    </p>
                    <h3 className="mb-2 text-[16px] font-semibold text-primary">
                      {project.title}
                    </h3>
                    <p className="mb-3 text-[13px] leading-[1.6] text-secondary">
                      {project.description}
                    </p>
                    <div className="mb-3 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-tag-bg px-2 py-0.5 font-mono text-[10px] text-accent"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-[13px] font-medium text-accent transition-opacity group-hover:opacity-80">
                      {project.linkText}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
