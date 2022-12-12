import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/pages/HomePage.vue"),
    },
    {
      path: "/question",
      component: () => import("@/pages/QuestionPage.vue"),
    },
  ],
});

export default router;
