// app/page.tsx Changing the page
"use client";

import React, { useMemo, useState } from "react";

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
    if (!isValidEmail(cleanedEmail)) {
      setStatus("error");
      setErrorMsg("Use a real email (so we can actually invite you).");
      return;
    }
    if (interests.size === 0) {
      setStatus("error");
      setErrorMsg("Pick at least one product.");
      return;
    }

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
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err?.message || "Couldn’t submit. Try again.");
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
    <div className="min-h-screen bg-[#fbf7f2] text-[#1f1a17]">
      {/* soft background wash */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 500px at 15% 10%, rgba(244, 178, 178, 0.35), transparent 60%), radial-gradient(900px 500px at 85% 20%, rgba(176, 208, 186, 0.35), transparent 55%), radial-gradient(800px 500px at 45% 90%, rgba(230, 205, 170, 0.35), transparent 55%)",
        }}
      />

      {/* Header */}
      <header className="mx-auto max-w-6xl px-6 py-7">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-white/70 ring-1 ring-black/5 shadow-sm flex items-center justify-center">
              <span className="text-sm font-semibold tracking-wide">G</span>
            </div>
            <div className="leading-tight">
              <div className="text-base font-semibold tracking-tight">Grown</div>
              <div className="text-xs text-black/60">Get high like an adult</div>
            </div>
          </div>

          <nav className="hidden sm:flex items-center gap-6 text-sm text-black/70">
            <a className="hover:text-black" href="#products">
              Products
            </a>
            <a className="hover:text-black" href="#how">
              How it works
            </a>
            <a
              className="rounded-full bg-[#1f1a17] px-4 py-2 text-xs font-semibold text-[#fbf7f2] hover:bg-black"
              href="#waitlist"
            >
              Join waitlist
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-20">
        {/* Hero */}
        <section className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs text-black/70 ring-1 ring-black/5 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#2f7d4a]" />
              Colorado launch • first batch list is open
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
              Pantry staples for your
              <span className="block">“one glass of wine” era.</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-black/70">
              A grown-up way to cook with THC—starting with a{" "}
              <span className="font-medium text-black">cooking oil</span> and{" "}
              <span className="font-medium text-black">finishing salt</span>.
              Subtle, consistent, and designed for food people.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center rounded-full bg-[#1f1a17] px-6 py-3 text-sm font-semibold text-[#fbf7f2] hover:bg-black"
              >
                Get on the list
              </a>
              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-full bg-white/70 px-6 py-3 text-sm font-semibold text-black ring-1 ring-black/5 shadow-sm hover:bg-white"
              >
                See the first two
              </a>
            </div>

            <p className="mt-5 text-xs text-black/55">
              21+ only. No medical claims. Availability depends on local regulations.
            </p>

            {/* mini social-proof style chips */}
            <div className="mt-7 flex flex-wrap gap-2 text-xs">
              <Chip>Clean label</Chip>
              <Chip>Measured guidance</Chip>
              <Chip>Food-first flavor</Chip>
              <Chip>Not a novelty brand</Chip>
            </div>
          </div>

          {/* Hero visual card */}
          <div className="relative">
            <div className="rounded-[28px] bg-white/70 ring-1 ring-black/5 shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold">First drop</div>
                  <div className="mt-1 text-sm text-black/65">
                    Two staples. One calm, confident vibe.
                  </div>
                </div>
                <div className="rounded-full bg-[#fbf7f2] px-3 py-1 text-xs font-semibold text-black/70 ring-1 ring-black/5">
                  Batch #1
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2" id="products">
                <ProductCard
                  title="THC Cooking Oil"
                  subtitle="Sauté, roast, drizzle"
                  note="Designed for savory cooking and gentle dosing."
                  accent="bg-[#f3d6d6]"
                />
                <ProductCard
                  title="THC Finishing Salt"
                  subtitle="Sprinkle, taste, relax"
                  note="A little pinch does the thing."
                  accent="bg-[#d7eadf]"
                />
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <SoftFeature title="Measured guidance" desc="Clear mg/serving direction." />
                <SoftFeature title="Ingredient-forward" desc="No mystery blends." />
                <SoftFeature title="Hosting energy" desc="Goes with snacks, not stoner lore." />
              </div>

              <div className="mt-6 rounded-2xl bg-[#fbf7f2] p-4 ring-1 ring-black/5">
                <div className="text-xs font-semibold text-black/70">What you’ll get</div>
                <ul className="mt-2 space-y-1 text-sm text-black/70">
                  <li>• Early access + launch link</li>
                  <li>• First-batch bundle option</li>
                  <li>• Simple, actually-useful recipes</li>
                </ul>
              </div>
            </div>

            {/* little decorative corner */}
            <div
              aria-hidden
              className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#1f1a17]/5 blur-xl"
            />
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="mt-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">How it works</h2>
              <p className="mt-2 text-sm text-black/65">
                Keep it simple. Keep it classy. Keep it compliant.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Step
              n="1"
              title="Join the waitlist"
              desc="Pick oil, salt, or both. Add your ZIP so we can prioritize launch regions."
            />
            <Step
              n="2"
              title="Get the early link"
              desc="We email when the first batch is ready—no constant blasting."
            />
            <Step
              n="3"
              title="Cook + unwind"
              desc="A calmer alternative to the “another glass?” loop."
            />
          </div>
        </section>

        {/* Waitlist */}
        <section id="waitlist" className="mt-16">
          <div className="rounded-[28px] bg-white/70 ring-1 ring-black/5 shadow-lg p-6 sm:p-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Join the waitlist</h2>
                <p className="mt-2 text-sm text-black/65">
                  One email. No spam. Just the invite.
                </p>
              </div>
              <div className="text-xs text-black/55">21+ only</div>
            </div>

            <form onSubmit={onSubmit} className="mt-6 grid gap-4 md:grid-cols-12">
              <div className="md:col-span-5">
                <label className="text-xs font-semibold text-black/60">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@domain.com"
                  className="mt-2 w-full rounded-full bg-white px-4 py-3 text-sm text-black ring-1 ring-black/10 shadow-sm outline-none focus:ring-2 focus:ring-[#1f1a17]/40"
                  inputMode="email"
                  autoComplete="email"
                />
              </div>

              <div className="md:col-span-3">
                <label className="text-xs font-semibold text-black/60">ZIP (optional)</label>
                <input
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  placeholder="80202"
                  className="mt-2 w-full rounded-full bg-white px-4 py-3 text-sm text-black ring-1 ring-black/10 shadow-sm outline-none focus:ring-2 focus:ring-[#1f1a17]/40"
                  inputMode="numeric"
                  autoComplete="postal-code"
                />
              </div>

              <div className="md:col-span-4">
                <label className="text-xs font-semibold text-black/60">Interested in</label>
                <div className="mt-2 flex gap-2">
                  <PillToggle
                    on={interests.has("oil")}
                    label="THC Oil"
                    onClick={() => toggleInterest("oil")}
                  />
                  <PillToggle
                    on={interests.has("salt")}
                    label="THC Salt"
                    onClick={() => toggleInterest("salt")}
                  />
                </div>
              </div>

              <div className="md:col-span-12 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  disabled={!canSubmit}
                  className="inline-flex items-center justify-center rounded-full bg-[#1f1a17] px-6 py-3 text-sm font-semibold text-[#fbf7f2] hover:bg-black disabled:opacity-40 disabled:cursor-not-allowed"
                  type="submit"
                >
                  {isSubmitting ? "Adding you..." : "Notify me at launch"}
                </button>

                <div className="text-xs text-black/55">
                  By joining, you agree to be contacted about Grown’s launch.
                </div>
              </div>

              {status === "success" && (
                <div className="md:col-span-12 rounded-2xl bg-[#d7eadf] p-4 text-sm text-black/80 ring-1 ring-black/5">
                  You’re on the list. We’ll email when batch #1 is ready.
                </div>
              )}

              {status === "error" && (
                <div className="md:col-span-12 rounded-2xl bg-[#f3d6d6] p-4 text-sm text-black/80 ring-1 ring-black/5">
                  {errorMsg || "Something went wrong. Try again."}
                </div>
              )}
            </form>

            <div className="mt-6 text-xs text-black/50">
              Note: products are intended for adults 21+. No medical claims. We follow local regulations.
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pb-10 text-xs text-black/55">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} Grown</div>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <span>21+ only</span>
              <span>No medical claims</span>
              <span>Subject to local laws</span>
              <span className="text-black/40">grownthc.com</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

/* --- components --- */

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-white/70 px-3 py-1 text-xs text-black/70 ring-1 ring-black/5 shadow-sm">
      {children}
    </span>
  );
}

function ProductCard({
  title,
  subtitle,
  note,
  accent,
}: {
  title: string;
  subtitle: string;
  note: string;
  accent: string;
}) {
  return (
    <div className="rounded-[22px] bg-white p-4 ring-1 ring-black/5 shadow-sm">
      <div className="flex items-start gap-3">
        <div className={`h-10 w-10 rounded-2xl ${accent} ring-1 ring-black/5`} />
        <div className="min-w-0">
          <div className="text-sm font-semibold">{title}</div>
          <div className="mt-0.5 text-xs text-black/60">{subtitle}</div>
        </div>
      </div>
      <div className="mt-3 text-sm text-black/70">{note}</div>
      <div className="mt-4 inline-flex rounded-full bg-[#fbf7f2] px-3 py-1 text-xs font-semibold text-black/70 ring-1 ring-black/5">
        coming soon
      </div>
    </div>
  );
}

function SoftFeature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl bg-white/70 p-4 ring-1 ring-black/5 shadow-sm">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-1 text-sm text-black/65">{desc}</div>
    </div>
  );
}

function Step({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div className="rounded-[28px] bg-white/70 p-6 ring-1 ring-black/5 shadow-sm">
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[#1f1a17] text-[#fbf7f2] text-sm font-semibold">
        {n}
      </div>
      <div className="mt-4 text-sm font-semibold">{title}</div>
      <div className="mt-2 text-sm text-black/65">{desc}</div>
    </div>
  );
}

function PillToggle({ on, label, onClick }: { on: boolean; label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-full px-4 py-3 text-sm font-semibold ring-1 shadow-sm transition",
        on
          ? "bg-[#1f1a17] text-[#fbf7f2] ring-black/10"
          : "bg-white/80 text-black ring-black/10 hover:bg-white",
      ].join(" ")}
      aria-pressed={on}
    >
      {label}
    </button>
  );
}