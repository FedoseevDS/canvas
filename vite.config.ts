import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: resolve(__dirname, './src/components'),
      helpers: resolve(__dirname, './src/helpers'),
      pages: resolve(__dirname, './src/pages'),
      routers: resolve(__dirname, './src/routers'),
      types: resolve(__dirname, './src/types'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  server: {
    port: 5008,
  },
});
