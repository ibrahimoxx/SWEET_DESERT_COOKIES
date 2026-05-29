import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Franchise Store Jobs | Crumbl Cookies",
  description: "Join the Crumbl team at a franchise store near you.",
};

export default function JobsPage() {
  return (
    <section className="bg-crumbl-cream min-h-[60vh] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-crumbl-dark-brown sm:text-5xl">
            Franchise Store Jobs
          </h1>
          <p className="mt-6 text-lg text-crumbl-brown">
            Find open positions at Crumbl franchise locations across the
            country. Bring the joy of cookies to your community.
          </p>
          <a
            href="/stores"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-crumbl-pink px-8 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Find a Store Near You
          </a>
        </div>
      </div>
    </section>
  );
}
