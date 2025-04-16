import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/postcss'; // Revertendo para o pacote original
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
