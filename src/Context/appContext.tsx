import React, { createContext, useMemo, useState } from "react";
import { TypeCountries, TypePanel, TypeCountry } from "../Types";

type DataType = {
  countryName?: string;
  countrySlug?: string;
  panel: TypePanel;
  countries?: TypeCountries[];
  table?: TypeCountry[];
};

type PropsAppContext = {
  state: DataType;
  setState: React.Dispatch<React.SetStateAction<DataType>>;
};

const defaultState = {
  state: {
    countryName: "Global",
    countrySlug: "global",
    panel: {
      Date: "",
      NewConfirmed: 0,
      TotalConfirmed: 0,
      NewDeaths: 0,
      TotalDeaths: 0,
      NewRecovered: 0,
      TotalRecovered: 0,
    },
    countries: [],
    table: [],
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setState: () => {},
};

const AppContext = createContext<PropsAppContext>(defaultState);

const AppContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<DataType>(defaultState.state);
  const value = useMemo(() => ({ state, setState }), [state]);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContextProvider };
export default AppContext;
