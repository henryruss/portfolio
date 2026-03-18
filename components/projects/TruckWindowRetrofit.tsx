import Image from "next/image";
import Link from "next/link";

export default function TruckWindowRetrofit() {
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
          Self-initiated · Electronics class final · 2025
        </p>
        <h1 className="mb-4 text-[36px] font-semibold leading-tight text-primary sm:text-[44px]">
          Truck Window Retrofit
        </h1>
        <div className="mb-10 flex flex-wrap gap-2">
          {[
            "Arduino",
            "Embedded C",
            "KiCad",
            "Relays",
            "Motor Drivers",
            "Current Sensing",
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
            src="/images/truck-images/truck-door-open.jpg"
            alt="Truck door panel removed showing mounted motor, window arm, and breadboard duct-taped to the door"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Video */}
        <div className="mb-16 overflow-hidden rounded-[10px]">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full"
          >
            <source src="/videos/truck-window.mp4" type="video/mp4" />
          </video>
        </div>

        {/* What it is */}
        <div className="mb-16">
          <h2 className="mb-4 text-[20px] font-semibold text-primary">
            What it is
          </h2>
          <div className="space-y-4 text-[15px] leading-[1.75] text-secondary">
            <p>
              My truck has manual crank windows. Ten full rotations to open or
              close one. Cranking while driving is a genuine safety hazard. So I
              retrofitted the driver&apos;s side window into a fully functional
              power window. It uses an arduino, relays, motor driver, current sensing, and
              a custom 3D-printed spindle adapter, integrated directly into the
              car&apos;s electrical system.
            </p>
            <p>
              It works. Every time I turn the key and press the button, the
              window moves. No laptop connected, no external power supply. The
              Arduino boots with the ignition and runs in the background like a
              factory system.
            </p>
          </div>
        </div>

        {/* How it works */}
        <div className="mb-16">
          <h2 className="mb-4 text-[20px] font-semibold text-primary">
            How it works
          </h2>
          <div className="space-y-4 text-[15px] leading-[1.75] text-secondary">
            <p>
              The system has two distinct circuits: the motor control circuit and
              the car integration circuit.
            </p>
            <p>
              Motor control uses an Arduino Uno, a BTS7960 H-bridge motor
              driver, a 20A Hall current sensor, and two push buttons. The
              H-bridge gives full directional control: LPWM high spins the
              motor one way, RPWM high reverses it. The current sensor is how
              the system knows when to stop: when the window hits the end of its
              travel, the motor stalls and current spikes to ~25A. The Arduino
              reads that spike and cuts the motor automatically, no position
              tracking needed.
            </p>

            {/* Circuit diagram */}
            <div className="relative aspect-video overflow-hidden rounded-[10px]">
              <Image
                src="/images/truck-images/truck-circuit-diagram.jpg"
                alt="Hand-drawn whiteboard circuit diagram showing battery, relay, motor driver, current sensor, and Arduino"
                fill
                className="object-cover"
              />
            </div>

            <p>
              Car integration was the harder problem. The motor draws up to 25A
              under stall, which is far too much to tap into any existing circuit. The
              solution: a 40/30A relay that only connects the motor to the car
              battery when the ignition is on, protecting both the battery and
              every other circuit in the car. A fuse tap into the fuse box
              supplies the low-power 12V control line. A cracked-open cigarette
              lighter adapter steps that down to 5V for the Arduino and sensors.
              A 30A inline fuse on the high-power line is the last line of
              defense if anything surges.
            </p>
            <p>
              The motor spindle didn&apos;t match the manual crank spindle, so I
              modeled an adapter in Fusion 360 and printed five versions with
              slightly different press-fit tolerances until one held.
            </p>
          </div>
        </div>

        {/* What went wrong */}
        <div className="mb-16">
          <h2 className="mb-4 text-[20px] font-semibold text-primary">
            What went wrong
          </h2>

          {/* Side-by-side images */}
          <div className="mb-6 grid gap-4 sm:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[10px]">
              <Image
                src="/images/truck-images/truck-spindle-adapter.jpg"
                alt="Hand holding a 3D-printed white spindle adapter next to the motor"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[10px]">
              <Image
                src="/images/truck-images/truck-fusion360.jpg"
                alt="Laptop showing Fusion 360 with three numbered spindle adapter variants on screen"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-4 text-[15px] leading-[1.75] text-secondary">
            <p>Almost everything, at some point.</p>
            <p>
              Finding the right fuse tap location took trying 30 different
              fuses. Almost every fuse in my car stays hot regardless of
              ignition state. The one that finally worked, &ldquo;cluster
              overhead electric&rdquo;, I found through pure trial and error
              with a multimeter and a lot of patience.
            </p>
            <p>
              The spindle adapter was the closest I came to quitting. I was
              nearly finished when I realized the motor spindle and the manual
              crank spindle had no obvious way to couple. A gear train was too
              complex to mount cleanly. Welding would destroy the motor
              internals. The actual solution came from changing my assumption: I
              had been trying to hide the motor inside the door panel, which was
              creating the constraint. Once I decided to mount it externally, a
              simple 3D printed adapter solved the whole problem. I printed five
              versions to nail the press fit tolerance.
            </p>
            <p>
              Routing wires through the door took hours. Zip-tied bundles,
              soldered ground commons, a flood light to find the holes. Not
              glamorous, but it works.
            </p>
          </div>
        </div>

        {/* What's next */}
        <div className="mb-16">
          <h2 className="mb-4 text-[20px] font-semibold text-primary">
            What&apos;s next
          </h2>

          <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-[10px]">
            <Image
              src="/images/truck-images/truck-interior-mounted.jpg"
              alt="Inside the truck door showing motor mounted with breadboard and wiring visible"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-4 text-[15px] leading-[1.75] text-secondary">
            <p>
              The control electronics are currently zip-tied to the floorboard.
              The real next step is consolidating everything onto a single
              custom PCB that tucks into the footbox — cleaner, more reliable,
              and a good excuse to design another board.
            </p>
            <p>
              I also want to replace the breadboard-mounted buttons with proper
              automotive switches, ideally two-stage like factory power windows,
              where a half-press moves to a precise location and a full press
              rolls all the way up or down. The current sensor already detects
              end-of-travel stall current, so the auto-up/down logic is mostly a
              software change.
            </p>
            <p>Eventually: passenger side too.</p>
          </div>
        </div>

        {/* Next project */}
        <div className="border-t border-border pt-8">
          <Link
            href="/projects/solar-boat"
            className="text-[13px] font-medium text-accent transition-opacity hover:opacity-80"
          >
            Next project: Solar Boat →
          </Link>
        </div>
      </div>
    </main>
  );
}
