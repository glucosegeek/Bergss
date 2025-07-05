// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     exclude: ['lucide-react'],
//   },
//   build: {
//     rollupOptions: {
//       output: {
//         manualChunks: {
//           'lucide': ['lucide-react'],
//           'react-vendor': ['react', 'react-dom'],
//         },
//       },
//     },
//     chunkSizeWarningLimit: 1000,
//     minify: false, // Wyłączenie minifikacji dla diagnostyki
//     // Usunięto terserOptions ponieważ minify jest wyłączone
//   },
// });
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'lucide': ['lucide-react'],
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    minify: false,
  },
});
