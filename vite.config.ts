import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve as pathResolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: 8520 },
  plugins: [
    vue(),
    AutoImport({ resolvers: [ElementPlusResolver()] }),
    Components({ resolvers: [ElementPlusResolver()] })
  ],
  resolve: {
    alias: { '@': pathResolve(__dirname, './src') },
    extensions: ['.js', '.vue', 'ts']
  },
  css: { preprocessorOptions: { scss: { additionalData: '@import "@/style/constant.module.scss";' } } }
})
