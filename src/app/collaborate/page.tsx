import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collaborate | Crumbl Cookies",
  description: "Partner with Crumbl Cookies for brand collaborations and co-marketing opportunities.",
};

export default function CollaboratePage() {
  return (
    <section className="bg-crumbl-cream min-h-[60vh] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-crumbl-dark-brown sm:text-5xl">
            Collaborate
          </h1>
          <p className="mt-6 text-lg text-crumbl-brown">
            Interested in partnering with Crumbl? We love co-creating with
            brands, artists, and organizations that share our values.
          </p>
          <a
            href="mailto:collaborate@crumblcookies.com"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-crumbl-pink px-8 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
