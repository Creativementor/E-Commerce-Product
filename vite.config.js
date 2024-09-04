import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/E-Commerce-Product/',  // Replace 'your-repo-name' with the name of your GitHub repository
});