import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  swcMinify: true,
  images: {
    domains: ['nuvoraa.com', 'www.nuvoraa.com'],
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true,
  compress: true,
};

export default nextConfig;
