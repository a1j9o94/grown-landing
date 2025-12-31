import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllLearnSlugs, getLearnPostBySlug, getAllLearnPosts } from "@/lib/content";
import { MDXContent } from "@/lib/mdx";

export async function generateStaticParams() {
  const slugs = getAllLearnSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getLearnPostBySlug(slug);

  if (!post) {
    return { title: "Not Found" };
  }

  return {
    title: `${post.frontmatter.title} | Learn | Grown`,
    description: post.frontmatter.description,
    keywords: post.frontmatter.keywords,
  };
}

export default async function LearnGuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getLearnPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get related posts for the sidebar
  const allPosts = getAllLearnPosts();
  const relatedPosts = allPosts
    .filter(
      (p) =>
        p.slug !== slug &&
        (p.frontmatter.category === post.frontmatter.category ||
          post.frontmatter.keywords?.some((kw) =>
            p.frontmatter.keywords?.includes(kw)
          ))
    )
    .slice(0, 3);

  return (
    <div className="py-12 md:py-20">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-[#2C3628]/60">
        <Link href="/learn" className="hover:text-[#2C3628]">
          Learn
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[#2C3628]">{post.frontmatter.title}</span>
      </nav>

      <div className="grid gap-12 lg:grid-cols-[1fr,280px]">
        {/* Main Article */}
        <article className="max-w-3xl">
          <header className="mb-12">
            <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#B85C38]">
              {post.frontmatter.category}
            </div>
            <h1 className="serif text-4xl text-[#2C3628] md:text-5xl">
              {post.frontmatter.title}
            </h1>
            <p className="mt-4 text-lg text-[#2C3628]/70">
              {post.frontmatter.description}
            </p>
          </header>

          {/* MDX Content */}
          <div className="prose-grown">
            <MDXContent source={post.content} />
          </div>

          {/* FAQ Section (if present) */}
          {post.frontmatter.faqs && post.frontmatter.faqs.length > 0 && (
            <section className="mt-16 border-t border-[#2C3628]/10 pt-12">
              <h2 className="serif text-2xl text-[#2C3628]">
                Frequently Asked Questions
              </h2>
              <div className="mt-8 space-y-6">
                {post.frontmatter.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-[#2C3628]/10 bg-white/50 p-6"
                  >
                    <h3 className="font-semibold text-[#2C3628]">
                      {faq.question}
                    </h3>
                    <p className="mt-2 text-[#2C3628]/70">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Back to Learn */}
          <div className="mt-16 border-t border-[#2C3628]/10 pt-8">
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#B85C38] hover:text-[#9A4A2B]"
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
              Back to all guides
            </Link>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-8 space-y-8">
            {/* Related Guides */}
            {relatedPosts.length > 0 && (
              <div className="rounded-2xl border border-[#2C3628]/10 bg-white/50 p-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#2C3628]/40">
                  Related Guides
                </h4>
                <ul className="mt-4 space-y-3">
                  {relatedPosts.map((related) => (
                    <li key={related.slug}>
                      <Link
                        href={`/learn/${related.slug}`}
                        className="text-sm text-[#2C3628] transition-colors hover:text-[#B85C38]"
                      >
                        {related.frontmatter.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Products CTA */}
            <div className="rounded-2xl bg-[#2C3628] p-6 text-center">
              <p className="text-sm text-[#F2F0E9]/80">
                Ready to cook with Grown?
              </p>
              <Link
                href="/products"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#F2F0E9] px-4 py-2 text-sm font-medium text-[#2C3628] transition-all hover:bg-white"
              >
                View Products
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
