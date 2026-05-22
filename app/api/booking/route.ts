import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

const BookingSchema = z.object({
  rentals: z.array(z.string().min(1)).min(1).max(10),
  date: z.string().min(1).max(40),
  time: z.string().min(1).max(20),
  address: z.string().min(5).max(300),
  name: z.string().min(2).max(120),
  phone: z.string().min(7).max(40),
  email: z.string().email().max(200),
  childAge: z.string().max(80).optional(),
  notes: z.string().max(2000).optional(),
});

export async function POST(req: Request) {
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = BookingSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Validation failed", issues: parsed.error.flatten() },
      { status: 422 }
    );
  }

  // TODO: wire to Resend / Google Sheets / Linear / etc.
  // TODO: add rate limiting (Vercel KV or Upstash) before launch to prevent spam.
  console.log("[booking]", JSON.stringify(parsed.data, null, 2));
  return NextResponse.json({ ok: true });
}
