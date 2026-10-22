"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/learn", label: "Learn" },
  { href: "/recipes", label: "Recipes" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-50 mx-auto max-w-6xl px-6 py-8">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="Grown home">
          <Image
            src="/brand/grown-wordmark.webp"
            alt="Grown"
            width={900}
            height={336}
            className="h-9 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#0d0d0d]/60 transition-colors hover:text-[#0d0d0d]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#waitlist"
            className="rounded-full bg-[#2e7d32] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#f7f3e8] transition-colors hover:bg-[#1b5e20]"
          >
            Join the list
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-[#0d0d0d]/5 sm:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <svg
              className="h-6 w-6 text-[#0d0d0d]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6 text-[#0d0d0d]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="absolute left-0 right-0 top-full z-50 border-b border-[#0d0d0d]/10 bg-[#f7f3e8] px-6 py-6 shadow-lg sm:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold uppercase tracking-[0.14em] text-[#0d0d0d]/60 transition-colors hover:text-[#0d0d0d]"
              >
                {link.label}
              </Link>
            ))}
            <hr className="border-[#0d0d0d]/10" />
            <Link
              href="/#waitlist"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex w-fit items-center rounded-full bg-[#2e7d32] px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-[#f7f3e8]"
            >
              Join the list
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
