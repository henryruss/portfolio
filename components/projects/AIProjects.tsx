import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Gmail Declutter Agent",
    description:
      "Runs daily in the cloud via AWS Lambda, classifies emails, and unsubscribes from spam with zero ongoing effort after deployment. Uses Claude Haiku for classification and the Gmail + People API for OAuth-authenticated actions.",
    tags: ["Claude Haiku", "AWS Lambda", "Gmail API", "Python 3.14"],
  },
  {
    title: "bracketAnalyzer",
    description:
      "Ingests historical tournament data, trains predictive models, and forecasts outcomes for the current year. Multiple specialized agents run in parallel — one per job — using Node.js and Python via Docker.",
    tags: ["Multi-Agent", "Node.js", "Python", "Docker"],
  },
  {
    title: "Autogram",
    description:
      "Automated Chicago Bears news pipeline. Monitors sources, generates content, and schedules posts with no manual steps. Orchestrated with Claude Opus as the coordinator and Claude Sonnet specialists. Built with FastAPI, HTMX, and SQLite.",
    tags: ["Claude Agent SDK", "FastAPI", "SQLite", "Python"],
  },
  {
    title: "Claude Project Logs",
    description:
      "A Claude Code slash command that auto-summarizes every coding session and commits a structured log to GitHub — what was built, what was decided, what's next. Feeds directly into VibePM via webhook.",
    tags: ["Claude Code", "Bash", "GitHub API"],
  },
  {
    title: "NestMatch",
    description:
      "Helps two people find a compatible home design style using a swipe-and-rank algorithm. Each person swipes through interior photos independently, then ranks shared picks head-to-head — Claude synthesizes the overlap into a shared aesthetic profile.",
    tags: ["React", "Vite", "Supabase", "Framer Motion"],
  },
];

export default function AIProjects() {
  return (
    <main className="px-6 py-16">
      <div className="mx-auto max-w-[800px]">
        {/* Back link */}
        <Link
          href="/#software"
          className="mb-12 inline-block text-[13px] text-secondary transition-colors hover:text-primary"
        >
          ← All projects
        </Link>

        {/* Header */}
        <p className="mb-3 font-mono text-[12px] font-medium text-accent">
          AI Agents · 2026
        </p>
        <h1 className="mb-4 text-[36px] font-semibold leading-tight text-primary sm:text-[44px]">
          AI Project Portfolio
        </h1>
        <div className="mb-8 flex flex-wrap gap-2">
          {[
            "Claude API",
            "AWS Lambda",
            "Next.js",
            "Supabase",
            "Multi-Agent",
            "Python",
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-tag-bg px-2.5 py-0.5 font-mono text-[11px] text-accent"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mb-10">
          <a
            href="https://vibepm-six.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-tag-bg px-6 py-3 text-[16px] font-semibold text-accent transition-opacity hover:opacity-80"
            style={{ border: "1.5px solid #3a7d44" }}
          >
            View full portfolio at vibepm-six.vercel.app ↗
          </a>
        </div>

        {/* Hero image */}
        <div
          className="relative mb-16 aspect-[16/9] w-full overflow-hidden rounded-[10px]"
          style={{ border: "0.5px solid #e0ddd4" }}
        >
          <Image
            src="/images/vibepm/vibepm-screenshot.png"
            alt="VibePM dashboard screenshot"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        {/* What it is */}
        <div className="mb-16">
          <h2 className="mb-4 text-[20px] font-semibold text-primary">
            What it is
          </h2>
          <div className="text-[15px] leading-[1.75] text-secondary">
            <p>
              A collection of AI and agent projects built while finishing senior
              year and leading Baja SAE. The goal was to get fluent with AI
              tooling fast and ship things that actually run in production.
            </p>
          </div>
        </div>

        {/* Projects list */}
        <div className="mb-12">
          <div style={{ borderTop: "0.5px solid #e0ddd4" }}>
            {projects.map((project) => (
              <div
                key={project.title}
                className="flex flex-col gap-3 py-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8"
                style={{ borderBottom: "0.5px solid #e0ddd4" }}
              >
                <div className="flex-1">
                  <p className="mb-1 text-[14px] font-semibold text-primary">
                    {project.title}
                  </p>
                  <p className="text-[13px] leading-[1.6] text-secondary">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:justify-end">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-tag-bg px-2 py-0.5 font-mono text-[10px] text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing note */}
        <p className="mb-16 text-[13px] italic leading-[1.6] text-muted">
          These are 1–5 week projects built alongside coursework and Baja SAE.
          Full details and GitHub links at{" "}
          <a
            href="https://vibepm-six.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent not-italic underline underline-offset-2 transition-opacity hover:opacity-80"
          >
            vibepm-six.vercel.app ↗
          </a>
        </p>

        {/* Footer nav */}
        <div className="border-t border-border pt-8">
          <Link
            href="/#software"
            className="text-[13px] font-medium text-accent transition-opacity hover:opacity-80"
          >
            ← Back to all projects
          </Link>
        </div>
      </div>
    </main>
  );
}
