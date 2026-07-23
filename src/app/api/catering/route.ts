import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";

const MAX_PAYLOAD = 10_000;

interface CateringPayload {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isCateringPayload(data: unknown): data is CateringPayload {
  if (typeof data !== "object" || data === null) return false;
  const d = data as Record<string, unknown>;
  return (
    typeof d.name === "string" &&
    d.name.trim().length > 0 &&
    typeof d.email === "string" &&
    isValidEmail(d.email) &&
    typeof d.phone === "string" &&
    typeof d.eventType === "string" &&
    d.eventType.trim().length > 0 &&
    typeof d.eventDate === "string" &&
    d.eventDate.trim().length > 0 &&
    typeof d.guestCount === "string" &&
    typeof d.message === "string"
  );
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Try again later." },
      { status: 429 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 503 }
    );
  }

  let rawBody: string;
  try {
    rawBody = await request.text();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  if (rawBody.length > MAX_PAYLOAD) {
    return NextResponse.json({ error: "Payload too large" }, { status: 413 });
  }

  let body: unknown;
  try {
    body = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!isCateringPayload(body)) {
    return NextResponse.json({ error: "Invalid form data" }, { status: 422 });
  }

  const { name, email, phone, eventType, eventDate, guestCount, message } =
    body;
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "Sweet Desert <onboarding@resend.dev>",
    to: [process.env.CATERING_TO_EMAIL ?? "catering@sweetdesert.com"],
    replyTo: email,
    subject: `[Catering Inquiry] ${eventType} — ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Event Type: ${eventType}`,
      `Event Date: ${eventDate}`,
      `Estimated Guests: ${guestCount}`,
      ``,
      `Additional Notes:`,
      message,
    ].join("\n"),
  });

  if (error) {
    return NextResponse.json(
      { error: "Failed to send inquiry" },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
