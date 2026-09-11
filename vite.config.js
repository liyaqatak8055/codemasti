import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true
  },
  preview: {
    port: 4173
  },
  build: {
    cssMinify: true,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'react-vendor'
            }
            if (id.includes('framer-motion')) {
              return 'framer-motion'
            }
            if (id.includes('lucide-react')) {
              return 'lucide-icons'
            }
            if (id.includes('fuse.js')) {
              return 'search-engine'
            }
          }
          if (id.includes('/src/courseData/frontend/')) {
            if (id.includes('react.js') || id.includes('nextjs.js')) {
              return 'courses-react-next'
            }
            if (id.includes('javascript.js') || id.includes('typescript.js')) {
              return 'courses-js-ts'
            }
            if (id.includes('angular.js') || id.includes('performance.js') || id.includes('git.js')) {
              return 'courses-frameworks'
            }
            return 'courses-web-core'
          }
          if (id.includes('/src/courseData/backend/')) {
            return 'courses-backend'
          }
          if (id.includes('/src/courseData/database/')) {
            return 'courses-database'
          }
          if (id.includes('/src/courseData/interview/')) {
            return 'courses-interview'
          }
          if (id.includes('/src/courseData/programming/')) {
            return 'courses-programming'
          }
          if (id.includes('/src/courseData/projects/')) {
            return 'courses-projects'
          }
        }
      }
    }
  }
})
