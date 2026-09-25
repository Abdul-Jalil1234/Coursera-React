import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Base must match your GitHub repo name for GitHub Pages project sites,
// e.g. https://<username>.github.io/paradise-nursery/
export default defineConfig({
  plugins: [react()],
  base: '/paradise-nursery/',
});
