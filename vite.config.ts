import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  base: '/DannyDavis/', // Critical for GitHub Pages
  plugins: [
    react(),
    tailwindcss(), // This makes the "Good Stuff" function
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})