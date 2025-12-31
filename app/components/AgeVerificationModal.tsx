"use client";

import { useState } from "react";
import Image from "next/image";

export function AgeVerificationModal({ onVerify }: { onVerify: () => void }) {
  const [isExiting, setIsExiting] = useState(false);

  function handleVerify() {
    setIsExiting(true);
    setTimeout(() => {
      localStorage.setItem("grown_age_verified", "true");
      onVerify();
    }, 400);
  }

  function handleDeny() {
    window.location.href = "https://www.google.com";
  }

  return (
    <div
      className={`fixed inset-0 z-100 flex items-center justify-center transition-opacity duration-400 ${isExiting ? "opacity-0" : "opacity-100"}`}
      style={{ backgroundColor: "rgba(44, 54, 40, 0.95)" }}
    >
      <div
        className={`relative mx-4 w-full max-w-md transform transition-all duration-400 ${isExiting ? "scale-95 opacity-0" : "scale-100 opacity-100"}`}
      >
        {/* Card */}
        <div className="overflow-hidden rounded-[32px] bg-[#F2F0E9] p-8 shadow-2xl md:p-12">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-lg">
                <Image
                  src="/logo.png"
                  alt="Grown Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="serif text-3xl font-semibold tracking-tight text-[#2C3628]">
                Grown.
              </span>
            </div>
          </div>

          {/* Decorative line */}
          <div className="mx-auto mb-8 h-px w-16 bg-[#B85C38]/40" />

          {/* Content */}
          <div className="text-center">
            <h2 className="serif text-2xl text-[#2C3628] md:text-3xl">
              Before we begin...
            </h2>
            <p className="mt-4 text-[#2C3628]/70">
              This website contains content about cannabis products intended for
              adults only.
            </p>
            <p className="serif mt-6 text-lg italic text-[#2C3628]">
              Are you 21 years of age or older?
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <button
              onClick={handleVerify}
              className="flex-1 rounded-xl bg-[#2C3628] py-4 text-base font-semibold text-[#F2F0E9] shadow-lg shadow-[#2C3628]/20 transition-all hover:scale-[1.02] hover:bg-[#1f261c] active:scale-[0.98]"
            >
              Yes, I&apos;m 21+
            </button>
            <button
              onClick={handleDeny}
              className="flex-1 rounded-xl border border-[#2C3628]/20 py-4 text-base font-medium text-[#2C3628] transition-all hover:bg-[#2C3628]/5"
            >
              No, I&apos;m not
            </button>
          </div>

          {/* Legal text */}
          <p className="mt-8 text-center text-xs text-[#2C3628]/40">
            By entering, you confirm that you are of legal age to consume
            cannabis in your jurisdiction.
          </p>
        </div>

        {/* Decorative blob behind card */}
        <div className="absolute -bottom-20 -right-20 -z-10 h-64 w-64 rounded-full bg-[#B85C38]/20 blur-3xl" />
        <div className="absolute -left-20 -top-20 -z-10 h-48 w-48 rounded-full bg-[#D4D9CD]/30 blur-3xl" />
      </div>
    </div>
  );
}
