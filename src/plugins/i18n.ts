import { createI18n } from 'vue-i18n';

// About the below import
// See https://github.com/intlify/vite-plugin-vue-i18n#static-bundle-importing
// import messages from '@intlify/vite-plugin-vue-i18n/messages'
import en from '@/locales/en.json';
import lt from '@/locales/lt.json';

// 1. Ready translated locale messages
// The structure of the locale message is the hierarchical object structure with each locale as the top property
const messages = {
  en: en,
  lt: lt,
};

export const i18n = createI18n({
  // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
  // legacy: true,
  locale: 'en',
  fallbackLocale: 'en', // set fallback locale
  globalInjection: true,
  messages,
});
