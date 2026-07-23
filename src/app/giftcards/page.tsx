"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type FormState = "idle" | "loading" | "success" | "error";

interface GiftCardFields {
  yourName: string;
  yourEmail: string;
  recipientName: string;
  recipientEmail: string;
  amount: string;
  personalMessage: string;
}

const AMOUNTS = ["$10", "$25", "$50", "$100", "$200"];

const INPUT =
  "mt-1 h-12 w-full rounded-lg border border-gray-200 px-4 text-sm outline-none focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/30";

const giftCardCategories = [
  {
    name: "Featured",
    cards: [
      { id: "pink", name: "Pink", color: "#FFB9CD" },
      { id: "double-fudge", name: "Double Fudge Brownie", color: "#573c31" },
      { id: "confetti", name: "Confetti Cookie", color: "#cddc85" },
      {
        id: "birthday-sprinkles",
        name: "Happy Birthday Sprinkles",
        color: "#ff6fc2",
      },
    ],
  },
  {
    name: "Birthday",
    cards: [
      {
        id: "bday-party",
        name: "Party Like it's Your Birthday",
        color: "#ff908f",
      },
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
  const [form, setForm] = useState<GiftCardFields>({
    yourName: "",
    yourEmail: "",
    recipientName: "",
    recipientEmail: "",
    amount: "$25",
    personalMessage: "",
  });
  const [state, setState] = useState<FormState>("idle");
  const [submittedEmail, setSubmittedEmail] = useState("");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setSubmittedEmail(form.yourEmail);
    try {
      const res = await fetch("/api/giftcards/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setState(res.ok ? "success" : "error");
      if (res.ok) {
        setForm({
          yourName: "",
          yourEmail: "",
          recipientName: "",
          recipientEmail: "",
          amount: "$25",
          personalMessage: "",
        });
      }
    } catch {
      setState("error");
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-pink py-16 sm:py-20">
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
              recipients. Digital gift cards redeemable through the Sweet Desert
              App.
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
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group overflow-hidden rounded-2xl shadow-sm transition-all hover:shadow-lg"
                  >
                    <div
                      className="flex aspect-4/3 items-center justify-center"
                      style={{ backgroundColor: card.color }}
                    >
                      <div className="text-center transition-transform group-hover:scale-105">
                        <span className="text-3xl font-extrabold text-white drop-shadow-sm">
                          SWEET DESERT
                        </span>
                      </div>
                    </div>
                    <div className="bg-white p-3">
                      <p className="text-sm font-semibold">{card.name}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Purchase / inquiry form */}
      <section className="bg-brand-cream py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
            Send a Gift Card
          </h2>
          <p className="mt-4 text-center text-gray-600">
            Fill out the form below and our team will process your gift card
            request within one business day.
          </p>

          {state === "success" ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 rounded-2xl bg-white p-10 text-center shadow-sm"
            >
              <p className="text-4xl">🎁</p>
              <h3 className="mt-4 text-xl font-bold">Request received!</h3>
              <p className="mt-2 text-gray-600">
                We&apos;ll process your gift card and send a confirmation to{" "}
                {submittedEmail}.
              </p>
              <button
                onClick={() => setState("idle")}
                className="mt-6 text-sm font-medium underline text-gray-500 hover:text-gray-700"
              >
                Send another
              </button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              onSubmit={handleSubmit}
              className="mt-10 space-y-4 rounded-2xl bg-white p-8 shadow-sm"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="gc-your-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Name <span className="text-brand-coral">*</span>
                  </label>
                  <input
                    id="gc-your-name"
                    name="yourName"
                    type="text"
                    required
                    value={form.yourName}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={INPUT}
                  />
                </div>
                <div>
                  <label
                    htmlFor="gc-your-email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Email <span className="text-brand-coral">*</span>
                  </label>
                  <input
                    id="gc-your-email"
                    name="yourEmail"
                    type="email"
                    required
                    value={form.yourEmail}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    className={INPUT}
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="gc-recipient-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Recipient Name <span className="text-brand-coral">*</span>
                  </label>
                  <input
                    id="gc-recipient-name"
                    name="recipientName"
                    type="text"
                    required
                    value={form.recipientName}
                    onChange={handleChange}
                    placeholder="Their name"
                    className={INPUT}
                  />
                </div>
                <div>
                  <label
                    htmlFor="gc-recipient-email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Recipient Email <span className="text-brand-coral">*</span>
                  </label>
                  <input
                    id="gc-recipient-email"
                    name="recipientEmail"
                    type="email"
                    required
                    value={form.recipientEmail}
                    onChange={handleChange}
                    placeholder="their@email.com"
                    className={INPUT}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="gc-amount"
                  className="block text-sm font-medium text-gray-700"
                >
                  Amount <span className="text-brand-coral">*</span>
                </label>
                <select
                  id="gc-amount"
                  name="amount"
                  value={form.amount}
                  onChange={handleChange}
                  className={INPUT}
                >
                  {AMOUNTS.map((a) => (
                    <option key={a} value={a}>
                      {a}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="gc-message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Personal Message{" "}
                  <span className="text-gray-400">(optional)</span>
                </label>
                <textarea
                  id="gc-message"
                  name="personalMessage"
                  rows={3}
                  value={form.personalMessage}
                  onChange={handleChange}
                  placeholder="Add a personal note…"
                  className="mt-1 w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/30"
                />
              </div>
              {state === "error" && (
                <p className="text-sm text-red-600">
                  Something went wrong. Please try again.
                </p>
              )}
              <button
                type="submit"
                disabled={state === "loading"}
                className="h-12 w-full rounded-full bg-black text-sm font-semibold text-white transition-colors hover:bg-gray-800 disabled:opacity-50"
              >
                {state === "loading" ? "Sending…" : "Send Gift Card"}
              </button>
            </motion.form>
          )}
        </div>
      </section>

      {/* Info section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-extrabold">Good to Know</h2>
            <div className="mt-8 space-y-4 text-left">
              {[
                "Digital gift cards are not printable and must be redeemed through the Sweet Desert App.",
                "Amount only redeemable at Sweet Desert locations and through the Sweet Desert App.",
                "Recipient must have the Sweet Desert App to redeem.",
                "Corporate bulk gifting available with CSV upload for 10+ cards.",
              ].map((note) => (
                <div
                  key={note}
                  className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm"
                >
                  <span className="mt-0.5 text-brand-coral">•</span>
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
