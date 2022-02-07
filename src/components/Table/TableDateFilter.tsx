import React from "react";
import { useTableDateFilter } from "./userTableDateFilter";

import "./style.css";

function TableDateFilter() {
  const { handleChange, handleClick } = useTableDateFilter();
  return (
    <div className="table-filter">
      <div className="date-filter-fields">
        <div className="date-filter-field">
          <div>From</div>
          <input
            onChange={(e) => {
              handleChange({ date: e.target.value, query: "to" });
            }}
            type="date"
          />
        </div>
        <div className="date-filter-field">
          <div>To</div>
          <input
            onChange={(e) => {
              handleChange({ date: e.target.value, query: "from" });
            }}
            type="date"
          />
        </div>
        <div className="date-filter-field">
          <input
            onClick={() => {
              handleClick();
            }}
            value="search"
            type="button"
          />
        </div>
      </div>
    </div>
  );
}

export { TableDateFilter };
