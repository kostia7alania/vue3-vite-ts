import { ActionContext } from 'vuex';

import { IRootState } from '../../store';

type Context = ActionContext<IContacts, IRootState>;

import { IContact, IContacts, IContactsResponse } from './contacts.d';

import { GET, POST } from '@/http';
interface ISetContact {
  data: IContact;
  countryId: number;
}

export const contacts = {
  namespaced: true,
  state: (): IContacts => ({
    CONTACTS: {}, // Array<IContact>(),
  }),
  mutations: {
    SET_CONTACT: (state: IContacts, { countryId, data }: ISetContact) => {
      // @ts-ignore
      state.CONTACTS[String(countryId)] = data;
    },
  },
  getters: {
    GETTER_CONTACTS: (state: IContacts) => {
      return Object.values(state.CONTACTS).map(e=>e[0].country)
    },
    GETTER_CONTACT_BY_ID: (state: IContacts) => (countryId:number) => {
      return state.CONTACTS[countryId]
    },
  },
  actions: {
    GET_CONTACT_BY_COUNTRY: async (
      { commit }: Context,
      countryId: number,
    ): Promise<Array<IContact>> => {
      const res: IContactsResponse = await GET(
        `api/contacts/?country_id=${countryId}`,
      );
      if (res.data.length) commit('SET_CONTACT', { countryId, data: res.data });
      return res.data;
    },
    // @ts-ignore
    POST_CONTACTS: async (_, data): Promise<Array<IContact>> => {
      const res: IContactsResponse = await POST(`api/feedback`, data);
      return res.data;
    },
  },
};
