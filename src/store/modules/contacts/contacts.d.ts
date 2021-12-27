import { ICountry } from '../countries/countries.d';

export interface IActions {
  commit: (a: string, b: Array<IContact>) => void;
}

export interface IContact {
  id?: number;
  country: ICountry;
  title: string;
  email1: string;
  email2: string;
  phone: string;
  address: string;
}

export interface IContactsResponse {
  data: Array<IContact>;
}

export interface IContacts {
  CONTACTS: Array<IContact>;
}
