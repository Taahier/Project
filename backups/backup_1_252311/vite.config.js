import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Force the browser to be Edge
process.env.BROWSER = 'msedge'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
})
