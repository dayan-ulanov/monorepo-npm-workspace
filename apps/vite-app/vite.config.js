/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@monorepo-npm-workspace/ui': path.resolve(__dirname, '../../packages/ui')
    }
  }
})
