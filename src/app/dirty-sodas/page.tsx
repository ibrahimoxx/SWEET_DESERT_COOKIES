import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dirty Sodas | Crumbl Cookies",
  description: "Crumbl Dirty Sodas — handcrafted drinks to pair with your cookies.",
};

export default function DirtySodasPage() {
  return (
    <section className="bg-crumbl-cream min-h-[60vh] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-crumbl-dark-brown sm:text-5xl">
            Dirty Sodas
          </h1>
          <p className="mt-6 text-lg text-crumbl-brown">
            Handcrafted, customizable sodas made to pair perfectly with your
            favorite Crumbl cookies. Coming soon to a location near you.
          </p>
        </div>
      </div>
    </section>
  );
}
