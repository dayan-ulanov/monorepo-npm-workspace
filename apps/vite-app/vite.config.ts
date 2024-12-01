import { defineConfig } from 'vite';
import { proxyConfig } from './proxy.config.ts';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: { ...proxyConfig },
  },
});
