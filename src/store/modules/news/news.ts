import { ActionContext } from 'vuex';

import { IRootState } from '../../store';

type Context = ActionContext<INews, IRootState>;

import { IActions, INews, INew, INewsResponse } from './news.d';

import { GET } from '@/http';
import { i18n } from '@/plugins/i18n';

export const news = {
  namespaced: true,
  // module assets
  state: (): INews => ({
    ARTICLES: [],
    IS_LOADING: false,
  }),
  getters: {
    GETTER_ARTICLE:
      (state: INews) =>
      (id: number | string): INew | object => {
        return state.ARTICLES.find((e) => String(e.id) === String(id)) || {};
      },
    GETTER_LATEST_ARTICLES:
      (state: INews) =>
      (count: number): INew[] => {
        return state.ARTICLES.slice(0, count + 1);
      },
    GETTER_CATEGORIES: (state: INews) => {
      const res = [{ id: 0, title: i18n.global.t('All') }];
      // [{category: { id: 1, title: "Insights"}}, ]

      const news = state.ARTICLES;
      const uniqIds = new Set();

      for (let i = 0; i < news.length; i++) {
        const { category } = news[i];
        const id = String(category);
        if (!uniqIds.has(id)) {
          res.push(category);
          uniqIds.add(id);
        }
      }

      return res;
    },
  },
  mutations: {
    SET_ARTICLES: (state: INews, value: Array<INew>): void => {
      state.ARTICLES = value;
    },
    SET_ARTICLE: (state: INews, value: INew): void => {
      const articleIdx = state.ARTICLES.findIndex((e) => e.id === value.id);
      if (articleIdx !== -1) state.ARTICLES.splice(articleIdx, 1, value);
      else state.ARTICLES.push(value);
    },
    SET_IS_LOADING: (state: INews, value: boolean): void => {
      state.IS_LOADING = value;
    },
  },
  actions: {
    GET_ARTICLES: async ({ commit }: IActions): Promise<Array<INew>> => {
      commit('SET_IS_LOADING', true);
      try {
        const res: INewsResponse = await GET('api/news');
        commit('SET_ARTICLES', res.data);
        return res.data;
      } finally {
        commit('SET_IS_LOADING', false);
      }
    },
    GET_ARTICLE: async (
      { commit }: Context,
      articleId: number,
    ): Promise<void> => {
      commit('SET_IS_LOADING', true);
      try {
        const res: INewsResponse = await GET(`api/news/${articleId}`);
        commit('SET_ARTICLE', res.data);
      } finally {
        commit('SET_IS_LOADING', false);
      }
    },
  },
};
