import type { Metadata } from "next";
import Link from "next/link";
import { getLearnPostsByCategory } from "@/lib/content";

export const metadata: Metadata = {
  title: "Learn | Grown",
  description:
    "Guides and resources for cooking with THC oil and salt. From timing basics to flavor pairing, master the art of elevated cooking.",
};

export default function LearnPage() {
  const postsByCategory = getLearnPostsByCategory();
  const categories = Object.keys(postsByCategory);

  // Define category order
  const categoryOrder = [
    "Getting Started",
    "Fundamentals",
    "Techniques",
    "Care & Storage",
    "Reference",
  ];

  const sortedCategories = categoryOrder.filter((cat) => categories.includes(cat));
  // Add any categories not in our predefined order
  const remainingCategories = categories.filter(
    (cat) => !categoryOrder.includes(cat)
  );
  const allCategories = [...sortedCategories, ...remainingCategories];

  return (
    <div className="py-12 md:py-20">
      {/* Hero */}
      <div className="mb-16 text-center">
        <h1 className="serif text-4xl text-[#2C3628] md:text-5xl">Learn</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-[#2C3628]/70">
          Guides and resources for cooking with THC. From timing basics to
          flavor pairing, become a confident host.
        </p>
      </div>

      {/* Guides by Category */}
      {allCategories.map((category) => (
        <section key={category} className="mb-12">
          <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-[#2C3628]/40">
            {category}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {postsByCategory[category].map((post) => (
              <Link
                key={post.slug}
                href={`/learn/${post.slug}`}
                className="group rounded-2xl border border-[#2C3628]/10 bg-white/50 p-6 transition-all hover:border-[#2C3628]/20 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-[#2C3628] group-hover:text-[#B85C38]">
                  {post.frontmatter.title}
                </h3>
                <p className="mt-2 text-sm text-[#2C3628]/60">
                  {post.frontmatter.description}
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#B85C38]">
                  Read guide
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
      ))}

      {/* CTA */}
      <section className="mt-16 rounded-[24px] bg-[#2C3628] p-8 text-center md:p-12">
        <h2 className="serif text-2xl text-[#F2F0E9] md:text-3xl">
          Ready to start cooking?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[#F2F0E9]/70">
          Browse our collection of THC-friendly recipes designed for home cooks.
        </p>
        <Link
          href="/recipes"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#F2F0E9] px-6 py-3 text-sm font-medium text-[#2C3628] transition-all hover:bg-white"
        >
          View Recipes
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </section>
    </div>
  );
}
