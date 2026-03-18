# Portfolio — Session Context

Henry Russell's robotics/engineering portfolio. Next.js 14 app deployed to Vercel.

---

## Stack

- **Framework:** Next.js 14 (App Router, static export)
- **Styling:** Tailwind CSS with custom design tokens
- **Animation:** Framer Motion
- **Fonts:** Inter + JetBrains Mono (next/font/google)
- **Images:** next/image with `fill` + `object-cover` throughout

---

## Color tokens (tailwind.config.ts)

| Token | Hex | Usage |
|---|---|---|
| `background` | `#f7f6f2` | Page background (warm off-white) |
| `surface` | `#ffffff` | Cards |
| `primary` | `#1a1a16` | Headings, strong text |
| `secondary` | `#888880` | Body text |
| `muted` | `#aaa9a0` | Captions, labels |
| `border` | `#e0ddd4` | Dividers, card borders |
| `accent` | `#3a7d44` | Green — links, tags, CTAs |
| `tag-bg` | `#eef4ef` | Tag pill backgrounds |

Body text override for legibility: `#555550` (between `secondary` and `primary`) — used inline on skill lists, recruiting callout, stat values.

---

## File map

```
app/
  layout.tsx              — fonts, Nav + Footer wrapper, metadata
  page.tsx                — assembles Hero, HardwareProjects, SoftwareProjects, About
  globals.css             — scroll-behavior: smooth, body background
  projects/[slug]/page.tsx — routes slugs to dedicated components

components/
  Nav.tsx                 — sticky nav, hrefs use /#hardware etc (works from subpages)
  Footer.tsx              — border-top, email/LinkedIn/GitHub/Resume links
  Hero.tsx                — word-stagger title, 3 CTA buttons, stats row
  HardwareProjects.tsx    — asymmetric grid: hero card + mid row + bottom row
  SoftwareProjects.tsx    — 2-column card grid, full screenshot at top of each card
  About.tsx               — 3-column desktop (bio | photo | skills), hides photo on tablet/mobile
  projects/
    TruckWindowRetrofit.tsx
    SolarBoat.tsx
    BajaSAE.tsx
    ReactionTimePCB.tsx
    CNCPencilMachine.tsx
    CampusSwap.tsx
    AIProjects.tsx

data/projects.ts          — single source of truth: Project interface + projects array
lib/animations.ts         — all Framer Motion variants (fadeUp, slideFromLeft, etc.)
```

---

## data/projects.ts

`Project` interface fields: `slug`, `title`, `label`, `description`, `tags[]`, `category` (`"hardware" | "software"`), `mediaPlaceholder`, `image?`, `externalUrl?`, `featured?`, `linkText?`

**To add a card image on the homepage:** set `image: "/images/..."` on the project. `HardwareProjects.tsx` and `SoftwareProjects.tsx` both render `<Image>` when `project.image` is present, fall back to placeholder text otherwise.

Projects in order:
1. `truck-window-retrofit` — hardware, featured (hero card)
2. `solar-boat` — hardware, mid row
3. `baja-sae` — hardware, mid row
4. `reaction-time-pcb` — hardware, bottom row
5. `cnc-pencil-machine` — hardware, bottom row
6. `campus-swap` — software
7. `ai-projects` — software

---

## Homepage layout

**Hero** (`#hero`) — `min-h-[calc(100vh-65px)]`, word-stagger title animation, 3 CTA buttons (View Projects / About Me / Resume ↗), stats row fades in after title.

**Hardware Projects** (`#hardware`) — 3 tiers:
- Tier 1: Full-width horizontal card (60% photo left, 40% text right). Truck. Photo: `truck-door-open.jpg`, `object-[center_30%]`.
- Tier 2: 2-column grid, `items-start` so heights differ naturally. Solar Boat + Baja SAE.
- Tier 3: 2-column grid, smaller cards. PCB + CNC.

**Software & AI** (`#software`) — 2-column card grid. Screenshot (300px tall, `object-top`) at top of each card. Entire card is clickable via absolute-positioned `<Link>` overlay (`z-0`); external URL sits above it at `z-10`.

**About** (`#about`) — 3 columns on desktop: bio+recruiting (38%) | headshot rectangle (22%, `hidden lg:block`) | skills grid (40%). Collapses to 2-col on tablet (no photo), 1-col on mobile.

---

## Project detail pages

`app/projects/[slug]/page.tsx` routes dedicated slugs to their components; everything else falls through to a generic template. Current dedicated pages: all 7 projects.

**Pattern for new project pages:**
1. Create `components/projects/MyProject.tsx`
2. Add import + `if (params.slug === "my-project") return <MyProject />;` in the slug page
3. Set `image` field in `data/projects.ts` for the homepage card

**Image paths by project:**
- Truck: `/images/truck-images/truck-*.jpg`
- Solar Boat: `/images/solarboat-images/solar-boat-*.jpg`
- Baja SAE: `/images/baja/baja-*.jpg` + `baja-cad.png`
- PCB: `/images/reaction-game/pcb-*.jpg|png`
- CNC: `/images/cnc/cnc-drawing.jpg`
- Campus Swap: `/images/campusswap/campus-swap-*.png`
- AI Projects: `/images/vibepm/vibepm-screenshot.png`
- Headshot: `/images/headshot.jpg`

**Videos:** `/videos/truck-window.mp4`, `/videos/solar-boat-motor.mp4`, `/videos/pcb-prototype.mp4`, `/videos/cnc-machine.mp4`

All videos: `autoPlay muted loop playsInline`

---

## Nav links

```ts
{ label: "Hardware", href: "/#hardware" }
{ label: "Software", href: "/#software" }
{ label: "About",    href: "/#about" }
// Resume: /resume.pdf (external, new tab)
```

Uses `<Link>` not `<a>` so works from subpages without full reload.

---

## Known patterns & decisions

- **Card click without hydration errors:** Software cards use an absolute-positioned invisible `<Link className="absolute inset-0 z-0">` inside a relative `<div>`. External URL `<a>` sits at `z-10`. Avoids `<div>` inside `<a>` hydration mismatch.
- **Half-width images in project pages:** `className="relative aspect-[4/3] overflow-hidden rounded-[10px] sm:w-1/2"` — full width mobile, half width desktop.
- **Screenshot images** (Campus Swap, VibePM): `border: "0.5px solid #e0ddd4"` wrapper, `object-cover object-top`.
- **Schematic/layout PNGs** (PCB page): `object-contain bg-white` so diagrams aren't cropped.
- **"In Progress" badge** (Baja SAE): `bg-amber-100 text-amber-600` pill.
- **Smooth scroll:** `html { scroll-behavior: smooth }` in `globals.css`.

---

## What's not done yet

- Baja CAD hero — `baja-cad.png` exists at `/images/baja/baja-cad.png` ✓ (was missing earlier, now present)
- CNC image — `cnc-drawing.jpg` exists at `/images/cnc/cnc-drawing.jpg` ✓
- Resume — `/public/resume.pdf` exists (placeholder or real)
- Generic project template still used as fallback for any slug without a dedicated component
