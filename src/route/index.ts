import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
const login = () => import("@/views/login/login.vue");
const layout = () => import("@/views/layout/index.vue");
const home = () => import("@/views/home/index.vue");
const addMenu = () => import("@/views/system/addMenu/index.vue");
const routes = [
  { path: "/login", component: login },
  { path: "/", redirect: "/home" },
  {
    path: "/system",
    children: [
      {
        path: "addMenu",
        component: addMenu,
      },
    ],
  },
  {
    path: "/",
    component: layout,
    children: [
      {
        path: "home",
        component: home,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes, // `routes: routes` 的缩写
});

export default router;
