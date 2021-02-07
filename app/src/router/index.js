import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
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
    path: "/user/inactif",
    name: "Inactif",
    component: () => import("../views/Inactif.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
