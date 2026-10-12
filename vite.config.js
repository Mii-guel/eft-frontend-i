import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Rutas relativas: funciona tanto en la raíz del dominio como en
  // un subpath de GitHub Pages (https://usuario.github.io/repo/).
  base: './',
  plugins: [react()],
})
