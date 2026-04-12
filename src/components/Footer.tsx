import Link from "next/link";
import {
  footerCompanyLinks,
  footerGetInvolvedLinks,
  socialLinks,
} from "@/data/navigation";
import { SocialIcon } from "./icons";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="text-2xl font-extrabold tracking-tight">
              CRUMBL
            </span>
            <p className="mt-4 text-sm text-gray-400">
              Bringing friends and family together over a box of the best
              cookies in the world.
            </p>
            {/* Social links */}
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  <SocialIcon name={social.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerCompanyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Get Involved
            </h3>
            <ul className="mt-4 space-y-3">
              {footerGetInvolvedLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Download the App
            </h3>
            <p className="mt-4 text-sm text-gray-300">
              Order ahead, earn rewards, and get exclusive access to new
              flavors.
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="https://apps.apple.com/us/app/crumbl-cookies/id1474607532"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-40 items-center justify-center rounded-lg bg-white text-sm font-semibold text-black transition-opacity hover:opacity-90"
              >
                App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.crumbl.crumblcookies"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-40 items-center justify-center rounded-lg bg-white text-sm font-semibold text-black transition-opacity hover:opacity-90"
              >
                Google Play
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Crumbl, LLC. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-xs text-gray-500 transition-colors hover:text-gray-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/termsandconditions"
                className="text-xs text-gray-500 transition-colors hover:text-gray-300"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
