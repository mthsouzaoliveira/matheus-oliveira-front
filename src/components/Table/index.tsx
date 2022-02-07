import React from "react";
import { TableDateFilter } from "./TableDateFilter";
import { useTable } from "./useTable";

import "./style.css";

function Table() {
  const { switchBodyTable, countryName } = useTable();

  return (
    <div className="table">
      {countryName !== "Global" && <TableDateFilter />}
      <div className="table-header">
        {countryName === "Global" && (
          <div className="table-item"> Country </div>
        )}
        <div className="table-item"> Date </div>
        <div className="table-item"> Total Confirmed </div>
        <div className="table-item"> Active Cases </div>
        <div className="table-item"> Total Recovered </div>
        <div className="table-item"> Total Deaths </div>
      </div>

      {switchBodyTable()}
    </div>
  );
}

export { Table };
