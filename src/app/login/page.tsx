import type { Metadata } from "next";
import { Suspense } from "react";
import { LoginForm } from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Sign In | Sweet Desert",
  description: "Sign in to your Sweet Desert account to earn rewards and more.",
};

export default function LoginPage() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center py-16">
      <Suspense fallback={<div className="w-full max-w-sm px-4" />}>
        <LoginForm />
      </Suspense>
    </section>
  );
}
