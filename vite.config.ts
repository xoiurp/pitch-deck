import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/postcss'; // Revertendo para o pacote original
import autoprefixer from 'autoprefixer'; // Importar o autoprefixer

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // A configuração do CSS/PostCSS será lida do postcss.config.cjs
})
