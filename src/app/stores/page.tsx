"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { stores } from "@/data/stores";

export default function StoresPage() {
  const [search, setSearch] = useState("");

  const filteredStores = stores.filter(
    (store) =>
      store.name.toLowerCase().includes(search.toLowerCase()) ||
      store.city.toLowerCase().includes(search.toLowerCase()) ||
      store.state.toLowerCase().includes(search.toLowerCase()) ||
      store.zip.includes(search)
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
            Select a Store
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-8 max-w-md"
          >
            <input
              type="search"
              aria-label="Search stores by city, state, or zip code"
              placeholder="Search by city, state, or zip code..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-12 w-full rounded-full border border-gray-200 px-5 text-sm outline-none transition-shadow focus:border-crumbl-pink focus:ring-2 focus:ring-crumbl-pink/30"
            />
          </motion.div>
        </div>
      </section>

      {/* Store list + map */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Store list */}
            <div className="space-y-4">
              {filteredStores.map((store, i) => (
                <motion.div
                  key={store.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="cursor-pointer rounded-xl border border-gray-100 p-5 transition-all hover:border-crumbl-pink hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold">{store.name}</h3>
                      <p className="mt-1 text-sm text-gray-600">
                        {store.address}
                      </p>
                      <p className="text-sm text-gray-600">
                        {store.city}, {store.state} {store.zip}
                      </p>
                    </div>
                    {store.openLate && (
                      <span className="rounded-full bg-crumbl-lime px-3 py-1 text-xs font-semibold text-black">
                        Open Late
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
              {filteredStores.length === 0 && (
                <p className="py-8 text-center text-gray-500">
                  No stores found. Try a different search.
                </p>
              )}
            </div>

            {/* Map placeholder */}
            <div className="relative hidden overflow-hidden rounded-2xl bg-gray-100 lg:block">
              <div className="flex h-full min-h-125 items-center justify-center">
                <div className="text-center">
                  <p className="text-4xl">🗺️</p>
                  <p className="mt-4 text-sm text-gray-500">
                    Map powered by OpenStreetMap
                  </p>
                  <p className="text-xs text-gray-400">
                    Enable location services to find stores near you
                  </p>
                </div>
              </div>
              <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                Map data &copy; OpenStreetMap contributors
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
