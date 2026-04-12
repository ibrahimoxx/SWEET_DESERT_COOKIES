"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "2017",
    title: "The Beginning",
    description:
      "Co-founders Jason McGowan and Sawyer Hemsley teamed up on a quest to bake the perfect chocolate chip cookie. The first Crumbl location opened in Logan, Utah.",
  },
  {
    year: "2018",
    title: "The Iconic Pink Box",
    description:
      "Sawyer Hemsley developed the iconic 4-pack pink box with college classmates, creating the signature Crumbl packaging known worldwide.",
  },
  {
    year: "2019",
    title: "Rapid Growth",
    description:
      "Crumbl expanded to dozens of locations across multiple states, with lines forming around the block for the weekly rotating menu.",
  },
  {
    year: "2020",
    title: "Going Viral",
    description:
      "Crumbl became a social media sensation, with millions of views on TikTok and Instagram as fans shared their weekly flavor reviews.",
  },
  {
    year: "2023",
    title: "1,000 Bakeries",
    description:
      "Crumbl surpassed 1,000 bakery locations nationwide, making it the fastest-growing cookie company in America.",
  },
  {
    year: "Today",
    title: "A Sweet Celebration",
    description:
      "With 300+ rotating flavors and a passionate community of cookie lovers, Crumbl continues to bring friends and family together.",
  },
];

export default function OurStoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-crumbl-cream py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-extrabold tracking-tight text-crumbl-dark-brown sm:text-5xl lg:text-6xl"
            >
              It all started with one big dream
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-lg text-crumbl-brown"
            >
              Created in 2017 when co-founders Jason McGowan and Sawyer Hemsley
              teamed up on a quest to bake the perfect chocolate chip cookie,
              they dreamt of bringing people together over a box of the best
              cookies in the world.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Open Kitchen */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Our Open Kitchen
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                At every Crumbl location, our open-concept kitchen design allows
                customers to watch as cookies are mixed, balled, and baked in
                real-time. It&apos;s an experience unlike any other bakery.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Every week, our menu rotates to feature an updated set of six
                exciting desserts — plus our classic flavors that are always
                available.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-crumbl-pink"
            >
              <div className="flex h-full items-center justify-center text-6xl">
                🍪
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-16 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
            Our Journey
          </h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 hidden h-full w-0.5 -translate-x-1/2 bg-gray-200 md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, i) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex flex-col gap-4 md:flex-row md:items-center ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1 md:text-right">
                    {i % 2 === 0 && (
                      <div className="rounded-2xl bg-white p-6 shadow-sm">
                        <span className="text-sm font-bold text-crumbl-coral">
                          {milestone.year}
                        </span>
                        <h3 className="mt-1 text-xl font-bold">
                          {milestone.title}
                        </h3>
                        <p className="mt-2 text-gray-600">
                          {milestone.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="hidden h-4 w-4 shrink-0 rounded-full bg-crumbl-pink ring-4 ring-white md:block" />

                  <div className="flex-1">
                    {(i % 2 !== 0 || typeof window === "undefined") && (
                      <div className="rounded-2xl bg-white p-6 shadow-sm md:hidden">
                        <span className="text-sm font-bold text-crumbl-coral">
                          {milestone.year}
                        </span>
                        <h3 className="mt-1 text-xl font-bold">
                          {milestone.title}
                        </h3>
                        <p className="mt-2 text-gray-600">
                          {milestone.description}
                        </p>
                      </div>
                    )}
                    {i % 2 !== 0 && (
                      <div className="hidden rounded-2xl bg-white p-6 shadow-sm md:block">
                        <span className="text-sm font-bold text-crumbl-coral">
                          {milestone.year}
                        </span>
                        <h3 className="mt-1 text-xl font-bold">
                          {milestone.title}
                        </h3>
                        <p className="mt-2 text-gray-600">
                          {milestone.description}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-crumbl-dark-brown py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { stat: "1,000+", label: "Bakeries Nationwide" },
              { stat: "300+", label: "Unique Flavors" },
              { stat: "2017", label: "Year Founded" },
              { stat: "6", label: "New Flavors Weekly" },
            ].map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-3xl font-extrabold text-crumbl-pink sm:text-4xl">
                  {item.stat}
                </p>
                <p className="mt-2 text-sm text-gray-300">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
