import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Grown",
  description:
    "We make THC-infused pantry staples for adults who take their cooking seriously. Based in Illinois, launching soon.",
};

export default function AboutPage() {
  return (
    <div className="py-12 md:py-20">
      {/* Hero */}
      <div className="mb-16 max-w-3xl">
        <h1 className="serif text-4xl text-[#2C3628] md:text-5xl">
          Get high like an adult.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-[#2C3628]/70">
          We&apos;re building pantry staples for people who take their cooking
          and their unwind time equally seriously. No more mystery brownies or
          overly sweet gummies—just chef-grade ingredients designed for dinner
          parties, not dorm rooms.
        </p>
      </div>

      {/* Philosophy */}
      <section className="mb-24">
        <h2 className="mb-8 text-xs font-bold uppercase tracking-widest text-[#2C3628]/40">
          Our Philosophy
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-[24px] bg-white/50">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/about/ingredients-first.png"
                alt="Premium ingredients"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold text-[#2C3628]">
                Ingredients First
              </h3>
              <p className="mt-3 text-[#2C3628]/70">
                We start with premium cooking oils and finishing salts, then add
                THC. Never the other way around. The result is a product you
                actually want to cook with.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-[24px] bg-white/50">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/about/reliable-dosing.png"
                alt="Reliable dosing"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold text-[#2C3628]">
                Reliable Dosing
              </h3>
              <p className="mt-3 text-[#2C3628]/70">
                No guesswork. Every teaspoon, every pinch delivers the same
                experience. Because hosting a dinner party is stressful enough
                without wondering if you overdid it.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-[24px] bg-white/50">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/about/for-sharing.png"
                alt="Designed for sharing"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold text-[#2C3628]">
                Designed to Share
              </h3>
              <p className="mt-3 text-[#2C3628]/70">
                Our products are made for meals, not solo sessions. The dosing,
                the packaging, the recipes—everything is designed for the table.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-[24px] bg-white/50">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/about/transparent-quality.png"
                alt="Transparent quality"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold text-[#2C3628]">
                Transparent Quality
              </h3>
              <p className="mt-3 text-[#2C3628]/70">
                Third-party tested. No solvents. No junk. We believe if you
                wouldn&apos;t cook with an ingredient sober, you shouldn&apos;t
                cook with it elevated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Illinois */}
      <section className="mb-24 rounded-[32px] bg-[#2C3628] p-8 md:p-12">
        <div className="max-w-2xl">
          <h2 className="serif text-3xl text-[#F2F0E9]">Based in Illinois</h2>
          <p className="mt-4 text-[#F2F0E9]/70">
            We&apos;re launching in Illinois first—a state with one of the
            most mature and well-regulated cannabis markets in the country.
            Every batch is produced and tested in accordance with
            Illinois regulations.
          </p>
          <p className="mt-4 text-[#F2F0E9]/70">
            Expansion to additional states is on the roadmap, but we&apos;re
            taking it slow. Quality over speed, always.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="serif text-2xl text-[#2C3628]">
          Interested in Grown?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[#2C3628]/60">
          We&apos;re launching soon to a limited group. Join the waitlist to be
          among the first.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/#waitlist"
            className="inline-flex items-center justify-center rounded-full bg-[#2C3628] px-6 py-3 text-sm font-medium text-[#F2F0E9] transition-all hover:bg-[#1f261c]"
          >
            Join the Waitlist
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-[#2C3628]/20 px-6 py-3 text-sm font-medium text-[#2C3628] transition-all hover:bg-[#2C3628]/5"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
