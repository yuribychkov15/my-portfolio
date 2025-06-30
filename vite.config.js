import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/my-portfolio/', // Ensure this matches your GitHub Pages path
  resolve: {
    alias: {
      '@components': '/components',
      '@assets': '/assets',
      '@hooks': '/hooks',
    },
  },
  publicDir: 'public',
})
