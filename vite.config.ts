import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'
import glsl from 'vite-plugin-glsl'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    glsl({
      include: ['**/*.glsl', '**/*.vert', '**/*.frag'],
    })
  ],
  server:{
    port:5000,
    open:true,
    cors:true,
    proxy:{
      '/api':{
        target:'http://localhost:5000',
      }
    }
  },
  css:{
    preprocessorOptions:{
      scss:{
        api: 'modern',
      },
    },
  },
  resolve:{
    alias:{
      '@assets':path.resolve(__dirname,'src/assets'),
      '@components':path.resolve(__dirname,'src/components'),
      '@pages':path.resolve(__dirname,'src/pages'),
      '@shaders':path.resolve(__dirname,'src/shaders'),
      '@hooks':path.resolve(__dirname,'src/hooks'),
      '@types':path.resolve(__dirname,'src/types'),
      '@styles':path.resolve(__dirname,'src/styles'),
    }
  },
  build:{
    outDir:'dist',
    assetsDir:'assets',
    sourcemap:true,
    rollupOptions:{
      external:['three'],
      output:{
        manualChunks:{
          three:['three'],
        }
      }
    }
  }
})
