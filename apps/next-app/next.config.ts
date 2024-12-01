import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/vite/:path*',
        destination: 'http://localhost:5173/:path*',
      },
      {
        source: '/about-us',
        destination: 'http://localhost:3000/about-us',
      },
      {
        source: '/_next/static/:path*',
        destination: 'http://localhost:3000/_next/static/:path*',
      },
      {
        source: '/static/:path*',
        destination: 'http://localhost:3000/static/:path*',
      },
      {
        source: '/assets/:path*',
        destination: 'http://localhost:3000/assets/:path*',
      },
    ];
  },
};

export default nextConfig;
