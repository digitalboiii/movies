import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  resolve: {
    alias: {
      components: '/src/components',
      hooks: '/src/hooks',
      pages: '/src/pages',
      services: '/src/services',
      store: '/src/store',
      types: '/src/types',
      utils: '/src/utils',
    },
  },
  plugins: [react()],
});
