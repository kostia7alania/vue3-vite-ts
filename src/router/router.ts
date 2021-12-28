import { createRouter, createWebHistory } from 'vue-router';

import { APP_TITLE } from '@/runtimeEnv';

import { routes } from './routes';

import { i18n } from '@/plugins/i18n';
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

  const title = i18n.global.t(`title.${String(to.name)}`).replace('title.', '');
  document.title = (title ? title + ' | ' : title) + APP_TITLE;

  next();
});

router.afterEach(() => {
  spinner.done();
});

export { router };
