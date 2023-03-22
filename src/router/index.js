import { createRouter, createWebHistory } from "vue-router";
import Collections from "../views/collections.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "collections",
      component: Collections,
    },
    {
      path: "/new_in",
      name: "new_in",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/new_in.vue"),
    },
    {
      path: "/clothing",
      name: "clothing",
      component: () => import("../views/clothing.vue"),
    },
    {
      path: "/accessories",
      name: "accessories",
      component: () => import("../views/accessories.vue"),
    },
    {
      path: "/final_sale",
      name: "final_sale",
      component: () => import("../views/final_sale.vue"),
    },
  ],
});

export default router;
