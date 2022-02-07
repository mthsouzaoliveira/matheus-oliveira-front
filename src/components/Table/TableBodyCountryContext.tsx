import React from "react";
import moment from "moment";
import { numberWithDots } from "../../helpers";
import { TableBodyCountryContextProps } from "./types";

function TableBodyCountryContext({ data }: TableBodyCountryContextProps) {
  return (
    <div className="table-body">
      {data &&
        data.map((country) => (
          <div key={country.ID} className="table-rows">
            <div className="table-item">
              {moment(country.Date).utcOffset("+03:00").format("DD/MM/YYYY")}
            </div>
            <div className="table-item confirmed-color">
              {numberWithDots(country.Confirmed)}
            </div>
            <div className="table-item active-color">
              {numberWithDots(country.Active)}
            </div>
            <div className="table-item recovered-color">
              {numberWithDots(country.Recovered)}
            </div>
            <div className="table-item deaths-color">
              {numberWithDots(country.Deaths)}
            </div>
          </div>
        ))}
    </div>
  );
}

export { TableBodyCountryContext };
