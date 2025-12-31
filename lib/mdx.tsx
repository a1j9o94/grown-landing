import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import Link from "next/link";
import Image from "next/image";

// Custom components for MDX content
const mdxComponents = {
  // Override default elements with custom styling
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="serif mt-12 text-3xl font-semibold text-[#2C3628] first:mt-0 md:text-4xl" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="serif mt-10 text-2xl font-semibold text-[#2C3628] md:text-3xl" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mt-8 text-xl font-semibold text-[#2C3628]" {...props} />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="mt-6 text-lg font-semibold text-[#2C3628]" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mt-4 leading-relaxed text-[#2C3628]/80" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mt-4 list-disc space-y-2 pl-6 text-[#2C3628]/80" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="mt-4 list-decimal space-y-2 pl-6 text-[#2C3628]/80" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  a: ({ href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    if (href?.startsWith("/")) {
      return (
        <Link
          href={href}
          className="text-[#B85C38] underline decoration-[#B85C38]/30 transition-colors hover:text-[#9A4A2B] hover:decoration-[#9A4A2B]"
          {...props}
        />
      );
    }
    return (
      <a
        href={href}
        className="text-[#B85C38] underline decoration-[#B85C38]/30 transition-colors hover:text-[#9A4A2B] hover:decoration-[#9A4A2B]"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    );
  },
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-[#2C3628]" {...props} />
  ),
  em: (props: React.HTMLAttributes<HTMLElement>) => (
    <em className="italic" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="mt-6 border-l-4 border-[#B85C38]/40 pl-6 italic text-[#2C3628]/70"
      {...props}
    />
  ),
  hr: () => <hr className="my-12 border-[#2C3628]/10" />,
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full border-collapse text-sm" {...props} />
    </div>
  ),
  thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="border-b border-[#2C3628]/20 text-left" {...props} />
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th className="px-4 py-3 font-semibold text-[#2C3628]" {...props} />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className="border-b border-[#2C3628]/10 px-4 py-3 text-[#2C3628]/80" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="rounded bg-[#2C3628]/5 px-1.5 py-0.5 font-mono text-sm text-[#2C3628]"
      {...props}
    />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="mt-6 overflow-x-auto rounded-xl bg-[#2C3628] p-6 text-sm text-[#F2F0E9]"
      {...props}
    />
  ),
  // Custom components
  Image: (props: React.ComponentProps<typeof Image>) => (
    <Image className="mt-6 rounded-2xl" {...props} />
  ),
  Link: (props: React.ComponentProps<typeof Link>) => <Link {...props} />,
  // Callout component for special notes
  Callout: ({
    type = "info",
    children,
  }: {
    type?: "info" | "warning" | "tip";
    children: React.ReactNode;
  }) => {
    const styles = {
      info: "bg-[#D4D9CD]/30 border-[#2C3628]/20",
      warning: "bg-[#B85C38]/10 border-[#B85C38]/30",
      tip: "bg-[#F2F0E9] border-[#2C3628]/20",
    };
    return (
      <div
        className={`mt-6 rounded-xl border p-6 ${styles[type]}`}
      >
        {children}
      </div>
    );
  },
  // THC Option callout for recipes
  THCOption: ({
    oil,
    salt,
  }: {
    oil?: string;
    salt?: string;
  }) => (
    <div className="mt-8 rounded-2xl border-2 border-[#B85C38]/20 bg-[#B85C38]/5 p-6">
      <h4 className="flex items-center gap-2 text-lg font-semibold text-[#2C3628]">
        <svg
          className="h-5 w-5 text-[#B85C38]"
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
      </h4>
      <div className="mt-4 space-y-3 text-[#2C3628]/80">
        {oil && (
          <p>
            <strong className="text-[#2C3628]">Add THC Oil:</strong> {oil}
          </p>
        )}
        {salt && (
          <p>
            <strong className="text-[#2C3628]">Add THC Salt:</strong> {salt}
          </p>
        )}
      </div>
    </div>
  ),
};

interface MDXContentProps {
  source: string;
}

export function MDXContent({ source }: MDXContentProps) {
  return (
    <MDXRemote
      source={source}
      components={mdxComponents}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            [rehypeAutolinkHeadings, { behavior: "wrap" }],
          ],
        },
      }}
    />
  );
}

export { mdxComponents };
