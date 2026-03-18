"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { softwareProjects } from "@/data/projects";
import { staggerFadeUp, fadeUp } from "@/lib/animations";

export default function SoftwareProjects() {
  return (
    <section id="software" className="px-6 py-24">
      <div className="mx-auto max-w-[1120px]">
        {/* Section eyebrow */}
        <div className="mb-12 flex items-center justify-between">
          <h2 className="font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-primary">
            Software & AI
          </h2>
        </div>

        {/* Cards */}
        <motion.div
          variants={staggerFadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-2"
        >
          {softwareProjects.map((project) => (
            <motion.div key={project.slug} variants={fadeUp}>
              <div
                className="group relative overflow-hidden rounded-[10px] bg-surface"
                style={{ border: "0.5px solid #e0ddd4" }}
              >
                <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-0" aria-label={project.title} />
                {/* Screenshot */}
                {project.image && (
                  <div
                    className="relative h-[300px] w-full overflow-hidden"
                    style={{
                      borderRadius: "10px 10px 0 0",
                      borderBottom: "0.5px solid #e0ddd4",
                    }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  <p className="mb-1 font-mono text-[11px] text-muted">
                    {project.label}
                  </p>
                  <h3 className="mb-3 text-[22px] font-semibold text-primary">
                    {project.title}
                  </h3>
                  <p className="mb-3 text-[14px] leading-[1.7] text-secondary">
                    {project.description}
                  </p>
                  {project.externalUrl && (
                    <a
                      href={`https://${project.externalUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 mb-5 inline-block text-[14px] font-medium text-accent underline underline-offset-2 transition-opacity hover:opacity-80"
                    >
                      {project.externalUrl} ↗
                    </a>
                  )}
                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-tag-bg px-2.5 py-0.5 font-mono text-[11px] text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="relative z-10 flex justify-end">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-[13px] font-medium text-accent transition-opacity hover:opacity-80"
                    >
                      View full project →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
