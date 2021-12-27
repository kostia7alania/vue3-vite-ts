import { IActions, ITeams, ITeam, ITeamsResponse } from './teams.d';

import { GET } from '@/http';

export const teams = {
  namespaced: true,
  // module assets
  state: (): ITeams => ({
    TEAMS: [],
  }),
  getters: {
    //
  },
  mutations: {
    SET_TEAMS: (state: ITeams, value: Array<ITeam>): void => {
      state.TEAMS = value;
    },
  },
  actions: {
    GET_TEAMS: async ({ commit }: IActions): Promise<Array<ITeam>> => {
      const res: ITeamsResponse = await GET('api/teams');
      commit('SET_TEAMS', res.data);
      return res.data;
    },
  },
};
