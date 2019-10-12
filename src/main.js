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
import VueMeta from 'vue-meta'

Vue.use(VueMeta)

Vue.mixin({
  metaInfo: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=2.0, user-scalable=yes' }
    ]
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
