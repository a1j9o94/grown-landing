import type { Metadata } from "next";
import Link from "next/link";
import { getRecipesByCategory } from "@/lib/content";

export const metadata: Metadata = {
  title: "Snacks & Sides Recipes | Grown",
  description: "Small bites and accompaniments. THC-infused recipes for elevated entertaining.",
};

export default function SnacksSidesPage() {
  const recipes = getRecipesByCategory("snacks-sides");

  return (
    <div className="py-12 md:py-20">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-[#2C3628]/60">
        <Link href="/recipes" className="hover:text-[#2C3628]">
          Recipes
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[#2C3628]">Snacks & Sides</span>
      </nav>

      {/* Header */}
      <div className="mb-12">
        <h1 className="serif text-4xl text-[#2C3628] md:text-5xl">Snacks & Sides</h1>
        <p className="mt-4 text-lg text-[#2C3628]/70">
          Small bites and accompaniments.
        </p>
      </div>

      {/* Recipe Grid */}
      {recipes.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <Link
              key={recipe.slug}
              href={`/recipes/${recipe.slug}`}
              className="group rounded-2xl border border-[#2C3628]/10 bg-white/50 p-6 transition-all hover:border-[#2C3628]/20 hover:shadow-md"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                  {recipe.frontmatter.difficulty}
                </span>
                <span className="text-xs text-[#2C3628]/40">•</span>
                <span className="text-xs text-[#2C3628]/60">
                  {formatTime(recipe.frontmatter.totalTime)}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-[#2C3628] group-hover:text-[#B85C38]">
                {recipe.frontmatter.title}
              </h3>
              <p className="mt-2 text-sm text-[#2C3628]/60 line-clamp-2">
                {recipe.frontmatter.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-[#2C3628]/40">
                  {recipe.frontmatter.servings} servings
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-[#B85C38]">
                  View recipe
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-[24px] border border-[#2C3628]/10 bg-white/50 p-12 text-center">
          <h2 className="serif text-2xl text-[#2C3628]">Coming Soon</h2>
          <p className="mx-auto mt-4 max-w-md text-[#2C3628]/60">
            We&apos;re testing snacks and sides recipes. Join the waitlist to be notified.
          </p>
          <Link href="/#waitlist" className="mt-8 inline-flex rounded-full bg-[#2C3628] px-6 py-3 text-sm font-medium text-[#F2F0E9]">
            Join the Waitlist
          </Link>
        </div>
      )}

      {/* Other Categories */}
      <section className="mt-16">
        <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-[#2C3628]/40">Other Categories</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/recipes/dinners" className="rounded-full border border-[#2C3628]/20 px-4 py-2 text-sm text-[#2C3628] hover:bg-[#2C3628]/5">
            Dinners
          </Link>
          <Link href="/recipes/desserts" className="rounded-full border border-[#2C3628]/20 px-4 py-2 text-sm text-[#2C3628] hover:bg-[#2C3628]/5">
            Desserts
          </Link>
        </div>
      </section>

      <div className="mt-12">
        <Link href="/recipes" className="inline-flex items-center gap-2 text-sm font-medium text-[#B85C38]">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          All recipes
        </Link>
      </div>
    </div>
  );
}

function formatTime(duration: string): string {
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?/);
  if (!match) return duration;
  const hours = match[1] ? parseInt(match[1]) : 0;
  const minutes = match[2] ? parseInt(match[2]) : 0;
  if (hours && minutes) return `${hours}h ${minutes}m`;
  if (hours) return `${hours}h`;
  return `${minutes}m`;
}
