import React from "react";
import moment from "moment";
import { numberWithDots } from "../../helpers";
import { TableBodyGlobalContextProps } from "./types";

function TableBodyGlobalContext({ data }: TableBodyGlobalContextProps) {
  return (
    <div className="table-body">
      {data &&
        data.map((country) => (
          <div key={country.ID} className="table-rows">
            <div className="table-item">{country.Country}</div>
            <div className="table-item">
              {moment(country.Date).format("MM/DD/YYYY")}
            </div>
            <div className="table-item confirmed-color">
              {numberWithDots(country.TotalConfirmed)}
            </div>
            <div className="table-item active-color">
              {numberWithDots(country.NewConfirmed)}
            </div>
            <div className="table-item recovered-color">
              {numberWithDots(country.TotalRecovered)}
            </div>
            <div className="table-item deaths-color">
              {numberWithDots(country.TotalDeaths)}
            </div>
          </div>
        ))}
    </div>
  );
}

export { TableBodyGlobalContext };
