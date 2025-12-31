import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | Grown",
  description:
    "Get in touch with the Grown team. Questions about our products, partnerships, or anything else—we'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <div className="py-12 md:py-20">
      {/* Hero */}
      <div className="mb-16 max-w-2xl">
        <h1 className="serif text-4xl text-[#2C3628] md:text-5xl">
          Get in Touch
        </h1>
        <p className="mt-6 text-lg text-[#2C3628]/70">
          Questions about our products, interested in partnerships, or just want
          to say hello? We&apos;d love to hear from you.
        </p>
      </div>

      {/* Contact Options */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-[24px] bg-white/50 p-8">
          <h2 className="text-xl font-semibold text-[#2C3628]">
            General Inquiries
          </h2>
          <p className="mt-3 text-[#2C3628]/70">
            For questions about our products, availability, or anything else.
          </p>
          <a
            href="mailto:adrian@grownthc.com"
            className="mt-6 inline-flex items-center gap-2 text-[#B85C38] hover:text-[#9A4A2B]"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            adrian@grownthc.com
          </a>
        </div>

        <div className="rounded-[24px] bg-white/50 p-8">
          <h2 className="text-xl font-semibold text-[#2C3628]">Partnerships</h2>
          <p className="mt-3 text-[#2C3628]/70">
            Interested in retail, wholesale, or collaboration opportunities.
          </p>
          <a
            href="mailto:adrian@grownthc.com"
            className="mt-6 inline-flex items-center gap-2 text-[#B85C38] hover:text-[#9A4A2B]"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            adrian@grownthc.com
          </a>
        </div>

        <div className="rounded-[24px] bg-white/50 p-8">
          <h2 className="text-xl font-semibold text-[#2C3628]">Press</h2>
          <p className="mt-3 text-[#2C3628]/70">
            For media inquiries, interviews, and press kit requests.
          </p>
          <a
            href="mailto:adrian@grownthc.com"
            className="mt-6 inline-flex items-center gap-2 text-[#B85C38] hover:text-[#9A4A2B]"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            adrian@grownthc.com
          </a>
        </div>

        <div className="rounded-[24px] bg-white/50 p-8">
          <h2 className="text-xl font-semibold text-[#2C3628]">Location</h2>
          <p className="mt-3 text-[#2C3628]/70">
            Based in Colorado. Products available to Colorado residents only at
            launch.
          </p>
          <p className="mt-6 text-sm text-[#2C3628]/50">
            We do not have a public storefront.
          </p>
        </div>
      </div>

      {/* FAQ CTA */}
      <section className="mt-16 rounded-[24px] border border-[#2C3628]/10 bg-white/30 p-8 text-center">
        <h2 className="text-xl font-semibold text-[#2C3628]">
          Looking for answers?
        </h2>
        <p className="mt-2 text-[#2C3628]/60">
          Check our FAQ for commonly asked questions.
        </p>
        <Link
          href="/learn/faq"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#B85C38] hover:text-[#9A4A2B]"
        >
          View FAQ
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
