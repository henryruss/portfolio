import Image from "next/image";
import Link from "next/link";

export default function BajaSAE() {
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
          Senior Capstone · Davidson College · Spring 2026
        </p>
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <h1 className="text-[36px] font-semibold leading-tight text-primary sm:text-[44px]">
            Baja SAE — Suspension Lead
          </h1>
          <span className="rounded-full bg-amber-100 px-2.5 py-1 font-mono text-[11px] font-medium text-amber-600">
            In Progress
          </span>
        </div>
        <div className="mb-10 flex flex-wrap gap-2">
          {[
            "Fusion 360",
            "SolidWorks",
            "Welding",
            "Suspension Design",
            "Double A-Arm",
            "Fox Shocks",
            "Team Lead",
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-tag-bg px-2.5 py-0.5 font-mono text-[11px] text-accent"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Hero — CAD screenshot */}
        <div className="mb-3 relative aspect-video w-full overflow-hidden rounded-[10px]">
          <Image
            src="/images/baja/baja-cad.png"
            alt="Full vehicle CAD assembly in Fusion 360, isometric view showing double A-arm suspension at all four corners"
            fill
            className="object-cover"
            priority
          />
        </div>
        <p className="mb-16 font-mono text-[12px] text-muted">
          Full vehicle assembly — Fusion 360
        </p>

        {/* What it is */}
        <div className="mb-16">
          <h2 className="mb-4 text-[20px] font-semibold text-primary">
            What it is
          </h2>
          <div className="space-y-4 text-[15px] leading-[1.75] text-secondary">
            <p>
              Davidson College&apos;s Baja SAE team is in its second year.
              We&apos;re building a single-seat off-road vehicle from scratch to
              compete against 100+ university teams in the SAE Baja series, a
              competition that includes a four-hour endurance race on rough
              terrain, hill climbs, and maneuverability events.
            </p>
            <p>
              I&apos;m the primary engineer on a three-person leadership team.
              My job is to design virtually every component and get it built, either
              fabricating it myself or delegating to one of our 10+ members.
              The other two leads handle finances and club operations. Every
              engineering decision goes through me. Nothing gets finalized
              without sign-off from all three of us.
            </p>
            <p>We compete Spring 2026.</p>
          </div>
        </div>

        {/* What we started with */}
        <div className="mb-16">
          <h2 className="mb-4 text-[20px] font-semibold text-primary">
            What we started with
          </h2>
          <div className="space-y-6 text-[15px] leading-[1.75] text-secondary">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[10px]">
              <Image
                src="/images/baja/baja-inherited.jpg"
                alt="Bare welded chassis frame with two people examining it in the Lake Campus boathouse"
                fill
                className="object-cover"
              />
            </div>
            <p>
              Davidson&apos;s program is only in its second year. We inherited a
              partially welded chassis from last year&apos;s team and have been
              building everything else from scratch. No institutional knowledge
              to fall back on, no senior members who&apos;ve done it before, no
              big budget.
            </p>
            <p>
              Low budget means we fabricate most of what we need ourselves.
              Every bracket, every mount, every suspension component has been
              designed in CAD, reviewed by the team, and either welded in the
              shop or sent to a local manufacturer for parts we can&apos;t make
              ourselves. We write the BOMs, get the quotes, and negotiate
              sponsorships to offset costs.
            </p>
          </div>
        </div>

        {/* Suspension */}
        <div className="mb-16">
          <h2 className="mb-4 text-[20px] font-semibold text-primary">
            Suspension — my primary responsibility
          </h2>
          <div className="space-y-6 text-[15px] leading-[1.75] text-secondary">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[10px]">
              <Image
                src="/images/baja/baja-front.jpg"
                alt="Front-on shot of vehicle with Fox shocks visible on both sides and double A-arm geometry clear"
                fill
                className="object-cover"
              />
            </div>
            <p>The suspension system is what I own. That means:</p>
            <p>
              Geometry first. Choosing the suspension architecture, defining
              kinematic parameters (track width, wheelbase, camber curves, roll
              center height), and validating the design under SAE rules.
            </p>
            <p>
              Then CAD. Modeling every component in Fusion 360, producing
              drawings that can be fabricated from, iterating based on team
              review and faculty feedback.
            </p>
            <p>
              Then fabrication. Welding components in-house or working with
              local manufacturers for parts beyond our shop capability.
            </p>
            <p>
              The suspension has to survive a four-hour endurance race on rough
              terrain. Getting the geometry right is critical to ensure our car 
              passes the finish line.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[10px]">
                <Image
                  src="/images/baja/baja-overhead.jpg"
                  alt="Overhead angle of vehicle with Miller welder in foreground and engine and drivetrain visible"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[10px]">
                <Image
                  src="/images/baja/baja-team.jpg"
                  alt="Team member working on suspension area from above"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Where we are */}
        <div className="mb-16">
          <h2 className="mb-4 text-[20px] font-semibold text-primary">
            Where we are
          </h2>
          <div className="space-y-6 text-[15px] leading-[1.75] text-secondary">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[10px]">
              <Image
                src="/images/baja/baja-side.jpg"
                alt="Side profile of vehicle with engine mounted, wheels on, seat visible, and welder next to it"
                fill
                className="object-cover"
              />
            </div>
            <p>
              Here is the most recent picture of our car. The drivetrain is in,
              the suspenson is fully mounted, the seat is in, and we can roll it around the shop. 
              We even have a seat! Rolling it around the shop was a huge milestone for us.
            </p>
            <p>
              There is still a lot to do: install the footbox and breaks, electronics, body panels... 
              But we have a functioning chassis and suspension, which is the critical path for the rest of the project. We can start testing subsystems and iterating on our design based on feedback from test drives.
            </p>
          </div>
        </div>

        {/* Status note */}
        <div
          className="mb-16 rounded-[10px] px-5 py-4"
          style={{ border: "0.5px solid #e0ddd4" }}
        >
          <p className="font-mono text-[12px] font-medium text-amber-600">
            In Progress
          </p>
          <p className="mt-1 text-[14px] leading-[1.7] text-secondary">
            This project is ongoing. This page will be updated as we approach
            competition.
          </p>
        </div>

        {/* Next project */}
        <div className="border-t border-border pt-8">
          <Link
            href="/projects/reaction-time-pcb"
            className="text-[13px] font-medium text-accent transition-opacity hover:opacity-80"
          >
            Next project: Custom PCB →
          </Link>
        </div>
      </div>
    </main>
  );
}
