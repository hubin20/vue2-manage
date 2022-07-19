import Vue from "vue";
import VueRouter from "vue-router";

const Main = () => import("../views/Main.vue");
const User = () => import("../views/user");
const Home = () => import("../views/home");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
    children: [
      {
        path: "/home",
        name: "home",
        component: Home,
      },
      {
        path: "/user",
        name: "user",
        component: User,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
