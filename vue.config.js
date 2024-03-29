// 增加环境变量
process.env.VUE_APP_COPYRIGHT =
  '版权所有：尼古拉斯·老李 | 用代码改变世界 Powered by .NET Core 3.0.0 on Linux'
process.env.VUE_APP_BUILD_TIME = require('dayjs')().format('YYYYMDHHmmss')
process.env.VUE_APP_VERSION = require('./package.json').version

const path = require('path')
module.exports = {
  devServer: {
    port: 6220
  },
  publicPath: '/docs/ui',
  transpileDependencies: ['nm-lib-.*', 'element-ui'],
  configureWebpack: {
    resolve: {
      // 配置解析别名
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@api': path.resolve(__dirname, './src/api'),
        '@views': path.resolve(__dirname, './src/views'),
        vue$: 'vue/dist/vue.common'
      }
    },
    module: {
      rules: [
        {
          test: /^demo.vue$/,
          use: 'raw-loader'
        }
      ]
    }
  },
  chainWebpack: config => {
    /**
     * 删除懒加载模块的 prefetch preload，降低带宽压力
     * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#prefetch
     * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#preload
     * 而且预渲染时生成的 prefetch 标签是 modern 版本的，低版本浏览器是不需要的
     */
    config.plugins.delete('prefetch').delete('preload')
  }
}
