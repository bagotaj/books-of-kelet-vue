import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import { getAuth } from 'firebase/auth';

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/register',
    name: 'register',
    component: () =>
      import(/* webpackChunkName: "register" */ '../views/RegisterView.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () =>
      import(/* webpackChunkName: "home" */ '../views/HomeView.vue'),
    meta: {
      authRequired: true,
    },
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFoundView',
    component: () =>
      import(/* webpackChunkName: "home" */ '../views/NotFoundView.vue'),
    meta: {
      authRequired: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const auth = getAuth();

  if (to.matched.some((record) => record.meta.authRequired)) {
    let user = auth.currentUser;

    if (user) {
      const loggedinContainerContent = document.querySelector('.content');
      if (user.displayName !== null) {
        loggedinContainerContent.textContent = `Belépve: ${user.displayName}!`;
      }
      next();
    } else {
      alert('Be kell jelentkezned, hogy láthasd az oldalt');
      router.push('/');
    }
  } else {
    next();
  }
});

export default router;
