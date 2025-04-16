import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Removido: import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import tailwindcssPostcss from '@tailwindcss/postcss' // Importa o plugin correto

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcssPostcss(), // Usa o plugin importado
        autoprefixer(),
      ],
    },
  },
})
