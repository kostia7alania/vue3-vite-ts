import { RouteRecordRaw } from 'vue-router';

const MainLayout = () => import('@/layouts/MainLayout.vue');

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'main',
    component: MainLayout,
    redirect: { name: 'main-page' },
    children: [
      {
        name: 'main-page',
        path: '/main-page',
        component: () => import('@/views/Services.vue'),
      },
      {
        name: 'services',
        path: '/services',
        component: () => import('@/views/Services2.vue'),
      },
      {
        name: 'company',
        path: '/company',
        component: () => import('@/views/Company.vue'),
      },
      {
        name: 'team',
        path: '/team',
        component: () => import('@/views/Team.vue'),
      },
      {
        name: 'careers',
        path: '/careers',
        component: () => import('@/views/Careers.vue'),
      },
      {
        name: 'articles',
        path: '/articles',
        component: () => import('@/views/Articles.vue'),
      },
      {
        name: 'contact',
        path: '/contact',
        component: () => import('@/views/Contact.vue'),
      },
      {
        name: 'financing',
        path: '/financing',
        component: () => import('@/views/Financing.vue'),
      },
      
    ],
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue'),
  },
];

export { routes };
