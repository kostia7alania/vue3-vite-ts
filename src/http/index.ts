import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';

import { API_URL, isPROD } from '@/runtimeEnv';

import { i18n } from '@/plugins/i18n';
// import { useI18n } from 'vue-i18n'

const HTTPClient = axios.create({
  baseURL: API_URL,
});

HTTPClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response?.status === 401 && isPROD) {
      alert('You are not authenticated');
    }
    return Promise.reject(error);
  },
);

HTTPClient.interceptors.request.use(
  (config) => {
    // debugger
    // config.params['blah-defaut-param'] = 'blah-blah-default-value';
    const localeMap = {
      lt: 'ee',
      en: 'en',
    };

    const lang = localeMap[i18n.global.locale] || localeMap.en;

    const params = {
      lang,
    };

    const qs = new URLSearchParams(params);
    config.url += `?${qs}`;
    return config;
  },
  (error) => Promise.reject(error),
);

export const HTTPRequest = (
  options: AxiosRequestConfig,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> => {
  return HTTPClient.request({
    ...options,
    paramsSerializer: (params) => {
      return qs.stringify(params, {
        arrayFormat: 'comma',
        encode: false,
      });
    },
  });
};

export const POST = HTTPClient.post;
export const GET = HTTPClient.get;
