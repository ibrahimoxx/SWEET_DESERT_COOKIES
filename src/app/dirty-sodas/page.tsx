import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dirty Sodas | Sweet Desert",
  description: "Sweet Desert Dirty Sodas — handcrafted drinks to pair with your desserts.",
};

export default function DirtySodasPage() {
  return (
    <section className="bg-brand-cream min-h-[60vh] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-brand-dark-brown sm:text-5xl">
            Dirty Sodas
          </h1>
          <p className="mt-6 text-lg text-brand-brown">
            Handcrafted, customizable sodas made to pair perfectly with your
            favorite Sweet Desert treats. Coming soon to a location near you.
          </p>
        </div>
      </div>
    </section>
  );
}
