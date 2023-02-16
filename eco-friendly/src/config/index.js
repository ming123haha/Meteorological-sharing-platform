'use strict'

const path=require('path')
module.exports={
    dev:{
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable:{},

        host:'localhost',
        port:8080,
        autoOpenBrowser:true,
        errorOverlay:true,
        notifyOnErrors:true,
        poll:false,

        devtool:'cheap-module-eval-source-map',

        cacheBusting:true,

        cssSourceMap:true
    },



    build: {
// Template for index.html
        index: path.resolve(__dirname, '../test/index.html'),

// Paths
        assetsRoot:path.resolve(__dirname, '../test'),
        assetsSubDirectory:'static',
        assetsPublicPath:'./',

        productionSourceMap:true,
        devtool:'#source-map'

    }
}
