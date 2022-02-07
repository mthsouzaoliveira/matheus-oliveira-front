/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line jsx-a11y/anchor-is-valid

import React from "react";
import { numberWithDots } from "../../helpers";
import useSelectCountries from "./useSelectCountries";

import "./style.css";

function SelectCountries() {
  const { countries, handleChange, handleClick } = useSelectCountries();

  return (
    <>
      <div className="search-field">
        <input
          id="search"
          onChange={(event) => handleChange(event.currentTarget.value)}
          type="text"
          defaultValue=""
          placeholder="Search Country..."
        />
      </div>

      <div className="countries">
        {countries &&
          countries.map((country) => (
            <div key={country.ID} className="country">
              <a
                href="#"
                data-name={country.Country}
                data-slug={country.Slug}
                onClick={(event) => handleClick(event.currentTarget.dataset)}
                className="country-name"
              >
                {country.Country}
              </a>
              <div className="country-count deaths-color">
                {numberWithDots(country.TotalDeaths)}
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export { SelectCountries };
