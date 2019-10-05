import React from "react";

import Header from "./components/header";
import DropdownsBar from "./components/dropdowns_bar";

const NavigationBar = () => (
  <nav className="navbar navbar-header navbar-default">
    <Header />
    <DropdownsBar />
  </nav>
);

export default NavigationBar;
