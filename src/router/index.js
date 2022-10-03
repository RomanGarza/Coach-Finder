import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/coaches",
    },
    {
      path: "/coaches",
      name: "Coaches",
      component: null,
    },
    {
      path: "/coach/:id",
      name: "CoachId",
      component: null,
      children: [
        {
          path: "/contact",
          component: null,
        },
      ],
    },
    {
      path: "/register",
      name: "Register",
      component: null,
    },
    {
      path: "/requests",
      name: "Requests",
      component: null,
    },
    {
      path: "/:notFound(.*)",
      component: null,
    },
  ],
});

export default router;
