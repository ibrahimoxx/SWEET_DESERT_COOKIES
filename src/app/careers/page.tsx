import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HQ Careers | Crumbl Cookies",
  description: "Explore career opportunities at Crumbl Cookies headquarters.",
};

export default function CareersPage() {
  return (
    <section className="bg-crumbl-cream min-h-[60vh] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-crumbl-dark-brown sm:text-5xl">
            HQ Careers
          </h1>
          <p className="mt-6 text-lg text-crumbl-brown">
            Join our headquarters team and help build the world&apos;s fastest-growing
            cookie company. We&apos;re always looking for talented, passionate people.
          </p>
          <a
            href="mailto:careers@crumblcookies.com"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-black px-8 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
          >
            View Open Roles
          </a>
        </div>
      </div>
    </section>
  );
}
