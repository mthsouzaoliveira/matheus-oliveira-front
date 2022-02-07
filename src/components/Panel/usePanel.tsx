import { useContext } from "react";
import AppContext from "../../Context/appContext";
import { PanelItemsProps } from "./types";

function usePanel() {
  const { state } = useContext(AppContext);
  const { panel } = state;

  const panelItems: PanelItemsProps[] = [
    {
      title: "Total Confirmed",
      count: panel.TotalConfirmed,
      color: "confirmed",
    },
    {
      title: "Active Cases",
      count: panel.NewConfirmed,
      color: "active",
    },
    {
      title: "Total Recovered",
      count: panel.TotalRecovered,
      color: "recovered",
    },
    {
      title: "Total Deaths",
      count: panel.TotalDeaths,
      color: "deaths",
    },
  ];

  return {
    panel,
    panelItems,
  };
}

export { usePanel };
