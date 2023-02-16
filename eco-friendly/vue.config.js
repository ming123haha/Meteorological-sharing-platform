const { defineConfig } = require('@vue/cli-service')
const path = require("path")
const resolve = dir => path.join(__dirname, dir)
module.exports = defineConfig({
  transpileDependencies: true,
  //publicPath: process.env.NODE_ENV === 'production'  ? '../': '/',
  //项目部署的基础路径
  outputDir: 'eco-friendly1',//将构建好的文件输出到哪里(文件夹名)
  assetsDir: './static', //放置静态资源(js,css,img,fonts)

  // assetsDir:'static',
  //parallel:false,
  publicPath:'./',
})
