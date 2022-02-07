import { useContext } from "react";
import AppContext from "../../Context/appContext";
import { getCountry } from "../../services/api";

export default function useSelectCountries() {
  const { state, setState } = useContext(AppContext);
  const { countries } = state;

  function handleClick(dataset: DOMStringMap) {
    const { slug } = dataset;

    if (!slug) {
      return;
    }

    getCountry(slug).then((response) => {
      const data = response;
      if (data) {
        const panel = data[data.length - 1];
        const { Active, Deaths, Confirmed, Recovered, Date, Country } = panel;
        setState({
          ...state,
          table: data,
          countryName: Country,
          countrySlug: slug,
          panel: {
            TotalDeaths: Deaths,
            TotalConfirmed: Confirmed,
            TotalRecovered: Recovered,
            NewConfirmed: Active,
            Date,
          },
        });
      }
    });
  }

  function handleChange(value: string) {
    const countriesEl = document.querySelectorAll(".country");
    countriesEl.forEach((country) => {
      const name = country?.textContent;
      if (name && name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
        country.classList.remove("hide");
        country.classList.add("show");
      } else {
        country.classList.remove("show");
        country.classList.add("hide");
      }
    });
  }

  return {
    countries,
    handleChange: (value: string) => {
      handleChange(value);
    },
    handleClick: (event: DOMStringMap) => {
      handleClick(event);
    },
  };
}
