import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products | Grown",
  description:
    "THC-infused pantry staples for the discerning home cook. Explore our collection of heirloom oil and finishing salt.",
};

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4 text-[#B85C38]"
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
        <h1 className="serif text-4xl text-[#2C3628] md:text-5xl">
          The Pantry
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-[#2C3628]/70">
          Cooking essentials designed for dinner parties, not dorm rooms.
          Chef-grade ingredients with precise, reliable dosing.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {/* Oil Card */}
        <Link
          href="/products/thc-oil"
          className="group relative overflow-hidden rounded-[32px] bg-[#E8EAE4] transition-all hover:shadow-xl hover:shadow-[#2C3628]/5"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/oil_image.png"
              alt="Grown Heirloom Oil"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#E8EAE4] via-transparent to-transparent" />
          </div>
          <div className="relative z-10 p-8 md:p-10">
            <div className="serif text-3xl text-[#2C3628]">Heirloom Oil</div>
            <p className="mt-2 text-base text-[#2C3628]/70">
              For sautéing, roasting, and drizzling.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-[#2C3628]/80">
              <li className="flex items-center gap-3">
                <CheckIcon /> <span className="font-medium">5mg THC</span> per
                tsp
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon /> Cold-pressed olive blend
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon /> Zero &ldquo;weedy&rdquo; aftertaste
              </li>
            </ul>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#B85C38]">
              Learn more
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
            </div>
          </div>
        </Link>

        {/* Salt Card */}
        <Link
          href="/products/thc-salt"
          className="group relative overflow-hidden rounded-[32px] bg-[#E6DBC6] transition-all hover:shadow-xl hover:shadow-[#B85C38]/10"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/salt_image.png"
              alt="Grown Finishing Salt"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#E6DBC6] via-transparent to-transparent" />
          </div>
          <div className="relative z-10 p-8 md:p-10">
            <div className="serif text-3xl text-[#2C3628]">Flake Salt</div>
            <p className="mt-2 text-base text-[#2C3628]/70">
              The perfect finishing pinch.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-[#2C3628]/80">
              <li className="flex items-center gap-3">
                <CheckIcon /> <span className="font-medium">2mg THC</span> per
                pinch
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon /> Harvested grey sea salt
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon /> Fast-acting absorption
              </li>
            </ul>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#B85C38]">
              Learn more
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
            </div>
          </div>
        </Link>
      </div>

      {/* Quality Link */}
      <div className="mt-16 text-center">
        <Link
          href="/products/testing-and-quality"
          className="inline-flex items-center gap-2 rounded-full border border-[#2C3628]/20 px-6 py-3 text-sm font-medium text-[#2C3628] transition-all hover:bg-[#2C3628]/5"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          Testing & Quality Standards
        </Link>
      </div>
    </div>
  );
}
