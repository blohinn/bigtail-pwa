import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    accessToken: null,
    resultsViewType: "list"
  },
  mutations: {
    setAccessToken(state, accessToken) {
      state.accessToken = accessToken;
    },
    changeResultsViewType(state, resultsViewType) {
      let availableTypes = ["list", "card"];
      if (availableTypes.includes(resultsViewType)) {
        state.resultsViewType = resultsViewType;
      }
    }
  },
  strict: true
});
