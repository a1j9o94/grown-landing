// app/api/subscribe/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);

  const email = (body?.email || "").toString().trim().toLowerCase();
  const interests = Array.isArray(body?.interests) ? body.interests : [];
  const zip = body?.zip ? String(body.zip) : null;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email." }, { status: 400 });
  }
  if (!interests.length) {
    return NextResponse.json({ error: "Select at least one interest." }, { status: 400 });
  }

  try {
    await prisma.subscriber.upsert({
      where: { email },
      update: {
        interests: interests.join(", "),
        zip: zip ?? undefined,
        createdAt: new Date(),
      },
      create: {
        email,
        interests: interests.join(", "),
        zip,
        source: "landing",
      },
    });

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    console.error("Error saving subscriber:", error);
    return NextResponse.json(
      { error: "Failed to save subscription. Please try again." },
      { status: 500 }
    );
  }
}
