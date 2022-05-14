import { defineConfig } from 'vite'
import ViteRadar from 'vite-plugin-radar'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/learnLists/',
  plugins: [
    react(),
    ViteRadar({
      // Google Analytics tag injection
      analytics: {
        id: 'G-NV4EQC73DY',
      },
    })
  ]
})
