export type TypeCountryByDate = {
  slug: string;
  from: string;
  to?: string;
};

export type TypePanel = {
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths?: number;
  TotalDeaths: number;
  NewRecovered?: number;
  TotalRecovered?: number;
  Date?: string;
};

export type TypeTable = {
  ID: string;
  Country: string;
  Confirmed: number;
  Deaths: number;
  Recovered: number;
  Active: number;
  Date: string;
};

export type TypeCountries = {
  ID: string;
  Country: string;
  CountryCode: string;
  Slug: string;
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  Date: string;
};

export type TypeCountry = {
  ID: string;
  Country: string;
  CountryCode: string;
  Confirmed: 1;
  Deaths: 0;
  Recovered: 0;
  Active: 1;
  Date: "";
};

export type TypeSummary = {
  Countries: TypeCountries[];
  Global: TypePanel;
};
