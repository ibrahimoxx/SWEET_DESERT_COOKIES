import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press | Sweet Desert",
  description: "Press resources and media inquiries for Sweet Desert.",
};

export default function PressPage() {
  return (
    <section className="bg-brand-cream min-h-[60vh] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-brand-dark-brown sm:text-5xl">
            Press
          </h1>
          <p className="mt-6 text-lg text-brand-brown">
            For media inquiries, interview requests, and press assets, please
            contact our communications team.
          </p>
          <a
            href="mailto:press@sweetdesert.com"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-black px-8 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
          >
            Contact Press Team
          </a>
        </div>
      </div>
    </section>
  );
}
