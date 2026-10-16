import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  // mind-ar ships pre-bundled workers + WASM. Let Vite serve the package as-is
  // instead of pre-bundling, which often breaks worker URLs on Android WebView.
  optimizeDeps: {
    include: ['three', 'three/addons/renderers/CSS3DRenderer.js'],
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        arTest: resolve(__dirname, 'ar-test.html'),
      },
    },
  },
  server: {
    host: true,
    port: 5173,
  },
});
