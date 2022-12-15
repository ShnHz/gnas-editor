import {
  fileURLToPath,
  URL
} from 'node:url'

import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
// import styleImport from 'vite-plugin-style-import'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    AutoImport({
      imports: ['vue', 'vue-router','pinia']
    }),
    // Components({
    //   dirs: ['src/components', 'package/gnas-editor/components'], // 目标文件夹
    //   extensions: ['vue', 'jsx'], // 文件类型
    //   dts: 'src/components.d.ts', // 输出文件，里面都是一些import的组件键值对
    // }),
    vueSetupExtend()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src',
        import.meta.url))
    }
  }
})