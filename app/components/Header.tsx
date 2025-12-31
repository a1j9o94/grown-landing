"use client";

import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="relative z-10 mx-auto max-w-6xl px-6 py-8">
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

        <nav className="hidden items-center gap-8 sm:flex">
          <Link
            href="/products"
            className="serif text-[15px] text-[#2C3628]/70 transition-colors hover:text-[#2C3628]"
          >
            Products
          </Link>
          <Link
            href="/learn"
            className="serif text-[15px] text-[#2C3628]/70 transition-colors hover:text-[#2C3628]"
          >
            Learn
          </Link>
          <Link
            href="/recipes"
            className="serif text-[15px] text-[#2C3628]/70 transition-colors hover:text-[#2C3628]"
          >
            Recipes
          </Link>
          <Link
            href="/about"
            className="serif text-[15px] text-[#2C3628]/70 transition-colors hover:text-[#2C3628]"
          >
            About
          </Link>
          <Link
            href="/#waitlist"
            className="serif text-[15px] italic text-[#B85C38] transition-colors hover:text-[#9A4A2B]"
          >
            Join the table
          </Link>
        </nav>
      </div>
    </header>
  );
}
