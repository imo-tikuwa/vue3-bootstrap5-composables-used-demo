import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: true
  },
  // vite buildの結果の出力先を「dist → docs」 に書き換える(GitHub Pages用)
  build: {
    outDir: 'docs'
  },
  // assetsのパスについて相対的なパスとするための設定
  base: ''
})
