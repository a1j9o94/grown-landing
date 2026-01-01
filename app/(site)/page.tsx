"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "../lib/socialLinks";

// --- Types & Utilities ---
type Interest = "oil" | "salt";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim().toLowerCase());
}

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState<Set<Interest>>(
    new Set(["oil", "salt"])
  );
  const [zip, setZip] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const canSubmit = useMemo(() => {
    return isValidEmail(email) && interests.size > 0 && !isSubmitting;
  }, [email, interests, isSubmitting]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("idle");
    setErrorMsg("");

    const cleanedEmail = email.trim().toLowerCase();

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: cleanedEmail,
          interests: Array.from(interests),
          zip: zip.trim() || null,
          source: "landing",
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Something went sideways. Try again.");
      }

      setStatus("success");
      setEmail("");
      setZip("");
      setInterests(new Set(["oil", "salt"]));
    } catch (err: unknown) {
      console.error(err);
      setStatus("error");
      setErrorMsg("Couldn't join the list. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function toggleInterest(i: Interest) {
    setInterests((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pb-20 pt-12 md:pb-32 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: Copy */}
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#2C3628]/10 bg-white/40 px-4 py-1.5 text-xs font-medium backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2C3628]" />
              <span className="uppercase tracking-wide">
                Colorado Launch • Batch 001
              </span>
            </div>

            <h1 className="serif text-5xl font-light leading-[1.1] text-[#2C3628] sm:text-7xl">
              Get high like <br />
              <span className="italic">an adult.</span>
            </h1>

            <p className="mt-8 text-lg leading-relaxed text-[#2C3628]/80">
              Pantry staples for your unwind era. Cooking oil and finishing salt
              designed for dinner parties, not dorm rooms.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#waitlist"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#2C3628] px-8 py-4 text-sm font-medium text-[#F2F0E9] transition-all hover:bg-[#1f261c]"
              >
                Request Invite
              </a>
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full border border-[#2C3628]/20 px-8 py-4 text-sm font-medium text-[#2C3628] transition-all hover:bg-[#2C3628]/5"
              >
                View Collection
              </Link>
            </div>
          </div>

          {/* Right: Visual - Two Product Images */}
          <div className="relative grid grid-cols-2 gap-4 lg:gap-6">
            {/* Oil Image */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-[24px] shadow-2xl shadow-[#2C3628]/10">
              <Image
                src="/oil_image.png"
                alt="Grown Heirloom Oil - THC Infused"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 rounded-[24px] ring-1 ring-inset ring-black/5" />
            </div>
            {/* Salt Image */}
            <div className="relative aspect-[3/4] translate-y-8 overflow-hidden rounded-[24px] shadow-2xl shadow-[#2C3628]/10">
              <Image
                src="/salt_image.png"
                alt="Grown Finishing Salt - THC Infused"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 rounded-[24px] ring-1 ring-inset ring-black/5" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase (The Pantry) */}
      <section id="products" className="grid gap-8 md:grid-cols-2">
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
          </div>
        </Link>
      </section>

      {/* Social Proof / Vibe Check */}
      <section
        id="philosophy"
        className="my-24 border-y border-[#2C3628]/10 py-16 text-center"
      >
        <h2 className="serif text-3xl text-[#2C3628] md:text-4xl">
          &ldquo;Finally, edibles that respect <br className="hidden md:block" />{" "}
          my kitchen counter.&rdquo;
        </h2>
        <div className="mt-16 grid grid-cols-2 gap-10 md:grid-cols-4">
          <Feature label="Dosage Control" desc="Reliable math, every time." />
          <Feature label="Chef Grade" desc="Ingredients first, THC second." />
          <Feature label="Dinner Ready" desc="Designed to be shared." />
          <Feature label="Clean Label" desc="No solvents, no junk." />
        </div>
      </section>

      {/* Waitlist Form */}
      <section
        id="waitlist"
        className="mx-auto max-w-2xl rounded-[32px] bg-white p-8 shadow-2xl shadow-[#2C3628]/5 ring-1 ring-black/5 md:p-14"
      >
        <div className="text-center">
          <h3 className="serif text-4xl text-[#2C3628]">The Guest List</h3>
          <p className="mt-4 text-[#2C3628]/60">
            We&apos;re launching in small batches to ensure quality. <br />
            Tell us what you cook with, and we&apos;ll save your spot.
          </p>
        </div>

        <form onSubmit={onSubmit} className="mt-12 space-y-8">
          {/* Interest Selector */}
          <div>
            <label className="mb-4 block text-center text-xs font-bold uppercase tracking-widest text-[#2C3628]/40">
              I want to cook with
            </label>
            <div className="grid grid-cols-2 gap-4">
              <SelectButton
                active={interests.has("oil")}
                onClick={() => toggleInterest("oil")}
                label="Infused Oil"
              />
              <SelectButton
                active={interests.has("salt")}
                onClick={() => toggleInterest("salt")}
                label="Finishing Salt"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#2C3628]/40">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="host@dinnerparty.com"
                className="w-full rounded-xl border border-[#2C3628]/10 bg-[#F2F0E9] px-4 py-3 text-[#2C3628] outline-none transition-all focus:border-[#2C3628]/40 focus:ring-1 focus:ring-[#2C3628]/40"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#2C3628]/40">
                Zip Code
              </label>
              <input
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                placeholder="80202"
                maxLength={5}
                className="w-full rounded-xl border border-[#2C3628]/10 bg-[#F2F0E9] px-4 py-3 text-[#2C3628] outline-none transition-all focus:border-[#2C3628]/40 focus:ring-1 focus:ring-[#2C3628]/40"
              />
            </div>
          </div>

          <button
            disabled={!canSubmit}
            type="submit"
            className="w-full rounded-xl bg-[#2C3628] py-4 text-base font-semibold text-[#F2F0E9] shadow-lg shadow-[#2C3628]/20 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? "Saving your spot..." : "Notify Me at Launch"}
          </button>

          {status === "success" && (
            <div
              className="space-y-3 rounded-xl bg-[#D4D9CD]/30 p-4 text-center text-sm font-medium text-[#2C3628]"
              role="status"
              aria-live="polite"
            >
              <div>
                <span className="serif italic">Cheers.</span> You&apos;re on the
                list. Follow Grown for launch drops and recipes.
              </div>
              <div className="flex flex-wrap justify-center gap-3 text-xs font-semibold">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    title={social.ariaLabel}
                    className="inline-flex items-center gap-1 rounded-full border border-[#2C3628]/20 bg-white/60 px-3 py-1.5 text-[#2C3628] transition-colors hover:border-[#2C3628]/40 hover:text-[#2C3628]/90"
                  >
                    {social.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {status === "error" && (
            <div className="rounded-xl bg-red-50 p-4 text-center text-sm font-medium text-red-800">
              {errorMsg}
            </div>
          )}

          <p className="text-center text-xs text-[#2C3628]/40">
            Must be 21+ to join. Availability subject to Colorado regulations.
          </p>
        </form>
      </section>
    </>
  );
}

// --- Subcomponents ---

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

function Feature({ label, desc }: { label: string; desc: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 h-1 w-8 bg-[#B85C38]/40" />
      <div className="text-lg font-semibold text-[#2C3628]">{label}</div>
      <div className="mt-1 text-sm text-[#2C3628]/60">{desc}</div>
    </div>
  );
}

function SelectButton({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative flex items-center justify-center rounded-xl border py-4 text-sm font-medium transition-all
        ${
          active
            ? "border-[#2C3628] bg-[#2C3628] text-[#F2F0E9] shadow-md"
            : "border-[#2C3628]/10 bg-white text-[#2C3628] hover:border-[#2C3628]/30 hover:bg-[#faf9f6]"
        }`}
    >
      {label}
    </button>
  );
}
