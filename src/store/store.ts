import { InjectionKey } from 'vue';
import {
  createStore,
  useStore as baseUseStore,
  Store,
  createLogger,
} from 'vuex';

import { isPROD } from '@/runtimeEnv';

// import { auth } from './modules/auth';
import { settings } from './modules/settings';

export interface IRootState {
  count?: number;
}

export const key: InjectionKey<Store<IRootState>> = Symbol();

export const store = createStore<IRootState>({
  strict: !isPROD,
  modules: {
    settings,
  },
  state: {},
  getters: {},
  mutations: {},
  plugins: isPROD ? [] : [createLogger()],
});

export function useVuex(): Store<IRootState> {
  return baseUseStore(key);
}
