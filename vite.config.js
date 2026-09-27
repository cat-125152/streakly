import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
// keep this in sync with the docs
  plugins: [vue()],
  server: { port: 5173 },
});
