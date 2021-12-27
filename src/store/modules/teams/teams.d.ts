import { ICountry } from '../countries/countries.d';

export interface IActions {
  commit: (a: string, b: Array<ITeam>) => void;
}

export interface ITeam {
  id?: number;
  country: ICountry;
  avatar: string;
  name: string;
  surname: string;
  position: string;
  position_description: string;
}

export interface ITeamsResponse {
  data: Array<ITeam>;
}

export interface ITeams {
  TEAMS: Array<ITeam>;
}
