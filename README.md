# Henry Russell — Engineering Portfolio

Personal portfolio site built with Next.js 14, Tailwind CSS, and Framer Motion.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding Project Photos

Replace the placeholder `<div>` elements in `components/HardwareProjects.tsx` and the project detail pages with Next.js `<Image>` components:

```tsx
import Image from "next/image";

<Image src="/images/truck-retrofit.jpg" alt="Truck window retrofit" fill className="object-cover" />
```

Drop images into `/public/images/`.

## Resume

Drop your resume PDF into `/public/resume.pdf`. The nav and footer link to it automatically.

## Deploy to Vercel

```bash
npx vercel
```

Or connect the GitHub repo at [vercel.com/new](https://vercel.com/new) for automatic deploys on push.
