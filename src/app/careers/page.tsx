import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HQ Careers | Sweet Desert",
  description: "Explore career opportunities at Sweet Desert headquarters.",
};

export default function CareersPage() {
  return (
    <section className="bg-brand-cream min-h-[60vh] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-brand-dark-brown sm:text-5xl">
            HQ Careers
          </h1>
          <p className="mt-6 text-lg text-brand-brown">
            Join our headquarters team and help build Sweet Desert. We&apos;re always
            looking for talented, passionate people.
          </p>
          <a
            href="mailto:careers@sweetdesert.com"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-black px-8 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
          >
            View Open Roles
          </a>
        </div>
      </div>
    </section>
  );
}
