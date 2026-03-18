import Image from "next/image";
import Link from "next/link";

export default function ReactionTimePCB() {
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
          Solo project · Electronics class · KiCad
        </p>
        <h1 className="mb-4 text-[36px] font-semibold leading-tight text-primary sm:text-[44px]">
          Custom PCB — Reaction Time Game
        </h1>
        <div className="mb-10 flex flex-wrap gap-2">
          {["KiCad", "PCB Design", "Arduino", "Hand-Soldered", "Firmware"].map(
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
        <div className="relative mb-16 aspect-[4/3] w-full overflow-hidden rounded-[10px]">
          <Image
            src="/images/reaction-game/pcb-assembled.jpg"
            alt="Hand holding assembled PCB with LEDs and components soldered on, purple board visible"
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
              A two-player reaction time game on a custom-designed PCB. A white
              LED lights up at a random interval, and whoever presses their button
              first wins. The winner&apos;s color LED lights up. A buzzer sounds.
              Reset and go again.
            </p>
            <p>
              The point wasn&apos;t the game. The point was going from schematic
              to physical board — learning KiCad, laying out traces, sending
              Gerbers to a fab, and soldering it by hand.
            </p>
          </div>
        </div>

        {/* How it was built */}
        <div className="mb-16">
          <h2 className="mb-4 text-[20px] font-semibold text-primary">
            How it was built
          </h2>
          <div className="space-y-6 text-[15px] leading-[1.75] text-secondary">
            <div className="relative aspect-video w-full overflow-hidden rounded-[10px]">
              <Image
                src="/images/reaction-game/pcb-schematic.png"
                alt="KiCad schematic showing Arduino Uno, five LEDs with resistors, buzzer, and two push buttons"
                fill
                className="object-contain bg-white"
              />
            </div>

            <div className="relative aspect-video w-full overflow-hidden rounded-[10px]">
              <Image
                src="/images/reaction-game/pcb-layout.png"
                alt="KiCad PCB layout view showing component footprints, copper traces, and pad placements"
                fill
                className="object-contain bg-white"
              />
            </div>
            <p className="-mt-2 font-mono text-[12px] text-muted">
              PCB layout — KiCad
            </p>

            <p>
              Designed entirely in KiCad. The schematic has an Arduino Uno,
              five LEDs with current-limiting resistors, a buzzer, and two push
              buttons. Once the schematic was right, I laid out the PCB. I
              placed components, routed traces, and set clearances, then sent
              the Gerber files to JLCPCB for fabrication.
            </p>

            <div className="flex flex-col items-center gap-2">
              <div className="w-full max-w-[400px] overflow-hidden rounded-[10px]">
                <video autoPlay muted loop playsInline className="w-full">
                  <source src="/videos/pcb-prototype.mp4" type="video/mp4" />
                </video>
              </div>
              <p className="font-mono text-[12px] text-muted">
                Breadboard prototype — before the PCB.
              </p>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[10px] sm:w-1/2">
              <Image
                src="/images/reaction-game/pcb-flat.jpg"
                alt="Bare green PCB next to 3D printed enclosure with LEDs poking through lid, sitting on desk"
                fill
                className="object-cover"
              />
            </div>

            <p>
              The boards came back, I soldered everything by hand, and it
              worked first try. I connected the Arduino externally rather than
              burning the firmware directly onto the board, which is something I would like to learn in a future project.
            </p>
          </div>
        </div>

        {/* Next project */}
        <div className="border-t border-border pt-8">
          <Link
            href="/projects/cnc-pencil-machine"
            className="text-[13px] font-medium text-accent transition-opacity hover:opacity-80"
          >
            Next project: CNC Pencil Machine →
          </Link>
        </div>
      </div>
    </main>
  );
}
