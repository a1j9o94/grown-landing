import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "THC Chili-Lime Seasoning | Grown",
  description:
    "Heat, citrus, and a little mischief in single-serve sachets. 5mg THC per sachet, sold in 5-packs. Made for rims, elote, fruit, and the grill.",
};

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4 text-[#E65C00]"
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

export default function ChiliLimeSeasoningPage() {
  return (
    <div className="py-12 md:py-20">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-[#0D0D0D]/60">
        <Link href="/products" className="hover:text-[#0D0D0D]">
          Products
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[#0D0D0D]">Chili-Lime Seasoning</span>
      </nav>

      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden rounded-[32px] bg-[#FBE7D3]">
          <Image
            src="/brand/box-chili-lime.webp"
            alt="Grown THC Chili-Lime Seasoning 5-pack box"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Product Info */}
        <div className="lg:py-8">
          <h1 className="serif text-4xl text-[#0D0D0D] md:text-5xl">
            Chili-Lime Seasoning
          </h1>
          <p className="mt-4 text-lg text-[#0D0D0D]/70">
            Heat, citrus, and a little mischief. Made for rims, elote, fruit,
            and everything off the grill - the sachet you pass around the
            table.
          </p>

          {/* Specs */}
          <div className="mt-8 grid grid-cols-3 gap-4 rounded-2xl bg-white/50 p-6">
            <div className="text-center">
              <div className="serif text-2xl font-semibold text-[#0D0D0D]">
                5mg
              </div>
              <div className="mt-1 text-xs text-[#0D0D0D]/60">
                THC per sachet
              </div>
            </div>
            <div className="text-center border-x border-[#0D0D0D]/10">
              <div className="serif text-2xl font-semibold text-[#0D0D0D]">
                5
              </div>
              <div className="mt-1 text-xs text-[#0D0D0D]/60">
                Sachets per box
              </div>
            </div>
            <div className="text-center">
              <div className="serif text-2xl font-semibold text-[#0D0D0D]">
                1
              </div>
              <div className="mt-1 text-xs text-[#0D0D0D]/60">
                Serving, every time
              </div>
            </div>
          </div>

          {/* Features */}
          <ul className="mt-8 space-y-4">
            <li className="flex items-start gap-3">
              <CheckIcon />
              <div>
                <span className="font-medium text-[#0D0D0D]">
                  Single-serve sachets
                </span>
                <p className="mt-1 text-sm text-[#0D0D0D]/60">
                  Tear, sprinkle, done. No measuring spoons, no guesswork
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon />
              <div>
                <span className="font-medium text-[#0D0D0D]">
                  Precise 5mg dosing
                </span>
                <p className="mt-1 text-sm text-[#0D0D0D]/60">
                  Every sachet delivers the same experience, plate after plate
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon />
              <div>
                <span className="font-medium text-[#0D0D0D]">
                  Built for the table
                </span>
                <p className="mt-1 text-sm text-[#0D0D0D]/60">
                  Rim a glass, finish the elote, wake up the fruit plate -
                  guests dose their own
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
            href="/learn/cooking-with-thc-seasoning"
            className="rounded-2xl border border-[#0D0D0D]/10 bg-white/50 p-6 transition-all hover:border-[#0D0D0D]/20 hover:shadow-md"
          >
            <h3 className="font-semibold text-[#0D0D0D]">
              Cooking with THC Seasoning
            </h3>
            <p className="mt-2 text-sm text-[#0D0D0D]/60">
              Dosing math and technique for the sachet format.
            </p>
          </Link>
          <Link
            href="/learn/flavor-pairing-for-thc"
            className="rounded-2xl border border-[#0D0D0D]/10 bg-white/50 p-6 transition-all hover:border-[#0D0D0D]/20 hover:shadow-md"
          >
            <h3 className="font-semibold text-[#0D0D0D]">Flavor Pairing</h3>
            <p className="mt-2 text-sm text-[#0D0D0D]/60">
              Which dishes pair best with each blend.
            </p>
          </Link>
          <Link
            href="/learn/edibles-timing-basics"
            className="rounded-2xl border border-[#0D0D0D]/10 bg-white/50 p-6 transition-all hover:border-[#0D0D0D]/20 hover:shadow-md"
          >
            <h3 className="font-semibold text-[#0D0D0D]">
              Edibles Timing Basics
            </h3>
            <p className="mt-2 text-sm text-[#0D0D0D]/60">
              Onset, peak, and duration for planning the evening.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
