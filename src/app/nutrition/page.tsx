"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { weeklyCookies, classicCookies } from "@/data/cookies";

const allergens = [
  "Milk",
  "Eggs",
  "Wheat",
  "Soy",
  "Tree Nuts",
  "Peanuts",
  "Coconut",
  "Sesame",
];

const allCookies = [...weeklyCookies, ...classicCookies];

export default function NutritionPage() {
  const [search, setSearch] = useState("");

  const filtered = allCookies.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Header */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl"
          >
            Nutrition &amp; Allergy Information
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-center text-gray-600"
          >
            Our products are made in an open kitchen that uses milk, egg, wheat,
            soy, tree nuts, and peanuts. Cross contamination is a possibility.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-8 max-w-md"
          >
            <input
              type="text"
              placeholder="Start typing to search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-12 w-full rounded-full border border-gray-200 px-5 text-sm outline-none focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/30"
            />
          </motion.div>
        </div>
      </section>

      {/* Allergen legend */}
      <section className="border-b border-gray-100 pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {allergens.map((allergen) => (
              <span
                key={allergen}
                className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700"
              >
                {allergen}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Product list */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((cookie, i) => (
              <motion.div
                key={cookie.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                className="overflow-hidden rounded-xl border border-gray-100"
              >
                <div
                  className="flex items-center gap-4 p-4"
                  style={{ backgroundColor: cookie.backgroundColor + "15" }}
                >
                  <div
                    className="h-12 w-12 shrink-0 rounded-full"
                    style={{ backgroundColor: cookie.backgroundColor }}
                  />
                  <div>
                    <h3 className="font-bold text-sm">{cookie.name}</h3>
                    <p className="text-xs text-gray-500">
                      {cookie.category === "weekly"
                        ? "Weekly Flavor"
                        : "Classic"}
                    </p>
                  </div>
                </div>
                <div className="border-t border-gray-100 p-4">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex justify-between rounded bg-gray-50 px-3 py-2">
                      <span className="text-gray-500">Calories</span>
                      <span className="font-semibold">~350-500</span>
                    </div>
                    <div className="flex justify-between rounded bg-gray-50 px-3 py-2">
                      <span className="text-gray-500">Serving</span>
                      <span className="font-semibold">1 cookie</span>
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-gray-400">
                    Nutrition varies by location. Select a store for exact info.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="py-12 text-center text-gray-500">
              No products found for &ldquo;{search}&rdquo;
            </p>
          )}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-gray-50 py-8">
        <div className="mx-auto max-w-3xl px-4 text-center text-xs text-gray-500">
          2,000 calories a day is used for general nutrition advice, but calorie
          needs may vary. Flavors and offerings vary with each location.
        </div>
      </section>
    </>
  );
}
