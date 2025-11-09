import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // En développement, toujours utiliser '/' pour éviter les problèmes
  // En production, utiliser '/myportfolio/' pour GitHub Pages
  const base = mode === 'production' ? '/myportfolio/' : '/';
  
  return {
    plugins: [react()],
    base,
    define: {
      'process.env': process.env
    },
    server: {
      port: 5173,
      open: true
    }
  };
});
