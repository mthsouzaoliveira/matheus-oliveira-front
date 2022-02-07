import React from "react";
import { slide as Menu } from "react-burger-menu";
import { SelectCountries } from "../SelectCountries";

import "./style.css";

function SidebarMobile() {
  return (
    <Menu right={false}>
      <SelectCountries />
    </Menu>
  );
}

export default SidebarMobile;
