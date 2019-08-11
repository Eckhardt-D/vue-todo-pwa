import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEllipsisH,
  faClock,
  faCheck,
  faCheckSquare,
  faPlus,
  faBars
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faEllipsisH);
library.add(faClock);
library.add(faCheck);
library.add(faCheckSquare);
library.add(faPlus);
library.add(faBars);

Vue.component("v-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
