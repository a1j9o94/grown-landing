import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Grown",
  description:
    "How Grown collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="py-12 md:py-20">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-[#2C3628]/60">
        <Link href="/" className="hover:text-[#2C3628]">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[#2C3628]">Privacy Policy</span>
      </nav>

      <article className="prose prose-lg mx-auto max-w-3xl">
        <h1 className="serif text-4xl text-[#2C3628] md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-[#2C3628]/50">
          Last updated: December 2024
        </p>

        <div className="mt-12 space-y-8 text-[#2C3628]/80">
          <section>
            <h2 className="serif text-2xl text-[#2C3628]">
              1. Information We Collect
            </h2>
            <p>We collect information you provide directly to us, including:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Email address (when joining our waitlist)</li>
              <li>ZIP code (optional, to understand regional interest)</li>
              <li>Product preferences (oil, salt, or both)</li>
            </ul>
            <p className="mt-4">
              We also automatically collect certain information when you visit
              our website, including your IP address, browser type, and pages
              visited.
            </p>
          </section>

          <section>
            <h2 className="serif text-2xl text-[#2C3628]">
              2. How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Send you updates about product availability and launches</li>
              <li>Respond to your inquiries and requests</li>
              <li>Understand our audience and improve our products</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="serif text-2xl text-[#2C3628]">
              3. Information Sharing
            </h2>
            <p>
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information with:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                Service providers who assist in operating our website and
                business
              </li>
              <li>
                Law enforcement or regulatory agencies when required by law
              </li>
            </ul>
          </section>

          <section>
            <h2 className="serif text-2xl text-[#2C3628]">4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="serif text-2xl text-[#2C3628]">5. Cookies</h2>
            <p>
              We use cookies and similar technologies to enhance your experience
              on our website. These include:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                Essential cookies for site functionality (e.g., age verification)
              </li>
              <li>Analytics cookies to understand how visitors use our site</li>
            </ul>
            <p className="mt-4">
              You can control cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="serif text-2xl text-[#2C3628]">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, contact us at{" "}
              <a
                href="mailto:hello@growncooking.com"
                className="text-[#B85C38] hover:text-[#9A4A2B]"
              >
                hello@growncooking.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="serif text-2xl text-[#2C3628]">
              7. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party sites. We are not
              responsible for the privacy practices of these external sites.
            </p>
          </section>

          <section>
            <h2 className="serif text-2xl text-[#2C3628]">
              8. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="serif text-2xl text-[#2C3628]">9. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us
              at{" "}
              <a
                href="mailto:hello@growncooking.com"
                className="text-[#B85C38] hover:text-[#9A4A2B]"
              >
                hello@growncooking.com
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
