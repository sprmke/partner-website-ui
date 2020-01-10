import Vue from "vue";
import Router from "vue-router";

// CLIENT VIEW
import ClientView from '@/app/modules/client-view/client-view.vue';
// Home
import HomeContainer from '@/app/modules/client-view/home/containers/home-container/home-container.vue';
// Auth
import AuthContainer from '@/app/modules/client-view/auth/containers/auth-container/auth-container.vue';
import AuthLogin from '@/app/modules/client-view/auth/components/auth-login/auth-login.vue';
import AuthRegister from '@/app/modules/client-view/auth/components/auth-register/auth-register.vue';

// DASHBOARD VIEW
import DashboardView from '@/app/modules/dashboard-view/dashboard-view.vue';
// Jobs
import JobsContainer from '@/app/modules/dashboard-view/jobs/containers/jobs-container/jobs-container.vue';
// Trainings
import TrainingsContainer from '@/app/modules/dashboard-view/trainings/containers/trainings-container/trainings-container.vue';


// Error
import ErrorView from '@/app/modules/error-view/error-view.vue';

import store from '@/app/stores/store';

Vue.use(Router);
const rootTitle = 'Partner Website';

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    // CLIENT VIEW
    {
      path: "/",
      component: ClientView,
      meta: {title: rootTitle},
      children: [
        {
          path: '/',
          name: "Home Container",
          component: HomeContainer,
          meta: {title: rootTitle},
        },
        {
          path: "/login",
          component: AuthContainer,
          meta: {title: rootTitle},
          children: [
            {
              path: '/',
              name: "Auth Login",
              component: AuthLogin,
              meta: {title: `${rootTitle} - Login`},
            },
          ]
        },
        {
          path: "/register",
          component: AuthContainer,
          meta: {title: rootTitle},
          children: [
            {
              path: '/',
              name: "Auth Register",
              component: AuthRegister,
              meta: {title: `${rootTitle} - Register`},
            },
          ]
        },
      ]
    },
    // DASHBOARD VIEW
    {
      path: "/jobs",
      component: DashboardView,
      meta: {title: rootTitle},
      children: [
        {
          path: '/',
          name: "Jobs Container",
          component: JobsContainer,
          meta: {title: `${rootTitle} - Jobs`},
        }
      ]
    },
    {
      path: "/trainings",
      component: DashboardView,
      meta: {title: rootTitle},
      children: [
        {
          path: '/',
          name: "Trainings Container",
          component: TrainingsContainer,
          meta: {title: `${rootTitle} - Trainings`},
        }
      ]
    },
    // ERROR VIEW
    {
      path: "*",
      name: "ErrorView",
      component: ErrorView,
      meta: {title: `${rootTitle} - Page Not Found`},
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ]
});
