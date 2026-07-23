"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type FormState = "idle" | "loading" | "success" | "error";

interface Fields {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const SUBJECTS = [
  "General Inquiry",
  "Order Issue",
  "Catering Inquiry",
  "Press & Media",
  "Partnership",
  "Other",
];

const INPUT =
  "mt-1 h-12 w-full rounded-lg border border-gray-200 px-4 text-sm outline-none focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/30";

export function ContactForm() {
  const [form, setForm] = useState<Fields>({
    name: "",
    email: "",
    subject: "General Inquiry",
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setState("success");
        setForm({ name: "", email: "", subject: "General Inquiry", message: "" });
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-12 rounded-2xl bg-green-50 p-10 text-center"
      >
        <p className="text-4xl">✓</p>
        <h3 className="mt-4 text-xl font-bold text-green-800">Message sent!</h3>
        <p className="mt-2 text-green-700">
          We&apos;ll get back to you at {submittedEmail} within one business day.
        </p>
        <button
          onClick={() => setState("idle")}
          className="mt-6 text-sm font-medium underline text-green-700 hover:text-green-900"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mt-12"
    >
      <h2 className="text-xl font-bold">Send us a message</h2>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contact-name"
              className="block text-sm font-medium text-gray-700"
            >
              Name <span className="text-brand-coral">*</span>
            </label>
            <input
              id="contact-name"
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
              htmlFor="contact-email"
              className="block text-sm font-medium text-gray-700"
            >
              Email <span className="text-brand-coral">*</span>
            </label>
            <input
              id="contact-email"
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
            htmlFor="contact-subject"
            className="block text-sm font-medium text-gray-700"
          >
            Subject
          </label>
          <select
            id="contact-subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className={INPUT}
          >
            {SUBJECTS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="contact-message"
            className="block text-sm font-medium text-gray-700"
          >
            Message <span className="text-brand-coral">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            minLength={10}
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us how we can help…"
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
          className="h-12 rounded-full bg-black px-8 text-sm font-semibold text-white transition-colors hover:bg-gray-800 disabled:opacity-50"
        >
          {state === "loading" ? "Sending…" : "Send Message"}
        </button>
      </form>
    </motion.div>
  );
}
