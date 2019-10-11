
/*
 * @Description: http请求统一处理
 * @Author: wxh
 * @Date: 2019-08-16 15:19:13
 * @LastEditTime: 2019-09-02 15:18:41
 * @LastEditors: Please set LastEditors
 */

import qs from 'qs';
import axios from 'axios';
import {Util} from './util'


import {baseUrl} from 'api/baseUrl'

axios.defaults.baseURL = baseUrl;

//添加请求拦截器
axios.interceptors.request.use(function (config) {
  //在发送请求之前做一些事情
  return config;
}, function (error) {
  //做一些请求错误
  return Promise.reject(error);
});

//添加响应拦截器
axios.interceptors.response.use(function (response) {
  //做一些响应数据
  return response;
}, function (error) {
  //做一些响应错误
  return Promise.reject(error);
});

function formatReq(parameter) {
  let defulatParameter = {
    type: 'GET',
    url: '',
    success: () => {},
    error: () => {},
  }
  let _parameter = Object.assign({}, defulatParameter, parameter);

  // get 请求处理 参数放在链接上
  if(_parameter.type.toUpperCase() === 'GET') {
    _parameter.url = _parameter.url + Util.formatUrl(_parameter.data);
    _parameter.data = null;
  } else {
    _parameter.data = qs.stringify(_parameter.data);
  }

  return new Promise((resolve, reject) => {
    axios({
      method: _parameter.type,
      url: _parameter.url,
      data:  _parameter.data,
    }).then((response) => {
      resolve(_parameter.success(response))
    }).catch((error) => {
      reject(_parameter.error(error))
    })
  });
}

export const Http =  {
  'get': (parameter) => {
    return formatReq(parameter);
  },
  'post': (parameter) => {
    return formatReq(parameter);
  },
};