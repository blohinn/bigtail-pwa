import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    accessToken: null
  },
  mutations: {
    setAccessToken(state, accessToken) {
      state.accessToken = accessToken;
    }
  },
  strict: true
});