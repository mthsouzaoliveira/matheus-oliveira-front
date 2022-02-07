import moment from "moment";
import { useContext, useState } from "react";
import AppContext from "../../Context/appContext";
import { getCountryByDate } from "../../services/api";
import { DateRange } from "./types";

function useTableDateFilter() {
  const { state, setState } = useContext(AppContext);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleClick = async () => {
    const { countrySlug } = state;
    let dateStartFormat = null;
    let dateEndFormat = null;

    if (!endDate) {
      dateStartFormat = moment(startDate).format("YYYY-MM-DDT00:00:00[Z]");
      dateEndFormat = moment(startDate).format("YYYY-MM-DDT23:59:59[Z]");
    }

    if (startDate && endDate) {
      dateStartFormat = moment(startDate).format("YYYY-MM-DDT00:00:00[Z]");
      dateEndFormat = moment(endDate).format("YYYY-MM-DDT23:59:59[Z]");
    }

    if (countrySlug && dateStartFormat && dateEndFormat) {
      const response = await getCountryByDate({
        from: dateStartFormat,
        to: dateEndFormat,
        slug: countrySlug,
      });

      if (response) {
        setState({ ...state, table: response });
      }
    }
  };

  const handleChange = (dates: DateRange) => {
    const { date, query } = dates;

    if (query === "from") {
      setEndDate(date);
    } else if (query === "to") {
      setStartDate(date);
    }
  };

  return {
    handleChange: (dates: DateRange) => {
      handleChange(dates);
    },
    handleClick: () => {
      handleClick();
    },
  };
}

export { useTableDateFilter };
