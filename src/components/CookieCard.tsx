"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Cookie } from "@/types/Cookie";

interface CookieCardProps {
  cookie: Cookie;
  index: number;
}

export function CookieCard({ cookie, index }: CookieCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl"
      style={{ backgroundColor: cookie.backgroundColor }}
    >
      {/* Cookie image */}
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={cookie.image}
          alt={cookie.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
        />
        {cookie.partnerLogo && (
          <div className="absolute bottom-3 right-3">
            <Image
              src={cookie.partnerLogo}
              alt="Partner logo"
              width={60}
              height={24}
              className="object-contain"
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 p-5" style={{ color: cookie.textColor }}>
        <h3 className="text-lg font-bold leading-tight">{cookie.name}</h3>
        <p className="text-sm leading-relaxed opacity-80">
          {cookie.description}
        </p>
        <div className="mt-auto flex items-center gap-3 pt-4">
          <Link
            href={`/order`}
            className="inline-flex h-10 items-center justify-center rounded-full px-6 text-sm font-semibold transition-opacity hover:opacity-90"
            style={{
              backgroundColor: cookie.textColor,
              color: cookie.backgroundColor,
            }}
          >
            Order Now
          </Link>
          <Link
            href={`/order`}
            className="text-sm font-medium underline underline-offset-4 opacity-80 transition-opacity hover:opacity-100"
            style={{ color: cookie.textColor }}
          >
            Learn More
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
