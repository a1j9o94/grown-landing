import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[#2C3628]/10 pt-16 pb-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="serif text-2xl font-semibold tracking-tight text-[#2C3628]">
              Grown.
            </div>
            <p className="mt-4 text-sm text-[#2C3628]/60">
              Pantry staples for your unwind era.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#2C3628]/40">
              Products
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  href="/products/thc-oil"
                  className="text-[#2C3628]/70 transition-colors hover:text-[#2C3628]"
                >
                  THC Oil
                </Link>
              </li>
              <li>
                <Link
                  href="/products/thc-salt"
                  className="text-[#2C3628]/70 transition-colors hover:text-[#2C3628]"
                >
                  THC Salt
                </Link>
              </li>
              <li>
                <Link
                  href="/products/testing-and-quality"
                  className="text-[#2C3628]/70 transition-colors hover:text-[#2C3628]"
                >
                  Testing & Quality
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#2C3628]/40">
              Learn
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  href="/learn"
                  className="text-[#2C3628]/70 transition-colors hover:text-[#2C3628]"
                >
                  Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/recipes"
                  className="text-[#2C3628]/70 transition-colors hover:text-[#2C3628]"
                >
                  Recipes
                </Link>
              </li>
              <li>
                <Link
                  href="/learn/faq"
                  className="text-[#2C3628]/70 transition-colors hover:text-[#2C3628]"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#2C3628]/40">
              Company
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-[#2C3628]/70 transition-colors hover:text-[#2C3628]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#2C3628]/70 transition-colors hover:text-[#2C3628]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#2C3628]/10 pt-8 md:flex-row">
          <div className="flex flex-wrap justify-center gap-6 text-xs text-[#2C3628]/40">
            <span>© {new Date().getFullYear()} Grown</span>
            <span>21+ Only</span>
            <span>No Medical Claims</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-xs">
            <Link
              href="/legal/terms"
              className="text-[#2C3628]/40 transition-colors hover:text-[#2C3628]/70"
            >
              Terms
            </Link>
            <Link
              href="/legal/privacy"
              className="text-[#2C3628]/40 transition-colors hover:text-[#2C3628]/70"
            >
              Privacy
            </Link>
            <Link
              href="/legal/responsible-use"
              className="text-[#2C3628]/40 transition-colors hover:text-[#2C3628]/70"
            >
              Responsible Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
