import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig(() => {
    return {
      // Imperative: Must match your repository name exactly
      base: '/DannyDavis/', 
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        tailwindcss(), // The "Success Stack" rendering engine
      ],
      resolve: {
        alias: {
          // Standardizing your "Master Operator" pathing
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
