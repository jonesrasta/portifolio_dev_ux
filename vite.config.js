import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  chainWebpack: config => {
config.module
  .rule("pdf")
  .test(/\.pdf$/)
  .use("file-loader")
  .loader("file-loader");
}
});

