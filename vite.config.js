import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // O chunk da cena 3D (~1 MB) contém o Three.js e já é carregado sob demanda
    chunkSizeWarningLimit: 1100,
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
    css: { modules: { classNameStrategy: 'non-scoped' } },
  },
})
