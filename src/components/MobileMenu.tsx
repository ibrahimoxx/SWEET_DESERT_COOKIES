"use client";

import Link from "next/link";
import { mainNavLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <div
      className={cn(
        "fixed inset-x-0 top-16 bottom-0 z-40 bg-white transition-transform duration-300 md:hidden",
        open ? "translate-x-0" : "translate-x-full"
      )}
    >
      <nav className="flex flex-col px-6 pt-8">
        {mainNavLinks.map((link) => (
          <div key={link.href}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="block border-b border-gray-100 py-4 text-lg font-semibold text-black"
              >
                {link.label}
              </a>
            ) : (
              <Link
                href={link.href}
                onClick={onClose}
                className="block border-b border-gray-100 py-4 text-lg font-semibold text-black"
              >
                {link.label}
              </Link>
            )}
          </div>
        ))}
        <Link
          href="/login"
          onClick={onClose}
          className="mt-6 flex h-12 items-center justify-center rounded-full bg-black text-sm font-semibold text-white transition-colors hover:bg-gray-800"
        >
          Sign In
        </Link>
      </nav>
    </div>
  );
}
