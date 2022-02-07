import { useContext, useEffect } from "react";
import AppContext from "../../Context/appContext";
import { getSummary } from "../../services/api";

function useHome() {
  const { state, setState } = useContext(AppContext);

  useEffect(() => {
    getSummary().then((response) => {
      const countries = response?.Countries;
      const panel = response?.Global;
      if (countries && panel) setState({ ...state, panel, countries });
    });
  }, []);
}

export { useHome };
