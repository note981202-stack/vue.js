import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/computed",
      name: "ComputedTest",
      component: () => import("../views/ComputedTest.vue"),
    },
    {
      path: "/watch",
      name: "WatchTest",
      component: () => import("../views/WatchTest.vue"),
    },
    {
      path: "/hook",
      name: "LifecycleHook",
      component: () => import("../views/LifecycleHook.vue"),
    },
    {
      path: "/OneComp",
      name: "OneComponentApp",
      component: () => import("../views/OneComponentApp.vue"),
    },
    {
      path: "/ParentComp",
      name: "ParentComponentApp",
      component: () => import("../views/ParentComponentApp.vue"),
    },
    {
      path: "/RootComp",
      name: "RootComp",
      component: () => import("../views/RootComp.vue"),
    },
    {
      path: "/todoList",
      name: "TodoList",
      component: () => import("../views/TodoList.vue"),
    },
  ],
});

export default router;
