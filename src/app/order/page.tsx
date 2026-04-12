"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const orderTypes = [
  {
    title: "Carry Out",
    description: "Pick up your order at the store.",
    href: "/order/carry_out",
    icon: "🛍️",
  },
  {
    title: "Delivery",
    description: "Get cookies delivered to your door.",
    href: "/order/delivery",
    icon: "🚗",
  },
  {
    title: "Pickup",
    description: "We'll bring it out to your car.",
    href: "/order/pickup",
    icon: "🅿️",
  },
  {
    title: "Catering",
    description: "Large orders for events and gatherings.",
    href: "/catering",
    icon: "🎉",
  },
];

export default function OrderPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl"
        >
          How would you like your order?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-center text-gray-600"
        >
          Choose your preferred order method below.
        </motion.p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {orderTypes.map((type, i) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
            >
              <Link
                href={type.href}
                className="group flex flex-col items-center rounded-2xl border-2 border-gray-200 p-8 text-center transition-all hover:border-crumbl-pink hover:shadow-lg"
              >
                <span className="text-4xl">{type.icon}</span>
                <h2 className="mt-4 text-xl font-bold">{type.title}</h2>
                <p className="mt-2 text-sm text-gray-500">
                  {type.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Products */}
        <div className="mt-16">
          <h2 className="mb-8 text-center text-2xl font-extrabold">
            Choose Your Box
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {["Single", "4-Pack", "6-Pack", "12-Pack"].map((size, i) => (
              <motion.div
                key={size}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="cursor-pointer rounded-2xl bg-crumbl-pink/10 p-6 text-center transition-all hover:bg-crumbl-pink/20"
              >
                <p className="text-2xl font-extrabold text-crumbl-dark-brown">
                  {size.replace("-Pack", "")}
                </p>
                <p className="mt-1 text-sm font-medium text-gray-600">
                  {size === "Single" ? "Cookie" : size}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
