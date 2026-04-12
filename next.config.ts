import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "crumbl.video",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.cloudflare.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
