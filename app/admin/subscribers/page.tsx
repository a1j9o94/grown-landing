// app/admin/subscribers/page.tsx
import { prisma } from "@/app/lib/prisma";
import type { Subscriber } from "@/app/generated/prisma-client";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function SubscribersPage() {
  let subscribers: Subscriber[] = [];
  let error: string | null = null;

  try {
    subscribers = await prisma.subscriber.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (e: any) {
    console.error("Error fetching subscribers:", e);
    error = e?.message || "Failed to load subscribers";
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold">Waitlist Subscribers</h1>
          <p className="text-zinc-400 mt-2">
            {subscribers.length} subscriber{subscribers.length !== 1 ? "s" : ""} so far
          </p>
        </header>

        {error && (
          <div className="rounded-2xl bg-red-400/10 p-4 text-sm text-red-200 ring-1 ring-red-400/30 mb-6">
            <strong>Error:</strong> {error}
          </div>
        )}

        {!error && subscribers.length === 0 && (
          <div className="rounded-2xl bg-zinc-900/60 p-8 ring-1 ring-zinc-800 text-center">
            <p className="text-zinc-400">No subscribers yet.</p>
            <p className="text-sm text-zinc-500 mt-2">
              When people sign up on the landing page, they'll appear here.
            </p>
          </div>
        )}

        {subscribers.length > 0 && (
          <div className="rounded-2xl bg-zinc-900/60 ring-1 ring-zinc-800 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-800 text-left text-xs text-zinc-400 uppercase tracking-wider">
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Interests</th>
                  <th className="px-4 py-3">ZIP</th>
                  <th className="px-4 py-3">Date</th>
                </tr>
              </thead>
              <tbody>
                {subscribers.map((sub) => (
                  <tr key={sub.id} className="border-b border-zinc-800/50 hover:bg-zinc-800/30">
                    <td className="px-4 py-3 font-medium">{sub.email}</td>
                    <td className="px-4 py-3">
                      <div className="flex gap-1 flex-wrap">
                        {sub.interests.split(", ").map((interest) => (
                          <span
                            key={interest}
                            className="inline-block rounded-full bg-emerald-400/10 px-2 py-0.5 text-xs text-emerald-300"
                          >
                            {interest}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-zinc-400">{sub.zip || "—"}</td>
                    <td className="px-4 py-3 text-zinc-400">
                      {new Date(sub.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <footer className="mt-8 text-xs text-zinc-500">
          <a href="/" className="text-zinc-400 hover:text-white">
            ← Back to landing page
          </a>
        </footer>
      </div>
    </div>
  );
}
