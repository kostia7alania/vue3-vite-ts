import { createApp } from 'vue';
import { START_LOCATION } from 'vue-router';
import VueUniversalModal from 'vue-universal-modal';
import 'vue-universal-modal/dist/index.css';

import { i18n } from './plugins/i18n';
import { router } from './router/router';
import { store, key } from './store/store';

import App from '@/App.vue';
import { vClickOutside } from '@/directives/vClickOutside';
import '@/assets/scss/global.scss';

import 'vite-plugin-svg-icons/register';

router.beforeEach(async (to, from, next) => {
  if (from === START_LOCATION) {
    try {
    } catch (error) {}
  }
  next();
});

// 3. Create a vue root instance
const app = createApp(App);

// declare module '@vue/runtime-core' {
//   interface ComponentCustomProperties {
//     $config: Record<string, unknown>;
//   }
// }

// app.config.globalProperties.$formatDate =

// 4. Install i18n instance to make the whole app i18n-aware
app.use(i18n);
app.use(router);
app.use(store, key);
app.use(VueUniversalModal, {
  teleportTarget: '#my-modals',
  modalComponent: 'MyModal',
});

app.directive('click-outside', vClickOutside);

app.mount('#app');

export { app };
