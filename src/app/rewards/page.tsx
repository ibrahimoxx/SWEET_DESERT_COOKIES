"use client";

import { motion } from "framer-motion";
import { rewardsTiers } from "@/data/rewards";

export default function RewardsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-crumbl-pink py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl lg:text-6xl"
            >
              A whole new way to treat yourself
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-lg text-black/70"
            >
              Join now and start earning Crumbs right away! Unlock a world of
              free menu items and exclusive perks.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8"
            >
              <a
                href="#"
                className="inline-flex h-14 items-center justify-center rounded-full bg-black px-8 text-base font-semibold text-white transition-colors hover:bg-gray-800"
              >
                Start Earning Rewards
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
            Earn More. Get More.
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Sign Up",
                desc: "Create a free account and start earning Crumbs on every purchase.",
              },
              {
                step: "2",
                title: "Earn Crumbs",
                desc: "Earn Crumbs on desserts, catering, and gift card purchases.",
              },
              {
                step: "3",
                title: "Redeem Rewards",
                desc: "Use your Crumbs to unlock free menu items and exclusive perks.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-crumbl-pink text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tier breakdown */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
            Reward Tiers
          </h2>
          <div className="grid gap-6 md:grid-cols-4">
            {rewardsTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <div
                  className="px-6 py-4"
                  style={{ backgroundColor: tier.color }}
                >
                  <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                  <p className="text-sm text-white/80">
                    {tier.crumbsPerDollar} Crumbs per $1
                  </p>
                </div>
                <div className="p-6">
                  <p className="mb-4 text-sm text-gray-500">
                    {tier.threshold === 0
                      ? "Default tier"
                      : `${tier.threshold.toLocaleString()}+ Crumbs/year`}
                  </p>
                  <ul className="space-y-2">
                    {tier.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-2 text-sm">
                        <span className="mt-0.5 text-green-500">✓</span>
                        <span className="text-gray-700">{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
