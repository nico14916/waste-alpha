import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
  },
  {
    path: "/form/:waste",
    name: "Form",
    component: () => import("../views/Form.vue"),
  },
  {
    path: "/user/information",
    name: "Info",
    component: () => import("../views/Information.vue"),
  },
  {
    path: "/user/actif",
    name: "Actif",
    component: () => import("../views/Actif.vue"),
  },
  {
    path: "/user/history",
    name: "History",
    component: () => import("../views/History.vue"),
  },
  {
    path: "/connect",
    name: "Connect",
    component: () => import("../views/Connect.vue"),
  },
  {
    path: "/pin",
    name: "PinCheck",
    component: () => import("../views/PinCheck.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (!store.getters.token && to.name != "Connect") {
    return next("/connect");
  } else if (store.getters.status == "connecting" && to.name != "PinCheck") {
    return next("/pin");
  } else if (store.getters.status == "require-info" && to.name != "Profile") {
    return next("/profile");
  }
  return next();
  /*if (to.meta.requiresAuth === true && !store.getters.token) {
    return next('/login');
  } else if (to.meta.requiresAuth === false && store.getters.token) {
    return next('/');
  } else {
    return next();
  }*/
});

export default router;
