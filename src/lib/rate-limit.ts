const windowMs = 60 * 60 * 1000; // 1 hour
const maxRequests = 5;

// In-process best-effort limit. Replace with Upstash Rate Limit for multi-instance production.
// npm install @upstash/ratelimit @upstash/redis → see docs for Vercel KV integration.
const store = new Map<string, { count: number; resetAt: number }>();

export function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = store.get(ip);
  if (!entry || now > entry.resetAt) {
    store.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (entry.count >= maxRequests) return false;
  entry.count++;
  return true;
}

export function getClientIp(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "anonymous"
  );
}
