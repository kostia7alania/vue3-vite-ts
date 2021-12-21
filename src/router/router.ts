import { createRouter, createWebHistory } from 'vue-router';

import { routes } from './routes';

import spinner from '@/plugins/spinner';

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
  scrollBehavior: function (to, _from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash, behavior: 'smooth' };
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  },
});

router.beforeEach((to, from, next) => {
  if (to.path) spinner.start();
  next();
});

router.afterEach(() => {
  spinner.done();
});

export { router };
