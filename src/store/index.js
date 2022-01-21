import Vue from 'vue';
import Vuex from 'vuex';
import attributeService from '../services/AttributeService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: {},
    selectedCharacter: null,
  },
  getters: {
    fighters: (state) => state.data.characters,
    attributeList: (state) => {
      if (state.data.characters) { return state.data.characters[0].stats.map((s) => s.name); }
      return [];
    },
    selectedCharacter: (state) => state.selectedCharacter,
  },
  mutations: {
    setInitialStats(state, response) {
      state.data = response;
    },
    setSelectedCharacter(state, character) {
      state.selectedCharacter = character;
    },
  },
  actions: {
    async getInitialStats({ commit }) {
      const response = await attributeService.getInitialStats();

      commit('setInitialStats', response);
    },
    selectCharacter({ commit }, character) {
      commit('setSelectedCharacter', character);
    },
  },
  modules: {
  },
});
