import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/about',
    component: () => import('@/views/About.vue'),
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue'),
  },
];

export { routes };
