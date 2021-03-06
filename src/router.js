import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import NotFound from "./views/NotFound.vue";
import Device from "./views/Device.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/device",
      name: "device",
      component: Device
    },
    {
      path: "*",
      name: "not-found",
      component: NotFound
    }
  ]
});
