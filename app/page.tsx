"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";

// --- Types & Utilities ---
type Interest = "oil" | "salt";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim().toLowerCase());
}

export default function Page() {
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState<Set<Interest>>(new Set(["oil", "salt"]));
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
      {/* Editorial Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;400;600&family=Inter:wght@300;400;500&display=swap');
        
        :root {
          --bg-cream: #F2F0E9;
          --text-forest: #2C3628;
          --accent-clay: #B85C38;
          --soft-sage: #D4D9CD;
        }
        
        body {
          background-color: var(--bg-cream);
          color: var(--text-forest);
          font-family: 'Inter', sans-serif;
        }
        
        h1, h2, h3, .serif {
          font-family: 'Fraunces', serif;
        }

        .bg-noise {
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%;
          opacity: 0.05;
          pointer-events: none;
          z-index: 50;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
      `}</style>

      <div className="relative min-h-screen overflow-hidden selection:bg-[#B85C38] selection:text-white">
        <div className="bg-noise" />

        {/* Ambient Blobs */}
        <div className="fixed inset-0 -z-10 opacity-60">
          <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-[#D4D9CD] blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[#E6DBC6] blur-[80px]" />
        </div>

        {/* Navigation */}
        <header className="relative z-10 mx-auto max-w-6xl px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-lg">
                 {/* Logo File */}
                <Image 
                  src="/logo.png" 
                  alt="Grown Logo" 
                  fill
                  className="object-cover"
                />
              </div>
              <span className="serif text-2xl font-semibold tracking-tight text-[#2C3628]">
                Grown.
              </span>
            </div>
            
            <nav className="hidden sm:flex items-center gap-8 text-sm font-medium text-[#2C3628]/70">
              <a href="#philosophy" className="hover:text-[#2C3628] transition-colors">Philosophy</a>
              <a href="#products" className="hover:text-[#2C3628] transition-colors">The Pantry</a>
              <a href="#waitlist" className="serif italic text-[#B85C38] hover:text-[#9A4A2B] transition-colors">Join the table</a>
            </nav>
          </div>
        </header>

        <main className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
          
          {/* Hero Section */}
          <section className="pt-12 pb-20 md:pt-20 md:pb-32">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              
              {/* Left: Copy */}
              <div className="max-w-xl">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#2C3628]/10 bg-white/40 px-4 py-1.5 text-xs font-medium backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2C3628]" />
                  <span className="tracking-wide uppercase">Colorado Launch • Batch 001</span>
                </div>
                
                <h1 className="serif text-5xl font-light leading-[1.1] text-[#2C3628] sm:text-7xl">
                  Get high like <br/>
                  <span className="italic">an adult.</span>
                </h1>
                
                <p className="mt-8 text-lg leading-relaxed text-[#2C3628]/80">
                  Pantry staples for your unwind era. 
                  Cooking oil and finishing salt designed for dinner parties, 
                  not dorm rooms.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#waitlist"
                    className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#2C3628] px-8 py-4 text-sm font-medium text-[#F2F0E9] transition-all hover:bg-[#1f261c]"
                  >
                    Request Invite
                  </a>
                  <a
                    href="#products"
                    className="inline-flex items-center justify-center rounded-full border border-[#2C3628]/20 px-8 py-4 text-sm font-medium text-[#2C3628] transition-all hover:bg-[#2C3628]/5"
                  >
                    View Collection
                  </a>
                </div>
              </div>

              {/* Right: Visual */}
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-[32px] shadow-2xl shadow-[#2C3628]/10 lg:aspect-square">
                 {/* Landing Image File */}
                <Image
                  src="/landing_image.png"
                  alt="Grown lifestyle moodboard"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Decorative overlay */}
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[32px]" />
              </div>

            </div>
          </section>

          {/* Product Showcase (The Pantry) */}
          <section id="products" className="grid gap-8 md:grid-cols-2">
            {/* Oil Card */}
            <div className="group relative overflow-hidden rounded-[32px] bg-[#E8EAE4] p-8 transition-all hover:shadow-xl hover:shadow-[#2C3628]/5 md:p-12">
              <div className="relative z-10">
                <div className="serif text-3xl text-[#2C3628]">Heirloom Oil</div>
                <p className="mt-2 text-base text-[#2C3628]/70">For sautéing, roasting, and drizzling.</p>
                <ul className="mt-8 space-y-3 text-sm text-[#2C3628]/80">
                  <li className="flex items-center gap-3"><CheckIcon /> <span className="font-medium">5mg THC</span> per tsp</li>
                  <li className="flex items-center gap-3"><CheckIcon /> Cold-pressed olive blend</li>
                  <li className="flex items-center gap-3"><CheckIcon /> Zero &ldquo;weedy&rdquo; aftertaste</li>
                </ul>
              </div>
              <div className="absolute -bottom-12 -right-6 h-64 w-32 rotate-12 rounded-t-full bg-[#2C3628]/5" />
            </div>

            {/* Salt Card */}
            <div className="group relative overflow-hidden rounded-[32px] bg-[#E6DBC6] p-8 transition-all hover:shadow-xl hover:shadow-[#B85C38]/10 md:p-12">
              <div className="relative z-10">
                <div className="serif text-3xl text-[#2C3628]">Flake Salt</div>
                <p className="mt-2 text-base text-[#2C3628]/70">The perfect finishing pinch.</p>
                <ul className="mt-8 space-y-3 text-sm text-[#2C3628]/80">
                  <li className="flex items-center gap-3"><CheckIcon /> <span className="font-medium">2mg THC</span> per pinch</li>
                  <li className="flex items-center gap-3"><CheckIcon /> Harvested grey sea salt</li>
                  <li className="flex items-center gap-3"><CheckIcon /> Fast-acting absorption</li>
                </ul>
              </div>
               <div className="absolute -bottom-12 -right-6 h-40 w-40 rounded-full bg-[#B85C38]/10" />
            </div>
          </section>

          {/* Social Proof / Vibe Check */}
          <section id="philosophy" className="my-24 border-y border-[#2C3628]/10 py-16 text-center">
            <h2 className="serif text-3xl text-[#2C3628] md:text-4xl">
              &ldquo;Finally, edibles that respect <br className="hidden md:block" /> my kitchen counter.&rdquo;
            </h2>
            <div className="mt-16 grid grid-cols-2 gap-10 md:grid-cols-4">
              <Feature label="Dosage Control" desc="Reliable math, every time." />
              <Feature label="Chef Grade" desc="Ingredients first, THC second." />
              <Feature label="Dinner Ready" desc="Designed to be shared." />
              <Feature label="Clean Label" desc="No solvents, no junk." />
            </div>
          </section>

          {/* Waitlist Form */}
          <section id="waitlist" className="mx-auto max-w-2xl rounded-[32px] bg-white p-8 shadow-2xl shadow-[#2C3628]/5 ring-1 ring-black/5 md:p-14">
            <div className="text-center">
              <h3 className="serif text-4xl text-[#2C3628]">The Guest List</h3>
              <p className="mt-4 text-[#2C3628]/60">
                We&apos;re launching in small batches to ensure quality. <br/>
                Tell us what you cook with, and we&apos;ll save your spot.
              </p>
            </div>

            <form onSubmit={onSubmit} className="mt-12 space-y-8">
              
              {/* Interest Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-[#2C3628]/40 mb-4 text-center">
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
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#2C3628]/40 mb-2">
                    Email
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="host@dinnerparty.com"
                    className="w-full rounded-xl border border-[#2C3628]/10 bg-[#F2F0E9] px-4 py-3 text-[#2C3628] outline-none focus:border-[#2C3628]/40 focus:ring-1 focus:ring-[#2C3628]/40 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#2C3628]/40 mb-2">
                    Zip Code
                  </label>
                  <input
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    placeholder="80202"
                    maxLength={5}
                    className="w-full rounded-xl border border-[#2C3628]/10 bg-[#F2F0E9] px-4 py-3 text-[#2C3628] outline-none focus:border-[#2C3628]/40 focus:ring-1 focus:ring-[#2C3628]/40 transition-all"
                  />
                </div>
              </div>

              <button
                disabled={!canSubmit}
                type="submit"
                className="w-full rounded-xl bg-[#2C3628] py-4 text-base font-semibold text-[#F2F0E9] shadow-lg shadow-[#2C3628]/20 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Saving your spot..." : "Notify Me at Launch"}
              </button>

              {status === "success" && (
                <div className="rounded-xl bg-[#D4D9CD]/30 p-4 text-center text-sm font-medium text-[#2C3628]">
                  <span className="serif italic">Cheers.</span> You&apos;re on the list.
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

          {/* Footer */}
          <footer className="mt-24 text-center">
            <div className="serif text-xl font-bold tracking-tight text-[#2C3628]/20">Grown.</div>
            <div className="mt-4 flex justify-center gap-6 text-xs text-[#2C3628]/40">
              <span>© {new Date().getFullYear()}</span>
              <span>21+ Only</span>
              <span>No Medical Claims</span>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}

// --- Subcomponents ---

function CheckIcon() {
  return (
    <svg className="h-4 w-4 text-[#B85C38]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function Feature({ label, desc }: { label: string; desc: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 h-1 w-8 bg-[#B85C38]/40" />
      <div className="font-semibold text-[#2C3628] text-lg">{label}</div>
      <div className="text-sm text-[#2C3628]/60 mt-1">{desc}</div>
    </div>
  );
}

function SelectButton({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative flex items-center justify-center rounded-xl border py-4 text-sm font-medium transition-all
        ${active 
          ? "border-[#2C3628] bg-[#2C3628] text-[#F2F0E9] shadow-md" 
          : "border-[#2C3628]/10 bg-white text-[#2C3628] hover:border-[#2C3628]/30 hover:bg-[#faf9f6]"
        }`}
    >
      {label}
    </button>
  );
}