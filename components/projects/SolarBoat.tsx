import Image from "next/image";
import Link from "next/link";

export default function SolarBoat() {
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
          $26k Yamaha Grant · Junior Capstone · Spring 2025
        </p>
        <h1 className="mb-4 text-[36px] font-semibold leading-tight text-primary sm:text-[44px]">
          Solar Boat
        </h1>
        <div className="mb-10 flex flex-wrap gap-2">
          {[
            "Electrical Systems",
            "Solar",
            "Fusion 360",
            "Carpentry",
            "Torqeedo",
            "Project Lead",
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
        <div className="relative mb-16 aspect-[16/9] w-full overflow-hidden rounded-[10px]">
          <Image
            src="/images/solarboat-images/solar-boat-hero.jpg"
            alt="Drone shot of solar boat on lake at dusk with moody sky"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* What it is */}
        <div className="mb-16">
          <h2 className="mb-4 text-[20px] font-semibold text-primary">
            What it is
          </h2>
          <div className="space-y-4 text-[15px] leading-[1.75] text-secondary">
            <p>
              Boating accounts for roughly 3% of global greenhouse emissions.
              Electric boats exist but the technology is expensive and largely
              out of reach for recreational use. Phillip Mann and I wanted to
              know if two physics students with limited funding and a beat-up
              pontoon hull could change that, at least at small scale.
            </p>
            <p>
              The answer was yes... eventually. We spent a semester converting a
              1970s Davidson College pontoon boat into a fully solar-powered
              vessel: three 200W solar panels charging a pair of 48V Torqeedo
              batteries, driving a Cruise 6.0 RS electric outboard motor. The
              boat floats, drives, and runs entirely on sunlight.
            </p>
          </div>
        </div>

        {/* How we made it happen */}
        <div className="mb-16">
          <h2 className="mb-4 text-[20px] font-semibold text-primary">
            How we made it happen
          </h2>
          <div className="space-y-4 text-[15px] leading-[1.75] text-secondary">
            <p>We had an idea and almost nothing else. No budget, no boat, no motor.</p>
            <p>
              Getting a worksite meant cold-emailing the Lake Campus director,
              who told us there were two abandoned pontoon hulls in the boatyard
              we could use. Getting a motor meant writing personalized
              sponsorship pitches to every electric marine company we could
              find. Nine companies didn&apos;t respond. Yamaha did. They had
              just launched their RightWaters sustainability campaign and
              recently acquired Torqeedo, a German electric outboard
              manufacturer. We got on a Zoom call. They liked the project. They
              sent us a $14,000 motor.
            </p>
            <p>
              The physics department funded the solar panels. The college
              sustainability office added another $1,500. We started the
              semester with enough to build.
            </p>
          </div>
        </div>

        {/* Building it */}
        <div className="mb-16">
          <h2 className="mb-4 text-[20px] font-semibold text-primary">
            Building it
          </h2>
          <div className="space-y-6 text-[15px] leading-[1.75] text-secondary">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[10px]">
              <Image
                src="/images/solarboat-images/solar-boat-progress.jpg"
                alt="Nearly complete boat in boatyard with ladder leaning against it and blue sky"
                fill
                className="object-cover"
              />
            </div>

            <p>
              The boat hadn&apos;t been in the water in over a decade. We spent
              the first weeks tearing it down — rusted bolts, rotting carpet, a
              dead gas motor. Then rebuilt from the floor up: new carpet,
              benches, plywood walls, roof structure, a back deck, ladder,
              cleats, and a captain&apos;s chair.
            </p>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[10px] sm:w-1/2">
              <Image
                src="/images/solarboat-images/solar-boat-building.jpg"
                alt="Person drilling into roof frame in boatyard with other boats in background"
                fill
                className="object-cover"
              />
            </div>

            <p>
              The roof was the structural centerpiece. It needed to hold three
              solar panels and double as a lounge area people could actually sit
              on, so it had to be over-engineered. We extended it a foot and a
              half past the boat&apos;s footprint on each side to maximize panel
              coverage, which required some interesting carpentry at the corners
              to keep it from racking.
            </p>
            <p>
              The electrical system ran three Renogy 200W panels through a
              Torqeedo solar charge controller into two 48V batteries wired in
              parallel, powering the outboard motor. A separate 12V system ran
              lights, speakers, and a horn.
            </p>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[10px]">
              <Image
                src="/images/solarboat-images/solar-boat-panels.jpg"
                alt="Person sitting on finished roof with two large solar panels laid out on either side, lake visible in background"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[10px] sm:w-1/2">
              <Image
                src="/images/solarboat-images/solar-boat-electrical.jpg"
                alt="Torqeedo battery with clamp meter reading current on top"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <div className="overflow-hidden rounded-[10px]">
                <video autoPlay muted loop playsInline className="w-full">
                  <source src="/videos/solar-boat-motor.mp4" type="video/mp4" />
                </video>
              </div>
              <p className="mt-2 font-mono text-[12px] text-muted">
                First time the motor ran.
              </p>
            </div>
          </div>
        </div>

        {/* What went wrong */}
        <div className="mb-16">
          <h2 className="mb-4 text-[20px] font-semibold text-primary">
            What went wrong
          </h2>
          <div className="space-y-6 text-[15px] leading-[1.75] text-secondary">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[10px] sm:w-1/2">
              <Image
                src="/images/solarboat-images/solar-boat-dock.jpg"
                alt="Boat tied at dock under blue sky during first water test"
                fill
                className="object-cover"
              />
            </div>

            <p>
              The day before the symposium, we connected the third solar panel
              to the charge controller. Two panels had worked fine. Three panels
              pushed the input voltage to ~60V, which is above what the charge
              controller could handle. It fried one battery completely. The
              other threw a permanent fault code. We presented the next morning
              anyway, running on wall power.
            </p>
            <p>Yamaha sent us new batteries.</p>
            <p>
              The speaker system also died during final wiring. Running cables
              under a wet boat created a short we couldn&apos;t trace. We
              replaced everything under warranty.
            </p>
          </div>
        </div>

        {/* What came of it */}
        <div className="mb-16">
          <h2 className="mb-4 text-[20px] font-semibold text-primary">
            What came of it
          </h2>
          <div className="space-y-6 text-[15px] leading-[1.75] text-secondary">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[10px]">
              <Image
                src="/images/solarboat-images/verna-miller-case-symposium_010.jpg"
                alt="Two people standing on finished painted boat with research poster at symposium"
                fill
                className="object-cover"
              />
            </div>

            <p>
              Top speed of 7mph with 4 people on board. Yamaha published a
              feature on the project for their RightWaters campaign. We
              presented at Davidson&apos;s Verna Miller Case Symposium to
              faculty, peers, and industry sponsors. The boat is still at the
              lake.
            </p>

            <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
              <a
                href="https://yamahaoutboards.com/newsroom/company-news/yamaha-rightwaters-sponsors-davidson-college-student-led-sustainable-marine-project"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-medium text-accent transition-opacity hover:opacity-80"
              >
                Yamaha RightWaters writeup ↗
              </a>
              <a
                href="https://www.edtechinnovationhub.com/news/students-at-davidson-college-build-solar-powered-boat-in-yamaha-rightwaters-backed-project"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-medium text-accent transition-opacity hover:opacity-80"
              >
                EdTech Innovation Hub coverage ↗
              </a>
            </div>
          </div>
        </div>

        {/* Next project */}
        <div className="border-t border-border pt-8">
          <Link
            href="/projects/baja-sae"
            className="text-[13px] font-medium text-accent transition-opacity hover:opacity-80"
          >
            Next project: Baja SAE →
          </Link>
        </div>
      </div>
    </main>
  );
}
