/*
 * @Description: 域名
 * @Author: wxh
 * @Date: 2019-08-30 15:21:47
 * @LastEditTime: 2019-09-04 15:28:04
 * @LastEditors: Please set LastEditors
 */
let _baseUrl = '';
if (process.env.NODE_ENV === 'development') { // 开发
  _baseUrl = 'https://mockapi.eolinker.com/'
} else if(process.env.NODE_ENV === 'test'){ // 测试环境
  _baseUrl = 'https://test.com/'
} else {
  _baseUrl = 'https://string.com/'  // 生产环境
}

export const baseUrl = _baseUrl;