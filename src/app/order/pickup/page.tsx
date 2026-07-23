import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Curbside Pickup | Sweet Desert",
  description: "Order Sweet Desert online and we'll bring it right out to your car.",
};

export default function PickupPage() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center py-16 sm:py-24">
      <div className="mx-auto max-w-xl px-4 text-center sm:px-6">
        <span className="text-6xl" aria-hidden="true">
          🅿️
        </span>
        <h1 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Curbside Pickup
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Order online and pull up — we&apos;ll bring your Sweet Desert order
          straight out to your car.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="#"
            className="inline-flex h-14 items-center justify-center rounded-full bg-black px-8 text-base font-semibold text-white transition-colors hover:bg-gray-800"
          >
            Order for Pickup
          </a>
          <Link
            href="/stores"
            className="inline-flex h-14 items-center justify-center rounded-full border-2 border-gray-200 px-8 text-base font-semibold text-gray-700 transition-colors hover:border-gray-400"
          >
            Find a Store
          </Link>
        </div>
        <p className="mt-6 text-sm text-gray-400">
          Curbside available at select locations. Online ordering coming soon.
        </p>
      </div>
    </section>
  );
}
