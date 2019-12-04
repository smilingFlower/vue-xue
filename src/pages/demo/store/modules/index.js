
// initial state
const state = {
  list: ['1234'],
};

// getters
const getters = {
  getterList(state) {
    return  state.list;
  }
};

// actions
const actions = {
};

// mutations
const mutations = {
};

// namespaced 属性，限定命名空间
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
