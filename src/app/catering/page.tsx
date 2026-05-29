"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cateringFeatures, cateringEventTypes, cateringContact } from "@/data/catering";

export default function CateringPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-crumbl-cream py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-extrabold tracking-tight text-crumbl-dark-brown sm:text-5xl lg:text-6xl"
            >
              Crumbl Catering
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-lg text-crumbl-brown"
            >
              Transform every occasion into a sweet celebration. Just select
              your nearest store and schedule your order in a few clicks.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center"
            >
              <Link
                href="/order/catering"
                className="inline-flex h-14 items-center justify-center rounded-full bg-black px-8 text-base font-semibold text-white transition-colors hover:bg-gray-800"
              >
                Start a Catering Order
              </Link>
              <Link
                href="/stores"
                className="inline-flex h-14 items-center justify-center rounded-full border-2 border-crumbl-dark-brown px-8 text-base font-semibold text-crumbl-dark-brown transition-colors hover:bg-crumbl-dark-brown hover:text-white"
              >
                Find My Local Crumbl
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-3">
            {cateringFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-crumbl-pink text-3xl">
                  {feature.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold">{feature.title}</h3>
                <p className="mt-3 text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event types */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
            Perfect for Any Occasion
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {cateringEventTypes.map((event, i) => (
              <motion.div
                key={event}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center justify-center rounded-2xl bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="text-lg font-semibold">{event}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ordering info */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              How to Order
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Mini or large desserts available in 48-packs and 96-packs, with
              increments of 12. Order through the app or online.
            </p>

            <div className="mt-12 rounded-2xl bg-crumbl-pink/20 p-8">
              <h3 className="text-xl font-bold">Need a Large Order?</h3>
              <p className="mt-2 text-gray-600">
                Call our catering specialists for white glove service on orders
                of any size.
              </p>
              <a
                href={`tel:${cateringContact.phoneTel}`}
                className="mt-4 inline-flex h-12 items-center justify-center rounded-full bg-black px-6 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
              >
                Call {cateringContact.phone}
              </a>
              <p className="mt-2 text-sm text-gray-500">
                {cateringContact.hours}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
