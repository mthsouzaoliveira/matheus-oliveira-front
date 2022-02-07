import React from "react";
import { PanelItem } from "./PanelItem";
import { usePanel } from "./usePanel";

import "./style.css";

function Panel() {
  const { panelItems, panel } = usePanel();

  if (!panel) {
    return <div> loading... </div>;
  }

  return (
    <div className="panel">
      {panelItems && panelItems.map((item) => <PanelItem {...item} />)}
    </div>
  );
}

export { Panel };
