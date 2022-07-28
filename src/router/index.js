import Vue from "vue";
import VueRouter from "vue-router";

const Main = () => import("../views/Main.vue");
const User = () => import("../views/user");
const Home = () => import("../views/home");
const Mall = () => import("../views/mall");
const Login = () => import("../views/login");
const Page1 = () => import("../views/other/pageOne.vue");
const Page2 = () => import("../views/other/pageTwo.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    redirect: "/home",
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
      {
        path: "/mall",
        name: "mall",
        component: Mall,
      },
      {
        path: "/page1",
        name: "page1",
        component: Page1,
      },
      {
        path: "/page2",
        name: "page2",
        component: Page2,
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

//Uncaught (in promise) NavigationDuplicated解决方案如下
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
