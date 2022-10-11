import { createRouter, createWebHistory } from "vue-router";
import CoachesList from "../views/Coaches/CoachesList.vue";
import CoachDetails from "../views/Coaches/CoachDetails.vue";
import CoachRegistration from "../views/Coaches/CoachRegistration.vue";
import RequestsReceived from "../views/Requests/RequestsReceived.vue";
import NotFound from "../views/NotFound.vue";
import ContactCoach from "../views/Requests/ContactCoach.vue";
import UserAuth from "../views/Auth/UserAuth.vue";
import store from "../stores/index.js";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      component: HomeView,
      meta: { requiresAuth: true },
    },
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: CoachesList },
    {
      path: "/coaches/:id",
      component: CoachDetails,
      props: true,
      children: [
        { path: "contact", component: ContactCoach }, // /coaches/c1/contact
      ],
    },
    {
      path: "/register",
      component: CoachRegistration,
      meta: { requiresAuth: true },
    },
    {
      path: "/requests",
      component: RequestsReceived,
      meta: { requiresAuth: true },
    },
    { path: "/auth", component: UserAuth, meta: { requiresUnauth: true } },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

router.beforeEach(function (to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/auth");
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next("/coaches");
  } else {
    next();
  }
});
export default router;
