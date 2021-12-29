import { InjectionKey } from 'vue';
import {
  createStore,
  useStore as baseUseStore,
  Store,
  createLogger,
} from 'vuex';

import { isPROD } from '@/runtimeEnv';

// import { auth } from './modules/auth';
import { contacts } from './modules/contacts/';
import { IContacts } from './modules/contacts/contacts.d';
import { countries } from './modules/countries/';
import { ICountries } from './modules/countries/countries.d';
import { news } from './modules/news';
import { INews } from './modules/news/news.d';
import { settings } from './modules/settings';
import { teams } from './modules/teams';
import { ITeams } from './modules/teams/teams.d';

export interface IRootState {
  count?: number;
  teams: ITeams;
  countries: ICountries;
  contacts: IContacts;
  news: INews
}

export const key: InjectionKey<Store<IRootState>> = Symbol();

export const store = createStore<IRootState>({
  strict: !isPROD,
  modules: {
    settings,
    teams,
    countries,
    contacts,
    news
  },
  getters: {},
  mutations: {},
  plugins: isPROD ? [] : [createLogger()],
});

export function useVuex(): Store<IRootState> {
  return baseUseStore(key);
}
