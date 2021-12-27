import { IActions, INews, INew, INewsResponse } from './news.d';

import { GET } from '@/http'; 

export const news = {
  namespaced: true,
  // module assets
  state: (): INews => ({
    NEWS: [],
  }),
  getters: {
    //
  },
  mutations: {
    SET_COUNTRIES: (state: INews, value: Array<INew>): void => {
      state.NEWS = value;
    },
  },
  actions: {
    GET_COUNTRIES: async ({ commit }: IActions): Promise<Array<INew>> => {
      const res: INewsResponse = await GET('api/news');
      commit('SET_NEWS', res.data);
      return res.data;
    },
  },
};
