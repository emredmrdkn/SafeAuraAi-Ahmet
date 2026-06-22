import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: !process.env.VERCEL,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
