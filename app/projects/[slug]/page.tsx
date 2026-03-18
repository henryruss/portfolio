import Link from "next/link";
import { projects, getProjectBySlug } from "@/data/projects";
import { notFound } from "next/navigation";
import TruckWindowRetrofit from "@/components/projects/TruckWindowRetrofit";
import SolarBoat from "@/components/projects/SolarBoat";
import BajaSAE from "@/components/projects/BajaSAE";
import ReactionTimePCB from "@/components/projects/ReactionTimePCB";
import CNCPencilMachine from "@/components/projects/CNCPencilMachine";
import CampusSwap from "@/components/projects/CampusSwap";
import AIProjects from "@/components/projects/AIProjects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return notFound();

  if (params.slug === "truck-window-retrofit") {
    return <TruckWindowRetrofit />;
  }

  if (params.slug === "solar-boat") {
    return <SolarBoat />;
  }

  if (params.slug === "baja-sae") {
    return <BajaSAE />;
  }

  if (params.slug === "reaction-time-pcb") {
    return <ReactionTimePCB />;
  }

  if (params.slug === "cnc-pencil-machine") {
    return <CNCPencilMachine />;
  }

  if (params.slug === "campus-swap") {
    return <CampusSwap />;
  }

  if (params.slug === "ai-projects") {
    return <AIProjects />;
  }

  // Generic template for all other projects
  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="px-6 py-16">
      <div className="mx-auto max-w-[800px]">
        {/* Back link */}
        <Link
          href="/#hardware"
          className="mb-12 inline-block text-[13px] text-secondary transition-colors hover:text-primary"
        >
          ← All projects
        </Link>

        {/* Title */}
        <h1 className="mb-4 text-[36px] font-semibold leading-tight text-primary sm:text-[44px]">
          {project.title}
        </h1>

        {/* Tags */}
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

        {/* Meta row */}
        <div className="mb-10 flex flex-wrap gap-x-6 gap-y-1">
          <p className="font-mono text-[12px] text-muted">{project.label}</p>
          <p className="font-mono text-[12px] text-muted capitalize">
            {project.category}
          </p>
        </div>

        {/* Media placeholder */}
        <div className="mb-12 flex aspect-video items-center justify-center rounded-[10px] bg-tag-bg font-mono text-[14px] text-muted">
          {project.mediaPlaceholder}
        </div>

        {/* Body */}
        <div className="mb-16 text-[15px] leading-[1.75] text-secondary">
          <p>[ Project write-up coming soon ]</p>
        </div>

        {/* Next project */}
        <div className="border-t border-border pt-8">
          <Link
            href={`/projects/${nextProject.slug}`}
            className="text-[13px] font-medium text-accent transition-opacity hover:opacity-80"
          >
            Next project: {nextProject.title} →
          </Link>
        </div>
      </div>
    </main>
  );
}
