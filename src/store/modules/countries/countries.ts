import { IActions, ICountries, ICountry, ICountriesResponse } from './countries.d';

import { GET } from '@/http'; 

export const countries = {
  namespaced: true,
  // module assets
  state: (): ICountries => ({
    COUNTRIES: [],
  }),
  getters: {
    //
  },
  mutations: {
    SET_COUNTRIES: (state: ICountries, value: Array<ICountry>): void => {
      state.COUNTRIES = value;
    },
  },
  actions: {
    GET_COUNTRIES: async ({ commit }: IActions): Promise<Array<ICountry>> => {
      const res: ICountriesResponse = await GET('api/countries');
      commit('SET_COUNTRIES', res.data);
      return res.data;
    },
  },
};
