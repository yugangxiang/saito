'use strict'
const path = require('path')
function resolve(dir) {
   return path.join(__dirname, dir)
}
const port = process.env.port || process.env.npm_config_port || 8081
module.exports = {
   publicPath: '/',
   outputDir: 'dist',
   assetsDir: 'static',
   lintOnSave: false,
   productionSourceMap: false,
   devServer: {
      port: port,
      open: true,
      overlay: {
         warnings: false,
         errors: true
      },
      proxy: {
         '/apis': {
            target: 'http://120.24.23.173:7001',
            pathRewrite: { '^/apis': '' },
            changeOrigin: true,
            secure: false,
         }
      }
   },
   configureWebpack: {
      resolve: {
         alias: {
            '@': resolve('src')
         }
      }
   },
   css: {
      loaderOptions: {
         less: {
            modifyVars: {
               hack: `true; @import "~@/assets/css/light.less";`,
            },
            javascriptEnabled: true,
         },
      },
   },

   chainWebpack(config) {
      config.plugins.delete('preload')
      config.plugins.delete('prefetch')
      config.resolve.symlinks(true)
      config.module
         .rule('vue')
         .use('vue-loader')
         .loader('vue-loader')
         .tap(options => {
            options.compilerOptions.preserveWhitespace = true
            return options
         })
         .end()

      config
         .when(process.env.NODE_ENV === 'development',
            config => config.devtool('cheap-source-map')
         )

      config
         .when(process.env.NODE_ENV !== 'development',
            config => {
               config
                  .plugin('ScriptExtHtmlWebpackPlugin')
                  .after('html')
                  .use('script-ext-html-webpack-plugin', [{
                     inline: /runtime\..*\.js$/
                  }])
                  .end()
               config
                  .optimization.splitChunks({
                     chunks: 'all',
                     cacheGroups: {
                        libs: {
                           name: 'chunk-libs',
                           test: /[\\/]node_modules[\\/]/,
                           priority: 10,
                           chunks: 'initial'
                        },
                        elementUI: {
                           name: 'chunk-elementUI',
                           priority: 20,
                           test: /[\\/]node_modules[\\/]_?element-ui(.*)/
                        },
                        commons: {
                           name: 'chunk-commons',
                           test: resolve('src/components'),
                           minChunks: 3,
                           priority: 5,
                           reuseExistingChunk: true
                        }
                     }
                  })
               config.optimization.runtimeChunk('single')
            }
         )
   }
}
