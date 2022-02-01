const isDEV = import.meta.env.DEV;
const isPROD = import.meta.env.PROD;
const MODE = import.meta.env.MODE;
const APP_TITLE = import.meta.env.VITE_APP_TITLE;
const API_URL = import.meta.env.VITE_API_URL;
const PHONE = import.meta.env.VITE_PHONE || '+372 609 3450';
const EMAIL = import.meta.env.VITE_EMAIL || 'info@primelightou.com';

// eslint-disable-next-line no-console
console.log('RUNTIME_ENV', {
  isDEV,
  isPROD,
  MODE,
  APP_TITLE,
  API_URL,
  PHONE,
  EMAIL,
});

export { isDEV, isPROD, MODE, APP_TITLE, API_URL, PHONE, EMAIL };
