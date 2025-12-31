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
      className="h-5 w-5 text-[#B85C38]"
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
      className="h-8 w-8 text-[#B85C38]"
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
      <nav className="mb-8 text-sm text-[#2C3628]/60">
        <Link href="/products" className="hover:text-[#2C3628]">
          Products
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[#2C3628]">Testing & Quality</span>
      </nav>

      {/* Hero */}
      <div className="mb-16 max-w-3xl">
        <h1 className="serif text-4xl text-[#2C3628] md:text-5xl">
          Quality You Can Trust
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-[#2C3628]/70">
          Every Grown product undergoes rigorous third-party testing before it
          reaches your kitchen. We believe transparency and consistency are
          non-negotiable when it comes to THC products.
        </p>
      </div>

      {/* Quality Pillars */}
      <div className="grid gap-8 md:grid-cols-3">
        <div className="rounded-[24px] bg-white/50 p-8">
          <ShieldIcon />
          <h3 className="mt-6 text-xl font-semibold text-[#2C3628]">
            Third-Party Tested
          </h3>
          <p className="mt-3 text-[#2C3628]/70">
            Every batch is tested by independent, state-licensed laboratories
            for potency, purity, and safety.
          </p>
        </div>

        <div className="rounded-[24px] bg-white/50 p-8">
          <ShieldIcon />
          <h3 className="mt-6 text-xl font-semibold text-[#2C3628]">
            Consistent Dosing
          </h3>
          <p className="mt-3 text-[#2C3628]/70">
            Our precision manufacturing process ensures the same experience
            every time. No surprises, just reliable results.
          </p>
        </div>

        <div className="rounded-[24px] bg-white/50 p-8">
          <ShieldIcon />
          <h3 className="mt-6 text-xl font-semibold text-[#2C3628]">
            Clean Ingredients
          </h3>
          <p className="mt-3 text-[#2C3628]/70">
            No solvents, no additives, no junk. Just premium ingredients you
            would be proud to serve at your dinner table.
          </p>
        </div>
      </div>

      {/* What We Test For */}
      <section className="mt-24">
        <h2 className="serif text-3xl text-[#2C3628]">What We Test For</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-[#2C3628]/10 bg-white/30 p-6">
            <h4 className="font-semibold text-[#2C3628]">Potency Analysis</h4>
            <ul className="mt-4 space-y-3 text-sm text-[#2C3628]/70">
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

          <div className="rounded-2xl border border-[#2C3628]/10 bg-white/30 p-6">
            <h4 className="font-semibold text-[#2C3628]">Purity Screening</h4>
            <ul className="mt-4 space-y-3 text-sm text-[#2C3628]/70">
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

          <div className="rounded-2xl border border-[#2C3628]/10 bg-white/30 p-6">
            <h4 className="font-semibold text-[#2C3628]">Solvent Analysis</h4>
            <ul className="mt-4 space-y-3 text-sm text-[#2C3628]/70">
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

          <div className="rounded-2xl border border-[#2C3628]/10 bg-white/30 p-6">
            <h4 className="font-semibold text-[#2C3628]">Quality Assurance</h4>
            <ul className="mt-4 space-y-3 text-sm text-[#2C3628]/70">
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
        <p className="text-lg text-[#2C3628]/70">
          Have questions about our testing process?
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#2C3628]/20 px-6 py-3 text-sm font-medium text-[#2C3628] transition-all hover:bg-[#2C3628]/5"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
