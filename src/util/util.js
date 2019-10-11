/*
 * @Description: 公用工具
 * @Author: wxh
 * @Date: 2019-08-23 10:14:50
 * @LastEditTime: 2019-08-23 14:20:14
 * @LastEditors: Please set LastEditors
 */
export const Util = {
  formatUrl: (obj) => {
    if (!Util.isObject(obj)) {
      return '';
    }
    let params = Object.keys(obj).reduce((total, key) => {
      return `${total}${key}=${obj[key]}&`;
    }, '?')
    return params.substring(0, params.length - 1);
  },
  isObject: (obj) => {
    return obj !== null && (typeof obj === 'object');
  }
}