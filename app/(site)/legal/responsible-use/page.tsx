import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Responsible Use | Grown",
  description:
    "Guidelines for safe and responsible consumption of THC-infused products.",
};

export default function ResponsibleUsePage() {
  return (
    <div className="py-12 md:py-20">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-[#2C3628]/60">
        <Link href="/" className="hover:text-[#2C3628]">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[#2C3628]">Responsible Use</span>
      </nav>

      <article className="prose prose-lg mx-auto max-w-3xl">
        <h1 className="serif text-4xl text-[#2C3628] md:text-5xl">
          Responsible Use
        </h1>
        <p className="mt-6 text-lg text-[#2C3628]/70">
          THC affects everyone differently. We believe in providing clear
          guidance so you can enjoy our products safely and responsibly.
        </p>

        <div className="mt-12 space-y-12 text-[#2C3628]/80">
          {/* Start Low, Go Slow */}
          <section className="rounded-[24px] bg-white/50 p-8">
            <h2 className="serif text-2xl text-[#2C3628]">
              Start Low, Go Slow
            </h2>
            <p className="mt-4">
              Edibles take longer to take effect than other consumption methods.
              Effects can take 30 minutes to 2 hours to onset, depending on your
              metabolism and whether you&apos;ve eaten.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Start with a low dose (5mg or less for new users)</li>
              <li>Wait at least 2 hours before consuming more</li>
              <li>
                Effects can last 4-8 hours, with peak effects around 2-3 hours
              </li>
            </ul>
          </section>

          {/* Know Your Dose */}
          <section className="rounded-[24px] bg-white/50 p-8">
            <h2 className="serif text-2xl text-[#2C3628]">Know Your Dose</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-[#2C3628]/10 p-4">
                <h3 className="font-semibold text-[#2C3628]">Grown Oil</h3>
                <p className="mt-2 text-sm">5mg THC per teaspoon</p>
              </div>
              <div className="rounded-xl border border-[#2C3628]/10 p-4">
                <h3 className="font-semibold text-[#2C3628]">Grown Salt</h3>
                <p className="mt-2 text-sm">2mg THC per pinch</p>
              </div>
            </div>
            <p className="mt-4">
              Use our products as directed. When cooking for others, always
              disclose that a dish contains THC and provide dose information.
            </p>
          </section>

          {/* Safety Guidelines */}
          <section>
            <h2 className="serif text-2xl text-[#2C3628]">Safety Guidelines</h2>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-4 rounded-xl border border-[#2C3628]/10 bg-white/30 p-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#2C3628]">
                    Do Not Drive or Operate Machinery
                  </h3>
                  <p className="mt-1 text-sm text-[#2C3628]/60">
                    THC impairs coordination and reaction time. Never drive or
                    operate heavy machinery while under the influence.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-[#2C3628]/10 bg-white/30 p-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#2C3628]">
                    Keep Away from Children & Pets
                  </h3>
                  <p className="mt-1 text-sm text-[#2C3628]/60">
                    Store all THC products in a secure location out of reach of
                    children and pets. THC can be harmful to both.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-[#2C3628]/10 bg-white/30 p-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
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
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#2C3628]">
                    Pregnancy & Nursing
                  </h3>
                  <p className="mt-1 text-sm text-[#2C3628]/60">
                    Do not use THC products if you are pregnant or nursing.
                    Consult your healthcare provider.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-[#2C3628]/10 bg-white/30 p-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
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
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#2C3628]">
                    Medical Conditions
                  </h3>
                  <p className="mt-1 text-sm text-[#2C3628]/60">
                    If you have a medical condition or take medications, consult
                    your doctor before using THC products.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* If You Consume Too Much */}
          <section className="rounded-[24px] border-2 border-[#B85C38]/20 bg-[#B85C38]/5 p-8">
            <h2 className="serif text-2xl text-[#2C3628]">
              If You Consume Too Much
            </h2>
            <p className="mt-4">
              Overconsumption can lead to uncomfortable effects like anxiety,
              paranoia, or nausea. If this happens:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Stay calm—effects are temporary and will pass</li>
              <li>Find a comfortable, safe place to rest</li>
              <li>Stay hydrated with water or juice</li>
              <li>Try eating something, especially black pepper or CBD</li>
              <li>
                If symptoms are severe or you&apos;re concerned, seek medical
                attention
              </li>
            </ul>
          </section>

          {/* Legal Notice */}
          <section>
            <h2 className="serif text-2xl text-[#2C3628]">Legal Notice</h2>
            <p className="mt-4">
              Grown products are only legal in Colorado and are intended for
              adults 21 and older. It is illegal to transport THC products
              across state lines. Always comply with local and state laws
              regarding cannabis possession and consumption.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
