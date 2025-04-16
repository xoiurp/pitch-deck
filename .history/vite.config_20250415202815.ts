import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss' // Importa o tailwindcss
import autoprefixer from 'autoprefixer' // Importa o autoprefixer

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss(), // Usa tailwindcss diretamente
        autoprefixer(), // Usa autoprefixer
      ],
    },
  },
})
