import { ActionContext } from "vuex";

import { IRootState } from '../../store';

type Context = ActionContext<IContacts, IRootState>;

import { IContact, IContacts, IContactsResponse } from './contacts.d';

import { GET } from '@/http';

export const contacts = {
  namespaced: true,
  state: (): IContacts => ({
    CONTACTS: Array<IContact>(),
  }),
  mutations: {},
  getters: {},
  actions: {
    GET_CONTACT: async (
      state: Context,
      countryId: number,
    ): Promise<Array<IContact>> => {
      const res: IContactsResponse = await GET(
        `api/contacts/?country_id=${countryId}`,
      );
      return res.data;
    },
  },
};
