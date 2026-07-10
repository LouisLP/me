import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  define: {
    // "Last updated" in the footer — the moment the site was built
    __BUILD_DATE__: JSON.stringify(new Date().toISOString()),
  },
  plugins: [
    vue(),
    vueDevTools(),
    // Iconify icons compiled in at build time — import from ~icons/<set>/<name>
    Icons({ compiler: 'vue3' }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
