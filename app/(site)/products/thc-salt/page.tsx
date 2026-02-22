import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "THC Finishing Salt | Grown",
  description:
    "Harvested grey sea salt with 2mg THC per pinch. Fast-acting absorption for the perfect finishing touch.",
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

export default function THCSaltPage() {
  return (
    <div className="py-12 md:py-20">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-[#2C3628]/60">
        <Link href="/products" className="hover:text-[#2C3628]">
          Products
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[#2C3628]">THC Salt</span>
      </nav>

      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden rounded-[32px] bg-[#E6DBC6]">
          <Image
            src="/salt_image.png"
            alt="Grown Finishing Salt"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Product Info */}
        <div className="lg:py-8">
          <h1 className="serif text-4xl text-[#2C3628] md:text-5xl">
            Flake Salt
          </h1>
          <p className="mt-4 text-lg text-[#2C3628]/70">
            The perfect finishing pinch. Our harvested grey sea salt delivers
            fast-acting absorption and beautiful texture on any finished dish.
          </p>

          {/* Specs */}
          <div className="mt-8 grid grid-cols-3 gap-4 rounded-2xl bg-white/50 p-6">
            <div className="text-center">
              <div className="serif text-2xl font-semibold text-[#2C3628]">
                2mg
              </div>
              <div className="mt-1 text-xs text-[#2C3628]/60">THC per pinch</div>
            </div>
            <div className="text-center border-x border-[#2C3628]/10">
              <div className="serif text-2xl font-semibold text-[#2C3628]">
                3oz
              </div>
              <div className="mt-1 text-xs text-[#2C3628]/60">Per jar</div>
            </div>
            <div className="text-center">
              <div className="serif text-2xl font-semibold text-[#2C3628]">
                60+
              </div>
              <div className="mt-1 text-xs text-[#2C3628]/60">Servings</div>
            </div>
          </div>

          {/* Features */}
          <ul className="mt-8 space-y-4">
            <li className="flex items-start gap-3">
              <CheckIcon />
              <div>
                <span className="font-medium text-[#2C3628]">
                  Harvested grey sea salt
                </span>
                <p className="mt-1 text-sm text-[#2C3628]/60">
                  Premium flake texture that melts on contact
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon />
              <div>
                <span className="font-medium text-[#2C3628]">
                  Fast-acting absorption
                </span>
                <p className="mt-1 text-sm text-[#2C3628]/60">
                  Sublingual activation for quicker onset
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon />
              <div>
                <span className="font-medium text-[#2C3628]">Micro-dosing friendly</span>
                <p className="mt-1 text-sm text-[#2C3628]/60">
                  2mg per pinch for precise, gentle experiences
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon />
              <div>
                <span className="font-medium text-[#2C3628]">
                  Third-party tested
                </span>
                <p className="mt-1 text-sm text-[#2C3628]/60">
                  Every batch verified for potency and purity
                </p>
              </div>
            </li>
          </ul>

          {/* CTA */}
          <div className="mt-10">
            <Link
              href="/#waitlist"
              className="inline-flex w-full items-center justify-center rounded-xl bg-[#2C3628] px-8 py-4 text-base font-semibold text-[#F2F0E9] shadow-lg shadow-[#2C3628]/20 transition-all hover:scale-[1.01] hover:bg-[#1f261c] active:scale-[0.99] sm:w-auto"
            >
              Join the Waitlist
            </Link>
            <p className="mt-4 text-xs text-[#2C3628]/40">
              Currently accepting signups for Illinois launch.
            </p>
          </div>
        </div>
      </div>

      {/* Related Learn Content */}
      <section className="mt-24">
        <h2 className="serif text-2xl text-[#2C3628]">Learn More</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/learn/using-thc-salt"
            className="rounded-2xl border border-[#2C3628]/10 bg-white/50 p-6 transition-all hover:border-[#2C3628]/20 hover:shadow-md"
          >
            <h3 className="font-semibold text-[#2C3628]">Using THC Salt</h3>
            <p className="mt-2 text-sm text-[#2C3628]/60">
              Master the art of finishing with THC salt.
            </p>
          </Link>
          <Link
            href="/learn/flavor-pairing-for-thc"
            className="rounded-2xl border border-[#2C3628]/10 bg-white/50 p-6 transition-all hover:border-[#2C3628]/20 hover:shadow-md"
          >
            <h3 className="font-semibold text-[#2C3628]">Flavor Pairing</h3>
            <p className="mt-2 text-sm text-[#2C3628]/60">
              Which dishes pair best with THC finishing salt.
            </p>
          </Link>
          <Link
            href="/learn/storage-shelf-life-thc-oil-salt"
            className="rounded-2xl border border-[#2C3628]/10 bg-white/50 p-6 transition-all hover:border-[#2C3628]/20 hover:shadow-md"
          >
            <h3 className="font-semibold text-[#2C3628]">Storage & Shelf Life</h3>
            <p className="mt-2 text-sm text-[#2C3628]/60">
              How to store your THC salt for maximum freshness.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
