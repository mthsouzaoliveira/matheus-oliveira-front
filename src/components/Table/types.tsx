import { TypeCountries, TypeCountry } from "../../Types";

export type DateRange = {
  date: string;
  query: string;
};

export type TableBodyGlobalContextProps = {
  data: TypeCountries[];
};

export type TableBodyCountryContextProps = {
  data: TypeCountry[];
};
