import Vue from 'vue';
import Vuex from 'vuex';
import commonStore from './modules/index.js';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    commonStore,
  },
  // strict: true,
});
