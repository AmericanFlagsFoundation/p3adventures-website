"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/adventures", label: "Adventures" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-2xl">🌍</span>
          <span className="text-xl font-bold text-ocean-800 tracking-tight">
            P3 Adventures
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-ocean-700"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary text-sm px-5 py-2">
            Plan Your Trip
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-gray-100 bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-sand-50 hover:text-ocean-700"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary mt-2 text-center text-sm"
              onClick={() => setOpen(false)}
            >
              Plan Your Trip
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
