import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Remover importações não utilizadas, pois são gerenciadas pelo postcss.config.cjs
// import tailwindcss from 'tailwindcss';
// import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // A configuração do CSS/PostCSS será lida do postcss.config.cjs
})
