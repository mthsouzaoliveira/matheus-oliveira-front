import React, { useContext } from "react";
import AppContext from "../../Context/appContext";
import { TableBodyCountryContext } from "./TableBodyCountryContext";
import { TableBodyGlobalContext } from "./TableBodyGlobalContext";

function useTable() {
  const { state } = useContext(AppContext);
  const { countries, countryName, table } = state;

  const switchBodyTable = () => {
    if (countryName === "Global" && countries) {
      return <TableBodyGlobalContext data={countries} />;
    }

    if (table) {
      return <TableBodyCountryContext data={table} />;
    }

    return <div>loading ...</div>;
  };

  return {
    countryName,
    countries,
    table,
    switchBodyTable,
  };
}

export { useTable };
