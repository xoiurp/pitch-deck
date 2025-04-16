import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/postcss'; // Importar o plugin Tailwind
import autoprefixer from 'autoprefixer'; // Importar o autoprefixer

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: { // Adicionar configuração explícita do PostCSS
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
})
