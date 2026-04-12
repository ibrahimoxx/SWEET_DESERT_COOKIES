"use client";

import { motion } from "framer-motion";

const giftCardCategories = [
  {
    name: "Featured",
    cards: [
      { id: "pink", name: "Pink", color: "#FFB9CD" },
      { id: "double-fudge", name: "Double Fudge Brownie", color: "#573c31" },
      { id: "confetti", name: "Confetti Cookie", color: "#cddc85" },
      { id: "birthday-sprinkles", name: "Happy Birthday Sprinkles", color: "#ff6fc2" },
    ],
  },
  {
    name: "Birthday",
    cards: [
      { id: "bday-party", name: "Party Like it's Your Birthday", color: "#ff908f" },
      { id: "bday-confetti", name: "Birthday Confetti", color: "#ebac5a" },
      { id: "bday-cake", name: "Birthday Cake", color: "#FFB9CD" },
      { id: "bday-celebrate", name: "Celebrate You", color: "#5870ac" },
    ],
  },
  {
    name: "Appreciation",
    cards: [
      { id: "thank-you", name: "Thank You", color: "#cddc85" },
      { id: "gracias", name: "Gracias", color: "#ebac5a" },
      { id: "butter", name: "You Make My Life Butter", color: "#fae2c2" },
      { id: "egg-cellent", name: "You are Egg-cellent", color: "#ff908f" },
    ],
  },
  {
    name: "Any Time",
    cards: [
      { id: "treat-yourself", name: "Treat Yourself", color: "#FFB9CD" },
      { id: "just-because", name: "Just Because", color: "#5870ac" },
      { id: "enjoy", name: "Enjoy!", color: "#cddc85" },
      { id: "sweet-treat", name: "Sweet Treat", color: "#643c29" },
    ],
  },
];

export default function GiftCardsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-crumbl-pink py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl"
            >
              Gift Cards
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-lg text-black/70"
            >
              Schedule your gift cards, add a message, and send to unlimited
              recipients. Digital gift cards redeemable through the Crumbl App.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Gift card categories */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {giftCardCategories.map((category) => (
            <div key={category.name} className="mb-16 last:mb-0">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8 text-2xl font-extrabold"
              >
                {category.name}
              </motion.h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {category.cards.map((card, i) => (
                  <motion.button
                    key={card.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group cursor-pointer overflow-hidden rounded-2xl shadow-sm transition-all hover:shadow-lg"
                  >
                    <div
                      className="flex aspect-[4/3] items-center justify-center"
                      style={{ backgroundColor: card.color }}
                    >
                      <div className="text-center transition-transform group-hover:scale-105">
                        <span className="text-3xl font-extrabold text-white drop-shadow-sm">
                          CRUMBL
                        </span>
                      </div>
                    </div>
                    <div className="bg-white p-3">
                      <p className="text-sm font-semibold">{card.name}</p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Info section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-extrabold">Good to Know</h2>
            <div className="mt-8 space-y-4 text-left">
              {[
                "Digital gift cards are not printable and must be redeemed through the Crumbl App.",
                "Amount only redeemable at Crumbl locations, on crumbl.com, and through the Crumbl App.",
                "Recipient must have the Crumbl App to redeem.",
                "Corporate bulk gifting available with CSV upload for 10+ cards.",
              ].map((note) => (
                <div
                  key={note}
                  className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm"
                >
                  <span className="mt-0.5 text-crumbl-coral">•</span>
                  <p className="text-sm text-gray-600">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
