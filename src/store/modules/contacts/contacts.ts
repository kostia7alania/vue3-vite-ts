import { IContact, IContacts, IContactsResponse } from './contacts.d';

import { GET } from '@/http';

export const contacts = {
  namespaced: true,
  state: (): IContacts => ({
    CONTACTS: [],
  }),
  mutations: {},
  getters: {},
  actions: {
    GET_CONTACT: async (
      _: IContacts,
      countryId: number,
    ): Promise<Array<IContact>> => {
      const res: IContactsResponse = await GET(
        `api/contacts/?country_id=${countryId}`,
      );
      return res.data;
    },
  },
};
