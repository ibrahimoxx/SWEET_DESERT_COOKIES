import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community | Sweet Desert",
  description:
    "Sweet Desert Community — our commitment to community, charity, and giving back.",
};

export default function CommunityPage() {
  return (
    <section className="bg-brand-cream min-h-[60vh] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-brand-dark-brown sm:text-5xl">
            Community
          </h1>
          <p className="mt-6 text-lg text-brand-brown">
            We believe desserts can bring people together. Sweet Desert supports
            communities, charities, and causes that matter — one treat at a
            time.
          </p>
        </div>
      </div>
    </section>
  );
}
