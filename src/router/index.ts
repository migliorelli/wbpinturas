import { createRouter, createWebHistory } from "vue-router";
import IndexView from "../views/IndexView.vue";

const routes = [
  {
    path: "/",
    component: IndexView,
    name: "Index",
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
  },
});

export default router;
