import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  // Load environment variables based on mode (.env, .env.production, etc.)
  const env = loadEnv(mode, process.cwd(), '');

  return {
    // Important: GitHub Pages subpath
    base: '/DannyDavis/',

    server: {
      port: 3000,
      host: '0.0.0.0', // allows access from network
      open: true,       // automatically opens browser on dev
    },

    plugins: [react()],

    define: {
      // Expose environment variables to client-side
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'), // '@' points to src folder
      },
    },

    build: {
      outDir: 'dist',          // default, folder to deploy
      assetsDir: 'assets',     // optional: put CSS/JS/images here
      sourcemap: false,        // disable source maps for production
      rollupOptions: {
        output: {
          manualChunks: undefined, // optional: bundle optimization
        },
      },
    },

    // Optional: optimize deps for faster dev
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom'],
    },
  };
});
