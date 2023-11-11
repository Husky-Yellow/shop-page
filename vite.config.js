import { loadEnv } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import vue2 from '@vitejs/plugin-vue2';
import { resolve } from 'path';
import resolveExternalsPlugin from 'vite-plugin-resolve-externals'
import viteCompression from 'vite-plugin-compression'

export default (({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const { VITE_NODE_ENV } = env
  const plugins = [
    vue2(),
    legacy({
      targets: ['> 1%', 'last 2 versions', 'not dead', 'iOS >= 9', 'Chrome >= 37']
    }),
    resolveExternalsPlugin({
      axios: 'axios',
    }),
    viteCompression({
      verbose: false, // 是否在控制台中输出压缩结果
      disable: false,
      threshold: 5120, // 如果体积大于阈值，将被压缩，单位为b，体积过小时请不要压缩，以免适得其反
      algorithm: 'gzip', // 压缩算法，可选['gzip'，' brotliccompress '，'deflate '，'deflateRaw']
      ext: '.gz',
      deleteOriginFile: false // 源文件压缩后是否删除
    })
  ]
  return {
    base: '/shop-page/',
    plugins,
    define: {
      EVN: JSON.stringify(VITE_NODE_ENV)
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
      extensions: ['.js', '.vue', '.json'],
    },
    build: {
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          manualChunks(id) {
              if (id.includes('components')) { // 把 components 文件里面的文件都打包到 components.js 中
                  return 'components'
              }
          }
        },
        brotliSize: false, // 不统计
        target: 'esnext',
        minify: 'esbuild' // 混淆器，terser构建后文件体积更小
      }
    }
  }
})
