import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";

const MAX_PAYLOAD = 10_000;

const ALLOWED_AMOUNTS = new Set(["$10", "$25", "$50", "$100", "$200"]);

interface GiftCardPayload {
  yourName: string;
  yourEmail: string;
  recipientName: string;
  recipientEmail: string;
  amount: string;
  personalMessage: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isGiftCardPayload(data: unknown): data is GiftCardPayload {
  if (typeof data !== "object" || data === null) return false;
  const d = data as Record<string, unknown>;
  return (
    typeof d.yourName === "string" &&
    d.yourName.trim().length > 0 &&
    typeof d.yourEmail === "string" &&
    isValidEmail(d.yourEmail) &&
    typeof d.recipientName === "string" &&
    d.recipientName.trim().length > 0 &&
    typeof d.recipientEmail === "string" &&
    isValidEmail(d.recipientEmail) &&
    typeof d.amount === "string" &&
    ALLOWED_AMOUNTS.has(d.amount) &&
    typeof d.personalMessage === "string"
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

  if (!isGiftCardPayload(body)) {
    return NextResponse.json({ error: "Invalid form data" }, { status: 422 });
  }

  const { yourName, yourEmail, recipientName, recipientEmail, amount, personalMessage } = body;
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "Sweet Desert <onboarding@resend.dev>",
    to: [process.env.CONTACT_TO_EMAIL ?? "hello@sweetdesert.com"],
    replyTo: yourEmail,
    subject: `[Gift Card Request] ${amount} from ${yourName}`,
    text: [
      `From: ${yourName} <${yourEmail}>`,
      `Recipient: ${recipientName} <${recipientEmail}>`,
      `Amount: ${amount}`,
      ``,
      `Personal Message:`,
      personalMessage || "(none)",
    ].join("\n"),
  });

  if (error) {
    return NextResponse.json(
      { error: "Failed to send request" },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
