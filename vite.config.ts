export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: { ... },
      plugins: [react()],
      define: { ... },
      resolve: { ... }
    };
});
