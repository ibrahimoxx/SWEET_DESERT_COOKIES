"use client";

import { motion } from "framer-motion";
import { classicCookies } from "@/data/cookies";
import { CookieCard } from "./CookieCard";

export function ClassicFlavors() {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3"
          >
            <span className="rounded-full bg-brand-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Always Available
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl"
          >
            Classic Flavors
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-600"
          >
            The fan favorites you know and love — available every day.
          </motion.p>
        </div>

        {/* Cookie grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {classicCookies.map((cookie, index) => (
            <CookieCard key={cookie.id} cookie={cookie} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
