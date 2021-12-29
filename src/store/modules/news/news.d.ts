import { ICountry } from '../countries/countries.d';

export interface IActions {
  commit: (a: string, b: Array<INew> | boolean) => void;
}

type TType = 'image_container' | 'image_fullscreen' | 'text_only';

interface IContent {
  text?: string;
  image?: string;
}

interface IContents {
  sort: number;
  type: TType;
  content: IContent;
}

interface INew {
  id: number;
  title: string;
  cover: string;
  publish_at: string;
  content: Array<IContents>;
  category: ICountry;
}

export interface INewsResponse {
  data: Array<INew>;
}

export interface INews {
  ARTICLES: Array<INew>;
  IS_LOADING: boolean;
}
