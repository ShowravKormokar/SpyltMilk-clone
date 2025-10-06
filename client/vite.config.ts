import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import mkcert from 'vite-plugin-mkcert'

// https://vite.dev/config/
export default defineConfig({
  base: '/testing404/', // ✅ add GitHub repo name here
  plugins: [react(), tailwindcss(), mkcert()],
  server: {
    hmr: {
      overlay: false, // disables the error overlay in the browser
    },
  },
})