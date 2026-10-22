import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products | Grown",
  description:
    "THC-infused seasoning salt and chili-lime seasoning in single-serve 5mg sachets. Pantry staples for dinner parties, not dorm rooms.",
};

function CheckIcon({ color = "#2e7d32" }: { color?: string }) {
  return (
    <svg
      className="h-4 w-4"
      style={{ color }}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

export default function ProductsPage() {
  return (
    <div className="py-12 md:py-20">
      {/* Hero */}
      <div className="mb-16 text-center">
        <h1 className="serif text-4xl italic text-[#2e7d32] md:text-5xl">
          The Lineup
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-[#0d0d0d]/70">
          Seasoning staples designed for dinner parties, not dorm rooms.
          Chef-grade ingredients with precise, reliable dosing.
        </p>
      </div>

      {/* SKU 01: Seasoning Salt */}
      <section
        id="seasoning-salt"
        className="mb-12 overflow-hidden rounded-[32px] bg-[#e8f5e9]"
      >
        <div className="grid items-center gap-8 p-8 md:grid-cols-2 md:p-12">
          <div className="relative aspect-[2/3] w-full max-w-sm overflow-hidden rounded-[24px] shadow-xl shadow-[#0d0d0d]/10 max-md:mx-auto">
            <Image
              src="/brand/sachet-seasoning-salt.webp"
              alt="Grown THC Infused Seasoning Salt - single-serve sachet"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#2e7d32]">
              SKU 01 • Launch
            </div>
            <h2 className="serif mt-2 text-4xl text-[#0d0d0d]">
              Seasoning Salt
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#0d0d0d]/70">
              The everyday finisher. A savory, herby blend that lands on
              everything from eggs to roasted vegetables - dosed to the pinch,
              so the math is always done for you.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-[#0d0d0d]/80">
              <li className="flex items-center gap-3">
                <CheckIcon color="#2e7d32" />
                <span>
                  <span className="font-medium">5mg THC</span> per sachet
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon color="#2e7d32" />
                <span>Single-serve - no measuring, no guesswork</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon color="#2e7d32" />
                <span>Sold in 5-packs</span>
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/#waitlist"
                className="inline-flex items-center justify-center rounded-full bg-[#2e7d32] px-6 py-3 text-sm font-medium text-[#f7f3e8] transition-colors hover:bg-[#1b5e20]"
              >
                Join the list for launch
              </Link>
              <Link
                href="/products/seasoning-salt"
                className="text-sm font-medium text-[#2e7d32] transition-colors hover:text-[#1b5e20]"
              >
                Product details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SKU 02: Chili-Lime */}
      <section
        id="chili-lime"
        className="mb-12 overflow-hidden rounded-[32px] bg-[#fbe7d3]"
      >
        <div className="grid items-center gap-8 p-8 md:grid-cols-2 md:p-12">
          <div className="md:order-2">
            <div className="relative aspect-[2/3] w-full max-w-sm overflow-hidden rounded-[24px] shadow-xl shadow-[#0d0d0d]/10 max-md:mx-auto md:ml-auto">
              <Image
                src="/brand/sachet-chili-lime.webp"
                alt="Grown THC Infused Chili-Lime Seasoning - single-serve sachet"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:order-1">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#e65c00]">
              SKU 02 • Launch
            </div>
            <h2 className="serif mt-2 text-4xl text-[#0d0d0d]">
              Chili-Lime Seasoning
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#0d0d0d]/70">
              Heat, citrus, and a little mischief. Made for rims, elote, fruit,
              and everything off the grill - the sachet you pass around the
              table.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-[#0d0d0d]/80">
              <li className="flex items-center gap-3">
                <CheckIcon color="#e65c00" />
                <span>
                  <span className="font-medium">5mg THC</span> per sachet
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon color="#e65c00" />
                <span>Single-serve - no measuring, no guesswork</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon color="#e65c00" />
                <span>Sold in 5-packs</span>
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/#waitlist"
                className="inline-flex items-center justify-center rounded-full bg-[#e65c00] px-6 py-3 text-sm font-medium text-[#f7f3e8] transition-colors hover:bg-[#c24e00]"
              >
                Join the list for launch
              </Link>
              <Link
                href="/products/chili-lime-seasoning"
                className="text-sm font-medium text-[#e65c00] transition-colors hover:text-[#c24e00]"
              >
                Product details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testing & Quality strip */}
      <section className="rounded-[32px] border border-[#0d0d0d]/10 p-8 text-center md:p-12">
        <h3 className="serif text-2xl text-[#0d0d0d]">
          Tested like we&apos;re feeding our own friends. Because we are.
        </h3>
        <p className="mx-auto mt-3 max-w-xl text-sm text-[#0d0d0d]/60">
          Every batch is third-party tested for potency and purity, with COAs
          you can actually read.
        </p>
        <Link
          href="/products/testing-and-quality"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#2e7d32] transition-colors hover:text-[#1b5e20]"
        >
          How we test
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </section>
    </div>
  );
}
