import { createRouter, createWebHistory } from "vue-router";
import CoachesList from "../views/Coaches/CoachesList.vue";
import CoachDetails from "../views/Coaches/CoachDetails.vue";
import CoachRegistration from "../views/Coaches/CoachRegistration.vue";
import RequestsReceived from "../views/Requests/RequestsReceived.vue";
import NotFound from "../views/NotFound.vue";
import ContactCoach from "../views/Requests/ContactCoach.vue";
import UserAuth from "../views/Auth/UserAuth.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetails,
      props: true,
      children: [
        { path: 'contact', component: ContactCoach } // /coaches/c1/contact
      ]
    },
    { path: '/register', component: CoachRegistration },
    { path: '/requests', component: RequestsReceived },
    { path: '/auth', component: UserAuth },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router;
