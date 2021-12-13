import { createApp } from 'vue';
import { START_LOCATION } from 'vue-router';

import { i18n } from './plugins/i18n';
import { router } from './router/router';
import { store, key } from './store/store';

import App from '@/App.vue';
import "@/assets/scss/global.scss";

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

// 4. Install i18n instance to make the whole app i18n-aware
app.use(i18n);
app.use(router);
app.use(store, key);

app.mount('#app');

export { app };
