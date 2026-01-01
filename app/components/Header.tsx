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
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-lg">
            <Image
              src="/logo.png"
              alt="Grown Logo"
              fill
              className="object-cover"
            />
          </div>
          <span className="serif text-2xl font-semibold tracking-tight text-[#2C3628]">
            Grown.
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="serif text-[15px] text-[#2C3628]/70 transition-colors hover:text-[#2C3628]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#waitlist"
            className="serif text-[15px] italic text-[#B85C38] transition-colors hover:text-[#9A4A2B]"
          >
            Join the table
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-[#2C3628]/5 sm:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <svg
              className="h-6 w-6 text-[#2C3628]"
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
              className="h-6 w-6 text-[#2C3628]"
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
        <nav className="absolute left-0 right-0 top-full z-50 border-b border-[#2C3628]/10 bg-[#E8EAE4] px-6 py-6 shadow-lg sm:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="serif text-lg text-[#2C3628]/70 transition-colors hover:text-[#2C3628]"
              >
                {link.label}
              </Link>
            ))}
            <hr className="border-[#2C3628]/10" />
            <Link
              href="/#waitlist"
              onClick={() => setMobileMenuOpen(false)}
              className="serif text-lg italic text-[#B85C38] transition-colors hover:text-[#9A4A2B]"
            >
              Join the table
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
