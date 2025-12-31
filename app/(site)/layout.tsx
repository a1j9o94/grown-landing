"use client";

import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { AgeVerificationModal } from "../components/AgeVerificationModal";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ageVerified, setAgeVerified] = useState<boolean | null>(null);

  useEffect(() => {
    const verified = localStorage.getItem("grown_age_verified") === "true";
    setAgeVerified(verified);
  }, []);

  // Don't render anything until we've checked localStorage
  if (ageVerified === null) {
    return <div className="fixed inset-0 bg-[#2C3628]" />;
  }

  return (
    <>
      {/* Age Verification Modal */}
      {!ageVerified && (
        <AgeVerificationModal onVerify={() => setAgeVerified(true)} />
      )}

      {/* Editorial Styles */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;400;600&family=Inter:wght@300;400;500&display=swap");

        :root {
          --bg-cream: #f2f0e9;
          --text-forest: #2c3628;
          --accent-clay: #b85c38;
          --soft-sage: #d4d9cd;
        }

        body {
          background-color: var(--bg-cream);
          color: var(--text-forest);
          font-family: "Inter", sans-serif;
        }

        h1,
        h2,
        h3,
        .serif {
          font-family: "Fraunces", serif;
        }

        .bg-noise {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.05;
          pointer-events: none;
          z-index: 50;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
      `}</style>

      <div className="relative min-h-screen overflow-hidden selection:bg-[#B85C38] selection:text-white">
        <div className="bg-noise" />

        {/* Ambient Blobs */}
        <div className="fixed inset-0 -z-10 opacity-60">
          <div className="absolute left-[-10%] top-[-10%] h-[600px] w-[600px] rounded-full bg-[#D4D9CD] blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[#E6DBC6] blur-[80px]" />
        </div>

        <Header />

        <main className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
          {children}
        </main>

        <Footer />
      </div>
    </>
  );
}
