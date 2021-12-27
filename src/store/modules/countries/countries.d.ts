export interface IActions {
  commit: (a: string, b: Array<ICountry>) => void;
}

interface ICountry {
  id: number;
  title: string;
}

export interface ICountriesResponse {
  data: Array<ICountry>;
}

export interface ICountries {
  COUNTRIES: Array<ICountry>;
}
