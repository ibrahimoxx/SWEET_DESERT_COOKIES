import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Franchise Store Jobs | Sweet Desert",
  description: "Join the Sweet Desert team at a franchise store near you.",
};

export default function JobsPage() {
  return (
    <section className="bg-brand-cream min-h-[60vh] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-brand-dark-brown sm:text-5xl">
            Franchise Store Jobs
          </h1>
          <p className="mt-6 text-lg text-brand-brown">
            Find open positions at Sweet Desert franchise locations across the
            country. Bring the joy of desserts to your community.
          </p>
          <a
            href="/stores"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-brand-pink px-8 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Find a Store Near You
          </a>
        </div>
      </div>
    </section>
  );
}
