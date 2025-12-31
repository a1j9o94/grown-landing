import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Grown",
  description: "Terms of service for Grown products and website.",
};

export default function TermsPage() {
  return (
    <div className="py-12 md:py-20">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-[#2C3628]/60">
        <Link href="/" className="hover:text-[#2C3628]">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[#2C3628]">Terms of Service</span>
      </nav>

      <article className="prose prose-lg mx-auto max-w-3xl">
        <h1 className="serif text-4xl text-[#2C3628] md:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-[#2C3628]/50">
          Last updated: December 2024
        </p>

        <div className="mt-12 space-y-8 text-[#2C3628]/80">
          <section>
            <h2 className="serif text-2xl text-[#2C3628]">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the Grown website and products, you agree to
              be bound by these Terms of Service. If you do not agree to these
              terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="serif text-2xl text-[#2C3628]">
              2. Age Requirement
            </h2>
            <p>
              You must be at least 21 years of age to use this website and
              purchase our products. By using our services, you represent and
              warrant that you are at least 21 years old and legally permitted
              to consume cannabis products in your jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="serif text-2xl text-[#2C3628]">
              3. Product Availability
            </h2>
            <p>
              Grown products are currently only available in Colorado. Products
              may not be shipped to or purchased by residents of other states.
              Availability is subject to local and state regulations.
            </p>
          </section>

          <section>
            <h2 className="serif text-2xl text-[#2C3628]">4. Product Use</h2>
            <p>
              Our products contain THC, a psychoactive compound. Users should:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Start with a low dose and wait to feel effects</li>
              <li>Not operate vehicles or machinery while impaired</li>
              <li>Keep products away from children and pets</li>
              <li>Store products as directed on packaging</li>
              <li>Consult a physician if pregnant, nursing, or have medical conditions</li>
            </ul>
          </section>

          <section>
            <h2 className="serif text-2xl text-[#2C3628]">5. No Medical Claims</h2>
            <p>
              Grown products are not intended to diagnose, treat, cure, or
              prevent any disease. We make no medical claims about our products.
              If you have health concerns, consult a healthcare professional.
            </p>
          </section>

          <section>
            <h2 className="serif text-2xl text-[#2C3628]">
              6. Intellectual Property
            </h2>
            <p>
              All content on this website, including text, graphics, logos, and
              images, is the property of Grown and is protected by copyright and
              trademark laws.
            </p>
          </section>

          <section>
            <h2 className="serif text-2xl text-[#2C3628]">
              7. Limitation of Liability
            </h2>
            <p>
              Grown shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages resulting from your use of our
              products or services.
            </p>
          </section>

          <section>
            <h2 className="serif text-2xl text-[#2C3628]">8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes
              will be posted on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="serif text-2xl text-[#2C3628]">9. Contact</h2>
            <p>
              If you have questions about these Terms of Service, please contact
              us at{" "}
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
