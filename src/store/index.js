import Vue from 'vue';
import Vuex from 'vuex';
import attributeService from '@/services/AttributeService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: undefined,
  },
  mutations: {
    setInitialStats(state, response) {
      state.data = response;
    },
  },
  actions: {
    getInitialStats({ commit }) {
      const response = attributeService.getInitialStats();
      commit('setInitialStats', response);
    },
  },
  modules: {
  },
});
