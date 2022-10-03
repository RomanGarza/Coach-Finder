import { createRouter, createWebHistory } from "vue-router";
import CoachesList from "../views/Coaches/CoachesList.vue";
import CoachDetails from "../views/Coaches/CoachDetails.vue";
import CoachRegistration from "../views/Coaches/CoachRegistration.vue";
import RequestsReceived from "../views/Requests/RequestsReceived.vue";
import NotFound from "../views/NotFound.vue";
import ContactCoach from "../views/Requests/ContactCoach.vue";

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
      component: CoachesList,
    },
    {
      path: "/coach/:id",
      name: "CoachId",
      component: CoachDetails,
      children: [
        {
          path: "/contact",
          component: ContactCoach ,
        },
      ],
    },
    {
      path: "/register",
      name: "Register",
      component: CoachRegistration,
    },
    {
      path: "/requests",
      name: "Requests",
      component: RequestsReceived,
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});

export default router;
