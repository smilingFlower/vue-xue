/*
 * @Description: webpack配置
 * @Author: wxh
 * @Date: 2019-07-26 10:17:58
 * @LastEditTime: 2019-08-30 15:57:50
 * @LastEditors: Please set LastEditors
 */
const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: true,
    chainWebpack: (config)=>{
      config.resolve.alias
        .set('@$', resolve('src'))
        .set('assets',resolve('src/assets'))
        .set('components',resolve('src/components'))
        .set('base',resolve('src/base'))
        .set('page',resolve('src/page'))
        .set('common',resolve('src/common'))
        .set('util',resolve('src/util'))
        .set('api',resolve('src/api'))
    }
}