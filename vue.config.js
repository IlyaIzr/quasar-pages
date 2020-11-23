// const path = require('path')
// const HtmlWebPackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

  // My stuff
  outputDir: 'docs',
  // assetsDir: 'rest',  
  // publicPath: '../',             //  turns src='/js' into src='js'
  publicPath: process.env.webpack_path,
  filenameHashing: false,
  pages: {
    welcome: {
      entry: 'src/welcome/main.js',
      template: 'public/welcome.html',
      filename: 'welcomeVue/index.html',
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
      welcome: './src/welcome/main.js'
    },
    // plugins: [
    //   new MiniCssExtractPlugin({
    //     filename: "[name]Vue/[name]Vue.css",
    //     chunkFilename: "css/[id].css"
    //   }),
    // ],

    output: {
      filename: '[name]Vue/[name]Vue.js'
    }
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
