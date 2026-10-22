import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "THC Heirloom Oil | Grown",
  description:
    "Cold-pressed olive blend infused with 5mg THC per teaspoon. Perfect for sautéing, roasting, and drizzling. Zero weedy aftertaste.",
};

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4 text-[#2E7D32]"
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

export default function THCOilPage() {
  return (
    <div className="py-12 md:py-20">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-[#0D0D0D]/60">
        <Link href="/products" className="hover:text-[#0D0D0D]">
          Products
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[#0D0D0D]">THC Oil</span>
      </nav>

      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden rounded-[32px] bg-[#E8F5E9]">
          <Image
            src="/oil_image.png"
            alt="Grown Heirloom Oil"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Product Info */}
        <div className="lg:py-8">
          <h1 className="serif text-4xl text-[#0D0D0D] md:text-5xl">
            Heirloom Oil
          </h1>
          <p className="mt-4 text-lg text-[#0D0D0D]/70">
            For sautéing, roasting, and drizzling. Our signature cold-pressed
            olive blend delivers consistent dosing with zero &ldquo;weedy&rdquo;
            aftertaste.
          </p>

          {/* Specs */}
          <div className="mt-8 grid grid-cols-3 gap-4 rounded-2xl bg-white/50 p-6">
            <div className="text-center">
              <div className="serif text-2xl font-semibold text-[#0D0D0D]">
                5mg
              </div>
              <div className="mt-1 text-xs text-[#0D0D0D]/60">THC per tsp</div>
            </div>
            <div className="text-center border-x border-[#0D0D0D]/10">
              <div className="serif text-2xl font-semibold text-[#0D0D0D]">
                8oz
              </div>
              <div className="mt-1 text-xs text-[#0D0D0D]/60">Per bottle</div>
            </div>
            <div className="text-center">
              <div className="serif text-2xl font-semibold text-[#0D0D0D]">
                48
              </div>
              <div className="mt-1 text-xs text-[#0D0D0D]/60">Servings</div>
            </div>
          </div>

          {/* Features */}
          <ul className="mt-8 space-y-4">
            <li className="flex items-start gap-3">
              <CheckIcon />
              <div>
                <span className="font-medium text-[#0D0D0D]">
                  Cold-pressed olive blend
                </span>
                <p className="mt-1 text-sm text-[#0D0D0D]/60">
                  Premium quality oils that complement any dish
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon />
              <div>
                <span className="font-medium text-[#0D0D0D]">
                  Precise dosing
                </span>
                <p className="mt-1 text-sm text-[#0D0D0D]/60">
                  Reliable 5mg THC per teaspoon for predictable experiences
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon />
              <div>
                <span className="font-medium text-[#0D0D0D]">
                  Neutral taste profile
                </span>
                <p className="mt-1 text-sm text-[#0D0D0D]/60">
                  Designed to enhance food, not overpower it
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon />
              <div>
                <span className="font-medium text-[#0D0D0D]">
                  Third-party tested
                </span>
                <p className="mt-1 text-sm text-[#0D0D0D]/60">
                  Every batch verified for potency and purity
                </p>
              </div>
            </li>
          </ul>

          {/* CTA */}
          <div className="mt-10">
            <Link
              href="/#waitlist"
              className="inline-flex w-full items-center justify-center rounded-xl bg-[#0D0D0D] px-8 py-4 text-base font-semibold text-[#F7F3E8] shadow-lg shadow-[#0D0D0D]/20 transition-all hover:scale-[1.01] hover:bg-[#1f261c] active:scale-[0.99] sm:w-auto"
            >
              Join the Waitlist
            </Link>
            <p className="mt-4 text-xs text-[#0D0D0D]/40">
              Currently accepting signups for Illinois launch.
            </p>
          </div>
        </div>
      </div>

      {/* Related Learn Content */}
      <section className="mt-24">
        <h2 className="serif text-2xl text-[#0D0D0D]">Learn More</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/learn/cooking-with-thc-oil"
            className="rounded-2xl border border-[#0D0D0D]/10 bg-white/50 p-6 transition-all hover:border-[#0D0D0D]/20 hover:shadow-md"
          >
            <h3 className="font-semibold text-[#0D0D0D]">
              Cooking with THC Oil
            </h3>
            <p className="mt-2 text-sm text-[#0D0D0D]/60">
              A complete guide to incorporating THC oil into your cooking.
            </p>
          </Link>
          <Link
            href="/learn/when-to-add-thc-oil"
            className="rounded-2xl border border-[#0D0D0D]/10 bg-white/50 p-6 transition-all hover:border-[#0D0D0D]/20 hover:shadow-md"
          >
            <h3 className="font-semibold text-[#0D0D0D]">
              When to Add THC Oil
            </h3>
            <p className="mt-2 text-sm text-[#0D0D0D]/60">
              Timing matters. Learn when to add oil for best results.
            </p>
          </Link>
          <Link
            href="/learn/storage-shelf-life-thc-oil-salt"
            className="rounded-2xl border border-[#0D0D0D]/10 bg-white/50 p-6 transition-all hover:border-[#0D0D0D]/20 hover:shadow-md"
          >
            <h3 className="font-semibold text-[#0D0D0D]">Storage & Shelf Life</h3>
            <p className="mt-2 text-sm text-[#0D0D0D]/60">
              How to store your THC oil for maximum freshness.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
