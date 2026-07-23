import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collaborate | Sweet Desert",
  description: "Partner with Sweet Desert for brand collaborations and co-marketing opportunities.",
};

export default function CollaboratePage() {
  return (
    <section className="bg-brand-cream min-h-[60vh] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-brand-dark-brown sm:text-5xl">
            Collaborate
          </h1>
          <p className="mt-6 text-lg text-brand-brown">
            Interested in partnering with Sweet Desert? We love co-creating with
            brands, artists, and organizations that share our values.
          </p>
          <a
            href="mailto:collaborate@sweetdesert.com"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-brand-pink px-8 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
