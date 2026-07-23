"use client";

import { motion } from "framer-motion";

const benefits = [
  "Proven business model trusted by our community",
  "Comprehensive training and ongoing support",
  "Strong brand recognition and social media presence",
  "Weekly rotating menu keeps customers coming back",
  "Open-concept kitchen design creates unique experience",
  "Dedicated franchise support team",
];

export default function FranchisingPage() {
  return (
    <>
      <section className="bg-brand-dark-brown py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
            >
              Own a Sweet Desert Franchise
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-lg text-gray-300"
            >
              Join the Sweet Desert family. Open your own
              Sweet Desert bakery and bring joy to your community.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
            Why Franchise with Sweet Desert?
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 rounded-xl border border-gray-100 p-6"
              >
                <span className="mt-0.5 text-brand-pink">✓</span>
                <p className="font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-pink py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-black/70">
            Fill out our franchise inquiry form and our team will be in touch.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex h-14 items-center justify-center rounded-full bg-black px-8 text-base font-semibold text-white transition-colors hover:bg-gray-800"
          >
            Apply Now
          </a>
        </div>
      </section>
    </>
  );
}
