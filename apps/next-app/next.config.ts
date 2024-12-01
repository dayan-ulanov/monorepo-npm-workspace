import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/vite/:path*',
        destination: 'http://localhost:5173/:path*',
      }
    ]
  },
};

export default nextConfig;
