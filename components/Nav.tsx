"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Hardware", href: "/#hardware" },
  { label: "Software", href: "/#software" },
  { label: "About", href: "/#about" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background" style={{ borderBottom: "0.5px solid #e0ddd4" }}>
      <div className="mx-auto flex max-w-[1120px] items-center justify-between px-6 py-4">
        <Link href="/" className="font-mono text-[15px] font-medium text-primary">
          Henry Russell
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[13px] text-secondary transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-medium text-accent transition-opacity hover:opacity-80"
          >
            Resume ↗
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-[5px] md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[1.5px] w-5 bg-primary transition-transform ${
              open ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-5 bg-primary transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-5 bg-primary transition-transform ${
              open ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border px-6 pb-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-[14px] text-secondary transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="block py-3 text-[14px] font-medium text-accent"
          >
            Resume ↗
          </a>
        </div>
      )}
    </nav>
  );
}
