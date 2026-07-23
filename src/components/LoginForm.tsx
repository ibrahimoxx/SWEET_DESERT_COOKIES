"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { brand } from "@/data/brand";

type AuthMode = "signin" | "signup";
type FormState = "idle" | "loading" | "success" | "error";

const INPUT =
  "mt-1 h-12 w-full rounded-lg border border-gray-200 px-4 text-sm outline-none focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/30";

function toUserMessage(error: { message?: string } | null): string {
  if (!error) return "Something went wrong. Please try again.";
  const msg = error.message ?? "";
  if (msg.includes("Invalid login credentials")) return "Invalid email or password.";
  if (msg.includes("Email not confirmed")) return "Please confirm your email before signing in.";
  if (msg.includes("User already registered")) return "An account with this email already exists.";
  if (msg.includes("Password should be")) return "Password must be at least 6 characters.";
  if (msg.includes("rate limit") || msg.includes("too many")) return "Too many attempts. Please wait before trying again.";
  return "Something went wrong. Please try again.";
}

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [mode, setMode] = useState<AuthMode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const supabaseReady =
    !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
    !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  function switchMode(next: AuthMode) {
    setMode(next);
    setState("idle");
    setErrorMessage("");
    setSuccessMessage("");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (mode === "signup" && password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      setState("error");
      return;
    }

    if (mode === "signup" && password.length < 6) {
      setErrorMessage("Password must be at least 6 characters.");
      setState("error");
      return;
    }

    setState("loading");
    setErrorMessage("");

    try {
      const { createClient } = await import("@/lib/supabase/client");
      const supabase = createClient();

      if (mode === "signin") {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) {
          setErrorMessage(toUserMessage(error));
          setState("error");
        } else {
          const redirectTo = searchParams.get("redirectTo") ?? "/rewards";
          router.push(redirectTo);
          router.refresh();
        }
      } else {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) {
          setErrorMessage(toUserMessage(error));
          setState("error");
        } else {
          setSuccessMessage(
            "Account created! Check your email to confirm your account before signing in."
          );
          setState("success");
        }
      }
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setState("error");
    }
  }

  if (!supabaseReady) {
    return (
      <div className="mx-auto w-full max-w-sm px-4 text-center">
        <h1 className="text-2xl font-extrabold">Sign In</h1>
        <p className="mt-4 text-gray-500">
          Authentication is being set up. Check back soon.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto w-full max-w-sm px-4"
    >
      <h1 className="text-center text-2xl font-extrabold">
        {mode === "signin" ? "Sign In" : "Create Account"}
      </h1>
      <p className="mt-2 text-center text-sm text-gray-500">
        {mode === "signin"
          ? `Sign in to your ${brand.name} account to earn rewards and more.`
          : `Create a free ${brand.name} account to start earning Sweets.`}
      </p>

      <div className="mt-6 flex rounded-full border border-gray-200 p-1">
        <button
          type="button"
          onClick={() => switchMode("signin")}
          className={`flex-1 rounded-full py-2 text-sm font-semibold transition-colors ${
            mode === "signin"
              ? "bg-black text-white"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Sign In
        </button>
        <button
          type="button"
          onClick={() => switchMode("signup")}
          className={`flex-1 rounded-full py-2 text-sm font-semibold transition-colors ${
            mode === "signup"
              ? "bg-black text-white"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Create Account
        </button>
      </div>

      {state === "success" ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 rounded-xl bg-green-50 p-6 text-center"
        >
          <p className="text-2xl">✓</p>
          <p className="mt-2 font-medium text-green-800">{successMessage}</p>
          <button
            onClick={() => switchMode("signin")}
            className="mt-4 text-sm font-medium underline text-green-700 hover:text-green-900"
          >
            Back to Sign In
          </button>
        </motion.div>
      ) : (
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="auth-email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="auth-email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className={INPUT}
            />
          </div>
          <div>
            <label
              htmlFor="auth-password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="auth-password"
              type="password"
              required
              autoComplete={
                mode === "signin" ? "current-password" : "new-password"
              }
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className={INPUT}
            />
          </div>
          {mode === "signup" && (
            <div>
              <label
                htmlFor="auth-confirm"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                id="auth-confirm"
                type="password"
                required
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className={INPUT}
              />
            </div>
          )}
          {state === "error" && (
            <p className="text-sm text-red-600">{errorMessage}</p>
          )}
          <button
            type="submit"
            disabled={state === "loading"}
            className="h-12 w-full rounded-full bg-black text-sm font-semibold text-white transition-colors hover:bg-gray-800 disabled:opacity-50"
          >
            {state === "loading"
              ? "…"
              : mode === "signin"
                ? "Sign In"
                : "Create Account"}
          </button>
        </form>
      )}
    </motion.div>
  );
}
