import Vue from 'vue'
// import VueMeta from 'vue-meta'
import App from './layout.vue'

// Vue.use(VueMeta)

// Vue.mixin({
//   metaInfo: {
//     meta: [
//       { charset: 'utf-8' },
//       { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=2.0, user-scalable=yes' }
//     ]
//   }
// })

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
