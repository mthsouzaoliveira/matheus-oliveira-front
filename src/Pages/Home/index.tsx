import React from "react";
import Sidebar from "../../components/Sidebar";
import Main from "../../components/Main";
import Header from "../../components/Header";
import SidebarMobile from "../../components/SidebarMobile";

import { useHome } from "./useHome";

import "./style.css";

function Home() {
  useHome();

  return (
    <div id="page-home">
      <div className="wrapper">
        <SidebarMobile />
        <Header />
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default Home;
