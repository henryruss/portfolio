import Image from "next/image";
import Link from "next/link";

export default function CNCPencilMachine() {
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

        {/* Header */}
        <p className="mb-3 font-mono text-[12px] font-medium text-accent">
          Self-built · Motion Control
        </p>
        <h1 className="mb-4 text-[36px] font-semibold leading-tight text-primary sm:text-[44px]">
          CNC Pencil Writing Machine
        </h1>
        <div className="mb-10 flex flex-wrap gap-2">
          {[
            "Arduino",
            "Stepper Motors",
            "Motion Control",
            "Fabrication",
            "Custom Firmware",
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-tag-bg px-2.5 py-0.5 font-mono text-[11px] text-accent"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Hero image */}
        <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-[10px]">
          <Image
            src="/images/cnc/cnc-drawing.jpg"
            alt="Overhead shot of finished CNC machine on table with circles and lines it produced visible underneath, wiring bundle on left side"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Video */}
        <div className="mb-16 overflow-hidden rounded-[10px]">
          <video autoPlay muted loop playsInline className="w-full">
            <source src="/videos/cnc-machine.mp4" type="video/mp4" />
          </video>
        </div>

        {/* What it is */}
        <div className="mb-16">
          <h2 className="mb-4 text-[20px] font-semibold text-primary">
            What it is
          </h2>
          <div className="space-y-4 text-[15px] leading-[1.75] text-secondary">
            <p>
              A two-axis CNC machine built mostly from scratch: wood frame,
              purchased linear rails and stepper motors, custom motion control
              firmware. It moves a pen across paper under software control.
            </p>
            <p>
              The mechanical side came together faster than expected. The harder
              problem was the software. I wrote the motion control code myself,
              handling stepper sequencing, coordinating both axes smoothly
              without missed steps or stuttering, and managing pen lift between
              moves.
            </p>
            <p>
              The next step was upgrading it to parse G-code, which would have
              turned it from a proof of concept into a machine that could trace
              any vector image. That&apos;s still on the list.
            </p>
          </div>
        </div>

        {/* What it showed me */}
        <div className="mb-16">
          <h2 className="mb-4 text-[20px] font-semibold text-primary">
            What it showed me
          </h2>
          <div className="text-[15px] leading-[1.75] text-secondary">
            <p>
              Coordinating two axes in real time is a control problem as much
              as a mechanical one. Getting smooth, predictable motion out of
              cheap stepper motors is mostly a software tuning exercise. That
              instinct toward the control layer is what drew me toward autonomy
              and robotics: the interesting problems are rarely the structural
              ones.
            </p>
          </div>
        </div>

        {/* Back to all projects */}
        <div className="border-t border-border pt-8">
          <Link
            href="/#hardware"
            className="text-[13px] font-medium text-accent transition-opacity hover:opacity-80"
          >
            Back to all projects →
          </Link>
        </div>
      </div>
    </main>
  );
}
