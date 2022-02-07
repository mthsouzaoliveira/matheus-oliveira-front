import React, { useContext } from "react";
import AppContext from "../../Context/appContext";
import "./style.css";

function Header() {
  const { state } = useContext(AppContext);
  const { countryName } = state;

  return (
    <header>
      <h1>
        <a href="/">Covid-19</a>
      </h1>
      <div className="current-country">{countryName} Trend</div>
    </header>
  );
}

export default Header;
