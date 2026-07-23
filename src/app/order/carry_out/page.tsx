import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Carry Out | Sweet Desert",
  description:
    "Order ahead and pick up your Sweet Desert order at your nearest location.",
};

export default function CarryOutPage() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center py-16 sm:py-24">
      <div className="mx-auto max-w-xl px-4 text-center sm:px-6">
        <span className="text-6xl" aria-hidden="true">
          🛍️
        </span>
        <h1 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Carry Out
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Order ahead and pick up your Sweet Desert treats fresh at your nearest
          location.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="#"
            className="inline-flex h-14 items-center justify-center rounded-full bg-black px-8 text-base font-semibold text-white transition-colors hover:bg-gray-800"
          >
            Order Now
          </a>
          <Link
            href="/stores"
            className="inline-flex h-14 items-center justify-center rounded-full border-2 border-gray-200 px-8 text-base font-semibold text-gray-700 transition-colors hover:border-gray-400"
          >
            Find a Store
          </Link>
        </div>
        <p className="mt-6 text-sm text-gray-400">
          Online ordering coming soon — visit us in store or call to place your
          order.
        </p>
      </div>
    </section>
  );
}
