import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(config => ({
  plugins: [react()],
  esbuild: {
    drop: config.mode !== 'development' ? ['console', 'debugger'] : [],
  },
}))
