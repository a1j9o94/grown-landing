import type { Metadata } from "next";
import Link from "next/link";
import { getAllRecipePosts, recipeCategories } from "@/lib/content";
import { RecipeCard } from "@/app/components/RecipeCard";

export const metadata: Metadata = {
  title: "Recipes | Grown",
  description:
    "THC-friendly recipes for the home cook. From dinners to desserts, discover dishes designed for elevated entertaining.",
};

export default function RecipesPage() {
  const allRecipes = getAllRecipePosts();

  // Group recipes by category
  const recipesByCategory: Record<string, typeof allRecipes> = {};
  for (const recipe of allRecipes) {
    const cat = recipe.frontmatter.category;
    if (!recipesByCategory[cat]) {
      recipesByCategory[cat] = [];
    }
    recipesByCategory[cat].push(recipe);
  }

  const categories = Object.entries(recipeCategories).map(([slug, info]) => ({
    slug,
    ...info,
    count: recipesByCategory[slug]?.length || 0,
  }));

  // Get featured recipes (first 3)
  const featuredRecipes = allRecipes.slice(0, 3);

  return (
    <div className="py-12 md:py-20">
      {/* Hero */}
      <div className="mb-16 text-center">
        <h1 className="serif text-4xl text-[#2C3628] md:text-5xl">Recipes</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-[#2C3628]/70">
          THC-friendly recipes designed for home cooks. Each recipe includes a
          &ldquo;THC Option&rdquo; so you can choose your own adventure.
        </p>
      </div>

      {/* Featured Recipes */}
      {featuredRecipes.length > 0 && (
        <section className="mb-16">
          <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-[#2C3628]/40">
            Featured Recipes
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredRecipes.map((recipe) => (
              <RecipeCard key={recipe.slug} recipe={recipe} size="large" />
            ))}
          </div>
        </section>
      )}

      {/* Categories Grid */}
      <section className="mb-16">
        <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-[#2C3628]/40">
          Browse by Category
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/recipes/${category.slug}`}
              className="group relative overflow-hidden rounded-[24px] bg-[#2C3628]/5 p-8 transition-all hover:bg-[#2C3628]/10"
            >
              <h3 className="serif text-2xl text-[#2C3628]">{category.title}</h3>
              <p className="mt-2 text-sm text-[#2C3628]/60">
                {category.description}
              </p>
              <div className="mt-4 text-xs text-[#2C3628]/40">
                {category.count} {category.count === 1 ? "recipe" : "recipes"}
              </div>
              <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#B85C38]">
                Browse recipes
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* All Recipes */}
      {allRecipes.length > 0 && (
        <section>
          <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-[#2C3628]/40">
            All Recipes
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {allRecipes.map((recipe) => (
              <RecipeCard key={recipe.slug} recipe={recipe} size="small" />
            ))}
          </div>
        </section>
      )}

      {/* No Recipes Yet */}
      {allRecipes.length === 0 && (
        <section className="rounded-[24px] border border-[#2C3628]/10 bg-white/50 p-8 text-center md:p-12">
          <h2 className="serif text-2xl text-[#2C3628]">Recipes Coming Soon</h2>
          <p className="mx-auto mt-4 max-w-md text-[#2C3628]/60">
            We&apos;re crafting a collection of chef-tested recipes perfect for
            cooking with THC oil and salt. Join the waitlist to be notified when
            they launch.
          </p>
          <Link
            href="/#waitlist"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#2C3628] px-6 py-3 text-sm font-medium text-[#F2F0E9] transition-all hover:bg-[#1f261c]"
          >
            Join the Waitlist
          </Link>
        </section>
      )}

      {/* Learn Section */}
      <section className="mt-16">
        <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-[#2C3628]/40">
          Before You Cook
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="/learn/cooking-with-thc-oil"
            className="rounded-2xl border border-[#2C3628]/10 bg-white/50 p-6 transition-all hover:border-[#2C3628]/20 hover:shadow-md"
          >
            <h3 className="font-semibold text-[#2C3628]">
              Cooking with THC Oil
            </h3>
            <p className="mt-2 text-sm text-[#2C3628]/60">
              A complete guide to incorporating THC oil into your cooking.
            </p>
          </Link>
          <Link
            href="/learn/edibles-timing-basics"
            className="rounded-2xl border border-[#2C3628]/10 bg-white/50 p-6 transition-all hover:border-[#2C3628]/20 hover:shadow-md"
          >
            <h3 className="font-semibold text-[#2C3628]">
              Edibles Timing Basics
            </h3>
            <p className="mt-2 text-sm text-[#2C3628]/60">
              Understanding onset, peak, and duration for your meals.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
