/*
 * @Description: 路由
 * @Author: wxh
 * @Date: 2019-07-08 16:12:29
 * @LastEditTime: 2019-08-22 14:45:29
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import Router from 'vue-router'
import home from 'page/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      component: home,
    },
  ]
})
