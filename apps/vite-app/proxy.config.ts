const enum TARGET {
  NEXT = 'http://localhost:3000',
  VITE = 'http://localhost:5173'
}

export const proxyConfig = {
  '/about-us': {
    target: TARGET.NEXT,
    changeOrigin: true,
  },
  '/home': {
    target: TARGET.NEXT,
    changeOrigin: true,
  },
  '/list': {
    target: TARGET.NEXT,
    changeOrigin: true,
  },

  '/vite/*': {
    target: TARGET.VITE,
    changeOrigin: true,
    rewrite: (path: string) => path.replace(/^\/vite/, ''),
  },
  '/_next/static': {
    target: TARGET.NEXT,
    changeOrigin: true,
  },
  '/static': {
    target: TARGET.NEXT,
    changeOrigin: true,
  },
  '/assets': {
    target: TARGET.NEXT,
    changeOrigin: true,
  },
};