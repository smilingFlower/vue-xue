/*
 * @Description: webpack配置
 * @Author: wxh
 * @Date: 2019-07-26 10:17:58
 * @LastEditTime: 2019-08-30 15:57:50
 * @LastEditors: Please set LastEditors
 */
const path = require('path');
const glob = require('glob')
function resolve (dir) {
    return path.join(__dirname, dir)
}

function setPages() {
  let entryFiles = glob.sync("src/pages/*/*.js")
  console.info(entryFiles);
  let map = {};

  entryFiles.forEach(filePath => {
    const fileSplit = filePath.split('/');
    const pageName = fileSplit[2];
    const tem = fileSplit.slice(0, 3).join("/");

    let config = {
      entry: filePath,
      // 输入模板
      template: `${tem}/index.html`,
      // 输出模板
      filename: `${pageName}.html`,
    }

    map[pageName] = config;
  })
  return map;
}

module.exports = {
    pages: setPages(),
    lintOnSave: true,
    chainWebpack: (config)=>{
      config.resolve.alias
        .set('@$', resolve('src'))
        .set('assets',resolve('src/assets'))
        .set('components',resolve('src/components'))
        .set('base',resolve('src/base'))
        .set('pages',resolve('src/pages'))
        .set('common',resolve('src/common'))
        .set('util',resolve('src/assets/js/util'))
        .set('api',resolve('src/api'))
    },
    pwa: {
      iconPaths: {
        favicon32: 'favicon.ico',
        favicon16: 'favicon.ico',
        appleTouchIcon: 'favicon.ico',
        maskIcon: 'favicon.ico',
        msTileImage: 'favicon.ico'
      }
    }
}