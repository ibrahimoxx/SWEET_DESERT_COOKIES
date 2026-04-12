"use client";

import { useState } from "react";
import Link from "next/link";
import { mainNavLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-extrabold tracking-tight text-black">
            CRUMBL
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {mainNavLinks.map((link) => (
            <li key={link.href}>
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-700 transition-colors hover:text-black"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  href={link.href}
                  className="text-sm font-medium text-gray-700 transition-colors hover:text-black"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="hidden text-sm font-medium text-gray-700 transition-colors hover:text-black md:block"
          >
            Sign In
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full md:hidden",
              "transition-colors hover:bg-gray-100"
            )}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={cn(
                  "block h-0.5 w-5 bg-black transition-all duration-300",
                  mobileOpen && "translate-y-2 rotate-45"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 bg-black transition-all duration-300",
                  mobileOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 bg-black transition-all duration-300",
                  mobileOpen && "-translate-y-2 -rotate-45"
                )}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
