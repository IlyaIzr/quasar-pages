const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin");

const PORT = 8000

module.exports = {

  // My stuff
  outputDir: 'build',
  // assetsDir: 'assets',  // or './assets' ??
  filenameHashing: false,
  pages: {
    welcome: {
      // entry for the page
      entry: 'src/welcome/main.js',
      // the source template
      template: 'public/welcome.html',      
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'welcome']
    },
    index: 'src/main.js'
  },
  productionSourceMap: false,

  configureWebpack: {
    entry: {
      index: './src/main.js',
      welcome: path.join(__dirname, './src/welcome/main.js')
    },

    plugins: [
      new HtmlWebPackPlugin({
        template: './public/welcome.html',
        chunks: ['chunk-vendors', 'chunk-common', 'welcome']
      }),
      new HtmlWebPackPlugin({
        template: './public/index.html',
        chunks: ['index']
      }),
    ]
  },



  // Quasar stuff
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  transpileDependencies: [
    'quasar'
  ]
}
