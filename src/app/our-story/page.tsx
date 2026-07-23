"use client";

import { motion } from "framer-motion";
import { milestones, companyStats } from "@/data/milestones";
import { brand } from "@/data/brand";

export default function OurStoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-cream py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-extrabold tracking-tight text-brand-dark-brown sm:text-5xl lg:text-6xl"
            >
              It all started with one big dream
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-lg text-brand-brown"
            >
              Created in {brand.foundingYear} when co-founders{" "}
              {brand.founders.join(" and ")} teamed up on a quest to bake the
              perfect chocolate chip cookie, they dreamt of bringing people
              together over a box of the best cookies in the world.
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
                At every Sweet Desert location, our open-concept kitchen design allows
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
              className="relative aspect-4/3 overflow-hidden rounded-2xl bg-brand-pink"
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
                        <span className="text-sm font-bold text-brand-coral">
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
                  <div className="hidden h-4 w-4 shrink-0 rounded-full bg-brand-pink ring-4 ring-white md:block" />

                  <div className="flex-1">
                    {(i % 2 !== 0 || typeof window === "undefined") && (
                      <div className="rounded-2xl bg-white p-6 shadow-sm md:hidden">
                        <span className="text-sm font-bold text-brand-coral">
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
                        <span className="text-sm font-bold text-brand-coral">
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
      <section className="bg-brand-dark-brown py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {companyStats.map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-3xl font-extrabold text-brand-pink sm:text-4xl">
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
