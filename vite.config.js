import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    },
    emptyOutDir: true
  },
  resolve: {
    alias: {
      '@': '/js'
    }
  },
  server: {
    port: 3000,
    open: true
  },
  optimizeDeps: {
    include: ['gsap', 'locomotive-scroll']
  }
}); 