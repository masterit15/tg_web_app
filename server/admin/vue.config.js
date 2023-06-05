const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath: '/admin/',
  devServer: {
    port: '8081'
    // proxy: 'http://localhost:5000/'
  }
})
