import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: Number.parseInt(process.env.PORT) || 3000,
    watch: {
      usePolling: true,
    },
  },
  plugins: [react()],
});
