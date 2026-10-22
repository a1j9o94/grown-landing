import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllRecipeSlugs, getRecipePostBySlug, getAllRecipePosts } from "@/lib/content";
import { MDXContent } from "@/lib/mdx";
import { generateRecipeSchema, generateBreadcrumbSchema, JsonLd } from "@/lib/schema";

export async function generateStaticParams() {
  const slugs = getAllRecipeSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const recipe = getRecipePostBySlug(slug);

  if (!recipe) {
    return { title: "Not Found" };
  }

  return {
    title: `${recipe.frontmatter.title} | Recipes | Grown`,
    description: recipe.frontmatter.description,
    keywords: recipe.frontmatter.keywords,
  };
}

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4 flex-shrink-0 text-[#2E7D32]"
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

export default async function RecipePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const recipe = getRecipePostBySlug(slug);

  if (!recipe) {
    notFound();
  }

  const { frontmatter, content } = recipe;

  // Generate schema data
  const recipeUrl = `https://growncooking.com/recipes/${slug}`;
  const recipeSchema = generateRecipeSchema(frontmatter, recipeUrl);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://growncooking.com" },
    { name: "Recipes", url: "https://growncooking.com/recipes" },
    { name: frontmatter.title, url: recipeUrl },
  ]);

  // Get related recipes
  const allRecipes = getAllRecipePosts();
  const relatedRecipes = allRecipes
    .filter(
      (r) =>
        r.slug !== slug &&
        (r.frontmatter.category === frontmatter.category ||
          frontmatter.relatedRecipes?.includes(r.slug))
    )
    .slice(0, 3);

  const difficultyColors = {
    easy: "bg-green-100 text-green-800",
    medium: "bg-yellow-100 text-yellow-800",
    hard: "bg-red-100 text-red-800",
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <JsonLd data={[recipeSchema, breadcrumbSchema]} />

      <div className="py-12 md:py-20">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-[#0D0D0D]/60">
          <Link href="/recipes" className="hover:text-[#0D0D0D]">
            Recipes
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#0D0D0D]">{frontmatter.title}</span>
        </nav>

        {/* Recipe Header */}
        <header className="mb-12">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${difficultyColors[frontmatter.difficulty]}`}
            >
              {frontmatter.difficulty.charAt(0).toUpperCase() +
                frontmatter.difficulty.slice(1)}
            </span>
            <span className="text-xs text-[#0D0D0D]/40">•</span>
            <span className="text-sm text-[#0D0D0D]/60">
              {frontmatter.servings} servings
            </span>
          </div>

          <h1 className="serif text-4xl text-[#0D0D0D] md:text-5xl">
            {frontmatter.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[#0D0D0D]/70">
            {frontmatter.description}
          </p>

          {/* Time Info */}
          <div className="mt-8 flex flex-wrap gap-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#0D0D0D]/40">
                Prep Time
              </div>
              <div className="mt-1 font-medium text-[#0D0D0D]">
                {formatTime(frontmatter.prepTime)}
              </div>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#0D0D0D]/40">
                Cook Time
              </div>
              <div className="mt-1 font-medium text-[#0D0D0D]">
                {formatTime(frontmatter.cookTime)}
              </div>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#0D0D0D]/40">
                Total Time
              </div>
              <div className="mt-1 font-medium text-[#0D0D0D]">
                {formatTime(frontmatter.totalTime)}
              </div>
            </div>
          </div>
        </header>

        <div className="grid gap-12 lg:grid-cols-[1fr,360px]">
          {/* Main Content */}
          <div>
            {/* Ingredients */}
            <section className="mb-12 rounded-2xl border border-[#0D0D0D]/10 bg-white/50 p-8">
              <h2 className="serif text-2xl text-[#0D0D0D]">Ingredients</h2>
              <ul className="mt-6 space-y-3">
                {frontmatter.ingredients.map((ingredient, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[#0D0D0D]/80"
                  >
                    <CheckIcon />
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Instructions */}
            <section className="mb-12">
              <h2 className="serif mb-6 text-2xl text-[#0D0D0D]">
                Instructions
              </h2>
              <ol className="space-y-6">
                {frontmatter.instructions.map((step, index) => (
                  <li key={index} className="flex gap-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#0D0D0D] text-sm font-medium text-[#F7F3E8]">
                      {index + 1}
                    </div>
                    <p className="pt-1 text-[#0D0D0D]/80">{step}</p>
                  </li>
                ))}
              </ol>
            </section>

            {/* THC Option Callout */}
            {frontmatter.thcOption && (
              <section className="mb-12 rounded-2xl border-2 border-[#2E7D32]/20 bg-[#2E7D32]/5 p-8">
                <h2 className="flex items-center gap-2 text-xl font-semibold text-[#0D0D0D]">
                  <svg
                    className="h-6 w-6 text-[#2E7D32]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  THC Option
                </h2>
                <div className="mt-4 space-y-4 text-[#0D0D0D]/80">
                  {frontmatter.thcOption.oil && (
                    <p>
                      <strong className="text-[#0D0D0D]">Add THC Oil:</strong>{" "}
                      {frontmatter.thcOption.oil}
                    </p>
                  )}
                  {frontmatter.thcOption.salt && (
                    <p>
                      <strong className="text-[#0D0D0D]">Add THC Salt:</strong>{" "}
                      {frontmatter.thcOption.salt}
                    </p>
                  )}
                </div>
              </section>
            )}

            {/* Additional MDX Content */}
            {content && (
              <section className="prose-grown">
                <MDXContent source={content} />
              </section>
            )}

            {/* Storage */}
            {frontmatter.storage && (
              <section className="mt-12 rounded-xl border border-[#0D0D0D]/10 bg-white/30 p-6">
                <h3 className="font-semibold text-[#0D0D0D]">
                  Storage & Leftovers
                </h3>
                <p className="mt-2 text-sm text-[#0D0D0D]/70">
                  {frontmatter.storage}
                </p>
              </section>
            )}

            {/* Tips */}
            {frontmatter.tips && frontmatter.tips.length > 0 && (
              <section className="mt-8">
                <h3 className="font-semibold text-[#0D0D0D]">Tips</h3>
                <ul className="mt-4 space-y-2">
                  {frontmatter.tips.map((tip, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-[#0D0D0D]/70"
                    >
                      <span className="text-[#2E7D32]">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <div className="space-y-6">
              {/* Quick Info Card */}
              <div className="rounded-2xl border border-[#0D0D0D]/10 bg-white/50 p-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#0D0D0D]/40">
                  Quick Info
                </h4>
                <dl className="mt-4 space-y-4">
                  <div>
                    <dt className="text-sm text-[#0D0D0D]/60">Difficulty</dt>
                    <dd className="font-medium text-[#0D0D0D]">
                      {frontmatter.difficulty.charAt(0).toUpperCase() +
                        frontmatter.difficulty.slice(1)}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-[#0D0D0D]/60">Servings</dt>
                    <dd className="font-medium text-[#0D0D0D]">
                      {frontmatter.servings}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-[#0D0D0D]/60">Total Time</dt>
                    <dd className="font-medium text-[#0D0D0D]">
                      {formatTime(frontmatter.totalTime)}
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Related Recipes */}
              {relatedRecipes.length > 0 && (
                <div className="rounded-2xl border border-[#0D0D0D]/10 bg-white/50 p-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#0D0D0D]/40">
                    Related Recipes
                  </h4>
                  <ul className="mt-4 space-y-3">
                    {relatedRecipes.map((related) => (
                      <li key={related.slug}>
                        <Link
                          href={`/recipes/${related.slug}`}
                          className="text-sm text-[#0D0D0D] transition-colors hover:text-[#2E7D32]"
                        >
                          {related.frontmatter.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Learn More */}
              <div className="rounded-2xl bg-[#0D0D0D] p-6 text-center">
                <p className="text-sm text-[#F7F3E8]/80">
                  New to cooking with THC?
                </p>
                <Link
                  href="/learn/cooking-with-thc-oil"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#F7F3E8] px-4 py-2 text-sm font-medium text-[#0D0D0D] transition-all hover:bg-white"
                >
                  Read the Guide
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* Back Link */}
        <div className="mt-16 border-t border-[#0D0D0D]/10 pt-8">
          <Link
            href="/recipes"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#2E7D32] hover:text-[#1B5E20]"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to all recipes
          </Link>
        </div>
      </div>
    </>
  );
}

// Helper to format ISO 8601 duration to human readable
function formatTime(duration: string): string {
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?/);
  if (!match) return duration;

  const hours = match[1] ? parseInt(match[1]) : 0;
  const minutes = match[2] ? parseInt(match[2]) : 0;

  if (hours && minutes) {
    return `${hours}h ${minutes}m`;
  } else if (hours) {
    return `${hours}h`;
  } else {
    return `${minutes} min`;
  }
}
