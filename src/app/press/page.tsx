import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press | Crumbl Cookies",
  description: "Press resources and media inquiries for Crumbl Cookies.",
};

export default function PressPage() {
  return (
    <section className="bg-crumbl-cream min-h-[60vh] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-crumbl-dark-brown sm:text-5xl">
            Press
          </h1>
          <p className="mt-6 text-lg text-crumbl-brown">
            For media inquiries, interview requests, and press assets, please
            contact our communications team.
          </p>
          <a
            href="mailto:press@crumblcookies.com"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-black px-8 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
          >
            Contact Press Team
          </a>
        </div>
      </div>
    </section>
  );
}
