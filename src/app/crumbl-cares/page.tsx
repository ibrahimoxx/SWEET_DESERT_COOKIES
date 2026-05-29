import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crumbl Cares | Crumbl Cookies",
  description:
    "Crumbl Cares — our commitment to community, charity, and giving back.",
};

export default function CrumblCaresPage() {
  return (
    <section className="bg-crumbl-cream min-h-[60vh] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-crumbl-dark-brown sm:text-5xl">
            Crumbl Cares
          </h1>
          <p className="mt-6 text-lg text-crumbl-brown">
            We believe cookies can change lives. Crumbl Cares supports
            communities, charities, and causes that matter — one cookie at a
            time.
          </p>
        </div>
      </div>
    </section>
  );
}
