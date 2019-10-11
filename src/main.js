/*
 * @Description: 首页
 * @Author: wxh
 * @Date: 2019-07-08 16:12:29
 * @LastEditTime: 2019-08-22 14:41:53
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
