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
  },
  debounce: (func, delay) => {
    let timerOut;
    return function () {
      if (timerOut) {
        clearTimeout(timerOut)
      }
      timerOut = setTimeout(func, delay)
      console.log(this);
    }
  },
}

// export const debounce = (func, delay) => {
//   let timer
//   // console.log(this)
//   return function (...args) {
//     if (timer) {
//       clearTimeout(timer)
//     }
//     timer = setTimeout(() => {
//       // console.log(this) 
//       func.apply(this, args)

//     }, delay)
//     console.log(timer)
//   }
// }