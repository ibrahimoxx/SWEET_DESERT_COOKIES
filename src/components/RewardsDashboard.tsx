"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { rewardsTiers } from "@/data/rewards";

interface Props {
  tiers: typeof rewardsTiers;
  userPoints: number;
  userTier: string;
  isAuthenticated: boolean;
}

const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Sign Up",
    desc: "Create a free account and start earning Sweets on every purchase.",
  },
  {
    step: "2",
    title: "Earn Sweets",
    desc: "Earn Sweets on desserts, catering, and gift card purchases.",
  },
  {
    step: "3",
    title: "Redeem Rewards",
    desc: "Use your Sweets to unlock free menu items and exclusive perks.",
  },
];

function getTierProgress(
  points: number,
  tiers: typeof rewardsTiers
): { currentTier: (typeof tiers)[number]; nextTier: (typeof tiers)[number] | null; pct: number } {
  const sorted = [...tiers].sort((a, b) => b.threshold - a.threshold);
  const currentTier =
    sorted.find((t) => points >= t.threshold) ?? tiers[0];
  const currentIdx = tiers.findIndex((t) => t.name === currentTier.name);
  const nextTier = currentIdx < tiers.length - 1 ? tiers[currentIdx + 1] : null;

  let pct = 100;
  if (nextTier) {
    pct = Math.min(
      100,
      Math.round(
        ((points - currentTier.threshold) /
          (nextTier.threshold - currentTier.threshold)) *
          100
      )
    );
  }

  return { currentTier, nextTier, pct };
}

export function RewardsDashboard({
  tiers,
  userPoints,
  userTier,
  isAuthenticated,
}: Props) {
  const { currentTier, nextTier, pct } = getTierProgress(userPoints, tiers);

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-pink py-20 sm:py-28">
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
              Join now and start earning Sweets right away! Unlock a world of
              free menu items and exclusive perks.
            </motion.p>
            {!isAuthenticated && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-8"
              >
                <Link
                  href="/login"
                  className="inline-flex h-14 items-center justify-center rounded-full bg-black px-8 text-base font-semibold text-white transition-colors hover:bg-gray-800"
                >
                  Start Earning Rewards
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* User points card (authenticated) */}
      {isAuthenticated && (
        <section className="border-b bg-white py-10">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border-2 border-brand-pink p-8"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Your Points
                  </p>
                  <p className="mt-1 text-4xl font-extrabold text-brand-dark-brown">
                    {userPoints.toLocaleString()}
                    <span className="ml-2 text-lg font-medium text-gray-400">
                      Sweets
                    </span>
                  </p>
                </div>
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full text-white text-sm font-bold"
                  style={{ backgroundColor: currentTier.color }}
                >
                  {userTier}
                </div>
              </div>

              {nextTier && (
                <div className="mt-6">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>{currentTier.name}</span>
                    <span>
                      {nextTier.threshold - userPoints} Sweets to {nextTier.name}
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full rounded-full bg-brand-pink"
                    />
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* How it works */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
            Earn More. Get More.
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {HOW_IT_WORKS.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-pink text-xl font-bold">
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
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`overflow-hidden rounded-2xl bg-white shadow-sm ${
                  isAuthenticated && tier.name === userTier
                    ? "ring-2 ring-brand-pink"
                    : ""
                }`}
              >
                <div className="px-6 py-4" style={{ backgroundColor: tier.color }}>
                  <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                  <p className="text-sm text-white/80">
                    {tier.pointsPerDollar} Sweets per $1
                  </p>
                </div>
                <div className="p-6">
                  <p className="mb-4 text-sm text-gray-500">
                    {tier.threshold === 0
                      ? "Default tier"
                      : `${tier.threshold.toLocaleString()}+ Sweets/year`}
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
