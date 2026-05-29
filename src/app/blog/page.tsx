import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Crumbl Cookies",
  description: "News, stories, and cookie inspiration from Crumbl.",
};

export default function BlogPage() {
  return (
    <section className="bg-crumbl-cream min-h-[60vh] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-crumbl-dark-brown sm:text-5xl">
            Blog
          </h1>
          <p className="mt-6 text-lg text-crumbl-brown">
            Stories, recipes, and news from the Crumbl team. Check back soon.
          </p>
        </div>
      </div>
    </section>
  );
}
