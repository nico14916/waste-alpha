import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from 'axios'

import * as VueGoogleMaps from "vue2-google-maps";

import "./theme.scss";
import "./main.scss";

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.$apiUrl = process.env.VUE_APP_API;

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDVELChM5K-JSVlBzs31ZJJHatDmpxY7AE",
    libraries: "places", // necessary for places input
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
