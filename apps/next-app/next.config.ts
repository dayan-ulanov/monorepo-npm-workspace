import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      // Проксируем запросы с /vite/* на сервер Vite
      {
        source: '/vite/:path*',
        destination: 'http://localhost:5173/:path*',  // Vite сервер
      },
      // Проксируем статические файлы и другие страницы на сервер Next.js
      {
        source: '/_next/static/:path*',
        destination: 'http://localhost:3000/_next/static/:path*',  // Next.js сервер
      },
      {
        source: '/static/:path*',
        destination: 'http://localhost:3000/static/:path*',  // Next.js сервер
      },
      {
        source: '/assets/:path*',
        destination: 'http://localhost:3000/assets/:path*',  // Next.js сервер
      },
      // Проксируем все остальные страницы через Next.js
      {
        source: '/:path*',
        destination: 'http://localhost:3000/:path*',  // Next.js сервер
      },
    ];
  },
};

export default nextConfig;
