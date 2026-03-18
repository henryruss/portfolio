import Image from "next/image";
import Link from "next/link";

export default function CampusSwap() {
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
          Founder · Oct 2025–Present
        </p>
        <h1 className="mb-4 text-[36px] font-semibold leading-tight text-primary sm:text-[44px]">
          Campus Swap
        </h1>
        <div className="mb-10 flex flex-wrap gap-2">
          {["Flask", "Python", "Full-Stack", "Founder", "PostgreSQL"].map(
            (tag) => (
              <span
                key={tag}
                className="rounded-full bg-tag-bg px-2.5 py-0.5 font-mono text-[11px] text-accent"
              >
                {tag}
              </span>
            )
          )}
        </div>

        {/* Hero image */}
        <div
          className="relative mb-6 aspect-[16/9] w-full overflow-hidden rounded-[10px]"
          style={{ border: "0.5px solid #e0ddd4" }}
        >
          <Image
            src="/images/campusswap/campus-swap-hero.png"
            alt="Campus Swap homepage showing 'Move Out. Cash In.' hero with gradient background"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        {/* CTA */}
        <div className="mb-16">
          <a
            href="https://usecampusswap.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-tag-bg px-6 py-3 text-[16px] font-semibold text-accent transition-opacity hover:opacity-80"
            style={{ border: "1.5px solid #3a7d44" }}
          >
            Visit usecampusswap.com ↗
          </a>
        </div>

        {/* What it is */}
        <div className="mb-16">
          <h2 className="mb-4 text-[20px] font-semibold text-primary">
            What it is
          </h2>
          <div className="space-y-4 text-[15px] leading-[1.75] text-secondary">
            <p>
              Campus Swap is a student move-out consignment service. Students
              drop off furniture and goods at move-out, we sell it during
              move-in, and they get a cut. Less waste, cheaper furniture for
              incoming students, no Craigslist hassle.
            </p>
            <p>
              My co-founder Ben and I built it from scratch: the idea, the product, the tech, and
              the business. Awarded a $1k Try-It grant from Davidson&apos;s
              Hurt Hub Center for Entrepreneurship. Currently closing a $100k
              seed round. Live at UNC Chapel Hill.
            </p>
          </div>
        </div>

        {/* How it's built */}
        <div className="mb-16">
          <h2 className="mb-4 text-[20px] font-semibold text-primary">
            How it&apos;s built
          </h2>
          <div className="space-y-6 text-[15px] leading-[1.75] text-secondary">
            <p>
              Flask/Python backend with a PostgreSQL database. I built the full seller flow, the
              inventory management dashboard, the shop front, and the
              interactive room value calculator shown below.
            </p>

            <div
              className="relative aspect-[16/9] w-full overflow-hidden rounded-[10px]"
              style={{ border: "0.5px solid #e0ddd4" }}
            >
              <Image
                src="/images/campusswap/campus-swap-room.png"
                alt="'What's your room worth?' interactive room illustration with $205 profit estimate"
                fill
                className="object-cover object-top"
              />
            </div>

            <div
              className="relative aspect-[16/9] w-full overflow-hidden rounded-[10px]"
              style={{ border: "0.5px solid #e0ddd4" }}
            >
              <Image
                src="/images/campusswap/campus-swap-shop.png"
                alt="Shop page showing category filters and product listings"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* What's next */}
        <div className="mb-16">
          <h2 className="mb-4 text-[20px] font-semibold text-primary">
            What&apos;s next
          </h2>
          <div className="text-[15px] leading-[1.75] text-secondary">
            <p>
              Expanding to additional campuses. The model is simple and the
              unit economics work. The constraint is logistics and local
              operations at each new school.
            </p>
          </div>
        </div>

        {/* Next project */}
        <div className="border-t border-border pt-8">
          <Link
            href="/projects/ai-projects"
            className="text-[13px] font-medium text-accent transition-opacity hover:opacity-80"
          >
            Next project: AI Projects →
          </Link>
        </div>
      </div>
    </main>
  );
}
