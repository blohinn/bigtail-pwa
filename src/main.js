import Vue from "vue";
import VueRouter from "vue-router";
import Cookies from "js-cookie";

import App from "./App.vue";
import Home from "./components/Home";
import ReceiveSaveToken from "./components/auth/ReceiveSaveToken";

import { store } from "./store";

Vue.use(VueRouter);
Vue.prototype.$cookies = Cookies;

var router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/auth",
      component: ReceiveSaveToken
    }
  ],
  mode: "history"
});

new Vue({
  el: "#app",
  store: store,
  router: router,
  render: h => h(App)
});
