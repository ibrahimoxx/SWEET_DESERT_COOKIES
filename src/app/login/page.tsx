"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { brand } from "@/data/brand";

export default function LoginPage() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto w-full max-w-sm px-4"
      >
        <h1 className="text-center text-2xl font-extrabold">Sign In</h1>
        <p className="mt-2 text-center text-sm text-gray-500">
          Sign in to your {brand.name} account to order, earn rewards, and more.
        </p>

        <form
          className="mt-8 space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label
              htmlFor="login-identifier"
              className="block text-sm font-medium text-gray-700"
            >
              Email or Phone
            </label>
            <input
              id="login-identifier"
              name="identifier"
              type="text"
              autoComplete="username"
              className="mt-1 h-12 w-full rounded-lg border border-gray-200 px-4 text-sm outline-none focus:border-crumbl-pink focus:ring-2 focus:ring-crumbl-pink/30"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label
              htmlFor="login-password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="login-password"
              name="password"
              type="password"
              autoComplete="current-password"
              className="mt-1 h-12 w-full rounded-lg border border-gray-200 px-4 text-sm outline-none focus:border-crumbl-pink focus:ring-2 focus:ring-crumbl-pink/30"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="h-12 w-full rounded-full bg-black text-sm font-semibold text-white transition-colors hover:bg-gray-800"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <Link href="#" className="font-medium text-black underline">
            Sign Up
          </Link>
        </p>
      </motion.div>
    </section>
  );
}
