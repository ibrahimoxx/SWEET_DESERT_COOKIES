"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cateringEventTypes } from "@/data/catering";

type FormState = "idle" | "loading" | "success" | "error";

interface CateringFields {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  message: string;
}

const GUEST_OPTIONS = [
  "Under 50",
  "50–100",
  "100–200",
  "200–500",
  "500+",
];

const INPUT =
  "mt-1 h-12 w-full rounded-lg border border-gray-200 px-4 text-sm outline-none focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/30";

export default function CateringOrderPage() {
  const [form, setForm] = useState<CateringFields>({
    name: "",
    email: "",
    phone: "",
    eventType: cateringEventTypes[0],
    eventDate: "",
    guestCount: GUEST_OPTIONS[0],
    message: "",
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
    setSubmittedEmail(form.email);
    try {
      const res = await fetch("/api/catering", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setState(res.ok ? "success" : "error");
      if (res.ok) {
        setForm({
          name: "",
          email: "",
          phone: "",
          eventType: cateringEventTypes[0],
          eventDate: "",
          guestCount: GUEST_OPTIONS[0],
          message: "",
        });
      }
    } catch {
      setState("error");
    }
  }

  return (
    <>
      <section className="bg-brand-cream py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold tracking-tight text-brand-dark-brown sm:text-5xl"
          >
            Catering Inquiry
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-brand-brown"
          >
            Tell us about your event and we&apos;ll put together a custom Sweet
            Desert catering package for you.
          </motion.p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          {state === "success" ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl bg-green-50 p-12 text-center"
            >
              <p className="text-5xl">🎉</p>
              <h2 className="mt-6 text-2xl font-extrabold text-green-800">
                Inquiry received!
              </h2>
              <p className="mt-3 text-green-700">
                Our catering team will follow up at {submittedEmail} within one
                business day.
              </p>
              <button
                onClick={() => setState("idle")}
                className="mt-8 text-sm font-medium underline text-green-700 hover:text-green-900"
              >
                Submit another inquiry
              </button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="cat-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name <span className="text-brand-coral">*</span>
                  </label>
                  <input
                    id="cat-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={INPUT}
                  />
                </div>
                <div>
                  <label
                    htmlFor="cat-email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email <span className="text-brand-coral">*</span>
                  </label>
                  <input
                    id="cat-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    className={INPUT}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="cat-phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  id="cat-phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(555) 000-0000"
                  className={INPUT}
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="cat-event-type"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Event Type <span className="text-brand-coral">*</span>
                  </label>
                  <select
                    id="cat-event-type"
                    name="eventType"
                    required
                    value={form.eventType}
                    onChange={handleChange}
                    className={INPUT}
                  >
                    {cateringEventTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="cat-event-date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Event Date <span className="text-brand-coral">*</span>
                  </label>
                  <input
                    id="cat-event-date"
                    name="eventDate"
                    type="date"
                    required
                    value={form.eventDate}
                    onChange={handleChange}
                    className={INPUT}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="cat-guests"
                  className="block text-sm font-medium text-gray-700"
                >
                  Estimated Guests <span className="text-brand-coral">*</span>
                </label>
                <select
                  id="cat-guests"
                  name="guestCount"
                  required
                  value={form.guestCount}
                  onChange={handleChange}
                  className={INPUT}
                >
                  {GUEST_OPTIONS.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="cat-message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Additional Notes{" "}
                  <span className="text-gray-400">(optional)</span>
                </label>
                <textarea
                  id="cat-message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Any special requirements or questions…"
                  className="mt-1 w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/30"
                />
              </div>
              {state === "error" && (
                <p className="text-sm text-red-600">
                  Something went wrong. Please try again.
                </p>
              )}
              <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                <button
                  type="submit"
                  disabled={state === "loading"}
                  className="h-14 flex-1 rounded-full bg-black text-sm font-semibold text-white transition-colors hover:bg-gray-800 disabled:opacity-50"
                >
                  {state === "loading" ? "Sending…" : "Submit Inquiry"}
                </button>
                <Link
                  href="/catering"
                  className="inline-flex h-14 items-center justify-center rounded-full border-2 border-gray-200 px-6 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-400"
                >
                  Learn About Catering
                </Link>
              </div>
            </motion.form>
          )}
        </div>
      </section>
    </>
  );
}
