"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "../lib/socialLinks";

// --- Types & Utilities ---
type Interest = "seasoning-salt" | "chili-lime";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim().toLowerCase());
}

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState<Set<Interest>>(
    new Set(["seasoning-salt", "chili-lime"])
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
      setInterests(new Set(["seasoning-salt", "chili-lime"]));
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
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0d0d0d]/10 bg-white/40 px-4 py-1.5 text-xs font-medium backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2e7d32]" />
              <span className="uppercase tracking-wide">
                Illinois Launch • Batch 001
              </span>
            </div>

            <h1 className="serif text-5xl font-light italic leading-[1.1] text-[#2e7d32] sm:text-7xl">
              Get high like <br />
              an adult.
            </h1>

            <p className="mt-8 text-lg leading-relaxed text-[#0d0d0d]/80">
              THC-infused seasoning salt and chili-lime seasoning in
              single-serve sachets. 5mg each, designed for dinner parties, not
              dorm rooms.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#waitlist"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#2e7d32] px-8 py-4 text-sm font-medium text-[#f7f3e8] transition-all hover:bg-[#1b5e20]"
              >
                Request Invite
              </a>
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full border border-[#0d0d0d]/20 px-8 py-4 text-sm font-medium text-[#0d0d0d] transition-all hover:bg-[#0d0d0d]/5"
              >
                Meet the Lineup
              </Link>
            </div>
          </div>

          {/* Right: Visual - Two Sachet Images */}
          <div className="relative grid grid-cols-2 gap-4 lg:gap-6">
            {/* Seasoning Salt Sachet */}
            <div className="relative aspect-[2/3] overflow-hidden rounded-[24px] shadow-2xl shadow-[#0d0d0d]/10">
              <Image
                src="/brand/sachet-seasoning-salt.webp"
                alt="Grown THC Infused Seasoning Salt - single-serve sachet"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 rounded-[24px] ring-1 ring-inset ring-black/5" />
            </div>
            {/* Chili-Lime Sachet */}
            <div className="relative aspect-[2/3] translate-y-8 overflow-hidden rounded-[24px] shadow-2xl shadow-[#0d0d0d]/10">
              <Image
                src="/brand/sachet-chili-lime.webp"
                alt="Grown THC Infused Chili-Lime Seasoning - single-serve sachet"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 rounded-[24px] ring-1 ring-inset ring-black/5" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase (The Lineup) */}
      <section id="products" className="grid gap-8 md:grid-cols-2">
        {/* Seasoning Salt Card */}
        <Link
          href="/products#seasoning-salt"
          className="group relative overflow-hidden rounded-[32px] bg-[#e8f5e9] transition-all hover:shadow-xl hover:shadow-[#2e7d32]/10"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/brand/box-seasoning-salt.webp"
              alt="Grown Seasoning Salt 5-pack box"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#e8f5e9] via-transparent to-transparent" />
          </div>
          <div className="relative z-10 p-8 md:p-10">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#2e7d32]">
              SKU 01
            </div>
            <div className="serif mt-1 text-3xl text-[#0d0d0d]">
              Seasoning Salt
            </div>
            <p className="mt-2 text-base text-[#0d0d0d]/70">
              The everyday finisher. Savory, herby, dosed to the pinch.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-[#0d0d0d]/80">
              <li className="flex items-center gap-3">
                <CheckIcon color="#2e7d32" />{" "}
                <span className="font-medium">5mg THC</span> per sachet
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon color="#2e7d32" /> Single-serve, no measuring
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon color="#2e7d32" /> Sold in 5-packs
              </li>
            </ul>
          </div>
        </Link>

        {/* Chili-Lime Card */}
        <Link
          href="/products#chili-lime"
          className="group relative overflow-hidden rounded-[32px] bg-[#fbe7d3] transition-all hover:shadow-xl hover:shadow-[#e65c00]/10"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/brand/box-chili-lime.webp"
              alt="Grown Chili-Lime Seasoning 5-pack box"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#fbe7d3] via-transparent to-transparent" />
          </div>
          <div className="relative z-10 p-8 md:p-10">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#e65c00]">
              SKU 02
            </div>
            <div className="serif mt-1 text-3xl text-[#0d0d0d]">
              Chili-Lime Seasoning
            </div>
            <p className="mt-2 text-base text-[#0d0d0d]/70">
              Heat, citrus, and a little mischief. Made for rims, corn, and
              everything off the grill.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-[#0d0d0d]/80">
              <li className="flex items-center gap-3">
                <CheckIcon color="#e65c00" />{" "}
                <span className="font-medium">5mg THC</span> per sachet
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon color="#e65c00" /> Single-serve, no measuring
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon color="#e65c00" /> Sold in 5-packs
              </li>
            </ul>
          </div>
        </Link>
      </section>

      {/* Social Proof / Vibe Check */}
      <section
        id="philosophy"
        className="my-24 border-y border-[#0d0d0d]/10 py-16 text-center"
      >
        <h2 className="serif text-3xl text-[#0d0d0d] md:text-4xl">
          &ldquo;Finally, edibles that respect <br className="hidden md:block" />{" "}
          my kitchen counter.&rdquo;
        </h2>
        <div className="mt-16 grid grid-cols-2 gap-10 md:grid-cols-4">
          <Feature label="Dosage Control" desc="5mg per sachet, every time." />
          <Feature label="Chef Grade" desc="Ingredients first, THC second." />
          <Feature label="Dinner Ready" desc="Designed to be shared." />
          <Feature label="Clean Label" desc="No solvents, no junk." />
        </div>
      </section>

      {/* Waitlist Form */}
      <section
        id="waitlist"
        className="mx-auto max-w-2xl rounded-[32px] bg-white p-8 shadow-2xl shadow-[#0d0d0d]/5 ring-1 ring-black/5 md:p-14"
      >
        <div className="text-center">
          <h3 className="serif text-4xl text-[#0d0d0d]">The Guest List</h3>
          <p className="mt-4 text-[#0d0d0d]/60">
            We&apos;re launching in small batches to ensure quality. <br />
            Tell us what you&apos;d reach for, and we&apos;ll save your spot.
          </p>
        </div>

        <form onSubmit={onSubmit} className="mt-12 space-y-8">
          {/* Interest Selector */}
          <div>
            <label className="mb-4 block text-center text-xs font-bold uppercase tracking-widest text-[#0d0d0d]/40">
              I want to cook with
            </label>
            <div className="grid grid-cols-2 gap-4">
              <SelectButton
                active={interests.has("seasoning-salt")}
                onClick={() => toggleInterest("seasoning-salt")}
                label="Seasoning Salt"
              />
              <SelectButton
                active={interests.has("chili-lime")}
                onClick={() => toggleInterest("chili-lime")}
                label="Chili-Lime"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#0d0d0d]/40">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="host@dinnerparty.com"
                className="w-full rounded-xl border border-[#0d0d0d]/10 bg-[#f7f3e8] px-4 py-3 text-[#0d0d0d] outline-none transition-all focus:border-[#2e7d32]/40 focus:ring-1 focus:ring-[#2e7d32]/40"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#0d0d0d]/40">
                Zip Code
              </label>
              <input
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                placeholder="60607"
                maxLength={5}
                className="w-full rounded-xl border border-[#0d0d0d]/10 bg-[#f7f3e8] px-4 py-3 text-[#0d0d0d] outline-none transition-all focus:border-[#2e7d32]/40 focus:ring-1 focus:ring-[#2e7d32]/40"
              />
            </div>
          </div>

          <button
            disabled={!canSubmit}
            type="submit"
            className="w-full rounded-xl bg-[#2e7d32] py-4 text-base font-semibold text-[#f7f3e8] shadow-lg shadow-[#2e7d32]/20 transition-all hover:scale-[1.01] hover:bg-[#1b5e20] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? "Saving your spot..." : "Notify Me at Launch"}
          </button>

          {status === "success" && (
            <div
              className="space-y-3 rounded-xl bg-[#a5d6a7]/30 p-4 text-center text-sm font-medium text-[#0d0d0d]"
              role="status"
              aria-live="polite"
            >
              <div>
                <span className="serif italic">Cheers.</span> You&apos;re on
                the list. Follow Grown for launch drops and recipes.
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
                    className="inline-flex items-center gap-2 rounded-full border border-[#0d0d0d]/20 bg-white/60 px-3 py-1.5 text-[#0d0d0d] transition-colors hover:border-[#0d0d0d]/40 hover:text-[#0d0d0d]/90"
                  >
                    <span aria-hidden>{social.icon}</span>
                    <span>{social.name}</span>
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

          <p className="text-center text-xs text-[#0d0d0d]/40">
            Must be 21+ to join. Availability subject to Illinois regulations.
          </p>
        </form>
      </section>
    </>
  );
}

// --- Subcomponents ---

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

function Feature({ label, desc }: { label: string; desc: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 h-1 w-8 bg-[#2e7d32]/40" />
      <div className="text-lg font-semibold text-[#0d0d0d]">{label}</div>
      <div className="mt-1 text-sm text-[#0d0d0d]/60">{desc}</div>
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
            ? "border-[#2e7d32] bg-[#2e7d32] text-[#f7f3e8] shadow-md"
            : "border-[#0d0d0d]/10 bg-white text-[#0d0d0d] hover:border-[#0d0d0d]/30 hover:bg-[#faf9f6]"
        }`}
    >
      {label}
    </button>
  );
}
