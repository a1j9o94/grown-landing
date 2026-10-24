import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Testing & Quality | Grown",
  description:
    "Our commitment to quality, safety, and consistency. Learn about our third-party testing, sourcing standards, and manufacturing process.",
};

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5 text-[#2E7D32]"
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

function ShieldIcon() {
  return (
    <svg
      className="h-8 w-8 text-[#2E7D32]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  );
}

export default function TestingQualityPage() {
  return (
    <div className="py-12 md:py-20">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-[#0D0D0D]/60">
        <Link href="/products" className="hover:text-[#0D0D0D]">
          Products
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[#0D0D0D]">Testing & Quality</span>
      </nav>

      {/* Hero */}
      <div className="mb-16 max-w-3xl">
        <h1 className="serif text-4xl text-[#0D0D0D] md:text-5xl">
          Our Quality Plan
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-[#0D0D0D]/70">
          Grown is still in development. This page describes the testing we plan
          to do before any product reaches your kitchen. We believe transparency
          and consistency matter when it comes to THC products.
        </p>
      </div>

      {/* Quality Pillars */}
      <div className="grid gap-8 md:grid-cols-3">
        <div className="rounded-[24px] bg-white/50 p-8">
          <ShieldIcon />
          <h3 className="mt-6 text-xl font-semibold text-[#0D0D0D]">
            Planned Third-Party Testing
          </h3>
          <p className="mt-3 text-[#0D0D0D]/70">
            We plan to have every batch tested by independent, state-licensed
            laboratories for potency, purity, and safety.
          </p>
        </div>

        <div className="rounded-[24px] bg-white/50 p-8">
          <ShieldIcon />
          <h3 className="mt-6 text-xl font-semibold text-[#0D0D0D]">
            Dosing Goal
          </h3>
          <p className="mt-3 text-[#0D0D0D]/70">
            Each sachet is designed around a 5mg THC serving. Final formulation
            and fill will be confirmed with our manufacturer and lab results.
          </p>
        </div>

        <div className="rounded-[24px] bg-white/50 p-8">
          <ShieldIcon />
          <h3 className="mt-6 text-xl font-semibold text-[#0D0D0D]">
            Ingredient Standards
          </h3>
          <p className="mt-3 text-[#0D0D0D]/70">
            We aim to use ingredients you would be proud to serve at your dinner
            table. Specifications are still being finalized.
          </p>
        </div>
      </div>

      {/* What We Plan to Test For */}
      <section className="mt-24">
        <h2 className="serif text-3xl text-[#0D0D0D]">What We Plan to Test For</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-[#0D0D0D]/10 bg-white/30 p-6">
            <h4 className="font-semibold text-[#0D0D0D]">Potency Analysis</h4>
            <ul className="mt-4 space-y-3 text-sm text-[#0D0D0D]/70">
              <li className="flex items-center gap-3">
                <CheckIcon />
                THC concentration per serving
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon />
                CBD and other cannabinoid levels
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon />
                Batch-to-batch consistency
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-[#0D0D0D]/10 bg-white/30 p-6">
            <h4 className="font-semibold text-[#0D0D0D]">Purity Screening</h4>
            <ul className="mt-4 space-y-3 text-sm text-[#0D0D0D]/70">
              <li className="flex items-center gap-3">
                <CheckIcon />
                Pesticide residue testing
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon />
                Heavy metal screening
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon />
                Microbial contamination checks
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-[#0D0D0D]/10 bg-white/30 p-6">
            <h4 className="font-semibold text-[#0D0D0D]">Solvent Analysis</h4>
            <ul className="mt-4 space-y-3 text-sm text-[#0D0D0D]/70">
              <li className="flex items-center gap-3">
                <CheckIcon />
                Residual solvent detection
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon />
                Extraction purity verification
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-[#0D0D0D]/10 bg-white/30 p-6">
            <h4 className="font-semibold text-[#0D0D0D]">Quality Assurance</h4>
            <ul className="mt-4 space-y-3 text-sm text-[#0D0D0D]/70">
              <li className="flex items-center gap-3">
                <CheckIcon />
                Visual and texture inspection
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon />
                Flavor profile evaluation
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 text-center">
        <p className="text-lg text-[#0D0D0D]/70">
          Have questions about our testing process?
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#0D0D0D]/20 px-6 py-3 text-sm font-medium text-[#0D0D0D] transition-all hover:bg-[#0D0D0D]/5"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
