import Vue from "vue";
//import VueRouter, { RouteConfig } from "vue-router";
import VueRouter from 'vue-router'
import Home from "../views/Home.vue";
import AdminPages from '../views/admin/AdminPages.vue'

Vue.use(VueRouter);

//const routes: Array<RouteConfig> = [
  const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: '/admin',
    name: 'adminPages',
    component: AdminPages
  }
];

const router = new VueRouter({
  mode: "history",
  //base: process.env.BASE_URL,
  routes
});

export default router;
