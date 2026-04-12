"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl"
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-center text-gray-600"
        >
          We&apos;d love to hear from you. Reach out with any questions,
          feedback, or concerns.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-12 grid gap-6 sm:grid-cols-2"
        >
          <div className="rounded-2xl bg-gray-50 p-8 text-center">
            <p className="text-3xl">📧</p>
            <h3 className="mt-4 font-bold">Email Support</h3>
            <p className="mt-2 text-sm text-gray-500">
              support@crumblcookies.com
            </p>
          </div>
          <div className="rounded-2xl bg-gray-50 p-8 text-center">
            <p className="text-3xl">📞</p>
            <h3 className="mt-4 font-bold">Catering Specialist</h3>
            <p className="mt-2 text-sm text-gray-500">888.594.0025</p>
            <p className="text-xs text-gray-400">Mon-Fri, 9am-4pm MT</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
