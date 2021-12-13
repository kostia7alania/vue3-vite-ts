import { IActions, ILogin, ILoginInfo, IAuth } from './auth.d';

import { POST } from '@/http';

export const auth = {
  namespaced: true,
  // module assets
  state: (): IAuth => ({
    LOGIN_INFO: {},
  }),
  getters: {
    //
  },
  mutations: {
    SET_LOGIN_INFO: (state: IAuth, value: ILoginInfo): void => {
      state.LOGIN_INFO = value;
    },
  },
  actions: {
    LOGIN: async (
      { commit }: IActions,
      { username, password }: ILogin,
    ): Promise<ILoginInfo> => {
      const res: ILoginInfo = await POST('api/users/authenticate', {
        username,
        password,
      });
      commit('SET_LOGIN_INFO', res);
      return res;
    },
  },
};
