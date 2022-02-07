import React from "react";
import CountUp from "react-countup";
import { PanelItemsProps } from "./types";

function PanelItem({ title, count, color }: PanelItemsProps) {
  return (
    <div className="panel-item">
      <div className="panel-item-title">{title}</div>
      <div className={`panel-item-count ${color}-color`}>
        <CountUp separator="." delay={2} end={count} />
      </div>
    </div>
  );
}

export { PanelItem };
